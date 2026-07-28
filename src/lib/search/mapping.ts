/* The ONLY module that knows the shape of an Algolia record.
 *
 * The index is built by the Algolia DocSearch crawler, so records are assumed
 * to follow the standard DocSearch schema:
 *
 *   objectID          string
 *   url               string   absolute URL of the page (may carry a #anchor)
 *   anchor            string   heading id, when the record is a sub-section
 *   type              string   "lvl0".."lvl6" | "content"
 *   content           string   body text, null on hierarchy records
 *   hierarchy.lvl0..6 string   lvl0 is the section, deeper levels are headings
 *   _highlightResult.hierarchy.lvlN.value
 *   _highlightResult.content.value
 *   _snippetResult.content.value
 *
 * Every one of those is read defensively. If the real index turns out to
 * differ, this file is the only one that has to change. */

/* Sentinels rather than real <mark> tags: the raw highlighted string is
 * HTML-escaped by us before the sentinels are swapped for markup, so nothing
 * Algolia returns can inject elements into the page. */
export const HIGHLIGHT_PRE_TAG = '__db_hl_open__';
export const HIGHLIGHT_POST_TAG = '__db_hl_close__';

/** Query-time parameters. Shape assumptions live here too. */
export const SEARCH_PARAMETERS = {
	hitsPerPage: 20,
	attributesToSnippet: ['content:24'],
	snippetEllipsisText: '…',
	highlightPreTag: HIGHLIGHT_PRE_TAG,
	highlightPostTag: HIGHLIGHT_POST_TAG
};

type HighlightValue = { value?: string | null } | undefined | null;

/** A record as it comes back from Algolia. Everything is optional on purpose. */
export type RawHit = {
	objectID?: string;
	url?: string | null;
	anchor?: string | null;
	type?: string | null;
	title?: string | null;
	content?: string | null;
	hierarchy?: Record<string, string | null | undefined> | null;
	_highlightResult?: {
		hierarchy?: Record<string, HighlightValue> | null;
		content?: HighlightValue;
	} | null;
	_snippetResult?: {
		content?: HighlightValue;
	} | null;
};

/** A record after mapping — the only shape the UI knows about. */
export type SearchResult = {
	id: string;
	href: string;
	/** Group heading, from hierarchy.lvl0. */
	section: string;
	/** Deepest heading, as escaped HTML with <mark> around matches. */
	titleHtml: string;
	/** Same, as plain text — used for aria labels. */
	titleText: string;
	/** Headings between the section and the title, e.g. "Usage › Props". */
	breadcrumb: string;
	/** Matching body text, escaped HTML with <mark>. Empty when there is none. */
	snippetHtml: string;
};

export type ResultGroup = {
	section: string;
	results: SearchResult[];
};

const LEVELS = ['lvl0', 'lvl1', 'lvl2', 'lvl3', 'lvl4', 'lvl5', 'lvl6'] as const;

const FALLBACK_SECTION = 'Documentation';

function escapeHtml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

/** Escapes the whole string, then turns our sentinels into <mark> elements. */
function renderHighlight(value: string): string {
	return escapeHtml(value)
		.split(escapeHtml(HIGHLIGHT_PRE_TAG))
		.join('<mark>')
		.split(escapeHtml(HIGHLIGHT_POST_TAG))
		.join('</mark>');
}

function stripSentinels(value: string): string {
	return value.split(HIGHLIGHT_PRE_TAG).join('').split(HIGHLIGHT_POST_TAG).join('');
}

function text(value: unknown): string {
	return typeof value === 'string' ? value.trim() : '';
}

function highlighted(value: HighlightValue): string {
	return text(value?.value);
}

/** Absolute crawler URLs become site-relative so links stay client-side navigations. */
function toInternalHref(url: string, anchor: string): string {
	let href = url;

	try {
		/* The base only matters for relative URLs; either way we keep just the
		 * path, so a crawler pointed at any host still yields internal links. */
		const parsed = new URL(url, 'https://docs.invalid');
		href = `${parsed.pathname}${parsed.search}${parsed.hash}`;
	} catch {
		/* Not parseable — fall through and use it verbatim. */
	}

	if (!href.startsWith('/')) href = `/${href}`;
	if (anchor && !href.includes('#')) href = `${href}#${anchor}`;

	return href;
}

export function mapHit(hit: RawHit, index: number): SearchResult {
	const hierarchy = hit.hierarchy ?? {};
	const highlightedHierarchy = hit._highlightResult?.hierarchy ?? {};

	const levels = LEVELS.map((level) => ({
		level,
		value: text(hierarchy[level]),
		html: highlighted(highlightedHierarchy[level])
	})).filter((entry) => entry.value !== '');

	const section = levels[0]?.value || text(hit.title) || FALLBACK_SECTION;
	const deepest = levels[levels.length - 1];

	/* A "content" record's own title is its deepest heading; a heading record's
	 * title is that heading. Both collapse to the same rule. */
	const titleText = deepest?.value || text(hit.title) || section;
	const titleHtml = deepest?.html
		? renderHighlight(deepest.html)
		: escapeHtml(titleText);

	const breadcrumb = levels
		.slice(1, Math.max(1, levels.length - 1))
		.map((entry) => entry.value)
		.join(' › ');

	/* Prefer the snippet (short, centred on the match) over the full
	 * highlighted body, and fall back to raw content with no highlighting. */
	const snippetSource =
		highlighted(hit._snippetResult?.content) || highlighted(hit._highlightResult?.content);
	const snippetHtml = snippetSource
		? renderHighlight(snippetSource)
		: escapeHtml(text(hit.content).slice(0, 180));

	return {
		id: text(hit.objectID) || `hit-${index}`,
		href: toInternalHref(text(hit.url), text(hit.anchor)),
		section: stripSentinels(section),
		titleHtml,
		titleText: stripSentinels(titleText),
		breadcrumb: stripSentinels(breadcrumb),
		/* A snippet identical to the title is noise. */
		snippetHtml: stripSentinels(snippetSource) === titleText ? '' : snippetHtml
	};
}

/** Groups by section, keeping Algolia's relevance order within and across groups. */
export function groupResults(hits: RawHit[]): ResultGroup[] {
	const groups: ResultGroup[] = [];
	const bySection = new Map<string, ResultGroup>();

	hits.forEach((hit, index) => {
		const result = mapHit(hit, index);
		let group = bySection.get(result.section);

		if (!group) {
			group = { section: result.section, results: [] };
			bySection.set(result.section, group);
			groups.push(group);
		}

		group.results.push(result);
	});

	return groups;
}
