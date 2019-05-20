// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = T;
exports.hydrate = $;
exports.h = exports.createElement = s;
exports.Fragment = v;
exports.createRef = h;
exports.Component = p;
exports.cloneElement = z;
exports.createContext = D;
exports.toChildArray = g;
exports.options = void 0;
var n,
    l,
    u,
    i,
    t,
    r = {},
    f = [],
    e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
exports.options = n;

function o(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function c(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function s(n, l, u) {
  var i,
      t,
      r,
      f,
      e = arguments;
  if (l = o({}, l), arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) u.push(e[i]);
  if (null != u && (l.children = u), null != n && null != n.defaultProps) for (t in n.defaultProps) void 0 === l[t] && (l[t] = n.defaultProps[t]);
  return (r = l.ref) && delete l.ref, (f = l.key) && delete l.key, a(n, l, null, f, r);
}

function a(l, u, i, t, r) {
  var f = {
    type: l,
    props: u,
    text: i,
    key: t,
    ref: r,
    __k: null,
    __e: null,
    l: null,
    __c: null
  };
  return f._ = f, n.vnode && n.vnode(f), f;
}

function h() {
  return {};
}

function v() {}

function y(n) {
  if (null == n || "boolean" == typeof n) return null;
  if ("string" == typeof n || "number" == typeof n) return a(null, null, n, null, null);
  if (Array.isArray(n)) return s(v, null, n);

  if (null != n.__e || null != n.__c) {
    var l = a(n.type, n.props, n.text, n.key, null);
    return l.__e = n.__e, l;
  }

  return n;
}

function p(n, l) {
  this.props = n, this.context = l;
}

function d(i) {
  !i.__d && (i.__d = !0) && 1 === l.push(i) && (n.debounceRendering || u)(w);
}

function w() {
  var n;

  for (l.sort(function (n, l) {
    return l.__b - n.__b;
  }); n = l.pop();) n.__d && n.forceUpdate(!1);
}

function m(n, l, u, i, t, e, o, s, a) {
  var h,
      p,
      d,
      w,
      m,
      k,
      b,
      x = l.__k || g(l.props.children, l.__k = [], y, !0),
      A = null != u && u.__k || f,
      C = A.length;
  if (a == r) if (a = null, null != e) for (p = 0; null == a && p < e.length; p++) a = e[p];else for (p = 0; null == a && p < C; p++) a = A[p] && A[p].__e, b = A[p];

  for (p = 0; p < x.length; p++) if (null != (h = x[p] = y(x[p]))) {
    if (null === (w = A[p]) || null != w && (null == h.key && null == w.key ? h.type === w.type : h.key === w.key)) A[p] = void 0;else for (d = 0; d < C; d++) {
      if (null != (w = A[d]) && (null == h.key && null == w.key ? h.type === w.type : h.key === w.key)) {
        A[d] = void 0, C !== x.length && w.type !== (b && b.type) && (a = w.__e);
        break;
      }

      w = null;
    }

    if (null != (m = _(n, h, w, i, t, e, o, s, null, a))) {
      if (null != h.l) m = h.l;else if (e == w || m != a || null == m.parentNode) n: if (null == a || a.parentNode !== n) n.appendChild(m);else {
        for (k = a, d = 0; (k = k.nextSibling) && d++ < C / 2;) if (k === m) break n;

        n.insertBefore(m, a);
      }
      a = m.nextSibling;
    }
  }

  if (null != e && l.type !== v) for (p = e.length; p--;) null != e[p] && c(e[p]);

  for (p = C; p--;) null != A[p] && P(A[p], s);
}

function g(n, l, u, i) {
  if (null == l && (l = []), null == n || "boolean" == typeof n) i && l.push(null);else if (Array.isArray(n)) for (var t = 0; t < n.length; t++) g(n[t], l, u, i);else l.push(u ? u(n) : n);
  return l;
}

function k(n, l, u, i) {
  var t,
      r,
      f = Object.keys(l).sort();

  for (t = 0; t < f.length; t++) "children" === f[t] || "key" === f[t] || u && ("value" === f[t] || "checked" === f[t] ? n : u)[f[t]] === l[f[t]] || b(n, f[t], l[f[t]], u[f[t]], i);

  for (r in u) "children" === r || "key" === r || l && r in l || b(n, r, null, u[r], i);
}

function b(n, l, u, t, r) {
  var f, o, c, s, a, h;
  if ("class" !== l && "className" !== l || (l = r ? "class" : "className"), "style" === l) {
    if (o = n.style, "string" == typeof u) o.cssText = u;else {
      if ("string" == typeof t) o.cssText = "";else for (c in t) null != u && c in u || o.setProperty(c.replace(i, "-"), "");

      for (s in u) f = u[s], null != t && f === t[s] || o.setProperty(s.replace(i, "-"), "number" == typeof f && !1 === e.test(s) ? f + "px" : f);
    }
  } else {
    if ("dangerouslySetInnerHTML" === l) return;
    "o" === l[0] && "n" === l[1] ? (a = l !== (l = l.replace(/Capture$/, "")), h = l.toLowerCase(), l = (h in self ? h : l).substring(2), u ? t || n.addEventListener(l, x, a) : n.removeEventListener(l, x, a), (n.u || (n.u = {}))[l] = u) : "list" !== l && "tagName" !== l && !r && l in n ? n[l] = null == u ? "" : u : null == u || !1 === u ? l !== (l = l.replace(/^xlink:?/, "")) ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.removeAttribute(l) : "function" != typeof u && (l !== (l = l.replace(/^xlink:?/, "")) ? n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : n.setAttribute(l, u));
  }
}

function x(l) {
  return this.u[l.type](n.event ? n.event(l) : l);
}

function _(l, u, i, t, f, e, c, s, a, h) {
  var d, w, g, k, b, x, A, T, $, z, D, H, I, L;

  if (null == i || null == u || i.type !== u.type || i.key !== u.key) {
    if (null != i && P(i, s), null == u) return null;
    i = r;
  }

  if (u._ !== u) return null;
  n.diff && n.diff(u), g = !1, A = u.type;

  try {
    n: if (i.type === v || A === v) {
      if (m(l, u, i, t, f, e, c, d, h), u.__k.length && null != u.__k[0]) for (u.__e = u.__k[0].__e, $ = u.__k.length; $-- && (u.l = (w = u.__k[$]) && (w.l || w.__e), !u.l););
    } else if ("function" == typeof A) {
      if (D = (z = A.contextType) && t[z.__c], H = null != z ? D ? D.props.value : z.__p : t, i.__c ? (T = (d = u.__c = i.__c).__p = d.__E, u.__e = i.__e) : (A.prototype && A.prototype.render ? u.__c = d = new A(u.props, H) : (u.__c = d = new p(u.props, H), d.constructor = A, d.render = j), d.__a = s, D && D.sub(d), d.props = u.props, d.state || (d.state = {}), d.context = H, d.__n = t, g = d.__d = !0, d.__h = []), d.__v = u, null == d.__s && (d.__s = d.state), null != A.getDerivedStateFromProps && o(d.__s == d.state ? d.__s = o({}, d.__s) : d.__s, A.getDerivedStateFromProps(u.props, d.__s)), g) null == A.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && c.push(d);else {
        if (null == A.getDerivedStateFromProps && null == a && null != d.componentWillReceiveProps && d.componentWillReceiveProps(u.props, H), !a && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(u.props, d.__s, H)) {
          d.props = u.props, d.state = d.__s, d.__d = !1, u.l = i.l;
          break n;
        }

        null != d.componentWillUpdate && d.componentWillUpdate(u.props, d.__s, H);
      }

      for (k = d.props, b = d.state, d.context = H, d.props = u.props, d.state = d.__s, n.render && n.render(u), I = d.__t || null, d.__d = !1, L = d.__t = y(d.render(d.props, d.state, d.context)), null != d.getChildContext && (t = o(o({}, t), d.getChildContext())), g || null == d.getSnapshotBeforeUpdate || (x = d.getSnapshotBeforeUpdate(k, b)), d.__b = s ? (s.__b || 0) + 1 : 0, d.base = u.__e = _(l, L, I, t, f, e, c, d, null, h), null != L && (u.l = L.l), d.__P = l, u.ref && N(u.ref, d, s); w = d.__h.pop();) w.call(d);

      g || null == k || null == d.componentDidUpdate || d.componentDidUpdate(k, b, x);
    } else u.__e = C(i.__e, u, i, t, f, e, c, s), u.ref && i.ref !== u.ref && N(u.ref, u.__e, s);

    T && (d.__E = d.__p = null), n.diffed && n.diffed(u);
  } catch (n) {
    O(n, s);
  }

  return u.__e;
}

function A(l, u) {
  for (var i; i = l.pop();) try {
    i.componentDidMount();
  } catch (n) {
    O(n, i.__a);
  }

  n.commit && n.commit(u);
}

function C(n, l, u, i, t, e, o, c) {
  var s,
      a,
      h,
      v,
      y,
      p,
      d,
      w,
      g = n;
  if (t = "svg" === l.type || t, null == n && null != e) for (s = 0; s < e.length; s++) if (null != (a = e[s]) && (null === l.type ? 3 === a.nodeType : a.localName === l.type)) {
    n = a, e[s] = null;
    break;
  }
  if (null == n && (n = null === l.type ? document.createTextNode(l.text) : t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type), e = null), null === l.type) null != g && n !== g || l.text === u.text || (n.data = l.text);else if (null != e && null != n.childNodes && (e = f.slice.call(n.childNodes)), l !== u) {
    if (v = l.props, null == (h = u.props) && (h = {}, null != e)) for (p = 0; p < n.attributes.length; p++) h["class" == (y = n.attributes[p].name) && v.className ? "className" : y] = n.attributes[p].value;
    d = h.dangerouslySetInnerHTML, ((w = v.dangerouslySetInnerHTML) || d) && (w && d && w.__html == d.__html || (n.innerHTML = w && w.__html || "")), v.multiple && (n.multiple = v.multiple), m(n, l, u, i, "foreignObject" !== l.type && t, e, o, c, r), k(n, v, h, t);
  }
  return n;
}

function N(n, l, u) {
  try {
    "function" == typeof n ? n(l) : n.current = l;
  } catch (n) {
    O(n, u);
  }
}

function P(l, u, i) {
  var t, r, f;

  if (n.unmount && n.unmount(l), (t = l.ref) && N(t, null, u), i || null != l.l || (i = null != (r = l.__e)), l.__e = l.l = null, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (n) {
      O(n, u);
    }
    t.base = t.__P = null, (t = t.__t) && P(t, u, i);
  } else if (t = l.__k) for (f = 0; f < t.length; f++) t[f] && P(t[f], u, i);

  null != r && c(r);
}

function j(n, l, u) {
  return this.constructor(n, u);
}

function O(n, l) {
  for (; l; l = l.__a) if (!l.__p) try {
    if (null != l.constructor.getDerivedStateFromError) l.setState(l.constructor.getDerivedStateFromError(n));else {
      if (null == l.componentDidCatch) continue;
      l.componentDidCatch(n);
    }
    return d(l.__E = l);
  } catch (l) {
    n = l;
  }

  throw n;
}

function T(l, u, i) {
  var t, e;
  n.root && n.root(l, u), t = u.__t, l = s(v, null, [l]), e = [], m(u, i ? l : u.__t = l, i ? void 0 : t, r, void 0 !== u.ownerSVGElement, i ? [i] : t ? null : f.slice.call(u.childNodes), e, l, i || r), A(e, l);
}

function $(n, l) {
  l.__t = null, T(n, l);
}

function z(n, l) {
  return l = o(o({}, n.props), l), arguments.length > 2 && (l.children = f.slice.call(arguments, 2)), a(n.type, l, null, l.key || n.key, l.ref || n.ref);
}

function D(n) {
  var l,
      u = {
    __c: "__cC" + t++,
    __p: n
  };

  function i(n, l) {
    return n.children(l);
  }

  return i.contextType = u, u.Consumer = i, l = {}, u.Provider = function (n) {
    var i, t;
    return this.getChildContext || (t = [], (i = this).getChildContext = function () {
      return l[u.__c] = i, l;
    }, i.shouldComponentUpdate = function (n) {
      t.map(function (l) {
        l.__P && (l.context = n.value, d(l));
      });
    }, i.sub = function (n) {
      t.push(n);
      var l = n.componentWillUnmount;

      n.componentWillUnmount = function () {
        t.splice(t.indexOf(n), 1), l && l();
      };
    }), n.children;
  }, u;
}

exports.options = n = {}, p.prototype.setState = function (n, l) {
  var u = this.__s !== this.state && this.__s || (this.__s = o({}, this.state));
  ("function" != typeof n || (n = n(u, this.props))) && o(u, n), null != n && this.__v && (l && this.__h.push(l), d(this));
}, p.prototype.forceUpdate = function (n) {
  var l,
      u = this.__v,
      i = this.__v.__e,
      t = this.__P;
  t && (null != (i = _(t, u, u, this.__n, void 0 !== t.ownerSVGElement, null, l = [], this.__a, !1 !== n, i)) && i.parentNode !== t && t.appendChild(i), A(l, u)), n && n();
}, p.prototype.render = v, l = [], u = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, i = /-?(?=[A-Z])/g, t = 0;
},{}],"../node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useState = e;
exports.useReducer = a;
exports.useEffect = v;
exports.useLayoutEffect = l;
exports.useRef = p;
exports.useImperativeHandle = d;
exports.useMemo = m;
exports.useCallback = s;
exports.useContext = y;
exports.useDebugValue = _;

