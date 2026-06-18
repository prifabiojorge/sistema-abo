const CACHE_NAME = 'abo-sim-v1.2.0';
const urlsToCache = [
  './',
  './index.html',
  './css/tokens.css',
  './css/main.css',
  './css/reset.css',
  './css/variables.css',
  './css/layout.css',
  './css/components.css',
  './css/simulator.css',
  './css/quiz.css',
  './css/screens.css',
  './css/animations.css',
  './js/bundle.js',
  './fonts/Inter-Variable.woff2',
  './fonts/Outfit-Variable.woff2',
  './img/favicon.svg',
  './img/og-image.svg',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).catch(() => {
          console.warn('[SW] Falha ao buscar:', event.request.url);
        });
      })
  );
});
