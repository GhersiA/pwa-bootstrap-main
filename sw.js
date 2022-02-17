self.addEventListener("install", event=>{
  event.waitUntil(
    caches.open(["precache-v1"]).then(cache=>{
      cache.addAll(["/", "index.js",
         "index.html",
         "page-hors-ligne.html",
         "bootstrap-5.1.3-dist/css/bootstrap.min.css",
        "icons-1.7.2/font/bootstrap-icons.css",
        "bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js",
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  console.log("Fetching ..." + event.request.url);
  event.respondWith(cacheOrNetwork(event.request).catch(() => fallbackVersPageHorsLigne()));
});

async function cacheOrNetwork(request) {
  try {
    return await fromCache(request);
  } catch {
    return await fetch(request);
  }
};

async function fromCache(request) {
  const cache = await caches.open('v1');
  const matching = await cache.match(request);
  return matching || Promise.reject('no-match');
}

function fallbackVersPageHorsLigne() {
  return caches.match("page-hors-ligne.html");
}
