/* Thin wrapper around the Algolia lite client.
 *
 * `algoliasearch/lite` is the search-only build — no indexing/admin surface, so
 * nothing that needs an Admin key can be reached from the browser bundle. */
import type { LiteClient } from 'algoliasearch/lite';
import {
	ALGOLIA_APP_ID,
	ALGOLIA_INDEX,
	ALGOLIA_SEARCH_KEY,
	searchConfigured
} from './config.js';
import { SEARCH_PARAMETERS, type RawHit } from './mapping.js';

let client: LiteClient | null = null;

/* Imported on demand so the client never lands in the root layout chunk —
 * most visitors never open search, and this is a docs site for a shipped
 * component library. */
async function getClient(): Promise<LiteClient | null> {
	if (!searchConfigured) return null;

	if (!client) {
		const { liteClient } = await import('algoliasearch/lite');
		client = liteClient(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);
	}

	return client;
}

/** Warms the dynamic import when the dialog opens, so the first keystroke is not slower. */
export function preloadSearchClient(): void {
	void getClient().catch(() => {
		/* A failed preload is not interesting; the real search reports errors. */
	});
}

export type SearchResponse = {
	hits: RawHit[];
	/** Total matches Algolia reports, which can exceed hits.length. */
	total: number;
};

/**
 * Runs one query. Throws on transport/API failures so the caller can show its
 * error state; a legitimately empty index resolves with `hits: []`.
 */
export async function searchDocs(query: string): Promise<SearchResponse> {
	const algolia = await getClient();

	if (!algolia) {
		throw new Error('Algolia search is not configured.');
	}

	const response = await algolia.search({
		requests: [{ indexName: ALGOLIA_INDEX, query, ...SEARCH_PARAMETERS }]
	});

	const first = response.results[0] as { hits?: RawHit[]; nbHits?: number } | undefined;
	const hits = first?.hits ?? [];

	return { hits, total: typeof first?.nbHits === 'number' ? first.nbHits : hits.length };
}
