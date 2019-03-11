var cacheName = 'rpsv0.1';

var filesToCache = [
  '/pwa-rps/',
  '/pwa-rps/index.html',
  '/pwa-rps/app.js',
  '/pwa-rps/styles.css',
  '/pwa-rps/images/rock.png',
  '/pwa-rps/images/paper.png',
  '/pwa-rps/images/scissor.png',
];

/*
var filesToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/styles.css',
  '/images/rock.png',
  '/images/paper.png',
  '/images/scissor.png',
];
*/

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', (event) => {
  event.respondWith(async function() {
    try {
      console.log("trying to repsond, network first");
      return await fetch(event.request);
    } catch (err) {
      console.log("responding with cache");
      return caches.match(event.request);
    }
  }());
});
