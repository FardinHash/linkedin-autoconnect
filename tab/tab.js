function E(e) {
  let r = [];
  return [(a) => {
    let i = e;
    e = a;
    let s = r;
    for (; s[2] && (s = s[2], s[0](a, i), a === e); )
      ;
  }, (a) => {
    let i = r;
    for (; i[2]; )
      i = i[2];
    return i = i[2] = [a, i], () => {
      i && (i[1][2] = i[2], i = 0);
    };
  }, () => e];
}
function Qn(e, r) {
  if (r === void 0 && (r = e, e = 0), typeof e != "number" || typeof r != "number")
    throw new TypeError("Expected all arguments to be numbers");
  return Math.floor(
    Math.random() * (r - e + 1) + e
  );
}
var br = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ei(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ir(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function") && !Array.isArray(e);
}
var Ar = { exports: {} };
Ar.exports;
(function(e, r) {
  var a = 200, i = "__lodash_hash_undefined__", s = 800, c = 16, u = 9007199254740991, p = "[object Arguments]", x = "[object Array]", B = "[object AsyncFunction]", R = "[object Boolean]", P = "[object Date]", I = "[object Error]", V = "[object Function]", Ae = "[object GeneratorFunction]", ve = "[object Map]", ye = "[object Number]", ar = "[object Null]", Re = "[object Object]", vo = "[object Proxy]", yo = "[object RegExp]", So = "[object Set]", xo = "[object String]", _o = "[object Undefined]", ko = "[object WeakMap]", $o = "[object ArrayBuffer]", wo = "[object DataView]", Co = "[object Float32Array]", zo = "[object Float64Array]", To = "[object Int8Array]", Bo = "[object Int16Array]", Ao = "[object Int32Array]", Ro = "[object Uint8Array]", Po = "[object Uint8ClampedArray]", Fo = "[object Uint16Array]", Eo = "[object Uint32Array]", Io = /[\\^$.*+?()[\]{}|]/g, Mo = /^\[object .+?Constructor\]$/, Do = /^(?:0|[1-9]\d*)$/, $ = {};
  $[Co] = $[zo] = $[To] = $[Bo] = $[Ao] = $[Ro] = $[Po] = $[Fo] = $[Eo] = !0, $[p] = $[x] = $[$o] = $[R] = $[wo] = $[P] = $[I] = $[V] = $[ve] = $[ye] = $[Re] = $[yo] = $[So] = $[xo] = $[ko] = !1;
  var It = typeof br == "object" && br && br.Object === Object && br, Wo = typeof self == "object" && self && self.Object === Object && self, Pe = It || Wo || Function("return this")(), Mt = r && !r.nodeType && r, Fe = Mt && !0 && e && !e.nodeType && e, Dt = Fe && Fe.exports === Mt, jr = Dt && It.process, Wt = function() {
    try {
      var t = Fe && Fe.require && Fe.require("util").types;
      return t || jr && jr.binding && jr.binding("util");
    } catch {
    }
  }(), jt = Wt && Wt.isTypedArray;
  function jo(t, o, l) {
    switch (l.length) {
      case 0:
        return t.call(o);
      case 1:
        return t.call(o, l[0]);
      case 2:
        return t.call(o, l[0], l[1]);
      case 3:
        return t.call(o, l[0], l[1], l[2]);
    }
    return t.apply(o, l);
  }
  function Oo(t, o) {
    for (var l = -1, d = Array(t); ++l < t; )
      d[l] = o(l);
    return d;
  }
  function Lo(t) {
    return function(o) {
      return t(o);
    };
  }
  function Ho(t, o) {
    return t == null ? void 0 : t[o];
  }
  function No(t, o) {
    return function(l) {
      return t(o(l));
    };
  }
  var Vo = Array.prototype, Uo = Function.prototype, or = Object.prototype, Or = Pe["__core-js_shared__"], nr = Uo.toString, K = or.hasOwnProperty, Ot = function() {
    var t = /[^.]+$/.exec(Or && Or.keys && Or.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }(), Lt = or.toString, qo = nr.call(Object), Go = RegExp(
    "^" + nr.call(K).replace(Io, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ir = Dt ? Pe.Buffer : void 0, Ht = Pe.Symbol, Nt = Pe.Uint8Array, Vt = ir ? ir.allocUnsafe : void 0, Ut = No(Object.getPrototypeOf, Object), qt = Object.create, Xo = or.propertyIsEnumerable, Yo = Vo.splice, de = Ht ? Ht.toStringTag : void 0, lr = function() {
    try {
      var t = Nr(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }(), Ko = ir ? ir.isBuffer : void 0, Gt = Math.max, Zo = Date.now, Xt = Nr(Pe, "Map"), Ee = Nr(Object, "create"), Jo = function() {
    function t() {
    }
    return function(o) {
      if (!ue(o))
        return {};
      if (qt)
        return qt(o);
      t.prototype = o;
      var l = new t();
      return t.prototype = void 0, l;
    };
  }();
  function ce(t) {
    var o = -1, l = t == null ? 0 : t.length;
    for (this.clear(); ++o < l; ) {
      var d = t[o];
      this.set(d[0], d[1]);
    }
  }
  function Qo() {
    this.__data__ = Ee ? Ee(null) : {}, this.size = 0;
  }
  function en(t) {
    var o = this.has(t) && delete this.__data__[t];
    return this.size -= o ? 1 : 0, o;
  }
  function rn(t) {
    var o = this.__data__;
    if (Ee) {
      var l = o[t];
      return l === i ? void 0 : l;
    }
    return K.call(o, t) ? o[t] : void 0;
  }
  function tn(t) {
    var o = this.__data__;
    return Ee ? o[t] !== void 0 : K.call(o, t);
  }
  function an(t, o) {
    var l = this.__data__;
    return this.size += this.has(t) ? 0 : 1, l[t] = Ee && o === void 0 ? i : o, this;
  }
  ce.prototype.clear = Qo, ce.prototype.delete = en, ce.prototype.get = rn, ce.prototype.has = tn, ce.prototype.set = an;
  function Z(t) {
    var o = -1, l = t == null ? 0 : t.length;
    for (this.clear(); ++o < l; ) {
      var d = t[o];
      this.set(d[0], d[1]);
    }
  }
  function on() {
    this.__data__ = [], this.size = 0;
  }
  function nn(t) {
    var o = this.__data__, l = sr(o, t);
    if (l < 0)
      return !1;
    var d = o.length - 1;
    return l == d ? o.pop() : Yo.call(o, l, 1), --this.size, !0;
  }
  function ln(t) {
    var o = this.__data__, l = sr(o, t);
    return l < 0 ? void 0 : o[l][1];
  }
  function sn(t) {
    return sr(this.__data__, t) > -1;
  }
  function dn(t, o) {
    var l = this.__data__, d = sr(l, t);
    return d < 0 ? (++this.size, l.push([t, o])) : l[d][1] = o, this;
  }
  Z.prototype.clear = on, Z.prototype.delete = nn, Z.prototype.get = ln, Z.prototype.has = sn, Z.prototype.set = dn;
  function Se(t) {
    var o = -1, l = t == null ? 0 : t.length;
    for (this.clear(); ++o < l; ) {
      var d = t[o];
      this.set(d[0], d[1]);
    }
  }
  function cn() {
    this.size = 0, this.__data__ = {
      hash: new ce(),
      map: new (Xt || Z)(),
      string: new ce()
    };
  }
  function un(t) {
    var o = cr(this, t).delete(t);
    return this.size -= o ? 1 : 0, o;
  }
  function bn(t) {
    return cr(this, t).get(t);
  }
  function fn(t) {
    return cr(this, t).has(t);
  }
  function pn(t, o) {
    var l = cr(this, t), d = l.size;
    return l.set(t, o), this.size += l.size == d ? 0 : 1, this;
  }
  Se.prototype.clear = cn, Se.prototype.delete = un, Se.prototype.get = bn, Se.prototype.has = fn, Se.prototype.set = pn;
  function xe(t) {
    var o = this.__data__ = new Z(t);
    this.size = o.size;
  }
  function gn() {
    this.__data__ = new Z(), this.size = 0;
  }
  function hn(t) {
    var o = this.__data__, l = o.delete(t);
    return this.size = o.size, l;
  }
  function mn(t) {
    return this.__data__.get(t);
  }
  function vn(t) {
    return this.__data__.has(t);
  }
  function yn(t, o) {
    var l = this.__data__;
    if (l instanceof Z) {
      var d = l.__data__;
      if (!Xt || d.length < a - 1)
        return d.push([t, o]), this.size = ++l.size, this;
      l = this.__data__ = new Se(d);
    }
    return l.set(t, o), this.size = l.size, this;
  }
  xe.prototype.clear = gn, xe.prototype.delete = hn, xe.prototype.get = mn, xe.prototype.has = vn, xe.prototype.set = yn;
  function Sn(t, o) {
    var l = qr(t), d = !l && Ur(t), h = !l && !d && Qt(t), _ = !l && !d && !h && ra(t), C = l || d || h || _, g = C ? Oo(t.length, String) : [], z = g.length;
    for (var L in t)
      (o || K.call(t, L)) && !(C && // Safari 9 has enumerable `arguments.length` in strict mode.
      (L == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      h && (L == "offset" || L == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      _ && (L == "buffer" || L == "byteLength" || L == "byteOffset") || // Skip index properties.
      Zt(L, z))) && g.push(L);
    return g;
  }
  function Lr(t, o, l) {
    (l !== void 0 && !ur(t[o], l) || l === void 0 && !(o in t)) && Hr(t, o, l);
  }
  function xn(t, o, l) {
    var d = t[o];
    (!(K.call(t, o) && ur(d, l)) || l === void 0 && !(o in t)) && Hr(t, o, l);
  }
  function sr(t, o) {
    for (var l = t.length; l--; )
      if (ur(t[l][0], o))
        return l;
    return -1;
  }
  function Hr(t, o, l) {
    o == "__proto__" && lr ? lr(t, o, {
      configurable: !0,
      enumerable: !0,
      value: l,
      writable: !0
    }) : t[o] = l;
  }
  var _n = In();
  function dr(t) {
    return t == null ? t === void 0 ? _o : ar : de && de in Object(t) ? Mn(t) : Hn(t);
  }
  function Yt(t) {
    return Ie(t) && dr(t) == p;
  }
  function kn(t) {
    if (!ue(t) || On(t))
      return !1;
    var o = Xr(t) ? Go : Mo;
    return o.test(qn(t));
  }
  function $n(t) {
    return Ie(t) && ea(t.length) && !!$[dr(t)];
  }
  function wn(t) {
    if (!ue(t))
      return Ln(t);
    var o = Jt(t), l = [];
    for (var d in t)
      d == "constructor" && (o || !K.call(t, d)) || l.push(d);
    return l;
  }
  function Kt(t, o, l, d, h) {
    t !== o && _n(o, function(_, C) {
      if (h || (h = new xe()), ue(_))
        Cn(t, o, C, l, Kt, d, h);
      else {
        var g = d ? d(Vr(t, C), _, C + "", t, o, h) : void 0;
        g === void 0 && (g = _), Lr(t, C, g);
      }
    }, ta);
  }
  function Cn(t, o, l, d, h, _, C) {
    var g = Vr(t, l), z = Vr(o, l), L = C.get(z);
    if (L) {
      Lr(t, l, L);
      return;
    }
    var j = _ ? _(g, z, l + "", t, o, C) : void 0, Me = j === void 0;
    if (Me) {
      var Yr = qr(z), Kr = !Yr && Qt(z), oa = !Yr && !Kr && ra(z);
      j = z, Yr || Kr || oa ? qr(g) ? j = g : Gn(g) ? j = Pn(g) : Kr ? (Me = !1, j = Bn(z, !0)) : oa ? (Me = !1, j = Rn(z, !0)) : j = [] : Xn(z) || Ur(z) ? (j = g, Ur(g) ? j = Yn(g) : (!ue(g) || Xr(g)) && (j = Dn(z))) : Me = !1;
    }
    Me && (C.set(z, j), h(j, z, d, _, C), C.delete(z)), Lr(t, l, j);
  }
  function zn(t, o) {
    return Vn(Nn(t, o, aa), t + "");
  }
  var Tn = lr ? function(t, o) {
    return lr(t, "toString", {
      configurable: !0,
      enumerable: !1,
      value: Zn(o),
      writable: !0
    });
  } : aa;
  function Bn(t, o) {
    if (o)
      return t.slice();
    var l = t.length, d = Vt ? Vt(l) : new t.constructor(l);
    return t.copy(d), d;
  }
  function An(t) {
    var o = new t.constructor(t.byteLength);
    return new Nt(o).set(new Nt(t)), o;
  }
  function Rn(t, o) {
    var l = o ? An(t.buffer) : t.buffer;
    return new t.constructor(l, t.byteOffset, t.length);
  }
  function Pn(t, o) {
    var l = -1, d = t.length;
    for (o || (o = Array(d)); ++l < d; )
      o[l] = t[l];
    return o;
  }
  function Fn(t, o, l, d) {
    var h = !l;
    l || (l = {});
    for (var _ = -1, C = o.length; ++_ < C; ) {
      var g = o[_], z = d ? d(l[g], t[g], g, l, t) : void 0;
      z === void 0 && (z = t[g]), h ? Hr(l, g, z) : xn(l, g, z);
    }
    return l;
  }
  function En(t) {
    return zn(function(o, l) {
      var d = -1, h = l.length, _ = h > 1 ? l[h - 1] : void 0, C = h > 2 ? l[2] : void 0;
      for (_ = t.length > 3 && typeof _ == "function" ? (h--, _) : void 0, C && Wn(l[0], l[1], C) && (_ = h < 3 ? void 0 : _, h = 1), o = Object(o); ++d < h; ) {
        var g = l[d];
        g && t(o, g, d, _);
      }
      return o;
    });
  }
  function In(t) {
    return function(o, l, d) {
      for (var h = -1, _ = Object(o), C = d(o), g = C.length; g--; ) {
        var z = C[t ? g : ++h];
        if (l(_[z], z, _) === !1)
          break;
      }
      return o;
    };
  }
  function cr(t, o) {
    var l = t.__data__;
    return jn(o) ? l[typeof o == "string" ? "string" : "hash"] : l.map;
  }
  function Nr(t, o) {
    var l = Ho(t, o);
    return kn(l) ? l : void 0;
  }
  function Mn(t) {
    var o = K.call(t, de), l = t[de];
    try {
      t[de] = void 0;
      var d = !0;
    } catch {
    }
    var h = Lt.call(t);
    return d && (o ? t[de] = l : delete t[de]), h;
  }
  function Dn(t) {
    return typeof t.constructor == "function" && !Jt(t) ? Jo(Ut(t)) : {};
  }
  function Zt(t, o) {
    var l = typeof t;
    return o = o ?? u, !!o && (l == "number" || l != "symbol" && Do.test(t)) && t > -1 && t % 1 == 0 && t < o;
  }
  function Wn(t, o, l) {
    if (!ue(l))
      return !1;
    var d = typeof o;
    return (d == "number" ? Gr(l) && Zt(o, l.length) : d == "string" && o in l) ? ur(l[o], t) : !1;
  }
  function jn(t) {
    var o = typeof t;
    return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? t !== "__proto__" : t === null;
  }
  function On(t) {
    return !!Ot && Ot in t;
  }
  function Jt(t) {
    var o = t && t.constructor, l = typeof o == "function" && o.prototype || or;
    return t === l;
  }
  function Ln(t) {
    var o = [];
    if (t != null)
      for (var l in Object(t))
        o.push(l);
    return o;
  }
  function Hn(t) {
    return Lt.call(t);
  }
  function Nn(t, o, l) {
    return o = Gt(o === void 0 ? t.length - 1 : o, 0), function() {
      for (var d = arguments, h = -1, _ = Gt(d.length - o, 0), C = Array(_); ++h < _; )
        C[h] = d[o + h];
      h = -1;
      for (var g = Array(o + 1); ++h < o; )
        g[h] = d[h];
      return g[o] = l(C), jo(t, this, g);
    };
  }
  function Vr(t, o) {
    if (!(o === "constructor" && typeof t[o] == "function") && o != "__proto__")
      return t[o];
  }
  var Vn = Un(Tn);
  function Un(t) {
    var o = 0, l = 0;
    return function() {
      var d = Zo(), h = c - (d - l);
      if (l = d, h > 0) {
        if (++o >= s)
          return arguments[0];
      } else
        o = 0;
      return t.apply(void 0, arguments);
    };
  }
  function qn(t) {
    if (t != null) {
      try {
        return nr.call(t);
      } catch {
      }
      try {
        return t + "";
      } catch {
      }
    }
    return "";
  }
  function ur(t, o) {
    return t === o || t !== t && o !== o;
  }
  var Ur = Yt(function() {
    return arguments;
  }()) ? Yt : function(t) {
    return Ie(t) && K.call(t, "callee") && !Xo.call(t, "callee");
  }, qr = Array.isArray;
  function Gr(t) {
    return t != null && ea(t.length) && !Xr(t);
  }
  function Gn(t) {
    return Ie(t) && Gr(t);
  }
  var Qt = Ko || Jn;
  function Xr(t) {
    if (!ue(t))
      return !1;
    var o = dr(t);
    return o == V || o == Ae || o == B || o == vo;
  }
  function ea(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= u;
  }
  function ue(t) {
    var o = typeof t;
    return t != null && (o == "object" || o == "function");
  }
  function Ie(t) {
    return t != null && typeof t == "object";
  }
  function Xn(t) {
    if (!Ie(t) || dr(t) != Re)
      return !1;
    var o = Ut(t);
    if (o === null)
      return !0;
    var l = K.call(o, "constructor") && o.constructor;
    return typeof l == "function" && l instanceof l && nr.call(l) == qo;
  }
  var ra = jt ? Lo(jt) : $n;
  function Yn(t) {
    return Fn(t, ta(t));
  }
  function ta(t) {
    return Gr(t) ? Sn(t, !0) : wn(t);
  }
  var Kn = En(function(t, o, l, d) {
    Kt(t, o, l, d);
  });
  function Zn(t) {
    return function() {
      return t;
    };
  }
  function aa(t) {
    return t;
  }
  function Jn() {
    return !1;
  }
  e.exports = Kn;
})(Ar, Ar.exports);
var ri = Ar.exports;
const Tt = /* @__PURE__ */ ei(ri);
var ti = (e) => /!(important)?$/.test(e), na = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, ai = (e, r) => (a) => {
  const i = String(r), s = ti(i), c = na(i), u = e ? `${e}.${c}` : c;
  let p = Ir(a.__cssMap) && u in a.__cssMap ? a.__cssMap[u].varRef : r;
  return p = na(p), s ? `${p} !important` : p;
};
function Bt(e) {
  const { scale: r, transform: a, compose: i } = e;
  return (c, u) => {
    var p;
    const x = ai(r, c)(u);
    let B = (p = a == null ? void 0 : a(x, u)) != null ? p : x;
    return i && (B = i(B, u)), B;
  };
}
var fr = (...e) => (r) => e.reduce((a, i) => i(a), r);
function H(e, r) {
  return (a) => {
    const i = { property: a, scale: e };
    return i.transform = Bt({
      scale: e,
      transform: r
    }), i;
  };
}
var oi = ({ rtl: e, ltr: r }) => (a) => a.direction === "rtl" ? e : r;
function ni(e) {
  const { property: r, scale: a, transform: i } = e;
  return {
    scale: a,
    property: oi(r),
    transform: a ? Bt({
      scale: a,
      compose: i
    }) : i
  };
}
var Xa = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function ii() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Xa
  ].join(" ");
}
function li() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Xa
  ].join(" ");
}
var si = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, di = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function ci(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
var ui = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, mt = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, bi = new Set(Object.values(mt)), vt = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), fi = (e) => e.trim();
function pi(e, r) {
  if (e == null || vt.has(e))
    return e;
  if (!(yt(e) || vt.has(e)))
    return `url('${e}')`;
  const s = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), c = s == null ? void 0 : s[1], u = s == null ? void 0 : s[2];
  if (!c || !u)
    return e;
  const p = c.includes("-gradient") ? c : `${c}-gradient`, [x, ...B] = u.split(",").map(fi).filter(Boolean);
  if ((B == null ? void 0 : B.length) === 0)
    return e;
  const R = x in mt ? mt[x] : x;
  B.unshift(R);
  const P = B.map((I) => {
    if (bi.has(I))
      return I;
    const V = I.indexOf(" "), [Ae, ve] = V !== -1 ? [I.substr(0, V), I.substr(V + 1)] : [I], ye = yt(ve) ? ve : ve && ve.split(" "), ar = `colors.${Ae}`, Re = ar in r.__cssMap ? r.__cssMap[ar].varRef : Ae;
    return ye ? [
      Re,
      ...Array.isArray(ye) ? ye : [ye]
    ].join(" ") : Re;
  });
  return `${p}(${P.join(", ")})`;
}
var yt = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), gi = (e, r) => pi(e, r ?? {});
function hi(e) {
  return /^var\(--.+\)$/.test(e);
}
var mi = (e) => {
  const r = parseFloat(e.toString()), a = e.toString().replace(String(r), "");
  return { unitless: !a, value: r, unit: a };
}, G = (e) => (r) => `${e}(${r})`, m = {
  filter(e) {
    return e !== "auto" ? e : si;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : di;
  },
  ring(e) {
    return ci(m.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? ii() : e === "auto-gpu" ? li() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: r } = mi(e);
    return r || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, r) {
    const a = { left: "right", right: "left" };
    return r.direction === "rtl" ? a[e] : e;
  },
  degree(e) {
    if (hi(e) || e == null)
      return e;
    const r = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || r ? `${e}deg` : e;
  },
  gradient: gi,
  blur: G("blur"),
  opacity: G("opacity"),
  brightness: G("brightness"),
  contrast: G("contrast"),
  dropShadow: G("drop-shadow"),
  grayscale: G("grayscale"),
  hueRotate: G("hue-rotate"),
  invert: G("invert"),
  saturate: G("saturate"),
  sepia: G("sepia"),
  bgImage(e) {
    return e == null || yt(e) || vt.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const r = String(e) === "0" || String(e) === "none";
    return e !== null && r ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var r;
    const { space: a, divide: i } = (r = ui[e]) != null ? r : {}, s = { flexDirection: e };
    return a && (s[a] = 1), i && (s[i] = 1), s;
  }
}, n = {
  borderWidths: H("borderWidths"),
  borderStyles: H("borderStyles"),
  colors: H("colors"),
  borders: H("borders"),
  gradients: H("gradients", m.gradient),
  radii: H("radii", m.px),
  space: H("space", fr(m.vh, m.px)),
  spaceT: H("space", fr(m.vh, m.px)),
  degreeT(e) {
    return { property: e, transform: m.degree };
  },
  prop(e, r, a) {
    return {
      property: e,
      scale: r,
      ...r && {
        transform: Bt({ scale: r, transform: a })
      }
    };
  },
  propT(e, r) {
    return { property: e, transform: r };
  },
  sizes: H("sizes", fr(m.vh, m.px)),
  sizesT: H("sizes", fr(m.vh, m.fraction)),
  shadows: H("shadows"),
  logical: ni,
  blur: H("blur", m.blur)
}, xr = {
  background: n.colors("background"),
  backgroundColor: n.colors("backgroundColor"),
  backgroundImage: n.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: m.bgClip },
  bgSize: n.prop("backgroundSize"),
  bgPosition: n.prop("backgroundPosition"),
  bg: n.colors("background"),
  bgColor: n.colors("backgroundColor"),
  bgPos: n.prop("backgroundPosition"),
  bgRepeat: n.prop("backgroundRepeat"),
  bgAttachment: n.prop("backgroundAttachment"),
  bgGradient: n.gradients("backgroundImage"),
  bgClip: { transform: m.bgClip }
};
Object.assign(xr, {
  bgImage: xr.backgroundImage,
  bgImg: xr.backgroundImage
});
var v = {
  border: n.borders("border"),
  borderWidth: n.borderWidths("borderWidth"),
  borderStyle: n.borderStyles("borderStyle"),
  borderColor: n.colors("borderColor"),
  borderRadius: n.radii("borderRadius"),
  borderTop: n.borders("borderTop"),
  borderBlockStart: n.borders("borderBlockStart"),
  borderTopLeftRadius: n.radii("borderTopLeftRadius"),
  borderStartStartRadius: n.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: n.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: n.radii("borderTopRightRadius"),
  borderStartEndRadius: n.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: n.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: n.borders("borderRight"),
  borderInlineEnd: n.borders("borderInlineEnd"),
  borderBottom: n.borders("borderBottom"),
  borderBlockEnd: n.borders("borderBlockEnd"),
  borderBottomLeftRadius: n.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: n.radii("borderBottomRightRadius"),
  borderLeft: n.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: n.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: n.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: n.borders(["borderLeft", "borderRight"]),
  borderInline: n.borders("borderInline"),
  borderY: n.borders(["borderTop", "borderBottom"]),
  borderBlock: n.borders("borderBlock"),
  borderTopWidth: n.borderWidths("borderTopWidth"),
  borderBlockStartWidth: n.borderWidths("borderBlockStartWidth"),
  borderTopColor: n.colors("borderTopColor"),
  borderBlockStartColor: n.colors("borderBlockStartColor"),
  borderTopStyle: n.borderStyles("borderTopStyle"),
  borderBlockStartStyle: n.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: n.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: n.borderWidths("borderBlockEndWidth"),
  borderBottomColor: n.colors("borderBottomColor"),
  borderBlockEndColor: n.colors("borderBlockEndColor"),
  borderBottomStyle: n.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: n.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: n.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: n.borderWidths("borderInlineStartWidth"),
  borderLeftColor: n.colors("borderLeftColor"),
  borderInlineStartColor: n.colors("borderInlineStartColor"),
  borderLeftStyle: n.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: n.borderStyles("borderInlineStartStyle"),
  borderRightWidth: n.borderWidths("borderRightWidth"),
  borderInlineEndWidth: n.borderWidths("borderInlineEndWidth"),
  borderRightColor: n.colors("borderRightColor"),
  borderInlineEndColor: n.colors("borderInlineEndColor"),
  borderRightStyle: n.borderStyles("borderRightStyle"),
  borderInlineEndStyle: n.borderStyles("borderInlineEndStyle"),
  borderTopRadius: n.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: n.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: n.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: n.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(v, {
  rounded: v.borderRadius,
  roundedTop: v.borderTopRadius,
  roundedTopLeft: v.borderTopLeftRadius,
  roundedTopRight: v.borderTopRightRadius,
  roundedTopStart: v.borderStartStartRadius,
  roundedTopEnd: v.borderStartEndRadius,
  roundedBottom: v.borderBottomRadius,
  roundedBottomLeft: v.borderBottomLeftRadius,
  roundedBottomRight: v.borderBottomRightRadius,
  roundedBottomStart: v.borderEndStartRadius,
  roundedBottomEnd: v.borderEndEndRadius,
  roundedLeft: v.borderLeftRadius,
  roundedRight: v.borderRightRadius,
  roundedStart: v.borderInlineStartRadius,
  roundedEnd: v.borderInlineEndRadius,
  borderStart: v.borderInlineStart,
  borderEnd: v.borderInlineEnd,
  borderTopStartRadius: v.borderStartStartRadius,
  borderTopEndRadius: v.borderStartEndRadius,
  borderBottomStartRadius: v.borderEndStartRadius,
  borderBottomEndRadius: v.borderEndEndRadius,
  borderStartRadius: v.borderInlineStartRadius,
  borderEndRadius: v.borderInlineEndRadius,
  borderStartWidth: v.borderInlineStartWidth,
  borderEndWidth: v.borderInlineEndWidth,
  borderStartColor: v.borderInlineStartColor,
  borderEndColor: v.borderInlineEndColor,
  borderStartStyle: v.borderInlineStartStyle,
  borderEndStyle: v.borderInlineEndStyle
});
var vi = {
  color: n.colors("color"),
  textColor: n.colors("color"),
  fill: n.colors("fill"),
  stroke: n.colors("stroke")
}, St = {
  boxShadow: n.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: n.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: n.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(St, {
  shadow: St.boxShadow
});
var yi = {
  filter: { transform: m.filter },
  blur: n.blur("--chakra-blur"),
  brightness: n.propT("--chakra-brightness", m.brightness),
  contrast: n.propT("--chakra-contrast", m.contrast),
  hueRotate: n.degreeT("--chakra-hue-rotate"),
  invert: n.propT("--chakra-invert", m.invert),
  saturate: n.propT("--chakra-saturate", m.saturate),
  dropShadow: n.propT("--chakra-drop-shadow", m.dropShadow),
  backdropFilter: { transform: m.backdropFilter },
  backdropBlur: n.blur("--chakra-backdrop-blur"),
  backdropBrightness: n.propT(
    "--chakra-backdrop-brightness",
    m.brightness
  ),
  backdropContrast: n.propT("--chakra-backdrop-contrast", m.contrast),
  backdropHueRotate: n.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: n.propT("--chakra-backdrop-invert", m.invert),
  backdropSaturate: n.propT("--chakra-backdrop-saturate", m.saturate)
}, Rr = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: m.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: n.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: n.space("gap"),
  rowGap: n.space("rowGap"),
  columnGap: n.space("columnGap")
};
Object.assign(Rr, {
  flexDir: Rr.flexDirection
});
var Ya = {
  gridGap: n.space("gridGap"),
  gridColumnGap: n.space("gridColumnGap"),
  gridRowGap: n.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, Si = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: m.outline },
  outlineOffset: !0,
  outlineColor: n.colors("outlineColor")
}, N = {
  width: n.sizesT("width"),
  inlineSize: n.sizesT("inlineSize"),
  height: n.sizes("height"),
  blockSize: n.sizes("blockSize"),
  boxSize: n.sizes(["width", "height"]),
  minWidth: n.sizes("minWidth"),
  minInlineSize: n.sizes("minInlineSize"),
  minHeight: n.sizes("minHeight"),
  minBlockSize: n.sizes("minBlockSize"),
  maxWidth: n.sizes("maxWidth"),
  maxInlineSize: n.sizes("maxInlineSize"),
  maxHeight: n.sizes("maxHeight"),
  maxBlockSize: n.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, r) => {
      var a, i, s;
      return { [`@media screen and (min-width: ${(s = (i = (a = r.__breakpoints) == null ? void 0 : a.get(e)) == null ? void 0 : i.minW) != null ? s : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, r) => {
      var a, i, s;
      return { [`@media screen and (max-width: ${(s = (i = (a = r.__breakpoints) == null ? void 0 : a.get(e)) == null ? void 0 : i._minW) != null ? s : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: n.propT("float", m.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(N, {
  w: N.width,
  h: N.height,
  minW: N.minWidth,
  maxW: N.maxWidth,
  minH: N.minHeight,
  maxH: N.maxHeight,
  overscroll: N.overscrollBehavior,
  overscrollX: N.overscrollBehaviorX,
  overscrollY: N.overscrollBehaviorY
});
var xi = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: n.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: n.prop("listStyleImage")
};
function _i(e, r, a, i) {
  const s = typeof r == "string" ? r.split(".") : [r];
  for (i = 0; i < s.length && e; i += 1)
    e = e[s[i]];
  return e === void 0 ? a : e;
}
var ki = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (i, s, c, u) => {
    if (typeof i > "u")
      return e(i, s, c);
    r.has(i) || r.set(i, /* @__PURE__ */ new Map());
    const p = r.get(i);
    if (p.has(s))
      return p.get(s);
    const x = e(i, s, c, u);
    return p.set(s, x), x;
  };
}, $i = ki(_i), wi = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Ci = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Zr = (e, r, a) => {
  const i = {}, s = $i(e, r, {});
  for (const c in s)
    c in a && a[c] != null || (i[c] = s[c]);
  return i;
}, zi = {
  srOnly: {
    transform(e) {
      return e === !0 ? wi : e === "focusable" ? Ci : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, r, a) => Zr(r, `layerStyles.${e}`, a)
  },
  textStyle: {
    processResult: !0,
    transform: (e, r, a) => Zr(r, `textStyles.${e}`, a)
  },
  apply: {
    processResult: !0,
    transform: (e, r, a) => Zr(r, e, a)
  }
}, Ge = {
  position: !0,
  pos: n.prop("position"),
  zIndex: n.prop("zIndex", "zIndices"),
  inset: n.spaceT("inset"),
  insetX: n.spaceT(["left", "right"]),
  insetInline: n.spaceT("insetInline"),
  insetY: n.spaceT(["top", "bottom"]),
  insetBlock: n.spaceT("insetBlock"),
  top: n.spaceT("top"),
  insetBlockStart: n.spaceT("insetBlockStart"),
  bottom: n.spaceT("bottom"),
  insetBlockEnd: n.spaceT("insetBlockEnd"),
  left: n.spaceT("left"),
  insetInlineStart: n.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: n.spaceT("right"),
  insetInlineEnd: n.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Ge, {
  insetStart: Ge.insetInlineStart,
  insetEnd: Ge.insetInlineEnd
});
var Ti = {
  ring: { transform: m.ring },
  ringColor: n.colors("--chakra-ring-color"),
  ringOffset: n.prop("--chakra-ring-offset-width"),
  ringOffsetColor: n.colors("--chakra-ring-offset-color"),
  ringInset: n.prop("--chakra-ring-inset")
}, w = {
  margin: n.spaceT("margin"),
  marginTop: n.spaceT("marginTop"),
  marginBlockStart: n.spaceT("marginBlockStart"),
  marginRight: n.spaceT("marginRight"),
  marginInlineEnd: n.spaceT("marginInlineEnd"),
  marginBottom: n.spaceT("marginBottom"),
  marginBlockEnd: n.spaceT("marginBlockEnd"),
  marginLeft: n.spaceT("marginLeft"),
  marginInlineStart: n.spaceT("marginInlineStart"),
  marginX: n.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: n.spaceT("marginInline"),
  marginY: n.spaceT(["marginTop", "marginBottom"]),
  marginBlock: n.spaceT("marginBlock"),
  padding: n.space("padding"),
  paddingTop: n.space("paddingTop"),
  paddingBlockStart: n.space("paddingBlockStart"),
  paddingRight: n.space("paddingRight"),
  paddingBottom: n.space("paddingBottom"),
  paddingBlockEnd: n.space("paddingBlockEnd"),
  paddingLeft: n.space("paddingLeft"),
  paddingInlineStart: n.space("paddingInlineStart"),
  paddingInlineEnd: n.space("paddingInlineEnd"),
  paddingX: n.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: n.space("paddingInline"),
  paddingY: n.space(["paddingTop", "paddingBottom"]),
  paddingBlock: n.space("paddingBlock")
};
Object.assign(w, {
  m: w.margin,
  mt: w.marginTop,
  mr: w.marginRight,
  me: w.marginInlineEnd,
  marginEnd: w.marginInlineEnd,
  mb: w.marginBottom,
  ml: w.marginLeft,
  ms: w.marginInlineStart,
  marginStart: w.marginInlineStart,
  mx: w.marginX,
  my: w.marginY,
  p: w.padding,
  pt: w.paddingTop,
  py: w.paddingY,
  px: w.paddingX,
  pb: w.paddingBottom,
  pl: w.paddingLeft,
  ps: w.paddingInlineStart,
  paddingStart: w.paddingInlineStart,
  pr: w.paddingRight,
  pe: w.paddingInlineEnd,
  paddingEnd: w.paddingInlineEnd
});
var Bi = {
  textDecorationColor: n.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: n.shadows("textShadow")
}, Ai = {
  clipPath: !0,
  transform: n.propT("transform", m.transform),
  transformOrigin: !0,
  translateX: n.spaceT("--chakra-translate-x"),
  translateY: n.spaceT("--chakra-translate-y"),
  skewX: n.degreeT("--chakra-skew-x"),
  skewY: n.degreeT("--chakra-skew-y"),
  scaleX: n.prop("--chakra-scale-x"),
  scaleY: n.prop("--chakra-scale-y"),
  scale: n.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: n.degreeT("--chakra-rotate")
}, Ri = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: n.prop("transitionDuration", "transition.duration"),
  transitionProperty: n.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: n.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, Pi = {
  fontFamily: n.prop("fontFamily", "fonts"),
  fontSize: n.prop("fontSize", "fontSizes", m.px),
  fontWeight: n.prop("fontWeight", "fontWeights"),
  lineHeight: n.prop("lineHeight", "lineHeights"),
  letterSpacing: n.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  isTruncated: {
    transform(e) {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, Fi = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  scrollMargin: n.spaceT("scrollMargin"),
  scrollMarginTop: n.spaceT("scrollMarginTop"),
  scrollMarginBottom: n.spaceT("scrollMarginBottom"),
  scrollMarginLeft: n.spaceT("scrollMarginLeft"),
  scrollMarginRight: n.spaceT("scrollMarginRight"),
  scrollMarginX: n.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: n.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: n.spaceT("scrollPadding"),
  scrollPaddingTop: n.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: n.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: n.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: n.spaceT("scrollPaddingRight"),
  scrollPaddingX: n.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: n.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function Ka(e) {
  return Ir(e) && e.reference ? e.reference : String(e);
}
var Mr = (e, ...r) => r.map(Ka).join(` ${e} `).replace(/calc/g, ""), ia = (...e) => `calc(${Mr("+", ...e)})`, la = (...e) => `calc(${Mr("-", ...e)})`, xt = (...e) => `calc(${Mr("*", ...e)})`, sa = (...e) => `calc(${Mr("/", ...e)})`, da = (e) => {
  const r = Ka(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : xt(r, -1);
}, De = Object.assign(
  (e) => ({
    add: (...r) => De(ia(e, ...r)),
    subtract: (...r) => De(la(e, ...r)),
    multiply: (...r) => De(xt(e, ...r)),
    divide: (...r) => De(sa(e, ...r)),
    negate: () => De(da(e)),
    toString: () => e.toString()
  }),
  {
    add: ia,
    subtract: la,
    multiply: xt,
    divide: sa,
    negate: da
  }
);
function Ei(e, r = "-") {
  return e.replace(/\s+/g, r);
}
function Ii(e) {
  const r = Ei(e.toString());
  return Di(Mi(r));
}
function Mi(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function Di(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function Wi(e, r = "") {
  return [r, e].filter(Boolean).join("-");
}
function ji(e, r) {
  return `var(${e}${r ? `, ${r}` : ""})`;
}
function Oi(e, r = "") {
  return Ii(`--${Wi(e, r)}`);
}
function f(e, r, a) {
  const i = Oi(e, a);
  return {
    variable: i,
    reference: ji(i, r)
  };
}
function Li(e, r) {
  const a = {};
  for (const i of r) {
    if (Array.isArray(i)) {
      const [s, c] = i;
      a[s] = f(`${e}-${s}`, c);
      continue;
    }
    a[i] = f(`${e}-${i}`);
  }
  return a;
}
var F = {
  hover: (e, r) => `${e}:hover ${r}, ${e}[data-hover] ${r}`,
  focus: (e, r) => `${e}:focus ${r}, ${e}[data-focus] ${r}`,
  focusVisible: (e, r) => `${e}:focus-visible ${r}`,
  focusWithin: (e, r) => `${e}:focus-within ${r}`,
  active: (e, r) => `${e}:active ${r}, ${e}[data-active] ${r}`,
  disabled: (e, r) => `${e}:disabled ${r}, ${e}[data-disabled] ${r}`,
  invalid: (e, r) => `${e}:invalid ${r}, ${e}[data-invalid] ${r}`,
  checked: (e, r) => `${e}:checked ${r}, ${e}[data-checked] ${r}`,
  indeterminate: (e, r) => `${e}:indeterminate ${r}, ${e}[aria-checked=mixed] ${r}, ${e}[data-indeterminate] ${r}`,
  readOnly: (e, r) => `${e}:read-only ${r}, ${e}[readonly] ${r}, ${e}[data-read-only] ${r}`,
  expanded: (e, r) => `${e}:read-only ${r}, ${e}[aria-expanded=true] ${r}, ${e}[data-expanded] ${r}`,
  placeholderShown: (e, r) => `${e}:placeholder-shown ${r}`
}, oe = (e) => Za((r) => e(r, "&"), "[role=group]", "[data-group]", ".group"), J = (e) => Za((r) => e(r, "~ &"), "[data-peer]", ".peer"), Za = (e, ...r) => r.map(e).join(", "), Ja = {
  _hover: "&:hover, &[data-hover]",
  _active: "&:active, &[data-active]",
  _focus: "&:focus, &[data-focus]",
  _highlighted: "&[data-highlighted]",
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  _before: "&::before",
  _after: "&::after",
  _empty: "&:empty",
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  _checked: "&[aria-checked=true], &[data-checked]",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  _valid: "&[data-valid], &[data-state=valid]",
  _loading: "&[data-loading], &[aria-busy=true]",
  _selected: "&[aria-selected=true], &[data-selected]",
  _hidden: "&[hidden], &[data-hidden]",
  _autofill: "&:-webkit-autofill",
  _even: "&:nth-of-type(even)",
  _odd: "&:nth-of-type(odd)",
  _first: "&:first-of-type",
  _firstLetter: "&::first-letter",
  _last: "&:last-of-type",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _visited: "&:visited",
  _activeLink: "&[aria-current=page]",
  _activeStep: "&[aria-current=step]",
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _groupHover: oe(F.hover),
  _peerHover: J(F.hover),
  _groupFocus: oe(F.focus),
  _peerFocus: J(F.focus),
  _groupFocusVisible: oe(F.focusVisible),
  _peerFocusVisible: J(F.focusVisible),
  _groupActive: oe(F.active),
  _peerActive: J(F.active),
  _groupDisabled: oe(F.disabled),
  _peerDisabled: J(F.disabled),
  _groupInvalid: oe(F.invalid),
  _peerInvalid: J(F.invalid),
  _groupChecked: oe(F.checked),
  _peerChecked: J(F.checked),
  _groupFocusWithin: oe(F.focusWithin),
  _peerFocusWithin: J(F.focusWithin),
  _peerPlaceholderShown: J(F.placeholderShown),
  _placeholder: "&::placeholder",
  _placeholderShown: "&:placeholder-shown",
  _fullScreen: "&:fullscreen",
  _selection: "&::selection",
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  _mediaDark: "@media (prefers-color-scheme: dark)",
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  _horizontal: "&[data-orientation=horizontal]",
  _vertical: "&[data-orientation=vertical]"
}, Hi = Object.keys(
  Ja
), Qa = Tt(
  {},
  xr,
  v,
  vi,
  Rr,
  N,
  yi,
  Ti,
  Si,
  Ya,
  zi,
  Ge,
  St,
  w,
  Fi,
  Pi,
  Bi,
  Ai,
  xi,
  Ri
);
Object.assign({}, w, N, Rr, Ya, Ge);
[...Object.keys(Qa), ...Hi];
({ ...Qa, ...Ja });
function k(e) {
  return {
    definePartsStyle(r) {
      return r;
    },
    defineMultiStyleConfig(r) {
      return { parts: e, ...r };
    }
  };
}
var Ni = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function Vi(e) {
  return Ir(e) ? Ni.every(
    (r) => Object.prototype.hasOwnProperty.call(e, r)
  ) : !1;
}
var Ui = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, qi = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, Gi = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, Xi = {
  property: Ui,
  easing: qi,
  duration: Gi
}, Yi = Xi, Ki = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, Zi = Ki, Ji = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, Qi = Ji, el = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, rl = el, tl = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
}, al = tl, ol = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, nl = ol, il = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, ll = il, sl = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, dl = sl, cl = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
}, eo = cl, ro = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, ul = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
}, bl = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, fl = {
  ...ro,
  ...ul,
  container: bl
}, to = fl, pl = {
  breakpoints: rl,
  zIndices: Zi,
  radii: nl,
  blur: dl,
  colors: al,
  ...eo,
  sizes: to,
  shadows: ll,
  space: ro,
  borders: Qi,
  transition: Yi
}, { defineMultiStyleConfig: gl, definePartsStyle: He } = k([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Q = f("stepper-indicator-size"), ke = f("stepper-icon-size"), $e = f("stepper-title-font-size"), Ne = f("stepper-description-font-size"), We = f("stepper-accent-color"), hl = He(({ colorScheme: e }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [We.variable]: `colors.${e}.500`,
    _dark: {
      [We.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: $e.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Ne.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: $e.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: ke.reference,
    height: ke.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Q.reference,
    height: Q.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: We.reference
    },
    "&[data-status=complete]": {
      bg: We.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: We.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${Q.reference} - 8px)`,
      top: `calc(${Q.reference} + 4px)`,
      insetStart: `calc(${Q.reference} / 2 - 1px)`
    }
  }
})), ml = gl({
  baseStyle: hl,
  sizes: {
    xs: He({
      stepper: {
        [Q.variable]: "sizes.4",
        [ke.variable]: "sizes.3",
        [$e.variable]: "fontSizes.xs",
        [Ne.variable]: "fontSizes.xs"
      }
    }),
    sm: He({
      stepper: {
        [Q.variable]: "sizes.6",
        [ke.variable]: "sizes.4",
        [$e.variable]: "fontSizes.sm",
        [Ne.variable]: "fontSizes.xs"
      }
    }),
    md: He({
      stepper: {
        [Q.variable]: "sizes.8",
        [ke.variable]: "sizes.5",
        [$e.variable]: "fontSizes.md",
        [Ne.variable]: "fontSizes.sm"
      }
    }),
    lg: He({
      stepper: {
        [Q.variable]: "sizes.10",
        [ke.variable]: "sizes.6",
        [$e.variable]: "fontSizes.lg",
        [Ne.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function S(e, r = {}) {
  let a = !1;
  function i() {
    if (!a) {
      a = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function s(...R) {
    i();
    for (const P of R)
      r[P] = x(P);
    return S(e, r);
  }
  function c(...R) {
    for (const P of R)
      P in r || (r[P] = x(P));
    return S(e, r);
  }
  function u() {
    return Object.fromEntries(
      Object.entries(r).map(([P, I]) => [P, I.selector])
    );
  }
  function p() {
    return Object.fromEntries(
      Object.entries(r).map(([P, I]) => [P, I.className])
    );
  }
  function x(R) {
    const V = `chakra-${(["container", "root"].includes(R ?? "") ? [e] : [e, R]).filter(Boolean).join("__")}`;
    return {
      className: V,
      selector: `.${V}`,
      toString: () => R
    };
  }
  return {
    parts: s,
    toPart: x,
    extend: c,
    selectors: u,
    classnames: p,
    get keys() {
      return Object.keys(r);
    },
    __type: {}
  };
}
var vl = S("accordion").parts("root", "container", "button", "panel").extend("icon"), yl = S("alert").parts("title", "description", "container").extend("icon", "spinner"), Sl = S("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), xl = S("breadcrumb").parts("link", "item", "container").extend("separator");
S("button").parts();
var _l = S("checkbox").parts("control", "icon", "container").extend("label");
S("progress").parts("track", "filledTrack").extend("label");
var kl = S("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), $l = S("editable").parts(
  "preview",
  "input",
  "textarea"
), wl = S("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), Cl = S("formError").parts("text", "icon"), zl = S("input").parts("addon", "field", "element"), Tl = S("list").parts("container", "item", "icon"), Bl = S("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"), Al = S("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), Rl = S("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
S("pininput").parts("field");
var Pl = S("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), Fl = S("progress").parts(
  "label",
  "filledTrack",
  "track"
), El = S("radio").parts(
  "container",
  "control",
  "label"
), Il = S("select").parts("field", "icon"), Ml = S("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), Dl = S("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), Wl = S("switch").parts(
  "container",
  "track",
  "thumb"
), jl = S("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), Ol = S("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), Ll = S("tag").parts(
  "container",
  "label",
  "closeButton"
), Hl = S("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
function fe(e, r, a) {
  return Math.min(Math.max(e, a), r);
}
class Nl extends Error {
  constructor(r) {
    super(`Failed to parse color: "${r}"`);
  }
}
var Ve = Nl;
function At(e) {
  if (typeof e != "string")
    throw new Ve(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let r = e.trim();
  r = Zl.test(e) ? ql(e) : e;
  const a = Gl.exec(r);
  if (a) {
    const u = Array.from(a).slice(1);
    return [...u.slice(0, 3).map((p) => parseInt(Je(p, 2), 16)), parseInt(Je(u[3] || "f", 2), 16) / 255];
  }
  const i = Xl.exec(r);
  if (i) {
    const u = Array.from(i).slice(1);
    return [...u.slice(0, 3).map((p) => parseInt(p, 16)), parseInt(u[3] || "ff", 16) / 255];
  }
  const s = Yl.exec(r);
  if (s) {
    const u = Array.from(s).slice(1);
    return [...u.slice(0, 3).map((p) => parseInt(p, 10)), parseFloat(u[3] || "1")];
  }
  const c = Kl.exec(r);
  if (c) {
    const [u, p, x, B] = Array.from(c).slice(1).map(parseFloat);
    if (fe(0, 100, p) !== p)
      throw new Ve(e);
    if (fe(0, 100, x) !== x)
      throw new Ve(e);
    return [...Jl(u, p, x), Number.isNaN(B) ? 1 : B];
  }
  throw new Ve(e);
}
function Vl(e) {
  let r = 5381, a = e.length;
  for (; a; )
    r = r * 33 ^ e.charCodeAt(--a);
  return (r >>> 0) % 2341;
}
const ca = (e) => parseInt(e.replace(/_/g, ""), 36), Ul = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, r) => {
  const a = ca(r.substring(0, 3)), i = ca(r.substring(3)).toString(16);
  let s = "";
  for (let c = 0; c < 6 - i.length; c++)
    s += "0";
  return e[a] = `${s}${i}`, e;
}, {});
function ql(e) {
  const r = e.toLowerCase().trim(), a = Ul[Vl(r)];
  if (!a)
    throw new Ve(e);
  return `#${a}`;
}
const Je = (e, r) => Array.from(Array(r)).map(() => e).join(""), Gl = new RegExp(`^#${Je("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), Xl = new RegExp(`^#${Je("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), Yl = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Je(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), Kl = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, Zl = /^[a-z]+$/i, ua = (e) => Math.round(e * 255), Jl = (e, r, a) => {
  let i = a / 100;
  if (r === 0)
    return [i, i, i].map(ua);
  const s = (e % 360 + 360) % 360 / 60, c = (1 - Math.abs(2 * i - 1)) * (r / 100), u = c * (1 - Math.abs(s % 2 - 1));
  let p = 0, x = 0, B = 0;
  s >= 0 && s < 1 ? (p = c, x = u) : s >= 1 && s < 2 ? (p = u, x = c) : s >= 2 && s < 3 ? (x = c, B = u) : s >= 3 && s < 4 ? (x = u, B = c) : s >= 4 && s < 5 ? (p = u, B = c) : s >= 5 && s < 6 && (p = c, B = u);
  const R = i - c / 2, P = p + R, I = x + R, V = B + R;
  return [P, I, V].map(ua);
};
function Ql(e, r, a, i) {
  return `rgba(${fe(0, 255, e).toFixed()}, ${fe(0, 255, r).toFixed()}, ${fe(0, 255, a).toFixed()}, ${parseFloat(fe(0, 1, i).toFixed(3))})`;
}
function es(e, r) {
  const [a, i, s, c] = At(e);
  return Ql(a, i, s, c - r);
}
function rs(e) {
  const [r, a, i, s] = At(e);
  let c = (u) => {
    const p = fe(0, 255, u).toString(16);
    return p.length === 1 ? `0${p}` : p;
  };
  return `#${c(r)}${c(a)}${c(i)}${s < 1 ? c(Math.round(s * 255)) : ""}`;
}
function ts(e, r, a, i, s) {
  for (r = r.split ? r.split(".") : r, i = 0; i < r.length; i++)
    e = e ? e[r[i]] : s;
  return e === s ? a : e;
}
var as = (e) => Object.keys(e).length === 0, M = (e, r, a) => {
  const i = ts(e, `colors.${r}`, r);
  try {
    return rs(i), i;
  } catch {
    return a ?? "#000000";
  }
}, os = (e) => {
  const [r, a, i] = At(e);
  return (r * 299 + a * 587 + i * 114) / 1e3;
}, ns = (e) => (r) => {
  const a = M(r, e);
  return os(a) < 128 ? "dark" : "light";
}, is = (e) => (r) => ns(e)(r) === "dark", Be = (e, r) => (a) => {
  const i = M(a, e);
  return es(i, 1 - r);
};
function ba(e = "1rem", r = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${r} 25%,
    transparent 25%,
    transparent 50%,
    ${r} 50%,
    ${r} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`
  };
}
var ls = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function ss(e) {
  const r = ls();
  return !e || as(e) ? r : e.string && e.colors ? cs(e.string, e.colors) : e.string && !e.colors ? ds(e.string) : e.colors && !e.string ? us(e.colors) : r;
}
function ds(e) {
  let r = 0;
  if (e.length === 0)
    return r.toString();
  for (let i = 0; i < e.length; i += 1)
    r = e.charCodeAt(i) + ((r << 5) - r), r = r & r;
  let a = "#";
  for (let i = 0; i < 3; i += 1) {
    const s = r >> i * 8 & 255;
    a += `00${s.toString(16)}`.substr(-2);
  }
  return a;
}
function cs(e, r) {
  let a = 0;
  if (e.length === 0)
    return r[0];
  for (let i = 0; i < e.length; i += 1)
    a = e.charCodeAt(i) + ((a << 5) - a), a = a & a;
  return a = (a % r.length + r.length) % r.length, r[a];
}
function us(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function b(e, r) {
  return (a) => a.colorMode === "dark" ? r : e;
}
function Rt(e) {
  const { orientation: r, vertical: a, horizontal: i } = e;
  return r ? r === "vertical" ? a : i : {};
}
function ao(e) {
  return Ir(e) && e.reference ? e.reference : String(e);
}
var Dr = (e, ...r) => r.map(ao).join(` ${e} `).replace(/calc/g, ""), fa = (...e) => `calc(${Dr("+", ...e)})`, pa = (...e) => `calc(${Dr("-", ...e)})`, _t = (...e) => `calc(${Dr("*", ...e)})`, ga = (...e) => `calc(${Dr("/", ...e)})`, ha = (e) => {
  const r = ao(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : _t(r, -1);
}, ee = Object.assign(
  (e) => ({
    add: (...r) => ee(fa(e, ...r)),
    subtract: (...r) => ee(pa(e, ...r)),
    multiply: (...r) => ee(_t(e, ...r)),
    divide: (...r) => ee(ga(e, ...r)),
    negate: () => ee(ha(e)),
    toString: () => e.toString()
  }),
  {
    add: fa,
    subtract: pa,
    multiply: _t,
    divide: ga,
    negate: ha
  }
);
function bs(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function fs(e, r = "-") {
  return e.replace(/\s+/g, r);
}
function oo(e) {
  const r = fs(e.toString());
  return r.includes("\\.") ? e : bs(e) ? r.replace(".", "\\.") : e;
}
function ps(e, r = "") {
  return [r, oo(e)].filter(Boolean).join("-");
}
function gs(e, r) {
  return `var(${oo(e)}${r ? `, ${r}` : ""})`;
}
function hs(e, r = "") {
  return `--${ps(e, r)}`;
}
function A(e, r) {
  const a = hs(e, r == null ? void 0 : r.prefix);
  return {
    variable: a,
    reference: gs(a, ms(r == null ? void 0 : r.fallback))
  };
}
function ms(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: vs, definePartsStyle: _r } = k(Wl.keys), Xe = A("switch-track-width"), pe = A("switch-track-height"), Jr = A("switch-track-diff"), ys = ee.subtract(Xe, pe), kt = A("switch-thumb-x"), je = A("switch-bg"), Ss = (e) => {
  const { colorScheme: r } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [Xe.reference],
    height: [pe.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [je.variable]: "colors.gray.300",
    _dark: {
      [je.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [je.variable]: `colors.${r}.500`,
      _dark: {
        [je.variable]: `colors.${r}.200`
      }
    },
    bg: je.reference
  };
}, xs = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [pe.reference],
  height: [pe.reference],
  _checked: {
    transform: `translateX(${kt.reference})`
  }
}, _s = _r((e) => ({
  container: {
    [Jr.variable]: ys,
    [kt.variable]: Jr.reference,
    _rtl: {
      [kt.variable]: ee(Jr).negate().toString()
    }
  },
  track: Ss(e),
  thumb: xs
})), ks = {
  sm: _r({
    container: {
      [Xe.variable]: "1.375rem",
      [pe.variable]: "sizes.3"
    }
  }),
  md: _r({
    container: {
      [Xe.variable]: "1.875rem",
      [pe.variable]: "sizes.4"
    }
  }),
  lg: _r({
    container: {
      [Xe.variable]: "2.875rem",
      [pe.variable]: "sizes.6"
    }
  })
}, $s = vs({
  baseStyle: _s,
  sizes: ks,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: ws, definePartsStyle: we } = k(jl.keys), Cs = we({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}), Pr = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, zs = we((e) => {
  const { colorScheme: r } = e;
  return {
    th: {
      color: b("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: b(`${r}.100`, `${r}.700`)(e),
      ...Pr
    },
    td: {
      borderBottom: "1px",
      borderColor: b(`${r}.100`, `${r}.700`)(e),
      ...Pr
    },
    caption: {
      color: b("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), Ts = we((e) => {
  const { colorScheme: r } = e;
  return {
    th: {
      color: b("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: b(`${r}.100`, `${r}.700`)(e),
      ...Pr
    },
    td: {
      borderBottom: "1px",
      borderColor: b(`${r}.100`, `${r}.700`)(e),
      ...Pr
    },
    caption: {
      color: b("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: b(`${r}.100`, `${r}.700`)(e)
          },
          td: {
            background: b(`${r}.100`, `${r}.700`)(e)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), Bs = {
  simple: zs,
  striped: Ts,
  unstyled: {}
}, As = {
  sm: we({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: we({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: we({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
}, Rs = ws({
  baseStyle: Cs,
  variants: Bs,
  sizes: As,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), W = f("tabs-color"), q = f("tabs-bg"), pr = f("tabs-border-color"), { defineMultiStyleConfig: Ps, definePartsStyle: Y } = k(Ol.keys), Fs = (e) => {
  const { orientation: r } = e;
  return {
    display: r === "vertical" ? "flex" : "block"
  };
}, Es = (e) => {
  const { isFitted: r } = e;
  return {
    flex: r ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
}, Is = (e) => {
  const { align: r = "start", orientation: a } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[r],
    flexDirection: a === "vertical" ? "column" : "row"
  };
}, Ms = {
  p: 4
}, Ds = Y((e) => ({
  root: Fs(e),
  tab: Es(e),
  tablist: Is(e),
  tabpanel: Ms
})), Ws = {
  sm: Y({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Y({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Y({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, js = Y((e) => {
  const { colorScheme: r, orientation: a } = e, i = a === "vertical", s = i ? "borderStart" : "borderBottom", c = i ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [s]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [s]: "2px solid",
      borderColor: "transparent",
      [c]: "-2px",
      _selected: {
        [W.variable]: `colors.${r}.600`,
        _dark: {
          [W.variable]: `colors.${r}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [q.variable]: "colors.gray.200",
        _dark: {
          [q.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: W.reference,
      bg: q.reference
    }
  };
}), Os = Y((e) => {
  const { colorScheme: r } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [pr.variable]: "transparent",
      _selected: {
        [W.variable]: `colors.${r}.600`,
        [pr.variable]: "colors.white",
        _dark: {
          [W.variable]: `colors.${r}.300`,
          [pr.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: pr.reference
      },
      color: W.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), Ls = Y((e) => {
  const { colorScheme: r } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [q.variable]: "colors.gray.50",
      _dark: {
        [q.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [q.variable]: "colors.white",
        [W.variable]: `colors.${r}.600`,
        _dark: {
          [q.variable]: "colors.gray.800",
          [W.variable]: `colors.${r}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: W.reference,
      bg: q.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), Hs = Y((e) => {
  const { colorScheme: r, theme: a } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: M(a, `${r}.700`),
        bg: M(a, `${r}.100`)
      }
    }
  };
}), Ns = Y((e) => {
  const { colorScheme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [W.variable]: "colors.gray.600",
      _dark: {
        [W.variable]: "inherit"
      },
      _selected: {
        [W.variable]: "colors.white",
        [q.variable]: `colors.${r}.600`,
        _dark: {
          [W.variable]: "colors.gray.800",
          [q.variable]: `colors.${r}.300`
        }
      },
      color: W.reference,
      bg: q.reference
    }
  };
}), Vs = Y({}), Us = {
  line: js,
  enclosed: Os,
  "enclosed-colored": Ls,
  "soft-rounded": Hs,
  "solid-rounded": Ns,
  unstyled: Vs
}, qs = Ps({
  baseStyle: Ds,
  sizes: Ws,
  variants: Us,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), T = Li("badge", ["bg", "color", "shadow"]), Gs = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: T.bg.reference,
  color: T.color.reference,
  boxShadow: T.shadow.reference
}, Xs = (e) => {
  const { colorScheme: r, theme: a } = e, i = Be(`${r}.500`, 0.6)(a);
  return {
    [T.bg.variable]: `colors.${r}.500`,
    [T.color.variable]: "colors.white",
    _dark: {
      [T.bg.variable]: i,
      [T.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, Ys = (e) => {
  const { colorScheme: r, theme: a } = e, i = Be(`${r}.200`, 0.16)(a);
  return {
    [T.bg.variable]: `colors.${r}.100`,
    [T.color.variable]: `colors.${r}.800`,
    _dark: {
      [T.bg.variable]: i,
      [T.color.variable]: `colors.${r}.200`
    }
  };
}, Ks = (e) => {
  const { colorScheme: r, theme: a } = e, i = Be(`${r}.200`, 0.8)(a);
  return {
    [T.color.variable]: `colors.${r}.500`,
    _dark: {
      [T.color.variable]: i
    },
    [T.shadow.variable]: `inset 0 0 0px 1px ${T.color.reference}`
  };
}, Zs = {
  solid: Xs,
  subtle: Ys,
  outline: Ks
}, Ye = {
  baseStyle: Gs,
  variants: Zs,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: Js, definePartsStyle: ge } = k(Ll.keys), ma = f("tag-bg"), va = f("tag-color"), Qr = f("tag-shadow"), kr = f("tag-min-height"), $r = f("tag-min-width"), wr = f("tag-font-size"), Cr = f("tag-padding-inline"), Qs = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [va.variable]: T.color.reference,
  [ma.variable]: T.bg.reference,
  [Qr.variable]: T.shadow.reference,
  color: va.reference,
  bg: ma.reference,
  boxShadow: Qr.reference,
  borderRadius: "md",
  minH: kr.reference,
  minW: $r.reference,
  fontSize: wr.reference,
  px: Cr.reference,
  _focusVisible: {
    [Qr.variable]: "shadows.outline"
  }
}, ed = {
  lineHeight: 1.2,
  overflow: "visible"
}, rd = {
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
}, td = ge({
  container: Qs,
  label: ed,
  closeButton: rd
}), ad = {
  sm: ge({
    container: {
      [kr.variable]: "sizes.5",
      [$r.variable]: "sizes.5",
      [wr.variable]: "fontSizes.xs",
      [Cr.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: ge({
    container: {
      [kr.variable]: "sizes.6",
      [$r.variable]: "sizes.6",
      [wr.variable]: "fontSizes.sm",
      [Cr.variable]: "space.2"
    }
  }),
  lg: ge({
    container: {
      [kr.variable]: "sizes.8",
      [$r.variable]: "sizes.8",
      [wr.variable]: "fontSizes.md",
      [Cr.variable]: "space.3"
    }
  })
}, od = {
  subtle: ge((e) => {
    var r;
    return {
      container: (r = Ye.variants) == null ? void 0 : r.subtle(e)
    };
  }),
  solid: ge((e) => {
    var r;
    return {
      container: (r = Ye.variants) == null ? void 0 : r.solid(e)
    };
  }),
  outline: ge((e) => {
    var r;
    return {
      container: (r = Ye.variants) == null ? void 0 : r.outline(e)
    };
  })
}, nd = Js({
  variants: od,
  baseStyle: td,
  sizes: ad,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: re, defineMultiStyleConfig: id } = k(zl.keys), ld = re({
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
}), ne = {
  lg: {
    fontSize: "lg",
    px: "4",
    h: "12",
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    px: "4",
    h: "10",
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    px: "3",
    h: "8",
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    px: "2",
    h: "6",
    borderRadius: "sm"
  }
}, sd = {
  lg: re({
    field: ne.lg,
    addon: ne.lg
  }),
  md: re({
    field: ne.md,
    addon: ne.md
  }),
  sm: re({
    field: ne.sm,
    addon: ne.sm
  }),
  xs: re({
    field: ne.xs,
    addon: ne.xs
  })
};
function Pt(e) {
  const { focusBorderColor: r, errorBorderColor: a } = e;
  return {
    focusBorderColor: r || b("blue.500", "blue.300")(e),
    errorBorderColor: a || b("red.500", "red.300")(e)
  };
}
var dd = re((e) => {
  const { theme: r } = e, { focusBorderColor: a, errorBorderColor: i } = Pt(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: b("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: M(r, i),
        boxShadow: `0 0 0 1px ${M(r, i)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: M(r, a),
        boxShadow: `0 0 0 1px ${M(r, a)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: b("inherit", "whiteAlpha.50")(e),
      bg: b("gray.100", "whiteAlpha.300")(e)
    }
  };
}), cd = re((e) => {
  const { theme: r } = e, { focusBorderColor: a, errorBorderColor: i } = Pt(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: b("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: b("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: M(r, i)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: M(r, a)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: b("gray.100", "whiteAlpha.50")(e)
    }
  };
}), ud = re((e) => {
  const { theme: r } = e, { focusBorderColor: a, errorBorderColor: i } = Pt(e);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: M(r, i),
        boxShadow: `0px 1px 0px 0px ${M(r, i)}`
      },
      _focusVisible: {
        borderColor: M(r, a),
        boxShadow: `0px 1px 0px 0px ${M(r, a)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
}), bd = re({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
}), fd = {
  outline: dd,
  filled: cd,
  flushed: ud,
  unstyled: bd
}, y = id({
  baseStyle: ld,
  sizes: sd,
  variants: fd,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), ya, pd = {
  ...(ya = y.baseStyle) == null ? void 0 : ya.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, Sa, xa, gd = {
  outline: (e) => {
    var r, a;
    return (a = (r = y.variants) == null ? void 0 : r.outline(e).field) != null ? a : {};
  },
  flushed: (e) => {
    var r, a;
    return (a = (r = y.variants) == null ? void 0 : r.flushed(e).field) != null ? a : {};
  },
  filled: (e) => {
    var r, a;
    return (a = (r = y.variants) == null ? void 0 : r.filled(e).field) != null ? a : {};
  },
  unstyled: (xa = (Sa = y.variants) == null ? void 0 : Sa.unstyled.field) != null ? xa : {}
}, _a, ka, $a, wa, Ca, za, Ta, Ba, hd = {
  xs: (ka = (_a = y.sizes) == null ? void 0 : _a.xs.field) != null ? ka : {},
  sm: (wa = ($a = y.sizes) == null ? void 0 : $a.sm.field) != null ? wa : {},
  md: (za = (Ca = y.sizes) == null ? void 0 : Ca.md.field) != null ? za : {},
  lg: (Ba = (Ta = y.sizes) == null ? void 0 : Ta.lg.field) != null ? Ba : {}
}, md = {
  baseStyle: pd,
  sizes: hd,
  variants: gd,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, gr = A("tooltip-bg"), et = A("tooltip-fg"), vd = A("popper-arrow-bg"), yd = {
  bg: gr.reference,
  color: et.reference,
  [gr.variable]: "colors.gray.700",
  [et.variable]: "colors.whiteAlpha.900",
  _dark: {
    [gr.variable]: "colors.gray.300",
    [et.variable]: "colors.gray.900"
  },
  [vd.variable]: gr.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, Sd = {
  baseStyle: yd
}, { defineMultiStyleConfig: xd, definePartsStyle: Ue } = k(Fl.keys), _d = (e) => {
  const { colorScheme: r, theme: a, isIndeterminate: i, hasStripe: s } = e, c = b(
    ba(),
    ba("1rem", "rgba(0,0,0,0.1)")
  )(e), u = b(`${r}.500`, `${r}.200`)(e), p = `linear-gradient(
    to right,
    transparent 0%,
    ${M(a, u)} 50%,
    transparent 100%
  )`;
  return {
    ...!i && s && c,
    ...i ? { bgImage: p } : { bgColor: u }
  };
}, kd = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, $d = (e) => ({
  bg: b("gray.100", "whiteAlpha.300")(e)
}), wd = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ..._d(e)
}), Cd = Ue((e) => ({
  label: kd,
  filledTrack: wd(e),
  track: $d(e)
})), zd = {
  xs: Ue({
    track: { h: "1" }
  }),
  sm: Ue({
    track: { h: "2" }
  }),
  md: Ue({
    track: { h: "3" }
  }),
  lg: Ue({
    track: { h: "4" }
  })
}, Td = xd({
  sizes: zd,
  baseStyle: Cd,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Bd = (e) => typeof e == "function";
function D(e, ...r) {
  return Bd(e) ? e(...r) : e;
}
var { definePartsStyle: zr, defineMultiStyleConfig: Ad } = k(_l.keys), Ke = f("checkbox-size"), Rd = (e) => {
  const { colorScheme: r } = e;
  return {
    w: Ke.reference,
    h: Ke.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: b(`${r}.500`, `${r}.200`)(e),
      borderColor: b(`${r}.500`, `${r}.200`)(e),
      color: b("white", "gray.900")(e),
      _hover: {
        bg: b(`${r}.600`, `${r}.300`)(e),
        borderColor: b(`${r}.600`, `${r}.300`)(e)
      },
      _disabled: {
        borderColor: b("gray.200", "transparent")(e),
        bg: b("gray.200", "whiteAlpha.300")(e),
        color: b("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: b(`${r}.500`, `${r}.200`)(e),
      borderColor: b(`${r}.500`, `${r}.200`)(e),
      color: b("white", "gray.900")(e)
    },
    _disabled: {
      bg: b("gray.100", "whiteAlpha.100")(e),
      borderColor: b("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: b("red.500", "red.300")(e)
    }
  };
}, Pd = {
  _disabled: { cursor: "not-allowed" }
}, Fd = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, Ed = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, Id = zr((e) => ({
  icon: Ed,
  container: Pd,
  control: D(Rd, e),
  label: Fd
})), Md = {
  sm: zr({
    control: { [Ke.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: zr({
    control: { [Ke.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: zr({
    control: { [Ke.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Fr = Ad({
  baseStyle: Id,
  sizes: Md,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Dd, definePartsStyle: Tr } = k(El.keys), Wd = (e) => {
  var r;
  const a = (r = D(Fr.baseStyle, e)) == null ? void 0 : r.control;
  return {
    ...a,
    borderRadius: "full",
    _checked: {
      ...a == null ? void 0 : a._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, jd = Tr((e) => {
  var r, a, i, s;
  return {
    label: (a = (r = Fr).baseStyle) == null ? void 0 : a.call(r, e).label,
    container: (s = (i = Fr).baseStyle) == null ? void 0 : s.call(i, e).container,
    control: Wd(e)
  };
}), Od = {
  md: Tr({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Tr({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Tr({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, Ld = Dd({
  baseStyle: jd,
  sizes: Od,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Hd, definePartsStyle: Nd } = k(Il.keys), hr = f("select-bg"), Aa, Vd = {
  ...(Aa = y.baseStyle) == null ? void 0 : Aa.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: hr.reference,
  [hr.variable]: "colors.white",
  _dark: {
    [hr.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: hr.reference
  }
}, Ud = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, qd = Nd({
  field: Vd,
  icon: Ud
}), mr = {
  paddingInlineEnd: "8"
}, Ra, Pa, Fa, Ea, Ia, Ma, Da, Wa, Gd = {
  lg: {
    ...(Ra = y.sizes) == null ? void 0 : Ra.lg,
    field: {
      ...(Pa = y.sizes) == null ? void 0 : Pa.lg.field,
      ...mr
    }
  },
  md: {
    ...(Fa = y.sizes) == null ? void 0 : Fa.md,
    field: {
      ...(Ea = y.sizes) == null ? void 0 : Ea.md.field,
      ...mr
    }
  },
  sm: {
    ...(Ia = y.sizes) == null ? void 0 : Ia.sm,
    field: {
      ...(Ma = y.sizes) == null ? void 0 : Ma.sm.field,
      ...mr
    }
  },
  xs: {
    ...(Da = y.sizes) == null ? void 0 : Da.xs,
    field: {
      ...(Wa = y.sizes) == null ? void 0 : Wa.xs.field,
      ...mr
    },
    icon: {
      insetEnd: "1"
    }
  }
}, Xd = Hd({
  baseStyle: qd,
  sizes: Gd,
  variants: y.variants,
  defaultProps: y.defaultProps
}), rt = f("skeleton-start-color"), tt = f("skeleton-end-color"), Yd = {
  [rt.variable]: "colors.gray.100",
  [tt.variable]: "colors.gray.400",
  _dark: {
    [rt.variable]: "colors.gray.800",
    [tt.variable]: "colors.gray.600"
  },
  background: rt.reference,
  borderColor: tt.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, Kd = {
  baseStyle: Yd
}, at = f("skip-link-bg"), Zd = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [at.variable]: "colors.white",
    _dark: {
      [at.variable]: "colors.gray.700"
    },
    bg: at.reference
  }
}, Jd = {
  baseStyle: Zd
}, { defineMultiStyleConfig: Qd, definePartsStyle: Wr } = k(Ml.keys), Qe = f("slider-thumb-size"), er = f("slider-track-size"), se = f("slider-bg"), ec = (e) => {
  const { orientation: r } = e;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...Rt({
      orientation: r,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, rc = (e) => ({
  ...Rt({
    orientation: e.orientation,
    horizontal: { h: er.reference },
    vertical: { w: er.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [se.variable]: "colors.gray.200",
  _dark: {
    [se.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [se.variable]: "colors.gray.300",
    _dark: {
      [se.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: se.reference
}), tc = (e) => {
  const { orientation: r } = e;
  return {
    ...Rt({
      orientation: r,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        _active: {
          transform: "translateX(-50%) scale(1.15)"
        }
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        _active: {
          transform: "translateY(-50%) scale(1.15)"
        }
      }
    }),
    w: Qe.reference,
    h: Qe.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
}, ac = (e) => {
  const { colorScheme: r } = e;
  return {
    width: "inherit",
    height: "inherit",
    [se.variable]: `colors.${r}.500`,
    _dark: {
      [se.variable]: `colors.${r}.200`
    },
    bg: se.reference
  };
}, oc = Wr((e) => ({
  container: ec(e),
  track: rc(e),
  thumb: tc(e),
  filledTrack: ac(e)
})), nc = Wr({
  container: {
    [Qe.variable]: "sizes.4",
    [er.variable]: "sizes.1"
  }
}), ic = Wr({
  container: {
    [Qe.variable]: "sizes.3.5",
    [er.variable]: "sizes.1"
  }
}), lc = Wr({
  container: {
    [Qe.variable]: "sizes.2.5",
    [er.variable]: "sizes.0.5"
  }
}), sc = {
  lg: nc,
  md: ic,
  sm: lc
}, dc = Qd({
  baseStyle: oc,
  sizes: sc,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), be = A("spinner-size"), cc = {
  width: [be.reference],
  height: [be.reference]
}, uc = {
  xs: {
    [be.variable]: "sizes.3"
  },
  sm: {
    [be.variable]: "sizes.4"
  },
  md: {
    [be.variable]: "sizes.6"
  },
  lg: {
    [be.variable]: "sizes.8"
  },
  xl: {
    [be.variable]: "sizes.12"
  }
}, bc = {
  baseStyle: cc,
  sizes: uc,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: fc, definePartsStyle: no } = k(Dl.keys), pc = {
  fontWeight: "medium"
}, gc = {
  opacity: 0.8,
  marginBottom: "2"
}, hc = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, mc = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, vc = no({
  container: {},
  label: pc,
  helpText: gc,
  number: hc,
  icon: mc
}), yc = {
  md: no({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, Sc = fc({
  baseStyle: vc,
  sizes: yc,
  defaultProps: {
    size: "md"
  }
}), ot = f("kbd-bg"), xc = {
  [ot.variable]: "colors.gray.100",
  _dark: {
    [ot.variable]: "colors.whiteAlpha.100"
  },
  bg: ot.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, _c = {
  baseStyle: xc
}, kc = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, $c = {
  baseStyle: kc
}, { defineMultiStyleConfig: wc, definePartsStyle: Cc } = k(Tl.keys), zc = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, Tc = Cc({
  icon: zc
}), Bc = wc({
  baseStyle: Tc
}), { defineMultiStyleConfig: Ac, definePartsStyle: Rc } = k(Bl.keys), X = f("menu-bg"), nt = f("menu-shadow"), Pc = {
  [X.variable]: "#fff",
  [nt.variable]: "shadows.sm",
  _dark: {
    [X.variable]: "colors.gray.700",
    [nt.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: X.reference,
  boxShadow: nt.reference
}, Fc = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [X.variable]: "colors.gray.100",
    _dark: {
      [X.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [X.variable]: "colors.gray.200",
    _dark: {
      [X.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [X.variable]: "colors.gray.100",
    _dark: {
      [X.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: X.reference
}, Ec = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, Ic = {
  opacity: 0.6
}, Mc = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, Dc = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, Wc = Rc({
  button: Dc,
  list: Pc,
  item: Fc,
  groupTitle: Ec,
  command: Ic,
  divider: Mc
}), jc = Ac({
  baseStyle: Wc
}), { defineMultiStyleConfig: Oc, definePartsStyle: $t } = k(Al.keys), it = f("modal-bg"), lt = f("modal-shadow"), Lc = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, Hc = (e) => {
  const { isCentered: r, scrollBehavior: a } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: r ? "center" : "flex-start",
    overflow: a === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, Nc = (e) => {
  const { isCentered: r, scrollBehavior: a } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: r ? "auto" : "16",
    mx: r ? "auto" : void 0,
    zIndex: "modal",
    maxH: a === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [it.variable]: "colors.white",
    [lt.variable]: "shadows.lg",
    _dark: {
      [it.variable]: "colors.gray.700",
      [lt.variable]: "shadows.dark-lg"
    },
    bg: it.reference,
    boxShadow: lt.reference
  };
}, Vc = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, Uc = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, qc = (e) => {
  const { scrollBehavior: r } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: r === "inside" ? "auto" : void 0
  };
}, Gc = {
  px: "6",
  py: "4"
}, Xc = $t((e) => ({
  overlay: Lc,
  dialogContainer: D(Hc, e),
  dialog: D(Nc, e),
  header: Vc,
  closeButton: Uc,
  body: D(qc, e),
  footer: Gc
}));
function U(e) {
  return $t(e === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "$100vh",
      my: "0",
      borderRadius: "0"
    }
  } : {
    dialog: { maxW: e }
  });
}
var Yc = {
  xs: U("xs"),
  sm: U("sm"),
  md: U("md"),
  lg: U("lg"),
  xl: U("xl"),
  "2xl": U("2xl"),
  "3xl": U("3xl"),
  "4xl": U("4xl"),
  "5xl": U("5xl"),
  "6xl": U("6xl"),
  full: U("full")
}, Kc = Oc({
  baseStyle: Xc,
  sizes: Yc,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: Zc, definePartsStyle: io } = k(Rl.keys), Ft = A("number-input-stepper-width"), lo = A("number-input-input-padding"), Jc = ee(Ft).add("0.5rem").toString(), st = A("number-input-bg"), dt = A("number-input-color"), ct = A("number-input-border-color"), Qc = {
  [Ft.variable]: "sizes.6",
  [lo.variable]: Jc
}, eu = (e) => {
  var r, a;
  return (a = (r = D(y.baseStyle, e)) == null ? void 0 : r.field) != null ? a : {};
}, ru = {
  width: Ft.reference
}, tu = {
  borderStart: "1px solid",
  borderStartColor: ct.reference,
  color: dt.reference,
  bg: st.reference,
  [dt.variable]: "colors.chakra-body-text",
  [ct.variable]: "colors.chakra-border-color",
  _dark: {
    [dt.variable]: "colors.whiteAlpha.800",
    [ct.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [st.variable]: "colors.gray.200",
    _dark: {
      [st.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, au = io((e) => {
  var r;
  return {
    root: Qc,
    field: (r = D(eu, e)) != null ? r : {},
    stepperGroup: ru,
    stepper: tu
  };
});
function vr(e) {
  var r, a, i;
  const s = (r = y.sizes) == null ? void 0 : r[e], c = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, u = (i = (a = s.field) == null ? void 0 : a.fontSize) != null ? i : "md", p = eo.fontSizes[u];
  return io({
    field: {
      ...s.field,
      paddingInlineEnd: lo.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: ee(p).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: c[e]
      },
      _last: {
        borderBottomEndRadius: c[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var ou = {
  xs: vr("xs"),
  sm: vr("sm"),
  md: vr("md"),
  lg: vr("lg")
}, nu = Zc({
  baseStyle: au,
  sizes: ou,
  variants: y.variants,
  defaultProps: y.defaultProps
}), ja, iu = {
  ...(ja = y.baseStyle) == null ? void 0 : ja.field,
  textAlign: "center"
}, lu = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
}, Oa, La, su = {
  outline: (e) => {
    var r, a, i;
    return (i = (a = D((r = y.variants) == null ? void 0 : r.outline, e)) == null ? void 0 : a.field) != null ? i : {};
  },
  flushed: (e) => {
    var r, a, i;
    return (i = (a = D((r = y.variants) == null ? void 0 : r.flushed, e)) == null ? void 0 : a.field) != null ? i : {};
  },
  filled: (e) => {
    var r, a, i;
    return (i = (a = D((r = y.variants) == null ? void 0 : r.filled, e)) == null ? void 0 : a.field) != null ? i : {};
  },
  unstyled: (La = (Oa = y.variants) == null ? void 0 : Oa.unstyled.field) != null ? La : {}
}, du = {
  baseStyle: iu,
  sizes: lu,
  variants: su,
  defaultProps: y.defaultProps
}, { defineMultiStyleConfig: cu, definePartsStyle: uu } = k(Pl.keys), yr = A("popper-bg"), bu = A("popper-arrow-bg"), Ha = A("popper-arrow-shadow-color"), fu = { zIndex: 10 }, pu = {
  [yr.variable]: "colors.white",
  bg: yr.reference,
  [bu.variable]: yr.reference,
  [Ha.variable]: "colors.gray.200",
  _dark: {
    [yr.variable]: "colors.gray.700",
    [Ha.variable]: "colors.whiteAlpha.300"
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
}, gu = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, hu = {
  px: 3,
  py: 2
}, mu = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, vu = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, yu = uu({
  popper: fu,
  content: pu,
  header: gu,
  body: hu,
  footer: mu,
  closeButton: vu
}), Su = cu({
  baseStyle: yu
}), { definePartsStyle: wt, defineMultiStyleConfig: xu } = k(kl.keys), ut = f("drawer-bg"), bt = f("drawer-box-shadow");
function _e(e) {
  return wt(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var _u = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
}, ku = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, $u = (e) => {
  const { isFullHeight: r } = e;
  return {
    ...r && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [ut.variable]: "colors.white",
    [bt.variable]: "shadows.lg",
    _dark: {
      [ut.variable]: "colors.gray.700",
      [bt.variable]: "shadows.dark-lg"
    },
    bg: ut.reference,
    boxShadow: bt.reference
  };
}, wu = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, Cu = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, zu = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, Tu = {
  px: "6",
  py: "4"
}, Bu = wt((e) => ({
  overlay: _u,
  dialogContainer: ku,
  dialog: D($u, e),
  header: wu,
  closeButton: Cu,
  body: zu,
  footer: Tu
})), Au = {
  xs: _e("xs"),
  sm: _e("md"),
  md: _e("lg"),
  lg: _e("2xl"),
  xl: _e("4xl"),
  full: _e("full")
}, Ru = xu({
  baseStyle: Bu,
  sizes: Au,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: Pu, defineMultiStyleConfig: Fu } = k($l.keys), Eu = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, Iu = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, Mu = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, Du = Pu({
  preview: Eu,
  input: Iu,
  textarea: Mu
}), Wu = Fu({
  baseStyle: Du
}), { definePartsStyle: ju, defineMultiStyleConfig: Ou } = k(wl.keys), Ce = f("form-control-color"), Lu = {
  marginStart: "1",
  [Ce.variable]: "colors.red.500",
  _dark: {
    [Ce.variable]: "colors.red.300"
  },
  color: Ce.reference
}, Hu = {
  mt: "2",
  [Ce.variable]: "colors.gray.600",
  _dark: {
    [Ce.variable]: "colors.whiteAlpha.600"
  },
  color: Ce.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, Nu = ju({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: Lu,
  helperText: Hu
}), Vu = Ou({
  baseStyle: Nu
}), { definePartsStyle: Uu, defineMultiStyleConfig: qu } = k(Cl.keys), ze = f("form-error-color"), Gu = {
  [ze.variable]: "colors.red.500",
  _dark: {
    [ze.variable]: "colors.red.300"
  },
  color: ze.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, Xu = {
  marginEnd: "0.5em",
  [ze.variable]: "colors.red.500",
  _dark: {
    [ze.variable]: "colors.red.300"
  },
  color: ze.reference
}, Yu = Uu({
  text: Gu,
  icon: Xu
}), Ku = qu({
  baseStyle: Yu
}), Zu = {
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, Ju = {
  baseStyle: Zu
}, Qu = {
  fontFamily: "heading",
  fontWeight: "bold"
}, eb = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
}, rb = {
  baseStyle: Qu,
  sizes: eb,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: tb, definePartsStyle: ab } = k(xl.keys), ft = f("breadcrumb-link-decor"), ob = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: ft.reference,
  [ft.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [ft.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, nb = ab({
  link: ob
}), ib = tb({
  baseStyle: nb
}), lb = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
}, so = (e) => {
  const { colorScheme: r, theme: a } = e;
  if (r === "gray")
    return {
      color: b("inherit", "whiteAlpha.900")(e),
      _hover: {
        bg: b("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: b("gray.200", "whiteAlpha.300")(e) }
    };
  const i = Be(`${r}.200`, 0.12)(a), s = Be(`${r}.200`, 0.24)(a);
  return {
    color: b(`${r}.600`, `${r}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: b(`${r}.50`, i)(e)
    },
    _active: {
      bg: b(`${r}.100`, s)(e)
    }
  };
}, sb = (e) => {
  const { colorScheme: r } = e, a = b("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: r === "gray" ? a : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...D(so, e)
  };
}, db = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
}, cb = (e) => {
  var r;
  const { colorScheme: a } = e;
  if (a === "gray") {
    const x = b("gray.100", "whiteAlpha.200")(e);
    return {
      bg: x,
      _hover: {
        bg: b("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: x
        }
      },
      _active: { bg: b("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: i = `${a}.500`,
    color: s = "white",
    hoverBg: c = `${a}.600`,
    activeBg: u = `${a}.700`
  } = (r = db[a]) != null ? r : {}, p = b(i, `${a}.200`)(e);
  return {
    bg: p,
    color: b(s, "gray.800")(e),
    _hover: {
      bg: b(c, `${a}.300`)(e),
      _disabled: {
        bg: p
      }
    },
    _active: { bg: b(u, `${a}.400`)(e) }
  };
}, ub = (e) => {
  const { colorScheme: r } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: b(`${r}.500`, `${r}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: b(`${r}.700`, `${r}.500`)(e)
    }
  };
}, bb = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, fb = {
  ghost: so,
  outline: sb,
  solid: cb,
  link: ub,
  unstyled: bb
}, pb = {
  lg: {
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  },
  md: {
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  },
  sm: {
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  },
  xs: {
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  }
}, gb = {
  baseStyle: lb,
  variants: fb,
  sizes: pb,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: he, defineMultiStyleConfig: hb } = k(Hl.keys), Er = f("card-bg"), te = f("card-padding"), co = f("card-shadow"), Br = f("card-radius"), uo = f("card-border-width", "0"), bo = f("card-border-color"), mb = he({
  container: {
    [Er.variable]: "colors.chakra-body-bg",
    backgroundColor: Er.reference,
    boxShadow: co.reference,
    borderRadius: Br.reference,
    color: "chakra-body-text",
    borderWidth: uo.reference,
    borderColor: bo.reference
  },
  body: {
    padding: te.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: te.reference
  },
  footer: {
    padding: te.reference
  }
}), vb = {
  sm: he({
    container: {
      [Br.variable]: "radii.base",
      [te.variable]: "space.3"
    }
  }),
  md: he({
    container: {
      [Br.variable]: "radii.md",
      [te.variable]: "space.5"
    }
  }),
  lg: he({
    container: {
      [Br.variable]: "radii.xl",
      [te.variable]: "space.7"
    }
  })
}, yb = {
  elevated: he({
    container: {
      [co.variable]: "shadows.base",
      _dark: {
        [Er.variable]: "colors.gray.700"
      }
    }
  }),
  outline: he({
    container: {
      [uo.variable]: "1px",
      [bo.variable]: "colors.chakra-border-color"
    }
  }),
  filled: he({
    container: {
      [Er.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [te.variable]: 0
    },
    header: {
      [te.variable]: 0
    },
    footer: {
      [te.variable]: 0
    }
  }
}, Sb = hb({
  baseStyle: mb,
  variants: yb,
  sizes: vb,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), Ze = A("close-button-size"), Oe = A("close-button-bg"), xb = {
  w: [Ze.reference],
  h: [Ze.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Oe.variable]: "colors.blackAlpha.100",
    _dark: {
      [Oe.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Oe.variable]: "colors.blackAlpha.200",
    _dark: {
      [Oe.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Oe.reference
}, _b = {
  lg: {
    [Ze.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [Ze.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [Ze.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, kb = {
  baseStyle: xb,
  sizes: _b,
  defaultProps: {
    size: "md"
  }
}, { variants: $b, defaultProps: wb } = Ye, Cb = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: T.bg.reference,
  color: T.color.reference,
  boxShadow: T.shadow.reference
}, zb = {
  baseStyle: Cb,
  variants: $b,
  defaultProps: wb
}, Tb = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, Bb = {
  baseStyle: Tb
}, Ab = {
  opacity: 0.6,
  borderColor: "inherit"
}, Rb = {
  borderStyle: "solid"
}, Pb = {
  borderStyle: "dashed"
}, Fb = {
  solid: Rb,
  dashed: Pb
}, Eb = {
  baseStyle: Ab,
  variants: Fb,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: Ib, defineMultiStyleConfig: Mb } = k(vl.keys), Db = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, Wb = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
}, jb = {
  pt: "2",
  px: "4",
  pb: "5"
}, Ob = {
  fontSize: "1.25em"
}, Lb = Ib({
  container: Db,
  button: Wb,
  panel: jb,
  icon: Ob
}), Hb = Mb({ baseStyle: Lb }), { definePartsStyle: tr, defineMultiStyleConfig: Nb } = k(yl.keys), O = f("alert-fg"), ae = f("alert-bg"), Vb = tr({
  container: {
    bg: ae.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: O.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: O.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Et(e) {
  const { theme: r, colorScheme: a } = e, i = Be(`${a}.200`, 0.16)(r);
  return {
    light: `colors.${a}.100`,
    dark: i
  };
}
var Ub = tr((e) => {
  const { colorScheme: r } = e, a = Et(e);
  return {
    container: {
      [O.variable]: `colors.${r}.500`,
      [ae.variable]: a.light,
      _dark: {
        [O.variable]: `colors.${r}.200`,
        [ae.variable]: a.dark
      }
    }
  };
}), qb = tr((e) => {
  const { colorScheme: r } = e, a = Et(e);
  return {
    container: {
      [O.variable]: `colors.${r}.500`,
      [ae.variable]: a.light,
      _dark: {
        [O.variable]: `colors.${r}.200`,
        [ae.variable]: a.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: O.reference
    }
  };
}), Gb = tr((e) => {
  const { colorScheme: r } = e, a = Et(e);
  return {
    container: {
      [O.variable]: `colors.${r}.500`,
      [ae.variable]: a.light,
      _dark: {
        [O.variable]: `colors.${r}.200`,
        [ae.variable]: a.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: O.reference
    }
  };
}), Xb = tr((e) => {
  const { colorScheme: r } = e;
  return {
    container: {
      [O.variable]: "colors.white",
      [ae.variable]: `colors.${r}.500`,
      _dark: {
        [O.variable]: "colors.gray.900",
        [ae.variable]: `colors.${r}.200`
      },
      color: O.reference
    }
  };
}), Yb = {
  subtle: Ub,
  "left-accent": qb,
  "top-accent": Gb,
  solid: Xb
}, Kb = Nb({
  baseStyle: Vb,
  variants: Yb,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: fo, defineMultiStyleConfig: Zb } = k(Sl.keys), Te = f("avatar-border-color"), pt = f("avatar-bg"), Jb = {
  borderRadius: "full",
  border: "0.2em solid",
  [Te.variable]: "white",
  _dark: {
    [Te.variable]: "colors.gray.800"
  },
  borderColor: Te.reference
}, Qb = {
  [pt.variable]: "colors.gray.200",
  _dark: {
    [pt.variable]: "colors.whiteAlpha.400"
  },
  bgColor: pt.reference
}, Na = f("avatar-background"), e0 = (e) => {
  const { name: r, theme: a } = e, i = r ? ss({ string: r }) : "colors.gray.400", s = is(i)(a);
  let c = "white";
  return s || (c = "gray.800"), {
    bg: Na.reference,
    "&:not([data-loaded])": {
      [Na.variable]: i
    },
    color: c,
    [Te.variable]: "colors.white",
    _dark: {
      [Te.variable]: "colors.gray.800"
    },
    borderColor: Te.reference,
    verticalAlign: "top"
  };
}, r0 = fo((e) => ({
  badge: D(Jb, e),
  excessLabel: D(Qb, e),
  container: D(e0, e)
}));
function ie(e) {
  const r = e !== "100%" ? to[e] : void 0;
  return fo({
    container: {
      width: e,
      height: e,
      fontSize: `calc(${r ?? e} / 2.5)`
    },
    excessLabel: {
      width: e,
      height: e
    },
    label: {
      fontSize: `calc(${r ?? e} / 2.5)`,
      lineHeight: e !== "100%" ? r ?? e : void 0
    }
  });
}
var t0 = {
  "2xs": ie(4),
  xs: ie(6),
  sm: ie(8),
  md: ie(12),
  lg: ie(16),
  xl: ie(24),
  "2xl": ie(32),
  full: ie("100%")
}, a0 = Zb({
  baseStyle: r0,
  sizes: t0,
  defaultProps: { size: "md" }
}), o0 = {
  Accordion: Hb,
  Alert: Kb,
  Avatar: a0,
  Badge: Ye,
  Breadcrumb: ib,
  Button: gb,
  Checkbox: Fr,
  CloseButton: kb,
  Code: zb,
  Container: Bb,
  Divider: Eb,
  Drawer: Ru,
  Editable: Wu,
  Form: Vu,
  FormError: Ku,
  FormLabel: Ju,
  Heading: rb,
  Input: y,
  Kbd: _c,
  Link: $c,
  List: Bc,
  Menu: jc,
  Modal: Kc,
  NumberInput: nu,
  PinInput: du,
  Popover: Su,
  Progress: Td,
  Radio: Ld,
  Select: Xd,
  Skeleton: Kd,
  SkipLink: Jd,
  Slider: dc,
  Spinner: bc,
  Stat: Sc,
  Switch: $s,
  Table: Rs,
  Tabs: qs,
  Tag: nd,
  Textarea: md,
  Tooltip: Sd,
  Card: Sb,
  Stepper: ml
}, n0 = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, i0 = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
}, l0 = "ltr", s0 = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, d0 = {
  semanticTokens: n0,
  direction: l0,
  ...pl,
  components: o0,
  styles: i0,
  config: s0
};
function qe(e) {
  return typeof e == "function";
}
function c0(...e) {
  return (r) => e.reduce((a, i) => i(a), r);
}
var u0 = (e) => function(...a) {
  let i = [...a], s = a[a.length - 1];
  return Vi(s) && i.length > 1 ? i = i.slice(0, i.length - 1) : s = e, c0(
    ...i.map(
      (c) => (u) => qe(c) ? c(u) : f0(u, c)
    )
  )(s);
}, b0 = u0(d0);
function f0(...e) {
  return Tt({}, ...e, po);
}
function po(e, r, a, i) {
  if ((qe(e) || qe(r)) && Object.prototype.hasOwnProperty.call(i, a))
    return (...s) => {
      const c = qe(e) ? e(...s) : e, u = qe(r) ? r(...s) : r;
      return Tt({}, c, u, po);
    };
}
const [p0, g0] = E(), [h0, Va, Ua] = E(), m0 = E("100"), [v0, , go] = m0;
var rr = /* @__PURE__ */ ((e) => (e.NextPageButton = "button.artdeco-pagination__button--next", e.ConnectButtonFromMyNetworkPage = "div.discover-entity-type-card__bottom-container button.ember-view:enabled:not(.artdeco-button--muted):not(.artdeco-button--full)", e.ConnectButtonFromSearchPage = "li.reusable-search__result-container div.entity-result__actions > div > button.ember-view:enabled:not(.artdeco-button--muted):not([data-test-reusable-search-primary-action])", e.SendButtonFromSendInviteModal = "div.send-invite button.artdeco-button--primary", e))(rr || {}), me = /* @__PURE__ */ ((e) => (e[e.Unidentified = 0] = "Unidentified", e[e.SearchPeople = 1] = "SearchPeople", e[e.MyNetwork = 2] = "MyNetwork", e))(me || {}), Ct = /* @__PURE__ */ ((e) => (e.SearchPeoplePage = "https://www.linkedin.com/search/results/people/", e.MyNetworkPage = "https://www.linkedin.com/mynetwork/", e.PatternOfSearchPage = "linkedin.com/search/results/people", e.PatternOfMyNetworkPage = "linkedin.com/mynetwork", e))(Ct || {}), le = /* @__PURE__ */ ((e) => (e[e.ConnectionEstablished = 0] = "ConnectionEstablished", e[e.RunningStateUpdated = 1] = "RunningStateUpdated", e[e.ButtonClicksCountUpdated = 2] = "ButtonClicksCountUpdated", e[e.StartAutoConnect = 3] = "StartAutoConnect", e[e.StopAutoConnect = 4] = "StopAutoConnect", e))(le || {});
function y0(e) {
  return new Promise((r) => setTimeout(r, e));
}
async function S0() {
  const e = { maximumAutoConnectionsPerSession: go() }, { maximumAutoConnectionsPerSession: r } = await new Promise((a) => {
    chrome.storage.sync.get(e, (i) => a(i));
  });
  v0(r);
}
function Le(e) {
  const { message: r, port: a } = e;
  a.postMessage(r);
}
function x0(e) {
  e.onMessage.addListener((r) => {
    p0({ message: r, port: e });
  });
}
b0({
  config: {
    useSystemColorMode: !1,
    initialColorMode: "dark"
  }
});
const ho = 5, _0 = 1500, k0 = 3e3, $0 = 1e3, mo = 500, [w0, C0] = E(), [z0, T0] = E(), [B0, A0] = E(), [R0, P0] = E(), [F0, E0] = E(), [qa, I0] = E(), [M0, D0, W0] = E(""), [j0, O0] = E(), [L0, H0] = E(), [N0, V0] = E(), [U0, q0, gt] = E(0), [Ga, , G0] = E(me.Unidentified), [ht, X0, zt] = E(!1);
function Y0(e) {
  e.focus(), e.click(), e.setAttribute("disabled", "disabled"), B0();
}
function K0() {
  return new Promise((e) => {
    let r = 0;
    const a = setInterval(() => {
      const i = document.querySelector(rr.SendButtonFromSendInviteModal);
      i == null || i.click(), (i || ++r > ho) && (clearInterval(a), e(null));
    }, mo);
  });
}
function Z0(e) {
  let r = 0;
  const a = setInterval(() => {
    window.scrollTo(0, document.body.scrollHeight);
    const i = document.querySelector(e);
    i ? (clearInterval(a), w0(i)) : ++r > ho && (clearInterval(a), z0());
  }, mo);
}
function J0() {
  var e;
  (e = document.querySelector(rr.NextPageButton)) == null || e.click();
}
function Q0() {
  return chrome.runtime.onConnect.addListener(h0);
}
function ef() {
  return setInterval(R0, $0);
}
function Sr() {
  const e = zt(), r = G0();
  e && [me.MyNetwork, me.SearchPeople].includes(r) && Z0(
    r === me.MyNetwork ? rr.ConnectButtonFromMyNetworkPage : rr.ConnectButtonFromSearchPage
  );
}
(async () => (D0((e) => {
  e.includes(Ct.PatternOfSearchPage) ? j0() : e.includes(Ct.PatternOfMyNetworkPage) ? L0() : N0();
}), E0(() => ht(!0)), I0(() => ht(!1)), V0(() => ht(!1)), A0(async () => {
  U0(gt() + 1), K0(), await y0(Qn(_0, k0)), zt() && (gt() >= Number(go()) ? qa() : Sr());
}), q0((e) => {
  const r = Ua();
  r && Le({ message: { id: le.ButtonClicksCountUpdated, content: e }, port: r });
}), Va((e) => {
  Le({ message: { id: le.RunningStateUpdated, content: zt() }, port: e }), Le({
    message: { id: le.ButtonClicksCountUpdated, content: gt() },
    port: e
  });
}), g0(({ message: e }) => {
  switch (e.id) {
    case le.StartAutoConnect:
      return F0();
    case le.StopAutoConnect:
      return qa();
  }
}), X0((e) => {
  const r = Ua();
  r && Le({ message: { id: le.RunningStateUpdated, content: e }, port: r }), Sr();
}), P0(() => {
  window.location.href !== W0() && M0(window.location.href);
}), Va((e) => {
  Le({ message: { id: le.ConnectionEstablished }, port: e }), x0(e);
}), C0(Y0), T0(J0), H0(() => {
  Ga(me.MyNetwork), Sr();
}), O0(() => {
  Ga(me.SearchPeople), Sr();
}), await S0(), Q0(), ef()))();
