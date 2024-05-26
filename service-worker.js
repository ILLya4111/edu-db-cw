/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "d0d726f1b9785a569bff7bb7578709bc"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.87864754.css",
    "revision": "42c685447af81a09467325a55c6bbb97"
  },
  {
    "url": "assets/img/1.b03a4f5b.png",
    "revision": "b03a4f5b24f1fb3dff20fc170f71b5c6"
  },
  {
    "url": "assets/img/2.b78b7276.png",
    "revision": "b78b727624681f5c03fbf5b6fe58c8f9"
  },
  {
    "url": "assets/img/3.ebc06b7a.png",
    "revision": "ebc06b7a68b4a3ebe50c5e8bb55d3aa0"
  },
  {
    "url": "assets/img/4.662be58c.png",
    "revision": "662be58cd470d5d9ad430300946a1a66"
  },
  {
    "url": "assets/img/5.1be8c13a.png",
    "revision": "1be8c13a8fcf4192e46eeabb0f615378"
  },
  {
    "url": "assets/img/6.6f14a5d2.png",
    "revision": "6f14a5d2f5a06a0f1a1376ea447b4cdf"
  },
  {
    "url": "assets/img/7.08350953.png",
    "revision": "08350953c35fc11ec887b0d01d0a61e5"
  },
  {
    "url": "assets/img/8.ff99eabc.png",
    "revision": "ff99eabcc286e9a4fcc2cb15bab1145d"
  },
  {
    "url": "assets/img/9.c1482b8c.png",
    "revision": "c1482b8c86577cda7c5e018df50ad076"
  },
  {
    "url": "assets/img/relational_schema.094ee927.png",
    "revision": "094ee927e01563b4c7f54c42bb73eeb8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a4b32e52.js",
    "revision": "3e4c20e5dfea9a6c2bef1aa76991394e"
  },
  {
    "url": "assets/js/11.13ec7079.js",
    "revision": "19db36806306dd7c120e1e8206e1d65f"
  },
  {
    "url": "assets/js/12.402ac58a.js",
    "revision": "020c29f3eda3129406cbe1db12ee2ee9"
  },
  {
    "url": "assets/js/13.0ec5098d.js",
    "revision": "5adc31b21281df8c355927124e0eae20"
  },
  {
    "url": "assets/js/14.feec8449.js",
    "revision": "a92d34174fdfc7015174ba7721b7d889"
  },
  {
    "url": "assets/js/15.2fd3d02a.js",
    "revision": "f139e857ec666f4703acbce4d11121cc"
  },
  {
    "url": "assets/js/16.c616848f.js",
    "revision": "6c3e2c360b9e956653daaeb58af41999"
  },
  {
    "url": "assets/js/17.b9a686ef.js",
    "revision": "2b240adf919457e277ba5f62e46df127"
  },
  {
    "url": "assets/js/18.ff2f1e37.js",
    "revision": "bb40adb68d4faf3babd1a1b5d0f252d1"
  },
  {
    "url": "assets/js/19.77f8ad78.js",
    "revision": "f771fb5c3a884ad273eedb73c1226994"
  },
  {
    "url": "assets/js/2.f3760627.js",
    "revision": "e987c7d6ffc0022038c9ec0723492141"
  },
  {
    "url": "assets/js/20.15a7b89f.js",
    "revision": "9984799b079bf888a374c2ed7ac5a637"
  },
  {
    "url": "assets/js/21.a3566c2e.js",
    "revision": "51a601d6dbee76767696c5fdc9821d7b"
  },
  {
    "url": "assets/js/22.c08407fa.js",
    "revision": "e49324f8cebfb5b7f76c7b32b6b9b69e"
  },
  {
    "url": "assets/js/23.d8e8d0da.js",
    "revision": "993a8e25d394624edecf5d76bbec34ec"
  },
  {
    "url": "assets/js/24.4ba4d375.js",
    "revision": "5d91c993af5ea798711f98a72f76d1cc"
  },
  {
    "url": "assets/js/26.692a3120.js",
    "revision": "58fbc6f88de211b8e41bad42954b221d"
  },
  {
    "url": "assets/js/3.4bf22279.js",
    "revision": "516fce2399aa4d653f889765f02020b7"
  },
  {
    "url": "assets/js/4.ae6a6bfd.js",
    "revision": "0ef835bf435d98a6edf1c35e3bcacdf3"
  },
  {
    "url": "assets/js/5.125f3ffb.js",
    "revision": "e85c8cf6fbdce593550ad6eddd9ef42d"
  },
  {
    "url": "assets/js/6.07205bb4.js",
    "revision": "395e6d0aec3f8bc407e222f54bf4185e"
  },
  {
    "url": "assets/js/7.213601b9.js",
    "revision": "730e00f6155cf350989f7a04e7acd4f6"
  },
  {
    "url": "assets/js/8.1764375e.js",
    "revision": "0be00e955ad1ab792169e4e915ac4a84"
  },
  {
    "url": "assets/js/9.1f621b48.js",
    "revision": "bede82ea706975de0bf549a2411a9597"
  },
  {
    "url": "assets/js/app.dd7da77a.js",
    "revision": "8c3ed40b4129094e5953aeb11ade58fd"
  },
  {
    "url": "conclusion/index.html",
    "revision": "055047fce2dfcf2591b4c6665849ffb1"
  },
  {
    "url": "design/index.html",
    "revision": "243e4b104e304fd1a90dd6a95bb27470"
  },
  {
    "url": "index.html",
    "revision": "eb02e0c0fa67ae6d37670a7d4feafcc4"
  },
  {
    "url": "intro/index.html",
    "revision": "34217ebdbdfffd44f7b463d06946f93c"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "eafe4ecf86ed8e2e7874c6743a4979fa"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e97b51bca6e1b94014a8da4f87e9321f"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "87d3e47215b49f12763670902bf027fb"
  },
  {
    "url": "software/index.html",
    "revision": "a6a19eba22da9205b703e927592897e3"
  },
  {
    "url": "test/index.html",
    "revision": "ca4fa9e6e0fb5a660d669fbb80fc1fe8"
  },
  {
    "url": "use cases/index.html",
    "revision": "1c29e119da91d2b51fc569b5ce3bb8cf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
