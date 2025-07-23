var gn = Object.defineProperty,
	mn = Object.defineProperties;
var yn = Object.getOwnPropertyDescriptors;
var pe = Object.getOwnPropertySymbols;
var bn = Object.prototype.hasOwnProperty,
	En = Object.prototype.propertyIsEnumerable;
var we = (t) => {
	throw TypeError(t);
};
var Qt = (t, e, n) =>
		e in t ? gn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
	Pt = (t, e) => {
		for (var n in e || (e = {})) bn.call(e, n) && Qt(t, n, e[n]);
		if (pe) for (var n of pe(e)) En.call(e, n) && Qt(t, n, e[n]);
		return t;
	},
	Dt = (t, e) => mn(t, yn(e));
var T = (t, e, n) => Qt(t, typeof e != 'symbol' ? e + '' : e, n),
	Xt = (t, e, n) => e.has(t) || we('Cannot ' + n);
var _ = (t, e, n) => (Xt(t, e, 'read from private field'), n ? n.call(t) : e.get(t)),
	g = (t, e, n) =>
		e.has(t)
			? we('Cannot add the same private member more than once')
			: e instanceof WeakSet
				? e.add(t)
				: e.set(t, n),
	k = (t, e, n, r) => (Xt(t, e, 'write to private field'), r ? r.call(t, n) : e.set(t, n), n),
	bt = (t, e, n) => (Xt(t, e, 'access private method'), n);
const xt = {},
	m = Symbol(),
	Ce = !1;
var Pe = Array.isArray,
	xn = Array.prototype.indexOf,
	Tn = Array.from,
	jt = Object.keys,
	pt = Object.defineProperty,
	ht = Object.getOwnPropertyDescriptor,
	kn = Object.prototype,
	Rn = Array.prototype,
	Nn = Object.getPrototypeOf,
	ge = Object.isExtensible;
