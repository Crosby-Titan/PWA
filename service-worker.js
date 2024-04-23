const CACHE_NAME = "password-entropy-calculator-v1";

self.addEventListener('install',(event) => {

    const resourcesToCache = [
        '/index.html',
        '/style.css',
        '/password_entropy_calculator.js',
        '/icons/main-logo.png',
      ];

    event.waitUntil((async ()=>{
        let cache = await caches.open(CACHE_NAME);

        return await cache.addAll(resourcesToCache);
    }))();
});

self.addEventListener('activate', async (event) => {

    let keys = await caches.keys();

    keys.map(((cache) => {
        if (cache !== CACHE_NAME) {
            return caches.delete(cache);
        }
    }))();

    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {

    event.respondWith(
        caches.match(event.request)
          .then((response) => {
            if (response) {
              return response;
            }
    
            return fetch(event.request)
              .then((response) => {
                const cacheName = 'my-pwa-cache';
    
                caches.open(cacheName)
                  .then((cache) => {
                    cache.put(event.request, response.clone());
                  });
    
                return response;
              });
          })
      );
});