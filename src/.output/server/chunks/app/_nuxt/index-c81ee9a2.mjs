import { _ as __nuxt_component_0$2 } from './Sidebar-d3faee4d.mjs';
import { defineComponent, toRef, computed, useSSRContext, unref, mergeProps, ref, withCtx, createVNode, createTextVNode, toDisplayString, resolveDynamicComponent, renderSlot, openBlock, createBlock, createCommentVNode } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { u as useUI, _ as __nuxt_component_2$3, a as __nuxt_component_1$2 } from './Link-a292d72e.mjs';
import { m as mergeConfig, a as appConfig, _ as _export_sfc, b as useNuxtApp } from '../server.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_2$4 } from './Tabs-69976c40.mjs';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend } from 'chart.js';
import { Line, Pie } from 'vue-chartjs';
import { _ as __nuxt_component_2$2 } from './BlurryRestaurant-8cee3ee8.mjs';
import './LOGO-181a7eb6.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './Icon-3036ade8.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-96aaa589.mjs';
import './nuxt-link-6c200899.mjs';
import 'vue-router';
import '@vueuse/core';
import './micro-task-b624b8d4.mjs';

const container = {
  base: "mx-auto",
  padding: "px-4 sm:px-6 lg:px-8",
  constrained: "max-w-7xl"
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.container, container);
const _sfc_main$8 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
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
  setup(props) {
    const { ui, attrs } = useUI("container", toRef(props, "ui"), config);
    const containerClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.padding,
        ui.value.constrained
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      containerClass
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({ class: _ctx.containerClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Container.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$7 = {
  __name: "StatusCard",
  __ssrInlineRender: true,
  props: {
    icon: String,
    value: Number,
    type: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_2$3;
      const _component_UIcon = __nuxt_component_1$2;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ class: "mx-3 text-center" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-bold text-2xl text-green-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: __props.icon,
              class: "bg-green-400"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(__props.value)}</p><p${_scopeId}>New ${ssrInterpolate(__props.type)}</p><p${_scopeId}> Today/ This Week </p>`);
          } else {
            return [
              createVNode("p", { class: "font-bold text-2xl text-green-400" }, [
                createVNode(_component_UIcon, {
                  name: __props.icon,
                  class: "bg-green-400"
                }, null, 8, ["name"]),
                createTextVNode(" " + toDisplayString(__props.value), 1)
              ]),
              createVNode("p", null, "New " + toDisplayString(__props.type), 1),
              createVNode("p", null, " Today/ This Week ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/StatusCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$7;
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Line",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip
    );
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          borderColor: "#36A2EB",
          backgroundColor: "#9BD0F5",
          tensions: 0.4,
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ]
    };
    const options = {
      responsive: true,
      maintainAspectRatio: true
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Line), mergeProps({
        data,
        options
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/utils/charts/Line.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "ChartComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const cards = [
      {
        label: "Today"
      },
      {
        label: "This Week"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTabs = __nuxt_component_2$4;
      const _component_DashboardUtilsChartsLine = _sfc_main$6;
      _push(ssrRenderComponent(_component_UTabs, mergeProps({
        items: cards,
        "default-index": 0,
        class: "w-full"
      }, _attrs), {
        item: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (item.label === "Today") {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardUtilsChartsLine, { class: "mt-2" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (item.label === "This Week") {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardUtilsChartsLine, { class: "mt-2" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              item.label === "Today" ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_component_DashboardUtilsChartsLine, { class: "mt-2" })
              ])) : createCommentVNode("", true),
              item.label === "This Week" ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_component_DashboardUtilsChartsLine, { class: "mt-2" })
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/ChartComponent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2$1 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "ChartCard",
  __ssrInlineRender: true,
  props: {
    icon: String,
    value: Number,
    type: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_2$3;
      const _component_UIcon = __nuxt_component_1$2;
      const _component_DashboardChartComponent = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ class: "mx-3 text-center" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-bold text-xl text-green-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: __props.icon,
              class: "bg-green-400"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(__props.value)}</p><p${_scopeId}>Completed ${ssrInterpolate(__props.type)}</p>`);
            _push2(ssrRenderComponent(_component_DashboardChartComponent, { class: "mt-3" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "font-bold text-xl text-green-400" }, [
                createVNode(_component_UIcon, {
                  name: __props.icon,
                  class: "bg-green-400"
                }, null, 8, ["name"]),
                createTextVNode(" " + toDisplayString(__props.value), 1)
              ]),
              createVNode("p", null, "Completed " + toDisplayString(__props.type), 1),
              createVNode(_component_DashboardChartComponent, { class: "mt-3" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/ChartCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$4;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Pie",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(ArcElement, Tooltip, Legend);
    const options = {
      responsive: true
    };
    const data = {
      labels: ["Breakfast", "Lunch", "Dinner"],
      datasets: [
        {
          backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
          data: [40, 20, 80]
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Pie), mergeProps({
        data,
        options
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/utils/charts/Pie.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    const { $viewport } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0$1;
      const _component_DashboardStatusCard = __nuxt_component_1$1;
      const _component_DashboardChartCard = __nuxt_component_2;
      const _component_UCard = __nuxt_component_2$3;
      const _component_DashboardUtilsChartsPie = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "grid grid-cols-1 sm:grid-cols-3 my-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardStatusCard, {
              class: "my-3 sm:my-0",
              value: "34",
              icon: "i-heroicons-rectangle-stack",
              type: "Tasks",
              "data-aos": "fade-right"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DashboardStatusCard, {
              class: "my-3 sm:my-0",
              value: "29",
              icon: "i-heroicons-book-open",
              type: "Bookings",
              "data-aos": "fade-down"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DashboardStatusCard, {
              class: "my-3 sm:my-0",
              value: "54",
              icon: "i-heroicons-archive-box",
              type: "Inventory",
              "data-aos": "fade-left"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardStatusCard, {
                class: "my-3 sm:my-0",
                value: "34",
                icon: "i-heroicons-rectangle-stack",
                type: "Tasks",
                "data-aos": "fade-right"
              }),
              createVNode(_component_DashboardStatusCard, {
                class: "my-3 sm:my-0",
                value: "29",
                icon: "i-heroicons-book-open",
                type: "Bookings",
                "data-aos": "fade-down"
              }),
              createVNode(_component_DashboardStatusCard, {
                class: "my-3 sm:my-0",
                value: "54",
                icon: "i-heroicons-archive-box",
                type: "Inventory",
                "data-aos": "fade-left"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "grid grid-cols-1 sm:grid-cols-3 my-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardChartCard, {
              value: "19",
              icon: "i-heroicons-rectangle-stack",
              type: "Tasks",
              "data-aos": "fade-right"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DashboardChartCard, {
              class: "my-3 sm:my-0",
              value: "12",
              icon: "i-heroicons-book-open",
              type: "Bookings",
              "data-aos": "fade-down"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DashboardChartCard, {
              class: "my-3 sm:my-0",
              value: "37",
              icon: "i-heroicons-archive-box",
              type: "Inventory",
              "data-aos": "fade-left"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardChartCard, {
                value: "19",
                icon: "i-heroicons-rectangle-stack",
                type: "Tasks",
                "data-aos": "fade-right"
              }),
              createVNode(_component_DashboardChartCard, {
                class: "my-3 sm:my-0",
                value: "12",
                icon: "i-heroicons-book-open",
                type: "Bookings",
                "data-aos": "fade-down"
              }),
              createVNode(_component_DashboardChartCard, {
                class: "my-3 sm:my-0",
                value: "37",
                icon: "i-heroicons-archive-box",
                type: "Inventory",
                "data-aos": "fade-left"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref($viewport).isLessThan("tablet")) {
        _push(`<div class="hidden my-5">`);
        _push(ssrRenderComponent(_component_UContainer, { class: "grid grid-cols-2" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UCard, {
                class: "mx-3 text-center",
                "data-aos": "flip-right"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p${_scopeId2}> Total Resevations </p>`);
                    _push3(ssrRenderComponent(_component_DashboardUtilsChartsPie, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("p", null, " Total Resevations "),
                      createVNode(_component_DashboardUtilsChartsPie)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UCard, {
                class: "mx-3 text-center",
                "data-aos": "fade-left"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p${_scopeId2}> Total Revenue </p>`);
                    _push3(ssrRenderComponent(_component_DashboardUtilsChartsPie, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("p", null, " Total Revenue "),
                      createVNode(_component_DashboardUtilsChartsPie)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UCard, {
                  class: "mx-3 text-center",
                  "data-aos": "flip-right"
                }, {
                  default: withCtx(() => [
                    createVNode("p", null, " Total Resevations "),
                    createVNode(_component_DashboardUtilsChartsPie)
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, {
                  class: "mx-3 text-center",
                  "data-aos": "fade-left"
                }, {
                  default: withCtx(() => [
                    createVNode("p", null, " Total Revenue "),
                    createVNode(_component_DashboardUtilsChartsPie)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="visible">`);
        _push(ssrRenderComponent(_component_UContainer, { class: "grid grid-cols-2" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UCard, {
                class: "mx-3 text-center",
                "data-aos": "flip-right"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p${_scopeId2}> Total Resevations </p>`);
                    _push3(ssrRenderComponent(_component_DashboardUtilsChartsPie, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("p", null, " Total Resevations "),
                      createVNode(_component_DashboardUtilsChartsPie)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UCard, {
                class: "mx-3 text-center",
                "data-aos": "fade-left"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p${_scopeId2}> Total Revenue </p>`);
                    _push3(ssrRenderComponent(_component_DashboardUtilsChartsPie, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("p", null, " Total Revenue "),
                      createVNode(_component_DashboardUtilsChartsPie)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UCard, {
                  class: "mx-3 text-center",
                  "data-aos": "flip-right"
                }, {
                  default: withCtx(() => [
                    createVNode("p", null, " Total Resevations "),
                    createVNode(_component_DashboardUtilsChartsPie)
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, {
                  class: "mx-3 text-center",
                  "data-aos": "fade-left"
                }, {
                  default: withCtx(() => [
                    createVNode("p", null, " Total Revenue "),
                    createVNode(_component_DashboardUtilsChartsPie)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/Main.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_DashboardUtilsNavbarsSidebar = __nuxt_component_0$2;
  const _component_DashboardMain = __nuxt_component_1;
  const _component_DashboardUtilsBackgroundsBlurryRestaurant = __nuxt_component_2$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black grid grid-cols-12 w-full h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_DashboardUtilsNavbarsSidebar, { class: "visible sm:visible sm:z-20 sm:col-span-2 md:visible md:z-20 md:col-span-2" }, null, _parent));
  _push(ssrRenderComponent(_component_DashboardMain, { class: "z-20 col-span-10 w-full scale-90 overflow-y-scroll" }, null, _parent));
  _push(ssrRenderComponent(_component_DashboardUtilsBackgroundsBlurryRestaurant, { class: "z-10 bg-black w-full h-screen" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/views/View.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DashboardViewsView = __nuxt_component_0;
  _push(ssrRenderComponent(_component_DashboardViewsView, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-c81ee9a2.mjs.map
