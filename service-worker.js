if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.e92bc65f.css",revision:"bc0085ffed8151c5bab9b9a2e9fbc6bc"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/17.a76451f0.js",revision:"ed3569f9a1dba72c76820b24c47ebbc1"},{url:"assets/js/18.7a64005e.js",revision:"b4933bbc056a889f3f43a6d89a360b93"},{url:"assets/js/19.44a0777b.js",revision:"2cdca2603f2afe7835c2d7ec0c9f9a72"},{url:"assets/js/20.855c7603.js",revision:"7afd1ee98d0ff8724b9779d3aad1ac2f"},{url:"assets/js/21.3a31c04f.js",revision:"6ba4b2fd5bbcc58832c0b723fad75773"},{url:"assets/js/22.716edc5c.js",revision:"6c4c5c2b0d299b27046809a3f8aa8c5f"},{url:"assets/js/23.7410fd45.js",revision:"4ec5f69ba47dc3b22723e9ee63086b81"},{url:"assets/js/24.ac688d07.js",revision:"28ccb8915385d7125f57e9497d53590a"},{url:"assets/js/25.f963fffa.js",revision:"7b7340e391b37d0871f9a067bc7da86b"},{url:"assets/js/26.7531abfe.js",revision:"938a6d56d916210d014a4b107733c655"},{url:"assets/js/app.f4eb4af7.js",revision:"b6c3c6152f490b317b156ce30e0bc74c"},{url:"assets/js/layout-Blog.cb7b8ec0.js",revision:"4d1430b89180fefb7ff76306a29f7343"},{url:"assets/js/layout-Layout.5021cb17.js",revision:"0ddae7f0f282185e38cbff75866105e6"},{url:"assets/js/layout-NotFound.24ceacf0.js",revision:"cf699af290d3b753afec543da4e40cbd"},{url:"assets/js/layout-Slide.476fb4f2.js",revision:"f4b63b6450c73f32d5a358d329226d79"},{url:"assets/js/page-cd.26fdd06a.js",revision:"4c6aec71901be9edc05f7a2ca9aaedfc"},{url:"assets/js/page-cp.8c0142a5.js",revision:"3086ef2efaad40e26e490aa392342c56"},{url:"assets/js/page-Home.bba7079b.js",revision:"074fb556086d11621ce2a45410e93665"},{url:"assets/js/page-Linux.ffe8513b.js",revision:"2d1e3eb34fa5293b0c4fdaa59cc310e5"},{url:"assets/js/page-pwd.56b4b0cd.js",revision:"9f0cac7902041dad595976ea64cf378f"},{url:"assets/js/page-基本用法.30363a4d.js",revision:"c5923755022c65d2f7541fa7fa1bfe18"},{url:"assets/js/page-文件系统.413085ca.js",revision:"bca700b515d1cc24aedd7a05f3c1c013"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.df568af6.js",revision:"c68a5bb1bb8da58e82859801661d7fba"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.2a6350a2.js",revision:"0938b45db4a1fb0f0900d8d0b5842fc0"},{url:"assets/js/vendors~layout-Layout.9d0a42e8.js",revision:"615475f6e33bb87f34b9c69ec1320f8b"},{url:"logo.svg",revision:"4c28b9159fd1f1d514023a7311758d23"},{url:"assets/fonts/element-icons.535877f5.woff",revision:"535877f50039c0cb49a6196a5b7517cd"},{url:"assets/fonts/element-icons.732389de.ttf",revision:"732389ded34cb9c52dd88271f1345af9"},{url:"404.html",revision:"a0e89f3464c3b79bbeeb3a12b6ae231d"},{url:"article/index.html",revision:"117b89012aa5d10f33a9075a658cfbaf"},{url:"category/index.html",revision:"05425bdddb79517b271d6df693159361"},{url:"category/Linux/index.html",revision:"b90c0988a85698ab4f7f7dbf34200d12"},{url:"encrypt/index.html",revision:"d49587d3e5bd69381264efdeee4ce8bc"},{url:"index.html",revision:"00d7c2b29c0a818f9c229f0fe3978d14"},{url:"Linux/index.html",revision:"1e25b1ce7eb3c6cf9a4719a659f03a4a"},{url:"Linux/文件系统/cd/index.html",revision:"ff5fb19c8060f6cea7d9798ee208ad8a"},{url:"Linux/文件系统/cp/index.html",revision:"29fe4523492535ed7aac8975e2f8a1d8"},{url:"Linux/文件系统/index.html",revision:"406c83629b6a3084bbd7a1e162667654"},{url:"Linux/文件系统/ls/index.html",revision:"38c03a12804b906fc23626a4dd3c9a8f"},{url:"Linux/文件系统/pwd/index.html",revision:"c31864bb7fa9984415bb7ec066a94b6b"},{url:"slide/index.html",revision:"cdc972f17a171c555391a68290ec2b30"},{url:"star/index.html",revision:"259c81f80f090a53275314e53e4cc055"},{url:"tag/cd/index.html",revision:"87d6132453e34ccc645bf81cee28be20"},{url:"tag/cp/index.html",revision:"3d247bda00bd44a91d7e5371ead3a379"},{url:"tag/File System/index.html",revision:"dd0125cbb8fe2da746a1826807fb97fc"},{url:"tag/index.html",revision:"276f4a18649ef8dc89e52f8dcf6eaeea"},{url:"tag/Linux/index.html",revision:"479fc2bb20e3df295afd4deab5bd61b1"},{url:"tag/ls/index.html",revision:"befe6f2b3d5f0d6c5e3808334e019518"},{url:"tag/pwd/index.html",revision:"997eee010468ec2d46d8a316b1a5f150"},{url:"timeline/index.html",revision:"e7798888c6c71e8a79c949f37be2d88b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
