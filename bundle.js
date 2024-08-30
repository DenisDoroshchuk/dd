(()=>{var t={172:function(t){var e;e=()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>r});class n{#t={pauseMin:100,pauseMax:170,keepBlinking:!0,className:"typewriter",cursor:"|",injectStyles:!0,autoStart:!0,onStart:null,onFinish:null,onTask:null};#e;#n;#r=[];#a=!1;#i=!0;static#o={};constructor(t,e){this.#n=t,this.#e={...this.#t,...e},this.#e.injectStyles&&this.#s(),this.#n.dataset.cursor=this.#e.cursor}write(t){let e=this;return[...t].forEach((t=>{e.#r.push({type:"write",char:t})})),this.#e.autoStart&&this.start(),this}delete(t=1){for(let e=0;e<t;e++)this.#r.push({type:"delete",all:!1});return this.#e.autoStart&&this.start(),this}wait(t=1e3){return this.#r.push({type:"wait",t}),this.#e.autoStart&&this.start(),this}wipe(){return this.#r.push({type:"delete",all:!0}),this.#e.autoStart&&this.start(),this}config(t){return this.#r.push({type:"config",params:t}),this}start(){this.#i&&(this.#n.classList.add(this.#e.className),this.#i=!1),this.#a||(this.#e.onStart?.(this.#n,this.#e),this.#u())}#s(){if(!n.#o[this.#e.className]){const t=`\n            .${this.#e.className}:not(.noblink):after{animation:blink 1s linear infinite;content:attr(data-cursor)}@keyframes blink{0%{opacity:0}50%{opacity:0}51%{opacity:1}}`,e=document.createElement("style");e.textContent=t,document.head.append(e),n.#o[this.#e.className]=!0}}#u(){if(this.#r.length>0){this.#a=!0;const t=this.#r.shift();let e=this.#c(this.#e.pauseMin,this.#e.pauseMax);this.#e.onTask?.(t,this.#n,this.#e),"write"==t.type?setTimeout((()=>{this.#l(t.char),this.#u()}),e):"delete"==t.type?setTimeout((()=>{this.#f(t.all),this.#u()}),e):"wait"==t.type?setTimeout((()=>{this.#u()}),t.t):"config"==t.type&&(this.#e={...this.#e,...t.params},this.#u())}else this.#a=!1,this.#d()}#l(t){this.#n.innerHTML+=t}#f(t=!1){this.#n.innerHTML=t?"":this.#n.innerHTML.substring(0,this.#n.innerHTML.length-1)}#d(){this.#e.onFinish?.(this.#n,this.#e),this.#e.keepBlinking||this.#n.classList.add("noblink")}#c=(t,e)=>Math.random()*(e-t)+t}const r=n;return e.default})(),t.exports=e()},100:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var r=n(601),a=n.n(r),i=n(314),o=n.n(i)()(a());o.push([t.id,':root{--night: #0a090cff;--antiflash-white: #f0edeeff;--midnight-green: #07393cff;--caribbean-current: #2c666eff;--non-photo-blue: #90ddf0ff}body{font-family:"Handjet",sans-serif;background-color:var(--midnight-green);padding:0;margin:0;letter-spacing:1px}main{display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:100vh}.content{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;max-width:100%;width:1024px;padding:20px;gap:20px;box-sizing:border-box;color:var(--antiflash-white)}@media screen and (max-width: 768px){.content{gap:0}}.top__container{display:flex;justify-content:center;width:100%}.top__container h1{color:var(--non-photo-blue);font-size:5rem;font-weight:400;line-height:1;position:relative;margin:0 0 10px}.top__container h1 .cursor{position:absolute;top:0;bottom:0;left:0}@media screen and (max-width: 768px){.top__container h1{font-size:4rem}}@media screen and (max-width: 425px){.top__container h1{font-size:2.2rem}}.logo__container{display:flex;justify-content:center;width:350px;max-width:100%}.logo__container img{max-width:100%;height:auto}.text__container{width:450px;max-width:100%}.text__container p{font-size:1.3rem;font-weight:250}.text__container p strong{font-weight:400;color:var(--non-photo-blue)}.text__container p:first-child{margin-top:0}.text__container p:last-child{margin-bottom:0}@media screen and (max-width: 425px){.text__container p{font-size:1rem}}.footer{display:flex;flex-direction:column;align-items:center;max-width:100%;width:1024px;padding:20px;box-sizing:border-box}.footer p{text-align:center;font-size:1.3rem;font-weight:250;color:var(--antiflash-white);margin:0}.footer p.or{margin:1rem 0 .5rem}.footer p a{color:var(--non-photo-blue);text-decoration:none;transition:all ease-in-out .3s}.social-link{display:flex;width:50px;height:50px;text-decoration:none;cursor:pointer}.social-link__container{display:flex;gap:10px}.social-link:hover svg{scale:1.01;transform:rotate(2deg)}.social-link--upwork:hover svg{fill:#14a800}.social-link--linkedin:hover svg{fill:#0a66c2}.social-link--facebook:hover svg{fill:#0866ff}',""]);const s=o},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,i){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(o[u]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},o=[],s=0;s<t.length;s++){var u=t[s],c=r.base?u[0]+r.base:u[0],l=i[c]||0,f="".concat(c," ").concat(l);i[c]=l+1;var d=n(f),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var h=a(p,r);r.byIndex=s,e.splice(s,0,{identifier:f,updater:h,references:1})}o.push(f)}return o}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var i=r(t=t||[],a=a||{});return function(t){t=t||[];for(var o=0;o<i.length;o++){var s=n(i[o]);e[s].references--}for(var u=r(t,a),c=0;c<i.length;c++){var l=n(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=u}}},659:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(72),e=n.n(t),r=n(825),a=n.n(r),i=n(659),o=n.n(i),s=n(56),u=n.n(s),c=n(540),l=n.n(c),f=n(113),d=n.n(f),p=n(100),h={};h.styleTagTransform=d(),h.setAttributes=u(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),e()(p.A,h),p.A&&p.A.locals&&p.A.locals;var g={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},m={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},v=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],y={CSS:{},springs:{}};function x(t,e,n){return Math.min(Math.max(t,e),n)}function b(t,e){return t.indexOf(e)>-1}function w(t,e){return t.apply(null,e)}var M={arr:function(t){return Array.isArray(t)},obj:function(t){return b(Object.prototype.toString.call(t),"Object")},pth:function(t){return M.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||M.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},nil:function(t){return M.und(t)||null===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return M.hex(t)||M.rgb(t)||M.hsl(t)},key:function(t){return!g.hasOwnProperty(t)&&!m.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function k(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map((function(t){return parseFloat(t)})):[]}function O(t,e){var n=k(t),r=x(M.und(n[0])?1:n[0],.1,100),a=x(M.und(n[1])?100:n[1],.1,100),i=x(M.und(n[2])?10:n[2],.1,100),o=x(M.und(n[3])?0:n[3],.1,100),s=Math.sqrt(a/r),u=i/(2*Math.sqrt(a*r)),c=u<1?s*Math.sqrt(1-u*u):0,l=u<1?(u*s-o)/c:-o+s;function f(t){var n=e?e*t/1e3:t;return n=u<1?Math.exp(-n*u*s)*(1*Math.cos(c*n)+l*Math.sin(c*n)):(1+l*n)*Math.exp(-n*s),0===t||1===t?t:1-n}return e?f:function(){var e=y.springs[t];if(e)return e;for(var n=1/6,r=0,a=0;;)if(1===f(r+=n)){if(++a>=16)break}else a=0;var i=r*n*1e3;return y.springs[t]=i,i}}function S(t){return void 0===t&&(t=10),function(e){return Math.ceil(x(e,1e-6,1)*t)*(1/t)}}var I,_,T=function(){var t=.1;function e(t,e){return 1-3*e+3*t}function n(t,e){return 3*e-6*t}function r(t){return 3*t}function a(t,a,i){return((e(a,i)*t+n(a,i))*t+r(a))*t}function i(t,a,i){return 3*e(a,i)*t*t+2*n(a,i)*t+r(a)}return function(e,n,r,o){if(0<=e&&e<=1&&0<=r&&r<=1){var s=new Float32Array(11);if(e!==n||r!==o)for(var u=0;u<11;++u)s[u]=a(u*t,e,r);return function(u){return e===n&&r===o||0===u||1===u?u:a(function(n){for(var o=0,u=1;10!==u&&s[u]<=n;++u)o+=t;--u;var c=o+(n-s[u])/(s[u+1]-s[u])*t,l=i(c,e,r);return l>=.001?function(t,e,n,r){for(var o=0;o<4;++o){var s=i(e,n,r);if(0===s)return e;e-=(a(e,n,r)-t)/s}return e}(n,c,e,r):0===l?c:function(t,e,n,r,i){var o,s,u=0;do{(o=a(s=e+(n-e)/2,r,i)-t)>0?n=s:e=s}while(Math.abs(o)>1e-7&&++u<10);return s}(n,o,o+t,e,r)}(u),n,o)}}}}(),C=(I={linear:function(){return function(t){return t}}},_={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Expo:function(){return function(t){return t?Math.pow(2,10*t-10):0}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}},Elastic:function(t,e){void 0===t&&(t=1),void 0===e&&(e=.5);var n=x(t,1,10),r=x(e,.1,2);return function(t){return 0===t||1===t?t:-n*Math.pow(2,10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint"].forEach((function(t,e){_[t]=function(){return function(t){return Math.pow(t,e+2)}}})),Object.keys(_).forEach((function(t){var e=_[t];I["easeIn"+t]=e,I["easeOut"+t]=function(t,n){return function(r){return 1-e(t,n)(1-r)}},I["easeInOut"+t]=function(t,n){return function(r){return r<.5?e(t,n)(2*r)/2:1-e(t,n)(-2*r+2)/2}},I["easeOutIn"+t]=function(t,n){return function(r){return r<.5?(1-e(t,n)(1-2*r))/2:(e(t,n)(2*r-1)+1)/2}}})),I);function P(t,e){if(M.fnc(t))return t;var n=t.split("(")[0],r=C[n],a=k(t);switch(n){case"spring":return O(t,e);case"cubicBezier":return w(T,a);case"steps":return w(S,a);default:return w(r,a)}}function E(t){try{return document.querySelectorAll(t)}catch(t){return}}function A(t,e){for(var n=t.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in t){var o=t[i];e.call(r,o,i,t)&&a.push(o)}return a}function B(t){return t.reduce((function(t,e){return t.concat(M.arr(e)?B(e):e)}),[])}function j(t){return M.arr(t)?t:(M.str(t)&&(t=E(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function N(t,e){return t.some((function(t){return t===e}))}function D(t){var e={};for(var n in t)e[n]=t[n];return e}function F(t,e){var n=D(t);for(var r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function L(t,e){var n=D(t);for(var r in e)n[r]=M.und(t[r])?e[r]:t[r];return n}function H(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function q(t,e){return M.fnc(t)?t(e.target,e.id,e.total):t}function z(t,e){return t.getAttribute(e)}function Y(t,e,n){if(N([n,"deg","rad","turn"],H(e)))return e;var r=y.CSS[e+n];if(!M.und(r))return r;var a=document.createElement(t.tagName),i=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+n;var o=100/a.offsetWidth;i.removeChild(a);var s=o*parseFloat(e);return y.CSS[e+n]=s,s}function $(t,e,n){if(e in t.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=t.style[e]||getComputedStyle(t).getPropertyValue(r)||"0";return n?Y(t,a,n):a}}function V(t,e){return M.dom(t)&&!M.inp(t)&&(!M.nil(z(t,e))||M.svg(t)&&t[e])?"attribute":M.dom(t)&&N(v,e)?"transform":M.dom(t)&&"transform"!==e&&$(t,e)?"css":null!=t[e]?"object":void 0}function W(t){if(M.dom(t)){for(var e,n=t.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(n);)a.set(e[1],e[2]);return a}}function X(t,e,n,r){switch(V(t,e)){case"transform":return function(t,e,n,r){var a=b(e,"scale")?1:0+function(t){return b(t,"translate")||"perspective"===t?"px":b(t,"rotate")||b(t,"skew")?"deg":void 0}(e),i=W(t).get(e)||a;return n&&(n.transforms.list.set(e,i),n.transforms.last=e),r?Y(t,i,r):i}(t,e,r,n);case"css":return $(t,e,n);case"attribute":return z(t,e);default:return t[e]||0}}function Z(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=H(t)||0,a=parseFloat(e),i=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function G(t,e){if(M.col(t))return function(t){return M.rgb(t)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=t))?"rgba("+n[1]+",1)":e:M.hex(t)?function(t){var e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,n,r){return e+e+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(t):M.hsl(t)?function(t){var e,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,s=parseInt(a[3],10)/100,u=a[4]||1;function c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(0==o)e=n=r=s;else{var l=s<.5?s*(1+o):s+o-s*o,f=2*s-l;e=c(f,l,i+1/3),n=c(f,l,i),r=c(f,l,i-1/3)}return"rgba("+255*e+","+255*n+","+255*r+","+u+")"}(t):void 0;var e,n}(t);if(/\s/g.test(t))return t;var n=H(t),r=n?t.substr(0,t.length-n.length):t;return e?r+e:r}function Q(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function R(t){for(var e,n=t.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);a>0&&(r+=Q(e,i)),e=i}return r}function U(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return function(t){return 2*Math.PI*z(t,"r")}(t);case"rect":return function(t){return 2*z(t,"width")+2*z(t,"height")}(t);case"line":return function(t){return Q({x:z(t,"x1"),y:z(t,"y1")},{x:z(t,"x2"),y:z(t,"y2")})}(t);case"polyline":return R(t);case"polygon":return function(t){var e=t.points;return R(t)+Q(e.getItem(e.numberOfItems-1),e.getItem(0))}(t)}}function J(t,e){var n=e||{},r=n.el||function(t){for(var e=t.parentNode;M.svg(e)&&M.svg(e.parentNode);)e=e.parentNode;return e}(t),a=r.getBoundingClientRect(),i=z(r,"viewBox"),o=a.width,s=a.height,u=n.viewBox||(i?i.split(" "):[0,0,o,s]);return{el:r,viewBox:u,x:u[0]/1,y:u[1]/1,w:o,h:s,vW:u[2],vH:u[3]}}function K(t,e,n){function r(n){void 0===n&&(n=0);var r=e+n>=1?e+n:0;return t.el.getPointAtLength(r)}var a=J(t.el,t.svg),i=r(),o=r(-1),s=r(1),u=n?1:a.w/a.vW,c=n?1:a.h/a.vH;switch(t.property){case"x":return(i.x-a.x)*u;case"y":return(i.y-a.y)*c;case"angle":return 180*Math.atan2(s.y-o.y,s.x-o.x)/Math.PI}}function tt(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=G(M.pth(t)?t.totalLength:t,e)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:M.str(t)||e?r.split(n):[]}}function et(t){return A(t?B(M.arr(t)?t.map(j):j(t)):[],(function(t,e,n){return n.indexOf(t)===e}))}function nt(t){var e=et(t);return e.map((function(t,n){return{target:t,id:n,total:e.length,transforms:{list:W(t)}}}))}function rt(t,e){var n=D(e);if(/^spring/.test(n.easing)&&(n.duration=O(n.easing)),M.arr(t)){var r=t.length;2!==r||M.obj(t[0])?M.fnc(e.duration)||(n.duration=e.duration/r):t={value:t}}var a=M.arr(t)?t:[t];return a.map((function(t,n){var r=M.obj(t)&&!M.pth(t)?t:{value:t};return M.und(r.delay)&&(r.delay=n?0:e.delay),M.und(r.endDelay)&&(r.endDelay=n===a.length-1?e.endDelay:0),r})).map((function(t){return L(t,n)}))}var at={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,a){if(r.list.set(e,n),e===r.last||a){var i="";r.list.forEach((function(t,e){i+=e+"("+t+") "})),t.style.transform=i}}};function it(t,e){nt(t).forEach((function(t){for(var n in e){var r=q(e[n],t),a=t.target,i=H(r),o=X(a,n,i,t),s=Z(G(r,i||H(o)),o),u=V(a,n);at[u](a,n,s,t.transforms,!0)}}))}function ot(t,e){return A(B(t.map((function(t){return e.map((function(e){return function(t,e){var n=V(t.target,e.name);if(n){var r=function(t,e){var n;return t.tweens.map((function(r){var a=function(t,e){var n={};for(var r in t){var a=q(t[r],e);M.arr(a)&&1===(a=a.map((function(t){return q(t,e)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,e),i=a.value,o=M.arr(i)?i[1]:i,s=H(o),u=X(e.target,t.name,s,e),c=n?n.to.original:u,l=M.arr(i)?i[0]:c,f=H(l)||H(u),d=s||f;return M.und(o)&&(o=c),a.from=tt(l,d),a.to=tt(Z(o,l),d),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=P(a.easing,a.duration),a.isPath=M.pth(i),a.isPathTargetInsideSVG=a.isPath&&M.svg(e.target),a.isColor=M.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}(e,t),a=r[r.length-1];return{type:n,property:e.name,animatable:t,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(t,e)}))}))),(function(t){return!M.und(t)}))}function st(t,e){var n=t.length,r=function(t){return t.timelineOffset?t.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,t.map((function(t){return r(t)+t.duration}))):e.duration,a.delay=n?Math.min.apply(Math,t.map((function(t){return r(t)+t.delay}))):e.delay,a.endDelay=n?a.duration-Math.max.apply(Math,t.map((function(t){return r(t)+t.duration-t.endDelay}))):e.endDelay,a}var ut=0,ct=[],lt=function(){var t;function e(n){for(var r=ct.length,a=0;a<r;){var i=ct[a];i.paused?(ct.splice(a,1),r--):(i.tick(n),a++)}t=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){dt.suspendWhenDocumentHidden&&(ft()?t=cancelAnimationFrame(t):(ct.forEach((function(t){return t._onDocumentVisibility()})),lt()))})),function(){t||ft()&&dt.suspendWhenDocumentHidden||!(ct.length>0)||(t=requestAnimationFrame(e))}}();function ft(){return!!document&&document.hidden}function dt(t){void 0===t&&(t={});var e,n=0,r=0,a=0,i=0,o=null;function s(t){var e=window.Promise&&new Promise((function(t){return o=t}));return t.finished=e,e}var u=function(t){var e=F(g,t),n=F(m,t),r=function(t,e){var n=[],r=e.keyframes;for(var a in r&&(e=L(function(t){for(var e=A(B(t.map((function(t){return Object.keys(t)}))),(function(t){return M.key(t)})).reduce((function(t,e){return t.indexOf(e)<0&&t.push(e),t}),[]),n={},r=function(r){var a=e[r];n[a]=t.map((function(t){var e={};for(var n in t)M.key(n)?n==a&&(e.value=t[n]):e[n]=t[n];return e}))},a=0;a<e.length;a++)r(a);return n}(r),e)),e)M.key(a)&&n.push({name:a,tweens:rt(e[a],t)});return n}(n,t),a=nt(t.targets),i=ot(a,r),o=st(i,n),s=ut;return ut++,L(e,{id:s,children:[],animatables:a,animations:i,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}(t);function c(){var t=u.direction;"alternate"!==t&&(u.direction="normal"!==t?"normal":"reverse"),u.reversed=!u.reversed,e.forEach((function(t){return t.reversed=u.reversed}))}function l(t){return u.reversed?u.duration-t:t}function f(){n=0,r=l(u.currentTime)*(1/dt.speed)}function d(t,e){e&&e.seek(t-e.timelineOffset)}function p(t){for(var e=0,n=u.animations,r=n.length;e<r;){var a=n[e],i=a.animatable,o=a.tweens,s=o.length-1,c=o[s];s&&(c=A(o,(function(e){return t<e.end}))[0]||c);for(var l=x(t-c.start-c.delay,0,c.duration)/c.duration,f=isNaN(l)?1:c.easing(l),d=c.to.strings,p=c.round,h=[],g=c.to.numbers.length,m=void 0,v=0;v<g;v++){var y=void 0,b=c.to.numbers[v],w=c.from.numbers[v]||0;y=c.isPath?K(c.value,f*b,c.isPathTargetInsideSVG):w+f*(b-w),p&&(c.isColor&&v>2||(y=Math.round(y*p)/p)),h.push(y)}var M=d.length;if(M){m=d[0];for(var k=0;k<M;k++){d[k];var O=d[k+1],S=h[k];isNaN(S)||(m+=O?S+O:S+" ")}}else m=h[0];at[a.type](i.target,a.property,m,i.transforms),a.currentValue=m,e++}}function h(t){u[t]&&!u.passThrough&&u[t](u)}function v(t){var f=u.duration,g=u.delay,m=f-u.endDelay,v=l(t);u.progress=x(v/f*100,0,100),u.reversePlayback=v<u.currentTime,e&&function(t){if(u.reversePlayback)for(var n=i;n--;)d(t,e[n]);else for(var r=0;r<i;r++)d(t,e[r])}(v),!u.began&&u.currentTime>0&&(u.began=!0,h("begin")),!u.loopBegan&&u.currentTime>0&&(u.loopBegan=!0,h("loopBegin")),v<=g&&0!==u.currentTime&&p(0),(v>=m&&u.currentTime!==f||!f)&&p(f),v>g&&v<m?(u.changeBegan||(u.changeBegan=!0,u.changeCompleted=!1,h("changeBegin")),h("change"),p(v)):u.changeBegan&&(u.changeCompleted=!0,u.changeBegan=!1,h("changeComplete")),u.currentTime=x(v,0,f),u.began&&h("update"),t>=f&&(r=0,u.remaining&&!0!==u.remaining&&u.remaining--,u.remaining?(n=a,h("loopComplete"),u.loopBegan=!1,"alternate"===u.direction&&c()):(u.paused=!0,u.completed||(u.completed=!0,h("loopComplete"),h("complete"),!u.passThrough&&"Promise"in window&&(o(),s(u)))))}return s(u),u.reset=function(){var t=u.direction;u.passThrough=!1,u.currentTime=0,u.progress=0,u.paused=!0,u.began=!1,u.loopBegan=!1,u.changeBegan=!1,u.completed=!1,u.changeCompleted=!1,u.reversePlayback=!1,u.reversed="reverse"===t,u.remaining=u.loop,e=u.children;for(var n=i=e.length;n--;)u.children[n].reset();(u.reversed&&!0!==u.loop||"alternate"===t&&1===u.loop)&&u.remaining++,p(u.reversed?u.duration:0)},u._onDocumentVisibility=f,u.set=function(t,e){return it(t,e),u},u.tick=function(t){a=t,n||(n=a),v((a+(r-n))*dt.speed)},u.seek=function(t){v(l(t))},u.pause=function(){u.paused=!0,f()},u.play=function(){u.paused&&(u.completed&&u.reset(),u.paused=!1,ct.push(u),f(),lt())},u.reverse=function(){c(),u.completed=!u.reversed,f()},u.restart=function(){u.reset(),u.play()},u.remove=function(t){ht(et(t),u)},u.reset(),u.autoplay&&u.play(),u}function pt(t,e){for(var n=e.length;n--;)N(t,e[n].animatable.target)&&e.splice(n,1)}function ht(t,e){var n=e.animations,r=e.children;pt(t,n);for(var a=r.length;a--;){var i=r[a],o=i.animations;pt(t,o),o.length||i.children.length||r.splice(a,1)}n.length||r.length||e.pause()}dt.version="3.2.1",dt.speed=1,dt.suspendWhenDocumentHidden=!0,dt.running=ct,dt.remove=function(t){for(var e=et(t),n=ct.length;n--;)ht(e,ct[n])},dt.get=X,dt.set=it,dt.convertPx=Y,dt.path=function(t,e){var n=M.str(t)?E(t)[0]:t,r=e||100;return function(t){return{property:t,el:n,svg:J(n),totalLength:U(n)*(r/100)}}},dt.setDashoffset=function(t){var e=U(t);return t.setAttribute("stroke-dasharray",e),e},dt.stagger=function(t,e){void 0===e&&(e={});var n=e.direction||"normal",r=e.easing?P(e.easing):null,a=e.grid,i=e.axis,o=e.from||0,s="first"===o,u="center"===o,c="last"===o,l=M.arr(t),f=l?parseFloat(t[0]):parseFloat(t),d=l?parseFloat(t[1]):0,p=H(l?t[1]:t)||0,h=e.start||0+(l?f:0),g=[],m=0;return function(t,e,v){if(s&&(o=0),u&&(o=(v-1)/2),c&&(o=v-1),!g.length){for(var y=0;y<v;y++){if(a){var x=u?(a[0]-1)/2:o%a[0],b=u?(a[1]-1)/2:Math.floor(o/a[0]),w=x-y%a[0],M=b-Math.floor(y/a[0]),k=Math.sqrt(w*w+M*M);"x"===i&&(k=-w),"y"===i&&(k=-M),g.push(k)}else g.push(Math.abs(o-y));m=Math.max.apply(Math,g)}r&&(g=g.map((function(t){return r(t/m)*m}))),"reverse"===n&&(g=g.map((function(t){return i?t<0?-1*t:-t:Math.abs(m-t)})))}return h+(l?(d-f)/m:f)*(Math.round(100*g[e])/100)+p}},dt.timeline=function(t){void 0===t&&(t={});var e=dt(t);return e.duration=0,e.add=function(n,r){var a=ct.indexOf(e),i=e.children;function o(t){t.passThrough=!0}a>-1&&ct.splice(a,1);for(var s=0;s<i.length;s++)o(i[s]);var u=L(n,F(m,t));u.targets=u.targets||t.targets;var c=e.duration;u.autoplay=!1,u.direction=e.direction,u.timelineOffset=M.und(r)?c:Z(r,c),o(e),e.seek(u.timelineOffset);var l=dt(u);o(l),i.push(l);var f=st(i,t);return e.delay=f.delay,e.endDelay=f.endDelay,e.duration=f.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},dt.easing=P,dt.penner=C,dt.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};const gt=dt;var mt=n(172),vt=n.n(mt);gt({targets:".logo__container",scale:[.5,1],opacity:[0,1],duration:500,easing:"easeInOutSine"}),gt({targets:"h1",scale:[.5,1],opacity:[0,.7],duration:500,easing:"easeInOutSine"}),gt({targets:".logo__container img",translateX:5,rotate:2,loop:!0,direction:"alternate",easing:"easeInOutSine",duration:2e3}),gt({targets:".text__container",translateX:[-100,0],opacity:[0,.7],duration:500,easing:"easeInOutSine"}),gt({targets:".footer p",scale:[.5,1],opacity:[0,.7],duration:500,easing:"easeInOutSine"}),gt({targets:".footer p.or",scale:[.5,1],opacity:[0,.7],duration:500,delay:500,easing:"easeInOutSine"}),gt({targets:".social-link--facebook",translateY:[100,0],opacity:[0,1],duration:300,delay:800,easing:"easeInOutSine",complete:function(t){gt({targets:".social-link--facebook",translateY:[0,6],loop:!0,duration:2e3,easing:"easeInOutSine",direction:"alternate"})}}),gt({targets:".social-link--upwork",translateY:[100,0],opacity:[0,1],duration:300,delay:1100,easing:"easeInOutSine",complete:function(t){gt({targets:".social-link--upwork",translateY:[0,6],loop:!0,duration:2e3,easing:"easeInOutSine",direction:"alternate"})}}),gt({targets:".social-link--linkedin",translateY:[100,0],opacity:[0,1],duration:300,delay:1400,easing:"easeInOutSine",complete:function(t){gt({targets:".social-link--linkedin",translateY:[0,6],loop:!0,duration:2e3,easing:"easeInOutSine",direction:"alternate"})}}),new(vt())(document.querySelector(".text-animation"),{keepBlinking:!0}).wait(2e3).write("Front-End").wait(2e3).delete(9).write("Back-End").wait(2e3).delete(9).write("WordPress").wait(2e3).delete(9).write("Full Stack")})()})();