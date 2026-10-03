self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('karim-travel-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './karim travel.png',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});