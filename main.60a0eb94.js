parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t,o){return e(t)||r(t,o)||a(t,o)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],e=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(e=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);e=!0);}catch(l){o=!0,a=l}finally{try{e||null==c.return||c.return()}finally{if(o)throw a}}return r}}function e(t){if(Array.isArray(t))return t}function o(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=a(t))){var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e,o,i=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==e.return||e.return()}finally{if(c)throw o}}}}function a(t,n){if(t){if("string"==typeof t)return i(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,n):void 0}}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var c=2,l=document.querySelector(".start"),u=document.querySelector(".message-start"),f=document.querySelector(".message-lose"),s=document.querySelector(".message-win"),d=document.querySelectorAll(".field-cell"),h=document.querySelector(".game-score"),v=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];function y(){l.classList.remove("start"),l.classList.add("restart"),l.textContent="Restart",u.classList.add("hidden"),s.classList.add("hidden")}l.addEventListener("click",function(){l.classList.contains("start")&&y(),M();for(var t=0;t<c;t++)S(v),A(d,v)});var m=0,g=!1;function b(t){for(var n=C(t),r=0;r<n.length;r++){var e=n[r];e===n[r+1]&&(n[r]=2*e,m+=n[r],n[r+1]=0,k())}n=C(n);for(var o=0;o<t.length;o++)t[o]=n[o]||0}function p(t,n){switch(t){case b:case L:var r,e=I(n),a=o(n);try{for(a.s();!(r=a.n()).done;){t(r.value)}}catch(i){a.e(i)}finally{a.f()}E(e,I(n))||(q(n),S(n),A(d,n))}}function w(t,n){switch(t){case b:case L:for(var r=R(n),e=I(r),o=0;o<r.length;o++)t(r[o]);if(!E(e,I(r))){q(n),S(r);for(var a=T(r),i=0;i<a.length;i++)for(var c=0;c<a[i].length;c++)n[i][c]=a[i][c];A(d,a)}}}function L(t){b(t.reverse()),t.reverse()}function S(n){var r=n.map(function(t,n){return t.map(function(t,r){return 0===t?[n,r]:null})}).flat().filter(function(t){return null!==t});if(r.length>0){var e=t(r[Math.floor(Math.random()*r.length)],2),o=e[0],a=e[1];n[o][a]=Math.random()<=.9?2:4,q(n),k()}}function A(t,n){O(t,I(n))}function k(){h.textContent=m;var t,n=o(v);try{for(n.s();!(t=n.n()).done;){var r,e=o(t.value);try{for(e.s();!(r=e.n()).done;){if(2048===r.value)return s.classList.remove("hidden"),void(g=!0)}}catch(a){e.e(a)}finally{e.f()}}}catch(a){n.e(a)}finally{n.f()}}function q(t){j()||x(t)||(f.classList.remove("hidden"),g=!0)}function x(t){var n,r=o(t);try{for(r.s();!(n=r.n()).done;){if(n.value.includes(0))return!0}}catch(e){r.e(e)}finally{r.f()}return!1}function j(){for(var t=0;t<v.length;t++)for(var n=v[t],r=0;r<n.length-1;r++)if(n[r]===n[r+1])return!0;for(var e=0;e<v.length-1;e++)for(var o=0;o<v[e].length;o++)if(v[e][o]===v[e+1][o])return!0;return!1}function C(t){return t.filter(function(t){return 0!==t})}function I(t){return t.flat()}function E(t,n){return t.length===n.length&&t.every(function(t,r){return t===n[r]})}function M(){for(var t=0;t<v.length;t++)v[t]=[0,0,0,0];g=!1,f.classList.contains("hidden")||f.classList.add("hidden"),s.classList.contains("hidden")||s.classList.add("hidden"),m=0,k()}function O(t,n){for(var r=0;r<t.length;r++)0===n[r]?(t[r].textContent="",t[r].classList="field-cell"):(t[r].textContent=n[r],t[r].classList="field-cell field-cell--".concat(n[r]))}function R(t){for(var n=[],r=0;r<t.length;r++){for(var e=[],o=t.length-1;o>=0;o--)e.push(t[o][r]);n.push(e)}return n}function T(t){for(var n=[],r=t.length-1;r>=0;r--){for(var e=[],o=0;o<t[r].length;o++)e.push(t[o][r]);n.push(e)}return n}document.addEventListener("keyup",function(t){if(!g){switch(t.key){case"ArrowLeft":p(b,v),k();break;case"ArrowRight":p(L,v),k();break;case"ArrowUp":w(L,v),k();break;case"ArrowDown":w(b,v),k()}q(v)}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.60a0eb94.js.map