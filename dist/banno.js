!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/assets/",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e);n(2),document.getElementById("loader"),document.getElementById("mySpan");var r=document.getElementById("myDiv"),o=new Headers;let i,a,s=new DOMParser;var l=0,c=0,u=0,f=[],p=!1,d=new Request("https://cors-anywhere.herokuapp.com/http://banno.com",{method:"GET",headers:o,mode:"cors",cache:"default"});function m(){for(var t=0;t<f.length;t++){var e=document.createElement("LI");e.innerText=f[t],r.appendChild(e)}document.getElementById("loader").style.display="none",document.getElementById("myDiv").style.display="block"}function h(){!function(t){let e="abcdefghijklmnopqrstuvwxyz0123456789";e=e.split("");let n=new Array(e.length+1).fill(0);for(var r=0;r<t.length;r++)for(var o=1;o<=e.length;o++)t[r].toLowerCase()==e[o-1]&&n[o]++;for(r=0;r<n.length;r++)n[r]>n[l]&&(l=r);for(r=0;r<n.length;r++)n[r]>n[c]&&n[r]<n[l]&&(c=r);for(r=0;r<n.length;r++)n[r]>n[u]&&n[r]<n[c]&&(u=r);f.push(`Most common Alphanumeric char: ${e[l-1]}, count: ${n[l]}`),f.push(`Second most common Alphanumeric char: ${e[c-1]}, count: ${n[c]}`),f.push(`Third most common Alphanumeric char: ${e[u-1]}, count: ${n[u]}`)}(a);let t=i.getElementsByTagName("li");f.push(`Number of Products: ${t[1].childElementCount}`);let e=i.getElementsByTagName("a");var n="";for(let t=0;t<e.length;t++)"Twitter"==e[t].innerText&&(n=e[t].getAttribute("href"));f.push(`Twitter handle: ${n}`);var r=new RegExp("(\\w*financial institution\\w*)","gi"),o=a.match(r);f.push(`Financial Institution occurs ${o.length} times in text`);let s=i.getElementsByTagName("img"),p=i.getElementsByTagName("link"),d=i.getElementsByTagName("meta");r=new RegExp("(\\w*.png\\w*)","gi");var h="";for(let t=0;t<s.length;t++)h+=s[t].getAttribute("src");for(let t=0;t<p.length;t++)h+=p[t].getAttribute("href");for(let t=0;t<d.length;t++)h+=d[t].getAttribute("content");o=h.match(r),f.push(`There are ${o.length+1} png images on the page`),m()}p=!0,document.getElementById("myDiv").style.display="none",document.getElementById("loader").style.display="block",fetch(d).then(function(t){if(!t.ok)throw r.innerText="Error loading content, please try again later",m(),Error(t.statusText);return t}).then(t=>t.text()).then(function(t){document.getElementById("loader"),document.getElementById("mySpan"),a=t,i=s.parseFromString(t,"text/html"),p=!1}).catch(function(t){console.log("There has been a problem with your fetch operation: ",t.message)}),function t(){p?setTimeout(function(){t()},100):h()}()},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,'li {\r\n    font-family: Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;\r\n    list-style-type: none;\r\n    font-size: 12pt;\r\n    margin: 15pt 15pt 0pt;\r\n}\r\nh1{\r\n    font-family: Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;\r\n    text-align: center;\r\n    font-size: 20pt;\r\n    padding: 10px;\r\n    \r\n    color: #f3f3f3;\r\n    transform: scale(1.4, 1);\r\n}\r\n\r\n#myDiv{\r\n    \r\n    margin: auto;\r\n    margin-top: 40px;\r\n    padding: 0 0 20pt 0;\r\n    width: 500px;\r\n    outline: 1px solid black;\r\n}\r\n\r\n#loader {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    z-index: 1;\r\n    width: 150px;\r\n    height: 150px;\r\n    margin: -75px 0 0 -75px;\r\n    border: 16px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 16px solid #3498db;\r\n    width: 120px;\r\n    height: 120px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n/* Add animation to "page content" */\r\n\r\n.animate-bottom {\r\n    position: relative;\r\n    -webkit-animation-name: animatebottom;\r\n    -webkit-animation-duration: 1s;\r\n    animation-name: animatebottom;\r\n    animation-duration: 1s\r\n}\r\n\r\n@-webkit-keyframes animatebottom {\r\n    from {\r\n        bottom: -100px;\r\n        opacity: 0\r\n    }\r\n    to {\r\n        bottom: 0px;\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@keyframes animatebottom {\r\n    from {\r\n        bottom: -100px;\r\n        opacity: 0\r\n    }\r\n    to {\r\n        bottom: 0;\r\n        opacity: 1\r\n    }\r\n}\r\n',""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),l=null,c=0,u=[],f=n(6);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function m(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),m(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=c++;n=l||(l=g(e)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),m(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var v,w=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);