const CACHE_NAME = 'math-quiz-v2';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './character.png',
  './q1.png',
  './q2.png',
  './q6.png',
  './q7.png',
  './q9.png',
  './q10.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
