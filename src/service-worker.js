// import { files, version, build } from '$service-worker';

let CACHE = `cache-v1`;

let ASSETS = [
	// Primary
	'/assets/banner/deskblocks.png',

	// Fonts
	'/font/inter/InterVariable.woff2',
	'/font/inter/InterDisplay-SemiBold.woff2',
	'/font/inter/InterDisplay-Medium.woff2',
	'/font/jetbrainsMono/JetBrainsMono.woff2',
	'https://static.zohocdn.com/zohofonts/zohopuvi/4.0/Zoho_Puvi_Regular.woff2',
	'https://mohanvadivel.com/fonts/lato/Lato3Upr3M-VF.woff2',
	'https://fonts.gstatic.com/s/robotoflex/v26/NaOkcZLOBv5T3oB7Cb4i0xG2bBVmtU5Wc7yZcSAEzvBPG65coVt_c4_0HvwJZVPEHzgCEJvQGxsTfsDHFHTjLI7UisR7Ia1RC-BFnA9CgfI_oYDZPRtZvE52xXPNiPcIDbAHhgb_dHlhvhaLUdDTQMDmMEIFXN5NVhgiWKq17lw.woff2',

	// Images
	'/assets/banner/principia.jpg',
	'/assets/banner/icon_light.png',
	'/assets/banner/icon_dark.png',
	'/assets/banner/type_light.png',
	'/assets/banner/type_dark.png',
	'/assets/banner/color_light.png',
	'/assets/banner/color_dark.png',
	'/assets/banner/sample1_light.png',
	'/assets/banner/sample1_dark.png',
	'/assets/banner/sample2_light.png',
	'/assets/banner/sample2_dark.png',

	// Videos
	'/assets/clips/auto-theming.mp4',
	'/assets/clips/auto-type.mp4',
	'/assets/clips/figma-kit.mp4',
	'/assets/clips/ai-gen.mp4',
	'/assets/clips/auto-completion.mp4'
];

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);

		console.log('Caching assets:', ASSETS);
		try {
			await cache.addAll(ASSETS);
		} catch (err) {
			console.log('failed to cache some assets');
			console.log(err);
		}
	}

	event.waitUntil(addFilesToCache());

	// Skip waiting to activate the service worker immediately
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) {
				console.log('Deleting old caches: ', key);
				await caches.delete(key);
			}
		}
	}

	event.waitUntil(deleteOldCaches());

	// Claim clients immediately after activation
	self.clients.claim();

	console.log('Service Worker activated');
});

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	// Exclude requests with 'chrome-extension' scheme
	if (event.request.url.startsWith('chrome-extension')) return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			const response = await cache.match(url.pathname);

			if (response) {
				return response;
			}
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			console.log('fetching', event.request.url, response);

			// if we're offline, fetch can return a value that is not a Response
			// instead of throwing - and we can't pass this non-Response to respondWith
			if (!(response instanceof Response)) {
				throw new Error('invalid response from fetch');
			}

			if (response.status === 200) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch (err) {
			console.log(err, event.request);
			const response = await cache.match(event.request);

			if (response) {
				return response;
			}

			// if there's no cache, then just error out
			// as there is nothing we can do to respond to this request
			throw err;
		}
	}

	event.respondWith(respond());
});