var _preact = require("preact");

var t,
    u,
    r = [],
    f = _preact.options.render;

_preact.options.render = function (n) {
  f && f(n), t = 0, (u = n.__c).__H && (u.__H.t = q(u.__H.t));
};

var i = _preact.options.diffed;

_preact.options.diffed = function (n) {
  i && i(n);
  var t = n.__c;

  if (t) {
    var u = t.__H;
    u && (u.u = q(u.u));
  }
};

var o = _preact.options.unmount;

function c(t) {
  _preact.options.hook && _preact.options.hook(u);
  var r = u.__H || (u.__H = {
    i: [],
    t: [],
    u: []
  });
  return t >= r.i.length && r.i.push({}), r.i[t];
}

function e(n) {
  return a(L, n);
}

function a(n, r, f) {
  var i = c(t++);
  return null == i.__c && (i.__c = u, i.o = [null == f ? L(null, r) : f(r), function (t) {
    var u = n(i.o[0], t);
    i.o[0] !== u && (i.o[0] = u, i.__c.setState({}));
  }]), i.o;
}

function v(n, r) {
  var f = c(t++);
  F(f.v, r) && (f.o = n, f.v = r, u.__H.t.push(f), g(u));
}

function l(n, r) {
  var f = c(t++);
  F(f.v, r) && (f.o = n, f.v = r, u.__H.u.push(f));
}

