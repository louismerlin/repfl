!function(){var t,e,n,r,o,i={},l={},u=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function c(t,e){for(var n in e)t[n]=e[n];return t}function s(t){var e=t.parentNode;e&&e.removeChild(t)}function f(t,e,n){var r,o,i,l,u=arguments;if(e=c({},e),arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(u[r]);if(null!=n&&(e.children=n),null!=t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===e[o]&&(e[o]=t.defaultProps[o]);return l=e.key,null!=(i=e.ref)&&delete e.ref,null!=l&&delete e.key,_(t,e,l,i)}function _(e,n,r,o){var i={type:e,props:n,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return t.vnode&&t.vnode(i),i}function p(t){return t.children}function h(t,e){this.props=t,this.context=e}function d(t,e){if(null==e)return t.__?d(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?d(t):null}function v(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return v(t)}}function y(o){(!o.__d&&(o.__d=!0)&&1===e.push(o)||r!==t.debounceRendering)&&((r=t.debounceRendering)||n)(m)}function m(){var t,n,r,o,i,l,u;for(e.sort((function(t,e){return e.__v.__b-t.__v.__b}));t=e.pop();)t.__d&&(r=void 0,o=void 0,l=(i=(n=t).__v).__e,(u=n.__P)&&(r=[],o=E(u,i,c({},i),n.__n,void 0!==u.ownerSVGElement,null,r,null==l?d(i):l),L(r,i),o!=l&&v(i)))}function g(t,e,n,r,o,i,a,c,f){var _,p,h,v,y,m,g,w=n&&n.__k||u,x=w.length;if(c==l&&(c=null!=i?i[0]:x?d(n,0):null),_=0,e.__k=b(e.__k,(function(n){if(null!=n){if(n.__=e,n.__b=e.__b+1,null===(h=w[_])||h&&n.key==h.key&&n.type===h.type)w[_]=void 0;else for(p=0;p<x;p++){if((h=w[p])&&n.key==h.key&&n.type===h.type){w[p]=void 0;break}h=null}if(v=E(t,n,h=h||l,r,o,i,a,c,f),(p=n.ref)&&h.ref!=p&&(g||(g=[]),h.ref&&g.push(h.ref,null,n),g.push(p,n.__c||v,n)),null!=v){if(null==m&&(m=v),null!=n.__d)v=n.__d,n.__d=null;else if(i==h||v!=c||null==v.parentNode){t:if(null==c||c.parentNode!==t)t.appendChild(v);else{for(y=c,p=0;(y=y.nextSibling)&&p<x;p+=2)if(y==v)break t;t.insertBefore(v,c)}"option"==e.type&&(t.value="")}c=v.nextSibling,"function"==typeof e.type&&(e.__d=v)}}return _++,n})),e.__e=m,null!=i&&"function"!=typeof e.type)for(_=i.length;_--;)null!=i[_]&&s(i[_]);for(_=x;_--;)null!=w[_]&&P(w[_],w[_]);if(g)for(_=0;_<g.length;_++)T(g[_],g[++_],g[++_])}function b(t,e,n){if(null==n&&(n=[]),null==t||"boolean"==typeof t)e&&n.push(e(null));else if(Array.isArray(t))for(var r=0;r<t.length;r++)b(t[r],e,n);else n.push(e?e("string"==typeof t||"number"==typeof t?_(null,t,null,null):null!=t.__e||null!=t.__c?_(t.type,t.props,t.key,null):t):t);return n}function w(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===a.test(e)?n+"px":null==n?"":n}function x(t,e,n,r,o){var i,l,u,a,c;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"key"===e||"children"===e);else if("style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(l in r)n&&l in n||w(i,l,"");if(n)for(u in n)r&&n[u]===r[u]||w(i,u,n[u])}else"o"===e[0]&&"n"===e[1]?(a=e!==(e=e.replace(/Capture$/,"")),c=e.toLowerCase(),e=(c in t?c:e).slice(2),n?(r||t.addEventListener(e,k,a),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,k,a)):"list"!==e&&"tagName"!==e&&"form"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n?t.removeAttribute(e):t.setAttribute(e,n))}function k(e){this.l[e.type](t.event?t.event(e):e)}function E(e,n,r,o,i,l,u,a,s){var f,_,d,v,y,m,w,x,k,E,L=n.type;if(void 0!==n.constructor)return null;(f=t.__b)&&f(n);try{t:if("function"==typeof L){if(x=n.props,k=(f=L.contextType)&&o[f.__c],E=f?k?k.props.value:f.__:o,r.__c?w=(_=n.__c=r.__c).__=_.__E:("prototype"in L&&L.prototype.render?n.__c=_=new L(x,E):(n.__c=_=new h(x,E),_.constructor=L,_.render=j),k&&k.sub(_),_.props=x,_.state||(_.state={}),_.context=E,_.__n=o,d=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=L.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=c({},_.__s)),c(_.__s,L.getDerivedStateFromProps(x,_.__s))),v=_.props,y=_.state,d)null==L.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==L.getDerivedStateFromProps&&null==_.__e&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(x,E),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(x,_.__s,E)){for(_.props=x,_.state=_.__s,_.__d=!1,_.__v=n,n.__e=r.__e,n.__k=r.__k,_.__h.length&&u.push(_),f=0;f<n.__k.length;f++)n.__k[f]&&(n.__k[f].__=n);break t}null!=_.componentWillUpdate&&_.componentWillUpdate(x,_.__s,E),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(v,y,m)}))}_.context=E,_.props=x,_.state=_.__s,(f=t.__r)&&f(n),_.__d=!1,_.__v=n,_.__P=e,f=_.render(_.props,_.state,_.context),n.__k=b(null!=f&&f.type==p&&null==f.key?f.props.children:f),null!=_.getChildContext&&(o=c(c({},o),_.getChildContext())),d||null==_.getSnapshotBeforeUpdate||(m=_.getSnapshotBeforeUpdate(v,y)),g(e,n,r,o,i,l,u,a,s),_.base=n.__e,_.__h.length&&u.push(_),w&&(_.__E=_.__=null),_.__e=null}else n.__e=S(r.__e,n,r,o,i,l,u,s);(f=t.diffed)&&f(n)}catch(e){t.__e(e,n,r)}return n.__e}function L(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(t){t.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function S(t,e,n,r,o,i,a,c){var s,f,_,p,h,d=n.props,v=e.props;if(o="svg"===e.type||o,null==t&&null!=i)for(s=0;s<i.length;s++)if(null!=(f=i[s])&&(null===e.type?3===f.nodeType:f.localName===e.type)){t=f,i[s]=null;break}if(null==t){if(null===e.type)return document.createTextNode(v);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type),i=null}if(null===e.type)null!=i&&(i[i.indexOf(t)]=null),d!==v&&(t.data=v);else if(e!==n){if(null!=i&&(i=u.slice.call(t.childNodes)),_=(d=n.props||l).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(d===l)for(d={},h=0;h<t.attributes.length;h++)d[t.attributes[h].name]=t.attributes[h].value;(p||_)&&(p&&_&&p.__html==_.__html||(t.innerHTML=p&&p.__html||""))}(function(t,e,n,r,o){var i;for(i in n)i in e||x(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"value"===i||"checked"===i||n[i]===e[i]||x(t,i,e[i],n[i],r)})(t,v,d,o,c),e.__k=e.props.children,p||g(t,e,n,r,"foreignObject"!==e.type&&o,i,a,l,c),c||("value"in v&&void 0!==v.value&&v.value!==t.value&&(t.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==t.checked&&(t.checked=v.checked))}return t}function T(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function P(e,n,r){var o,i,l;if(t.unmount&&t.unmount(e),(o=e.ref)&&T(o,null,n),r||"function"==typeof e.type||(r=null!=(i=e.__e)),e.__e=e.__d=null,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&P(o[l],n,r);null!=i&&s(i)}function j(t,e,n){return this.constructor(t,n)}t={__e:function(t,e){for(var n;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(t));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(t)}return y(n.__E=n)}catch(e){t=e}throw t}},h.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&c(n,t),null!=t&&this.__v&&(this.__e=!1,e&&this.__h.push(e),y(this))},h.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),y(this))},h.prototype.render=p,e=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=l,function(t){var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},l=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag",c=t.regeneratorRuntime;if(c)i=c;else{(c=t.regeneratorRuntime=i).wrap=g;var s="suspendedStart",f="suspendedYield",_="executing",p="completed",h={},d={};d[l]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==n&&r.call(y,l)&&(d=y);var m=k.prototype=w.prototype=Object.create(d);x.prototype=m.constructor=k,k.constructor=x,k[a]=x.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(m),t},c.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[u]=function(){return this},c.AsyncIterator=L,c.async=function(t,e,n,r){var o=new L(g(t,e,n,r));return c.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},E(m),m[a]="Generator",m[l]=function(){return this},m.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},c.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var l=this.tryEntries[i],u=l.completion;if("root"===l.tryLoc)return o("end");if(l.tryLoc<=this.prev){var a=r.call(l,"catchLoc"),c=r.call(l,"finallyLoc");if(a&&c){if(this.prev<l.catchLoc)return o(l.catchLoc,!0);if(this.prev<l.finallyLoc)return o(l.finallyLoc)}else if(a){if(this.prev<l.catchLoc)return o(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return o(l.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var l=i?i.completion:{};return l.type=t,l.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}}}function g(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),l=new j(r||[]);return i._invoke=function(t,e,n){var r=s;return function(o,i){if(r===_)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var l=n.delegate;if(l){var u=S(l,n);if(u){if(u===h)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===s)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=_;var a=b(t,e,n);if("normal"===a.type){if(r=n.done?p:f,a.arg===h)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(r=p,n.method="throw",n.arg=a.arg)}}}(t,n,l),i}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function w(){}function x(){}function k(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){var e;this._invoke=function(n,o){function i(){return new Promise((function(e,i){!function e(n,o,i,l){var u=b(t[n],t,o);if("throw"!==u.type){var a=u.arg,c=a.value;return c&&"object"==typeof c&&r.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,i,l)}),(function(t){e("throw",t,i,l)})):Promise.resolve(c).then((function(t){a.value=t,i(a)}),l)}l(u.arg)}(n,o,e,i)}))}return e=e?e.then(i,i):i()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=b(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function N(t){if(t){var n=t[l];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}}(function(){return this}()||Function("return this")());var N,O,C,U=[],H=t.__r,D=t.diffed,F=t.__c,A=t.unmount;function R(e){t.__h&&t.__h(O);var n=O.__H||(O.__H={t:[],u:[]});return e>=n.t.length&&n.t.push({}),n.t[e]}function M(t){return function(t,e,n){var r=R(N++);return r.__c||(r.__c=O,r.i=[n?n(e):W(void 0,e),function(e){var n=t(r.i[0],e);r.i[0]!==n&&(r.i[0]=n,r.__c.setState({}))}]),r.i}(W,t)}function G(){U.some((function(t){t.__P&&(t.__H.u.forEach(I),t.__H.u.forEach(q),t.__H.u=[])})),U=[]}function I(t){t.m&&t.m()}function q(t){var e=t.i();"function"==typeof e&&(t.m=e)}function W(t,e){return"function"==typeof e?e(t):e}function B(t,e){return new Error(t+" "+e.status+" "+e.responseText)}t.__r=function(t){H&&H(t),N=0,(O=t.__c).__H&&(O.__H.u.forEach(I),O.__H.u.forEach(q),O.__H.u=[])},t.diffed=function(e){D&&D(e);var n=e.__c;if(n){var r=n.__H;r&&r.u.length&&(1!==U.push(n)&&C===t.requestAnimationFrame||((C=t.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(G))}},t.__c=function(t,e){e.some((function(t){t.__h.forEach(I),t.__h=t.__h.filter((function(t){return!t.i||q(t)}))})),F&&F(t,e)},t.unmount=function(t){A&&A(t);var e=t.__c;if(e){var n=e.__H;n&&n.t.forEach((function(t){return t.m&&t.m()}))}};var J=function(t,e){return new Promise((function(n,r){var o=e&&e.method||"GET",i=e&&e.body||null,l=e&&e.type||null,u=e&&e.headers||{};t||r(new Error("No url was given"));var a=new XMLHttpRequest;a.open(o,t,!0),i instanceof FormData||"form-data"===l?a.setRequestHeader("Content-Type","multipart/form-data"):null!==i&&"object"==typeof i||"json"===l?("object"==typeof i&&(i=JSON.stringify(i)),a.setRequestHeader("Content-Type","application/json")):a.setRequestHeader("Content-Type",l||"application/x-www-form-urlencoded"),Object.keys(u).forEach((function(t){a.setRequestHeader(t,u[t])})),a.onload=function(){if(a.status>=200&&a.status<400)try{var t=JSON.parse(a.responseText);n(t)}catch(t){n(a.responseText)}else r(B("Server returned:",a))},a.onerror=function(){r(B("Connection error:",a))},a.send(i)}))};function z(t,e,n,r,o,i,l){try{var u=t[i](l),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function V(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var l,u=t[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Y=new Date,$="https://cors.louis.workers.dev?apiurl=",X="https://ewa.epfl.ch/room/Default.aspx?room=",K=new Intl.DateTimeFormat("ch-fr",{hour:"2-digit",minute:"2-digit"}).format,Q=new Date(Y.getTime()+864e5),Z=36e5,tt=96e4;function et(t){var e=-60==Y.getTimezoneOffset()?"+01:00":"+02:00";return new Date(t+e)}function nt(t){var e=t.name,n=t.loaded,r=V(M({isLoading:!0,freeUntil:null,occupiedUntil:null}),2),o=r[0],i=r[1];!function(t,e){var n=R(N++);(function(t,e){return!t||e.some((function(e,n){return e!==t[n]}))})(n.o,e)&&(n.i=t,n.o=e,O.__H.u.push(n))}((function(){function t(){var r;return r=regeneratorRuntime.mark((function t(){var r,o,l,u,a,c,s,f,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J("".concat($).concat(X).concat(e));case 2:if(r=t.sent,n(),r&&r.length){t.next=6;break}return t.abrupt("return");case 6:if((o=r.split("\n").find((function(t){return t.includes("v.events")})))&&void 0!==o){t.next=9;break}return t.abrupt("return",i({isLoading:!1,error:!0}));case 9:l=o.replace("v.events = ","").replace(/;/g,"").replace(/\\"/g,"").replace(/<br>/g,"").replace(/ISA - /g,"").replace(/\\/g,""),u=JSON.parse(l),a=u.reduce((function(t,e){var n=e.Start,r=e.End,o=e.Text,i=et(n),l=et(r);if(t){var u=new Date(t.End);return new Date(u.getUTCMilliseconds()+tt)>i?{Start:n,End:r,Text:o}:t}if(Y>i&&Y<l)return{Start:n,End:r,Text:o}}),null),c=u.find((function(t){var e=et(t.Start);return Y<e&&e<Q})),s=!a&&c&&et(c.Start),f=a&&et(a.End),_=a&&"Réservation ponctuelle"===a.Text||c&&"Réservation ponctuelle"===c.Text,i({isLoading:!1,freeUntil:s,occupiedUntil:f,isReservationPonctuelle:_});case 17:case"end":return t.stop()}}),t)})),(t=function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function l(t){z(i,n,o,l,u,"next",t)}function u(t){z(i,n,o,l,u,"throw",t)}l(void 0)}))}).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var l="loading",u="🔄";return o.isLoading||(l="",u="👍",o.error?(u="🤷‍♀️",l="Could not load information"):o.isReservationPonctuelle?(l="available for revisions",u="👩‍🏫"):o.freeUntil?(l="available until ".concat(K(o.freeUntil)),o.freeUntil-Y.getTime()<=Z&&(u="⏳")):o.occupiedUntil&&(l="occupied until ".concat(K(o.occupiedUntil)),u="⛔")),f("tr",null,f("td",null,u),f("td",null,f("strong",null,f("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(X).concat(e)},e.toUpperCase()))),f("td",{class:"text-right fullwidth"},l))}function rt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var l,u=t[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ot=function(t){return t&&t.__esModule?t.default:t}({in:["inm10","inm11","inm200","inm201","inm202","inm203","inr113","inr219","inf119","inf211","inf213","inf1","inf2","inf3","inj218"],bc:["bc01","bc02","bc03","bc04","bc05","bc010","bc129","bc229","bc329","bc410","bc420"],co:["co020","co021","co023"]}),it=Object.keys(ot);!function(e,n,r){var i,a,c;t.__&&t.__(e,n),a=(i=r===o)?null:r&&r.__k||n.__k,e=f(p,null,[e]),c=[],E(n,(i?n:r||n).__k=e,a||l,l,void 0!==n.ownerSVGElement,r&&!i?[r]:a?null:u.slice.call(n.childNodes),c,r||l,i),L(c,e)}(f((function(){var t=rt(M("all"),2),e=t[0],n=t[1],r=rt(M(0),2),o=r[0],i=r[1],l=Object.values(ot).reduce((function(t,e){return t+e.length}),0),u=function(){i(o+=1)},a=o===l?{opacity:"0"}:{};return f("main",{class:"container"},f("header",{class:"header"},f("h1",{class:"less-margin title text-center"},"rEPFL"),f("h3",{class:"less-margin subtitle text-center"},"find a free room @ EPFL")),f("progress",{class:"rooms-progress",value:o||"0",max:l,style:a},o,"/",l),f("p",{class:"button-list"},["all"].concat(it).map((function(t){return f(p,{key:t},f("button",{onClick:function(){return n(t)},class:e===t?"filled":""},t.toUpperCase())," ")}))),it.map((function(t){return f("div",{key:t,class:"all"!==e&&e!==t&&"hidden"},f("h2",{class:"text-center table-h2"},t.toUpperCase()),f("hr",{class:"table-hr"}),f("table",null,f("tbody",null,ot[t].map((function(t){return f(nt,{key:t,name:t,loaded:u})})))))})),f("footer",{class:"footer"},f("hr",null),f("p",{class:"less-margin"},"made with ❤️ by ",f("a",{href:"https://louismerl.in"},"Louis Merlin")),f("p",{class:"less-margin"},"need more rooms ?"),f("p",{class:"less-margin"},f("a",{href:"https://github.com/louismerlin/repfl/blob/master/src/rooms.json"},"add them")," or ",f("a",{href:"mailto:louis.merlin@epfl.ch"},"email me")),f("p",{class:"less-margin"},"don't hesitate to ",f("a",{href:"https://github.com/louismerlin/repfl"},"star and/or contribute"))))}),null),document.body)}();