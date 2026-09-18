const CACHE_NAME = "ljiet-learning-hub-v6";
const ASSETS = [
  "./",
  "./index.html",
  "./loops-adventure.html",
  "./css/main.css",
  "./css/playgrounds.css",
  "./js/app.js",
  "./js/app-fixes.js",
  "./js/leaderboard.js",
  "./js/supabase-config.js",
  "./js/notifications.js",
  "./js/concepts-data.js",
  "./js/practice-book-questions.js",
  "./js/option-html-fix.js",
  "./js/playgrounds.js",
  "./js/app-se.js",
  "./js/se-practice-book.js",
  "./manifest.json",
  "./icons/icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS).catch(() => {}))
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
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const data = event.notification.data || {};
  let target = "./index.html";
  if (data.url) target = data.url;
  if (data.action === "leaderboard") target = "./index.html#leaderboard";
  if (data.action === "practice") target = "./index.html";
  if (data.action === "challenge") target = "./index.html";

  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && "focus" in client) {
          client.postMessage({ type: "ljiet-notif-click", action: data.action || "open" });
          return client.focus();
        }
      }
      if (self.clients.openWindow) return self.clients.openWindow(target);
    })
  );
});

self.addEventListener("push", (event) => {
  let payload = { title: "LJIET Learning Hub", body: "You have an update", tag: "ljiet-push" };
  try {
    if (event.data) {
      const j = event.data.json();
      payload = Object.assign(payload, j);
    }
  } catch (e) {
    try {
      payload.body = event.data ? event.data.text() : payload.body;
    } catch (e2) {}
  }
  event.waitUntil(
    self.registration.showNotification(payload.title || "LJIET Learning Hub", {
      body: payload.body || "",
      icon: "./icons/icon-192.png",
      badge: "./icons/icon-192.png",
      tag: payload.tag || "ljiet-push",
      data: payload.data || { url: "./index.html" },
      renotify: true
    })
  );
});

self.addEventListener("message", (event) => {
  const msg = event.data || {};
  if (msg.type === "ljiet-show-notification" && msg.title) {
    event.waitUntil(
      self.registration.showNotification(msg.title, {
        body: msg.body || "",
        icon: "./icons/icon-192.png",
        badge: "./icons/icon-192.png",
        tag: msg.tag || "ljiet-hub",
        data: msg.data || { url: "./index.html" },
        renotify: !!msg.renotify
      })
    );
  }
});