function p(n) {
  var u = c(t++);
  return null == u.o && (u.o = {
    current: n
  }), u.o;
}

function d(n, u, r) {
  var f = c(t++);
  F(f.v, r) && (f.v = r, n.current = u());
}

function m(n, u) {
  var r = c(t++);
  return F(r.v, u) ? (r.v = u, r.l = n, r.o = n()) : r.o;
}

function s(n, t) {
  return m(function () {
    return n;
  }, t);
}

function y(n) {
  var r = u.context[n.__c];
  if (null == r) return n.__p;
  var f = c(t++);
  return null == f.o && (f.o = !0, r.sub(u)), r.props.value;
}

function _(t, u) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(u ? u(t) : t);
}

_preact.options.unmount = function (n) {
  o && o(n);
  var t = n.__c;

  if (t) {
    var u = t.__H;
    u && u.i.forEach(function (n) {
      return n.p && n.p();
    });
  }
};

var g = function () {};

function w() {
  r.forEach(function (n) {
    n.m = !1, n.__P && (n.__H.t = q(n.__H.t));
  }), r = [];
}

function E() {
  setTimeout(w, 0);
}

function q(n) {
  return n.forEach(x), n.forEach(A), [];
}

function x(n) {
  n.p && n.p();
}

function A(n) {
  var t = n.o();
  "function" == typeof t && (n.p = t);
}

