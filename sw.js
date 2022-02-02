self.addEventListener("install", event=>{
  event.waitUntil(
    caches.open(["precache-v1"]).then(cache=>{
      cache.addAll(["/", "index.js",
         "index.html",
         "bootstrap-5.1.3-dist/css/bootstrap.min.css",
        "icons-1.7.2/font/bootstrap-icons.css",
        "bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js",
      ]);
    })
  );
});

self.addEventListener("fetch", event=>{
  event.respondWith(
    caches.match(event.request).then(response=>{
      return response || fetch(event.request);
    })
  );
});
