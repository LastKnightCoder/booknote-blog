if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.94ab4d8b.css",revision:"6f32f2b564effc0dc0977750d0ae6180"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/20.3e3222a9.js",revision:"e2c3d97980a456b632f8db7e7a54bbec"},{url:"assets/js/21.9a748ba5.js",revision:"d36994031896940c8d740cabc6dc3abf"},{url:"assets/js/22.fbc11e09.js",revision:"60c276d0424deda461924aae0787989f"},{url:"assets/js/23.d384bd76.js",revision:"83668239e9b40c82c61257c4db8b1672"},{url:"assets/js/24.7c600f67.js",revision:"417f100bb921a26ef2b9d5b181b86410"},{url:"assets/js/25.c5dd1020.js",revision:"b8ae9804f01b4ce3212afcc51d10e053"},{url:"assets/js/26.26bd4430.js",revision:"2ff1538eae2ca99bba84936946ac700b"},{url:"assets/js/27.0f4fbf44.js",revision:"7fbe9bfda4996db38f1717e474f13155"},{url:"assets/js/28.0ae0d3ab.js",revision:"728a5f79a5aed67fc4a74667ee609461"},{url:"assets/js/29.36988692.js",revision:"04952c1829ae1cead6e210b025b9abd1"},{url:"assets/js/app.be2c4e88.js",revision:"164b88753a97640e2d1a197abda88e88"},{url:"assets/js/layout-Blog.cb7b8ec0.js",revision:"4d1430b89180fefb7ff76306a29f7343"},{url:"assets/js/layout-Layout.5021cb17.js",revision:"0ddae7f0f282185e38cbff75866105e6"},{url:"assets/js/layout-NotFound.24ceacf0.js",revision:"cf699af290d3b753afec543da4e40cbd"},{url:"assets/js/layout-Slide.476fb4f2.js",revision:"f4b63b6450c73f32d5a358d329226d79"},{url:"assets/js/page-cd.2aeb35c3.js",revision:"b0aa95cac8cac05dbbf79a311dd9e8ab"},{url:"assets/js/page-cp.821f5588.js",revision:"8e35c59b9ed9422a9df981367ed5b677"},{url:"assets/js/page-Home.6f2b8c31.js",revision:"5935d7d77b2ec035eaa09dbd0f0754de"},{url:"assets/js/page-Linux.ffe8513b.js",revision:"2d1e3eb34fa5293b0c4fdaa59cc310e5"},{url:"assets/js/page-mv.91fbe25a.js",revision:"19bc38f7b43eb30e004874bc0b9be433"},{url:"assets/js/page-pwd.b0c4a542.js",revision:"da6ae4a2f41be821592b3cb5fda39a5c"},{url:"assets/js/page-rmdir.04df4f09.js",revision:"d4eafa800e19e27bcb2472cb22c0e1a9"},{url:"assets/js/page-touch.ecb179db.js",revision:"e10b6ea7a7a1d22a1d6a8722c798c27f"},{url:"assets/js/page-基本用法.6c32763d.js",revision:"4fa64a0a9813945ba2a8a00c2cb249e9"},{url:"assets/js/page-文件系统.88830336.js",revision:"1e386159cb538e12eb91c9b6293919de"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.df568af6.js",revision:"c68a5bb1bb8da58e82859801661d7fba"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.2a6350a2.js",revision:"0938b45db4a1fb0f0900d8d0b5842fc0"},{url:"assets/js/vendors~layout-Layout.cbcea7da.js",revision:"6aa46c86f283c1cfadcfdb22da54a079"},{url:"logo.svg",revision:"4c28b9159fd1f1d514023a7311758d23"},{url:"assets/fonts/element-icons.535877f5.woff",revision:"535877f50039c0cb49a6196a5b7517cd"},{url:"assets/fonts/element-icons.732389de.ttf",revision:"732389ded34cb9c52dd88271f1345af9"},{url:"404.html",revision:"56c37e9cc5670ab53814323a4859ee82"},{url:"article/index.html",revision:"5764599ed74cb3a80592f65337710fbf"},{url:"category/index.html",revision:"9f948815c3f06168e14e5574be4b96af"},{url:"category/Linux/index.html",revision:"996a444a83ffd0f31969d079a3cb1f6c"},{url:"encrypt/index.html",revision:"52790db4d13c3a62e2d7b3a8abd6eb82"},{url:"index.html",revision:"e66010e3f7417370a000db7b1e23fd55"},{url:"Linux/index.html",revision:"116ec81ca843472fe98b80950e32668e"},{url:"Linux/文件系统/cd/index.html",revision:"f5fa6f67fcc6bc2516a621a82d1014d7"},{url:"Linux/文件系统/cp/index.html",revision:"0fe778be46b61229ca071fad9b4bb70b"},{url:"Linux/文件系统/index.html",revision:"b7426666d0a956d079b34d10308980dc"},{url:"Linux/文件系统/ls/index.html",revision:"5176c1612a685b38b789d71792a5c2c4"},{url:"Linux/文件系统/mv/index.html",revision:"939947d774473e2023cf51643f78af09"},{url:"Linux/文件系统/pwd/index.html",revision:"2ee3355db1ab5512a97a1070914a01d5"},{url:"Linux/文件系统/rmdir/index.html",revision:"3a821102dad5c33049a903f2f80ba4bc"},{url:"Linux/文件系统/touch/index.html",revision:"439d6ec92f26ba22d11718eb9f27e32d"},{url:"slide/index.html",revision:"5afdd6191aa193dfc4feabb764d5f2dd"},{url:"star/index.html",revision:"01f314c5879a263bdb49477f57e69843"},{url:"tag/cd/index.html",revision:"020c7f9f0982f9b8b208ab3cee1763b1"},{url:"tag/cp/index.html",revision:"713e1cca998a885f89ec1862d8a0058e"},{url:"tag/File System/index.html",revision:"6a1d0020ab1847f6bded0cd3865d6dcb"},{url:"tag/index.html",revision:"cc3585fa975bb446f151307ad4bd3eb6"},{url:"tag/Linux/index.html",revision:"5bcafed938aee330b9181aeb0dffaa63"},{url:"tag/ls/index.html",revision:"e2577abbf3d24e20b4607de4e71ad16a"},{url:"tag/mv/index.html",revision:"29a16305e5027e950dcba08d088df144"},{url:"tag/pwd/index.html",revision:"82bbaa7bab57a8b542f1806203282217"},{url:"tag/rmdir/index.html",revision:"77b6cf4805e3b1def3d93ba65d0b01f3"},{url:"tag/touch/index.html",revision:"ec3d2f5f91ec60020fdf94df01d00bb7"},{url:"timeline/index.html",revision:"963245f3c43ff01c5520c9c02ca50c32"}],{}),e.cleanupOutdatedCaches()}));
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