function F(n, t) {
  return null == n || t.some(function (t, u) {
    return t !== n[u];
  });
}

function L(n, t) {
  return "function" == typeof t ? t(n) : t;
}

"undefined" != typeof window && (g = function (t) {
  !t.m && (t.m = !0) && 1 === r.push(t) && (_preact.options.requestAnimationFrame ? _preact.options.requestAnimationFrame(w) : requestAnimationFrame(E));
});
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/normalize.css/normalize.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/concrete.css/concrete.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/ky/index.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeoutError = exports.HTTPError = exports.default = void 0;

/*! MIT License © Sindre Sorhus */
const getGlobal = property => {
  /* istanbul ignore next */
  if (typeof self !== 'undefined' && self && property in self) {
    return self[property];
  }
  /* istanbul ignore next */


  if (typeof window !== 'undefined' && window && property in window) {
    return window[property];
  }

  if (typeof global !== 'undefined' && global && property in global) {
    return global[property];
  }
  /* istanbul ignore next */


  if (typeof globalThis !== 'undefined' && globalThis) {
    return globalThis[property];
  }
};

const document = getGlobal('document');
const Headers = getGlobal('Headers');
const Response = getGlobal('Response');
const ReadableStream = getGlobal('ReadableStream');
const fetch = getGlobal('fetch');
const AbortController = getGlobal('AbortController');
const FormData = getGlobal('FormData');

