(function (d, $) {
	typeof exports == 'object' && typeof module != 'undefined'
		? $(exports)
		: typeof define == 'function' && define.amd
			? define(['exports'], $)
			: ((d = typeof globalThis != 'undefined' ? globalThis : d || self), $((d.Published = {})));
})(this, function (d) {
	'use strict';
	var jr = Object.defineProperty,
		qr = Object.defineProperties;
	var Yr = Object.getOwnPropertyDescriptors;
	var yn = Object.getOwnPropertySymbols;
	var Hr = Object.prototype.hasOwnProperty,
		Br = Object.prototype.propertyIsEnumerable;
	var bn = (d) => {
		throw TypeError(d);
	};
	var we = (d, $, m) =>
			$ in d ? jr(d, $, { enumerable: !0, configurable: !0, writable: !0, value: m }) : (d[$] = m),
		Xt = (d, $) => {
			for (var m in $ || ($ = {})) Hr.call($, m) && we(d, m, $[m]);
			if (yn) for (var m of yn($)) Br.call($, m) && we(d, m, $[m]);
			return d;
		},
		te = (d, $) => qr(d, Yr($));
	var N = (d, $, m) => we(d, typeof $ != 'symbol' ? $ + '' : $, m),
		ge = (d, $, m) => $.has(d) || bn('Cannot ' + m);
	var _ = (d, $, m) => (ge(d, $, 'read from private field'), m ? m.call(d) : $.get(d)),
		E = (d, $, m) =>
			$.has(d)
				? bn('Cannot add the same private member more than once')
				: $ instanceof WeakSet
					? $.add(d)
					: $.set(d, m),
		O = (d, $, m, ee) => (ge(d, $, 'write to private field'), ee ? ee.call(d, m) : $.set(d, m), m),
		Dt = (d, $, m) => (ge(d, $, 'access private method'), m);
	var Ot, yt, bt, J, At, Ct, at, Et, Z, H, ot, B, En, Tn, me, U, F, Pt, wn, gn, mn;
	const xt = {},
		b = Symbol(),
		ye = !1;
	var be = Array.isArray,
		xn = Array.prototype.indexOf,
		kn = Array.from,
		Mt = Object.keys,
		ht = Object.defineProperty,
		_t = Object.getOwnPropertyDescriptor,
		Rn = Object.prototype,
		Sn = Array.prototype,
		Nn = Object.getPrototypeOf,
		Ee = Object.isExtensible;
	function Te(t) {
		for (var e = 0; e < t.length; e++) t[e]();
	}
	function On() {
		var t,
			e,
			n = new Promise((r, s) => {
				((t = r), (e = s));
			});
		return { promise: n, resolve: t, reject: e };
	}
	const A = 2,
		xe = 4,
		ke = 8,
		Ft = 16,
		X = 32,
		tt = 64,
		Re = 128,
		I = 256,
		It = 512,
		T = 1024,
		C = 2048,
		et = 4096,
		vt = 8192,
		nt = 16384,
		Se = 32768,
		An = 65536,
		Ne = 1 << 17,
		Cn = 1 << 18,
		ne = 1 << 19,
		Oe = 1 << 20,
		re = 1 << 21,
		se = 1 << 22,
		rt = 1 << 23,
		ie = Symbol('$state'),
		Pn = Symbol('legacy props'),
		le = new (class extends Error {
			constructor() {
				super(...arguments);
				N(this, 'name', 'StaleReactionError');
				N(this, 'message', 'The reaction that called `getAbortSignal()` was re-run or destroyed');
			}
		})(),
		Ae = 8;
	function Dn() {
		throw new Error('https://svelte.dev/e/await_outside_boundary');
	}
	function Mn() {
		throw new Error('https://svelte.dev/e/async_derived_orphan');
	}
	function Fn() {
		throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
	}
	function In() {
		throw new Error('https://svelte.dev/e/hydration_failed');
	}
	function Ln() {
		throw new Error('https://svelte.dev/e/state_descriptors_fixed');
	}
	function jn() {
		throw new Error('https://svelte.dev/e/state_prototype_fixed');
	}
	function qn() {
		throw new Error('https://svelte.dev/e/state_unsafe_mutation');
	}
	function ue(t) {
		console.warn('https://svelte.dev/e/hydration_mismatch');
	}
	let V = !1;
	function Lt(t) {
		V = t;
	}
	let S;
	function jt(t) {
		if (t === null) throw (ue(), xt);
		return (S = t);
	}
	function Ce() {
		return jt(Vt(S));
	}
	function Yn(t) {
		if (V) {
			if (Vt(S) !== null) throw (ue(), xt);
			S = t;
		}
	}
	function Pe(t) {
		return t === this.v;
	}
	function Hn(t, e) {
		return t != t
			? e == e
			: t !== e || (t !== null && typeof t == 'object') || typeof t == 'function';
	}
	function Bn(t) {
		return !Hn(t, this.v);
	}
	let Un = !1,
		L = null;
	function qt(t) {
		L = t;
	}
	function De(t, e = !1, n) {
		L = { p: L, c: null, e: null, s: t, x: null, l: null };
	}
	function Me(t) {
		var e = L,
			n = e.e;
		if (n !== null) {
			e.e = null;
			for (var r of n) lr(r);
		}
		return (t !== void 0 && (e.x = t), (L = e.p), t != null ? t : {});
	}
	function Fe() {
		return !0;
	}
	const Vn = new WeakMap();
	function zn(t) {
		var e = w;
		if (e === null) return ((p.f |= rt), t);
		if ((e.f & Se) === 0) {
			if ((e.f & Re) === 0) throw (!e.parent && t instanceof Error && Ie(t), t);
			e.b.error(t);
		} else fe(t, e);
	}
	function fe(t, e) {
		for (; e !== null; ) {
			if ((e.f & Re) !== 0)
				try {
					e.b.error(t);
					return;
				} catch (n) {
					t = n;
				}
			e = e.parent;
		}
		throw (t instanceof Error && Ie(t), t);
	}
	function Ie(t) {
		const e = Vn.get(t);
		e && (ht(t, 'message', { value: e.message }), ht(t, 'stack', { value: e.stack }));
	}
	let kt = [],
		ae = [];
	function Le() {
		var t = kt;
		((kt = []), Te(t));
	}
	function Kn() {
		var t = ae;
		((ae = []), Te(t));
	}
	function Wn(t) {
		(kt.length === 0 && queueMicrotask(Le), kt.push(t));
	}
	function Gn() {
		(kt.length > 0 && Le(), ae.length > 0 && Kn());
	}
	function Jn() {
		for (var t = w.b; t !== null && !t.has_pending_snippet(); ) t = t.parent;
		return (t === null && Dn(), t);
	}
	function je(t) {
		var e = A | C,
			n = p !== null && (p.f & A) !== 0 ? p : null;
		return (
			w === null || (n !== null && (n.f & I) !== 0) ? (e |= I) : (w.f |= ne),
			{
				ctx: L,
				deps: null,
				effects: null,
				equals: Pe,
				f: e,
				fn: t,
				reactions: null,
				rv: 0,
				v: b,
				wv: 0,
				parent: n != null ? n : w,
				ac: null
			}
		);
	}
	function Zn(t, e) {
		let n = w;
		n === null && Mn();
		var r = n.b,
			s = void 0,
			i = he(b),
			f = null,
			u = !p;
		return (
			ar(() => {
				var v;
				try {
					var l = t();
				} catch (g) {
					l = Promise.reject(g);
				}
				var a = () => l;
				((s = (v = f == null ? void 0 : f.then(a, a)) != null ? v : Promise.resolve(l)), (f = s));
				var o = D,
					c = r.pending;
				u && (r.update_pending_count(1), c || o.increment());
				const h = (g, y = void 0) => {
					((f = null),
						c || o.activate(),
						y ? y !== le && ((i.f |= rt), _e(i, y)) : ((i.f & rt) !== 0 && (i.f ^= rt), _e(i, g)),
						u && (r.update_pending_count(-1), c || o.decrement()),
						He());
				};
				if ((s.then(h, (g) => h(null, g || 'unknown')), o))
					return () => {
						queueMicrotask(() => o.neuter());
					};
			}),
			new Promise((l) => {
				function a(o) {
					function c() {
						o === s ? l(i) : a(s);
					}
					o.then(c, c);
				}
				a(s);
			})
		);
	}
	function qe(t) {
		var e = t.effects;
		if (e !== null) {
			t.effects = null;
			for (var n = 0; n < e.length; n += 1) K(e[n]);
		}
	}
	function Qn(t) {
		for (var e = t.parent; e !== null; ) {
			if ((e.f & A) === 0) return e;
			e = e.parent;
		}
		return null;
	}
	function oe(t) {
		var e,
			n = w;
		gt(Qn(t));
		try {
			(qe(t), (e = an(t)));
		} finally {
			gt(n);
		}
		return e;
	}
	function Ye(t) {
		var e = oe(t);
		if ((t.equals(e) || ((t.v = e), (t.wv = un())), !wt))
			if (z !== null) z.set(t, t.v);
			else {
				var n = (G || (t.f & I) !== 0) && t.deps !== null ? et : T;
				R(t, n);
			}
	}
	function Xn(t, e, n) {
		const r = je;
		if (e.length === 0) {
			n(t.map(r));
			return;
		}
		var s = D,
			i = w,
			f = tr(),
			u = Jn();
		Promise.all(e.map((l) => Zn(l)))
			.then((l) => {
				(s == null || s.activate(), f());
				try {
					n([...t.map(r), ...l]);
				} catch (a) {
					(i.f & nt) === 0 && fe(a, i);
				}
				(s == null || s.deactivate(), He());
			})
			.catch((l) => {
				u.error(l);
			});
	}
	function tr() {
		var t = w,
			e = p,
			n = L;
		return function () {
			(gt(t), W(e), qt(n));
		};
	}
	function He() {
		(gt(null), W(null), qt(null));
	}
	const Yt = new Set();
	let D = null,
		z = null,
		Be = new Set(),
		Ht = [];
	function Ue() {
		const t = Ht.shift();
		(Ht.length > 0 && queueMicrotask(Ue), t());
	}
	let dt = [],
		Bt = null,
		ce = !1;
	const Zt = class Zt {
		constructor() {
			E(this, B);
			E(this, Ot, new Map());
			E(this, yt, new Map());
			E(this, bt, new Set());
			E(this, J, 0);
			E(this, At, null);
			E(this, Ct, !1);
			E(this, at, []);
			E(this, Et, []);
			E(this, Z, []);
			E(this, H, []);
			E(this, ot, []);
			N(this, 'skipped_effects', new Set());
		}
		capture(e, n) {
			(_(this, yt).has(e) || _(this, yt).set(e, n), _(this, Ot).set(e, e.v));
		}
		activate() {
			D = this;
		}
		deactivate() {
			D = null;
			for (const e of Be) if ((Be.delete(e), e(), D !== null)) break;
		}
		neuter() {
			O(this, Ct, !0);
		}
		flush() {
			(dt.length > 0 ? this.flush_effects() : Dt(this, B, me).call(this),
				D === this && (_(this, J) === 0 && Yt.delete(this), this.deactivate()));
		}
		flush_effects() {
			var e = pt;
			ce = !0;
			try {
				var n = 0;
				for (rn(!0); dt.length > 0; ) {
					if (n++ > 1e3) {
						var r, s;
						er();
					}
					(Dt(this, B, En).call(this, dt), it.clear());
				}
			} finally {
				((ce = !1), rn(e), (Bt = null));
			}
		}
		increment() {
			O(this, J, _(this, J) + 1);
		}
		decrement() {
			if ((O(this, J, _(this, J) - 1), _(this, J) === 0)) {
				for (const e of _(this, Z)) (R(e, C), st(e));
				for (const e of _(this, H)) (R(e, C), st(e));
				for (const e of _(this, ot)) (R(e, C), st(e));
				(O(this, Z, []), O(this, H, []), this.flush());
			} else this.deactivate();
		}
		add_callback(e) {
			_(this, bt).add(e);
		}
		settled() {
			var e;
			return ((e = _(this, At)) != null ? e : O(this, At, On())).promise;
		}
		static ensure(e = !0) {
			if (D === null) {
				const n = (D = new Zt());
				(Yt.add(D),
					e &&
						Zt.enqueue(() => {
							D === n && n.flush();
						}));
			}
			return D;
		}
		static enqueue(e) {
			(Ht.length === 0 && queueMicrotask(Ue), Ht.unshift(e));
		}
	};
	((Ot = new WeakMap()),
		(yt = new WeakMap()),
		(bt = new WeakMap()),
		(J = new WeakMap()),
		(At = new WeakMap()),
		(Ct = new WeakMap()),
		(at = new WeakMap()),
		(Et = new WeakMap()),
		(Z = new WeakMap()),
		(H = new WeakMap()),
		(ot = new WeakMap()),
		(B = new WeakSet()),
		(En = function (e) {
			var i;
			dt = [];
			var n = null;
			if (Yt.size > 1) {
				((n = new Map()), (z = new Map()));
				for (const [f, u] of _(this, Ot)) (n.set(f, { v: f.v, wv: f.wv }), (f.v = u));
				for (const f of Yt)
					if (f !== this)
						for (const [u, l] of _(f, yt)) n.has(u) || (n.set(u, { v: u.v, wv: u.wv }), (u.v = l));
			}
			for (const f of e) Dt(this, B, Tn).call(this, f);
			if (_(this, at).length === 0 && _(this, J) === 0) {
				var r = _(this, Z),
					s = _(this, H);
				(O(this, Z, []),
					O(this, H, []),
					O(this, ot, []),
					Dt(this, B, me).call(this),
					ze(r),
					ze(s),
					(i = _(this, At)) == null || i.resolve());
			} else {
				for (const f of _(this, Z)) R(f, T);
				for (const f of _(this, H)) R(f, T);
				for (const f of _(this, ot)) R(f, T);
			}
			if (n) {
				for (const [f, { v: u, wv: l }] of n) f.wv <= l && (f.v = u);
				z = null;
			}
			for (const f of _(this, at)) Nt(f);
			for (const f of _(this, Et)) Nt(f);
			(O(this, at, []), O(this, Et, []));
		}),
		(Tn = function (e) {
			var o;
			e.f ^= T;
			for (var n = e.first; n !== null; ) {
				var r = n.f,
					s = (r & (X | tt)) !== 0,
					i = s && (r & T) !== 0,
					f = i || (r & vt) !== 0 || this.skipped_effects.has(n);
				if (!f && n.fn !== null) {
					if (s) n.f ^= T;
					else if ((r & xe) !== 0) _(this, H).push(n);
					else if (Kt(n))
						if ((r & se) !== 0) {
							var u = (o = n.b) != null && o.pending ? _(this, Et) : _(this, at);
							u.push(n);
						} else ((n.f & Ft) !== 0 && _(this, ot).push(n), Nt(n));
					var l = n.first;
					if (l !== null) {
						n = l;
						continue;
					}
				}
				var a = n.parent;
				for (n = n.next; n === null && a !== null; ) ((n = a.next), (a = a.parent));
			}
		}),
		(me = function () {
			if (!_(this, Ct)) for (const e of _(this, bt)) e();
			_(this, bt).clear();
		}));
	let $t = Zt;
	function Ve(t) {
		var e;
		const n = $t.ensure(!1);
		for (;;) {
			if ((Gn(), dt.length === 0)) return (n === D && n.flush(), (Bt = null), e);
			n.flush_effects();
		}
	}
	function er() {
		try {
			Fn();
		} catch (t) {
			fe(t, Bt);
		}
	}
	function ze(t) {
		var e = t.length;
		if (e !== 0) {
			for (var n = 0; n < e; n++) {
				var r = t[n];
				if ((r.f & (nt | vt)) === 0 && Kt(r)) {
					var s = zt;
					if (
						(Nt(r),
						r.deps === null &&
							r.first === null &&
							r.nodes_start === null &&
							(r.teardown === null && r.ac === null ? en(r) : (r.fn = null)),
						zt > s && (r.f & Oe) !== 0)
					)
						break;
				}
			}
			for (; n < e; n += 1) st(t[n]);
		}
	}
	function st(t) {
		for (var e = (Bt = t); e.parent !== null; ) {
			e = e.parent;
			var n = e.f;
			if (ce && e === w && (n & Ft) !== 0) return;
			if ((n & (tt | X)) !== 0) {
				if ((n & T) === 0) return;
				e.f ^= T;
			}
		}
		dt.push(e);
	}
	const it = new Map();
	function he(t, e) {
		var n = { f: 0, v: t, reactions: null, equals: Pe, rv: 0, wv: 0 };
		return n;
	}
	function Y(t, e) {
		const n = he(t);
		return (pr(n), n);
	}
	function nr(t, e = !1, n = !0) {
		const r = he(t);
		return (e || (r.equals = Bn), r);
	}
	function j(t, e, n = !1) {
		p !== null &&
			(!ut || (p.f & Ne) !== 0) &&
			Fe() &&
			(p.f & (A | Ft | se | Ne)) !== 0 &&
			!(x != null && x.includes(t)) &&
			qn();
		let r = n ? Rt(e) : e;
		return _e(t, r);
	}
	function _e(t, e) {
		if (!t.equals(e)) {
			var n = t.v;
			(wt ? it.set(t, e) : it.set(t, n),
				(t.v = e),
				$t.ensure().capture(t, n),
				(t.f & A) !== 0 && ((t.f & C) !== 0 && oe(t), R(t, (t.f & I) === 0 ? T : et)),
				(t.wv = un()),
				Ke(t, C),
				w !== null &&
					(w.f & T) !== 0 &&
					(w.f & (X | tt)) === 0 &&
					(M === null ? wr([t]) : M.push(t)));
		}
		return e;
	}
	function ve(t) {
		j(t, t.v + 1);
	}
	function Ke(t, e) {
		var n = t.reactions;
		if (n !== null)
			for (var r = n.length, s = 0; s < r; s++) {
				var i = n[s],
					f = i.f;
				((f & C) === 0 && R(i, e), (f & A) !== 0 ? Ke(i, et) : (f & C) === 0 && st(i));
			}
	}
	function Rt(t) {
		if (typeof t != 'object' || t === null || ie in t) return t;
		const e = Nn(t);
		if (e !== Rn && e !== Sn) return t;
		var n = new Map(),
			r = be(t),
			s = Y(0),
			i = ft,
			f = (u) => {
				if (ft === i) return u();
				var l = p,
					a = ft;
				(W(null), ln(i));
				var o = u();
				return (W(l), ln(a), o);
			};
		return (
			r && n.set('length', Y(t.length)),
			new Proxy(t, {
				defineProperty(u, l, a) {
					(!('value' in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) &&
						Ln();
					var o = n.get(l);
					return (
						o === void 0
							? (o = f(() => {
									var c = Y(a.value);
									return (n.set(l, c), c);
								}))
							: j(o, a.value, !0),
						!0
					);
				},
				deleteProperty(u, l) {
					var a = n.get(l);
					if (a === void 0) {
						if (l in u) {
							const o = f(() => Y(b));
							(n.set(l, o), ve(s));
						}
					} else (j(a, b), ve(s));
					return !0;
				},
				get(u, l, a) {
					var v;
					if (l === ie) return t;
					var o = n.get(l),
						c = l in u;
					if (
						(o === void 0 &&
							(!c || ((v = _t(u, l)) != null && v.writable)) &&
							((o = f(() => {
								var g = Rt(c ? u[l] : b),
									y = Y(g);
								return y;
							})),
							n.set(l, o)),
						o !== void 0)
					) {
						var h = q(o);
						return h === b ? void 0 : h;
					}
					return Reflect.get(u, l, a);
				},
				getOwnPropertyDescriptor(u, l) {
					var a = Reflect.getOwnPropertyDescriptor(u, l);
					if (a && 'value' in a) {
						var o = n.get(l);
						o && (a.value = q(o));
					} else if (a === void 0) {
						var c = n.get(l),
							h = c == null ? void 0 : c.v;
						if (c !== void 0 && h !== b)
							return { enumerable: !0, configurable: !0, value: h, writable: !0 };
					}
					return a;
				},
				has(u, l) {
					var h;
					if (l === ie) return !0;
					var a = n.get(l),
						o = (a !== void 0 && a.v !== b) || Reflect.has(u, l);
					if (a !== void 0 || (w !== null && (!o || ((h = _t(u, l)) != null && h.writable)))) {
						a === void 0 &&
							((a = f(() => {
								var v = o ? Rt(u[l]) : b,
									g = Y(v);
								return g;
							})),
							n.set(l, a));
						var c = q(a);
						if (c === b) return !1;
					}
					return o;
				},
				set(u, l, a, o) {
					var ct;
					var c = n.get(l),
						h = l in u;
					if (r && l === 'length')
						for (var v = a; v < c.v; v += 1) {
							var g = n.get(v + '');
							g !== void 0 ? j(g, b) : v in u && ((g = f(() => Y(b))), n.set(v + '', g));
						}
					if (c === void 0)
						(!h || ((ct = _t(u, l)) != null && ct.writable)) &&
							((c = f(() => Y(void 0))), j(c, Rt(a)), n.set(l, c));
					else {
						h = c.v !== b;
						var y = f(() => Rt(a));
						j(c, y);
					}
					var Q = Reflect.getOwnPropertyDescriptor(u, l);
					if ((Q != null && Q.set && Q.set.call(o, a), !h)) {
						if (r && typeof l == 'string') {
							var Qt = n.get('length'),
								Tt = Number(l);
							Number.isInteger(Tt) && Tt >= Qt.v && j(Qt, Tt + 1);
						}
						ve(s);
					}
					return !0;
				},
				ownKeys(u) {
					q(s);
					var l = Reflect.ownKeys(u).filter((c) => {
						var h = n.get(c);
						return h === void 0 || h.v !== b;
					});
					for (var [a, o] of n) o.v !== b && !(a in u) && l.push(a);
					return l;
				},
				setPrototypeOf() {
					jn();
				}
			})
		);
	}
	var We, Ge, Je, Ze;
	function de() {
		if (We === void 0) {
			((We = window), (Ge = /Firefox/.test(navigator.userAgent)));
			var t = Element.prototype,
				e = Node.prototype,
				n = Text.prototype;
			((Je = _t(e, 'firstChild').get),
				(Ze = _t(e, 'nextSibling').get),
				Ee(t) &&
					((t.__click = void 0),
					(t.__className = void 0),
					(t.__attributes = null),
					(t.__style = void 0),
					(t.__e = void 0)),
				Ee(n) && (n.__t = void 0));
		}
	}
	function Qe(t = '') {
		return document.createTextNode(t);
	}
	function Ut(t) {
		return Je.call(t);
	}
	function Vt(t) {
		return Ze.call(t);
	}
	function rr(t, e) {
		if (!V) return Ut(t);
		var n = Ut(S);
		return (n === null && (n = S.appendChild(Qe())), jt(n), n);
	}
	function sr(t) {
		t.textContent = '';
	}
	function ir(t, e) {
		var n = e.last;
		n === null ? (e.last = e.first = t) : ((n.next = t), (t.prev = n), (e.last = t));
	}
	function lt(t, e, n, r = !0) {
		var l;
		var s = w;
		s !== null && (s.f & vt) !== 0 && (t |= vt);
		var i = {
			ctx: L,
			deps: null,
			nodes_start: null,
			nodes_end: null,
			f: t | C,
			first: null,
			fn: e,
			last: null,
			next: null,
			parent: s,
			b: s && s.b,
			prev: null,
			teardown: null,
			transitions: null,
			wv: 0,
			ac: null
		};
		if (n)
			try {
				(Nt(i), (i.f |= Se));
			} catch (a) {
				throw (K(i), a);
			}
		else e !== null && st(i);
		var f =
			n &&
			i.deps === null &&
			i.first === null &&
			i.nodes_start === null &&
			i.teardown === null &&
			(i.f & ne) === 0;
		if (!f && r && (s !== null && ir(i, s), p !== null && (p.f & A) !== 0)) {
			var u = p;
			((l = u.effects) != null ? l : (u.effects = [])).push(i);
		}
		return i;
	}
	function lr(t) {
		return lt(xe | Oe, t, !1);
	}
	function ur(t) {
		$t.ensure();
		const e = lt(tt, t, !0);
		return () => {
			K(e);
		};
	}
	function fr(t) {
		$t.ensure();
		const e = lt(tt, t, !0);
		return (n = {}) =>
			new Promise((r) => {
				n.outro
					? dr(e, () => {
							(K(e), r(void 0));
						})
					: (K(e), r(void 0));
			});
	}
	function ar(t) {
		return lt(se | ne, t, !0);
	}
	function or(t, e = 0) {
		return lt(ke | e, t, !0);
	}
	function cr(t, e = [], n = []) {
		Xn(e, n, (r) => {
			lt(ke, () => t(...r.map(q)), !0);
		});
	}
	function hr(t, e = !0) {
		return lt(X, t, !0, e);
	}
	function Xe(t) {
		var e = t.teardown;
		if (e !== null) {
			const n = wt,
				r = p;
			(sn(!0), W(null));
			try {
				e.call(null);
			} finally {
				(sn(n), W(r));
			}
		}
	}
	function tn(t, e = !1) {
		var s;
		var n = t.first;
		for (t.first = t.last = null; n !== null; ) {
			(s = n.ac) == null || s.abort(le);
			var r = n.next;
			((n.f & tt) !== 0 ? (n.parent = null) : K(n, e), (n = r));
		}
	}
	function _r(t) {
		for (var e = t.first; e !== null; ) {
			var n = e.next;
			((e.f & X) === 0 && K(e), (e = n));
		}
	}
	function K(t, e = !0) {
		var n = !1;
		((e || (t.f & Cn) !== 0) &&
			t.nodes_start !== null &&
			t.nodes_end !== null &&
			(vr(t.nodes_start, t.nodes_end), (n = !0)),
			tn(t, e && !n),
			Wt(t, 0),
			R(t, nt));
		var r = t.transitions;
		if (r !== null) for (const i of r) i.stop();
		Xe(t);
		var s = t.parent;
		(s !== null && s.first !== null && en(t),
			(t.next =
				t.prev =
				t.teardown =
				t.ctx =
				t.deps =
				t.fn =
				t.nodes_start =
				t.nodes_end =
				t.ac =
					null));
	}
	function vr(t, e) {
		for (; t !== null; ) {
			var n = t === e ? null : Vt(t);
			(t.remove(), (t = n));
		}
	}
	function en(t) {
		var e = t.parent,
			n = t.prev,
			r = t.next;
		(n !== null && (n.next = r),
			r !== null && (r.prev = n),
			e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n)));
	}
	function dr(t, e) {
		var n = [];
		(nn(t, n, !0),
			$r(n, () => {
				(K(t), e && e());
			}));
	}
	function $r(t, e) {
		var n = t.length;
		if (n > 0) {
			var r = () => --n || e();
			for (var s of t) s.out(r);
		} else e();
	}
	function nn(t, e, n) {
		if ((t.f & vt) === 0) {
			if (((t.f ^= vt), t.transitions !== null))
				for (const f of t.transitions) (f.is_global || n) && e.push(f);
			for (var r = t.first; r !== null; ) {
				var s = r.next,
					i = (r.f & An) !== 0 || (r.f & X) !== 0;
				(nn(r, e, i ? n : !1), (r = s));
			}
		}
	}
	let pt = !1;
	function rn(t) {
		pt = t;
	}
	let wt = !1;
	function sn(t) {
		wt = t;
	}
	let p = null,
		ut = !1;
	function W(t) {
		p = t;
	}
	let w = null;
	function gt(t) {
		w = t;
	}
	let x = null;
	function pr(t) {
		p !== null && (x === null ? (x = [t]) : x.push(t));
	}
	let k = null,
		P = 0,
		M = null;
	function wr(t) {
		M = t;
	}
	let zt = 1,
		St = 0,
		ft = St;
	function ln(t) {
		ft = t;
	}
	let G = !1;
	function un() {
		return ++zt;
	}
	function Kt(t) {
		var c, h;
		var e = t.f;
		if ((e & C) !== 0) return !0;
		if ((e & et) !== 0) {
			var n = t.deps,
				r = (e & I) !== 0;
			if (n !== null) {
				var s,
					i,
					f = (e & It) !== 0,
					u = r && w !== null && !G,
					l = n.length;
				if ((f || u) && (w === null || (w.f & nt) === 0)) {
					var a = t,
						o = a.parent;
					for (s = 0; s < l; s++)
						((i = n[s]),
							(f || !((c = i == null ? void 0 : i.reactions) != null && c.includes(a))) &&
								((h = i.reactions) != null ? h : (i.reactions = [])).push(a));
					(f && (a.f ^= It), u && o !== null && (o.f & I) === 0 && (a.f ^= I));
				}
				for (s = 0; s < l; s++) if (((i = n[s]), Kt(i) && Ye(i), i.wv > t.wv)) return !0;
			}
			(!r || (w !== null && !G)) && R(t, T);
		}
		return !1;
	}
	function fn(t, e, n = !0) {
		var r = t.reactions;
		if (r !== null && !(x != null && x.includes(t)))
			for (var s = 0; s < r.length; s++) {
				var i = r[s];
				(i.f & A) !== 0
					? fn(i, e, !1)
					: e === i && (n ? R(i, C) : (i.f & T) !== 0 && R(i, et), st(i));
			}
	}
	function an(t) {
		var g, y;
		var e = k,
			n = P,
			r = M,
			s = p,
			i = G,
			f = x,
			u = L,
			l = ut,
			a = ft,
			o = t.f;
		((k = null),
			(P = 0),
			(M = null),
			(G = (o & I) !== 0 && (ut || !pt || p === null)),
			(p = (o & (X | tt)) === 0 ? t : null),
			(x = null),
			qt(t.ctx),
			(ut = !1),
			(ft = ++St),
			t.ac !== null && (t.ac.abort(le), (t.ac = null)));
		try {
			t.f |= re;
			var c = (0, t.fn)(),
				h = t.deps;
			if (k !== null) {
				var v;
				if ((Wt(t, P), h !== null && P > 0))
					for (h.length = P + k.length, v = 0; v < k.length; v++) h[P + v] = k[v];
				else t.deps = h = k;
				if (!G || ((o & A) !== 0 && t.reactions !== null))
					for (v = P; v < h.length; v++)
						((y = (g = h[v]).reactions) != null ? y : (g.reactions = [])).push(t);
			} else h !== null && P < h.length && (Wt(t, P), (h.length = P));
			if (Fe() && M !== null && !ut && h !== null && (t.f & (A | et | C)) === 0)
				for (v = 0; v < M.length; v++) fn(M[v], t);
			return (
				s !== null && s !== t && (St++, M !== null && (r === null ? (r = M) : r.push(...M))),
				(t.f & rt) !== 0 && (t.f ^= rt),
				c
			);
		} catch (Q) {
			return zn(Q);
		} finally {
			((t.f ^= re),
				(k = e),
				(P = n),
				(M = r),
				(p = s),
				(G = i),
				(x = f),
				qt(u),
				(ut = l),
				(ft = a));
		}
	}
	function gr(t, e) {
		let n = e.reactions;
		if (n !== null) {
			var r = xn.call(n, t);
			if (r !== -1) {
				var s = n.length - 1;
				s === 0 ? (n = e.reactions = null) : ((n[r] = n[s]), n.pop());
			}
		}
		n === null &&
			(e.f & A) !== 0 &&
			(k === null || !k.includes(e)) &&
			(R(e, et), (e.f & (I | It)) === 0 && (e.f ^= It), qe(e), Wt(e, 0));
	}
	function Wt(t, e) {
		var n = t.deps;
		if (n !== null) for (var r = e; r < n.length; r++) gr(t, n[r]);
	}
	function Nt(t) {
		var e = t.f;
		if ((e & nt) === 0) {
			R(t, T);
			var n = w,
				r = pt;
			((w = t), (pt = !0));
			try {
				((e & Ft) !== 0 ? _r(t) : tn(t), Xe(t));
				var s = an(t);
				((t.teardown = typeof s == 'function' ? s : null), (t.wv = zt));
				var i;
				ye && Un && (t.f & C) !== 0 && t.deps;
			} finally {
				((pt = r), (w = n));
			}
		}
	}
	function q(t) {
		var a;
		var e = t.f,
			n = (e & A) !== 0;
		if (p !== null && !ut) {
			var r = w !== null && (w.f & nt) !== 0;
			if (!r && !(x != null && x.includes(t))) {
				var s = p.deps;
				if ((p.f & re) !== 0)
					t.rv < St &&
						((t.rv = St),
						k === null && s !== null && s[P] === t
							? P++
							: k === null
								? (k = [t])
								: (!G || !k.includes(t)) && k.push(t));
				else {
					((a = p.deps) != null ? a : (p.deps = [])).push(t);
					var i = t.reactions;
					i === null ? (t.reactions = [p]) : i.includes(p) || i.push(p);
				}
			}
		} else if (n && t.deps === null && t.effects === null) {
			var f = t,
				u = f.parent;
			u !== null && (u.f & I) === 0 && (f.f ^= I);
		}
		if (wt) {
			if (it.has(t)) return it.get(t);
			if (n) {
				f = t;
				var l = f.v;
				return (
					(((f.f & T) === 0 && f.reactions !== null) || on(f)) && (l = oe(f)),
					it.set(f, l),
					l
				);
			}
		} else if (n) {
			if (((f = t), z != null && z.has(f))) return z.get(f);
			Kt(f) && Ye(f);
		}
		if ((t.f & rt) !== 0) throw t.v;
		return t.v;
	}
	function on(t) {
		if (t.v === b) return !0;
		if (t.deps === null) return !1;
		for (const e of t.deps) if (it.has(e) || ((e.f & A) !== 0 && on(e))) return !0;
		return !1;
	}
	const mr = -7169;
	function R(t, e) {
		t.f = (t.f & mr) | e;
	}
	const yr = new Set(),
		cn = new Set();
	function Gt(t) {
		var Tt;
		var e = this,
			n = e.ownerDocument,
			r = t.type,
			s = ((Tt = t.composedPath) == null ? void 0 : Tt.call(t)) || [],
			i = s[0] || t.target,
			f = 0,
			u = t.__root;
		if (u) {
			var l = s.indexOf(u);
			if (l !== -1 && (e === document || e === window)) {
				t.__root = e;
				return;
			}
			var a = s.indexOf(e);
			if (a === -1) return;
			l <= a && (f = l);
		}
		if (((i = s[f] || t.target), i !== e)) {
			ht(t, 'currentTarget', {
				configurable: !0,
				get() {
					return i || n;
				}
			});
			var o = p,
				c = w;
			(W(null), gt(null));
			try {
				for (var h, v = []; i !== null; ) {
					var g = i.assignedSlot || i.parentNode || i.host || null;
					try {
						var y = i['__' + r];
						if (y != null && (!i.disabled || t.target === i))
							if (be(y)) {
								var [Q, ...Qt] = y;
								Q.apply(i, [t, ...Qt]);
							} else y.call(i, t);
					} catch (ct) {
						h ? v.push(ct) : (h = ct);
					}
					if (t.cancelBubble || g === e || g === null) break;
					i = g;
				}
				if (h) {
					for (let ct of v)
						queueMicrotask(() => {
							throw ct;
						});
					throw h;
				}
			} finally {
				((t.__root = e), delete t.currentTarget, W(o), gt(c));
			}
		}
	}
	function br(t) {
		var e = document.createElement('template');
		return ((e.innerHTML = t.replaceAll('<!>', '<!---->')), e.content);
	}
	function $e(t, e) {
		var n = w;
		n.nodes_start === null && ((n.nodes_start = t), (n.nodes_end = e));
	}
	function Er(t, e) {
		var n = (e & 2) !== 0,
			r,
			s = !t.startsWith('<!>');
		return () => {
			if (V) return ($e(S, null), S);
			r === void 0 && ((r = br(s ? t : '<!>' + t)), (r = Ut(r)));
			var i = n || Ge ? document.importNode(r, !0) : r.cloneNode(!0);
			return ($e(i, i), i);
		};
	}
	function hn(t, e) {
		if (V) {
			((w.nodes_end = S), Ce());
			return;
		}
		t !== null && t.before(e);
	}
	const Tr = ['touchstart', 'touchmove'];
	function xr(t) {
		return Tr.includes(t);
	}
	function kr(t, e) {
		var r;
		var n = e == null ? '' : typeof e == 'object' ? e + '' : e;
		n !== ((r = t.__t) != null ? r : (t.__t = t.nodeValue)) &&
			((t.__t = n), (t.nodeValue = n + ''));
	}
	function _n(t, e) {
		return vn(t, e);
	}
	function Rr(t, e) {
		var f;
		(de(), (e.intro = (f = e.intro) != null ? f : !1));
		const n = e.target,
			r = V,
			s = S;
		try {
			for (var i = Ut(n); i && (i.nodeType !== Ae || i.data !== '['); ) i = Vt(i);
			if (!i) throw xt;
			(Lt(!0), jt(i), Ce());
			const u = vn(t, te(Xt({}, e), { anchor: i }));
			if (S === null || S.nodeType !== Ae || S.data !== ']') throw (ue(), xt);
			return (Lt(!1), u);
		} catch (u) {
			if (u === xt) return (e.recover === !1 && In(), de(), sr(n), Lt(!1), _n(t, e));
			throw u;
		} finally {
			(Lt(r), jt(s));
		}
	}
	const mt = new Map();
	function vn(t, { target: e, anchor: n, props: r = {}, events: s, context: i, intro: f = !0 }) {
		de();
		var u = new Set(),
			l = (c) => {
				for (var h = 0; h < c.length; h++) {
					var v = c[h];
					if (!u.has(v)) {
						u.add(v);
						var g = xr(v);
						e.addEventListener(v, Gt, { passive: g });
						var y = mt.get(v);
						y === void 0
							? (document.addEventListener(v, Gt, { passive: g }), mt.set(v, 1))
							: mt.set(v, y + 1);
					}
				}
			};
		(l(kn(yr)), cn.add(l));
		var a = void 0,
			o = fr(() => {
				var c = n != null ? n : e.appendChild(Qe());
				return (
					hr(() => {
						if (i) {
							De({});
							var h = L;
							h.c = i;
						}
						(s && (r.$$events = s),
							V && $e(c, null),
							(a = t(c, r) || {}),
							V && (w.nodes_end = S),
							i && Me());
					}),
					() => {
						var g;
						for (var h of u) {
							e.removeEventListener(h, Gt);
							var v = mt.get(h);
							--v === 0 ? (document.removeEventListener(h, Gt), mt.delete(h)) : mt.set(h, v);
						}
						(cn.delete(l), c !== n && ((g = c.parentNode) == null || g.removeChild(c)));
					}
				);
			});
		return (pe.set(a, o), a);
	}
	let pe = new WeakMap();
	function Sr(t, e) {
		const n = pe.get(t);
		return n ? (pe.delete(t), n(e)) : Promise.resolve();
	}
	function Nr(t, e) {
		Wn(() => {
			var s;
			var n = t.getRootNode(),
				r = n.host ? n : (s = n.head) != null ? s : n.ownerDocument.head;
			if (!r.querySelector('#' + e.hash)) {
				const i = document.createElement('style');
				((i.id = e.hash), (i.textContent = e.code), r.appendChild(i));
			}
		});
	}
	function Or(t, e, n, r) {
		var s = r,
			i = !0,
			f = () => (i && ((i = !1), (s = r)), s);
		t[e];
		var u;
		u = () => {
			var c = t[e];
			return c === void 0 ? f() : ((i = !0), c);
		};
		var l = !1,
			a = je(() => ((l = !1), u())),
			o = w;
		return function (c, h) {
			if (arguments.length > 0) {
				const v = h ? q(a) : c;
				return (j(a, v), (l = !0), s !== void 0 && (s = v), c);
			}
			return (wt && l) || (o.f & nt) !== 0 ? a.v : q(a);
		};
	}
	function Ar(t) {
		return new Cr(t);
	}
	class Cr {
		constructor(e) {
			E(this, U);
			E(this, F);
			var i, f;
			var n = new Map(),
				r = (u, l) => {
					var a = nr(l, !1, !1);
					return (n.set(u, a), a);
				};
			const s = new Proxy(te(Xt({}, e.props || {}), { $$events: {} }), {
				get(u, l) {
					var a;
					return q((a = n.get(l)) != null ? a : r(l, Reflect.get(u, l)));
				},
				has(u, l) {
					var a;
					return l === Pn
						? !0
						: (q((a = n.get(l)) != null ? a : r(l, Reflect.get(u, l))), Reflect.has(u, l));
				},
				set(u, l, a) {
					var o;
					return (j((o = n.get(l)) != null ? o : r(l, a), a), Reflect.set(u, l, a));
				}
			});
			(O(
				this,
				F,
				(e.hydrate ? Rr : _n)(e.component, {
					target: e.target,
					anchor: e.anchor,
					props: s,
					context: e.context,
					intro: (i = e.intro) != null ? i : !1,
					recover: e.recover
				})
			),
				(!((f = e == null ? void 0 : e.props) != null && f.$$host) || e.sync === !1) && Ve(),
				O(this, U, s.$$events));
			for (const u of Object.keys(_(this, F)))
				u === '$set' ||
					u === '$destroy' ||
					u === '$on' ||
					ht(this, u, {
						get() {
							return _(this, F)[u];
						},
						set(l) {
							_(this, F)[u] = l;
						},
						enumerable: !0
					});
			((_(this, F).$set = (u) => {
				Object.assign(s, u);
			}),
				(_(this, F).$destroy = () => {
					Sr(_(this, F));
				}));
		}
		$set(e) {
			_(this, F).$set(e);
		}
		$on(e, n) {
			_(this, U)[e] = _(this, U)[e] || [];
			const r = (...s) => n.call(this, ...s);
			return (
				_(this, U)[e].push(r),
				() => {
					_(this, U)[e] = _(this, U)[e].filter((s) => s !== r);
				}
			);
		}
		$destroy() {
			_(this, F).$destroy();
		}
	}
	((U = new WeakMap()), (F = new WeakMap()));
	let dn;
	typeof HTMLElement == 'function' &&
		(dn = class extends HTMLElement {
			constructor(e, n, r) {
				super();
				N(this, '$$ctor');
				N(this, '$$s');
				N(this, '$$c');
				N(this, '$$cn', !1);
				N(this, '$$d', {});
				N(this, '$$r', !1);
				N(this, '$$p_d', {});
				N(this, '$$l', {});
				N(this, '$$l_u', new Map());
				N(this, '$$me');
				((this.$$ctor = e), (this.$$s = n), r && this.attachShadow({ mode: 'open' }));
			}
			addEventListener(e, n, r) {
				if (((this.$$l[e] = this.$$l[e] || []), this.$$l[e].push(n), this.$$c)) {
					const s = this.$$c.$on(e, n);
					this.$$l_u.set(n, s);
				}
				super.addEventListener(e, n, r);
			}
			removeEventListener(e, n, r) {
				if ((super.removeEventListener(e, n, r), this.$$c)) {
					const s = this.$$l_u.get(n);
					s && (s(), this.$$l_u.delete(n));
				}
			}
			async connectedCallback() {
				if (((this.$$cn = !0), !this.$$c)) {
					let e = function (s) {
						return (i) => {
							const f = document.createElement('slot');
							(s !== 'default' && (f.name = s), hn(i, f));
						};
					};
					if ((await Promise.resolve(), !this.$$cn || this.$$c)) return;
					const n = {},
						r = Pr(this);
					for (const s of this.$$s)
						s in r &&
							(s === 'default' && !this.$$d.children
								? ((this.$$d.children = e(s)), (n.default = !0))
								: (n[s] = e(s)));
					for (const s of this.attributes) {
						const i = this.$$g_p(s.name);
						i in this.$$d || (this.$$d[i] = Jt(i, s.value, this.$$p_d, 'toProp'));
					}
					for (const s in this.$$p_d)
						!(s in this.$$d) && this[s] !== void 0 && ((this.$$d[s] = this[s]), delete this[s]);
					((this.$$c = Ar({
						component: this.$$ctor,
						target: this.shadowRoot || this,
						props: te(Xt({}, this.$$d), { $$slots: n, $$host: this })
					})),
						(this.$$me = ur(() => {
							or(() => {
								var s;
								this.$$r = !0;
								for (const i of Mt(this.$$c)) {
									if (!((s = this.$$p_d[i]) != null && s.reflect)) continue;
									this.$$d[i] = this.$$c[i];
									const f = Jt(i, this.$$d[i], this.$$p_d, 'toAttribute');
									f == null
										? this.removeAttribute(this.$$p_d[i].attribute || i)
										: this.setAttribute(this.$$p_d[i].attribute || i, f);
								}
								this.$$r = !1;
							});
						})));
					for (const s in this.$$l)
						for (const i of this.$$l[s]) {
							const f = this.$$c.$on(s, i);
							this.$$l_u.set(i, f);
						}
					this.$$l = {};
				}
			}
			attributeChangedCallback(e, n, r) {
				var s;
				this.$$r ||
					((e = this.$$g_p(e)),
					(this.$$d[e] = Jt(e, r, this.$$p_d, 'toProp')),
					(s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
			}
			disconnectedCallback() {
				((this.$$cn = !1),
					Promise.resolve().then(() => {
						!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), (this.$$c = void 0));
					}));
			}
			$$g_p(e) {
				return (
					Mt(this.$$p_d).find(
						(n) =>
							this.$$p_d[n].attribute === e || (!this.$$p_d[n].attribute && n.toLowerCase() === e)
					) || e
				);
			}
		});
	function Jt(t, e, n, r) {
		var i;
		const s = (i = n[t]) == null ? void 0 : i.type;
		if (((e = s === 'Boolean' && typeof e != 'boolean' ? e != null : e), !r || !n[t])) return e;
		if (r === 'toAttribute')
			switch (s) {
				case 'Object':
				case 'Array':
					return e == null ? null : JSON.stringify(e);
				case 'Boolean':
					return e ? '' : null;
				case 'Number':
					return e == null ? null : e;
				default:
					return e;
			}
		else
			switch (s) {
				case 'Object':
				case 'Array':
					return e && JSON.parse(e);
				case 'Boolean':
					return e;
				case 'Number':
					return e != null ? +e : e;
				default:
					return e;
			}
	}
	function Pr(t) {
		const e = {};
		return (
			t.childNodes.forEach((n) => {
				e[n.slot || 'default'] = !0;
			}),
			e
		);
	}
	function Dr(t, e, n, r, s, i) {
		let f = class extends dn {
			constructor() {
				(super(t, n, s), (this.$$p_d = e));
			}
			static get observedAttributes() {
				return Mt(e).map((u) => (e[u].attribute || u).toLowerCase());
			}
		};
		return (
			Mt(e).forEach((u) => {
				ht(f.prototype, u, {
					get() {
						return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
					},
					set(l) {
						var c;
						((l = Jt(u, l, e)), (this.$$d[u] = l));
						var a = this.$$c;
						if (a) {
							var o = (c = _t(a, u)) == null ? void 0 : c.get;
							o ? (a[u] = l) : a.$set({ [u]: l });
						}
					}
				});
			}),
			r.forEach((u) => {
				ht(f.prototype, u, {
					get() {
						var l;
						return (l = this.$$c) == null ? void 0 : l[u];
					}
				});
			}),
			(t.element = f),
			f
		);
	}
	class Mr {
		constructor() {
			E(this, Pt, Y('hello'));
			window.bridge = this;
		}
		get name() {
			return q(_(this, Pt));
		}
		set name(e) {
			j(_(this, Pt), e, !0);
		}
	}
	Pt = new WeakMap();
	const $n = new Mr(),
		Fr = '5';
	typeof window != 'undefined' &&
		((mn = (gn = (wn = window.__svelte) != null ? wn : (window.__svelte = {})).v) != null
			? mn
			: (gn.v = new Set())
		).add(Fr);
	var Ir = Er('<div class="hello svelte-1wzuf2w"> </div>');
	const Lr = {
		hash: 'svelte-1wzuf2w',
		code: '.hello.svelte-1wzuf2w {padding:10px;border-radius:3px;border:1px solid rgba(255, 0, 0, 0.1);}'
	};
	function pn(t, e) {
		(De(e, !0), Nr(t, Lr));
		let n = Or(e, 'name');
		var r = Ir(),
			s = rr(r);
		return (
			Yn(r),
			cr(() => {
				var i, f;
				return kr(s, `${(i = n()) != null ? i : ''}: ${(f = $n.name) != null ? f : ''}`);
			}),
			hn(t, r),
			Me({
				get name() {
					return n();
				},
				set name(i) {
					(n(i), Ve());
				}
			})
		);
	}
	(customElements.define('next-hello', Dr(pn, { name: {} }, [], [], !0)),
		(d.Hello = pn),
		(d.bridge = $n),
		Object.defineProperty(d, Symbol.toStringTag, { value: 'Module' }));
});
