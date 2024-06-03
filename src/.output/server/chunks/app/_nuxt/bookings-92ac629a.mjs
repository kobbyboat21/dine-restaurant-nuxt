import { defineComponent, ref, computed, provide, watchEffect, h as h$1, Fragment, onMounted, onUnmounted, shallowRef, toRef, watch, useSSRContext, inject, unref, mergeProps, isRef, resolveComponent, withCtx, renderSlot, createVNode, openBlock, createBlock, Transition, createCommentVNode } from 'vue';
import { t as defu } from '../../nitro/node-server.mjs';
import { u as useUI, b as arrow } from './Link-a292d72e.mjs';
import { t as t$1, i as i$1, a as w, l, u as usePopper } from './usePopper-3eb33e86.mjs';
import { m as mergeConfig, a as appConfig, i as defineStore, _ as _export_sfc } from '../server.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { A, N as N$2, E as E$1$1, n, v, d as d$2 } from './Input-929542b6.mjs';
import { i, o as o$1, E as E$1, u, w as w$1, j as h, A as A$1, t as t$1$1, a as s$1, f, s as s2, N, P, e as N$1, b as o, c as T$1 } from './micro-task-b624b8d4.mjs';
import { DatePicker } from 'v-calendar';

var Se = ((p) => (p[p.Open = 0] = "Open", p[p.Closed = 1] = "Closed", p))(Se || {});
let re = Symbol("PopoverContext");
function V(P2) {
  let b = inject(re, null);
  if (b === null) {
    let p = new Error(`<${P2} /> is missing a parent <${ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(p, V), p;
  }
  return b;
}
let le = Symbol("PopoverGroupContext");
function ae() {
  return inject(le, null);
}
let ue = Symbol("PopoverPanelContext");
function ge() {
  return inject(ue, null);
}
let ye = defineComponent({ name: "Popover", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(P2, { slots: b, attrs: p, expose: h$2 }) {
  var v2;
  let t$12 = ref(null);
  h$2({ el: t$12, $el: t$12 });
  let e = ref(1), c = ref(null), d2 = ref(null), O = ref(null), f2 = ref(null), y = computed(() => i(t$12)), M = computed(() => {
    var Y, Z;
    if (!o$1(c) || !o$1(f2))
      return false;
    for (let B of document.querySelectorAll("body > *"))
      if (Number(B == null ? void 0 : B.contains(o$1(c))) ^ Number(B == null ? void 0 : B.contains(o$1(f2))))
        return true;
    let o$12 = E$1(), a = o$12.indexOf(o$1(c)), g = (a + o$12.length - 1) % o$12.length, E$12 = (a + 1) % o$12.length, N2 = o$12[g], $ = o$12[E$12];
    return !((Y = o$1(f2)) != null && Y.contains(N2)) && !((Z = o$1(f2)) != null && Z.contains($));
  }), l2 = { popoverState: e, buttonId: ref(null), panelId: ref(null), panel: f2, button: c, isPortalled: M, beforePanelSentinel: d2, afterPanelSentinel: O, togglePopover() {
    e.value = u(e.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    e.value !== 1 && (e.value = 1);
  }, close(o$12) {
    l2.closePopover();
    let a = (() => o$12 ? o$12 instanceof HTMLElement ? o$12 : o$12.value instanceof HTMLElement ? o$1(o$12) : o$1(l2.button) : o$1(l2.button))();
    a == null || a.focus();
  } };
  provide(re, l2), t$1(computed(() => u(e.value, { [0]: i$1.Open, [1]: i$1.Closed })));
  let m = { buttonId: l2.buttonId, panelId: l2.panelId, close() {
    l2.closePopover();
  } }, S = ae(), I = S == null ? void 0 : S.registerPopover, [s2, u$1] = A(), i$2 = N$2({ mainTreeNodeRef: S == null ? void 0 : S.mainTreeNodeRef, portals: s2, defaultContainers: [c, f2] });
  function n2() {
    var o$12, a, g, E2;
    return (E2 = S == null ? void 0 : S.isFocusWithinPopoverGroup()) != null ? E2 : ((o$12 = y.value) == null ? void 0 : o$12.activeElement) && (((a = o$1(c)) == null ? void 0 : a.contains(y.value.activeElement)) || ((g = o$1(f2)) == null ? void 0 : g.contains(y.value.activeElement)));
  }
  return watchEffect(() => I == null ? void 0 : I(m)), E$1$1((v2 = y.value) == null ? void 0 : v2.defaultView, "focus", (o$12) => {
    var a, g;
    o$12.target !== window && o$12.target instanceof HTMLElement && e.value === 0 && (n2() || c && f2 && (i$2.contains(o$12.target) || (a = o$1(l2.beforePanelSentinel)) != null && a.contains(o$12.target) || (g = o$1(l2.afterPanelSentinel)) != null && g.contains(o$12.target) || l2.closePopover()));
  }, true), w(i$2.resolveContainers, (o$12, a) => {
    var g;
    l2.closePopover(), w$1(a, h.Loose) || (o$12.preventDefault(), (g = o$1(c)) == null || g.focus());
  }, computed(() => e.value === 0)), () => {
    let o2 = { open: e.value === 0, close: l2.close };
    return h$1(Fragment, [h$1(u$1, {}, () => A$1({ theirProps: { ...P2, ...p }, ourProps: { ref: t$12 }, slot: o2, slots: b, attrs: p, name: "Popover" })), h$1(i$2.MainTreeNode)]);
  };
} }), Ge = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-popover-button-${t$1$1()}` } }, inheritAttrs: false, setup(P$1, { attrs: b, slots: p, expose: h2 }) {
  let t2 = V("PopoverButton"), e = computed(() => i(t2.button));
  h2({ el: t2.button, $el: t2.button }), onMounted(() => {
    t2.buttonId.value = P$1.id;
  }), onUnmounted(() => {
    t2.buttonId.value = null;
  });
  let c = ae(), d$1 = c == null ? void 0 : c.closeOthers, O = ge(), f$1 = computed(() => O === null ? false : O.value === t2.panelId.value), y = ref(null), M = `headlessui-focus-sentinel-${t$1$1()}`;
  f$1.value || watchEffect(() => {
    t2.button.value = o$1(y);
  });
  let l2 = s$1(computed(() => ({ as: P$1.as, type: b.type })), y);
  function m(n2) {
    var v2, o$2, a, g, E2;
    if (f$1.value) {
      if (t2.popoverState.value === 1)
        return;
      switch (n2.key) {
        case o.Space:
        case o.Enter:
          n2.preventDefault(), (o$2 = (v2 = n2.target).click) == null || o$2.call(v2), t2.closePopover(), (a = o$1(t2.button)) == null || a.focus();
          break;
      }
    } else
      switch (n2.key) {
        case o.Space:
        case o.Enter:
          n2.preventDefault(), n2.stopPropagation(), t2.popoverState.value === 1 && (d$1 == null || d$1(t2.buttonId.value)), t2.togglePopover();
          break;
        case o.Escape:
          if (t2.popoverState.value !== 0)
            return d$1 == null ? void 0 : d$1(t2.buttonId.value);
          if (!o$1(t2.button) || (g = e.value) != null && g.activeElement && !((E2 = o$1(t2.button)) != null && E2.contains(e.value.activeElement)))
            return;
          n2.preventDefault(), n2.stopPropagation(), t2.closePopover();
          break;
      }
  }
  function S(n2) {
    f$1.value || n2.key === o.Space && n2.preventDefault();
  }
  function I(n2) {
    var v2, o$12;
    P$1.disabled || (f$1.value ? (t2.closePopover(), (v2 = o$1(t2.button)) == null || v2.focus()) : (n2.preventDefault(), n2.stopPropagation(), t2.popoverState.value === 1 && (d$1 == null || d$1(t2.buttonId.value)), t2.togglePopover(), (o$12 = o$1(t2.button)) == null || o$12.focus()));
  }
  function s$2(n2) {
    n2.preventDefault(), n2.stopPropagation();
  }
  let u$1 = n();
  function i$12() {
    let n2 = o$1(t2.panel);
    if (!n2)
      return;
    function v2() {
      u(u$1.value, { [d$2.Forwards]: () => P(n2, N$1.First), [d$2.Backwards]: () => P(n2, N$1.Last) }) === T$1.Error && P(E$1().filter((a) => a.dataset.headlessuiFocusGuard !== "true"), u(u$1.value, { [d$2.Forwards]: N$1.Next, [d$2.Backwards]: N$1.Previous }), { relativeTo: o$1(t2.button) });
    }
    v2();
  }
  return () => {
    let n2 = t2.popoverState.value === 0, v2 = { open: n2 }, { id: o$12, ...a } = P$1, g = f$1.value ? { ref: y, type: l2.value, onKeydown: m, onClick: I } : { ref: y, id: o$12, type: l2.value, "aria-expanded": t2.popoverState.value === 0, "aria-controls": o$1(t2.panel) ? t2.panelId.value : void 0, disabled: P$1.disabled ? true : void 0, onKeydown: m, onKeyup: S, onClick: I, onMousedown: s$2 };
    return h$1(Fragment, [A$1({ ourProps: g, theirProps: { ...b, ...a }, slot: v2, attrs: b, slots: p, name: "PopoverButton" }), n2 && !f$1.value && t2.isPortalled.value && h$1(f, { id: M, features: s2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: i$12 })]);
  };
} });
defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(P2, { attrs: b, slots: p }) {
  let h2 = V("PopoverOverlay"), t2 = `headlessui-popover-overlay-${t$1$1()}`, e = l(), c = computed(() => e !== null ? (e.value & i$1.Open) === i$1.Open : h2.popoverState.value === 0);
  function d2() {
    h2.closePopover();
  }
  return () => {
    let O = { open: h2.popoverState.value === 0 };
    return A$1({ ourProps: { id: t2, "aria-hidden": true, onClick: d2 }, theirProps: P2, slot: O, attrs: b, slots: p, features: N.RenderStrategy | N.Static, visible: c.value, name: "PopoverOverlay" });
  };
} });
let je = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-popover-panel-${t$1$1()}` } }, inheritAttrs: false, setup(P$1, { attrs: b, slots: p, expose: h2 }) {
  let { focus: t2 } = P$1, e = V("PopoverPanel"), c = computed(() => i(e.panel)), d$1 = `headlessui-focus-sentinel-before-${t$1$1()}`, O = `headlessui-focus-sentinel-after-${t$1$1()}`;
  h2({ el: e.panel, $el: e.panel }), onMounted(() => {
    e.panelId.value = P$1.id;
  }), onUnmounted(() => {
    e.panelId.value = null;
  }), provide(ue, e.panelId), watchEffect(() => {
    var u2, i2;
    if (!t2 || e.popoverState.value !== 0 || !e.panel)
      return;
    let s2 = (u2 = c.value) == null ? void 0 : u2.activeElement;
    (i2 = o$1(e.panel)) != null && i2.contains(s2) || P(o$1(e.panel), N$1.First);
  });
  let f$1 = l(), y = computed(() => f$1 !== null ? (f$1.value & i$1.Open) === i$1.Open : e.popoverState.value === 0);
  function M(s2) {
    var u2, i2;
    switch (s2.key) {
      case o.Escape:
        if (e.popoverState.value !== 0 || !o$1(e.panel) || c.value && !((u2 = o$1(e.panel)) != null && u2.contains(c.value.activeElement)))
          return;
        s2.preventDefault(), s2.stopPropagation(), e.closePopover(), (i2 = o$1(e.button)) == null || i2.focus();
        break;
    }
  }
  function l$1(s2) {
    var i2, n2, v2, o$12, a;
    let u2 = s2.relatedTarget;
    u2 && o$1(e.panel) && ((i2 = o$1(e.panel)) != null && i2.contains(u2) || (e.closePopover(), ((v2 = (n2 = o$1(e.beforePanelSentinel)) == null ? void 0 : n2.contains) != null && v2.call(n2, u2) || (a = (o$12 = o$1(e.afterPanelSentinel)) == null ? void 0 : o$12.contains) != null && a.call(o$12, u2)) && u2.focus({ preventScroll: true })));
  }
  let m = n();
  function S() {
    let s2 = o$1(e.panel);
    if (!s2)
      return;
    function u$1() {
      u(m.value, { [d$2.Forwards]: () => {
        var n2;
        P(s2, N$1.First) === T$1.Error && ((n2 = o$1(e.afterPanelSentinel)) == null || n2.focus());
      }, [d$2.Backwards]: () => {
        var i2;
        (i2 = o$1(e.button)) == null || i2.focus({ preventScroll: true });
      } });
    }
    u$1();
  }
  function I() {
    let s2 = o$1(e.panel);
    if (!s2)
      return;
    function u$1() {
      u(m.value, { [d$2.Forwards]: () => {
        let i2 = o$1(e.button), n2 = o$1(e.panel);
        if (!i2)
          return;
        let v2 = E$1(), o$12 = v2.indexOf(i2), a = v2.slice(0, o$12 + 1), E$12 = [...v2.slice(o$12 + 1), ...a];
        for (let N2 of E$12.slice())
          if (N2.dataset.headlessuiFocusGuard === "true" || n2 != null && n2.contains(N2)) {
            let $ = E$12.indexOf(N2);
            $ !== -1 && E$12.splice($, 1);
          }
        P(E$12, N$1.First, { sorted: false });
      }, [d$2.Backwards]: () => {
        var n2;
        P(s2, N$1.Previous) === T$1.Error && ((n2 = o$1(e.button)) == null || n2.focus());
      } });
    }
    u$1();
  }
  return () => {
    let s2$1 = { open: e.popoverState.value === 0, close: e.close }, { id: u2, focus: i2, ...n2 } = P$1, v2 = { ref: e.panel, id: u2, onKeydown: M, onFocusout: t2 && e.popoverState.value === 0 ? l$1 : void 0, tabIndex: -1 };
    return A$1({ ourProps: v2, theirProps: { ...b, ...n2 }, attrs: b, slot: s2$1, slots: { ...p, default: (...o2) => {
      var a;
      return [h$1(Fragment, [y.value && e.isPortalled.value && h$1(f, { id: d$1, ref: e.beforePanelSentinel, features: s2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: S }), (a = p.default) == null ? void 0 : a.call(p, ...o2), y.value && e.isPortalled.value && h$1(f, { id: O, ref: e.afterPanelSentinel, features: s2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: I })])];
    } }, features: N.RenderStrategy | N.Static, visible: y.value, name: "PopoverPanel" });
  };
} });
defineComponent({ name: "PopoverGroup", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(P2, { attrs: b, slots: p, expose: h2 }) {
  let t2 = ref(null), e = shallowRef([]), c = computed(() => i(t2)), d2 = v();
  h2({ el: t2, $el: t2 });
  function O(l2) {
    let m = e.value.indexOf(l2);
    m !== -1 && e.value.splice(m, 1);
  }
  function f2(l2) {
    return e.value.push(l2), () => {
      O(l2);
    };
  }
  function y() {
    var S;
    let l2 = c.value;
    if (!l2)
      return false;
    let m = l2.activeElement;
    return (S = o$1(t2)) != null && S.contains(m) ? true : e.value.some((I) => {
      var s2, u2;
      return ((s2 = l2.getElementById(I.buttonId.value)) == null ? void 0 : s2.contains(m)) || ((u2 = l2.getElementById(I.panelId.value)) == null ? void 0 : u2.contains(m));
    });
  }
  function M(l2) {
    for (let m of e.value)
      m.buttonId.value !== l2 && m.close();
  }
  return provide(le, { registerPopover: f2, unregisterPopover: O, isFocusWithinPopoverGroup: y, closeOthers: M, mainTreeNodeRef: d2.mainTreeNodeRef }), () => h$1(Fragment, [A$1({ ourProps: { ref: t2 }, theirProps: { ...P2, ...b }, slot: {}, attrs: b, slots: p, name: "PopoverGroup" }), h$1(d2.MainTreeNode)]);
} });
const popover = {
  wrapper: "relative",
  container: "z-50 group",
  trigger: "inline-flex w-full",
  width: "",
  background: "bg-white dark:bg-gray-900",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  base: "overflow-hidden focus:outline-none relative",
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transition ease-out duration-200",
    enterFromClass: "opacity-0 translate-y-1",
    enterToClass: "opacity-100 translate-y-0",
    leaveActiveClass: "transition ease-in duration-150",
    leaveFromClass: "opacity-100 translate-y-0",
    leaveToClass: "opacity-0 translate-y-1"
  },
  overlay: {
    base: "fixed inset-0 transition-opacity z-50",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    transition: {
      enterActiveClass: "ease-out duration-200",
      enterFromClass: "opacity-0",
      enterToClass: "opacity-100",
      leaveActiveClass: "ease-in duration-150",
      leaveFromClass: "opacity-100",
      leaveToClass: "opacity-0"
    }
  },
  popper: {
    strategy: "fixed"
  },
  arrow
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.popover, popover);
const _sfc_main$1 = defineComponent({
  components: {
    HPopover: ye,
    HPopoverButton: Ge,
    HPopoverPanel: je
  },
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].includes(value)
    },
    open: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    overlay: {
      type: Boolean,
      default: false
    },
    popper: {
      type: Object,
      default: () => ({})
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
  emits: ["update:open"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("popover", toRef(props, "ui"), config, toRef(props, "class"));
    const popper = computed(() => defu(props.mode === "hover" ? { offsetDistance: 0 } : {}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const popover2 = ref(null);
    const popoverApi = ref(null);
    let openTimeout = null;
    let closeTimeout = null;
    const containerStyle = computed(() => {
      var _a, _b, _c;
      if (props.mode !== "hover") {
        return {};
      }
      const offsetDistance = ((_a = props.popper) == null ? void 0 : _a.offsetDistance) || ((_b = ui.value.popper) == null ? void 0 : _b.offsetDistance) || 8;
      const placement = (_c = popper.value.placement) == null ? void 0 : _c.split("-")[0];
      const padding = `${offsetDistance}px`;
      if (placement === "top" || placement === "bottom") {
        return {
          paddingTop: padding,
          paddingBottom: padding
        };
      } else if (placement === "left" || placement === "right") {
        return {
          paddingLeft: padding,
          paddingRight: padding
        };
      } else {
        return {
          paddingTop: padding,
          paddingBottom: padding,
          paddingLeft: padding,
          paddingRight: padding
        };
      }
    });
    function onMouseOver() {
      if (props.mode !== "hover" || !popoverApi.value) {
        return;
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (popoverApi.value.popoverState === 0) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        popoverApi.value.togglePopover && popoverApi.value.togglePopover();
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (props.mode !== "hover" || !popoverApi.value) {
        return;
      }
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (popoverApi.value.popoverState === 1) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        popoverApi.value.closePopover && popoverApi.value.closePopover();
        closeTimeout = null;
      }, props.closeDelay);
    }
    watch(() => props.open, (newValue, oldValue) => {
      if (!popoverApi.value)
        return;
      if (oldValue === void 0 || newValue === oldValue)
        return;
      if (newValue) {
        popoverApi.value.popoverState = 0;
      } else {
        popoverApi.value.closePopover();
      }
    });
    watch(() => {
      var _a;
      return (_a = popoverApi.value) == null ? void 0 : _a.popoverState;
    }, (newValue, oldValue) => {
      if (oldValue === void 0 || newValue === oldValue)
        return;
      emit("update:open", newValue === 0);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      popover: popover2,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      containerStyle,
      onMouseOver,
      onMouseLeave
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HPopover = resolveComponent("HPopover");
  const _component_HPopoverButton = resolveComponent("HPopoverButton");
  const _component_HPopoverPanel = resolveComponent("HPopoverPanel");
  _push(ssrRenderComponent(_component_HPopover, mergeProps({
    ref: "popover",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { onMouseleave: _ctx.onMouseLeave }, _attrs), {
    default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HPopoverButton, {
          ref: "trigger",
          as: "div",
          disabled: _ctx.disabled,
          class: _ctx.ui.trigger,
          role: "button",
          onMouseover: _ctx.onMouseOver
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                close
              }, () => {
                _push3(`<button${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${_scopeId2}> Open </button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  close
                }, () => [
                  createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        if (_ctx.overlay) {
          _push2(`<template>`);
          if (open) {
            _push2(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</template>`);
        } else {
          _push2(`<!---->`);
        }
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}" style="${ssrRenderStyle(_ctx.containerStyle)}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_HPopoverPanel, {
            class: [_ctx.ui.base, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow],
            static: ""
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "panel", {
                  open,
                  close
                }, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "panel", {
                    open,
                    close
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_HPopoverButton, {
            ref: "trigger",
            as: "div",
            disabled: _ctx.disabled,
            class: _ctx.ui.trigger,
            role: "button",
            onMouseover: _ctx.onMouseOver
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                close
              }, () => [
                createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["disabled", "class", "onMouseover"]),
          _ctx.overlay ? (openBlock(), createBlock(Transition, mergeProps({
            key: 0,
            appear: ""
          }, _ctx.ui.overlay.transition), {
            default: withCtx(() => [
              open ? (openBlock(), createBlock("div", {
                key: 0,
                class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
              }, null, 2)) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1040)) : createCommentVNode("", true),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.ui.container, _ctx.ui.width],
            style: _ctx.containerStyle,
            onMouseover: _ctx.onMouseOver
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.ui.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.ui.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  createVNode(_component_HPopoverPanel, {
                    class: [_ctx.ui.base, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow],
                    static: ""
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "panel", {
                        open,
                        close
                      })
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ])
              ]),
              _: 2
            }, 1040)
          ], 46, ["onMouseover"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Popover.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DatePicker",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [Date, Object],
      default: null
    }
  },
  emits: ["update:model-value", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const date = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:model-value", value);
        emit("close");
      }
    });
    const attrs = {
      transparent: true,
      borderless: true,
      color: "primary",
      "is-dark": { selector: "html", darkClass: "dark" },
      "first-day-of-week": 2
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(date) && typeof unref(date) === "object") {
        _push(ssrRenderComponent(unref(DatePicker), mergeProps({
          modelValue: unref(date),
          "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null,
          columns: 2
        }, { ...attrs, ..._ctx.$attrs }, _attrs), null, _parent));
      } else {
        _push(ssrRenderComponent(unref(DatePicker), mergeProps({
          modelValue: unref(date),
          "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null
        }, { ...attrs, ..._ctx.$attrs }, _attrs), null, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DatePicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useBookingStore = defineStore(
  "bookingStore",
  {
    state: () => ({
      // List of all bookings
      bookings: []
    }),
    actions: {
      async getBookings() {
        let data = await $fetch("/api/reservations/");
        this.bookings = data;
        return data;
      },
      async createBooking(booking) {
        let id = this.bookings.length + 1;
        booking.id = id;
        await $fetch(
          "/api/reservations/create",
          {
            // $fetch sends request to api which sends it to database to add the new breakfast booking
            method: "POST",
            //"POST" is an http method used to send data, in this case, to the API
            body: booking
          }
        );
        this.bookings.push(booking);
        console.log("Creating the following booking:");
        console.log(booking);
      },
      async editBooking(booking) {
        let found = this.bookings.find((p) => p.id === booking.id);
        if (found) {
          console.log("edit" + found.name);
          found.name = booking.name;
          found.section = booking.section;
          found.capacity = booking.capacity;
          found.datetime = booking.datetime;
          let id = found._id;
          let edit_endpoint = `/api/reservations/${id}`;
          await $fetch(
            edit_endpoint,
            {
              method: "PUT",
              // "PUT" as well is an http method that sends data to be replaced/ updated
              body: found
            }
          );
        }
      },
      async deleteBooking(booking) {
        let foundIndex = this.bookings.findIndex((p) => p.id === booking.id);
        let found = this.bookings.find((p) => p.id === booking.id);
        console.log("delete" + booking.name);
        if (foundIndex !== -1)
          this.bookings.splice(foundIndex, 1);
        let id = found._id;
        let delete_endpoint = `/api/reservations/${id}`;
        await $fetch(delete_endpoint, {
          method: "DELETE"
        });
      }
    }
  }
);

export { __nuxt_component_6 as _, _sfc_main as a, useBookingStore as u };
//# sourceMappingURL=bookings-92ac629a.mjs.map