const isObject = value => value !== null && typeof value === 'object';

const supportsAbortController = typeof AbortController === 'function';
const supportsStreams = typeof ReadableStream === 'function';
const supportsFormData = typeof FormData === 'function';

const deepMerge = (...sources) => {
  let returnValue = {};

  for (const source of sources) {
    if (Array.isArray(source)) {
      if (!Array.isArray(returnValue)) {
        returnValue = [];
      }

      returnValue = [...returnValue, ...source];
    } else if (isObject(source)) {
      for (let [key, value] of Object.entries(source)) {
        if (isObject(value) && Reflect.has(returnValue, key)) {
          value = deepMerge(returnValue[key], value);
        }

        returnValue = { ...returnValue,
          [key]: value
        };
      }
    }
  }

  return returnValue;
};

const requestMethods = ['get', 'post', 'put', 'patch', 'head', 'delete'];
const responseTypes = {
  json: 'application/json',
  text: 'text/*',
  formData: 'multipart/form-data',
  arrayBuffer: '*/*',
  blob: '*/*'
};
const retryMethods = new Set(['get', 'put', 'head', 'delete', 'options', 'trace']);
const retryStatusCodes = new Set([408, 413, 429, 500, 502, 503, 504]);
const retryAfterStatusCodes = new Set([413, 429, 503]);

class HTTPError extends Error {
  constructor(response) {
    super(response.statusText);
    this.name = 'HTTPError';
    this.response = response;
  }

}

exports.HTTPError = HTTPError;

class TimeoutError extends Error {
  constructor() {
    super('Request timed out');
    this.name = 'TimeoutError';
  }

}

exports.TimeoutError = TimeoutError;

const delay = ms => new Promise((resolve, reject) => {
  if (ms > 2147483647) {
    // The maximum value of a 32bit int (see #117)
    reject(new RangeError('The `timeout` option cannot be greater than 2147483647'));
  } else {
    setTimeout(resolve, ms);
  }
}); // `Promise.race()` workaround (#91)


const timeout = (promise, ms, abortController) => new Promise((resolve, reject) => {
  /* eslint-disable promise/prefer-await-to-then */
  promise.then(resolve).catch(reject);
  delay(ms).then(() => {
    if (supportsAbortController) {
      abortController.abort();
    }

    reject(new TimeoutError());
  }).catch(reject);
  /* eslint-enable promise/prefer-await-to-then */
});

const normalizeRequestMethod = input => requestMethods.includes(input) ? input.toUpperCase() : input;

