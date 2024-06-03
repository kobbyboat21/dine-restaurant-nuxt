import { defineComponent, ref, h, computed, provide, onMounted, watch, watchEffect, Fragment, onUnmounted, inject, toRef, useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, renderSlot, toDisplayString, openBlock, createBlock, renderList, createTextVNode } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import { u as useUI } from './Link-a292d72e.mjs';
import { m as mergeConfig, a as appConfig, _ as _export_sfc } from '../server.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { f, s as s2, O, o as o$1, A, T, t as t$1, a as s$1, N, u, b as o, c as T$1, d as t, i, P, e as N$1 } from './micro-task-b624b8d4.mjs';

let d = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t2) {
  let n = ref(true);
  return () => n.value ? h(f, { as: "button", type: "button", features: s2.Focusable, onFocus(o2) {
    o2.preventDefault();
    let e, a = 50;
    function r() {
      var u2;
      if (a-- <= 0) {
        e && cancelAnimationFrame(e);
        return;
      }
      if ((u2 = t2.onFocus) != null && u2.call(t2)) {
        n.value = false, cancelAnimationFrame(e);
        return;
      }
      e = requestAnimationFrame(r);
    }
    e = requestAnimationFrame(r);
  } }) : null;
} });
var te = ((i2) => (i2[i2.Forwards = 0] = "Forwards", i2[i2.Backwards = 1] = "Backwards", i2))(te || {}), le = ((s2) => (s2[s2.Less = -1] = "Less", s2[s2.Equal = 0] = "Equal", s2[s2.Greater = 1] = "Greater", s2))(le || {});
let U = Symbol("TabsContext");
function k(a) {
  let v = inject(U, null);
  if (v === null) {
    let i2 = new Error(`<${a} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i2, k), i2;
  }
  return v;
}
let j = Symbol("TabsSSRContext"), me = defineComponent({ name: "TabGroup", emits: { change: (a) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a, { slots: v, attrs: i2, emit: s2 }) {
  var P2;
  let l = ref((P2 = a.selectedIndex) != null ? P2 : a.defaultIndex), n = ref([]), d$1 = ref([]), h$1 = computed(() => a.selectedIndex !== null), b = computed(() => h$1.value ? a.selectedIndex : l.value);
  function m(t2) {
    var S;
    let e = O(r.tabs.value, o$1), u$1 = O(r.panels.value, o$1), f2 = e.filter((p) => {
      var g;
      return !((g = o$1(p)) != null && g.hasAttribute("disabled"));
    });
    if (t2 < 0 || t2 > e.length - 1) {
      let p = u(l.value === null ? 0 : Math.sign(t2 - l.value), { [-1]: () => 1, [0]: () => u(Math.sign(t2), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 }), g = u(p, { [0]: () => e.indexOf(f2[0]), [1]: () => e.indexOf(f2[f2.length - 1]) });
      g !== -1 && (l.value = g), r.tabs.value = e, r.panels.value = u$1;
    } else {
      let p = e.slice(0, t2), G = [...e.slice(t2), ...p].find((W) => f2.includes(W));
      if (!G)
        return;
      let B = (S = e.indexOf(G)) != null ? S : r.selectedIndex.value;
      B === -1 && (B = r.selectedIndex.value), l.value = B, r.tabs.value = e, r.panels.value = u$1;
    }
  }
  let r = { selectedIndex: computed(() => {
    var t2, e;
    return (e = (t2 = l.value) != null ? t2 : a.defaultIndex) != null ? e : null;
  }), orientation: computed(() => a.vertical ? "vertical" : "horizontal"), activation: computed(() => a.manual ? "manual" : "auto"), tabs: n, panels: d$1, setSelectedIndex(t2) {
    b.value !== t2 && s2("change", t2), h$1.value || m(t2);
  }, registerTab(t2) {
    var f2;
    if (n.value.includes(t2))
      return;
    let e = n.value[l.value];
    n.value.push(t2), n.value = O(n.value, o$1);
    let u2 = (f2 = n.value.indexOf(e)) != null ? f2 : l.value;
    u2 !== -1 && (l.value = u2);
  }, unregisterTab(t2) {
    let e = n.value.indexOf(t2);
    e !== -1 && n.value.splice(e, 1);
  }, registerPanel(t2) {
    d$1.value.includes(t2) || (d$1.value.push(t2), d$1.value = O(d$1.value, o$1));
  }, unregisterPanel(t2) {
    let e = d$1.value.indexOf(t2);
    e !== -1 && d$1.value.splice(e, 1);
  } };
  provide(U, r);
  let w = ref({ tabs: [], panels: [] }), y = ref(false);
  onMounted(() => {
    y.value = true;
  }), provide(j, computed(() => y.value ? null : w.value));
  let E = computed(() => a.selectedIndex);
  return onMounted(() => {
    watch([E], () => {
      var t2;
      return m((t2 = a.selectedIndex) != null ? t2 : a.defaultIndex);
    }, { immediate: true });
  }), watchEffect(() => {
    if (!h$1.value || b.value == null || r.tabs.value.length <= 0)
      return;
    let t2 = O(r.tabs.value, o$1);
    t2.some((u2, f2) => o$1(r.tabs.value[f2]) !== o$1(u2)) && r.setSelectedIndex(t2.findIndex((u2) => o$1(u2) === o$1(r.tabs.value[b.value])));
  }), () => {
    let t2 = { selectedIndex: l.value };
    return h(Fragment, [n.value.length <= 0 && h(d, { onFocus: () => {
      for (let e of n.value) {
        let u2 = o$1(e);
        if ((u2 == null ? void 0 : u2.tabIndex) === 0)
          return u2.focus(), true;
      }
      return false;
    } }), A({ theirProps: { ...i2, ...T(a, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: t2, slots: v, attrs: i2, name: "TabGroup" })]);
  };
} }), pe = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a, { attrs: v, slots: i2 }) {
  let s2 = k("TabList");
  return () => {
    let l = { selectedIndex: s2.selectedIndex.value }, n = { role: "tablist", "aria-orientation": s2.orientation.value };
    return A({ ourProps: n, theirProps: a, slot: l, attrs: v, slots: i2, name: "TabList" });
  };
} }), xe = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-tabs-tab-${t$1()}` } }, setup(a, { attrs: v, slots: i$1, expose: s2 }) {
  let l = k("Tab"), n = ref(null);
  s2({ el: n, $el: n }), onMounted(() => l.registerTab(n)), onUnmounted(() => l.unregisterTab(n));
  let d2 = inject(j), h2 = computed(() => {
    if (d2.value) {
      let e = d2.value.tabs.indexOf(a.id);
      return e === -1 ? d2.value.tabs.push(a.id) - 1 : e;
    }
    return -1;
  }), b = computed(() => {
    let e = l.tabs.value.indexOf(n);
    return e === -1 ? h2.value : e;
  }), m = computed(() => b.value === l.selectedIndex.value);
  function r(e) {
    var f2;
    let u2 = e();
    if (u2 === T$1.Success && l.activation.value === "auto") {
      let S = (f2 = i(n)) == null ? void 0 : f2.activeElement, p = l.tabs.value.findIndex((g) => o$1(g) === S);
      p !== -1 && l.setSelectedIndex(p);
    }
    return u2;
  }
  function w(e) {
    let u$1 = l.tabs.value.map((S) => o$1(S)).filter(Boolean);
    if (e.key === o.Space || e.key === o.Enter) {
      e.preventDefault(), e.stopPropagation(), l.setSelectedIndex(b.value);
      return;
    }
    switch (e.key) {
      case o.Home:
      case o.PageUp:
        return e.preventDefault(), e.stopPropagation(), r(() => P(u$1, N$1.First));
      case o.End:
      case o.PageDown:
        return e.preventDefault(), e.stopPropagation(), r(() => P(u$1, N$1.Last));
    }
    if (r(() => u(l.orientation.value, { vertical() {
      return e.key === o.ArrowUp ? P(u$1, N$1.Previous | N$1.WrapAround) : e.key === o.ArrowDown ? P(u$1, N$1.Next | N$1.WrapAround) : T$1.Error;
    }, horizontal() {
      return e.key === o.ArrowLeft ? P(u$1, N$1.Previous | N$1.WrapAround) : e.key === o.ArrowRight ? P(u$1, N$1.Next | N$1.WrapAround) : T$1.Error;
    } })) === T$1.Success)
      return e.preventDefault();
  }
  let y = ref(false);
  function E() {
    var e;
    y.value || (y.value = true, !a.disabled && ((e = o$1(n)) == null || e.focus({ preventScroll: true }), l.setSelectedIndex(b.value), t(() => {
      y.value = false;
    })));
  }
  function P$1(e) {
    e.preventDefault();
  }
  let t2 = s$1(computed(() => ({ as: a.as, type: v.type })), n);
  return () => {
    var p;
    let e = { selected: m.value }, { id: u2, ...f2 } = a, S = { ref: n, onKeydown: w, onMousedown: P$1, onClick: E, id: u2, role: "tab", type: t2.value, "aria-controls": (p = o$1(l.panels.value[b.value])) == null ? void 0 : p.id, "aria-selected": m.value, tabIndex: m.value ? 0 : -1, disabled: a.disabled ? true : void 0 };
    return A({ ourProps: S, theirProps: f2, slot: e, attrs: v, slots: i$1, name: "Tab" });
  };
} }), Ie = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a, { slots: v, attrs: i2 }) {
  let s2 = k("TabPanels");
  return () => {
    let l = { selectedIndex: s2.selectedIndex.value };
    return A({ theirProps: a, ourProps: {}, slot: l, attrs: i2, slots: v, name: "TabPanels" });
  };
} }), ye = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-tabs-panel-${t$1()}` }, tabIndex: { type: Number, default: 0 } }, setup(a, { attrs: v, slots: i2, expose: s2 }) {
  let l = k("TabPanel"), n = ref(null);
  s2({ el: n, $el: n }), onMounted(() => l.registerPanel(n)), onUnmounted(() => l.unregisterPanel(n));
  let d2 = inject(j), h$1 = computed(() => {
    if (d2.value) {
      let r = d2.value.panels.indexOf(a.id);
      return r === -1 ? d2.value.panels.push(a.id) - 1 : r;
    }
    return -1;
  }), b = computed(() => {
    let r = l.panels.value.indexOf(n);
    return r === -1 ? h$1.value : r;
  }), m = computed(() => b.value === l.selectedIndex.value);
  return () => {
    var t2;
    let r = { selected: m.value }, { id: w, tabIndex: y, ...E } = a, P2 = { ref: n, id: w, role: "tabpanel", "aria-labelledby": (t2 = o$1(l.tabs.value[b.value])) == null ? void 0 : t2.id, tabIndex: m.value ? y : -1 };
    return !m.value && a.unmount && !a.static ? h(f, { as: "span", "aria-hidden": true, ...P2 }) : A({ ourProps: P2, theirProps: E, slot: r, attrs: v, slots: i2, features: N.Static | N.RenderStrategy, visible: m.value, name: "TabPanel" });
  };
} });
const tabs = {
  wrapper: "relative space-y-2",
  container: "relative w-full",
  base: "focus:outline-none",
  list: {
    base: "relative",
    background: "bg-gray-100 dark:bg-gray-800",
    rounded: "rounded-lg",
    shadow: "",
    padding: "p-1",
    height: "h-10",
    width: "w-full",
    marker: {
      wrapper: "absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",
      base: "w-full h-full",
      background: "bg-white dark:bg-gray-900",
      rounded: "rounded-md",
      shadow: "shadow-sm"
    },
    tab: {
      base: "relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",
      background: "",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-500 dark:text-gray-400",
      height: "h-8",
      padding: "px-3",
      size: "text-sm",
      font: "font-medium",
      rounded: "rounded-md",
      shadow: ""
    }
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.tabs, tabs);
const _sfc_main = defineComponent({
  components: {
    HTabGroup: me,
    HTabList: pe,
    HTab: xe,
    HTabPanels: Ie,
    HTabPanel: ye
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      default: void 0
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: () => []
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
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("tabs", toRef(props, "ui"), config, toRef(props, "class"));
    const listRef = ref();
    const itemRefs = ref([]);
    const markerRef = ref();
    const selectedIndex = ref(props.modelValue || props.defaultIndex);
    function calcMarkerSize(index) {
      var _a;
      const tab = (_a = itemRefs.value[index]) == null ? void 0 : _a.$el;
      if (!tab) {
        return;
      }
      if (!markerRef.value) {
        return;
      }
      markerRef.value.style.top = `${tab.offsetTop}px`;
      markerRef.value.style.left = `${tab.offsetLeft}px`;
      markerRef.value.style.width = `${tab.offsetWidth}px`;
      markerRef.value.style.height = `${tab.offsetHeight}px`;
    }
    function onChange(index) {
      selectedIndex.value = index;
      emit("change", index);
      if (props.modelValue !== void 0) {
        emit("update:modelValue", selectedIndex.value);
      }
      calcMarkerSize(selectedIndex.value);
    }
    useResizeObserver(listRef, () => {
      calcMarkerSize(selectedIndex.value);
    });
    watch(() => props.modelValue, (value) => {
      selectedIndex.value = value;
      calcMarkerSize(selectedIndex.value);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      listRef,
      itemRefs,
      markerRef,
      selectedIndex,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HTabGroup = resolveComponent("HTabGroup");
  const _component_HTabList = resolveComponent("HTabList");
  const _component_HTab = resolveComponent("HTab");
  const _component_HTabPanels = resolveComponent("HTabPanels");
  const _component_HTabPanel = resolveComponent("HTabPanel");
  _push(ssrRenderComponent(_component_HTabGroup, mergeProps({
    vertical: _ctx.orientation === "vertical",
    "selected-index": _ctx.selectedIndex,
    as: "div",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { onChange: _ctx.onChange }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HTabList, {
          ref: "listRef",
          class: [_ctx.ui.list.base, _ctx.ui.list.background, _ctx.ui.list.rounded, _ctx.ui.list.shadow, _ctx.ui.list.padding, _ctx.ui.list.width, _ctx.orientation === "horizontal" && _ctx.ui.list.height, _ctx.orientation === "horizontal" && "inline-grid items-center"],
          style: [_ctx.orientation === "horizontal" && `grid-template-columns: repeat(${_ctx.items.length}, minmax(0, 1fr))`]
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass(_ctx.ui.list.marker.wrapper)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow])}"${_scopeId2}></div></div><!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                _push3(ssrRenderComponent(_component_HTab, {
                  key: index,
                  ref_for: true,
                  ref: "itemRefs",
                  disabled: item.disabled,
                  as: "template"
                }, {
                  default: withCtx(({ selected, disabled }, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<button class="${ssrRenderClass([_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive])}"${_scopeId3}>`);
                      ssrRenderSlot(_ctx.$slots, "default", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => {
                        _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(item.label)}</span>`);
                      }, _push4, _parent4, _scopeId3);
                      _push4(`</button>`);
                    } else {
                      return [
                        createVNode("button", {
                          class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                        }, [
                          renderSlot(_ctx.$slots, "default", {
                            item,
                            index,
                            selected,
                            disabled
                          }, () => [
                            createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                          ])
                        ], 2)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode("div", {
                  ref: "markerRef",
                  class: _ctx.ui.list.marker.wrapper
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow]
                  }, null, 2)
                ], 2),
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                  return openBlock(), createBlock(_component_HTab, {
                    key: index,
                    ref_for: true,
                    ref: "itemRefs",
                    disabled: item.disabled,
                    as: "template"
                  }, {
                    default: withCtx(({ selected, disabled }) => [
                      createVNode("button", {
                        class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                      }, [
                        renderSlot(_ctx.$slots, "default", {
                          item,
                          index,
                          selected,
                          disabled
                        }, () => [
                          createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["disabled"]);
                }), 128))
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_HTabPanels, {
          class: _ctx.ui.container
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                _push3(ssrRenderComponent(_component_HTabPanel, {
                  key: index,
                  class: _ctx.ui.base,
                  tabindex: "-1"
                }, {
                  default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                        item,
                        index,
                        selected
                      }, () => {
                        _push4(`${ssrInterpolate(item.content)}`);
                      }, _push4, _parent4, _scopeId3);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot || "item", {
                          item,
                          index,
                          selected
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                  return openBlock(), createBlock(_component_HTabPanel, {
                    key: index,
                    class: _ctx.ui.base,
                    tabindex: "-1"
                  }, {
                    default: withCtx(({ selected }) => [
                      renderSlot(_ctx.$slots, item.slot || "item", {
                        item,
                        index,
                        selected
                      }, () => [
                        createTextVNode(toDisplayString(item.content), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 128))
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HTabList, {
            ref: "listRef",
            class: [_ctx.ui.list.base, _ctx.ui.list.background, _ctx.ui.list.rounded, _ctx.ui.list.shadow, _ctx.ui.list.padding, _ctx.ui.list.width, _ctx.orientation === "horizontal" && _ctx.ui.list.height, _ctx.orientation === "horizontal" && "inline-grid items-center"],
            style: [_ctx.orientation === "horizontal" && `grid-template-columns: repeat(${_ctx.items.length}, minmax(0, 1fr))`]
          }, {
            default: withCtx(() => [
              createVNode("div", {
                ref: "markerRef",
                class: _ctx.ui.list.marker.wrapper
              }, [
                createVNode("div", {
                  class: [_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow]
                }, null, 2)
              ], 2),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_HTab, {
                  key: index,
                  ref_for: true,
                  ref: "itemRefs",
                  disabled: item.disabled,
                  as: "template"
                }, {
                  default: withCtx(({ selected, disabled }) => [
                    createVNode("button", {
                      class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                    }, [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => [
                        createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                      ])
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["disabled"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class", "style"]),
          createVNode(_component_HTabPanels, {
            class: _ctx.ui.container
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_HTabPanel, {
                  key: index,
                  class: _ctx.ui.base,
                  tabindex: "-1"
                }, {
                  default: withCtx(({ selected }) => [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index,
                      selected
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Tabs-69976c40.mjs.map
