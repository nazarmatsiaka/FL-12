!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},l=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],i=0;i<e.length;i++){var l=e[i],a=t.base?l[0]+t.base:l[0],c=n[a]||0,u="".concat(a," ").concat(c);n[a]=c+1;var f=s(u),d={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(o[f].references++,o[f].updater(d)):o.push({identifier:u,updater:y(d,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=l(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,f=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,i);else{var l=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(l,o[t]):e.appendChild(l)}}function h(e,t,n){var r=n.css,i=n.media,l=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),l&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function y(e,t){var n,r,i;if(t.singleton){var l=v++;n=p||(p=c(t)),r=d.bind(null,n,l,!1),i=d.bind(null,n,l,!0)}else n=c(t),r=h.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=s(n[r]);o[i].references--}for(var l=a(e,t),c=0;c<n.length;c++){var u=s(n[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=l}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(a," */")),l=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(l).concat([i]).join("\n")}var o,s,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var l=0;l<this.length;l++){var o=this[l][0];null!=o&&(i[o]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);r&&i[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},function(e,t,n){var r=n(0),i=n(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var l={insert:"head",singleton:!1},o=(r(i,l),i.locals?i.locals:{});e.exports=o},function(e,t,n){(t=n(1)(!1)).push([e.i,"",""]),e.exports=t},function(e,t,n){var r=n(0),i=n(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var l={insert:"head",singleton:!1},o=(r(i,l),i.locals?i.locals:{});e.exports=o},function(e,t,n){(t=n(1)(!1)).push([e.i,"",""]),e.exports=t},function(e,t,n){var r=n(0),i=n(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var l={insert:"head",singleton:!1},o=(r(i,l),i.locals?i.locals:{});e.exports=o},function(e,t,n){(t=n(1)(!1)).push([e.i,"",""]),e.exports=t},function(e,t,n){var r=n(0),i=n(9);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var l={insert:"head",singleton:!1},o=(r(i,l),i.locals?i.locals:{});e.exports=o},function(e,t,n){(t=n(1)(!1)).push([e.i,"",""]),e.exports=t},function(e,t,n){var r=n(0),i=n(11);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var l={insert:"head",singleton:!1},o=(r(i,l),i.locals?i.locals:{});e.exports=o},function(e,t,n){(t=n(1)(!1)).push([e.i,"",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);n(2),n(4),n(6),n(8),n(10);var r=class{constructor(){this.playersBill={cross:document.querySelector(".bill__cross"),zero:document.querySelector(".bill__zero")},this.randPlayer()}nextPlayer(){this.activePlayer="zero"===this.activePlayer?"cross":"zero",this.highlightUser()}randPlayer(){this.activePlayer=Math.random()>.5?"zero":"cross",this.highlightUser()}highlightUser(){for(let e in this.playersBill)this.playersBill[e].parentElement.classList.contains("highlight")&&this.playersBill[e].parentElement.classList.remove("highlight");this.playersBill[this.activePlayer].parentElement.classList.add("highlight")}editBill(){this.playersBill[this.activePlayer].innerText++}clearBill(){for(let e in this.playersBill)this.playersBill[e].innerText=0}};var i=new class extends r{constructor(){super(),this.cells=[null,null,null,null,null,null,null,null,null],this.resultBoard=document.getElementById("resultBoard")}move(e){this.cells[e.id]||(e.classList.add(this.activePlayer),this.cells[e.id]=this.activePlayer,this.chechWinner()?(this.resultBoard.classList.add("show"),this.editBill()):this.checkCellArr()?this.resultBoard.classList.add("show"):this.nextPlayer())}chechWinner(){let e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let t of e){let e=t.every(e=>this.cells[e]===this.activePlayer);if(e)return e}return!1}checkCellArr(){return this.cells.every(e=>e)}newGame(e){this.resultBoard.classList.remove("show");for(let t of e)t.classList.value="cell";this.cells=[null,null,null,null,null,null,null,null,null],this.randPlayer()}clear(e){this.clearBill(),this.newGame(e)}};let l=document.getElementsByClassName("cell"),o=document.querySelector(".resetBtn"),s=document.querySelector(".bill__clearBtn");for(let e of l)e.addEventListener("click",(function(){i.move(this)}));o.addEventListener("click",()=>{i.newGame(l)}),s.addEventListener("click",()=>{i.clear(l)})}]);