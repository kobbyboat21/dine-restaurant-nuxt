import { ref, onMounted, watchEffect, cloneVNode, h as h$1, Fragment, defineComponent } from 'vue';

let e = 0;
function n$1() {
  return ++e;
}
function t$1() {
  return n$1();
}
function o$1(e2) {
  var l;
  if (e2 == null || e2.value == null)
    return null;
  let n2 = (l = e2.value.$el) != null ? l : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u(r2, n2, ...a) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u), t2;
}
var i$1 = Object.defineProperty;
var d = (t2, e2, r2) => e2 in t2 ? i$1(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
var n = (t2, e2, r2) => (d(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
let s$2 = class s {
  constructor() {
    n(this, "current", this.detect());
    n(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
};
let c$1 = new s$2();
function i(r2) {
  if (c$1.isServer)
    return null;
  if (r2 instanceof Node)
    return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n2 = o$1(r2);
    if (n2)
      return n2.ownerDocument;
  }
  return document;
}
let c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$1 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$1 || {}), T$1 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$1 || {}), F = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F || {});
function E$1(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = i(e2)) == null ? void 0 : t2.body) ? false : u(r2, { [0]() {
    return e2.matches(c);
  }, [1]() {
    let l = e2;
    for (; l !== null; ) {
      if (l.matches(c))
        return true;
      l = l.parentElement;
    }
    return false;
  } });
}
var y$1 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$1 || {});
function S$1(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let H = ["textarea", "input"].join(",");
function I(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, H)) != null ? t2 : false;
}
function O(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l) => {
    let o2 = r2(t2), i2 = r2(l);
    if (o2 === null || i2 === null)
      return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P(e2, r2, { sorted: t2 = true, relativeTo: l = null, skipElements: o2 = [] } = {}) {
  var m;
  let i2 = (m = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2 == null ? void 0 : e2.ownerDocument) != null ? m : document, n2 = Array.isArray(e2) ? t2 ? O(e2) : e2 : E$1(e2);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s3) => !o2.includes(s3))), l = l != null ? l : i2.activeElement;
  let x = (() => {
    if (r2 & 5)
      return 1;
    if (r2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = (() => {
    if (r2 & 1)
      return 0;
    if (r2 & 2)
      return Math.max(0, n2.indexOf(l)) - 1;
    if (r2 & 4)
      return Math.max(0, n2.indexOf(l)) + 1;
    if (r2 & 8)
      return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L = r2 & 32 ? { preventScroll: true } : {}, a = 0, d2 = n2.length, u2;
  do {
    if (a >= d2 || a + d2 <= 0)
      return 0;
    let s3 = p + a;
    if (r2 & 16)
      s3 = (s3 + d2) % d2;
    else {
      if (s3 < 0)
        return 3;
      if (s3 >= d2)
        return 1;
    }
    u2 = n2[s3], u2 == null || u2.focus(L), a += x;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && I(u2) && u2.select(), 2;
}
function r(t2, e2) {
  if (t2)
    return t2;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button")
    return "button";
}
function s$1(t2, e2) {
  let n2 = ref(r(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var u2;
    n2.value || o$1(e2) && o$1(e2) instanceof HTMLButtonElement && !((u2 = o$1(e2)) != null && u2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
var N = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a;
  let n2 = j(o2, e2), l = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static)
    return y(l);
  if (t2 & 1) {
    let d2 = (a = n2.unmount) == null || a ? 0 : 1;
    return u(d2, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l);
}
function y({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m, h2;
  let { as: n2, ...l } = T(r2, ["unmount", "static"]), a = (m = e2.default) == null ? void 0 : m.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p, f2] of Object.entries(o2))
      typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a = b(a != null ? a : []), Object.keys(l).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a != null ? a : [];
      if (!v(u2) || c2.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g, R) => R.indexOf(s3) === g).sort((s3, g) => s3.localeCompare(g)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p = j((h2 = u2.props) != null ? h2 : {}, l, d2), f2 = cloneVNode(u2, p, true);
      for (let s3 in p)
        s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p[s3]);
      return f2;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return h$1(n2, Object.assign({}, l, d2), { default: () => a });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e2 = {};
  for (let i2 of r2)
    for (let n2 in i2)
      n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2)
    Object.assign(t2, { [i2](n2, ...l) {
      let a = e2[i2];
      for (let d2 of a) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l);
      }
    } });
  return t2;
}
function E(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function T(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2)
    o2 in e2 && delete e2[o2];
  return e2;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var s2 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(s2 || {});
let f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(d2, { slots: o2, attrs: i2 }) {
  return () => {
    var t2;
    let { features: e2, ...r2 } = d2, n2 = { "aria-hidden": (e2 & 2) === 2 ? true : (t2 = r2["aria-hidden"]) != null ? t2 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A({ ourProps: n2, theirProps: r2, slot: {}, attrs: i2, slots: o2, name: "Hidden" });
  };
} });
var o = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o || {});
function t(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}

export { A, E$1 as E, N, O, P, S$1 as S, T, s$1 as a, o as b, T$1 as c, t as d, N$1 as e, f, c$1 as g, S as h, i, h as j, E as k, o$1 as o, s2 as s, t$1 as t, u, w };
//# sourceMappingURL=micro-task-b624b8d4.mjs.map
