import { watchEffect, ref, defineComponent, computed, onMounted, onUnmounted, h, Fragment, watch, provide, unref, inject, getCurrentInstance, Teleport, reactive, nextTick, normalizeClass, toRef, useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, shallowRef } from 'vue';
import { u as useUI, i as input, a as __nuxt_component_1 } from './Link-a292d72e.mjs';
import { m as mergeConfig, a as appConfig, _ as _export_sfc, l as looseToNumber } from '../server.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { g as c$1, i as i$1, f, s as s2, A as A$2, S as S$1, o as o$1, d as t$1, P, e as N$1$1, c as T$1, t as t$1$1, u as u$3, b as o, N as N$4, h as S$2, T as T$2 } from './micro-task-b624b8d4.mjs';
import { w as w$1, l as l$2, i as i$2, a as w$2, s as s$2, t as t$1$2, b as t$2, o as o$2, c as t$2$1 } from './usePopper-3eb33e86.mjs';
import { useEventBus } from '@vueuse/core';
import { twMerge, twJoin } from 'tailwind-merge';
import { t as defu } from '../../nitro/node-server.mjs';
import { u as useInjectButtonGroup, a as useFormGroup } from './Button-be65dc1b.mjs';

function E$1(n2, e2, o2, r) {
  c$1.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : window, n2.addEventListener(e2, o2, r), t2(() => n2.removeEventListener(e2, o2, r));
  });
}
var d$2 = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d$2 || {});
function n() {
  let o2 = ref(0);
  return w$1("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function B(t2) {
  if (!t2)
    return /* @__PURE__ */ new Set();
  if (typeof t2 == "function")
    return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r of t2.value) {
    let l2 = o$1(r);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(A$1 || {});
let ue = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$1, slots: r, expose: l2 }) {
  let o$12 = ref(null);
  l2({ el: o$12, $el: o$12 });
  let i2 = computed(() => i$1(o$12)), e2 = ref(false);
  onMounted(() => e2.value = true), onUnmounted(() => e2.value = false), $({ ownerDocument: i2 }, computed(() => e2.value && Boolean(t2.features & 16)));
  let m2 = z({ ownerDocument: i2, container: o$12, initialFocus: computed(() => t2.initialFocus) }, computed(() => e2.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o$12, containers: t2.containers, previousActiveElement: m2 }, computed(() => e2.value && Boolean(t2.features & 8)));
  let f$1 = n();
  function a2(u2) {
    let T2 = o$1(o$12);
    if (!T2)
      return;
    ((w2) => w2())(() => {
      u$3(f$1.value, { [d$2.Forwards]: () => {
        P(T2, N$1$1.First, { skipElements: [u2.relatedTarget] });
      }, [d$2.Backwards]: () => {
        P(T2, N$1$1.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s2$1 = ref(false);
  function F2(u2) {
    u2.key === "Tab" && (s2$1.value = true, requestAnimationFrame(() => {
      s2$1.value = false;
    }));
  }
  function H(u2) {
    if (!e2.value)
      return;
    let T2 = B(t2.containers);
    o$1(o$12) instanceof HTMLElement && T2.add(o$1(o$12));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$3(T2, d2) || (s2$1.value ? P(o$1(o$12), u$3(f$1.value, { [d$2.Forwards]: () => N$1$1.Next, [d$2.Backwards]: () => N$1$1.Previous }) | N$1$1.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S$1(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o$12, onKeydown: F2, onFocusout: H }, { features: d2, initialFocus: w2, containers: Q2, ...O } = t2;
    return h(Fragment, [Boolean(d2 & 4) && h(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: s2.Focusable }), A$2({ ourProps: T2, theirProps: { ...n$1, ...O }, slot: u2, attrs: n$1, slots: r, name: "FocusTrap" }), Boolean(d2 & 4) && h(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: s2.Focusable })]);
  };
} }), { features: A$1 });
function W$1(t2) {
  let n2 = ref(t$2.slice());
  return watch([t2], ([r], [l2]) => {
    l2 === true && r === false ? t$1(() => {
      n2.value.splice(0);
    }) : l2 === false && r === true && (n2.value = t$2.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r : null;
  };
}
function $({ ownerDocument: t2 }, n2) {
  let r = W$1(n2);
  onMounted(() => {
    watchEffect(() => {
      var l2, o2;
      n2.value || ((l2 = t2.value) == null ? void 0 : l2.activeElement) === ((o2 = t2.value) == null ? void 0 : o2.body) && S$1(r());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n2.value && S$1(r());
  });
}
function z({ ownerDocument: t2, container: n2, initialFocus: r }, l2) {
  let o$12 = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([n2, r, l2], (e2, m2) => {
      if (e2.every((a2, s2) => (m2 == null ? void 0 : m2[s2]) === a2) || !l2.value)
        return;
      let f2 = o$1(n2);
      f2 && t$1(() => {
        var F2, H;
        if (!i2.value)
          return;
        let a2 = o$1(r), s2 = (F2 = t2.value) == null ? void 0 : F2.activeElement;
        if (a2) {
          if (a2 === s2) {
            o$12.value = s2;
            return;
          }
        } else if (f2.contains(s2)) {
          o$12.value = s2;
          return;
        }
        a2 ? S$1(a2) : P(f2, N$1$1.First | N$1$1.NoScroll) === T$1.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o$12.value = (H = t2.value) == null ? void 0 : H.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o$12;
}
function J({ ownerDocument: t2, container: n2, containers: r, previousActiveElement: l2 }, o$12) {
  var i2;
  E$1((i2 = t2.value) == null ? void 0 : i2.defaultView, "focus", (e2) => {
    if (!o$12.value)
      return;
    let m2 = B(r);
    o$1(n2) instanceof HTMLElement && m2.add(o$1(n2));
    let f2 = l2.value;
    if (!f2)
      return;
    let a2 = e2.target;
    a2 && a2 instanceof HTMLElement ? N$3(m2, a2) ? (l2.value = a2, S$1(a2)) : (e2.preventDefault(), e2.stopPropagation(), S$1(f2)) : S$1(l2.value);
  }, true);
}
function N$3(t2, n2) {
  for (let r of t2)
    if (r.contains(n2))
      return true;
  return false;
}
function m$3(t2) {
  let e2 = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e2.value = t2.getSnapshot();
  })), e2;
}
function a$1(o2, r) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s2) {
    let i2 = r[e2].call(t2, ...s2);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o2 = ((l2 = e2.defaultView) != null ? l2 : window).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r = o2 - l2;
    n2.style(t2, "paddingRight", `${r}px`);
  } };
}
function w() {
  return t$2$1() ? { before({ doc: r, d: n2, meta: c2 }) {
    function o2(a2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(a2));
    }
    n2.microTask(() => {
      var s2;
      if (window.getComputedStyle(r.documentElement).scrollBehavior !== "auto") {
        let t2 = o$2();
        t2.style(r.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let a2 = (s2 = window.scrollY) != null ? s2 : window.pageYOffset, l2 = null;
      n2.addEventListener(r, "click", (t2) => {
        if (t2.target instanceof HTMLElement)
          try {
            let e2 = t2.target.closest("a");
            if (!e2)
              return;
            let { hash: f2 } = new URL(e2.href), i2 = r.querySelector(f2);
            i2 && !o2(i2) && (l2 = i2);
          } catch {
          }
      }, true), n2.addEventListener(r, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement)
          if (o2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && o2(e2.parentElement); )
              e2 = e2.parentElement;
            n2.style(e2, "overscrollBehavior", "contain");
          } else
            n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement)
          if (o2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); )
              e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else
            t2.preventDefault();
      }, { passive: false }), n2.add(() => {
        var e2;
        let t2 = (e2 = window.scrollY) != null ? e2 : window.pageYOffset;
        a2 !== t2 && window.scrollTo(0, a2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l$1() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$2(e2) {
  let n2 = {};
  for (let t2 of e2)
    Object.assign(n2, t2(n2));
  return n2;
}
let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o2;
  let t2 = (o2 = this.get(e2)) != null ? o2 : { doc: e2, count: 0, d: o$2(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o2 = { doc: e2, d: n2, meta: m$2(t2) }, c$12 = [w(), c(), l$1()];
  c$12.forEach(({ before: r }) => r == null ? void 0 : r(o2)), c$12.forEach(({ after: r }) => r == null ? void 0 : r(o2));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a.subscribe(() => {
  let e2 = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2)
    n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function d$1(t2, a$12, n2) {
  let i2 = m$3(a), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : void 0;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a$12], ([e2, m2], [r], o2) => {
    if (!e2 || !m2)
      return;
    a.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a.dispatch("POP", r != null ? r : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o$12) => {
    var a2;
    if (!f2.value)
      return;
    let e2 = o$1(d2);
    if (!e2)
      return;
    o$12(function() {
      var u2;
      if (!e2)
        return;
      let r = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r === 1 ? t.delete(e2) : t.set(e2, r - 1), r !== 1)
        return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
function N$2({ defaultContainers: o$12 = [], portals: i2, mainTreeNodeRef: H } = {}) {
  let t2 = ref(null), r = i$1(t2);
  function u2() {
    var l2, f2, a2;
    let n2 = [];
    for (let e2 of o$12)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i2 != null && i2.value)
      for (let e2 of i2.value)
        n2.push(e2);
    for (let e2 of (l2 = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l2 : [])
      e2 !== document.body && e2 !== document.head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$1(t2)) || e2.contains((a2 = (f2 = o$1(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a2.host) || n2.some((M) => e2.contains(M)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: t2, MainTreeNode() {
    return H != null ? null : h(f, { features: s2.Hidden, ref: t2 });
  } };
}
function v() {
  let o2 = ref(null);
  return { mainTreeNodeRef: o2, MainTreeNode() {
    return h(f, { features: s2.Hidden, ref: o2 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function s$1() {
  return inject(e, false);
}
let u$2 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$2({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r, name: "ForcePortalRoot" });
  };
} });
let u$1 = Symbol("StackContext");
var s = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s || {});
function y() {
  return inject(u$1, () => {
  });
}
function R$1({ type: o2, enabled: r, element: e2, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r, (n2, d2) => {
      n2 ? t2(0, o2, e2) : d2 === true && t2(1, o2, e2);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r.value && t2(1, o2, e2);
  }), provide(u$1, t2);
}
let u = Symbol("DescriptionContext");
function b() {
  let t2 = inject(u, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function S({ slot: t2 = ref({}), name: i2 = "Description", props: o2 = {} } = {}) {
  let e2 = ref([]);
  function s2(n2) {
    return e2.value.push(n2), () => {
      let r = e2.value.indexOf(n2);
      r !== -1 && e2.value.splice(r, 1);
    };
  }
  return provide(u, { register: s2, slot: t2, name: i2, props: o2 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${t$1$1()}` } }, setup(t2, { attrs: i2, slots: o2 }) {
  let e2 = b();
  return onMounted(() => onUnmounted(e2.register(t2.id))), () => {
    let { name: s2 = "Description", slot: n2 = ref({}), props: r = {} } = e2, { id: d2, ...l2 } = t2, c2 = { ...Object.entries(r).reduce((f2, [a2, g2]) => Object.assign(f2, { [a2]: unref(g2) }), {}), id: d2 };
    return A$2({ ourProps: c2, theirProps: l2, slot: n2.value, attrs: i2, slots: o2, name: s2 });
  };
} });
function x(r) {
  let e2 = i$1(r);
  if (!e2) {
    if (r === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${r}`);
  }
  let u2 = e2.getElementById("headlessui-portal-root");
  if (u2)
    return u2;
  let t2 = e2.createElement("div");
  return t2.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(t2);
}
let _ = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(r, { slots: e2, attrs: u2 }) {
  let t2 = ref(null), i2 = computed(() => i$1(t2)), l2 = s$1(), n2 = inject(C, null), o$12 = ref(l2 === true || n2 == null ? x(t2.value) : n2.resolveTarget()), d2 = ref(false);
  onMounted(() => {
    d2.value = true;
  }), watchEffect(() => {
    l2 || n2 != null && (o$12.value = n2.resolveTarget());
  });
  let c2 = inject(m$1, null), v2 = false, H = getCurrentInstance();
  return watch(t2, () => {
    if (v2 || !c2)
      return;
    let a2 = o$1(t2);
    a2 && (onUnmounted(c2.register(a2), H), v2 = true);
  }), onUnmounted(() => {
    var g2, P2;
    let a2 = (g2 = i2.value) == null ? void 0 : g2.getElementById("headlessui-portal-root");
    a2 && o$12.value === a2 && o$12.value.children.length <= 0 && ((P2 = o$12.value.parentElement) == null || P2.removeChild(o$12.value));
  }), () => {
    if (!d2.value || o$12.value === null)
      return null;
    let a2 = { ref: t2, "data-headlessui-portal": "" };
    return h(Teleport, { to: o$12.value }, A$2({ ourProps: a2, theirProps: r, slot: {}, attrs: u2, slots: e2, name: "Portal" }));
  };
} }), m$1 = Symbol("PortalParentContext");
function A() {
  let r = inject(m$1, null), e2 = ref([]);
  function u2(l2) {
    return e2.value.push(l2), r && r.register(l2), () => t2(l2);
  }
  function t2(l2) {
    let n2 = e2.value.indexOf(l2);
    n2 !== -1 && e2.value.splice(n2, 1), r && r.unregister(l2);
  }
  let i2 = { register: u2, unregister: t2, portals: e2 };
  return [e2, defineComponent({ name: "PortalWrapper", setup(l2, { slots: n2 }) {
    return provide(m$1, i2), () => {
      var o2;
      return (o2 = n2.default) == null ? void 0 : o2.call(n2);
    };
  } })];
}
let C = Symbol("PortalGroupContext"), N$1 = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(r, { attrs: e2, slots: u2 }) {
  let t2 = reactive({ resolveTarget() {
    return r.target;
  } });
  return provide(C, t2), () => {
    let { target: i2, ...l2 } = r;
    return A$2({ theirProps: l2, ourProps: {}, slot: {}, attrs: e2, slots: u2, name: "PortalGroup" });
  };
} });
var be = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(be || {});
let j = Symbol("DialogContext");
function T(t2) {
  let n2 = inject(j, null);
  if (n2 === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return n2;
}
let I = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", _e = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: I }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${t$1$1()}` }, role: { type: String, default: "dialog" } }, emits: { close: (t2) => true }, setup(t2, { emit: n2, attrs: l2, slots: u2, expose: i2 }) {
  var U;
  let r = ref(false);
  onMounted(() => {
    r.value = true;
  });
  let s$12 = false, v2 = computed(() => t2.role === "dialog" || t2.role === "alertdialog" ? t2.role : (s$12 || (s$12 = true, console.warn(`Invalid role [${v2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), m2 = ref(0), S$12 = l$2(), R2 = computed(() => t2.open === I && S$12 !== null ? (S$12.value & i$2.Open) === i$2.Open : t2.open), c2 = ref(null), E$2 = computed(() => i$1(c2));
  if (i2({ el: c2, $el: c2 }), !(t2.open !== I || S$12 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R2.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R2.value === I ? void 0 : t2.open}`);
  let f2 = computed(() => r.value && R2.value ? 0 : 1), k = computed(() => f2.value === 0), w2 = computed(() => m2.value > 1), H = inject(j, null) !== null, [V, J2] = A(), { resolveContainers: A$12, mainTreeNodeRef: N2, MainTreeNode: Q2 } = N$2({ portals: V, defaultContainers: [computed(() => {
    var e2;
    return (e2 = h$1.panelRef.value) != null ? e2 : c2.value;
  })] }), X = computed(() => w2.value ? "parent" : "leaf"), K = computed(() => S$12 !== null ? (S$12.value & i$2.Closing) === i$2.Closing : false), Z = computed(() => H || K.value ? false : k.value), ee = computed(() => {
    var e2, a2, p;
    return (p = Array.from((a2 = (e2 = E$2.value) == null ? void 0 : e2.querySelectorAll("body > *")) != null ? a2 : []).find((d2) => d2.id === "headlessui-portal-root" ? false : d2.contains(o$1(N2)) && d2 instanceof HTMLElement)) != null ? p : null;
  });
  E(ee, Z);
  let te = computed(() => w2.value ? true : k.value), le = computed(() => {
    var e2, a2, p;
    return (p = Array.from((a2 = (e2 = E$2.value) == null ? void 0 : e2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((d2) => d2.contains(o$1(N2)) && d2 instanceof HTMLElement)) != null ? p : null;
  });
  E(le, te), R$1({ type: "Dialog", enabled: computed(() => f2.value === 0), element: c2, onUpdate: (e2, a2) => {
    if (a2 === "Dialog")
      return u$3(e2, { [s.Add]: () => m2.value += 1, [s.Remove]: () => m2.value -= 1 });
  } });
  let ae = S({ name: "DialogDescription", slot: computed(() => ({ open: R2.value })) }), M = ref(null), h$1 = { titleId: M, panelRef: ref(null), dialogState: f2, setTitleId(e2) {
    M.value !== e2 && (M.value = e2);
  }, close() {
    n2("close", false);
  } };
  provide(j, h$1);
  let oe = computed(() => !(!k.value || w2.value));
  w$2(A$12, (e2, a2) => {
    h$1.close(), nextTick(() => a2 == null ? void 0 : a2.focus());
  }, oe);
  let re = computed(() => !(w2.value || f2.value !== 0));
  E$1((U = E$2.value) == null ? void 0 : U.defaultView, "keydown", (e2) => {
    re.value && (e2.defaultPrevented || e2.key === o.Escape && (e2.preventDefault(), e2.stopPropagation(), h$1.close()));
  });
  let ne = computed(() => !(K.value || f2.value !== 0 || H));
  return d$1(E$2, ne, (e2) => {
    var a2;
    return { containers: [...(a2 = e2.containers) != null ? a2 : [], A$12] };
  }), watchEffect((e2) => {
    if (f2.value !== 0)
      return;
    let a2 = o$1(c2);
    if (!a2)
      return;
    let p = new ResizeObserver((d2) => {
      for (let B2 of d2) {
        let D = B2.target.getBoundingClientRect();
        D.x === 0 && D.y === 0 && D.width === 0 && D.height === 0 && h$1.close();
      }
    });
    p.observe(a2), e2(() => p.disconnect());
  }), () => {
    let { id: e2, open: a2, initialFocus: p, ...d2 } = t2, B2 = { ...l2, ref: c2, id: e2, role: v2.value, "aria-modal": f2.value === 0 ? true : void 0, "aria-labelledby": M.value, "aria-describedby": ae.value }, D = { open: f2.value === 0 };
    return h(u$2, { force: true }, () => [h(_, () => h(N$1, { target: c2.value }, () => h(u$2, { force: false }, () => h(ue, { initialFocus: p, containers: A$12, features: k.value ? u$3(X.value, { parent: ue.features.RestoreFocus, leaf: ue.features.All & ~ue.features.FocusLock }) : ue.features.None }, () => h(J2, {}, () => A$2({ ourProps: B2, theirProps: { ...d2, ...l2 }, slot: D, attrs: l2, slots: u2, visible: f2.value === 0, features: N$4.RenderStrategy | N$4.Static, name: "Dialog" })))))), h(Q2)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${t$1$1()}` } }, setup(t2, { attrs: n2, slots: l2 }) {
  let u2 = T("DialogOverlay");
  function i2(r) {
    r.target === r.currentTarget && (r.preventDefault(), r.stopPropagation(), u2.close());
  }
  return () => {
    let { id: r, ...s2 } = t2;
    return A$2({ ourProps: { id: r, "aria-hidden": true, onClick: i2 }, theirProps: s2, slot: { open: u2.dialogState.value === 0 }, attrs: n2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${t$1$1()}` } }, inheritAttrs: false, setup(t2, { attrs: n2, slots: l2, expose: u2 }) {
  let i2 = T("DialogBackdrop"), r = ref(null);
  return u2({ el: r, $el: r }), onMounted(() => {
    if (i2.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: s2, ...v2 } = t2, m2 = { id: s2, ref: r, "aria-hidden": true };
    return h(u$2, { force: true }, () => h(_, () => A$2({ ourProps: m2, theirProps: { ...n2, ...v2 }, slot: { open: i2.dialogState.value === 0 }, attrs: n2, slots: l2, name: "DialogBackdrop" })));
  };
} });
let Ye = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${t$1$1()}` } }, setup(t2, { attrs: n2, slots: l2, expose: u2 }) {
  let i2 = T("DialogPanel");
  u2({ el: i2.panelRef, $el: i2.panelRef });
  function r(s2) {
    s2.stopPropagation();
  }
  return () => {
    let { id: s2, ...v2 } = t2, m2 = { id: s2, ref: i2.panelRef, onClick: r };
    return A$2({ ourProps: m2, theirProps: v2, slot: { open: i2.dialogState.value === 0 }, attrs: n2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${t$1$1()}` } }, setup(t2, { attrs: n2, slots: l2 }) {
  let u2 = T("DialogTitle");
  return onMounted(() => {
    u2.setTitleId(t2.id), onUnmounted(() => u2.setTitleId(null));
  }), () => {
    let { id: i2, ...r } = t2;
    return A$2({ ourProps: { id: i2 }, theirProps: r, slot: { open: u2.dialogState.value === 0 }, attrs: n2, slots: l2, name: "DialogTitle" });
  };
} });
function l(r) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called)
      return e2.called = true, r(...t2);
  };
}
function m(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.add(...t2);
}
function d(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e2, t2) {
  let i2 = o$2();
  if (!e2)
    return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s2] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r) => r.includes("ms") ? parseFloat(r) : parseFloat(r) * 1e3).sort((r, c2) => c2 - r);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s2) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e2, t2, i2, n2, a2, l$12) {
  let s2 = o$2(), o2 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e2, ...a2), m(e2, ...t2, ...i2), s2.nextFrame(() => {
    d(e2, ...i2), m(e2, ...n2), s2.add(F(e2, (u2) => (d(e2, ...n2, ...t2), m(e2, ...a2), o2(u2))));
  }), s2.add(() => d(e2, ...t2, ...i2, ...n2, ...a2)), s2.add(() => o2("cancelled")), s2.dispose;
}
function g(e2 = "") {
  return e2.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e2 = inject(R, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function ge() {
  let e2 = inject(N, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let N = Symbol("NestingContext");
function L(e2) {
  return "children" in e2 ? L(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e2) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s2(n2, r = S$2.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$3(r, { [S$2.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S$2.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r = t2.value.find(({ id: l2 }) => l2 === n2);
    return r ? r.state !== "visible" && (r.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s2(n2, S$2.Unmount);
  }
  return { children: t2, register: h2, unregister: s2 };
}
let W = N$4.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s2, expose: h$1 }) {
  let n2 = ref(0);
  function r() {
    n2.value |= i$2.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~i$2.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= i$2.Closing, t2("beforeLeave");
  }
  function S2() {
    n2.value &= ~i$2.Closing, t2("afterLeave");
  }
  if (!me() && s$2())
    return () => h(Se, { ...e2, onBeforeEnter: r, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S2 }, s2);
  let d2 = ref(null), y2 = computed(() => e2.unmount ? S$2.Unmount : S$2.Hidden);
  h$1({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), I2 = { value: true }, c2 = t$1$1(), b2 = { value: false }, P2 = Q(() => {
    !b2.value && i2.value !== "hidden" && (i2.value = "hidden", H(c2), S2());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y2.value === S$2.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$3(i2.value, { ["hidden"]: () => H(c2), ["visible"]: () => D(c2) });
    }
  });
  let j2 = g(e2.enter), M = g(e2.enterFrom), X = g(e2.enterTo), _2 = g(e2.entered), Y = g(e2.leave), Z = g(e2.leaveFrom), ee = g(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o$12 = o$1(d2);
        if (o$12 instanceof Comment && o$12.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o$12) {
    let E2 = I2.value && !A2.value, p = o$1(d2);
    !p || !(p instanceof HTMLElement) || E2 || (b2.value = true, v2.value && r(), v2.value || f2(), o$12(v2.value ? L$1(p, j2, M, X, _2, (V) => {
      b2.value = false, V === g$1.Finished && l2();
    }) : L$1(p, Y, Z, ee, _2, (V) => {
      b2.value = false, V === g$1.Finished && (L(P2) || (i2.value = "hidden", H(c2), S2()));
    })));
  }
  return onMounted(() => {
    watch([v2], (o2, E2, p) => {
      te(p), I2.value = false;
    }, { immediate: true });
  }), provide(N, P2), t$1$2(computed(() => u$3(i2.value, { ["visible"]: i$2.Open, ["hidden"]: i$2.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p, enterFrom: V, enterTo: Ce, entered: ye, leave: be2, leaveFrom: Ee, leaveTo: Ve, ...U } = e2, ne = { ref: d2 }, re = { ...U, ...A2.value && v2.value && c$1.isServer ? { class: normalizeClass([a2.class, U.class, ...j2, ...M]) } : {} };
    return A$2({ theirProps: re, ourProps: ne, slot: {}, slots: s2, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s2 }) {
  let h$1 = l$2(), n2 = computed(() => e2.show === null && h$1 !== null ? (h$1.value & i$2.Open) === i$2.Open : e2.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e2.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r.value = "visible" : L(l2) || (r.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$2(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y2 = { unmount: e2.unmount };
    return A$2({ ourProps: { ...y2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s2, default: () => [h(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...y2, ...d2 }, s2.default)] }, attrs: {}, features: W, visible: r.value === "visible", name: "Transition" });
  };
} });
const formGroup = {
  wrapper: "",
  label: {
    wrapper: "flex content-center items-center justify-between",
    base: "block font-medium text-gray-700 dark:text-gray-200",
    // eslint-disable-next-line quotes
    required: `after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400`
  },
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  container: "mt-1 relative",
  description: "text-gray-500 dark:text-gray-400",
  hint: "text-gray-500 dark:text-gray-400",
  help: "mt-2 text-gray-500 dark:text-gray-400",
  error: "mt-2 text-red-500 dark:text-red-400",
  default: {
    size: "sm"
  }
};
const modal = {
  wrapper: "relative z-50",
  inner: "fixed inset-0 overflow-y-auto",
  container: "flex min-h-full items-end sm:items-center justify-center text-center",
  padding: "p-4 sm:p-0",
  margin: "sm:my-8",
  base: "relative text-left rtl:text-right overflow-hidden flex flex-col",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
    transition: {
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "rounded-lg",
  shadow: "shadow-xl",
  width: "w-full sm:max-w-lg",
  height: "",
  fullscreen: "w-screen h-screen",
  // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
  transition: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }
};
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.modal, modal);
const _sfc_main$3 = defineComponent({
  components: {
    HDialog: _e,
    HDialogPanel: Ye,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("modal", toRef(props, "ui"), config$2, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition
      };
    });
    function close(value) {
      isOpen.value = value;
      emit("close");
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      close
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    appear: _ctx.appear,
    show: _ctx.isOpen,
    as: "template"
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: _ctx.ui.wrapper
        }, _ctx.attrs, {
          onClose: (e2) => !_ctx.preventClose && _ctx.close(e2)
        }), {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="${ssrRenderClass(_ctx.ui.inner)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding])}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [
                        _ctx.ui.base,
                        _ctx.ui.background,
                        _ctx.ui.ring,
                        _ctx.ui.shadow,
                        _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                      ]
                    }, {
                      default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear"])) : createCommentVNode("", true),
                createVNode("div", {
                  class: _ctx.ui.inner
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                  }, [
                    createVNode(_component_TransitionChild, mergeProps({
                      as: "template",
                      appear: _ctx.appear
                    }, _ctx.transitionClass), {
                      default: withCtx(() => [
                        createVNode(_component_HDialogPanel, {
                          class: [
                            _ctx.ui.base,
                            _ctx.ui.background,
                            _ctx.ui.ring,
                            _ctx.ui.shadow,
                            _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                          ]
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 3
                        }, 8, ["class"])
                      ]),
                      _: 3
                    }, 16, ["appear"])
                  ], 2)
                ], 2)
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: _ctx.ui.wrapper
          }, _ctx.attrs, {
            onClose: (e2) => !_ctx.preventClose && _ctx.close(e2)
          }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear"])) : createCommentVNode("", true),
              createVNode("div", {
                class: _ctx.ui.inner
              }, [
                createVNode("div", {
                  class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                }, [
                  createVNode(_component_TransitionChild, mergeProps({
                    as: "template",
                    appear: _ctx.appear
                  }, _ctx.transitionClass), {
                    default: withCtx(() => [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ]),
                    _: 3
                  }, 16, ["appear"])
                ], 2)
              ], 2)
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Modal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
let _id = 0;
function uid() {
  _id = (_id + 1) % Number.MAX_SAFE_INTEGER;
  return `nuid-${_id}`;
}
class FormException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, FormException.prototype);
  }
}
const _sfc_main$2 = defineComponent({
  props: {
    schema: {
      type: Object,
      default: void 0
    },
    state: {
      type: Object,
      required: true
    },
    validate: {
      type: Function,
      default: () => []
    },
    validateOn: {
      type: Array,
      default: () => ["blur", "input", "change", "submit"]
    }
  },
  emits: ["submit", "error"],
  setup(props, { expose, emit }) {
    const bus = useEventBus(`form-${uid()}`);
    onUnmounted(() => {
      bus.reset();
    });
    const errors = ref([]);
    provide("form-errors", errors);
    provide("form-events", bus);
    const inputs = ref({});
    provide("form-inputs", inputs);
    async function getErrors() {
      let errs = await props.validate(props.state);
      if (props.schema) {
        if (isZodSchema(props.schema)) {
          errs = errs.concat(await getZodErrors(props.state, props.schema));
        } else if (isYupSchema(props.schema)) {
          errs = errs.concat(await getYupErrors(props.state, props.schema));
        } else if (isJoiSchema(props.schema)) {
          errs = errs.concat(await getJoiErrors(props.state, props.schema));
        } else if (isValibotSchema(props.schema)) {
          errs = errs.concat(await getValibotError(props.state, props.schema));
        } else {
          throw new Error("Form validation failed: Unsupported form schema");
        }
      }
      return errs;
    }
    async function validate(path, opts = { silent: false }) {
      if (path) {
        const otherErrors = errors.value.filter(
          (error) => error.path !== path
        );
        const pathErrors = (await getErrors()).filter(
          (error) => error.path === path
        );
        errors.value = otherErrors.concat(pathErrors);
      } else {
        errors.value = await getErrors();
      }
      if (!opts.silent && errors.value.length > 0) {
        throw new FormException(
          `Form validation failed: ${JSON.stringify(errors.value, null, 2)}`
        );
      }
      return props.state;
    }
    async function onSubmit(payload) {
      var _a;
      const event = payload;
      try {
        if ((_a = props.validateOn) == null ? void 0 : _a.includes("submit")) {
          await validate();
        }
        const submitEvent = {
          ...event,
          data: props.state
        };
        emit("submit", submitEvent);
      } catch (error) {
        if (!(error instanceof FormException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: errors.value.map((err) => ({
            ...err,
            id: inputs.value[err.path]
          }))
        };
        emit("error", errorEvent);
      }
    }
    expose({
      validate,
      errors,
      setErrors(errs, path) {
        errors.value = errs;
        if (path) {
          errors.value = errors.value.filter(
            (error) => error.path !== path
          ).concat(errs);
        } else {
          errors.value = errs;
        }
      },
      async submit() {
        await onSubmit(new Event("submit"));
      },
      getErrors(path) {
        if (path) {
          return errors.value.filter((err) => err.path === path);
        }
        return errors.value;
      },
      clear(path) {
        if (path) {
          errors.value = errors.value.filter((err) => err.path !== path);
        } else {
          errors.value = [];
        }
      }
    });
    return {
      onSubmit
    };
  }
});
function isYupSchema(schema) {
  return schema.validate && schema.__isYupSchema__;
}
function isYupError(error) {
  return error.inner !== void 0;
}
async function getYupErrors(state, schema) {
  try {
    await schema.validate(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isYupError(error)) {
      return error.inner.map((issue) => {
        var _a;
        return {
          path: (_a = issue.path) != null ? _a : "",
          message: issue.message
        };
      });
    } else {
      throw error;
    }
  }
}
function isZodSchema(schema) {
  return schema.parse !== void 0;
}
async function getZodErrors(state, schema) {
  const result = await schema.safeParseAsync(state);
  if (result.success === false) {
    return result.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message
    }));
  }
  return [];
}
function isJoiSchema(schema) {
  return schema.validateAsync !== void 0 && schema.id !== void 0;
}
function isJoiError(error) {
  return error.isJoi === true;
}
async function getJoiErrors(state, schema) {
  try {
    await schema.validateAsync(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isJoiError(error)) {
      return error.details.map((detail) => ({
        path: detail.path.join("."),
        message: detail.message
      }));
    } else {
      throw error;
    }
  }
}
function isValibotSchema(schema) {
  return schema._parse !== void 0;
}
async function getValibotError(state, schema) {
  const result = await schema._parse(state);
  if (result.issues) {
    return result.issues.map((issue) => {
      var _a;
      return {
        path: ((_a = issue.path) == null ? void 0 : _a.map((p) => p.key).join(".")) || "",
        message: issue.message
      };
    });
  }
  return [];
}
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</form>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Form.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.formGroup, formGroup);
const _sfc_main$1 = defineComponent({
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    label: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    error: {
      type: [String, Boolean],
      default: null
    },
    hint: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    eagerValidation: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("formGroup", toRef(props, "ui"), config$1, toRef(props, "class"));
    const formErrors = inject("form-errors", null);
    const error = computed(() => {
      var _a, _b;
      return props.error && typeof props.error === "string" || typeof props.error === "boolean" ? props.error : (_b = (_a = formErrors == null ? void 0 : formErrors.value) == null ? void 0 : _a.find((error2) => error2.path === props.name)) == null ? void 0 : _b.message;
    });
    const size = computed(() => {
      var _a;
      return ui.value.size[(_a = props.size) != null ? _a : config$1.default.size];
    });
    const inputId = ref();
    provide("form-group", {
      error,
      inputId,
      name: computed(() => props.name),
      size: computed(() => props.size),
      eagerValidation: computed(() => props.eagerValidation)
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      size,
      // eslint-disable-next-line vue/no-dupe-keys
      error
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.label.wrapper, _ctx.size])}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass([_ctx.ui.label.base, _ctx.required ? _ctx.ui.label.required : ""])}">`);
    if (_ctx.$slots.label) {
      ssrRenderSlot(_ctx.$slots, "label", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.label)}<!--]-->`);
    }
    _push(`</label>`);
    if (_ctx.hint || _ctx.$slots.hint) {
      _push(`<span class="${ssrRenderClass([_ctx.ui.hint])}">`);
      if (_ctx.$slots.hint) {
        ssrRenderSlot(_ctx.$slots, "hint", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
      } else {
        _push(`<!--[-->${ssrInterpolate(_ctx.hint)}<!--]-->`);
      }
      _push(`</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.description, _ctx.size])}">`);
    if (_ctx.$slots.description) {
      ssrRenderSlot(_ctx.$slots, "description", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.description)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([_ctx.label ? _ctx.ui.container : ""])}">`);
  ssrRenderSlot(_ctx.$slots, "default", { error: _ctx.error }, null, _push, _parent);
  if (typeof _ctx.error === "string" && _ctx.error || _ctx.$slots.error) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.error, _ctx.size])}">`);
    if (_ctx.$slots.error) {
      ssrRenderSlot(_ctx.$slots, "error", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.error)}<!--]-->`);
    }
    _push(`</p>`);
  } else if (_ctx.help || _ctx.$slots.help) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.help, _ctx.size])}">`);
    if (_ctx.$slots.help) {
      ssrRenderSlot(_ctx.$slots, "help", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.help)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/FormGroup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.input, input);
const _sfc_main = defineComponent({
  components: {
    UIcon: __nuxt_component_1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autofocusDelay: {
      type: Number,
      default: 100
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    inputClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "blur"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("input", toRef(props, "ui"), config, toRef(props, "class"));
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormInput, size: sizeFormGroup, color, inputId, name } = useFormGroup(props, config);
    const size = computed(() => sizeButtonGroup.value || sizeFormGroup.value);
    const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false }));
    const input2 = ref(null);
    const updateInput = (value) => {
      if (modelModifiers.value.trim) {
        value = value.trim();
      }
      if (modelModifiers.value.number || props.type === "number") {
        value = looseToNumber(value);
      }
      emit("update:modelValue", value);
      emitFormInput();
    };
    const onInput = (event) => {
      if (!modelModifiers.value.lazy) {
        updateInput(event.target.value);
      }
    };
    const onChange = (event) => {
      const value = event.target.value;
      if (modelModifiers.value.lazy) {
        updateInput(value);
      }
      if (modelModifiers.value.trim) {
        event.target.value = value.trim();
      }
    };
    const onBlur = (event) => {
      emitFormBlur();
      emit("blur", event);
    };
    const inputClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.placeholder,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.inputClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      input: input2,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onChange,
      onBlur
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><input${ssrRenderAttrs(mergeProps({
    id: _ctx.inputId,
    ref: "input",
    name: _ctx.name,
    value: _ctx.modelValue,
    type: _ctx.type,
    required: _ctx.required,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    class: _ctx.inputClass
  }, _ctx.attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { A, E$1 as E, N$2 as N, __nuxt_component_2 as _, __nuxt_component_3 as a, __nuxt_component_4 as b, __nuxt_component_5 as c, d$2 as d, n, v };
//# sourceMappingURL=Input-929542b6.mjs.map
