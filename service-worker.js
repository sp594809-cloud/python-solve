const CACHE_NAME = "ljiet-python-hub-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./loops-adventure.html",
  "./css/main.css",
  "./css/playgrounds.css",
  "./js/app.js",
  "./js/leaderboard.js",
  "./js/supabase-config.js",
  "./js/concepts-data.js",
  "./js/practice-book-questions.js",
  "./js/playgrounds.js",
  "./manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).catch(() => cached);
    })
  );
});
