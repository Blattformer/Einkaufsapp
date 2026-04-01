const CACHE_NAME = 'familien-planer-v1';

self.addEventListener('install', event => {
    console.log('Service Worker installiert.');
});

self.addEventListener('fetch', event => {
    // Dieser einfache Worker lässt alle Anfragen einfach durch.
    // Reicht völlig aus, damit das Handy den "App-Status" anerkennt!
    event.respondWith(fetch(event.request));
});