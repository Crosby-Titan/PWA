const CACHE_NAME = "password-entropy-calculator-v1";

const resourcesToCache = [
  '/',
  '/style.css',
  '/password_entropy_calculator.js',
  '/icons/main-logo.png',
  '/icons/notification.png',
  '/symbols_information.js',
  '/validation.js'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll(resourcesToCache);
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      ))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    } else {
        try {
          const fetchResponse = await fetch(event.request);
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          console.log(e.message);
        }
    }
  })());
});

messaging.onBackgroundMessage(function(payload) {
  console.log('Получено уведомление:', payload);
  
  const notification = JSON.parse(payload.notification);

  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: notification.icon,
    click_action: notification.click_action
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});