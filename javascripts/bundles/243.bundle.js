"use strict";(self.webpackChunkawesomescreenshot_front=self.webpackChunkawesomescreenshot_front||[]).push([[243],{92138:(n,e,t)=>{t.d(e,{R_:()=>f});var r=t(86500),a=t(1350),o=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function i(n){var e=n.r,t=n.g,a=n.b,o=(0,r.py)(e,t,a);return{h:360*o.h,s:o.s,v:o.v}}function c(n){var e=n.r,t=n.g,a=n.b;return"#".concat((0,r.vq)(e,t,a,!1))}function u(n,e,t){var r=t/100;return{r:(e.r-n.r)*r+n.r,g:(e.g-n.g)*r+n.g,b:(e.b-n.b)*r+n.b}}function l(n,e,t){var r;return(r=Math.round(n.h)>=60&&Math.round(n.h)<=240?t?Math.round(n.h)-2*e:Math.round(n.h)+2*e:t?Math.round(n.h)+2*e:Math.round(n.h)-2*e)<0?r+=360:r>=360&&(r-=360),r}function s(n,e,t){return 0===n.h&&0===n.s?n.s:((r=t?n.s-.16*e:4===e?n.s+.16:n.s+.05*e)>1&&(r=1),t&&5===e&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2)));var r}function d(n,e,t){var r;return(r=t?n.v+.05*e:n.v-.15*e)>1&&(r=1),Number(r.toFixed(2))}function f(n){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],r=(0,a.uA)(n),f=5;f>0;f-=1){var E=i(r),p=c((0,a.uA)({h:l(E,f,!0),s:s(E,f,!0),v:d(E,f,!0)}));t.push(p)}t.push(c(r));for(var v=1;v<=4;v+=1){var g=i(r),h=c((0,a.uA)({h:l(g,v),s:s(g,v),v:d(g,v)}));t.push(h)}return"dark"===e.theme?o.map((function(n){var r=n.index,o=n.opacity;return c(u((0,a.uA)(e.backgroundColor||"#141414"),(0,a.uA)(t[r]),100*o))})):t}var E={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},p={},v={};Object.keys(E).forEach((function(n){p[n]=f(E[n]),p[n].primary=p[n][5],v[n]=f(E[n],{theme:"dark",backgroundColor:"#141414"}),v[n].primary=v[n][5]}));p.red,p.volcano,p.gold,p.orange,p.yellow,p.lime,p.green,p.cyan,p.blue,p.geekblue,p.purple,p.magenta,p.grey},42931:(n,e,t)=>{t.d(e,{R_:()=>y,pw:()=>C,r:()=>m,H9:()=>b,C3:()=>T,Kp:()=>h});var r=t(1413),a=t(71002),o=t(92138),i=t(67294),c=t(80334),u=t(98924),l="rc-util-key";function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.mark;return e?e.startsWith("data-")?e:"data-".concat(e):l}function d(n){return n.attachTo?n.attachTo:document.querySelector("head")||document.body}function f(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(0,u.Z)())return null;var r,a=document.createElement("style");(null===(e=t.csp)||void 0===e?void 0:e.nonce)&&(a.nonce=null===(r=t.csp)||void 0===r?void 0:r.nonce);a.innerHTML=n;var o=d(t),i=o.firstChild;return t.prepend&&o.prepend?o.prepend(a):t.prepend&&i?o.insertBefore(a,i):o.appendChild(a),a}var E=new Map;function p(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=d(e);return Array.from(E.get(t).children).find((function(t){return"STYLE"===t.tagName&&t.getAttribute(s(e))===n}))}function v(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=d(t);if(!E.has(r)){var a=f("",t),o=a.parentNode;E.set(r,o),o.removeChild(a)}var i=p(e,t);if(i){var c,u,l;if((null===(c=t.csp)||void 0===c?void 0:c.nonce)&&i.nonce!==(null===(u=t.csp)||void 0===u?void 0:u.nonce))i.nonce=null===(l=t.csp)||void 0===l?void 0:l.nonce;return i.innerHTML!==n&&(i.innerHTML=n),i}var v=f(n,t);return v.setAttribute(s(t),e),v}var g=t(63017);function h(n,e){(0,c.ZP)(n,"[@ant-design/icons] ".concat(e))}function m(n){return"object"===(0,a.Z)(n)&&"string"==typeof n.name&&"string"==typeof n.theme&&("object"===(0,a.Z)(n.icon)||"function"==typeof n.icon)}function N(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).reduce((function(e,t){var r=n[t];if("class"===t)e.className=r,delete e.class;else e[t]=r;return e}),{})}function y(n,e,t){return t?i.createElement(n.tag,(0,r.Z)((0,r.Z)({key:e},N(n.attrs)),t),(n.children||[]).map((function(t,r){return y(t,"".concat(e,"-").concat(n.tag,"-").concat(r))}))):i.createElement(n.tag,(0,r.Z)({key:e},N(n.attrs)),(n.children||[]).map((function(t,r){return y(t,"".concat(e,"-").concat(n.tag,"-").concat(r))})))}function C(n){return(0,o.R_)(n)[0]}function b(n){return n?Array.isArray(n)?n:[n]:[]}var A="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",T=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=(0,i.useContext)(g.Z),t=e.csp;(0,i.useEffect)((function(){v(n,"@ant-design-icons",{prepend:!0,csp:t})}),[])}},98787:(n,e,t)=>{t.d(e,{Y:()=>a});var r=t(93355),a=((0,r.b)("success","processing","error","default","warning"),(0,r.b)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"))},97447:(n,e,t)=>{t.d(e,{Z:()=>M});var r=t(87462),a=t(4942),o=t(29439),i=t(71002),c=t(94184),u=t.n(c),l=t(10366),s=t(67294),d=t(53124),f=t(98866),E=t(97647),p=t(96159),v=t(93355),g=t(21790),h=t(95658),m=t(44942),N=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]])}return t},y=/^[\u4e00-\u9fa5]{2}$/,C=y.test.bind(y);function b(n){return"text"===n||"link"===n}function A(n,e){if(null!=n){var t,r=e?" ":"";return"string"!=typeof n&&"number"!=typeof n&&"string"==typeof n.type&&C(n.props.children)?(0,p.Tm)(n,{children:n.props.children.split("").join(r)}):"string"==typeof n?C(n)?s.createElement("span",null,n.split("").join(r)):s.createElement("span",null,n):(t=n,s.isValidElement(t)&&t.type===s.Fragment?s.createElement("span",null,n):n)}}(0,v.b)("default","primary","ghost","dashed","link","text"),(0,v.b)("default","circle","round"),(0,v.b)("submit","button","reset");var T=function(n,e){var t,c=n.loading,p=void 0!==c&&c,v=n.prefixCls,y=n.type,T=void 0===y?"default":y,_=n.danger,M=n.shape,O=void 0===M?"default":M,S=n.size,U=n.disabled,I=n.className,R=n.children,F=n.icon,Z=n.ghost,k=void 0!==Z&&Z,P=n.block,w=void 0!==P&&P,x=n.htmlType,L=void 0===x?"button":x,K=N(n,["loading","prefixCls","type","danger","shape","size","disabled","className","children","icon","ghost","block","htmlType"]),H=s.useContext(E.Z),D=s.useContext(f.Z),B=U||D,G=s.useContext(h.L),W=s.useState(!!p),Q=(0,o.Z)(W,2),j=Q[0],Y=Q[1],V=s.useState(!1),X=(0,o.Z)(V,2),q=X[0],z=X[1],J=s.useContext(d.E_),$=J.getPrefixCls,nn=J.autoInsertSpaceInButton,en=J.direction,tn=e||s.createRef(),rn=function(){return 1===s.Children.count(R)&&!F&&!b(T)},an="boolean"==typeof p?p:(null==p?void 0:p.delay)||!0;s.useEffect((function(){var n=null;return"number"==typeof an?n=window.setTimeout((function(){n=null,Y(an)}),an):Y(an),function(){n&&(window.clearTimeout(n),n=null)}}),[an]),s.useEffect((function(){if(tn&&tn.current&&!1!==nn){var n=tn.current.textContent;rn()&&C(n)?q||z(!0):q&&z(!1)}}),[tn]);var on=function(e){var t=n.onClick;j||B?e.preventDefault():null==t||t(e)},cn=$("btn",v),un=!1!==nn,ln=G||S||H,sn=ln&&{large:"lg",small:"sm",middle:void 0}[ln]||"",dn=j?"loading":F,fn=(0,l.Z)(K,["navigate"]),En=u()(cn,(t={},(0,a.Z)(t,"".concat(cn,"-").concat(O),"default"!==O&&O),(0,a.Z)(t,"".concat(cn,"-").concat(T),T),(0,a.Z)(t,"".concat(cn,"-").concat(sn),sn),(0,a.Z)(t,"".concat(cn,"-icon-only"),!R&&0!==R&&!!dn),(0,a.Z)(t,"".concat(cn,"-background-ghost"),k&&!b(T)),(0,a.Z)(t,"".concat(cn,"-loading"),j),(0,a.Z)(t,"".concat(cn,"-two-chinese-chars"),q&&un&&!j),(0,a.Z)(t,"".concat(cn,"-block"),w),(0,a.Z)(t,"".concat(cn,"-dangerous"),!!_),(0,a.Z)(t,"".concat(cn,"-rtl"),"rtl"===en),(0,a.Z)(t,"".concat(cn,"-disabled"),void 0!==fn.href&&B),t),I),pn=F&&!j?F:s.createElement(m.Z,{existIcon:!!F,prefixCls:cn,loading:!!j}),vn=R||0===R?function(n,e){var t=!1,r=[];return s.Children.forEach(n,(function(n){var e=(0,i.Z)(n),a="string"===e||"number"===e;if(t&&a){var o=r.length-1,c=r[o];r[o]="".concat(c).concat(n)}else r.push(n);t=a})),s.Children.map(r,(function(n){return A(n,e)}))}(R,rn()&&un):null;if(void 0!==fn.href)return s.createElement("a",(0,r.Z)({},fn,{className:En,onClick:on,ref:tn}),pn,vn);var gn=s.createElement("button",(0,r.Z)({},K,{type:L,className:En,onClick:on,disabled:B,ref:tn}),pn,vn);return b(T)?gn:s.createElement(g.Z,{disabled:!!j},gn)},_=s.forwardRef(T);_.Group=h.Z,_.__ANT_BUTTON=!0;const M=_},92389:(n,e,t)=>{t.d(e,{Z:()=>a});var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var e=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||e>=r.F1&&e<=r.F12)return!1;switch(e){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=r.ZERO&&n<=r.NINE)return!0;if(n>=r.NUM_ZERO&&n<=r.NUM_MULTIPLY)return!0;if(n>=r.A&&n<=r.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===n)return!0;switch(n){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const a=r},92739:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(67294);function a(n,e,t){var a=r.useRef({});return"value"in a.current&&!t(a.current.condition,e)||(a.current.value=n(),a.current.condition=e),a.current.value}},96523:(n,e,t)=>{t.d(e,{Z:()=>u});var r=function(n){return+setTimeout(n,16)},a=function(n){return clearTimeout(n)};"undefined"!=typeof window&&"requestAnimationFrame"in window&&(r=function(n){return window.requestAnimationFrame(n)},a=function(n){return window.cancelAnimationFrame(n)});var o=0,i=new Map;function c(n){i.delete(n)}function u(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=o+=1;function a(e){if(0===e)c(t),n();else{var o=r((function(){a(e-1)}));i.set(t,o)}}return a(e),t}u.cancel=function(n){var e=i.get(n);return c(e),a(e)}},68291:(n,e,t)=>{t.d(e,{Kp:()=>a,ZP:()=>i});var r={};function a(n,e){0}function o(n,e,t){e||r[t]||(n(!1,t),r[t]=!0)}const i=function(n,e){o(a,n,e)}},80334:(n,e,t)=>{t.d(e,{ZP:()=>i});var r={};function a(n,e){0}function o(n,e,t){e||r[t]||(n(!1,t),r[t]=!0)}const i=function(n,e){o(a,n,e)}},67294:(n,e,t)=>{n.exports=t(72408)}}]);