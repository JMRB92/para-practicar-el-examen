/* Caché únicamente de recursos públicos; no se guardan aquí datos de alumnos. */
const CACHE = 'examen-test-publico-v106-20261124';
const RESOURCES = ['./index.html', './data/questions.json'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(RESOURCES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('examen-test-publico-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if(request.method !== 'GET' || new URL(request.url).origin !== self.location.origin)return;
  event.respondWith(fetch(request).then(response => {
    if(response.ok && response.type === 'basic'){
      const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache => cache.put(request,copy)));
    }
    return response;
  }).catch(() => caches.match(request).then(cached => cached || (request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
