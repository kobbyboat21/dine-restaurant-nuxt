import { b as avatar, a as __nuxt_component_4, _ as __nuxt_component_0$1 } from './Sidebar-d3faee4d.mjs';
import { _ as __nuxt_component_0$2 } from './StatusCard-bef93be9.mjs';
import { u as useUI, s as select, d as selectMenu, a as __nuxt_component_1$1, g as get, _ as __nuxt_component_2$3 } from './Link-a292d72e.mjs';
import { _ as __nuxt_component_0$3 } from './Table-24ab41ed.mjs';
import { u as useInjectButtonGroup, a as useFormGroup, _ as __nuxt_component_1$2 } from './Button-be65dc1b.mjs';
import { defineComponent, computed, ref, watch, provide, h, cloneVNode, reactive, onMounted, Fragment, watchEffect, inject, onUnmounted, nextTick, toRef, useSSRContext, toRaw, mergeProps, withCtx, unref, isRef, openBlock, createBlock, createVNode, resolveComponent, resolveDynamicComponent, renderSlot, createCommentVNode, toDisplayString, renderList, createTextVNode, Transition } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { m as mergeConfig, a as appConfig, g as getSlotsChildren, _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_3 } from './Tooltip-2055d85c.mjs';
import { useDebounceFn, computedAsync } from '@vueuse/core';
import { t as defu } from '../../nitro/node-server.mjs';
import { a as w, t as t$1, i as i$1, l, u as usePopper, o as o$3, b as t, n as n$1 } from './usePopper-3eb33e86.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderVNode, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { useVirtualizer } from '@tanstack/vue-virtual';
import { o as o$1$1, u as u$2, f as f$2, k as E, s as s2, A as A$1, T, t as t$1$1, a as s$1, i as i$2, N as N$1, w as w$1, j as h$1, O, b as o$2 } from './micro-task-b624b8d4.mjs';
import { _ as __nuxt_component_2$2 } from './BlurryRestaurant-8cee3ee8.mjs';
import './LOGO-181a7eb6.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './Icon-3036ade8.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-96aaa589.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import 'node:fs';
import 'node:url';
import 'vue-router';
import './nuxt-link-6c200899.mjs';

