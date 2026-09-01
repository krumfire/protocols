// Krum EMS Protocols — offline service worker
const CACHE = 'kfd-protocols-v1';
const SHELL = [
  './',
  './index.html',
  './data.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/favicon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Cache-first for everything in scope (shell + page images get cached on first view,
// so once a medic has opened pages they work with no signal).
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => hit);
    })
  );
});

// Allow the page to ask us to pre-cache ALL images for full offline use.
self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'cache-all') {
    const urls = e.data.urls || [];
    e.waitUntil(caches.open(CACHE).then(async (c) => {
      let done = 0;
      for (const u of urls) {
        try {
          const r = await fetch(u);
          if (r.ok) await c.put(u, r.clone());
        } catch (_) {}
        done++;
        const clients = await self.clients.matchAll();
        clients.forEach((cl) => cl.postMessage({ type: 'cache-progress', done, total: urls.length }));
      }
    }));
  }
});
