'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"main.dart.js": "568ff2a4d84038c790517834b85bc6f5",
"robots.txt": "fa09ba24e0b54583f07c53a6ae27fe3e",
"assets/NOTICES": "64cde721168a4eb600b34e229450e0f0",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "7bb70c282bc0362ba85bcf2413de61b5",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/assets/lower_limb/lower_limb.json": "bd4dd23518433378ae9738ce326e945d",
"assets/assets/quiz_data.json": "a4d8fc858123b486f0a6d8582b1d5ad8",
"assets/assets/cardiovascular/cardiovascular.json": "c646587a799a08b98320f724540e2ced",
"assets/assets/nervous_system/nervous_system.json": "72f1ee7d19c62ac7d12e436e66d69756",
"assets/assets/head_and_neck/hn_collection.json": "290be913920df0d480c5791faad5f2cc",
"assets/assets/head_and_neck/neck_muscles_and_triangles.json": "0e0911e440720f52c36ce9a717ae9112",
"assets/assets/head_and_neck/vessels_of_the_neck.json": "58e0494c51d30eb3494f7c9198986bb9",
"assets/assets/head_and_neck/README.md": "235a005f2b8a98bc8709d216dc717e0a",
"assets/assets/head_and_neck/eye_and_orbit.json": "09dcd39eb9b2459008dacfc1909553c5",
"assets/assets/head_and_neck/submandibular_region.json": "58e0494c51d30eb3494f7c9198986bb9",
"assets/assets/head_and_neck/scalp.json": "58e0494c51d30eb3494f7c9198986bb9",
"assets/assets/head_and_neck/muscles_of_the_neck.json": "58e0494c51d30eb3494f7c9198986bb9",
"assets/assets/head_and_neck/nerves_of_the_neck.json": "58e0494c51d30eb3494f7c9198986bb9",
"assets/assets/head_and_neck/face_and_scalp.json": "bd5c5b0e5aa75196fa0a48f823d3b755",
"assets/assets/head_and_neck/face.json": "58e0494c51d30eb3494f7c9198986bb9",
"assets/assets/head_and_neck/tongue_and_submandibular.json": "1a3eb93607186949e2798fe860119aa9",
"assets/assets/head_and_neck/hn_supabase_upload.json": "fb87b39c42c21a44a16fe34fc9b5e782",
"assets/assets/head_and_neck/orbit.json": "58e0494c51d30eb3494f7c9198986bb9",
"assets/assets/head_and_neck/cranial_cavity.json": "58e0494c51d30eb3494f7c9198986bb9",
"assets/assets/audio/wrong_answer.mp3": "d448d9582ad6560fc67431e1460b691a",
"assets/assets/audio/correct_answer.mp3": "9f0de3c123dc0ede5d09c494dace5148",
"assets/assets/embryology/embryology.json": "5f708ebeaf4391d03b4194ed9879dee5",
"assets/assets/upper_limb/upper_limb.json": "02f0d04c64c7d7abec55083bbc33f39f",
"assets/assets/atlas/lower_limb.json": "daf760def026e254294a38474441d61c",
"assets/assets/respiratory/respiratory.json": "325c4b296e2bc8cae99798d675604cb3",
"assets/assets/images/nerd.jpeg": "80a9995331089dfede240a0fb82be0b8",
"assets/assets/images/general_embryology_course.png": "ccbc6f1ae32b701fe919b5c68d9fa1f3",
"assets/assets/images/face_muscles.png": "83083eae079b2dc7c8ea5288d52ec66c",
"assets/assets/images/app_icon.png": "c68b163d3ed49959057ab16f863a3ef0",
"assets/assets/video_data.json": "b6afb03fa8652ef3f5c2fe25f965c340",
"assets/assets/endocrine/endocrine.json": "dce2852c5cb2608f8fe8d15be31706d5",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "dd1b43880af1b24e00af3e06fc409436",
"assets/AssetManifest.bin": "586183ebae91ad7cdb3240cfc07ded9d",
"assets/AssetManifest.bin.json": "7426fd2e042d2618bff014881157d259",
"app-ads.txt": "172c31f74b74b7ef0d4eaa56283f7298",
"ads.txt": "04ddcece58adb95be98d8415b3eed9d0",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"404.html": "23bc8a4e0989796e700fbe0118d1f793",
"index.html": "412747df80561888f0eb7ddd418734f2",
"/": "412747df80561888f0eb7ddd418734f2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"flutter_bootstrap.js": "19c85f1f302713607ca622a02ff5624a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "df7c893028880cfa93357c387f8e3019",
"version.json": "723bc5dfb8c6c3508953760a8325702c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