function De(t) {
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
const S = 2,
	Me = 4,
	Fe = 8,
	Wt = 16,
	st = 32,
	it = 64,
	Ie = 128,
	D = 256,
	qt = 512,
	b = 1024,
	O = 2048,
	lt = 4096,
	wt = 8192,
	ut = 16384,
	Le = 32768,
	Sn = 65536,
	me = 1 << 17,
	An = 1 << 18,
	oe = 1 << 19,
	je = 1 << 20,
	ne = 1 << 21,
	ce = 1 << 22,
	tt = 1 << 23,
	te = Symbol('$state'),
	Cn = Symbol('legacy props'),
	he = new (class extends Error {
		constructor() {
			super(...arguments);
			T(this, 'name', 'StaleReactionError');
			T(this, 'message', 'The reaction that called `getAbortSignal()` was re-run or destroyed');
		}
	})(),
	ye = 8;
function Pn() {
	throw new Error('https://svelte.dev/e/await_outside_boundary');
}
function Dn() {
	throw new Error('https://svelte.dev/e/async_derived_orphan');
}
function Mn() {
	throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function Fn() {
	throw new Error('https://svelte.dev/e/hydration_failed');
}
function In() {
	throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function Ln() {
	throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function jn() {
	throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
function _e(t) {
	console.warn('https://svelte.dev/e/hydration_mismatch');
}
let K = !1;
function Mt(t) {
	K = t;
}
let R;
function Yt(t) {
	if (t === null) throw (_e(), xt);
	return (R = t);
}
function qe() {
	return Yt(
		/** @type {TemplateNode} */
		/* @__PURE__ */ Jt(R)
	);
}
function qn(t) {
	if (K) {
		if (/* @__PURE__ */ Jt(R) !== null) throw (_e(), xt);
		R = t;
	}
}
function Ye(t) {
	return t === this.v;
}
function Yn(t, e) {
	return t != t
		? e == e
		: t !== e || (t !== null && typeof t == 'object') || typeof t == 'function';
}
function Hn(t) {
	return !Yn(t, this.v);
}
let Bn = !1,
	I = null;
function Ht(t) {
	I = t;
}
function He(t, e = !1, n) {
	I = {
		p: I,
		c: null,
		e: null,
		s: t,
		x: null,
		l: null
	};
}
function Be(t) {
	var e =
			/** @type {ComponentContext} */
			I,
		n = e.e;
	if (n !== null) {
		e.e = null;
		for (var r of n) ir(r);
	}
	return (
		t !== void 0 && (e.x = t),
		(I = e.p),
		t != null
			? t
			: /** @type {T} */
				{}
	);
}
function Ue() {
	return !0;
}
const Un = /* @__PURE__ */ new WeakMap();
function Vn(t) {
	var e = $;
	if (e === null) return ((d.f |= tt), t);
	if ((e.f & Le) === 0) {
		if ((e.f & Ie) === 0) throw (!e.parent && t instanceof Error && Ve(t), t);
		e.b.error(t);
	} else ve(t, e);
}
function ve(t, e) {
	for (; e !== null; ) {
		if ((e.f & Ie) !== 0)
			try {
				e.b.error(t);
				return;
			} catch (n) {
				t = n;
			}
		e = e.parent;
	}
	throw (t instanceof Error && Ve(t), t);
}
function Ve(t) {
	const e = Un.get(t);
	e &&
		(pt(t, 'message', {
			value: e.message
		}),
		pt(t, 'stack', {
			value: e.stack
		}));
}
let kt = [],
	re = [];
function ze() {
	var t = kt;
	((kt = []), De(t));
}
function zn() {
	var t = re;
	((re = []), De(t));
}
function Kn(t) {
	(kt.length === 0 && queueMicrotask(ze), kt.push(t));
}
function Wn() {
	(kt.length > 0 && ze(), re.length > 0 && zn());
}
function Gn() {
	for (
		var t =
			/** @type {Effect} */
			$.b;
		t !== null && !t.has_pending_snippet();

	)
		t = t.parent;
	return (t === null && Pn(), t);
}
// @__NO_SIDE_EFFECTS__
function Ke(t) {
	var e = S | O,
		n =
			d !== null && (d.f & S) !== 0
				? /** @type {Derived} */
					d
				: null;
	return (
		$ === null || (n !== null && (n.f & D) !== 0) ? (e |= D) : ($.f |= oe),
		{
			ctx: I,
			deps: null,
			effects: null,
			equals: Ye,
			f: e,
			fn: t,
			reactions: null,
			rv: 0,
			v:
				/** @type {V} */
				m,
			wv: 0,
			parent: n != null ? n : $,
			ac: null
		}
	);
}
// @__NO_SIDE_EFFECTS__
function Jn(t, e) {
	let n =
		/** @type {Effect | null} */
		$;
	n === null && Dn();
	var r =
			/** @type {Boundary} */
			n.b,
		s =
			/** @type {Promise<V>} */
			/** @type {unknown} */
			void 0,
		i = $e(
			/** @type {V} */
			m
		),
		f = null,
		u = !d;
	return (
		fr(() => {
			var v;
			try {
				var l = t();
			} catch (p) {
				l = Promise.reject(p);
			}
			var a = () => l;
			((s = (v = f == null ? void 0 : f.then(a, a)) != null ? v : Promise.resolve(l)), (f = s));
			var o =
					/** @type {Batch} */
					A,
				c = r.pending;
			u && (r.update_pending_count(1), c || o.increment());
			const h = (p, w = void 0) => {
				((f = null),
					c || o.activate(),
					w ? w !== he && ((i.f |= tt), le(i, w)) : ((i.f & tt) !== 0 && (i.f ^= tt), le(i, p)),
					u && (r.update_pending_count(-1), c || o.decrement()),
					Je());
			};
			if ((s.then(h, (p) => h(null, p || 'unknown')), o))
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
function We(t) {
	var e = t.effects;
	if (e !== null) {
		t.effects = null;
		for (var n = 0; n < e.length; n += 1)
			W(
				/** @type {Effect} */
				e[n]
			);
	}
}
function Zn(t) {
	for (var e = t.parent; e !== null; ) {
		if ((e.f & S) === 0)
			return (
				/** @type {Effect} */
				e
			);
		e = e.parent;
	}
	return null;
}
function de(t) {
	var e,
		n = $;
	mt(Zn(t));
	try {
		(We(t), (e = _n(t)));
	} finally {
		mt(n);
	}
	return e;
}
function Ge(t) {
	var e = de(t);
	if ((t.equals(e) || ((t.v = e), (t.wv = cn())), !yt))
		if (V !== null) V.set(t, t.v);
		else {
			var n = (z || (t.f & D) !== 0) && t.deps !== null ? lt : b;
			E(t, n);
		}
}
function Qn(t, e, n) {
	const r = Ke;
	if (e.length === 0) {
		n(t.map(r));
		return;
	}
	var s = A,
		i =
			/** @type {Effect} */
			$,
		f = Xn(),
		u = Gn();
	Promise.all(e.map((l) => /* @__PURE__ */ Jn(l)))
		.then((l) => {
			(s == null || s.activate(), f());
			try {
				n([...t.map(r), ...l]);
			} catch (a) {
				(i.f & ut) === 0 && ve(a, i);
			}
			(s == null || s.deactivate(), Je());
		})
		.catch((l) => {
			u.error(l);
		});
}
function Xn() {
	var t = $,
		e = d,
		n = I;
	return function () {
		(mt(t), G(e), Ht(n));
	};
}
function Je() {
	(mt(null), G(null), Ht(null));
}
const Ft = /* @__PURE__ */ new Set();
let A = null,
	V = null,
	be = /* @__PURE__ */ new Set(),
	Bt = [];
function Ze() {
	const t =
		/** @type {() => void} */
		Bt.shift();
	(Bt.length > 0 && queueMicrotask(Ze), t());
}
let ct = [],
	Gt = null,
	se = !1;
var Nt, vt, dt, B, Ot, St, Q, $t, U, j, X, Y, Qe, Xe, ie;
const Kt = class Kt {
	constructor() {
		g(this, Y);
		/**
		 * The current values of any sources that are updated in this batch
		 * They keys of this map are identical to `this.#previous`
		 * @type {Map<Source, any>}
		 */
		g(this, Nt, /* @__PURE__ */ new Map());
		/**
		 * The values of any sources that are updated in this batch _before_ those updates took place.
		 * They keys of this map are identical to `this.#current`
		 * @type {Map<Source, any>}
		 */
		g(this, vt, /* @__PURE__ */ new Map());
		/**
		 * When the batch is committed (and the DOM is updated), we need to remove old branches
		 * and append new ones by calling the functions added inside (if/each/key/etc) blocks
		 * @type {Set<() => void>}
		 */
		g(this, dt, /* @__PURE__ */ new Set());
		/**
		 * The number of async effects that are currently in flight
		 */
		g(this, B, 0);
		/**
		 * A deferred that resolves when the batch is committed, used with `settled()`
		 * TODO replace with Promise.withResolvers once supported widely enough
		 * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
		 */
		g(this, Ot, null);
		/**
		 * True if an async effect inside this batch resolved and
		 * its parent branch was already deleted
		 */
		g(this, St, !1);
		/**
		 * Async effects (created inside `async_derived`) encountered during processing.
		 * These run after the rest of the batch has updated, since they should
		 * always have the latest values
		 * @type {Effect[]}
		 */
		g(this, Q, []);
		/**
		 * The same as `#async_effects`, but for effects inside a newly-created
		 * `<svelte:boundary>` — these do not prevent the batch from committing
		 * @type {Effect[]}
		 */
		g(this, $t, []);
		/**
		 * Template effects and `$effect.pre` effects, which run when
		 * a batch is committed
		 * @type {Effect[]}
		 */
		g(this, U, []);
		/**
		 * The same as `#render_effects`, but for `$effect` (which runs after)
		 * @type {Effect[]}
		 */
		g(this, j, []);
		/**
		 * Block effects, which may need to re-run on subsequent flushes
		 * in order to update internal sources (e.g. each block items)
		 * @type {Effect[]}
		 */
		g(this, X, []);
		/**
		 * A set of branches that still exist, but will be destroyed when this batch
		 * is committed — we skip over these during `process`
		 * @type {Set<Effect>}
		 */
		T(this, 'skipped_effects', /* @__PURE__ */ new Set());
	}
	/**
	 * Associate a change to a given source with the current
	 * batch, noting its previous and current values
	 * @param {Source} source
	 * @param {any} value
	 */
	capture(e, n) {
		(_(this, vt).has(e) || _(this, vt).set(e, n), _(this, Nt).set(e, e.v));
	}
	activate() {
		A = this;
	}
	deactivate() {
		A = null;
		for (const e of be) if ((be.delete(e), e(), A !== null)) break;
	}
	neuter() {
		k(this, St, !0);
	}
	flush() {
		(ct.length > 0 ? this.flush_effects() : bt(this, Y, ie).call(this),
			A === this && (_(this, B) === 0 && Ft.delete(this), this.deactivate()));
	}
	flush_effects() {
		var e = _t;
		se = !0;
		try {
			var n = 0;
			for (Te(!0); ct.length > 0; ) {
				if (n++ > 1e3) {
					var r, s;
					tr();
				}
				(bt(this, Y, Qe).call(this, ct), nt.clear());
			}
		} finally {
			((se = !1), Te(e), (Gt = null));
		}
	}
	increment() {
		k(this, B, _(this, B) + 1);
	}
	decrement() {
		if ((k(this, B, _(this, B) - 1), _(this, B) === 0)) {
			for (const e of _(this, U)) (E(e, O), et(e));
			for (const e of _(this, j)) (E(e, O), et(e));
			for (const e of _(this, X)) (E(e, O), et(e));
			(k(this, U, []), k(this, j, []), this.flush());
		} else this.deactivate();
	}
	/** @param {() => void} fn */
	add_callback(e) {
		_(this, dt).add(e);
	}
	settled() {
		var e;
		return ((e = _(this, Ot)) != null ? e : k(this, Ot, On())).promise;
	}
	static ensure(e = !0) {
		if (A === null) {
			const n = (A = new Kt());
			(Ft.add(A),
				e &&
					Kt.enqueue(() => {
						A === n && n.flush();
					}));
		}
		return A;
	}
	/** @param {() => void} task */
	static enqueue(e) {
		(Bt.length === 0 && queueMicrotask(Ze), Bt.unshift(e));
	}
};
((Nt = new WeakMap()),
	(vt = new WeakMap()),
	(dt = new WeakMap()),
	(B = new WeakMap()),
	(Ot = new WeakMap()),
	(St = new WeakMap()),
	(Q = new WeakMap()),
	($t = new WeakMap()),
	(U = new WeakMap()),
	(j = new WeakMap()),
	(X = new WeakMap()),
	(Y = new WeakSet()) /**
	 *
	 * @param {Effect[]} root_effects
	 */,
	(Qe = function (e) {
		var i;
		ct = [];
		var n = null;
		if (Ft.size > 1) {
			((n = /* @__PURE__ */ new Map()), (V = /* @__PURE__ */ new Map()));
			for (const [f, u] of _(this, Nt)) (n.set(f, { v: f.v, wv: f.wv }), (f.v = u));
			for (const f of Ft)
				if (f !== this)
					for (const [u, l] of _(f, vt)) n.has(u) || (n.set(u, { v: u.v, wv: u.wv }), (u.v = l));
		}
		for (const f of e) bt(this, Y, Xe).call(this, f);
		if (_(this, Q).length === 0 && _(this, B) === 0) {
			var r = _(this, U),
				s = _(this, j);
			(k(this, U, []),
				k(this, j, []),
				k(this, X, []),
				bt(this, Y, ie).call(this),
				Ee(r),
				Ee(s),
				(i = _(this, Ot)) == null || i.resolve());
		} else {
			for (const f of _(this, U)) E(f, b);
			for (const f of _(this, j)) E(f, b);
			for (const f of _(this, X)) E(f, b);
		}
		if (n) {
			for (const [f, { v: u, wv: l }] of n) f.wv <= l && (f.v = u);
			V = null;
		}
		for (const f of _(this, Q)) Tt(f);
		for (const f of _(this, $t)) Tt(f);
		(k(this, Q, []), k(this, $t, []));
	}) /**
	 * Traverse the effect tree, executing effects or stashing
	 * them for later execution as appropriate
	 * @param {Effect} root
	 */,
	(Xe = function (e) {
		var o;
		e.f ^= b;
		for (var n = e.first; n !== null; ) {
			var r = n.f,
				s = (r & (st | it)) !== 0,
				i = s && (r & b) !== 0,
				f = i || (r & wt) !== 0 || this.skipped_effects.has(n);
			if (!f && n.fn !== null) {
				if (s) n.f ^= b;
				else if ((r & Me) !== 0) _(this, j).push(n);
				else if (Zt(n))
					if ((r & ce) !== 0) {
						var u = (o = n.b) != null && o.pending ? _(this, $t) : _(this, Q);
						u.push(n);
					} else ((n.f & Wt) !== 0 && _(this, X).push(n), Tt(n));
				var l = n.first;
				if (l !== null) {
					n = l;
					continue;
				}
			}
			var a = n.parent;
			for (n = n.next; n === null && a !== null; ) ((n = a.next), (a = a.parent));
		}
	}) /**
	 * Append and remove branches to/from the DOM
	 */,
	(ie = function () {
		if (!_(this, St)) for (const e of _(this, dt)) e();
		_(this, dt).clear();
	}));
let gt = Kt;
function tn(t) {
	var e;
	const n = gt.ensure(!1);
	for (;;) {
		if ((Wn(), ct.length === 0)) return (n === A && n.flush(), (Gt = null), /** @type {T} */ e);
		n.flush_effects();
	}
}
function tr() {
	try {
		Mn();
	} catch (t) {
		ve(t, Gt);
	}
}
function Ee(t) {
	var e = t.length;
	if (e !== 0) {
		for (var n = 0; n < e; n++) {
			var r = t[n];
			if ((r.f & (ut | wt)) === 0 && Zt(r)) {
				var s = Vt;
				if (
					(Tt(r),
					r.deps === null &&
						r.first === null &&
						r.nodes_start === null &&
						(r.teardown === null && r.ac === null ? an(r) : (r.fn = null)),
					Vt > s && (r.f & je) !== 0)
				)
					break;
			}
		}
		for (; n < e; n += 1) et(t[n]);
	}
}
function et(t) {
	for (var e = (Gt = t); e.parent !== null; ) {
		e = e.parent;
		var n = e.f;
		if (se && e === $ && (n & Wt) !== 0) return;
		if ((n & (it | st)) !== 0) {
			if ((n & b) === 0) return;
			e.f ^= b;
		}
	}
	ct.push(e);
}
const nt = /* @__PURE__ */ new Map();
function $e(t, e) {
	var n = {
		f: 0,
		// TODO ideally we could skip this altogether, but it causes type errors
		v: t,
		reactions: null,
		equals: Ye,
		rv: 0,
		wv: 0
	};
	return n;
}
// @__NO_SIDE_EFFECTS__
function L(t, e) {
	const n = $e(t);
	return ($r(n), n);
}
// @__NO_SIDE_EFFECTS__
function er(t, e = !1, n = !0) {
	const r = $e(t);
	return (e || (r.equals = Hn), r);
}
function M(t, e, n = !1) {
	d !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
		// to ensure we error if state is set inside an inspect effect
		(!Z || (d.f & me) !== 0) &&
		Ue() &&
		(d.f & (S | Wt | ce | me)) !== 0 &&
		!(x != null && x.includes(t)) &&
		jn();
	let r = n ? Et(e) : e;
	return le(t, r);
}
function le(t, e) {
	if (!t.equals(e)) {
		var n = t.v;
		(yt ? nt.set(t, e) : nt.set(t, n),
			(t.v = e),
			gt.ensure().capture(t, n),
			(t.f & S) !== 0 &&
				((t.f & O) !== 0 &&
					de(
						/** @type {Derived} */
						t
					),
				E(t, (t.f & D) === 0 ? b : lt)),
			(t.wv = cn()),
			en(t, O),
			$ !== null &&
				($.f & b) !== 0 &&
				($.f & (st | it)) === 0 &&
				(C === null ? pr([t]) : C.push(t)));
	}
	return e;
}
function ee(t) {
	M(t, t.v + 1);
}
function en(t, e) {
	var n = t.reactions;
	if (n !== null)
		for (var r = n.length, s = 0; s < r; s++) {
			var i = n[s],
				f = i.f;
			((f & O) === 0 && E(i, e),
				(f & S) !== 0
					? en(
							/** @type {Derived} */
							i,
							lt
						)
					: (f & O) === 0 &&
						et(
							/** @type {Effect} */
							i
						));
		}
}
function Et(t) {
	if (typeof t != 'object' || t === null || te in t) return t;
	const e = Nn(t);
	if (e !== kn && e !== Rn) return t;
	var n = /* @__PURE__ */ new Map(),
		r = Pe(t),
		s = /* @__PURE__ */ L(0),
		i = rt,
		f = (u) => {
			if (rt === i) return u();
			var l = d,
				a = rt;
			(G(null), Re(i));
			var o = u();
			return (G(l), Re(a), o);
		};
	return (
		r &&
			n.set(
				'length',
				/* @__PURE__ */ L(
					/** @type {any[]} */
					t.length
				)
			),
		new Proxy(
			/** @type {any} */
			t,
			{
				defineProperty(u, l, a) {
					(!('value' in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) &&
						In();
					var o = n.get(l);
					return (
						o === void 0
							? (o = f(() => {
									var c = /* @__PURE__ */ L(a.value);
									return (n.set(l, c), c);
								}))
							: M(o, a.value, !0),
						!0
					);
				},
				deleteProperty(u, l) {
					var a = n.get(l);
					if (a === void 0) {
						if (l in u) {
							const o = f(() => /* @__PURE__ */ L(m));
							(n.set(l, o), ee(s));
						}
					} else (M(a, m), ee(s));
					return !0;
				},
				get(u, l, a) {
					var v;
					if (l === te) return t;
					var o = n.get(l),
						c = l in u;
					if (
						(o === void 0 &&
							(!c || ((v = ht(u, l)) != null && v.writable)) &&
							((o = f(() => {
								var p = Et(c ? u[l] : m),
									w = /* @__PURE__ */ L(p);
								return w;
							})),
							n.set(l, o)),
						o !== void 0)
					) {
						var h = F(o);
						return h === m ? void 0 : h;
					}
					return Reflect.get(u, l, a);
				},
				getOwnPropertyDescriptor(u, l) {
					var a = Reflect.getOwnPropertyDescriptor(u, l);
					if (a && 'value' in a) {
						var o = n.get(l);
						o && (a.value = F(o));
					} else if (a === void 0) {
						var c = n.get(l),
							h = c == null ? void 0 : c.v;
						if (c !== void 0 && h !== m)
							return {
								enumerable: !0,
								configurable: !0,
								value: h,
								writable: !0
							};
					}
					return a;
				},
				has(u, l) {
					var h;
					if (l === te) return !0;
					var a = n.get(l),
						o = (a !== void 0 && a.v !== m) || Reflect.has(u, l);
					if (a !== void 0 || ($ !== null && (!o || ((h = ht(u, l)) != null && h.writable)))) {
						a === void 0 &&
							((a = f(() => {
								var v = o ? Et(u[l]) : m,
									p = /* @__PURE__ */ L(v);
								return p;
							})),
							n.set(l, a));
						var c = F(a);
						if (c === m) return !1;
					}
					return o;
				},
				set(u, l, a, o) {
					var J;
					var c = n.get(l),
						h = l in u;
					if (r && l === 'length')
						for (var v = a; v < /** @type {Source<number>} */ c.v; v += 1) {
							var p = n.get(v + '');
							p !== void 0
								? M(p, m)
								: v in u && ((p = f(() => /* @__PURE__ */ L(m))), n.set(v + '', p));
						}
					if (c === void 0)
						(!h || ((J = ht(u, l)) != null && J.writable)) &&
							((c = f(() => /* @__PURE__ */ L(void 0))), M(c, Et(a)), n.set(l, c));
					else {
						h = c.v !== m;
						var w = f(() => Et(a));
						M(c, w);
					}
					var H = Reflect.getOwnPropertyDescriptor(u, l);
					if ((H != null && H.set && H.set.call(o, a), !h)) {
						if (r && typeof l == 'string') {
							var Ct =
									/** @type {Source<number>} */
									n.get('length'),
								at = Number(l);
							Number.isInteger(at) && at >= Ct.v && M(Ct, at + 1);
						}
						ee(s);
					}
					return !0;
				},
				ownKeys(u) {
					F(s);
					var l = Reflect.ownKeys(u).filter((c) => {
						var h = n.get(c);
						return h === void 0 || h.v !== m;
					});
					for (var [a, o] of n) o.v !== m && !(a in u) && l.push(a);
					return l;
				},
				setPrototypeOf() {
					Ln();
				}
			}
		)
	);
}
var xe, nn, rn, sn;
function ue() {
	if (xe === void 0) {
		((xe = window), (nn = /Firefox/.test(navigator.userAgent)));
		var t = Element.prototype,
			e = Node.prototype,
			n = Text.prototype;
		((rn = ht(e, 'firstChild').get),
			(sn = ht(e, 'nextSibling').get),
			ge(t) &&
				((t.__click = void 0),
				(t.__className = void 0),
				(t.__attributes = null),
				(t.__style = void 0),
				(t.__e = void 0)),
			ge(n) && (n.__t = void 0));
	}
}
function ln(t = '') {
	return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ut(t) {
	return rn.call(t);
}
// @__NO_SIDE_EFFECTS__
function Jt(t) {
	return sn.call(t);
}
function nr(t, e) {
	if (!K) return /* @__PURE__ */ Ut(t);
	var n =
		/** @type {TemplateNode} */
		/* @__PURE__ */ Ut(R);
	return (n === null && (n = R.appendChild(ln())), Yt(n), n);
}
function rr(t) {
	t.textContent = '';
}
function sr(t, e) {
	var n = e.last;
	n === null ? (e.last = e.first = t) : ((n.next = t), (t.prev = n), (e.last = t));
}
function ft(t, e, n, r = !0) {
	var l;
	var s = $;
	s !== null && (s.f & wt) !== 0 && (t |= wt);
	var i = {
		ctx: I,
		deps: null,
		nodes_start: null,
		nodes_end: null,
		f: t | O,
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
			(Tt(i), (i.f |= Le));
		} catch (a) {
			throw (W(i), a);
		}
	else e !== null && et(i);
	var f =
		n &&
		i.deps === null &&
		i.first === null &&
		i.nodes_start === null &&
		i.teardown === null &&
		(i.f & oe) === 0;
	if (!f && r && (s !== null && sr(i, s), d !== null && (d.f & S) !== 0)) {
		var u =
			/** @type {Derived} */
			d;
		((l = u.effects) != null ? l : (u.effects = [])).push(i);
	}
	return i;
}
function ir(t) {
	return ft(Me | je, t, !1);
}
function lr(t) {
	gt.ensure();
	const e = ft(it, t, !0);
	return () => {
		W(e);
	};
}
function ur(t) {
	gt.ensure();
	const e = ft(it, t, !0);
	return (n = {}) =>
		new Promise((r) => {
			n.outro
				? vr(e, () => {
						(W(e), r(void 0));
					})
				: (W(e), r(void 0));
		});
}
function fr(t) {
	return ft(ce | oe, t, !0);
}
function ar(t, e = 0) {
	return ft(Fe | e, t, !0);
}
function or(t, e = [], n = []) {
	Qn(e, n, (r) => {
		ft(Fe, () => t(...r.map(F)), !0);
	});
}
function cr(t, e = !0) {
	return ft(st, t, !0, e);
}
function un(t) {
	var e = t.teardown;
	if (e !== null) {
		const n = yt,
			r = d;
		(ke(!0), G(null));
		try {
			e.call(null);
		} finally {
			(ke(n), G(r));
		}
	}
}
function fn(t, e = !1) {
	var s;
	var n = t.first;
	for (t.first = t.last = null; n !== null; ) {
		(s = n.ac) == null || s.abort(he);
		var r = n.next;
		((n.f & it) !== 0 ? (n.parent = null) : W(n, e), (n = r));
	}
}
function hr(t) {
	for (var e = t.first; e !== null; ) {
		var n = e.next;
		((e.f & st) === 0 && W(e), (e = n));
	}
}
function W(t, e = !0) {
	var n = !1;
	((e || (t.f & An) !== 0) &&
		t.nodes_start !== null &&
		t.nodes_end !== null &&
		(_r(
			t.nodes_start,
			/** @type {TemplateNode} */
			t.nodes_end
		),
		(n = !0)),
		fn(t, e && !n),
		zt(t, 0),
		E(t, ut));
	var r = t.transitions;
	if (r !== null) for (const i of r) i.stop();
	un(t);
	var s = t.parent;
	(s !== null && s.first !== null && an(t),
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
function _r(t, e) {
	for (; t !== null; ) {
		var n =
			t === e
				? null
				: /** @type {TemplateNode} */
					/* @__PURE__ */ Jt(t);
		(t.remove(), (t = n));
	}
}
function an(t) {
	var e = t.parent,
		n = t.prev,
		r = t.next;
	(n !== null && (n.next = r),
		r !== null && (r.prev = n),
		e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n)));
}
function vr(t, e) {
	var n = [];
	(on(t, n, !0),
		dr(n, () => {
			(W(t), e && e());
		}));
}
function dr(t, e) {
	var n = t.length;
	if (n > 0) {
		var r = () => --n || e();
		for (var s of t) s.out(r);
	} else e();
}
function on(t, e, n) {
	if ((t.f & wt) === 0) {
		if (((t.f ^= wt), t.transitions !== null))
			for (const f of t.transitions) (f.is_global || n) && e.push(f);
		for (var r = t.first; r !== null; ) {
			var s = r.next,
				i = (r.f & Sn) !== 0 || (r.f & st) !== 0;
			(on(r, e, i ? n : !1), (r = s));
		}
	}
}
let _t = !1;
function Te(t) {
	_t = t;
}
let yt = !1;
function ke(t) {
	yt = t;
}
let d = null,
	Z = !1;
function G(t) {
	d = t;
}
let $ = null;
function mt(t) {
	$ = t;
}
let x = null;
function $r(t) {
	d !== null && (x === null ? (x = [t]) : x.push(t));
}
let y = null,
	N = 0,
	C = null;
function pr(t) {
	C = t;
}
let Vt = 1,
	Rt = 0,
	rt = Rt;
function Re(t) {
	rt = t;
}
let z = !1;
function cn() {
	return ++Vt;
}
function Zt(t) {
	var c, h;
	var e = t.f;
	if ((e & O) !== 0) return !0;
	if ((e & lt) !== 0) {
		var n = t.deps,
			r = (e & D) !== 0;
		if (n !== null) {
			var s,
				i,
				f = (e & qt) !== 0,
				u = r && $ !== null && !z,
				l = n.length;
			if ((f || u) && ($ === null || ($.f & ut) === 0)) {
				var a =
						/** @type {Derived} */
						t,
					o = a.parent;
				for (s = 0; s < l; s++)
					((i = n[s]),
						(f || !((c = i == null ? void 0 : i.reactions) != null && c.includes(a))) &&
							((h = i.reactions) != null ? h : (i.reactions = [])).push(a));
				(f && (a.f ^= qt), u && o !== null && (o.f & D) === 0 && (a.f ^= D));
			}
			for (s = 0; s < l; s++)
				if (
					((i = n[s]),
					Zt(
						/** @type {Derived} */
						i
					) &&
						Ge(
							/** @type {Derived} */
							i
						),
					i.wv > t.wv)
				)
					return !0;
		}
		(!r || ($ !== null && !z)) && E(t, b);
	}
	return !1;
}
function hn(t, e, n = !0) {
	var r = t.reactions;
	if (r !== null && !(x != null && x.includes(t)))
		for (var s = 0; s < r.length; s++) {
			var i = r[s];
			(i.f & S) !== 0
				? hn(
						/** @type {Derived} */
						i,
						e,
						!1
					)
				: e === i &&
					(n ? E(i, O) : (i.f & b) !== 0 && E(i, lt),
					et(
						/** @type {Effect} */
						i
					));
		}
}
function _n(t) {
	var p, w;
	var e = y,
		n = N,
		r = C,
		s = d,
		i = z,
		f = x,
		u = I,
		l = Z,
		a = rt,
		o = t.f;
	((y = /** @type {null | Value[]} */ null),
		(N = 0),
		(C = null),
		(z = (o & D) !== 0 && (Z || !_t || d === null)),
		(d = (o & (st | it)) === 0 ? t : null),
		(x = null),
		Ht(t.ctx),
		(Z = !1),
		(rt = ++Rt),
		t.ac !== null && (t.ac.abort(he), (t.ac = null)));
	try {
		t.f |= ne;
		var c =
				/** @type {Function} */
				(0, t.fn)(),
			h = t.deps;
		if (y !== null) {
			var v;
			if ((zt(t, N), h !== null && N > 0))
				for (h.length = N + y.length, v = 0; v < y.length; v++) h[N + v] = y[v];
			else t.deps = h = y;
			if (
				!z || // Deriveds that already have reactions can cleanup, so we still add them as reactions
				((o & S) !== 0 && /** @type {import('#client').Derived} */ t.reactions !== null)
			)
				for (v = N; v < h.length; v++)
					((w = (p = h[v]).reactions) != null ? w : (p.reactions = [])).push(t);
		} else h !== null && N < h.length && (zt(t, N), (h.length = N));
		if (Ue() && C !== null && !Z && h !== null && (t.f & (S | lt | O)) === 0)
			for (v = 0; v < /** @type {Source[]} */ C.length; v++)
				hn(
					C[v],
					/** @type {Effect} */
					t
				);
		return (
			s !== null &&
				s !== t &&
				(Rt++, C !== null && (r === null ? (r = C) : r.push(.../** @type {Source[]} */ C))),
			(t.f & tt) !== 0 && (t.f ^= tt),
			c
		);
	} catch (H) {
		return Vn(H);
	} finally {
		((t.f ^= ne), (y = e), (N = n), (C = r), (d = s), (z = i), (x = f), Ht(u), (Z = l), (rt = a));
	}
}
function wr(t, e) {
	let n = e.reactions;
	if (n !== null) {
		var r = xn.call(n, t);
		if (r !== -1) {
			var s = n.length - 1;
			s === 0 ? (n = e.reactions = null) : ((n[r] = n[s]), n.pop());
		}
	}
	n === null &&
		(e.f & S) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
		// to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
		// allows us to skip the expensive work of disconnecting and immediately reconnecting it
		(y === null || !y.includes(e)) &&
		(E(e, lt),
		(e.f & (D | qt)) === 0 && (e.f ^= qt),
		We(
			/** @type {Derived} **/
			e
		),
		zt(
			/** @type {Derived} **/
			e,
			0
		));
}
function zt(t, e) {
	var n = t.deps;
	if (n !== null) for (var r = e; r < n.length; r++) wr(t, n[r]);
}
function Tt(t) {
	var e = t.f;
	if ((e & ut) === 0) {
		E(t, b);
		var n = $,
			r = _t;
		(($ = t), (_t = !0));
		try {
			((e & Wt) !== 0 ? hr(t) : fn(t), un(t));
			var s = _n(t);
			((t.teardown = typeof s == 'function' ? s : null), (t.wv = Vt));
			var i;
			Ce && Bn && (t.f & O) !== 0 && t.deps;
		} finally {
			((_t = r), ($ = n));
		}
	}
}
function F(t) {
	var a;
	var e = t.f,
		n = (e & S) !== 0;
	if (d !== null && !Z) {
		var r = $ !== null && ($.f & ut) !== 0;
		if (!r && !(x != null && x.includes(t))) {
			var s = d.deps;
			if ((d.f & ne) !== 0)
				t.rv < Rt &&
					((t.rv = Rt),
					y === null && s !== null && s[N] === t
						? N++
						: y === null
							? (y = [t])
							: (!z || !y.includes(t)) && y.push(t));
			else {
				((a = d.deps) != null ? a : (d.deps = [])).push(t);
				var i = t.reactions;
				i === null ? (t.reactions = [d]) : i.includes(d) || i.push(d);
			}
		}
	} else if (
		n &&
		/** @type {Derived} */
		t.deps === null &&
		/** @type {Derived} */
		t.effects === null
	) {
		var f =
				/** @type {Derived} */
				t,
			u = f.parent;
		u !== null && (u.f & D) === 0 && (f.f ^= D);
	}
	if (yt) {
		if (nt.has(t)) return nt.get(t);
		if (n) {
			f = /** @type {Derived} */ t;
			var l = f.v;
			return ((((f.f & b) === 0 && f.reactions !== null) || vn(f)) && (l = de(f)), nt.set(f, l), l);
		}
	} else if (n) {
		if (((f = /** @type {Derived} */ t), V != null && V.has(f))) return V.get(f);
		Zt(f) && Ge(f);
	}
	if ((t.f & tt) !== 0) throw t.v;
	return t.v;
}
function vn(t) {
	if (t.v === m) return !0;
	if (t.deps === null) return !1;
	for (const e of t.deps)
		if (
			nt.has(e) ||
			((e.f & S) !== 0 &&
				vn(
					/** @type {Derived} */
					e
				))
		)
			return !0;
	return !1;
}
const gr = -7169;
function E(t, e) {
	t.f = (t.f & gr) | e;
}
const mr = /* @__PURE__ */ new Set(),
	Ne = /* @__PURE__ */ new Set();
function It(t) {
	var at;
	var e = this,
		n =
			/** @type {Node} */
			e.ownerDocument,
		r = t.type,
		s = ((at = t.composedPath) == null ? void 0 : at.call(t)) || [],
		i =
			/** @type {null | Element} */
			s[0] || t.target,
		f = 0,
		u = t.__root;
	if (u) {
		var l = s.indexOf(u);
		if (l !== -1 && (e === document || e === /** @type {any} */ window)) {
			t.__root = e;
			return;
		}
		var a = s.indexOf(e);
		if (a === -1) return;
		l <= a && (f = l);
	}
	if (((i = /** @type {Element} */ s[f] || t.target), i !== e)) {
		pt(t, 'currentTarget', {
			configurable: !0,
			get() {
				return i || n;
			}
		});
		var o = d,
			c = $;
		(G(null), mt(null));
		try {
			for (var h, v = []; i !== null; ) {
				var p = i.assignedSlot || i.parentNode || /** @type {any} */ i.host || null;
				try {
					var w = i['__' + r];
					if (
						w != null &&
						(!(/** @type {any} */ i.disabled) || // DOM could've been updated already by the time this is reached, so we check this as well
							// -> the target could not have been disabled because it emits the event in the first place
							t.target === i)
					)
						if (Pe(w)) {
							var [H, ...Ct] = w;
							H.apply(i, [t, ...Ct]);
						} else w.call(i, t);
				} catch (J) {
					h ? v.push(J) : (h = J);
				}
				if (t.cancelBubble || p === e || p === null) break;
				i = p;
			}
			if (h) {
				for (let J of v)
					queueMicrotask(() => {
						throw J;
					});
				throw h;
			}
		} finally {
			((t.__root = e), delete t.currentTarget, G(o), mt(c));
		}
	}
}
function yr(t) {
	var e = document.createElement('template');
	return ((e.innerHTML = t.replaceAll('<!>', '<!---->')), e.content);
}
function fe(t, e) {
	var n =
		/** @type {Effect} */
		$;
	n.nodes_start === null && ((n.nodes_start = t), (n.nodes_end = e));
}
// @__NO_SIDE_EFFECTS__
function br(t, e) {
	var n = (e & 2) !== 0,
		r,
		s = !t.startsWith('<!>');
	return () => {
		if (K) return (fe(R, null), R);
		r === void 0 && ((r = yr(s ? t : '<!>' + t)), (r = /** @type {Node} */ /* @__PURE__ */ Ut(r)));
		var i =
			/** @type {TemplateNode} */
			n || nn ? document.importNode(r, !0) : r.cloneNode(!0);
		return (fe(i, i), i);
	};
}
function dn(t, e) {
	if (K) {
		(($.nodes_end = R), qe());
		return;
	}
	t !== null &&
		t.before(
			/** @type {Node} */
			e
		);
}
const Er = ['touchstart', 'touchmove'];
function xr(t) {
	return Er.includes(t);
}
function Tr(t, e) {
	var r;
	var n = e == null ? '' : typeof e == 'object' ? e + '' : e;
	n !== ((r = t.__t) != null ? r : (t.__t = t.nodeValue)) && ((t.__t = n), (t.nodeValue = n + ''));
}
function $n(t, e) {
	return pn(t, e);
}
function kr(t, e) {
	var f;
	(ue(), (e.intro = (f = e.intro) != null ? f : !1));
	const n = e.target,
		r = K,
		s = R;
	try {
		for (
			var i =
				/** @type {TemplateNode} */
				/* @__PURE__ */ Ut(n);
			i && (i.nodeType !== ye || /** @type {Comment} */ i.data !== '[');

		)
			i = /** @type {TemplateNode} */ /* @__PURE__ */ Jt(i);
		if (!i) throw xt;
		(Mt(!0),
			Yt(
				/** @type {Comment} */
				i
			),
			qe());
		const u = pn(t, Dt(Pt({}, e), { anchor: i }));
		if (R === null || R.nodeType !== ye || /** @type {Comment} */ R.data !== ']') throw (_e(), xt);
		return (Mt(!1), /**  @type {Exports} */ u);
	} catch (u) {
		if (u === xt) return (e.recover === !1 && Fn(), ue(), rr(n), Mt(!1), $n(t, e));
		throw u;
	} finally {
		(Mt(r), Yt(s));
	}
}
const ot = /* @__PURE__ */ new Map();
function pn(t, { target: e, anchor: n, props: r = {}, events: s, context: i, intro: f = !0 }) {
	ue();
	var u = /* @__PURE__ */ new Set(),
		l = (c) => {
			for (var h = 0; h < c.length; h++) {
				var v = c[h];
				if (!u.has(v)) {
					u.add(v);
					var p = xr(v);
					e.addEventListener(v, It, { passive: p });
					var w = ot.get(v);
					w === void 0
						? (document.addEventListener(v, It, { passive: p }), ot.set(v, 1))
						: ot.set(v, w + 1);
				}
			}
		};
	(l(Tn(mr)), Ne.add(l));
	var a = void 0,
		o = ur(() => {
			var c = n != null ? n : e.appendChild(ln());
			return (
				cr(() => {
					if (i) {
						He({});
						var h =
							/** @type {ComponentContext} */
							I;
						h.c = i;
					}
					(s && (r.$$events = s),
						K &&
							fe(
								/** @type {TemplateNode} */
								c,
								null
							),
						(a = t(c, r) || {}),
						K && ($.nodes_end = R),
						i && Be());
				}),
				() => {
					var p;
					for (var h of u) {
						e.removeEventListener(h, It);
						var v =
							/** @type {number} */
							ot.get(h);
						--v === 0 ? (document.removeEventListener(h, It), ot.delete(h)) : ot.set(h, v);
					}
					(Ne.delete(l), c !== n && ((p = c.parentNode) == null || p.removeChild(c)));
				}
			);
		});
	return (ae.set(a, o), a);
}
let ae = /* @__PURE__ */ new WeakMap();
function Rr(t, e) {
	const n = ae.get(t);
	return n ? (ae.delete(t), n(e)) : Promise.resolve();
}
function Nr(t, e) {
	Kn(() => {
		var s;
		var n = t.getRootNode(),
			r =
				/** @type {ShadowRoot} */
				n.host
					? /** @type {ShadowRoot} */
						n
					: /** @type {Document} */
						(s = n.head) != null
						? s
						: /** @type {Document} */
							n.ownerDocument.head;
		if (!r.querySelector('#' + e.hash)) {
			const i = document.createElement('style');
			((i.id = e.hash), (i.textContent = e.code), r.appendChild(i));
		}
	});
}
function Or(t, e, n, r) {
	var s =
			/** @type {V} */
			r,
		i = !0,
		f = () => (i && ((i = !1), (s = /** @type {V} */ r)), s);
	t[e];
	var u;
	u = () => {
		var c =
			/** @type {V} */
			t[e];
		return c === void 0 ? f() : ((i = !0), c);
	};
	var l = !1,
		a = /* @__PURE__ */ Ke(() => ((l = !1), u())),
		o =
			/** @type {Effect} */
			$;
	return function (c, h) {
		if (arguments.length > 0) {
			const v = h ? F(a) : c;
			return (M(a, v), (l = !0), s !== void 0 && (s = v), c);
		}
		return (yt && l) || (o.f & ut) !== 0 ? a.v : F(a);
	};
}
function Sr(t) {
	return new Ar(t);
}
var q, P;
class Ar {
	/**
	 * @param {ComponentConstructorOptions & {
	 *  component: any;
	 * }} options
	 */
	constructor(e) {
		/** @type {any} */
		g(this, q);
		/** @type {Record<string, any>} */
		g(this, P);
		var i, f;
		var n = /* @__PURE__ */ new Map(),
			r = (u, l) => {
				var a = /* @__PURE__ */ er(l, !1, !1);
				return (n.set(u, a), a);
			};
		const s = new Proxy(Dt(Pt({}, e.props || {}), { $$events: {} }), {
			get(u, l) {
				var a;
				return F((a = n.get(l)) != null ? a : r(l, Reflect.get(u, l)));
			},
			has(u, l) {
				var a;
				return l === Cn
					? !0
					: (F((a = n.get(l)) != null ? a : r(l, Reflect.get(u, l))), Reflect.has(u, l));
			},
			set(u, l, a) {
				var o;
				return (M((o = n.get(l)) != null ? o : r(l, a), a), Reflect.set(u, l, a));
			}
		});
		(k(
			this,
			P,
			(e.hydrate ? kr : $n)(e.component, {
				target: e.target,
				anchor: e.anchor,
				props: s,
				context: e.context,
				intro: (i = e.intro) != null ? i : !1,
				recover: e.recover
			})
		),
			(!((f = e == null ? void 0 : e.props) != null && f.$$host) || e.sync === !1) && tn(),
			k(this, q, s.$$events));
		for (const u of Object.keys(_(this, P)))
			u === '$set' ||
				u === '$destroy' ||
				u === '$on' ||
				pt(this, u, {
					get() {
						return _(this, P)[u];
					},
					/** @param {any} value */
					set(l) {
						_(this, P)[u] = l;
					},
					enumerable: !0
				});
		((_(this, P).$set =
			/** @param {Record<string, any>} next */
			(u) => {
				Object.assign(s, u);
			}),
			(_(this, P).$destroy = () => {
				Rr(_(this, P));
			}));
	}
	/** @param {Record<string, any>} props */
	$set(e) {
		_(this, P).$set(e);
	}
	/**
	 * @param {string} event
	 * @param {(...args: any[]) => any} callback
	 * @returns {any}
	 */
	$on(e, n) {
		_(this, q)[e] = _(this, q)[e] || [];
		const r = (...s) => n.call(this, ...s);
		return (
			_(this, q)[e].push(r),
			() => {
				_(this, q)[e] = _(this, q)[e].filter(
					/** @param {any} fn */
					(s) => s !== r
				);
			}
		);
	}
	$destroy() {
		_(this, P).$destroy();
	}
}
((q = new WeakMap()), (P = new WeakMap()));
let wn;
typeof HTMLElement == 'function' &&
	(wn = class extends HTMLElement {
		/**
		 * @param {*} $$componentCtor
		 * @param {*} $$slots
		 * @param {*} use_shadow_dom
		 */
		constructor(e, n, r) {
			super();
			/** The Svelte component constructor */
			T(this, '$$ctor');
			/** Slots */
			T(this, '$$s');
			/** @type {any} The Svelte component instance */
			T(this, '$$c');
			/** Whether or not the custom element is connected */
			T(this, '$$cn', !1);
			/** @type {Record<string, any>} Component props data */
			T(this, '$$d', {});
			/** `true` if currently in the process of reflecting component props back to attributes */
			T(this, '$$r', !1);
			/** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
			T(this, '$$p_d', {});
			/** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
			T(this, '$$l', {});
			/** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
			T(this, '$$l_u', /* @__PURE__ */ new Map());
			/** @type {any} The managed render effect for reflecting attributes */
			T(this, '$$me');
			((this.$$ctor = e), (this.$$s = n), r && this.attachShadow({ mode: 'open' }));
		}
		/**
		 * @param {string} type
		 * @param {EventListenerOrEventListenerObject} listener
		 * @param {boolean | AddEventListenerOptions} [options]
		 */
		addEventListener(e, n, r) {
			if (((this.$$l[e] = this.$$l[e] || []), this.$$l[e].push(n), this.$$c)) {
				const s = this.$$c.$on(e, n);
				this.$$l_u.set(n, s);
			}
			super.addEventListener(e, n, r);
		}
		/**
		 * @param {string} type
		 * @param {EventListenerOrEventListenerObject} listener
		 * @param {boolean | AddEventListenerOptions} [options]
		 */
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
						(s !== 'default' && (f.name = s), dn(i, f));
					};
				};
				if ((await Promise.resolve(), !this.$$cn || this.$$c)) return;
				const n = {},
					r = Cr(this);
				for (const s of this.$$s)
					s in r &&
						(s === 'default' && !this.$$d.children
							? ((this.$$d.children = e(s)), (n.default = !0))
							: (n[s] = e(s)));
				for (const s of this.attributes) {
					const i = this.$$g_p(s.name);
					i in this.$$d || (this.$$d[i] = Lt(i, s.value, this.$$p_d, 'toProp'));
				}
				for (const s in this.$$p_d)
					!(s in this.$$d) && this[s] !== void 0 && ((this.$$d[s] = this[s]), delete this[s]);
				((this.$$c = Sr({
					component: this.$$ctor,
					target: this.shadowRoot || this,
					props: Dt(Pt({}, this.$$d), {
						$$slots: n,
						$$host: this
					})
				})),
					(this.$$me = lr(() => {
						ar(() => {
							var s;
							this.$$r = !0;
							for (const i of jt(this.$$c)) {
								if (!((s = this.$$p_d[i]) != null && s.reflect)) continue;
								this.$$d[i] = this.$$c[i];
								const f = Lt(i, this.$$d[i], this.$$p_d, 'toAttribute');
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
		// We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
		// and setting attributes through setAttribute etc, this is helpful
		/**
		 * @param {string} attr
		 * @param {string} _oldValue
		 * @param {string} newValue
		 */
		attributeChangedCallback(e, n, r) {
			var s;
			this.$$r ||
				((e = this.$$g_p(e)),
				(this.$$d[e] = Lt(e, r, this.$$p_d, 'toProp')),
				(s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
		}
		disconnectedCallback() {
			((this.$$cn = !1),
				Promise.resolve().then(() => {
					!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), (this.$$c = void 0));
				}));
		}
		/**
		 * @param {string} attribute_name
		 */
		$$g_p(e) {
			return (
				jt(this.$$p_d).find(
					(n) =>
						this.$$p_d[n].attribute === e || (!this.$$p_d[n].attribute && n.toLowerCase() === e)
				) || e
			);
		}
	});
function Lt(t, e, n, r) {
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
			// conversion already handled above
			case 'Number':
				return e != null ? +e : e;
			default:
				return e;
		}
}
function Cr(t) {
	const e = {};
	return (
		t.childNodes.forEach((n) => {
			e[
				/** @type {Element} node */
				n.slot || 'default'
			] = !0;
		}),
		e
	);
}
function Pr(t, e, n, r, s, i) {
	let f = class extends wn {
		constructor() {
			(super(t, n, s), (this.$$p_d = e));
		}
		static get observedAttributes() {
			return jt(e).map((u) => (e[u].attribute || u).toLowerCase());
		}
	};
	return (
		jt(e).forEach((u) => {
			pt(f.prototype, u, {
				get() {
					return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
				},
				set(l) {
					var c;
					((l = Lt(u, l, e)), (this.$$d[u] = l));
					var a = this.$$c;
					if (a) {
						var o = (c = ht(a, u)) == null ? void 0 : c.get;
						o ? (a[u] = l) : a.$set({ [u]: l });
					}
				}
			});
		}),
		r.forEach((u) => {
			pt(f.prototype, u, {
				get() {
					var l;
					return (l = this.$$c) == null ? void 0 : l[u];
				}
			});
		}),
		(t.element = /** @type {any} */ f),
		f
	);
}
var At;
class Dr {
	constructor() {
		g(this, At, /* @__PURE__ */ L('hello'));
		window.bridge = this;
	}
	get name() {
		return F(_(this, At));
	}
	set name(e) {
		M(_(this, At), e, !0);
	}
}
At = new WeakMap();
const Mr = new Dr(),
	Fr = '5';
var Oe, Se, Ae;
typeof window != 'undefined' &&
	((Ae = (Se = (Oe = window.__svelte) != null ? Oe : (window.__svelte = {})).v) != null
		? Ae
		: (Se.v = /* @__PURE__ */ new Set())
	).add(Fr);
var Ir = /* @__PURE__ */ br('<div class="hello svelte-1wzuf2w"> </div>');
const Lr = {
	hash: 'svelte-1wzuf2w',
	code: '.hello.svelte-1wzuf2w {padding:10px;border-radius:3px;border:1px solid rgba(255, 0, 0, 0.1);}'
};
function jr(t, e) {
	(He(e, !0), Nr(t, Lr));
	let n = Or(e, 'name');
	var r = Ir(),
		s = nr(r);
	return (
		qn(r),
		or(() => {
			var i, f;
			return Tr(s, `${(i = n()) != null ? i : ''}: ${(f = Mr.name) != null ? f : ''}`);
		}),
		dn(t, r),
		Be({
			get name() {
				return n();
			},
			set name(i) {
				(n(i), tn());
			}
		})
	);
}
customElements.define('next-hello', Pr(jr, { name: {} }, [], [], !0));
export { jr as Hello, Mr as bridge };