class Ky {
  constructor(input, {
    timeout = 10000,
    hooks,
    throwHttpErrors = true,
    searchParams,
    json,
    ...otherOptions
  }) {
    this._retryCount = 0;
    this._options = {
      method: 'get',
      credentials: 'same-origin',
      // TODO: This can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
      retry: 2,
      ...otherOptions
    };

    if (supportsAbortController) {
      this.abortController = new AbortController();

      if (this._options.signal) {
        this._options.signal.addEventListener('abort', () => {
          this.abortController.abort();
        });
      }

      this._options.signal = this.abortController.signal;
    }

    this._options.method = normalizeRequestMethod(this._options.method);
    this._options.prefixUrl = String(this._options.prefixUrl || '');
    this._input = String(input || '');

    if (this._options.prefixUrl && this._input.startsWith('/')) {
      throw new Error('`input` must not begin with a slash when using `prefixUrl`');
    }

    if (this._options.prefixUrl && !this._options.prefixUrl.endsWith('/')) {
      this._options.prefixUrl += '/';
    }

    this._input = this._options.prefixUrl + this._input;

    if (searchParams) {
      const url = new URL(this._input, document && document.baseURI);

      if (typeof searchParams === 'string' || URLSearchParams && searchParams instanceof URLSearchParams) {
        url.search = searchParams;
      } else if (Object.values(searchParams).every(param => typeof param === 'number' || typeof param === 'string')) {
        url.search = new URLSearchParams(searchParams).toString();
      } else {
        throw new Error('The `searchParams` option must be either a string, `URLSearchParams` instance or an object with string and number values');
      }

      this._input = url.toString();
    }

    this._timeout = timeout;
    this._hooks = deepMerge({
      beforeRequest: [],
      afterResponse: []
    }, hooks);
    this._throwHttpErrors = throwHttpErrors;
    const headers = new Headers(this._options.headers || {});

    if ((supportsFormData && this._options.body instanceof FormData || this._options.body instanceof URLSearchParams) && headers.has('content-type')) {
      throw new Error(`The \`content-type\` header cannot be used with a ${this._options.body.constructor.name} body. It will be set automatically.`);
    }

    if (json) {
      if (this._options.body) {
        throw new Error('The `json` option cannot be used with the `body` option');
      }

      headers.set('content-type', 'application/json');
      this._options.body = JSON.stringify(json);
    }

    this._options.headers = headers;

    const fn = async () => {
      await delay(1);
      let response = await this._fetch();

      for (const hook of this._hooks.afterResponse) {
        // eslint-disable-next-line no-await-in-loop
        const modifiedResponse = await hook(response.clone());

        if (modifiedResponse instanceof Response) {
          response = modifiedResponse;
        }
      }

      if (!response.ok && this._throwHttpErrors) {
        throw new HTTPError(response);
      } // If `onDownloadProgress` is passed, it uses the stream API internally

      /* istanbul ignore next */


      if (this._options.onDownloadProgress) {
        if (typeof this._options.onDownloadProgress !== 'function') {
          throw new TypeError('The `onDownloadProgress` option must be a function');
        }

        if (!supportsStreams) {
          throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
        }

        return this._stream(response.clone(), this._options.onDownloadProgress);
      }

      return response;
    };

    const isRetriableMethod = retryMethods.has(this._options.method.toLowerCase());
    const result = isRetriableMethod ? this._retry(fn) : fn();

    for (const [type, mimeType] of Object.entries(responseTypes)) {
      result[type] = async () => {
        headers.set('accept', mimeType);
        return (await result).clone()[type]();
      };
    }

    return result;
  }

  _calculateRetryDelay(error) {
    this._retryCount++;

    if (this._retryCount < this._options.retry && !(error instanceof TimeoutError)) {
      if (error instanceof HTTPError) {
        if (!retryStatusCodes.has(error.response.status)) {
          return 0;
        }

        const retryAfter = error.response.headers.get('Retry-After');

        if (retryAfter && retryAfterStatusCodes.has(error.response.status)) {
          let after = Number(retryAfter);

          if (Number.isNaN(after)) {
            after = Date.parse(retryAfter) - Date.now();
          } else {
            after *= 1000;
          }

          return after;
        }

        if (error.response.status === 413) {
          return 0;
        }
      }

      const BACKOFF_FACTOR = 0.3;
      return BACKOFF_FACTOR * 2 ** (this._retryCount - 1) * 1000;
    }

    return 0;
  }

