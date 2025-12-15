const CACHE_NAME = 'notebook-v1';
const urlsToCache = [
  './index.html',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
  'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2',
  'https://cloud.appwrite.io/v1/account' 
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  // Network first for data, cache fallback for assets
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});