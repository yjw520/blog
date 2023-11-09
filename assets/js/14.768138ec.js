(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{305:function(t,e,s){"use strict";s.r(e);var r=s(13),n=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"load和domcontentloaded"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load和domcontentloaded"}},[t._v("#")]),t._v(" load和DOMContentLoaded")]),t._v(" "),e("hr"),t._v(" "),e("ol",[e("li",[t._v("load（Window: load）"),e("br"),t._v("\nload事件在整个页面及所有依赖资源如样式和图片都已完成加载时触发。（该事件不可取消，也不会冒泡）"),e("br"),t._v("\nMDN："),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/load_event",target:"_blank",rel:"noopener noreferrer"}},[t._v("解释"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("DOMcontentLoaded（Document: DOMContentLoaded事件）"),e("br"),t._v("\n当HTML文档完全解析，且所有延迟脚本"),e("code",[t._v('（<script defer src="…"> 和 <script type="module">）')]),t._v("下载和执行完毕后，会触发DOMContentLoaded事件。他不会等待图片、子框架和异步脚本等其他内容完成加载"),e("br"),t._v("\nMDN："),e("a",{attrs:{href:""}},[t._v("解释")]),e("br"),t._v("\n这里需要了解一下浏览器渲染过程（顺便复习一下）：\n"),e("ul",[e("li",[e("p",[t._v("浏览器请求下载到对应的html页面")])]),t._v(" "),e("li",[e("p",[t._v("浏览器首先解析html得DOM结构")])]),t._v(" "),e("li",[e("p",[t._v("首先解析道head，head里得外部资源无非是外链样式表和外链js，发现有外链css或者外链js，停止解析并开启一个下载线程去下载该资源")])]),t._v(" "),e("li",[e("p",[t._v("解析到body")]),t._v(" "),e("ul",[e("li",[t._v("body只有DOM元素：DOM树构建完，页面首次渲染")]),t._v(" "),e("li",[t._v("有DOM元素、外链js：当执行到外链js得时候，js之前的DOM会被渲染到页面上，同时js会阻塞后面DOM的构建，即后面的DOM渲染需要等待js执行完")]),t._v(" "),e("li",[t._v("有DOM元素、外链css：外链css不会影响DOM构建，但是会阻碍渲染")]),t._v(" "),e("li",[t._v("有DOM元素、外链js、外链css：js之前的外链css未加载完之前，页面不会被渲染，加载完成之后开始和js之前的DOM树合成渲染树，开始渲染，DOM树构建完毕会触发DOMContentLoaded")])])]),t._v(" "),e("li",[e("p",[t._v("DOMContentLoaded 事件在 html文档加载完毕，并且 html 所引用的内联 js、以及外链 js 的同步代码都执行完毕后触发。"),e("br"),t._v("\nasync和defer（读取都是异步的，解析时间不一样）")])]),t._v(" "),e("li",[e("p",[e("code",[t._v('<script src="index.js"><\/script>')]),e("br"),t._v("\n浏览器必须等待 index.js 加载和执行完毕才能去做其它事情。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v('<script async src="index.js"><\/script>')]),e("br"),t._v("\nindex.js 的加载是异步的，加载时不会阻塞页面渲染，适用于js代码不需要操作DOM的\n下载完毕之后立即加载，在另一个线程中加载，而不是Main Thread")])]),t._v(" "),e("li",[e("p",[e("code",[t._v('<script defer src="index.js"><\/script>')]),e("br"),t._v("\nJS 的加载是异步的，执行是被推迟的。\n使用了 defer 标记的脚本文件，会等整个文档解析完成，在 DOMContentLoaded 事件触发之前执行，HTML5脚本规范规定它们按顺序执行。\n在实际当中，不一定按顺序执行或者在DOMContentLoaded事件之前执行")])]),t._v(" "),e("li",[e("p",[t._v("普通模式："),e("code",[t._v('<script type="text/javascript" src="x.min.js"><\/script>')]),e("br"),t._v("\n当浏览器遇到script标签时，文档的解析将停止，并立即下载并执行脚本，脚本执行完毕后将继续解析文档")])]),t._v(" "),e("li",[e("p",[t._v("async模式："),e("code",[t._v('<script type="text/javascript" src="x.min.js" async="async"><\/script>')]),e("br"),t._v("\n当浏览器遇到script标签时，文档的解析不会停止，其他线程将下载脚本，脚本下载完成后开始执行脚本，脚本执行的过程中文档将停止解析，直到脚本执行完成"),e("br"),t._v("\n使用场景：如果你的脚本并不关心页面中的DOM元素（文档是否解析完毕），并且也不会产生其他脚本需要的数据。"),e("br"),t._v("\n例如：统计")])]),t._v(" "),e("li",[e("p",[t._v("defer模式："),e("code",[t._v('<script type="text/javascript" src="x.min.js" defer="defer"><\/script>')]),e("br"),t._v("\n当浏览起遇到script标签时，文档的解析不会停止，其他的线程将下载脚本，待到文档解析完成，脚本才会执行"),e("br"),t._v("\n使用场景：如果你的脚本代码依赖于页面中的DOM元素（文档是否解析完毕），或者被其他脚本文件依赖。")]),t._v(" "),e("ul",[e("li",[t._v("评论框")]),t._v(" "),e("li",[t._v("代码语法高亮")]),t._v(" "),e("li",[t._v("polyfill.js")])])])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);