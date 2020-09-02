'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/fonts/IRANSansMobile_Light_fa.ttf": "5b24f0eb79e12468b0b33f50daa543aa",
"assets/assets/fonts/IRANSansMobile_UltraLight_fa.ttf": "d870b02ba33e62d12d4491086802752d",
"assets/assets/fonts/IRANSansMobile_Medium_fa.ttf": "f2e4b38c405ac29cce593b4cc30d2cce",
"assets/assets/images/heart-outline.png": "0a6d86aac033acd2a32ef091674d4890",
"assets/assets/images/4.jpeg": "bf9b585ec8e42cd6d7525d321ef69d31",
"assets/assets/images/heart.png": "d0afd3fa8b46108275a37c73fd953b8d",
"assets/assets/images/supermarket-cover.png": "11f9d1ad12bf9fc588c0c8586ebe5077",
"assets/assets/images/offer_1.jpg": "b84603644b07171faeb11952c7dd71f8",
"assets/assets/images/3.jpeg": "10fa0c6a6593cb2b7735e4ff2cb3bd7f",
"assets/assets/images/offer_3.jpg": "6618b242963459c7e0dc9bfcc43d5c72",
"assets/assets/images/pin.png": "4dfd1b330235985be91dcae48151d2dc",
"assets/assets/images/5.jpeg": "581328cf5a9f5f697cfdadb9156f09c3",
"assets/assets/images/hyperstar-logo.png": "df2576f84464da10bf2dba86a4ec5008",
"assets/assets/images/hyperstar-cover.png": "33effb0fe1417f7ec20671a0a3e41ca9",
"assets/assets/images/supermarket-logo.png": "837cdaadeb6d2f8f0ecb15d1b2f1d42d",
"assets/assets/images/2.jpeg": "aa0e1046e8a709764b170df3003d696e",
"assets/assets/images/logo.png": "34ba0d91736f6498557963f428e4fadb",
"assets/assets/images/offer_2.jpg": "8db0d21a8c4b2734bf647bf747ec698d",
"assets/assets/images/1.jpeg": "19c31fdf2ac4fcb3436d3e405563b8aa",
"assets/FontManifest.json": "e68f1de14ebdbe0a13ae8999efc85564",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/NOTICES": "77dc5305c8d92e685fd8a604b5f7f5e7",
"assets/AssetManifest.json": "e397bd69dec77da61149ead1ea887360",
"favicon.png": "4b25e7e30b22bc1a40f9c4ed4d397481",
"main.dart.js": "c129b974ca651927d7a9f6d548ab3a6c",
"index.html": "69fcac7b2a61fa9de1a6b6dfbe53bc04",
"/": "69fcac7b2a61fa9de1a6b6dfbe53bc04",
"manifest.json": "8a7917040cb5665843076f8a12bb2e7b",
".git/logs/refs/heads/master": "af8a92f4bcfcc8c28390eb1f0e3015db",
".git/logs/refs/remotes/origin/master": "bb5e441eedb89e20854233b62da26640",
".git/logs/HEAD": "af8a92f4bcfcc8c28390eb1f0e3015db",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/objects/9a/b3f129a3577ee6600ebddc2c85c3c0d83fcdca": "89f34233e9e3425b1b2b2ede9abc861b",
".git/objects/9d/3fb9986ae61f29bf647589846f0f08da3a608a": "24105bbf9b3404665a18ae2d59d792d4",
".git/objects/48/71717156ef2ded186ea1907813c4feaafa40c2": "0266cb02d4b0e09b0501108880742b3b",
".git/objects/26/9ea0e30267f1fe5ccc811d40d51b0b7bac8959": "7dfffd46ba17a624b8d4b39a7a52b7ee",
".git/objects/08/757ca41575deaf1ce29b8b0a6f8efaea3d5619": "95eed2bd7b560bd5f5cded927cf096d1",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/67/9c06c6a20ad4d9b79eb6a79fc946ed32897a5a": "668f712b8b72445d7712c86a7ae92a56",
".git/objects/66/39035e559dcd18596e7ecea2366d9e35fd0838": "dd475d2aedf148bed8da36e1fe8f7928",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/97d5decd48313d3107d502c325b77a736f4c3f": "bcaa440ff4057e54e139c3f66bcdb18a",
".git/objects/39/3bcca243920cb731313e46a928ce6a45bbaa54": "3efd77219dfa8e5b100a8f6d69489cbf",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/b6/0312d2af4b9cd08ca2c19331026b51e1852b44": "6654d05a2f616bb5e3289bcc5cf67ec5",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/11/99b3d6878b910287098f81652ed29cd8617171": "64f89f596e4dd51a1d2d943a0e8aeac9",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/1d/ab84cdf2f00c1364c5c74df64341cbe23e1658": "9c14addbe068926bd78a8cc12ea945ae",
".git/objects/1d/547b5c334528f4b96ac1933bb751505f166ab4": "8a12616ac1d825f1db38bc9b7b058cc8",
".git/objects/a3/dc56260e105bb7c3ada7ce53e4e238e63e060c": "07ad158254f4d5d69c5d27f99e88dcbf",
".git/objects/bb/8fc54c0bfb64a613ecc531f84c972ab9bb499b": "9fa1a3dce7edfe39816f3730bd25939c",
".git/objects/42/d09e08aae38eaf6908ef927818018cfe9dacec": "49f967217bb3b61193f035312b66c55e",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/d2/b6da562410b0448fd4c021472189ea6e7cac5a": "17958b7979e6c456071d425011f32489",
".git/objects/2b/d37812eb7ac029bca991a66c5dbef4fe56e270": "e6d18237411776efb1ee70151a27b21a",
".git/objects/2b/0450b3b4717a222387011888e2d7122b4854d1": "ffb2fa5470de34efbc026175d90aba17",
".git/objects/a5/a3c24e7d02be8e6d0cd6292325f555f36ac301": "e371b13b5c24d60a4af0e3e2512ea22c",
".git/objects/f5/0f9115f8a917fedf4da8616e16142bcd2df919": "61772932bf5c6c4fa00b87a1ecf948cb",
".git/objects/6d/d94ceb543b5dc522402378e3e43ede0b5ecd4a": "0adef241f2c33fc1ae2f33c32e577543",
".git/objects/29/b5dc3268759ef4e23ae0da4ead22bca11f4e15": "497d8a506952389c508bcffd1f2e2b4f",
".git/objects/dd/687986746d1e6e4d08d37e4c8efbbf2d4ddcaa": "384c9a543d373f06b8e2d7e57a900b49",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/70/e07b1865962a399235e0ed86142f3407229259": "24a5225d76e323fe20f6cee040c16c66",
".git/objects/d4/e982778d9347593c2bcbfd0bdc72ddc647470d": "8d59c333392e67f8b6d693d81ee03c5a",
".git/objects/cb/a676aa7ea2932b7696c6dd8243dd8dc9b712ae": "e81b75f5b07d1bf44983febed655bbc0",
".git/objects/b4/ae2e79bce60028f186788d5d6b167f60b550ff": "31c0eaff956a521e76b46f6a377d6051",
".git/objects/b4/ab4572af2bf9dff4cd2f8beb576674550a5ffa": "a6e17d14d64790c6e3bf5c5fdfded8e4",
".git/objects/b4/fb857b318fd31de1343fac695664d993ffe2fd": "d2fcd983be9bb68f7d204b508834f42c",
".git/objects/7b/5580ad08c6d7e230e57c9bfe7fd6dbeb663280": "2b2e67a07a0eb3e56ffdc03083a70f95",
".git/objects/d8/7c3697a947cb7ccb2ef7348d30bc5e5c823834": "24b855c0e5ab9ce9b6347233094e719d",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/9c/53e0c69fba730c397d447fd3fb4e55c2a855ff": "9a814a3479d9b13b5ffab4dd46075f2f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/25/e8688dfef5a9cbc111458c840a11d7ddf1abc2": "67e0b1c2bdd250dbe5f5c32e3b857d69",
".git/objects/25/8199636cb0852d62d5778468d305265744b781": "f2c14d483272609d62be07b158621078",
".git/objects/b9/c1be98f06756462928ed33540a53a363abafb8": "fe0f8c8270998dc5efa92193eaba88aa",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/a6/ed503971c7bc84df5f5d27eeb4ef34ba7f337c": "ba14d6c67292f79fe184dfe5bed49e14",
".git/objects/cd/dfe6c7922dcb2b774498d5b2bd05b74b4b923d": "85ee3e4fb2a50de90c668e9bf09a12f2",
".git/objects/94/25dc32abae78f9a21126cd7d66c5b49ee754d4": "ef477ebbd645332661d7dd3f0b18c1db",
".git/objects/e1/7c77d0eaf19d90a772fca360661e8ff980e118": "055abcd923fb376b7d0e085a75868f39",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/index": "d94c16ed33dd4700303467901538ab39",
".git/refs/heads/master": "0016aa6423425f8b7bb94b8811141684",
".git/refs/remotes/origin/master": "0016aa6423425f8b7bb94b8811141684",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/config": "3c916e3d61a5fe472e8e47b612c3d7da",
".git/COMMIT_EDITMSG": "60b725f10c9c85c70d97880dfe8191b3",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
