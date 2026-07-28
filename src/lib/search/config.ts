/* Algolia credentials, read from SvelteKit's build-time public env.
 *
 * Deliberately a namespace import: `$env/static/public` only exports the
 * PUBLIC_ vars that actually exist, so a named import of a var that is unset
 * is a *build* error. Anyone who clones this repo without a `.env` should get
 * a working site with search switched off, not a build that refuses to run. */
import * as publicEnv from '$env/static/public';

const env = publicEnv as unknown as Record<string, string | undefined>;

function read(name: string): string {
	return (env[name] ?? '').trim();
}

export const ALGOLIA_APP_ID = read('PUBLIC_ALGOLIA_APP_ID');
export const ALGOLIA_SEARCH_KEY = read('PUBLIC_ALGOLIA_SEARCH_KEY');
export const ALGOLIA_INDEX = read('PUBLIC_ALGOLIA_INDEX');

/** Names of the vars that are missing, in the order they appear in .env.example. */
export const missingSearchConfig: string[] = [
	['PUBLIC_ALGOLIA_APP_ID', ALGOLIA_APP_ID],
	['PUBLIC_ALGOLIA_SEARCH_KEY', ALGOLIA_SEARCH_KEY],
	['PUBLIC_ALGOLIA_INDEX', ALGOLIA_INDEX]
]
	.filter(([, value]) => value === '')
	.map(([name]) => name);

export const searchConfigured = missingSearchConfig.length === 0;

let warned = false;

/** Logs exactly one console warning per page load, and only in the browser. */
export function warnIfUnconfigured() {
	if (searchConfigured || warned) return;
	warned = true;
	console.warn(
		`[deskblocks-docs] Search is disabled: missing ${missingSearchConfig.join(', ')}. ` +
			`Copy .env.example to .env and fill in the Algolia Search-Only key to enable it.`
	);
}
