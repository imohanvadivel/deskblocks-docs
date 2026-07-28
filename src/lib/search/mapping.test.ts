import { describe, it, expect } from 'vitest';
import {
	HIGHLIGHT_POST_TAG,
	HIGHLIGHT_PRE_TAG,
	groupResults,
	mapHit,
	type RawHit
} from './mapping.js';

const hl = (value: string) => `${HIGHLIGHT_PRE_TAG}${value}${HIGHLIGHT_POST_TAG}`;

/* A content record as the DocSearch crawler emits them. The index is empty
 * today, so these fixtures are the only exercise the mapping gets. */
const contentHit: RawHit = {
	objectID: 'abc123',
	url: 'https://deskblocks.pages.dev/components/button#variants',
	anchor: 'variants',
	type: 'content',
	content: 'Buttons come in primary, secondary and ghost variants.',
	hierarchy: {
		lvl0: 'Components',
		lvl1: 'Button',
		lvl2: 'Usage',
		lvl3: 'Variants',
		lvl4: null,
		lvl5: null,
		lvl6: null
	},
	_highlightResult: {
		hierarchy: {
			lvl0: { value: 'Components' },
			lvl1: { value: hl('Button') },
			lvl2: { value: 'Usage' },
			lvl3: { value: 'Variants' }
		},
		content: { value: `${hl('Buttons')} come in primary, secondary and ghost variants.` }
	},
	_snippetResult: {
		content: { value: `${hl('Buttons')} come in primary…` }
	}
};

describe('mapHit', () => {
	it('maps a DocSearch content record', () => {
		const result = mapHit(contentHit, 0);

		expect(result.id).toBe('abc123');
		expect(result.section).toBe('Components');
		expect(result.titleText).toBe('Variants');
		expect(result.breadcrumb).toBe('Button › Usage');
	});

	it('turns absolute crawler URLs into internal paths', () => {
		expect(mapHit(contentHit, 0).href).toBe('/components/button#variants');
	});

	it('appends the anchor when the url has none', () => {
		const result = mapHit(
			{ ...contentHit, url: 'https://deskblocks.pages.dev/components/button' },
			0
		);
		expect(result.href).toBe('/components/button#variants');
	});

	it('renders highlights as <mark>', () => {
		expect(mapHit(contentHit, 0).snippetHtml).toBe(
			'<mark>Buttons</mark> come in primary…'
		);
	});

	it('escapes markup before inserting highlights', () => {
		const result = mapHit(
			{
				...contentHit,
				_snippetResult: {
					content: { value: `<img src=x onerror=alert(1)> and ${hl('Button')}` }
				}
			},
			0
		);

		expect(result.snippetHtml).not.toContain('<img');
		expect(result.snippetHtml).toContain('&lt;img');
		expect(result.snippetHtml).toContain('<mark>Button</mark>');
	});

	it('never leaks sentinels into plain-text fields', () => {
		const result = mapHit(
			{ ...contentHit, hierarchy: { lvl0: hl('Components'), lvl1: hl('Button') } },
			0
		);

		expect(result.section).toBe('Components');
		expect(result.titleText).toBe('Button');
	});

	it('falls back to the deepest level when there is no snippet', () => {
		const lvl1Hit: RawHit = {
			objectID: 'lvl1',
			url: '/components/table',
			type: 'lvl1',
			content: null,
			hierarchy: { lvl0: 'Components', lvl1: 'Table' }
		};

		const result = mapHit(lvl1Hit, 0);
		expect(result.titleText).toBe('Table');
		expect(result.titleHtml).toBe('Table');
		expect(result.snippetHtml).toBe('');
		expect(result.href).toBe('/components/table');
	});

	it('survives a record with none of the expected fields', () => {
		const result = mapHit({}, 3);

		expect(result.id).toBe('hit-3');
		expect(result.section).toBe('Documentation');
		expect(result.titleText).toBe('Documentation');
		expect(result.href).toBe('/');
	});
});

describe('groupResults', () => {
	it('groups by lvl0 and keeps relevance order', () => {
		const groups = groupResults([
			contentHit,
			{ ...contentHit, objectID: 'g1', hierarchy: { lvl0: 'Guidelines', lvl1: 'Color' } },
			{ ...contentHit, objectID: 'c2', hierarchy: { lvl0: 'Components', lvl1: 'Table' } }
		]);

		expect(groups.map((group) => group.section)).toEqual(['Components', 'Guidelines']);
		expect(groups[0].results.map((result) => result.id)).toEqual(['abc123', 'c2']);
	});

	it('returns nothing for an empty index', () => {
		expect(groupResults([])).toEqual([]);
	});
});
