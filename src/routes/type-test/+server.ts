import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function GET({ params, url }) {
	// Get the full path to the requested file
	// process.cwd() gives us the current working directory
	// url.pathname will be something like '/type-test/font-weight.html'
	const filePath = path.join(process.cwd(), 'static', url.pathname);

	try {
		// Read the HTML file content
		const content = fs.readFileSync(filePath, 'utf-8');

		// Return the file content as a Response
		// Setting Content-Type to text/html tells the browser to render it as HTML
		return new Response(content, {
			headers: {
				'Content-Type': 'text/html'
				// Optionally, you can add more headers:
				// 'Cache-Control': 'public, max-age=0',
				// 'X-Robots-Tag': 'noindex'
			}
		});
	} catch (e) {
		// If file doesn't exist or there's an error reading it
		throw error(404, 'File not found');
	}
}