function d(u2, e2, r2) {
  let i2 = ref(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i2.value), function(t2) {
    return f2.value || (i2.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
function r(e2) {
  return [e2.screenX, e2.screenY];
}
function u$1() {
  let e2 = ref([-1, -1]);
  return { wasMoved(n2) {
    let t2 = r(n2);
    return e2.value[0] === t2[0] && e2.value[1] === t2[1] ? false : (e2.value = t2, true);
  }, update(n2) {
    e2.value = r(n2);
  } };
}
function i({ container: e2, accept: t2, walk: d2, enabled: o2 }) {
  watchEffect(() => {
    let r2 = e2.value;
    if (!r2 || o2 !== void 0 && !o2.value)
      return;
    let l2 = i$2(e2);
    if (!l2)
      return;
    let c2 = Object.assign((f2) => t2(f2), { acceptNode: t2 }), n2 = l2.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c2, false);
    for (; n2.nextNode(); )
      d2(n2.currentNode);
  });
}
function u(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c || {});
function f$1(l2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let r2 = n2.resolveActiveIndex(), s2 = r2 != null ? r2 : -1;
  switch (l2.focus) {
    case 0: {
      for (let e2 = 0; e2 < t2.length; ++e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 1: {
      s2 === -1 && (s2 = t2.length);
      for (let e2 = s2 - 1; e2 >= 0; --e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 2: {
      for (let e2 = s2 + 1; e2 < t2.length; ++e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 3: {
      for (let e2 = t2.length - 1; e2 >= 0; --e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 4: {
      for (let e2 = 0; e2 < t2.length; ++e2)
        if (n2.resolveId(t2[e2], e2, t2) === l2.id)
          return e2;
      return r2;
    }
    case 5:
      return null;
    default:
      u(l2);
  }
}
function e(i2 = {}, s2 = null, t2 = []) {
  for (let [r2, n2] of Object.entries(i2))
    o$1(t2, f(s2, r2), n2);
  return t2;
}
function f(i2, s2) {
  return i2 ? i2 + "[" + s2 + "]" : s2;
}
function o$1(i2, s2, t2) {
  if (Array.isArray(t2))
    for (let [r2, n2] of t2.entries())
      o$1(i2, f(s2, r2.toString()), n2);
  else
    t2 instanceof Date ? i2.push([s2, t2.toISOString()]) : typeof t2 == "boolean" ? i2.push([s2, t2 ? "1" : "0"]) : typeof t2 == "string" ? i2.push([s2, t2]) : typeof t2 == "number" ? i2.push([s2, `${t2}`]) : t2 == null ? i2.push([s2, ""]) : e(t2, s2, i2);
}
function Pe(a2, I) {
  return a2 === I;
}
var we = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(we || {}), Ee = ((r2) => (r2[r2.Single = 0] = "Single", r2[r2.Multi = 1] = "Multi", r2))(Ee || {}), Ve = ((O2) => (O2[O2.Pointer = 0] = "Pointer", O2[O2.Focus = 1] = "Focus", O2[O2.Other = 2] = "Other", O2))(Ve || {});
let ne = Symbol("ComboboxContext");
function N(a2) {
  let I = inject(ne, null);
  if (I === null) {
    let r2 = new Error(`<${a2} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, N), r2;
  }
  return I;
}
let ie = Symbol("VirtualContext"), ke = defineComponent({ name: "VirtualProvider", setup(a2, { slots: I }) {
  let r2 = N("VirtualProvider"), O2 = computed(() => {
    let u2 = o$1$1(r2.optionsRef);
    if (!u2)
      return { start: 0, end: 0 };
    let d2 = window.getComputedStyle(u2);
    return { start: parseFloat(d2.paddingBlockStart || d2.paddingTop), end: parseFloat(d2.paddingBlockEnd || d2.paddingBottom) };
  }), t2 = useVirtualizer(computed(() => ({ scrollPaddingStart: O2.value.start, scrollPaddingEnd: O2.value.end, count: r2.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return o$1$1(r2.optionsRef);
  }, overscan: 12 }))), e2 = computed(() => {
    var u2;
    return (u2 = r2.virtual.value) == null ? void 0 : u2.options;
  }), R = ref(0);
  return watch([e2], () => {
    R.value += 1;
  }), provide(ie, r2.virtual.value ? t2 : null), () => [h("div", { style: { position: "relative", width: "100%", height: `${t2.value.getTotalSize()}px` }, ref: (u2) => {
    if (u2) {
      if (typeof process != "undefined" && process.env.JEST_WORKER_ID !== void 0 || r2.activationTrigger.value === 0)
        return;
      r2.activeOptionIndex.value !== null && r2.virtual.value.options.length > r2.activeOptionIndex.value && t2.value.scrollToIndex(r2.activeOptionIndex.value);
    }
  } }, t2.value.getVirtualItems().map((u2) => cloneVNode(I.default({ option: r2.virtual.value.options[u2.index], open: r2.comboboxState.value === 0 })[0], { key: `${R.value}-${u2.index}`, "data-index": u2.index, "aria-setsize": r2.virtual.value.options.length, "aria-posinset": u2.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${u2.start}px)`, overflowAnchor: "none" } })))];
} }), Ze = defineComponent({ name: "Combobox", emits: { "update:modelValue": (a2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], nullable: true, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false }, immediate: { type: [Boolean], default: false }, virtual: { type: Object, default: null } }, inheritAttrs: false, setup(a2, { slots: I, attrs: r2, emit: O$1 }) {
  let t$12 = ref(1), e$1 = ref(null), R = ref(null), u2 = ref(null), d$1 = ref(null), g2 = ref({ static: false, hold: false }), S = ref([]), m = ref(null), w$12 = ref(2), h$12 = ref(false);
  function F(l2 = (i2) => i2) {
    let i2 = m.value !== null ? S.value[m.value] : null, s2 = l2(S.value.slice()), f2 = s2.length > 0 && s2[0].dataRef.order.value !== null ? s2.sort((T2, L) => T2.dataRef.order.value - L.dataRef.order.value) : O(s2, (T2) => o$1$1(T2.dataRef.domRef)), y = i2 ? f2.indexOf(i2) : null;
    return y === -1 && (y = null), { options: f2, activeOptionIndex: y };
  }
  let M = computed(() => a2.multiple ? 1 : 0), K = computed(() => a2.nullable), [p2, o2] = d(computed(() => a2.modelValue), (l2) => O$1("update:modelValue", l2), computed(() => a2.defaultValue)), v = computed(() => p2.value === void 0 ? u$2(M.value, { [1]: [], [0]: void 0 }) : p2.value), c$1 = null, P = null;
  function C(l2) {
    return u$2(M.value, { [0]() {
      return o2 == null ? void 0 : o2(l2);
    }, [1]: () => {
      let i2 = toRaw(n2.value.value).slice(), s2 = toRaw(l2), f2 = i2.findIndex((y) => n2.compare(s2, toRaw(y)));
      return f2 === -1 ? i2.push(s2) : i2.splice(f2, 1), o2 == null ? void 0 : o2(i2);
    } });
  }
  let V = computed(() => {
  });
  watch([V], ([l2], [i2]) => {
    if (n2.virtual.value && l2 && i2 && m.value !== null) {
      let s2 = l2.indexOf(i2[m.value]);
      s2 !== -1 ? m.value = s2 : m.value = null;
    }
  });
  let n2 = { comboboxState: t$12, value: v, mode: M, compare(l2, i2) {
    if (typeof a2.by == "string") {
      let s2 = a2.by;
      return (l2 == null ? void 0 : l2[s2]) === (i2 == null ? void 0 : i2[s2]);
    }
    return a2.by === null ? Pe(l2, i2) : a2.by(l2, i2);
  }, calculateIndex(l2) {
    return n2.virtual.value ? a2.by === null ? n2.virtual.value.options.indexOf(l2) : n2.virtual.value.options.findIndex((i2) => n2.compare(i2, l2)) : S.value.findIndex((i2) => n2.compare(i2.dataRef.value, l2));
  }, defaultValue: computed(() => a2.defaultValue), nullable: K, immediate: computed(() => false), virtual: computed(() => null), inputRef: R, labelRef: e$1, buttonRef: u2, optionsRef: d$1, disabled: computed(() => a2.disabled), options: S, change(l2) {
    o2(l2);
  }, activeOptionIndex: computed(() => {
    if (h$12.value && m.value === null && (n2.virtual.value ? n2.virtual.value.options.length > 0 : S.value.length > 0)) {
      if (n2.virtual.value) {
        let i2 = n2.virtual.value.options.findIndex((s2) => {
          var f2;
          return !((f2 = n2.virtual.value) != null && f2.disabled(s2));
        });
        if (i2 !== -1)
          return i2;
      }
      let l2 = S.value.findIndex((i2) => !i2.dataRef.disabled);
      if (l2 !== -1)
        return l2;
    }
    return m.value;
  }), activationTrigger: w$12, optionsPropsRef: g2, closeCombobox() {
    h$12.value = false, !a2.disabled && t$12.value !== 1 && (t$12.value = 1, m.value = null);
  }, openCombobox() {
    if (h$12.value = true, !a2.disabled && t$12.value !== 0) {
      if (n2.value.value) {
        let l2 = n2.calculateIndex(n2.value.value);
        l2 !== -1 && (m.value = l2);
      }
      t$12.value = 0;
    }
  }, setActivationTrigger(l2) {
    w$12.value = l2;
  }, goToOption(l2, i2, s2) {
    h$12.value = false, c$1 !== null && cancelAnimationFrame(c$1), c$1 = requestAnimationFrame(() => {
      if (a2.disabled || d$1.value && !g2.value.static && t$12.value === 1)
        return;
      if (n2.virtual.value) {
        m.value = l2 === c.Specific ? i2 : f$1({ focus: l2 }, { resolveItems: () => n2.virtual.value.options, resolveActiveIndex: () => {
          var T2, L;
          return (L = (T2 = n2.activeOptionIndex.value) != null ? T2 : n2.virtual.value.options.findIndex((W) => {
            var U;
            return !((U = n2.virtual.value) != null && U.disabled(W));
          })) != null ? L : null;
        }, resolveDisabled: (T2) => n2.virtual.value.disabled(T2), resolveId() {
          throw new Error("Function not implemented.");
        } }), w$12.value = s2 != null ? s2 : 2;
        return;
      }
      let f2 = F();
      if (f2.activeOptionIndex === null) {
        let T2 = f2.options.findIndex((L) => !L.dataRef.disabled);
        T2 !== -1 && (f2.activeOptionIndex = T2);
      }
      let y = l2 === c.Specific ? i2 : f$1({ focus: l2 }, { resolveItems: () => f2.options, resolveActiveIndex: () => f2.activeOptionIndex, resolveId: (T2) => T2.id, resolveDisabled: (T2) => T2.dataRef.disabled });
      m.value = y, w$12.value = s2 != null ? s2 : 2, S.value = f2.options;
    });
  }, selectOption(l2) {
    let i2 = S.value.find((f2) => f2.id === l2);
    if (!i2)
      return;
    let { dataRef: s2 } = i2;
    C(s2.value);
  }, selectActiveOption() {
    if (n2.activeOptionIndex.value !== null) {
      if (n2.virtual.value)
        C(n2.virtual.value.options[n2.activeOptionIndex.value]);
      else {
        let { dataRef: l2 } = S.value[n2.activeOptionIndex.value];
        C(l2.value);
      }
      n2.goToOption(c.Specific, n2.activeOptionIndex.value);
    }
  }, registerOption(l2, i2) {
    let s2 = reactive({ id: l2, dataRef: i2 });
    if (n2.virtual.value) {
      S.value.push(s2);
      return;
    }
    P && cancelAnimationFrame(P);
    let f2 = F((y) => (y.push(s2), y));
    m.value === null && n2.isSelected(i2.value.value) && (f2.activeOptionIndex = f2.options.indexOf(s2)), S.value = f2.options, m.value = f2.activeOptionIndex, w$12.value = 2, f2.options.some((y) => !o$1$1(y.dataRef.domRef)) && (P = requestAnimationFrame(() => {
      let y = F();
      S.value = y.options, m.value = y.activeOptionIndex;
    }));
  }, unregisterOption(l2, i2) {
    if (c$1 !== null && cancelAnimationFrame(c$1), i2 && (h$12.value = true), n2.virtual.value) {
      S.value = S.value.filter((f2) => f2.id !== l2);
      return;
    }
    let s2 = F((f2) => {
      let y = f2.findIndex((T2) => T2.id === l2);
      return y !== -1 && f2.splice(y, 1), f2;
    });
    S.value = s2.options, m.value = s2.activeOptionIndex, w$12.value = 2;
  }, isSelected(l2) {
    return u$2(M.value, { [0]: () => n2.compare(toRaw(n2.value.value), toRaw(l2)), [1]: () => toRaw(n2.value.value).some((i2) => n2.compare(toRaw(i2), toRaw(l2))) });
  }, isActive(l2) {
    return m.value === n2.calculateIndex(l2);
  } };
  w([R, u2, d$1], () => n2.closeCombobox(), computed(() => t$12.value === 0)), provide(ne, n2), t$1(computed(() => u$2(t$12.value, { [0]: i$1.Open, [1]: i$1.Closed })));
  let D = computed(() => {
    var l2;
    return (l2 = o$1$1(R)) == null ? void 0 : l2.closest("form");
  });
  return onMounted(() => {
    watch([D], () => {
      if (!D.value || a2.defaultValue === void 0)
        return;
      function l2() {
        n2.change(a2.defaultValue);
      }
      return D.value.addEventListener("reset", l2), () => {
        var i2;
        (i2 = D.value) == null || i2.removeEventListener("reset", l2);
      };
    }, { immediate: true });
  }), () => {
    var T$1, L, W;
    let { name: l2, disabled: i2, form: s$12, ...f2 } = a2, y = { open: t$12.value === 0, disabled: i2, activeIndex: n2.activeOptionIndex.value, activeOption: n2.activeOptionIndex.value === null ? null : n2.virtual.value ? n2.virtual.value.options[(T$1 = n2.activeOptionIndex.value) != null ? T$1 : 0] : (W = (L = n2.options.value[n2.activeOptionIndex.value]) == null ? void 0 : L.dataRef.value.value) != null ? W : null, value: v.value };
    return h(Fragment, [...l2 != null && v.value != null ? e({ [l2]: v.value }).map(([U, ue]) => h(f$2, E({ features: s2.Hidden, key: U, as: "input", type: "hidden", hidden: true, readOnly: true, form: s$12, name: U, value: ue }))) : [], A$1({ theirProps: { ...r2, ...T(f2, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: y, slots: I, attrs: r2, name: "Combobox" })]);
  };
} });
defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${t$1$1()}` } }, setup(a2, { attrs: I, slots: r2 }) {
  let O2 = N("ComboboxLabel");
  function t2() {
    var e2;
    (e2 = o$1$1(O2.inputRef)) == null || e2.focus({ preventScroll: true });
  }
  return () => {
    let e2 = { open: O2.comboboxState.value === 0, disabled: O2.disabled.value }, { id: R, ...u2 } = a2, d2 = { id: R, ref: O2.labelRef, onClick: t2 };
    return A$1({ ourProps: d2, theirProps: u2, slot: e2, attrs: I, slots: r2, name: "ComboboxLabel" });
  };
} });
let tt = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${t$1$1()}` } }, setup(a2, { attrs: I, slots: r2, expose: O2 }) {
  let t2 = N("ComboboxButton");
  O2({ el: t2.buttonRef, $el: t2.buttonRef });
  function e2(d2) {
    t2.disabled.value || (t2.comboboxState.value === 0 ? t2.closeCombobox() : (d2.preventDefault(), t2.openCombobox()), nextTick(() => {
      var g2;
      return (g2 = o$1$1(t2.inputRef)) == null ? void 0 : g2.focus({ preventScroll: true });
    }));
  }
  function R(d2) {
    switch (d2.key) {
      case o$2.ArrowDown:
        d2.preventDefault(), d2.stopPropagation(), t2.comboboxState.value === 1 && t2.openCombobox(), nextTick(() => {
          var g2;
          return (g2 = t2.inputRef.value) == null ? void 0 : g2.focus({ preventScroll: true });
        });
        return;
      case o$2.ArrowUp:
        d2.preventDefault(), d2.stopPropagation(), t2.comboboxState.value === 1 && (t2.openCombobox(), nextTick(() => {
          t2.value.value || t2.goToOption(c.Last);
        })), nextTick(() => {
          var g2;
          return (g2 = t2.inputRef.value) == null ? void 0 : g2.focus({ preventScroll: true });
        });
        return;
      case o$2.Escape:
        if (t2.comboboxState.value !== 0)
          return;
        d2.preventDefault(), t2.optionsRef.value && !t2.optionsPropsRef.value.static && d2.stopPropagation(), t2.closeCombobox(), nextTick(() => {
          var g2;
          return (g2 = t2.inputRef.value) == null ? void 0 : g2.focus({ preventScroll: true });
        });
        return;
    }
  }
  let u2 = s$1(computed(() => ({ as: a2.as, type: I.type })), t2.buttonRef);
  return () => {
    var w2, h2;
    let d2 = { open: t2.comboboxState.value === 0, disabled: t2.disabled.value, value: t2.value.value }, { id: g2, ...S } = a2, m = { ref: t2.buttonRef, id: g2, type: u2.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (w2 = o$1$1(t2.optionsRef)) == null ? void 0 : w2.id, "aria-expanded": t2.comboboxState.value === 0, "aria-labelledby": t2.labelRef.value ? [(h2 = o$1$1(t2.labelRef)) == null ? void 0 : h2.id, g2].join(" ") : void 0, disabled: t2.disabled.value === true ? true : void 0, onKeydown: R, onClick: e2 };
    return A$1({ ourProps: m, theirProps: S, slot: d2, attrs: I, slots: r2, name: "ComboboxButton" });
  };
} }), ot = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${t$1$1()}` } }, emits: { change: (a2) => true }, setup(a2, { emit: I, attrs: r2, slots: O2, expose: t2 }) {
  let e2 = N("ComboboxInput"), R = computed(() => i$2(o$1$1(e2.inputRef))), u2 = { value: false };
  t2({ el: e2.inputRef, $el: e2.inputRef });
  function d2() {
    e2.change(null);
    let o2 = o$1$1(e2.optionsRef);
    o2 && (o2.scrollTop = 0), e2.goToOption(c.Nothing);
  }
  let g2 = computed(() => {
    var v;
    let o2 = e2.value.value;
    return o$1$1(e2.inputRef) ? typeof a2.displayValue != "undefined" && o2 !== void 0 ? (v = a2.displayValue(o2)) != null ? v : "" : typeof o2 == "string" ? o2 : "" : "";
  });
  onMounted(() => {
    watch([g2, e2.comboboxState, R], ([o2, v], [c2, P]) => {
      if (u2.value)
        return;
      let C = o$1$1(e2.inputRef);
      C && ((P === 0 && v === 1 || o2 !== c2) && (C.value = o2), requestAnimationFrame(() => {
        var D;
        if (u2.value || !C || ((D = R.value) == null ? void 0 : D.activeElement) !== C)
          return;
        let { selectionStart: V, selectionEnd: n2 } = C;
        Math.abs((n2 != null ? n2 : 0) - (V != null ? V : 0)) === 0 && V === 0 && C.setSelectionRange(C.value.length, C.value.length);
      }));
    }, { immediate: true }), watch([e2.comboboxState], ([o2], [v]) => {
      if (o2 === 0 && v === 1) {
        if (u2.value)
          return;
        let c2 = o$1$1(e2.inputRef);
        if (!c2)
          return;
        let P = c2.value, { selectionStart: C, selectionEnd: V, selectionDirection: n2 } = c2;
        c2.value = "", c2.value = P, n2 !== null ? c2.setSelectionRange(C, V, n2) : c2.setSelectionRange(C, V);
      }
    });
  });
  let S = ref(false);
  function m() {
    S.value = true;
  }
  function w2() {
    o$3().nextFrame(() => {
      S.value = false;
    });
  }
  function h2(o2) {
    switch (u2.value = true, o2.key) {
      case o$2.Enter:
        if (u2.value = false, e2.comboboxState.value !== 0 || S.value)
          return;
        if (o2.preventDefault(), o2.stopPropagation(), e2.activeOptionIndex.value === null) {
          e2.closeCombobox();
          return;
        }
        e2.selectActiveOption(), e2.mode.value === 0 && e2.closeCombobox();
        break;
      case o$2.ArrowDown:
        return u2.value = false, o2.preventDefault(), o2.stopPropagation(), u$2(e2.comboboxState.value, { [0]: () => e2.goToOption(c.Next), [1]: () => e2.openCombobox() });
      case o$2.ArrowUp:
        return u2.value = false, o2.preventDefault(), o2.stopPropagation(), u$2(e2.comboboxState.value, { [0]: () => e2.goToOption(c.Previous), [1]: () => {
          e2.openCombobox(), nextTick(() => {
            e2.value.value || e2.goToOption(c.Last);
          });
        } });
      case o$2.Home:
        if (o2.shiftKey)
          break;
        return u2.value = false, o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.First);
      case o$2.PageUp:
        return u2.value = false, o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.First);
      case o$2.End:
        if (o2.shiftKey)
          break;
        return u2.value = false, o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.Last);
      case o$2.PageDown:
        return u2.value = false, o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.Last);
      case o$2.Escape:
        if (u2.value = false, e2.comboboxState.value !== 0)
          return;
        o2.preventDefault(), e2.optionsRef.value && !e2.optionsPropsRef.value.static && o2.stopPropagation(), e2.nullable.value && e2.mode.value === 0 && e2.value.value === null && d2(), e2.closeCombobox();
        break;
      case o$2.Tab:
        if (u2.value = false, e2.comboboxState.value !== 0)
          return;
        e2.mode.value === 0 && e2.activationTrigger.value !== 1 && e2.selectActiveOption(), e2.closeCombobox();
        break;
    }
  }
  function F(o2) {
    I("change", o2), e2.nullable.value && e2.mode.value === 0 && o2.target.value === "" && d2(), e2.openCombobox();
  }
  function M(o2) {
    var c2, P, C;
    let v = (c2 = o2.relatedTarget) != null ? c2 : t.find((V) => V !== o2.currentTarget);
    if (u2.value = false, !((P = o$1$1(e2.optionsRef)) != null && P.contains(v)) && !((C = o$1$1(e2.buttonRef)) != null && C.contains(v)) && e2.comboboxState.value === 0)
      return o2.preventDefault(), e2.mode.value === 0 && (e2.nullable.value && e2.value.value === null ? d2() : e2.activationTrigger.value !== 1 && e2.selectActiveOption()), e2.closeCombobox();
  }
  function K(o2) {
    var c2, P, C;
    let v = (c2 = o2.relatedTarget) != null ? c2 : t.find((V) => V !== o2.currentTarget);
    (P = o$1$1(e2.buttonRef)) != null && P.contains(v) || (C = o$1$1(e2.optionsRef)) != null && C.contains(v) || e2.disabled.value || e2.immediate.value && e2.comboboxState.value !== 0 && (e2.openCombobox(), o$3().nextFrame(() => {
      e2.setActivationTrigger(1);
    }));
  }
  let p2 = computed(() => {
    var o2, v, c2, P;
    return (P = (c2 = (v = a2.defaultValue) != null ? v : e2.defaultValue.value !== void 0 ? (o2 = a2.displayValue) == null ? void 0 : o2.call(a2, e2.defaultValue.value) : null) != null ? c2 : e2.defaultValue.value) != null ? P : "";
  });
  return () => {
    var n2, D, l2, i2, s2, f2, y;
    let o2 = { open: e2.comboboxState.value === 0 }, { id: v, displayValue: c2, onChange: P, ...C } = a2, V = { "aria-controls": (n2 = e2.optionsRef.value) == null ? void 0 : n2.id, "aria-expanded": e2.comboboxState.value === 0, "aria-activedescendant": e2.activeOptionIndex.value === null ? void 0 : e2.virtual.value ? (D = e2.options.value.find((T2) => !e2.virtual.value.disabled(T2.dataRef.value) && e2.compare(T2.dataRef.value, e2.virtual.value.options[e2.activeOptionIndex.value]))) == null ? void 0 : D.id : (l2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : l2.id, "aria-labelledby": (f2 = (i2 = o$1$1(e2.labelRef)) == null ? void 0 : i2.id) != null ? f2 : (s2 = o$1$1(e2.buttonRef)) == null ? void 0 : s2.id, "aria-autocomplete": "list", id: v, onCompositionstart: m, onCompositionend: w2, onKeydown: h2, onInput: F, onFocus: K, onBlur: M, role: "combobox", type: (y = r2.type) != null ? y : "text", tabIndex: 0, ref: e2.inputRef, defaultValue: p2.value, disabled: e2.disabled.value === true ? true : void 0 };
    return A$1({ ourProps: V, theirProps: C, slot: o2, attrs: r2, slots: O2, features: N$1.RenderStrategy | N$1.Static, name: "ComboboxInput" });
  };
} }), lt = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(a2, { attrs: I, slots: r2, expose: O2 }) {
  let t2 = N("ComboboxOptions"), e2 = `headlessui-combobox-options-${t$1$1()}`;
  O2({ el: t2.optionsRef, $el: t2.optionsRef }), watchEffect(() => {
    t2.optionsPropsRef.value.static = a2.static;
  }), watchEffect(() => {
    t2.optionsPropsRef.value.hold = a2.hold;
  });
  let R = l(), u2 = computed(() => R !== null ? (R.value & i$1.Open) === i$1.Open : t2.comboboxState.value === 0);
  return i({ container: computed(() => o$1$1(t2.optionsRef)), enabled: computed(() => t2.comboboxState.value === 0), accept(d2) {
    return d2.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d2) {
    d2.setAttribute("role", "none");
  } }), () => {
    var m, w2, h$12;
    let d2 = { open: t2.comboboxState.value === 0 }, g2 = { "aria-labelledby": (h$12 = (m = o$1$1(t2.labelRef)) == null ? void 0 : m.id) != null ? h$12 : (w2 = o$1$1(t2.buttonRef)) == null ? void 0 : w2.id, id: e2, ref: t2.optionsRef, role: "listbox", "aria-multiselectable": t2.mode.value === 1 ? true : void 0 }, S = T(a2, ["hold"]);
    return A$1({ ourProps: g2, theirProps: S, slot: d2, attrs: I, slots: t2.virtual.value && t2.comboboxState.value === 0 ? { ...r2, default: () => [h(ke, {}, r2.default)] } : r2, features: N$1.RenderStrategy | N$1.Static, visible: u2.value, name: "ComboboxOptions" });
  };
} }), at = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, order: { type: [Number], default: null } }, setup(a2, { slots: I, attrs: r2, expose: O2 }) {
  let t2 = N("ComboboxOption"), e2 = `headlessui-combobox-option-${t$1$1()}`, R = ref(null);
  O2({ el: R, $el: R });
  let u2 = computed(() => {
    var p2;
    return t2.virtual.value ? t2.activeOptionIndex.value === t2.calculateIndex(a2.value) : t2.activeOptionIndex.value === null ? false : ((p2 = t2.options.value[t2.activeOptionIndex.value]) == null ? void 0 : p2.id) === e2;
  }), d2 = computed(() => t2.isSelected(a2.value)), g2 = inject(ie, null), S = computed(() => ({ disabled: a2.disabled, value: a2.value, domRef: R, order: computed(() => a2.order) }));
  onMounted(() => t2.registerOption(e2, S)), onUnmounted(() => t2.unregisterOption(e2, u2.value)), watchEffect(() => {
    let p2 = o$1$1(R);
    p2 && (g2 == null || g2.value.measureElement(p2));
  }), watchEffect(() => {
    t2.comboboxState.value === 0 && u2.value && (t2.virtual.value || t2.activationTrigger.value !== 0 && nextTick(() => {
      var p2, o2;
      return (o2 = (p2 = o$1$1(R)) == null ? void 0 : p2.scrollIntoView) == null ? void 0 : o2.call(p2, { block: "nearest" });
    }));
  });
  function m(p2) {
    var o2;
    if (a2.disabled || (o2 = t2.virtual.value) != null && o2.disabled(a2.value))
      return p2.preventDefault();
    t2.selectOption(e2), n$1() || requestAnimationFrame(() => {
      var v;
      return (v = o$1$1(t2.inputRef)) == null ? void 0 : v.focus({ preventScroll: true });
    }), t2.mode.value === 0 && requestAnimationFrame(() => t2.closeCombobox());
  }
  function w2() {
    var o2;
    if (a2.disabled || (o2 = t2.virtual.value) != null && o2.disabled(a2.value))
      return t2.goToOption(c.Nothing);
    let p2 = t2.calculateIndex(a2.value);
    t2.goToOption(c.Specific, p2);
  }
  let h2 = u$1();
  function F(p2) {
    h2.update(p2);
  }
  function M(p2) {
    var v;
    if (!h2.wasMoved(p2) || a2.disabled || (v = t2.virtual.value) != null && v.disabled(a2.value) || u2.value)
      return;
    let o2 = t2.calculateIndex(a2.value);
    t2.goToOption(c.Specific, o2, 0);
  }
  function K(p2) {
    var o2;
    h2.wasMoved(p2) && (a2.disabled || (o2 = t2.virtual.value) != null && o2.disabled(a2.value) || u2.value && (t2.optionsPropsRef.value.hold || t2.goToOption(c.Nothing)));
  }
  return () => {
    let { disabled: p2 } = a2, o2 = { active: u2.value, selected: d2.value, disabled: p2 }, v = { id: e2, ref: R, role: "option", tabIndex: p2 === true ? void 0 : -1, "aria-disabled": p2 === true ? true : void 0, "aria-selected": d2.value, disabled: void 0, onClick: m, onFocus: w2, onPointerenter: F, onMouseenter: F, onPointermove: M, onMousemove: M, onPointerleave: K, onMouseleave: K }, c2 = T(a2, ["order", "value"]);
    return A$1({ ourProps: v, theirProps: c2, slot: o2, attrs: r2, slots: I, name: "ComboboxOption" });
  };
} });
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e2) {
  var r2, i2;
  let n2 = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n2;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u2 = true;
  let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g(e2) {
  let n2 = e2.getAttribute("aria-label");
  if (typeof n2 == "string")
    return n2.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = document.getElementById(l2);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0)
      return u2.join(", ");
  }
  return o(e2).trim();
}
function p(a2) {
  let t2 = ref(""), r2 = ref("");
  return () => {
    let e2 = o$1$1(a2);
    if (!e2)
      return "";
    let l2 = e2.innerText;
    if (t2.value === l2)
      return r2.value;
    let u2 = g(e2).trim().toLowerCase();
    return t2.value = l2, r2.value = u2, u2;
  };
}
function pe(t2, c2) {
  return t2 === c2;
}
var ce = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(ce || {}), ve = ((l2) => (l2[l2.Single = 0] = "Single", l2[l2.Multi = 1] = "Multi", l2))(ve || {}), be = ((l2) => (l2[l2.Pointer = 0] = "Pointer", l2[l2.Other = 1] = "Other", l2))(be || {});
function me(t2) {
  requestAnimationFrame(() => requestAnimationFrame(t2));
}
let $ = Symbol("ListboxContext");
function A(t2) {
  let c2 = inject($, null);
  if (c2 === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, A), l2;
  }
  return c2;
}
let Ie = defineComponent({ name: "Listbox", emits: { "update:modelValue": (t2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(t$12, { slots: c$1, attrs: l2, emit: L }) {
  let e$1 = ref(1), d$1 = ref(null), v = ref(null), b = ref(null), f2 = ref([]), o2 = ref(""), i2 = ref(null), T$1 = ref(1);
  function D(a2 = (n2) => n2) {
    let n2 = i2.value !== null ? f2.value[i2.value] : null, u2 = O(a2(f2.value.slice()), (O2) => o$1$1(O2.dataRef.domRef)), s2 = n2 ? u2.indexOf(n2) : null;
    return s2 === -1 && (s2 = null), { options: u2, activeOptionIndex: s2 };
  }
  let y = computed(() => t$12.multiple ? 1 : 0), [h$2, V] = d(computed(() => t$12.modelValue), (a2) => L("update:modelValue", a2), computed(() => t$12.defaultValue)), M = computed(() => h$2.value === void 0 ? u$2(y.value, { [1]: [], [0]: void 0 }) : h$2.value), r2 = { listboxState: e$1, value: M, mode: y, compare(a2, n2) {
    if (typeof t$12.by == "string") {
      let u2 = t$12.by;
      return (a2 == null ? void 0 : a2[u2]) === (n2 == null ? void 0 : n2[u2]);
    }
    return t$12.by(a2, n2);
  }, orientation: computed(() => t$12.horizontal ? "horizontal" : "vertical"), labelRef: d$1, buttonRef: v, optionsRef: b, disabled: computed(() => t$12.disabled), options: f2, searchQuery: o2, activeOptionIndex: i2, activationTrigger: T$1, closeListbox() {
    t$12.disabled || e$1.value !== 1 && (e$1.value = 1, i2.value = null);
  }, openListbox() {
    t$12.disabled || e$1.value !== 0 && (e$1.value = 0);
  }, goToOption(a2, n2, u2) {
    if (t$12.disabled || e$1.value === 1)
      return;
    let s2 = D(), O2 = f$1(a2 === c.Specific ? { focus: c.Specific, id: n2 } : { focus: a2 }, { resolveItems: () => s2.options, resolveActiveIndex: () => s2.activeOptionIndex, resolveId: (k) => k.id, resolveDisabled: (k) => k.dataRef.disabled });
    o2.value = "", i2.value = O2, T$1.value = u2 != null ? u2 : 1, f2.value = s2.options;
  }, search(a2) {
    if (t$12.disabled || e$1.value === 1)
      return;
    let u2 = o2.value !== "" ? 0 : 1;
    o2.value += a2.toLowerCase();
    let O2 = (i2.value !== null ? f2.value.slice(i2.value + u2).concat(f2.value.slice(0, i2.value + u2)) : f2.value).find((I) => I.dataRef.textValue.startsWith(o2.value) && !I.dataRef.disabled), k = O2 ? f2.value.indexOf(O2) : -1;
    k === -1 || k === i2.value || (i2.value = k, T$1.value = 1);
  }, clearSearch() {
    t$12.disabled || e$1.value !== 1 && o2.value !== "" && (o2.value = "");
  }, registerOption(a2, n2) {
    let u2 = D((s2) => [...s2, { id: a2, dataRef: n2 }]);
    f2.value = u2.options, i2.value = u2.activeOptionIndex;
  }, unregisterOption(a2) {
    let n2 = D((u2) => {
      let s2 = u2.findIndex((O2) => O2.id === a2);
      return s2 !== -1 && u2.splice(s2, 1), u2;
    });
    f2.value = n2.options, i2.value = n2.activeOptionIndex, T$1.value = 1;
  }, theirOnChange(a2) {
    t$12.disabled || V(a2);
  }, select(a2) {
    t$12.disabled || V(u$2(y.value, { [0]: () => a2, [1]: () => {
      let n2 = toRaw(r2.value.value).slice(), u2 = toRaw(a2), s2 = n2.findIndex((O2) => r2.compare(u2, toRaw(O2)));
      return s2 === -1 ? n2.push(u2) : n2.splice(s2, 1), n2;
    } }));
  } };
  w([v, b], (a2, n2) => {
    var u2;
    r2.closeListbox(), w$1(n2, h$1.Loose) || (a2.preventDefault(), (u2 = o$1$1(v)) == null || u2.focus());
  }, computed(() => e$1.value === 0)), provide($, r2), t$1(computed(() => u$2(e$1.value, { [0]: i$1.Open, [1]: i$1.Closed })));
  let m = computed(() => {
    var a2;
    return (a2 = o$1$1(v)) == null ? void 0 : a2.closest("form");
  });
  return onMounted(() => {
    watch([m], () => {
      if (!m.value || t$12.defaultValue === void 0)
        return;
      function a2() {
        r2.theirOnChange(t$12.defaultValue);
      }
      return m.value.addEventListener("reset", a2), () => {
        var n2;
        (n2 = m.value) == null || n2.removeEventListener("reset", a2);
      };
    }, { immediate: true });
  }), () => {
    let { name: a2, modelValue: n2, disabled: u2, form: s$12, ...O2 } = t$12, k = { open: e$1.value === 0, disabled: u2, value: M.value };
    return h(Fragment, [...a2 != null && M.value != null ? e({ [a2]: M.value }).map(([I, Q]) => h(f$2, E({ features: s2.Hidden, key: I, as: "input", type: "hidden", hidden: true, readOnly: true, form: s$12, name: I, value: Q }))) : [], A$1({ ourProps: {}, theirProps: { ...l2, ...T(O2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: k, slots: c$1, attrs: l2, name: "Listbox" })]);
  };
} });
defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${t$1$1()}` } }, setup(t2, { attrs: c2, slots: l2 }) {
  let L = A("ListboxLabel");
  function e2() {
    var d2;
    (d2 = o$1$1(L.buttonRef)) == null || d2.focus({ preventScroll: true });
  }
  return () => {
    let d2 = { open: L.listboxState.value === 0, disabled: L.disabled.value }, { id: v, ...b } = t2, f2 = { id: v, ref: L.labelRef, onClick: e2 };
    return A$1({ ourProps: f2, theirProps: b, slot: d2, attrs: c2, slots: l2, name: "ListboxLabel" });
  };
} });
let je = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${t$1$1()}` } }, setup(t2, { attrs: c$1, slots: l2, expose: L }) {
  let e2 = A("ListboxButton");
  L({ el: e2.buttonRef, $el: e2.buttonRef });
  function d2(o2) {
    switch (o2.key) {
      case o$2.Space:
      case o$2.Enter:
      case o$2.ArrowDown:
        o2.preventDefault(), e2.openListbox(), nextTick(() => {
          var i2;
          (i2 = o$1$1(e2.optionsRef)) == null || i2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c.First);
        });
        break;
      case o$2.ArrowUp:
        o2.preventDefault(), e2.openListbox(), nextTick(() => {
          var i2;
          (i2 = o$1$1(e2.optionsRef)) == null || i2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c.Last);
        });
        break;
    }
  }
  function v(o2) {
    switch (o2.key) {
      case o$2.Space:
        o2.preventDefault();
        break;
    }
  }
  function b(o2) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var i2;
      return (i2 = o$1$1(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    })) : (o2.preventDefault(), e2.openListbox(), me(() => {
      var i2;
      return (i2 = o$1$1(e2.optionsRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    })));
  }
  let f2 = s$1(computed(() => ({ as: t2.as, type: c$1.type })), e2.buttonRef);
  return () => {
    var y, h2;
    let o2 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { id: i2, ...T2 } = t2, D = { ref: e2.buttonRef, id: i2, type: f2.value, "aria-haspopup": "listbox", "aria-controls": (y = o$1$1(e2.optionsRef)) == null ? void 0 : y.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(h2 = o$1$1(e2.labelRef)) == null ? void 0 : h2.id, i2].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: d2, onKeyup: v, onClick: b };
    return A$1({ ourProps: D, theirProps: T2, slot: o2, attrs: c$1, slots: l2, name: "ListboxButton" });
  };
} }), Ae = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-listbox-options-${t$1$1()}` } }, setup(t2, { attrs: c$1, slots: l$1, expose: L }) {
  let e2 = A("ListboxOptions"), d2 = ref(null);
  L({ el: e2.optionsRef, $el: e2.optionsRef });
  function v(o2) {
    switch (d2.value && clearTimeout(d2.value), o2.key) {
      case o$2.Space:
        if (e2.searchQuery.value !== "")
          return o2.preventDefault(), o2.stopPropagation(), e2.search(o2.key);
      case o$2.Enter:
        if (o2.preventDefault(), o2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let i2 = e2.options.value[e2.activeOptionIndex.value];
          e2.select(i2.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var i2;
          return (i2 = o$1$1(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
        }));
        break;
      case u$2(e2.orientation.value, { vertical: o$2.ArrowDown, horizontal: o$2.ArrowRight }):
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.Next);
      case u$2(e2.orientation.value, { vertical: o$2.ArrowUp, horizontal: o$2.ArrowLeft }):
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.Previous);
      case o$2.Home:
      case o$2.PageUp:
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.First);
      case o$2.End:
      case o$2.PageDown:
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.Last);
      case o$2.Escape:
        o2.preventDefault(), o2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var i2;
          return (i2 = o$1$1(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
        });
        break;
      case o$2.Tab:
        o2.preventDefault(), o2.stopPropagation();
        break;
      default:
        o2.key.length === 1 && (e2.search(o2.key), d2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let b = l(), f2 = computed(() => b !== null ? (b.value & i$1.Open) === i$1.Open : e2.listboxState.value === 0);
  return () => {
    var y, h2;
    let o2 = { open: e2.listboxState.value === 0 }, { id: i2, ...T2 } = t2, D = { "aria-activedescendant": e2.activeOptionIndex.value === null || (y = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : y.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (h2 = o$1$1(e2.buttonRef)) == null ? void 0 : h2.id, "aria-orientation": e2.orientation.value, id: i2, onKeydown: v, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return A$1({ ourProps: D, theirProps: T2, slot: o2, attrs: c$1, slots: l$1, features: N$1.RenderStrategy | N$1.Static, visible: f2.value, name: "ListboxOptions" });
  };
} }), Fe = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-listbox.option-${t$1$1()}` } }, setup(t2, { slots: c$1, attrs: l2, expose: L }) {
  let e2 = A("ListboxOption"), d2 = ref(null);
  L({ el: d2, $el: d2 });
  let v = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === t2.id : false), b = computed(() => u$2(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(t2.value)), [1]: () => toRaw(e2.value.value).some((r2) => e2.compare(toRaw(r2), toRaw(t2.value))) })), f2 = computed(() => u$2(e2.mode.value, { [1]: () => {
    var m;
    let r2 = toRaw(e2.value.value);
    return ((m = e2.options.value.find((a2) => r2.some((n2) => e2.compare(toRaw(n2), toRaw(a2.dataRef.value))))) == null ? void 0 : m.id) === t2.id;
  }, [0]: () => b.value })), o2 = p(d2), i2 = computed(() => ({ disabled: t2.disabled, value: t2.value, get textValue() {
    return o2();
  }, domRef: d2 }));
  onMounted(() => e2.registerOption(t2.id, i2)), onUnmounted(() => e2.unregisterOption(t2.id)), onMounted(() => {
    watch([e2.listboxState, b], () => {
      e2.listboxState.value === 0 && b.value && u$2(e2.mode.value, { [1]: () => {
        f2.value && e2.goToOption(c.Specific, t2.id);
      }, [0]: () => {
        e2.goToOption(c.Specific, t2.id);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && v.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var r2, m;
      return (m = (r2 = o$1$1(d2)) == null ? void 0 : r2.scrollIntoView) == null ? void 0 : m.call(r2, { block: "nearest" });
    });
  });
  function T2(r2) {
    if (t2.disabled)
      return r2.preventDefault();
    e2.select(t2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var m;
      return (m = o$1$1(e2.buttonRef)) == null ? void 0 : m.focus({ preventScroll: true });
    }));
  }
  function D() {
    if (t2.disabled)
      return e2.goToOption(c.Nothing);
    e2.goToOption(c.Specific, t2.id);
  }
  let y = u$1();
  function h2(r2) {
    y.update(r2);
  }
  function V(r2) {
    y.wasMoved(r2) && (t2.disabled || v.value || e2.goToOption(c.Specific, t2.id, 0));
  }
  function M(r2) {
    y.wasMoved(r2) && (t2.disabled || v.value && e2.goToOption(c.Nothing));
  }
  return () => {
    let { disabled: r2 } = t2, m = { active: v.value, selected: b.value, disabled: r2 }, { id: a2, value: n2, disabled: u2, ...s2 } = t2, O2 = { id: a2, ref: d2, role: "option", tabIndex: r2 === true ? void 0 : -1, "aria-disabled": r2 === true ? true : void 0, "aria-selected": b.value, disabled: void 0, onClick: T2, onFocus: D, onPointerenter: h2, onMouseenter: h2, onPointermove: V, onMousemove: V, onPointerleave: M, onMouseleave: M };
    return A$1({ ourProps: O2, theirProps: s2, slot: m, attrs: l2, slots: c$1, name: "ListboxOption" });
  };
} });
const avatarGroup = {
  wrapper: "inline-flex flex-row-reverse justify-end",
  ring: "ring-2 ring-white dark:ring-gray-900",
  margin: "-me-1.5 first:me-0"
};
const avatarConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const avatarGroupConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatarGroup, avatarGroup);
const __nuxt_component_2$1 = defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(avatarConfig.size).includes(value);
      }
    },
    max: {
      type: Number,
      default: null
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
  setup(props, { slots }) {
    const { ui, attrs } = useUI("avatarGroup", toRef(props, "ui"), avatarGroupConfig, toRef(props, "class"));
    const children = computed(() => getSlotsChildren(slots));
    const max = computed(() => typeof props.max === "string" ? parseInt(props.max, 10) : props.max);
    const clones = computed(() => children.value.map((node, index) => {
      const vProps = {};
      if (!props.max || max.value && index < max.value) {
        if (props.size) {
          vProps.size = props.size;
        }
        vProps.class = node.props.class || "";
        vProps.class = twMerge(twJoin(vProps.class, ui.value.ring, ui.value.margin), vProps.class);
        return cloneVNode(node, vProps);
      }
      if (max.value !== void 0 && index === max.value) {
        return h(__nuxt_component_4, {
          size: props.size || avatarConfig.default.size,
          text: `+${children.value.length - max.value}`,
          class: twJoin(ui.value.ring, ui.value.margin)
        });
      }
      return null;
    }).filter(Boolean).reverse());
    return () => h("div", { class: ui.value.wrapper, ...attrs.value }, clones.value);
  }
});
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.select, select);
const configMenu = mergeConfig(appConfig.ui.strategy, appConfig.ui.selectMenu, selectMenu);
const _sfc_main$4 = defineComponent({
  components: {
    HCombobox: Ze,
    HComboboxButton: tt,
    HComboboxOptions: lt,
    HComboboxOption: at,
    HComboboxInput: ot,
    HListbox: Ie,
    HListboxButton: je,
    HListboxOptions: Ae,
    HListboxOption: Fe,
    UIcon: __nuxt_component_1$1,
    UAvatar: __nuxt_component_4
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array],
      default: ""
    },
    query: {
      type: String,
      default: null
    },
    by: {
      type: String,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
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
      default: () => config.default.trailingIcon
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
    selectedIcon: {
      type: String,
      default: () => configMenu.default.selectedIcon
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: [Boolean, Function],
      default: false
    },
    searchablePlaceholder: {
      type: String,
      default: "Search..."
    },
    clearSearchOnClose: {
      type: Boolean,
      default: () => configMenu.default.clearSearchOnClose
    },
    debounce: {
      type: Number,
      default: 200
    },
    creatable: {
      type: Boolean,
      default: false
    },
    showCreateOptionWhen: {
      type: String,
      default: () => configMenu.default.showCreateOptionWhen
    },
    placeholder: {
      type: String,
      default: null
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
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: null
    },
    searchAttributes: {
      type: Array,
      default: null
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    selectClass: {
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
    uiMenu: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "update:query", "open", "close", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("select", toRef(props, "ui"), config, toRef(props, "class"));
    const { ui: uiMenu } = useUI("selectMenu", toRef(props, "uiMenu"), configMenu);
    const popper = computed(() => defu({}, props.popper, uiMenu.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config);
    const size = computed(() => sizeButtonGroup.value || sizeFormGroup.value);
    const internalQuery = ref("");
    const query = computed({
      get() {
        var _a;
        return (_a = props.query) != null ? _a : internalQuery.value;
      },
      set(value) {
        internalQuery.value = value;
        emit("update:query", value);
      }
    });
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        uiMenu.value.select,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.selectClass);
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
    const debouncedSearch = typeof props.searchable === "function" ? useDebounceFn(props.searchable, props.debounce) : void 0;
    const filteredOptions = computedAsync(async () => {
      if (props.searchable && debouncedSearch) {
        return await debouncedSearch(query.value);
      }
      if (query.value === "") {
        return props.options;
      }
      return props.options.filter((option) => {
        var _a;
        return (((_a = props.searchAttributes) == null ? void 0 : _a.length) ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute) => {
          if (["string", "number"].includes(typeof option)) {
            return String(option).search(new RegExp(query.value, "i")) !== -1;
          }
          const child = get(option, searchAttribute);
          return child !== null && child !== void 0 && String(child).search(new RegExp(query.value, "i")) !== -1;
        });
      });
    });
    const createOption = computed(() => {
      if (query.value === "") {
        return null;
      }
      if (props.showCreateOptionWhen === "empty" && filteredOptions.value.length) {
        return null;
      }
      if (props.showCreateOptionWhen === "always") {
        const existingOption = filteredOptions.value.find((option) => ["string", "number"].includes(typeof option) ? option === query.value : option[props.optionAttribute] === query.value);
        if (existingOption) {
          return null;
        }
      }
      return ["string", "number"].includes(typeof props.modelValue) ? query.value : { [props.optionAttribute]: query.value };
    });
    function clearOnClose() {
      if (props.clearSearchOnClose) {
        query.value = "";
      }
    }
    watch(container, (value) => {
      if (value) {
        emit("open");
      } else {
        clearOnClose();
        emit("close");
        emitFormBlur();
      }
    });
    function onUpdate(event) {
      emit("update:modelValue", event);
      emit("change", event);
      emitFormChange();
    }
    function onChange(event) {
      query.value = event.target.value;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      uiMenu,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      filteredOptions,
      createOption,
      // eslint-disable-next-line vue/no-dupe-keys
      query,
      onUpdate,
      onChange
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$1;
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UAvatar = __nuxt_component_4;
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.searchable ? "HCombobox" : "HListbox"), mergeProps({
    by: _ctx.by,
    name: _ctx.name,
    "model-value": _ctx.modelValue,
    multiple: _ctx.multiple,
    disabled: _ctx.disabled,
    as: "div",
    class: _ctx.ui.wrapper,
    "onUpdate:modelValue": _ctx.onUpdate
  }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.required) {
          _push2(`<input${ssrRenderAttr("value", _ctx.modelValue)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""} class="${ssrRenderClass(_ctx.uiMenu.required)}" tabindex="-1" aria-hidden="true"${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
          ref: "trigger",
          as: "div",
          role: "button",
          class: _ctx.uiMenu.trigger
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => {
                _push3(`<button${ssrRenderAttrs(mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs))}${_scopeId2}>`);
                if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
                  _push3(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "leading", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.leadingIconName,
                      class: _ctx.leadingIconClass
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                  if (_ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length) {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.modelValue.length)} selected</span>`);
                  } else if (!_ctx.multiple && _ctx.modelValue) {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(["string", "number"].includes(typeof _ctx.modelValue) ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute])}</span>`);
                  } else {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.placeholder || "\xA0")}</span>`);
                  }
                }, _push3, _parent3, _scopeId2);
                if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
                  _push3(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "trailing", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.trailingIconName,
                      class: _ctx.trailingIconClass,
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => [
                  createVNode("button", mergeProps({
                    id: _ctx.inputId,
                    class: _ctx.selectClass,
                    disabled: _ctx.disabled,
                    type: "button"
                  }, _ctx.attrs), [
                    _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.leadingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.leadingIconName,
                          class: _ctx.leadingIconClass
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "label", {}, () => [
                      _ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.modelValue.length) + " selected", 3)) : !_ctx.multiple && _ctx.modelValue ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(["string", "number"].includes(typeof _ctx.modelValue) ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute]), 3)) : (openBlock(), createBlock("span", {
                        key: 2,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                    ]),
                    _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.trailingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "trailing", {
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.trailingIconName,
                          class: _ctx.trailingIconClass,
                          "aria-hidden": "true"
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 16, ["id", "disabled"])
                ])
              ];
            }
          }),
          _: 2
        }), _parent2, _scopeId);
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.uiMenu.container, _ctx.uiMenu.width])}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.uiMenu.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
            static: "",
            class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                if (_ctx.searchable) {
                  _push3(ssrRenderComponent(_component_HComboboxInput, {
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onChange
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.filteredOptions, (option, index) => {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: index,
                    as: "template",
                    value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                    disabled: option.disabled
                  }, {
                    default: withCtx(({ active, selected, disabled: optionDisabled }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option", {
                          option,
                          active,
                          selected
                        }, () => {
                          if (option.icon) {
                            _push4(ssrRenderComponent(_component_UIcon, {
                              name: option.icon,
                              class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                          } else if (option.avatar) {
                            _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                              class: _ctx.uiMenu.option.avatar.base,
                              "aria-hidden": "true"
                            }), null, _parent4, _scopeId3));
                          } else if (option.chip) {
                            _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.chip.base)}" style="${ssrRenderStyle({ background: `#${option.chip}` })}"${_scopeId3}></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute])}</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (selected) {
                          _push4(`<span class="${ssrRenderClass([_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding])}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: _ctx.selectedIcon,
                            class: _ctx.uiMenu.option.selectedIcon.base,
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                              ])
                            ], 2),
                            selected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                });
                _push3(`<!--]-->`);
                if (_ctx.creatable && _ctx.createOption) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option-create", {
                          option: _ctx.createOption,
                          active,
                          selected
                        }, () => {
                          _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.create)}"${_scopeId3}>Create &quot;${ssrInterpolate(_ctx.createOption[_ctx.optionAttribute])}&quot;</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div></li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.createOption,
                                active,
                                selected
                              }, () => [
                                createVNode("span", {
                                  class: _ctx.uiMenu.option.create
                                }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                              ])
                            ], 2)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                } else if (_ctx.searchable && _ctx.query && !_ctx.filteredOptions.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.option.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => {
                    _push3(` No results for &quot;${ssrInterpolate(_ctx.query)}&quot;. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else if (!_ctx.filteredOptions.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => {
                    _push3(` No options. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                    key: 0,
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onChange
                  }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                    return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                      key: index,
                      as: "template",
                      value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                      disabled: option.disabled
                    }, {
                      default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              active,
                              selected
                            }, () => [
                              option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                key: 0,
                                name: option.icon,
                                class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                class: _ctx.uiMenu.option.avatar.base,
                                "aria-hidden": "true"
                              }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: _ctx.uiMenu.option.chip.base,
                                style: { background: `#${option.chip}` }
                              }, null, 6)) : createCommentVNode("", true),
                              createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                            ])
                          ], 2),
                          selected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                          }, [
                            createVNode(_component_UIcon, {
                              name: _ctx.selectedIcon,
                              class: _ctx.uiMenu.option.selectedIcon.base,
                              "aria-hidden": "true"
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]);
                  }), 128)),
                  _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: 1,
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }) => [
                      createVNode("li", {
                        class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                      }, [
                        createVNode("div", {
                          class: _ctx.uiMenu.option.container
                        }, [
                          renderSlot(_ctx.$slots, "option-create", {
                            option: _ctx.createOption,
                            active,
                            selected
                          }, () => [
                            createVNode("span", {
                              class: _ctx.uiMenu.option.create
                            }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                          ])
                        ], 2)
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["value"])) : _ctx.searchable && _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                    key: 2,
                    class: _ctx.uiMenu.option.empty
                  }, [
                    renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                      createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                    ])
                  ], 2)) : !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                    key: 3,
                    class: _ctx.uiMenu.empty
                  }, [
                    renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                      createTextVNode(" No options. ")
                    ])
                  ], 2)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }), _parent2, _scopeId);
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.required ? (openBlock(), createBlock("input", {
            key: 0,
            value: _ctx.modelValue,
            required: _ctx.required,
            class: _ctx.uiMenu.required,
            tabindex: "-1",
            "aria-hidden": "true"
          }, null, 10, ["value", "required"])) : createCommentVNode("", true),
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
            ref: "trigger",
            as: "div",
            role: "button",
            class: _ctx.uiMenu.trigger
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => [
                createVNode("button", mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs), [
                  _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: _ctx.leadingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "leading", {
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.leadingIconName,
                        class: _ctx.leadingIconClass
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "label", {}, () => [
                    _ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.modelValue.length) + " selected", 3)) : !_ctx.multiple && _ctx.modelValue ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(["string", "number"].includes(typeof _ctx.modelValue) ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute]), 3)) : (openBlock(), createBlock("span", {
                      key: 2,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                  ]),
                  _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: _ctx.trailingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "trailing", {
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.trailingIconName,
                        class: _ctx.trailingIconClass,
                        "aria-hidden": "true"
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 16, ["id", "disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["class"])),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.uiMenu.container, _ctx.uiMenu.width]
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.uiMenu.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.uiMenu.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
                    static: "",
                    class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
                  }, {
                    default: withCtx(() => [
                      _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                        key: 0,
                        "display-value": () => _ctx.query,
                        name: "q",
                        placeholder: _ctx.searchablePlaceholder,
                        autofocus: "",
                        autocomplete: "off",
                        class: _ctx.uiMenu.input,
                        onChange: _ctx.onChange
                      }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                        return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                          key: index,
                          as: "template",
                          value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                          disabled: option.disabled
                        }, {
                          default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                            createVNode("li", {
                              class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                            }, [
                              createVNode("div", {
                                class: _ctx.uiMenu.option.container
                              }, [
                                renderSlot(_ctx.$slots, "option", {
                                  option,
                                  active,
                                  selected
                                }, () => [
                                  option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 0,
                                    name: option.icon,
                                    class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                    "aria-hidden": "true"
                                  }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                    class: _ctx.uiMenu.option.avatar.base,
                                    "aria-hidden": "true"
                                  }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: _ctx.uiMenu.option.chip.base,
                                    style: { background: `#${option.chip}` }
                                  }, null, 6)) : createCommentVNode("", true),
                                  createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                                ])
                              ], 2),
                              selected ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                              }, [
                                createVNode(_component_UIcon, {
                                  name: _ctx.selectedIcon,
                                  class: _ctx.uiMenu.option.selectedIcon.base,
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
                      }), 128)),
                      _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                        key: 1,
                        value: _ctx.createOption,
                        as: "template"
                      }, {
                        default: withCtx(({ active, selected }) => [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.createOption,
                                active,
                                selected
                              }, () => [
                                createVNode("span", {
                                  class: _ctx.uiMenu.option.create
                                }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                              ])
                            ], 2)
                          ], 2)
                        ]),
                        _: 3
                      }, 8, ["value"])) : _ctx.searchable && _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                        key: 2,
                        class: _ctx.uiMenu.option.empty
                      }, [
                        renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                          createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                        ])
                      ], 2)) : !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                        key: 3,
                        class: _ctx.uiMenu.empty
                      }, [
                        renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                          createTextVNode(" No options. ")
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    _: 3
                  }, 8, ["class"]))
                ])
              ]),
              _: 3
            }, 16)
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/SelectMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    tasks: String,
    columns: String
  },
  setup(__props) {
    const status = ["Not Started", "In Progress", "Completed"];
    const selected = ref([status[0]]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTable = __nuxt_component_0$3;
      const _component_UButton = __nuxt_component_1$2;
      const _component_UAvatarGroup = __nuxt_component_2$1;
      const _component_UTooltip = __nuxt_component_3;
      const _component_UAvatar = __nuxt_component_4;
      const _component_USelectMenu = __nuxt_component_5;
      _push(ssrRenderComponent(_component_UTable, mergeProps({
        columns: __props.columns,
        rows: __props.tasks,
        sort: { column: "title" }
      }, _attrs), {
        "edit-data": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-pencil-square",
              size: "sm",
              color: "blue",
              variant: "ghost"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                icon: "i-heroicons-pencil-square",
                size: "sm",
                color: "blue",
                variant: "ghost"
              })
            ];
          }
        }),
        "delete-data": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-trash",
              size: "sm",
              color: "red",
              variant: "ghost"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                icon: "i-heroicons-trash",
                size: "sm",
                color: "red",
                variant: "ghost"
              })
            ];
          }
        }),
        "employee-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UAvatarGroup, {
              size: "sm",
              max: 2
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTooltip, { text: "Howard Smith" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UAvatar, {
                          src: "https://avatars.githubusercontent.com/u/739984?v=4",
                          alt: "[Person's name JS variable]"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UAvatar, {
                            src: "https://avatars.githubusercontent.com/u/739984?v=4",
                            alt: "[Person's name JS variable]"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UTooltip, { text: "Jake Tenner" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UAvatar, {
                          src: "https://avatars.githubusercontent.com/u/904724?v=4",
                          alt: "Atinux"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UAvatar, {
                            src: "https://avatars.githubusercontent.com/u/904724?v=4",
                            alt: "Atinux"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UTooltip, { text: "Chris Cole" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UAvatar, {
                          src: "https://avatars.githubusercontent.com/u/7547335?v=4",
                          alt: "smarroufin"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UAvatar, {
                            src: "https://avatars.githubusercontent.com/u/7547335?v=4",
                            alt: "smarroufin"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTooltip, { text: "Howard Smith" }, {
                      default: withCtx(() => [
                        createVNode(_component_UAvatar, {
                          src: "https://avatars.githubusercontent.com/u/739984?v=4",
                          alt: "[Person's name JS variable]"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UTooltip, { text: "Jake Tenner" }, {
                      default: withCtx(() => [
                        createVNode(_component_UAvatar, {
                          src: "https://avatars.githubusercontent.com/u/904724?v=4",
                          alt: "Atinux"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UTooltip, { text: "Chris Cole" }, {
                      default: withCtx(() => [
                        createVNode(_component_UAvatar, {
                          src: "https://avatars.githubusercontent.com/u/7547335?v=4",
                          alt: "smarroufin"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UAvatarGroup, {
                size: "sm",
                max: 2
              }, {
                default: withCtx(() => [
                  createVNode(_component_UTooltip, { text: "Howard Smith" }, {
                    default: withCtx(() => [
                      createVNode(_component_UAvatar, {
                        src: "https://avatars.githubusercontent.com/u/739984?v=4",
                        alt: "[Person's name JS variable]"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UTooltip, { text: "Jake Tenner" }, {
                    default: withCtx(() => [
                      createVNode(_component_UAvatar, {
                        src: "https://avatars.githubusercontent.com/u/904724?v=4",
                        alt: "Atinux"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UTooltip, { text: "Chris Cole" }, {
                    default: withCtx(() => [
                      createVNode(_component_UAvatar, {
                        src: "https://avatars.githubusercontent.com/u/7547335?v=4",
                        alt: "smarroufin"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        "status-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_USelectMenu, {
              modelValue: unref(selected),
              "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
              options: status,
              placeholder: "Select status"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_USelectMenu, {
                modelValue: unref(selected),
                "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                options: status,
                placeholder: "Select status"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/tasks/DataTable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    const columns = [
      {
        key: "id",
        label: "ID"
      },
      {
        key: "task",
        label: "Task"
      },
      {
        key: "deadline",
        label: "Deadline",
        sortable: true
      },
      {
        key: "status",
        label: "Request Status",
        sortable: true
      },
      {
        key: "employee",
        label: "Assigned to"
      },
      {
        key: "priority",
        label: "Priority"
      },
      {
        key: "edit",
        label: "Edit"
      },
      {
        key: "delete",
        label: "Delete"
      }
    ];
    const mobile_columns = [{
      key: "id",
      label: "ID"
    }, {
      key: "priority",
      label: "Priority"
    }, {
      key: "employee",
      label: "Assigned to"
    }, {
      key: "edit",
      label: "Edit"
    }];
    const tasks2 = [{
      id: 1,
      task: "Restock Frozen Inventory",
      deadline: "15/01/2024",
      status: "In Progress",
      employee: "Jake",
      priority: "Medium"
    }, {
      id: 2,
      task: "Enrol Staff on Asbestos Training",
      deadline: "05/01/2024",
      status: "Completed",
      priority: "High"
    }];
    const selected = ref([tasks2[1]]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardBookingsStatusCard = __nuxt_component_0$2;
      const _component_UCard = __nuxt_component_2$3;
      const _component_DashboardTasksDataTable = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 sm:grid-cols-2 my-5">`);
      _push(ssrRenderComponent(_component_DashboardBookingsStatusCard, {
        class: "my-3 sm:my-0",
        value: "12",
        icon: "i-heroicons-book-open",
        type: "New Tasks",
        "data-aos": "fade-right"
      }, null, _parent));
      _push(ssrRenderComponent(_component_DashboardBookingsStatusCard, {
        value: "1",
        icon: "i-heroicons-academic-cap",
        type: "New Learning Modules",
        "data-aos": "fade-left"
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 sm:grid-cols-2 my-5">`);
      _push(ssrRenderComponent(_component_DashboardBookingsStatusCard, {
        class: "my-3 sm:my-0",
        value: "19",
        icon: "i-heroicons-book-open",
        type: "Completed Tasks",
        "data-aos": "fade-right"
      }, null, _parent));
      _push(ssrRenderComponent(_component_DashboardBookingsStatusCard, {
        value: "0",
        icon: "i-heroicons-academic-cap",
        type: "Overdue Learning Modules",
        "data-aos": "fade-left"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$viewport.isLessThan("tablet")) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardTasksDataTable, {
                modelValue: unref(selected),
                "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                columns: mobile_columns,
                rows: tasks2,
                "data-aos": "flip-up",
                class: "mt-4"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardTasksDataTable, {
                modelValue: unref(selected),
                "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                columns,
                rows: tasks2,
                "data-aos": "flip-up",
                class: "mt-4"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              _ctx.$viewport.isLessThan("tablet") ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_component_DashboardTasksDataTable, {
                  modelValue: unref(selected),
                  "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                  columns: mobile_columns,
                  rows: tasks2,
                  "data-aos": "flip-up",
                  class: "mt-4"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_component_DashboardTasksDataTable, {
                  modelValue: unref(selected),
                  "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                  columns,
                  rows: tasks2,
                  "data-aos": "flip-up",
                  class: "mt-4"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/tasks/Main.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_DashboardUtilsNavbarsSidebar = __nuxt_component_0$1;
  const _component_DashboardTasksMain = __nuxt_component_1;
  const _component_DashboardUtilsBackgroundsBlurryRestaurant = __nuxt_component_2$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black grid grid-cols-12 sm:grid-cols-12 w-full h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_DashboardUtilsNavbarsSidebar, { class: "visible sm:visible sm:z-20 sm:col-span-2 md:visible md:z-20 md:col-span-2" }, null, _parent));
  _push(ssrRenderComponent(_component_DashboardTasksMain, { class: "z-20 col-span-10 w-full scale-90 overflow-y-scroll" }, null, _parent));
  _push(ssrRenderComponent(_component_DashboardUtilsBackgroundsBlurryRestaurant, { class: "z-10 bg-black w-full h-screen" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/views/Tasks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DashboardViewsTasks = __nuxt_component_0;
  _push(ssrRenderComponent(_component_DashboardViewsTasks, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/tasks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tasks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { tasks as default };
//# sourceMappingURL=tasks-ee0b1b18.mjs.map
