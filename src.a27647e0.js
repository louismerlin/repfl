parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {function O(a){return a&&a.__esModule?{d:a.default}:{d:a}}var ka,g,e,P,Q,la,j={},y=[],R=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function k(o,e){for(var t in e)o[t]=e[t];return o}function C(o){var e=o.parentNode;e&&e.removeChild(o)}function b(o,e,t){var $,r,n,a,l=arguments;if(e=k({},e),arguments.length>3)for(t=[t],$=3;$<arguments.length;$++)t.push(l[$]);if(null!=t&&(e.children=t),null!=o&&null!=o.defaultProps)for(r in o.defaultProps)void 0===e[r]&&(e[r]=o.defaultProps[r]);return a=e.key,null!=(n=e.ref)&&delete e.ref,null!=a&&delete e.key,f(o,e,a,n)}function f(o,e,t,$){var r={type:o,props:e,key:t,ref:$,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return g.vnode&&g.vnode(r),r}function q(o){return o.children}function z(o){if(null==o||"boolean"==typeof o)return null;if("string"==typeof o||"number"==typeof o)return f(null,o,null,null);if(null!=o.__e||null!=o.__c){var e=f(o.type,o.props,o.key,null);return e.__e=o.__e,e}return o}function w(o,e){this.props=o,this.context=e}function m(o,e){if(null==e)return o.__p?m(o.__p,o.__p.__k.indexOf(o)+1):null;for(var t;e<o.__k.length;e++)if(null!=(t=o.__k[e])&&null!=t.__e)return t.__e;return"function"==typeof o.type?m(o):null}function p(o){var e,t;if(null!=(o=o.__p)&&null!=o.__c){for(o.__e=o.__c.base=null,e=0;e<o.__k.length;e++)if(null!=(t=o.__k[e])&&null!=t.__e){o.__e=o.__c.base=t.__e;break}return p(o)}}function n(o){!o.__d&&(o.__d=!0)&&1===e.push(o)&&(g.debounceRendering||P)(S)}function S(){var o;for(e.sort(function(o,e){return e.__v.__b-o.__v.__b});o=e.pop();)o.__d&&o.forceUpdate(!1)}function D(o,e,t,$,r,n,a,l,p){var _,i,u,s,c,S,v,f,d=e.__k||A(e.props.children,e.__k=[],z,!0),h=t&&t.__k||y,x=h.length;for(l==j&&(l=null!=n?n[0]:x?m(t,0):null),i=0;i<d.length;i++)if(null!=(_=d[i]=z(d[i]))){if(_.__p=e,_.__b=e.__b+1,null===(s=h[i])||s&&_.key==s.key&&_.type===s.type)h[i]=void 0;else for(u=0;u<x;u++){if((s=h[u])&&_.key==s.key&&_.type===s.type){h[u]=void 0;break}s=null}if(c=B(o,_,s=s||j,$,r,n,a,null,l,p),(u=_.ref)&&s.ref!=u&&(f||(f=[])).push(u,_.__c||c,_),null!=c){if(null==v&&(v=c),null!=_.l)c=_.l,_.l=null;else if(n==s||c!=l||null==c.parentNode)o:if(null==l||l.parentNode!==o)o.appendChild(c);else{for(S=l,u=0;(S=S.nextSibling)&&u<x;u+=2)if(S==c)break o;o.insertBefore(c,l)}l=c.nextSibling,"function"==typeof e.type&&(e.l=c)}}if(e.__e=v,null!=n&&"function"!=typeof e.type)for(i=n.length;i--;)null!=n[i]&&C(n[i]);for(i=x;i--;)null!=h[i]&&F(h[i],h[i]);if(f)for(i=0;i<f.length;i++)E(f[i],f[++i],f[++i])}function A(o,e,t,$){if(null==e&&(e=[]),null==o||"boolean"==typeof o)$&&e.push(null);else if(Array.isArray(o))for(var r=0;r<o.length;r++)A(o[r],e,t,$);else e.push(t?t(o):o);return e}function T(o,e,t,$,r){var n;for(n in t)n in e||u(o,n,null,t[n],$);for(n in e)r&&"function"!=typeof e[n]||"value"===n||"checked"===n||t[n]===e[n]||u(o,n,e[n],t[n],$)}function s(o,e,t){"-"===e[0]?o.setProperty(e,t):o[e]="number"==typeof t&&!1===R.test(e)?t+"px":t}function u(o,e,t,$,r){var n,a,l,p,_;if("key"===(e=r?"className"===e?"class":e:"class"===e?"className":e)||"children"===e);else if("style"===e){if(n=o.style,"string"==typeof t)n.cssText=t;else{if("string"==typeof $&&(n.cssText="",$=null),$)for(a in $)t&&a in t||s(n,a,"");if(t)for(l in t)$&&t[l]===$[l]||s(n,l,t[l])}}else if("o"===e[0]&&"n"===e[1])p=e!==(e=e.replace(/Capture$/,"")),_=e.toLowerCase(),e=(_ in o?_:e).slice(2),t?($||o.addEventListener(e,v,p),(o.u||(o.u={}))[e]=t):o.removeEventListener(e,v,p);else if("list"!==e&&"tagName"!==e&&!r&&e in o){if(o.length&&"value"==e)for(e=o.length;e--;)o.options[e].selected=o.options[e].value==t;else o[e]=null==t?"":t;}else"function"!=typeof t&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==t||!1===t?o.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):o.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),t):null==t||!1===t?o.removeAttribute(e):o.setAttribute(e,t))}function v(o){return this.u[o.type](g.event?g.event(o):o)}function B(o,e,t,$,r,n,a,l,p,_){var i,u,s,c,S,v,f,d,h,x,m=e.type;if(void 0!==e.constructor)return null;(i=g.__b)&&i(e);try{o:if("function"==typeof m){if(d=e.props,h=(i=m.contextType)&&$[i.__c],x=i?h?h.props.value:i.__p:$,t.__c?f=(u=e.__c=t.__c).__p=u.__E:(m.prototype&&m.prototype.render?e.__c=u=new m(d,x):(e.__c=u=new w(d,x),u.constructor=m,u.render=V),h&&h.sub(u),u.props=d,u.state||(u.state={}),u.context=x,u.__n=$,s=u.__d=!0,u.__h=[]),null==u.__s&&(u.__s=u.state),null!=m.getDerivedStateFromProps&&k(u.__s==u.state?u.__s=k({},u.__s):u.__s,m.getDerivedStateFromProps(d,u.__s)),s)null==m.getDerivedStateFromProps&&null!=u.componentWillMount&&u.componentWillMount(),null!=u.componentDidMount&&a.push(u);else{if(null==m.getDerivedStateFromProps&&null==l&&null!=u.componentWillReceiveProps&&u.componentWillReceiveProps(d,x),!l&&null!=u.shouldComponentUpdate&&!1===u.shouldComponentUpdate(d,u.__s,x)){u.props=d,u.state=u.__s,u.__d=!1,u.__v=e,e.__e=t.__e,e.__k=t.__k;break o}null!=u.componentWillUpdate&&u.componentWillUpdate(d,u.__s,x)}for(c=u.props,S=u.state,u.context=x,u.props=d,u.state=u.__s,(i=g.__r)&&i(e),u.__d=!1,u.__v=e,u.__P=o,A(null!=(i=u.render(u.props,u.state,u.context))&&i.type==q&&null==i.key?i.props.children:i,e.__k=[],z,!0),null!=u.getChildContext&&($=k(k({},$),u.getChildContext())),s||null==u.getSnapshotBeforeUpdate||(v=u.getSnapshotBeforeUpdate(c,S)),D(o,e,t,$,r,n,a,p,_),u.base=e.__e;i=u.__h.pop();)i.call(u);s||null==c||null==u.componentDidUpdate||u.componentDidUpdate(c,S,v),f&&(u.__E=u.__p=null)}else e.__e=U(t.__e,e,t,$,r,n,a,_);(i=g.diffed)&&i(e)}catch(o){g.__e(o,e,t)}return e.__e}function x(o,e){for(var t;t=o.pop();)try{t.componentDidMount()}catch(o){g.__e(o,t.__v)}g.__c&&g.__c(e)}function U(o,e,t,$,r,n,a,l){var p,_,i,u,s=t.props,c=e.props;if(r="svg"===e.type||r,null==o&&null!=n)for(p=0;p<n.length;p++)if(null!=(_=n[p])&&(null===e.type?3===_.nodeType:_.localName===e.type)){o=_,n[p]=null;break}if(null==o){if(null===e.type)return document.createTextNode(c);o=r?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type),n=null}return null===e.type?s!==c&&(o.data=c):e!==t&&(null!=n&&(n=y.slice.call(o.childNodes)),i=(s=t.props||j).dangerouslySetInnerHTML,u=c.dangerouslySetInnerHTML,l||(u||i)&&(u&&i&&u.__html==i.__html||(o.innerHTML=u&&u.__html||"")),T(o,c,s,r,l),u||D(o,e,t,$,"foreignObject"!==e.type&&r,n,a,j,l),l||("value"in c&&void 0!==c.value&&c.value!==o.value&&(o.value=null==c.value?"":c.value),"checked"in c&&void 0!==c.checked&&c.checked!==o.checked&&(o.checked=c.checked))),o}function E(o,e,t){try{"function"==typeof o?o(e):o.current=e}catch(o){g.__e(o,t)}}function F(o,e,t){var $,r,n;if(g.unmount&&g.unmount(o),($=o.ref)&&E($,null,e),t||"function"==typeof o.type||(t=null!=(r=o.__e)),o.__e=o.l=null,null!=($=o.__c)){if($.componentWillUnmount)try{$.componentWillUnmount()}catch(o){g.__e(o,e)}$.base=$.__P=null}if($=o.__k)for(n=0;n<$.length;n++)$[n]&&F($[n],e,t);null!=r&&C(r)}function V(o,e,t){return this.constructor(o,t)}function W(o,e,t){var $,r,n;g.__p&&g.__p(o,e),r=($=t===Q)?null:t&&t.__k||e.__k,o=b(q,null,[o]),n=[],B(e,$?e.__k=o:(t||e).__k=o,r||j,j,void 0!==e.ownerSVGElement,t&&!$?[t]:r?null:y.slice.call(e.childNodes),n,!1,t||j,$),x(n,o)}ka=g={},w.prototype.setState=function(o,e){var t=this.__s!==this.state&&this.__s||(this.__s=k({},this.state));("function"!=typeof o||(o=o(t,this.props)))&&k(t,o),null!=o&&this.__v&&(e&&this.__h.push(e),n(this))},w.prototype.forceUpdate=function(o){var e,t,$,r=this.__v,n=this.__v.__e,a=this.__P;a&&(e=!1!==o,t=[],$=B(a,r,k({},r),this.__n,void 0!==a.ownerSVGElement,null,t,e,null==n?m(r):n),x(t,r),$!=n&&p(r)),o&&o()},w.prototype.render=q,e=[],P="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__e=function(o,e,t){for(var $;e=e.__p;)if(($=e.__c)&&!$.__p)try{if($.constructor&&null!=$.constructor.getDerivedStateFromError)$.setState($.constructor.getDerivedStateFromError(o));else{if(null==$.componentDidCatch)continue;$.componentDidCatch(o)}return n($.__E=$)}catch(e){o=e}throw o},Q=j,la=0;var o,a,r=[],t=g.__r;g.__r=function($){t&&t($),o=0,(a=$.__c).__H&&(a.__H.t=i(a.__H.t))};var G=g.diffed;g.diffed=function($){G&&G($);var r=$.__c;if(r){var e=r.__H;e&&(e.u=i(e.u))}};var H=g.unmount;function I($){g.__h&&g.__h(a);var r=a.__H||(a.__H={i:[],t:[],u:[]});return $>=r.i.length&&r.i.push({}),r.i[$]}function h($){return X(J,$)}function X($,r,e){var t=I(o++);return t.__c||(t.__c=a,t.o=[e?e(r):J(null,r),function(r){var e=$(t.o[0],r);t.o[0]!==e&&(t.o[0]=e,t.__c.setState({}))}]),t.o}function Y($,r){var e=I(o++);ca(e.v,r)&&(e.o=$,e.v=r,a.__H.t.push(e),Z(a))}g.unmount=function($){H&&H($);var r=$.__c;if(r){var e=r.__H;e&&e.i.forEach(function($){return $.p&&$.p()})}};var Z=function(){};function _(){r.some(function($){$.l=!1,$.__P&&($.__H.t=i($.__H.t))}),r=[]}function i($){return $.forEach(aa),$.forEach(ba),[]}function aa($){$.p&&$.p()}function ba($){var r=$.o();"function"==typeof r&&($.p=r)}function ca($,r){return!$||r.some(function(r,e){return r!==$[e]})}function J($,r){return"function"==typeof r?r($):r}"undefined"!=typeof window&&(Z=function($){!$.l&&($.l=!0)&&1===r.push($)&&(g.requestAnimationFrame||function($){var r=function(){clearTimeout(e),cancelAnimationFrame(t),setTimeout($)},e=setTimeout(r,100),t=requestAnimationFrame(r)})(_)});function K(e,t){return new Error(e+" "+t.status+" "+t.responseText)}var da=function(e,t){return new Promise(function(r,n){var o=t&&t.method||"GET",a=t&&t.body||null,s=t&&t.type||null;e||n(new Error("No url was given"));var u=new XMLHttpRequest;u.open(o,e,!0),a instanceof FormData||"form-data"===s?u.setRequestHeader("Content-Type","multipart/form-data"):null!==a&&"object"==typeof a||"json"===s?("object"==typeof a&&(a=JSON.stringify(a)),u.setRequestHeader("Content-Type","application/json")):u.setRequestHeader("Content-Type",s||"application/x-www-form-urlencoded"),u.onload=function(){if(u.status>=200&&u.status<400)try{var e=JSON.parse(u.responseText);r(e)}catch(t){r(u.responseText)}else n(K("Server returned:",u))},u.onerror=function(){n(K("Connection error:",u))},u.send(a)})};const c=new Date,ea="https://cors.louis.workers.dev?apiurl=",L="https://ewa.epfl.ch/room/Default.aspx?room=",M=new Intl.DateTimeFormat("ch-fr",{hour:"2-digit",minute:"2-digit"}).format,fa=new Date(c.getTime()+864e5),ga=36e5,ha=96e4;function d(e){return new Date(e+"+02:00")}function ia({name:e,loaded:$}){const[t,r]=h({isLoading:!0,freeUntil:null,occupiedUntil:null});Y(()=>{!async function(){const t=await da(`${ea}${L}${e}`);$();const a=t.split("\n").find(e=>e.includes("v.events")).replace("v.events = ","").replace(/;/g,"").replace(/\\"/g,"").replace(/<br>/g,"").replace(/ISA - /g,"").replace(/\\/g,""),n=JSON.parse(a),i=n.reduce((e,{Start:$,End:t,Text:r})=>{const a=d($),n=d(t);if(e){const n=new Date(e.End);return new Date(n.getUTCMilliseconds()+ha)>a?{Start:$,End:t,Text:r}:e}if(c>a&&c<n)return{Start:$,End:t,Text:r}},null),f=n.find(({Start:e})=>{const $=d(e);return c<$&&$<fa}),l=!i&&f&&d(f.Start),o=i&&d(i.End),I=i&&"R\xE9servation ponctuelle"===i.Text||f&&"R\xE9servation ponctuelle"===f.Text;r({isLoading:!1,freeUntil:l,occupiedUntil:o,isReservationPonctuelle:I})}()},[]);let a="loading",n="\uD83D\uDD04";return t.isLoading||(a="",n="\uD83D\uDC4D",t.isReservationPonctuelle?(a="available for revisions",n="\uD83D\uDC69\u200D\uD83C\uDFEB"):t.freeUntil?(a=`available until ${M(t.freeUntil)}`,t.freeUntil-c.getTime()<=ga&&(n="\u23F3")):t.occupiedUntil&&(a=`occupied until ${M(t.occupiedUntil)}`,n="\u26D4")),b("tr",null,b("td",null,n),b("td",null,b("strong",null,b("a",{target:"_blank",href:`${L}${e}`},e.toUpperCase()))),b("td",{class:"text-right fullwidth"},a))}var $={};$={in:["inm10","inm11","inm200","inm201","inm202","inm203","inr113","inr219","inf119","inf211","inf213","inf1","inf2","inf3","inj218"],bc:["bc01","bc02","bc03","bc04","bc05","bc010","bc129","bc229","bc329","bc410","bc420"],co:["co020","co021","co023"]};"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("serviceWorker.js").then(function(o){console.log("ServiceWorker registration successful with scope: ",o.scope)},function(o){console.log("ServiceWorker registration failed: ",o)})});var l=O($);const N=Object.keys(l.d);function ja(){const[o,r]=h("all");let[e,$]=h(0);const m=Object.values(l.d).reduce((o,r)=>o+r.length,0),t=()=>{$(e+=1)},c=e===m?{opacity:0}:{};return b("main",{class:"container"},b("header",{class:"header"},b("h1",{class:"less-margin title"},"rEPFL"),b("h3",{class:"less-margin"},"find a free room @ EPFL")),b("progress",{class:"rooms-progress",value:e||"0",max:m,style:c},e,"/",m),b("p",{class:"button-list"},["all"].concat(N).map(e=>b(q,null,b("button",{onClick:()=>r(e),class:o===e?"filled":""},e.toUpperCase())," "))),N.map(r=>b("div",{class:"all"!==o&&o!==r&&"hidden"},b("h2",{class:"text-center table-h2"},r.toUpperCase()),b("hr",{class:"table-hr"}),b("table",null,b("tbody",null,l.d[r].map(o=>b(ia,{key:o,name:o,loaded:t})))))),b("footer",{class:"footer"},b("hr",null),b("h5",{class:"less-margin"},"made with \u2764\uFE0F by ",b("a",{href:"https://louismerl.in"},"Louis Merlin")),b("h5",{class:"less-margin"},"using ",b("a",{href:"https://preactjs.com"},"preact")," and ",b("a",{href:"https://concrete.style"},"concrete.css")),b("h5",{class:"less-margin"},"need more rooms ? ",b("a",{href:"https://github.com/louismerlin/repfl/blob/master/src/rooms.json"},"add them")," or ",b("a",{href:"mailto:louis.merlin@epfl.ch"},"email me")),b("h5",{class:"less-margin"},"don't hesitate to ",b("a",{href:"https://github.com/louismerlin/repfl"},"star and/or contribute"))))}W(b(ja,null),document.body);return{"Focm":{}};});