  async _retry(fn) {
    try {
      return await fn();
    } catch (error) {
      const ms = this._calculateRetryDelay(error);

      if (ms !== 0 && this._retryCount > 0) {
        await delay(ms);
        return this._retry(fn);
      }

      if (this._throwHttpErrors) {
        throw error;
      }
    }
  }

  async _fetch() {
    for (const hook of this._hooks.beforeRequest) {
      // eslint-disable-next-line no-await-in-loop
      await hook(this._options);
    }

    if (this._timeout === false) {
      return fetch(this._input, this._options);
    }

    return timeout(fetch(this._input, this._options), this._timeout, this.abortController);
  }
  /* istanbul ignore next */


  _stream(response, onDownloadProgress) {
    const totalBytes = Number(response.headers.get('content-length')) || 0;
    let transferredBytes = 0;
    return new Response(new ReadableStream({
      start(controller) {
        const reader = response.body.getReader();

        if (onDownloadProgress) {
          onDownloadProgress({
            percent: 0,
            transferredBytes: 0,
            totalBytes
          }, new Uint8Array());
        }

        async function read() {
          const {
            done,
            value
          } = await reader.read();

          if (done) {
            controller.close();
            return;
          }

          if (onDownloadProgress) {
            transferredBytes += value.byteLength;
            const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
            onDownloadProgress({
              percent,
              transferredBytes,
              totalBytes
            }, value);
          }

          controller.enqueue(value);
          read();
        }

        read();
      }

    }));
  }

}

const validateAndMerge = (...sources) => {
  for (const source of sources) {
    if ((!isObject(source) || Array.isArray(source)) && typeof source !== 'undefined') {
      throw new TypeError('The `options` argument must be an object');
    }
  }

  return deepMerge({}, ...sources);
};

const createInstance = defaults => {
  const ky = (input, options) => new Ky(input, validateAndMerge(defaults, options));

  for (const method of requestMethods) {
    ky[method] = (input, options) => new Ky(input, validateAndMerge(defaults, options, {
      method
    }));
  }

  ky.create = newDefaults => createInstance(validateAndMerge(newDefaults));

  ky.extend = newDefaults => createInstance(validateAndMerge(defaults, newDefaults));

  return ky;
};

var _default = createInstance();

exports.default = _default;
},{}],"Room.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _ky = _interopRequireDefault(require("ky"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */
const CORS_URL = 'https://cors.louismerl.in';

