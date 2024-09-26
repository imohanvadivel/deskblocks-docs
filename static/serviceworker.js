let cacheName = 'static-assets-v1';
let staticAssets = [
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

  // HTML
  '/offline.html'
];

// Install the service worker and cache all the static assets
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(cacheName)
			.then((cache) => {
				return cache.addAll(staticAssets);
			})
			.then(() => self.skipWaiting())
	);
});

// Activate the service worker and remove old cache
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return Promise.all(
					cacheNames
						.filter((name) => {
							return name !== cacheName; // Assuming cacheName is your current cache
						})
						.map((name) => {
							return caches.delete(name); // Delete old caches
						})
				);
			})
			.then(() => {
				return self.clients.claim(); // Claim clients after cache cleanup
			})
	);
});

// Fetch the static assets from the cache
self.addEventListener('fetch', (event) => {
	// If the request is a navigation request, return the offline page
	if (event.request.mode === 'navigate') {
		event.respondWith(fetch(event.request).catch(() => caches.match('/offline.html')));
	} else {
		// If the request is not a navigation request, return the cached assets
		event.respondWith(
			caches.match(event.request).then((response) => {
				return response || fetch(event.request);
			})
		);
	}
});

// Listen for messages from the client
self.addEventListener('message', (event) => {
	if (event.data === 'cache-assets') {
		event.waitUntil(
			caches.open(cacheName).then((cache) => {
				return Promise.all(
					staticAssets.map((asset) => {
						return cache.add(asset).catch((error) => {
							console.error(`Failed to cache ${asset}:`, error);
						});
					})
				).then(() => {
					// Notify the client that all assets have been cached
					self.clients.matchAll().then((clients) => {
						clients.forEach((client) => {
							client.postMessage({
								type: 'assets-cached',
								cached: true // Indicate that caching is complete
							});
						});
					});
				});
			})
		);
	}
});
