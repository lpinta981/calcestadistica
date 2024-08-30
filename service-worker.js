self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/calcestadistica/',
        '/calcestadistica/index.html',
        '/calcestadistica/manifest.json',
        'https://images.vexels.com/media/users/3/157446/isolated/preview/383f43305de4fbc3c6a3bdfb25a1b758-icono-de-grafico-de-marketing.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