function Room({
  name
}) {
  const [occupancy, setOccupancy] = (0, _hooks.useState)('loading');
  (0, _hooks.useEffect)(() => {
    async function getRoomOccupancy() {
      const res = await _ky.default.get(`${CORS_URL}/https://ewa.epfl.ch/room/Default.aspx?room=${name}`).text();
      const roomOccupancy = res.split('\n').find(x => x.includes('v.events')).replace('v.events = ', '').replace(/;/g, '').replace(/\\"/g, '').replace(/<br>/g, '').replace(/ISA - /g, '').replace(/\\/g, '');
      const parsedRoomOccupancy = JSON.parse(roomOccupancy);
      const currentEvent = parsedRoomOccupancy.find(({
        Start,
        End
      }) => {
        const now = new Date();
        const startDate = new Date(Start);
        const endDate = new Date(End);
        return now > startDate && now < endDate;
      });
      const nextEvent = parsedRoomOccupancy.find(({
        Start,
        End
      }) => {
        const soon1 = new Date(Date.now() + 45 * 60 * 1000);
        const soon2 = new Date(Date.now() + 60 * 60 * 1000);
        const startDate = new Date(Start);
        const endDate = new Date(End);
        return soon1 > startDate && soon2 < endDate || soon2 > startDate && soon2 < endDate;
      });
      setOccupancy(currentEvent ? currentEvent.Text : nextEvent && 'occupied soon');
    }

    getRoomOccupancy();
  }, []);
  let emoji = '👍 ';

  if (occupancy === 'loading') {
    emoji = '🔄';
  } else if (occupancy === 'occupied soon') {
    emoji = '⏳';
  } else if (occupancy) {
    emoji = '⛔';
  }

  return (0, _preact.h)("tr", null, (0, _preact.h)("td", null, emoji), (0, _preact.h)("td", null, (0, _preact.h)("strong", null, ' ', name.toUpperCase())), (0, _preact.h)("td", {
    class: "text-right fullwidth"
  }, occupancy));
}

var _default = Room;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","ky":"../node_modules/ky/index.js"}],"main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"rooms.json":[function(require,module,exports) {
module.exports = {
  "in": ["inm10", "inm11", "inm200", "inm201", "inm202", "inm203", "inr113", "inf211", "inf213", "inf1", "inf2", "inf3"],
  "bc": ["bc01", "bc02", "bc03", "bc04", "bc05", "bc06", "bc010", "bc129", "bc229", "bc329", "bc410", "bc420"],
  "co": ["co020", "co021", "co023"]
};
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var _hooks = require("preact/hooks");

require("normalize.css");

require("concrete.css");

var _Room = _interopRequireDefault(require("./Room"));

require("./main.css");

var _rooms = _interopRequireDefault(require("./rooms.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */
const buildings = Object.keys(_rooms.default);

function Main() {
  const [selectedBuilding, setSelectedBuilding] = (0, _hooks.useState)('all');
  return (0, _preact.h)("main", {
    class: "container"
  }, (0, _preact.h)("header", null, (0, _preact.h)("h1", {
    class: "less-margin title"
  }, "rEPFL"), (0, _preact.h)("h3", {
    class: "less-margin"
  }, "find a free room @ EPFL")), (0, _preact.h)("p", {
    class: "button-list"
  }, ['all'].concat(buildings).map(building => (0, _preact.h)(_preact.Fragment, null, (0, _preact.h)("button", {
    onClick: () => setSelectedBuilding(building),
    class: selectedBuilding === building ? 'filled' : ''
  }, building.toUpperCase()), ' '))), buildings.map(building => (0, _preact.h)("div", {
    className: selectedBuilding !== 'all' && selectedBuilding !== building && 'hidden'
  }, (0, _preact.h)("h2", {
    class: "text-center table-h2"
  }, building.toUpperCase()), (0, _preact.h)("hr", {
    class: "table-hr"
  }), (0, _preact.h)("table", null, (0, _preact.h)("tbody", null, _rooms.default[building].map(room => (0, _preact.h)(_Room.default, {
    key: room,
    name: room
  })))))), (0, _preact.h)("footer", null, (0, _preact.h)("h5", {
    class: "less-margin"
  }, "made with ", '<3', " by ", (0, _preact.h)("a", {
    href: "https://louismerl.in"
  }, "Louis Merlin")), (0, _preact.h)("h5", {
    class: "less-margin"
  }, "using ", (0, _preact.h)("a", {
    href: "https://preactjs.com"
  }, "preact"), " and ", (0, _preact.h)("a", {
    href: "https://concrete.style"
  }, "concrete.css")), (0, _preact.h)("h5", {
    class: "less-margin"
  }, "need more rooms ? ", (0, _preact.h)("a", {
    href: "https://github.com/louismerlin/repfl/blob/master/src/rooms.json"
  }, "add them"), " or ", (0, _preact.h)("a", {
    href: "mailto:louis.merlin@epfl.ch"
  }, "email me")), (0, _preact.h)("h5", {
    class: "less-margin"
  }, "don't hesitate to ", (0, _preact.h)("a", {
    href: "https://github.com/louismerlin/repfl"
  }, "star and/or contribute"))));
}

(0, _preact.render)((0, _preact.h)(Main, null), document.body);
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","normalize.css":"../node_modules/normalize.css/normalize.css","concrete.css":"../node_modules/concrete.css/concrete.css","./Room":"Room.js","./main.css":"main.css","./rooms.json":"rooms.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "1234" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map