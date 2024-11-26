import { error } from '@sveltejs/kit';
import path from 'path';

export async function GET({ params, url, fetch }) {
	try {
		// Use fetch to get the static file from the _app/immutable directory
		const response = await fetch(url.pathname);
		
		if (!response.ok) {
			throw error(404, 'File not found');
		}

		// Return the response directly
		return new Response(await response.text(), {
			headers: {
				'Content-Type': 'text/html'
			}
		});
	} catch (e) {
		throw error(404, 'File not found');
	}
}
