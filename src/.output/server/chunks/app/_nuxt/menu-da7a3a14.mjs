import { _ as __nuxt_component_0$5, a as __nuxt_component_4$1 } from './Sidebar-d3faee4d.mjs';
import { _ as __nuxt_component_2$6 } from './Link-a292d72e.mjs';
import { _ as __nuxt_component_2$5 } from './Tabs-69976c40.mjs';
import { useSSRContext, defineComponent, unref, mergeProps, ref, withCtx, openBlock, createBlock, createVNode, createCommentVNode, toDisplayString, createTextVNode, isRef, renderSlot } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { Chart, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'vue-chartjs';
import { _ as __nuxt_component_0$6 } from './Table-24ab41ed.mjs';
import { _ as __nuxt_component_1$5 } from './Button-be65dc1b.mjs';
import { _ as __nuxt_component_2$7, a as __nuxt_component_3$2, b as __nuxt_component_4$2, c as __nuxt_component_5$4 } from './Input-929542b6.mjs';
import { u as useBreakfastStore } from './breakfast_menu-81322d40.mjs';
import { _ as __nuxt_component_3$1 } from './Tooltip-2055d85c.mjs';
import { u as useAsyncData } from './asyncData-40c94537.mjs';
import { _ as _export_sfc, b as useNuxtApp } from '../server.mjs';
import { u as useLunchStore } from './lunch_menu-10f9d72d.mjs';
import { u as useDinnerStore } from './dinner_menu-e954e986.mjs';
import { _ as __nuxt_component_2$4 } from './BlurryRestaurant-8cee3ee8.mjs';
import 'tailwind-merge';
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
import '@vueuse/core';
import './micro-task-b624b8d4.mjs';
import './usePopper-3eb33e86.mjs';
import 'vue-router';

const _sfc_main$o = {
  __name: "StatusCard",
  __ssrInlineRender: true,
  props: {
    icon: String,
    type1: String,
    type2: String,
    meal: String
  },
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
      const _component_UCard = __nuxt_component_2$6;
      const _component_UTabs = __nuxt_component_2$5;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ class: "mx-3 text-center" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTabs, {
              items: cards,
              "default-index": 0,
              class: "w-full"
            }, {
              item: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (item.label === "Today") {
                    _push3(`<div${_scopeId2}><p class="font-bold text-l text-green-400"${_scopeId2}>${ssrInterpolate(__props.type1)}</p><p${_scopeId2}> Most Ordered ${ssrInterpolate(__props.meal)} Meal </p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (item.label === "This Week") {
                    _push3(`<div${_scopeId2}><p class="font-bold text-l text-green-400"${_scopeId2}>${ssrInterpolate(__props.type2)}</p><p${_scopeId2}> Most Ordered ${ssrInterpolate(__props.meal)} Meal </p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    item.label === "Today" ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("p", { class: "font-bold text-l text-green-400" }, toDisplayString(__props.type1), 1),
                      createVNode("p", null, " Most Ordered " + toDisplayString(__props.meal) + " Meal ", 1)
                    ])) : createCommentVNode("", true),
                    item.label === "This Week" ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("p", { class: "font-bold text-l text-green-400" }, toDisplayString(__props.type2), 1),
                      createVNode("p", null, " Most Ordered " + toDisplayString(__props.meal) + " Meal ", 1)
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTabs, {
                items: cards,
                "default-index": 0,
                class: "w-full"
              }, {
                item: withCtx(({ item }) => [
                  item.label === "Today" ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("p", { class: "font-bold text-l text-green-400" }, toDisplayString(__props.type1), 1),
                    createVNode("p", null, " Most Ordered " + toDisplayString(__props.meal) + " Meal ", 1)
                  ])) : createCommentVNode("", true),
                  item.label === "This Week" ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("p", { class: "font-bold text-l text-green-400" }, toDisplayString(__props.type2), 1),
                    createVNode("p", null, " Most Ordered " + toDisplayString(__props.meal) + " Meal ", 1)
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/StatusCard.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __nuxt_component_0$4 = _sfc_main$o;
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "Bar",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(
      Title,
      Tooltip,
      BarElement,
      CategoryScale,
      LinearScale
    );
    const data = {
      labels: [
        "Meal 1",
        "Meal 2",
        "Meal 3"
      ],
      datasets: [
        {
          backgroundColor: "#9BD0F5",
          data: [40, 20, 12]
        }
      ]
    };
    const options = {
      responsive: true
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Bar), mergeProps({
        data,
        options
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/utils/charts/Bar.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = {
  __name: "ChartCard",
  __ssrInlineRender: true,
  props: {
    type: String,
    meal: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_2$6;
      const _component_DashboardUtilsChartsBar = _sfc_main$n;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ class: "mx-3 text-center" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-bold text-l text-green-400"${_scopeId}>${ssrInterpolate(__props.type)}</p><p class="mt-2"${_scopeId}> Most Ordered ${ssrInterpolate(__props.meal)} Meal </p><p${_scopeId}> This Year </p>`);
            _push2(ssrRenderComponent(_component_DashboardUtilsChartsBar, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "font-bold text-l text-green-400" }, toDisplayString(__props.type), 1),
              createVNode("p", { class: "mt-2" }, " Most Ordered " + toDisplayString(__props.meal) + " Meal ", 1),
              createVNode("p", null, " This Year "),
              createVNode(_component_DashboardUtilsChartsBar)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/ChartCard.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __nuxt_component_1$4 = _sfc_main$m;
const _sfc_main$l = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: ["mealitem"],
  setup(__props) {
    var _a;
    let isOpen = ref(false);
    const breakfastStore = useBreakfastStore();
    const { editBreakfast } = breakfastStore;
    const { breakfast_meals } = breakfastStore;
    const props = __props;
    const meal = JSON.parse(JSON.stringify((_a = breakfast_meals.find((stored_meal) => stored_meal.id === props.mealitem.id)) != null ? _a : null));
    function edit() {
      editBreakfast(meal);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$5;
      const _component_UModal = __nuxt_component_2$7;
      const _component_UCard = __nuxt_component_2$6;
      const _component_UForm = __nuxt_component_3$2;
      const _component_UFormGroup = __nuxt_component_4$2;
      const _component_UInput = __nuxt_component_5$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true,
        icon: "i-heroicons-pencil-square",
        size: "sm",
        color: "blue",
        variant: "ghost"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : isOpen = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-lg text-center font-extrabold"${_scopeId2}> Edit Meal </h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Edit Meal ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: edit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Name" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).name,
                                "onUpdate:modelValue": ($event) => unref(meal).name = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).name,
                                  "onUpdate:modelValue": ($event) => unref(meal).name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Price" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).price,
                                "onUpdate:modelValue": ($event) => unref(meal).price = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).price,
                                  "onUpdate:modelValue": ($event) => unref(meal).price = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Description" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).description,
                                "onUpdate:modelValue": ($event) => unref(meal).description = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).description,
                                  "onUpdate:modelValue": ($event) => unref(meal).description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Ingredients" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).ingredients,
                                "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).ingredients,
                                  "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Section" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).section,
                                "onUpdate:modelValue": ($event) => unref(meal).section = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).section,
                                  "onUpdate:modelValue": ($event) => unref(meal).section = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UFormGroup, { label: "Name" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).name,
                                "onUpdate:modelValue": ($event) => unref(meal).name = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Price" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).price,
                                "onUpdate:modelValue": ($event) => unref(meal).price = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Description" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).description,
                                "onUpdate:modelValue": ($event) => unref(meal).description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).ingredients,
                                "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Section" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).section,
                                "onUpdate:modelValue": ($event) => unref(meal).section = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UButton, {
                            type: "submit",
                            onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      class: "space-y-4",
                      onSubmit: edit
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, { label: "Name" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).name,
                              "onUpdate:modelValue": ($event) => unref(meal).name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Price" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).price,
                              "onUpdate:modelValue": ($event) => unref(meal).price = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Description" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).description,
                              "onUpdate:modelValue": ($event) => unref(meal).description = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).ingredients,
                              "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Section" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).section,
                              "onUpdate:modelValue": ($event) => unref(meal).section = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx(() => [
                  createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Edit Meal ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: edit
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, { label: "Name" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).name,
                            "onUpdate:modelValue": ($event) => unref(meal).name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Price" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).price,
                            "onUpdate:modelValue": ($event) => unref(meal).price = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Description" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).description,
                            "onUpdate:modelValue": ($event) => unref(meal).description = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).ingredients,
                            "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Section" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).section,
                            "onUpdate:modelValue": ($event) => unref(meal).section = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        type: "submit",
                        onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/breakfast/modals/Edit.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __nuxt_component_5$3 = _sfc_main$l;
const _sfc_main$k = {
  __name: "BreakfastMobile",
  __ssrInlineRender: true,
  props: {
    menu: String,
    mobile_columns: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTable = __nuxt_component_0$6;
      const _component_DashboardMenuBreakfastModalsEdit = __nuxt_component_5$3;
      _push(ssrRenderComponent(_component_UTable, mergeProps({
        columns: __props.mobile_columns,
        rows: __props.menu,
        sort: { column: "title" }
      }, _attrs), {
        "edit-data": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardMenuBreakfastModalsEdit, { mealitem: _ctx.row }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardMenuBreakfastModalsEdit, { mealitem: _ctx.row }, null, 8, ["mealitem"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/utils/tables/menu/BreakfastMobile.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __nuxt_component_1$3 = _sfc_main$k;
const _sfc_main$j = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    let createMealModal = ref(false);
    const breakfastStore = useBreakfastStore();
    const { createBreakfastMeal } = breakfastStore;
    const meal = {
      id: 69,
      name: "gayerst",
      price: 5151,
      description: "homiexfadfasdf",
      ingredients: "2 niggas",
      section: "hell"
    };
    async function submit() {
      createBreakfastMeal(meal);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$5;
      const _component_UModal = __nuxt_component_2$7;
      const _component_UCard = __nuxt_component_2$6;
      const _component_UForm = __nuxt_component_3$2;
      const _component_UFormGroup = __nuxt_component_4$2;
      const _component_UInput = __nuxt_component_5$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => isRef(createMealModal) ? createMealModal.value = true : createMealModal = true,
        icon: "i-heroicons-plus",
        color: "gray",
        variant: "solid",
        label: "Create Meal"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(createMealModal),
        "onUpdate:modelValue": ($event) => isRef(createMealModal) ? createMealModal.value = $event : createMealModal = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-lg text-center font-extrabold"${_scopeId2}> Create Meal </h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Create Meal ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: submit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Name" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.name,
                                "onUpdate:modelValue": ($event) => meal.name = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.name,
                                  "onUpdate:modelValue": ($event) => meal.name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Price" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.price,
                                "onUpdate:modelValue": ($event) => meal.price = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.price,
                                  "onUpdate:modelValue": ($event) => meal.price = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Description" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.description,
                                "onUpdate:modelValue": ($event) => meal.description = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.description,
                                  "onUpdate:modelValue": ($event) => meal.description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Ingredients" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.ingredients,
                                "onUpdate:modelValue": ($event) => meal.ingredients = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.ingredients,
                                  "onUpdate:modelValue": ($event) => meal.ingredients = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Section" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.section,
                                "onUpdate:modelValue": ($event) => meal.section = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.section,
                                  "onUpdate:modelValue": ($event) => meal.section = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(createMealModal) ? createMealModal.value = false : createMealModal = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UFormGroup, { label: "Name" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.name,
                                "onUpdate:modelValue": ($event) => meal.name = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Price" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.price,
                                "onUpdate:modelValue": ($event) => meal.price = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Description" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.description,
                                "onUpdate:modelValue": ($event) => meal.description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.ingredients,
                                "onUpdate:modelValue": ($event) => meal.ingredients = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Section" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.section,
                                "onUpdate:modelValue": ($event) => meal.section = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UButton, {
                            type: "submit",
                            onClick: ($event) => isRef(createMealModal) ? createMealModal.value = false : createMealModal = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      class: "space-y-4",
                      onSubmit: submit
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, { label: "Name" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.name,
                              "onUpdate:modelValue": ($event) => meal.name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Price" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.price,
                              "onUpdate:modelValue": ($event) => meal.price = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Description" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.description,
                              "onUpdate:modelValue": ($event) => meal.description = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.ingredients,
                              "onUpdate:modelValue": ($event) => meal.ingredients = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Section" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.section,
                              "onUpdate:modelValue": ($event) => meal.section = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(createMealModal) ? createMealModal.value = false : createMealModal = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx(() => [
                  createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Create Meal ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: submit
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, { label: "Name" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.name,
                            "onUpdate:modelValue": ($event) => meal.name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Price" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.price,
                            "onUpdate:modelValue": ($event) => meal.price = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Description" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.description,
                            "onUpdate:modelValue": ($event) => meal.description = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.ingredients,
                            "onUpdate:modelValue": ($event) => meal.ingredients = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Section" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.section,
                            "onUpdate:modelValue": ($event) => meal.section = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        type: "submit",
                        onClick: ($event) => isRef(createMealModal) ? createMealModal.value = false : createMealModal = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/breakfast/modals/Create.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __nuxt_component_0$3 = _sfc_main$j;
const _sfc_main$i = {
  __name: "IngredientsModal",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$5;
      const _component_UModal = __nuxt_component_2$7;
      const _component_UCard = __nuxt_component_2$6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => isOpen.value = true,
        icon: "i-heroicons-arrow-top-right-on-square",
        size: "sm",
        color: "black",
        variant: "ghost"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-lg text-center font-extrabold"${_scopeId2}>\u{1F958} Ingredients</h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-lg text-center font-extrabold" }, "\u{1F958} Ingredients")
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3)
                  ;
                else {
                  return [];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx(() => [
                  createVNode("h1", { class: "text-lg text-center font-extrabold" }, "\u{1F958} Ingredients")
                ]),
                footer: withCtx(() => []),
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IngredientsModal.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_2$3 = _sfc_main$i;
const _sfc_main$h = {
  __name: "Delete",
  __ssrInlineRender: true,
  props: ["mealitem"],
  setup(__props) {
    var _a;
    let isOpen = ref(false);
    const breakfastStore = useBreakfastStore();
    const { deleteBreakfast } = breakfastStore;
    const { breakfast_meals } = breakfastStore;
    const props = __props;
    const meal = JSON.parse(JSON.stringify((_a = breakfast_meals.find((stored_meal) => stored_meal.id === props.mealitem.id)) != null ? _a : null));
    function remove() {
      deleteBreakfast(meal);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$5;
      const _component_UModal = __nuxt_component_2$7;
      const _component_UCard = __nuxt_component_2$6;
      const _component_UForm = __nuxt_component_3$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true,
        icon: "i-heroicons-trash",
        size: "sm",
        color: "red",
        variant: "ghost"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : isOpen = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-lg text-center font-extrabold"${_scopeId2}> Delete Meal </h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Delete Meal ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: remove
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}> Do you want to delete this meal? The action cannot be undone </p>`);
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Delete `);
                            } else {
                              return [
                                createTextVNode(" Delete ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, " Do you want to delete this meal? The action cannot be undone "),
                          createVNode(_component_UButton, {
                            type: "submit",
                            onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Delete ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      class: "space-y-4",
                      onSubmit: remove
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, " Do you want to delete this meal? The action cannot be undone "),
                        createVNode(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Delete ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx(() => [
                  createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Delete Meal ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: remove
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, " Do you want to delete this meal? The action cannot be undone "),
                      createVNode(_component_UButton, {
                        type: "submit",
                        onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Delete ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/breakfast/modals/Delete.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_6$2 = _sfc_main$h;
const _sfc_main$g = {
  __name: "Breakfast",
  __ssrInlineRender: true,
  props: {
    menu: Array,
    columns: String
  },
  setup(__props) {
    const breakfastStore = useBreakfastStore();
    let { breakfast_meals } = breakfastStore;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardMenuBreakfastModalsCreate = __nuxt_component_0$3;
      const _component_UTable = __nuxt_component_0$6;
      const _component_IngredientsModal = __nuxt_component_2$3;
      const _component_UTooltip = __nuxt_component_3$1;
      const _component_UAvatar = __nuxt_component_4$1;
      const _component_DashboardMenuBreakfastModalsEdit = __nuxt_component_5$3;
      const _component_DashboardMenuBreakfastModalsDelete = __nuxt_component_6$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_DashboardMenuBreakfastModalsCreate, null, null, _parent));
      _push(ssrRenderComponent(_component_UTable, {
        columns: __props.columns,
        rows: unref(breakfast_meals),
        sort: { column: "title" }
      }, {
        "description-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="whitespace-normal overflow-visible w-52"${_scopeId}>${ssrInterpolate(row.description)}</div>`);
          } else {
            return [
              createVNode("div", { class: "whitespace-normal overflow-visible w-52" }, toDisplayString(row.description), 1)
            ];
          }
        }),
        "ingredients-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IngredientsModal, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.ingredients)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.ingredients), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IngredientsModal, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(row.ingredients), 1)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        "image-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTooltip, {
              text: row.name,
              popper: { arrow: true }
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UAvatar, {
                    src: row.image,
                    size: "lg",
                    alt: "Avatar"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UAvatar, {
                      src: row.image,
                      size: "lg",
                      alt: "Avatar"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTooltip, {
                text: row.name,
                popper: { arrow: true }
              }, {
                default: withCtx(() => [
                  createVNode(_component_UAvatar, {
                    src: row.image,
                    size: "lg",
                    alt: "Avatar"
                  }, null, 8, ["src"])
                ]),
                _: 2
              }, 1032, ["text"])
            ];
          }
        }),
        "edit-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardMenuBreakfastModalsEdit, { mealitem: row }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardMenuBreakfastModalsEdit, { mealitem: row }, null, 8, ["mealitem"])
            ];
          }
        }),
        "delete-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardMenuBreakfastModalsDelete, { mealitem: row }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardMenuBreakfastModalsDelete, { mealitem: row }, null, 8, ["mealitem"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/utils/tables/menu/Breakfast.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_2$2 = _sfc_main$g;
const _sfc_main$f = {
  __name: "BreakfastDataTable",
  __ssrInlineRender: true,
  props: {
    menu: String,
    columns: String
  },
  setup(__props) {
    const breakfastStore = useBreakfastStore();
    let { breakfast_meals } = breakfastStore;
    useAsyncData(async () => await breakfastStore.getBreakfast(), {
      initialCache: false
    }, "$FlVjR1pO3C");
    const columns = [
      {
        key: "id",
        label: "ID"
      },
      {
        key: "name",
        label: "Meal Name",
        sortable: true
      },
      {
        key: "price",
        label: "Meal Price",
        sortable: true
      },
      {
        key: "description",
        label: "Meal Description",
        direction: "desc"
      },
      {
        key: "section",
        label: "Section"
      },
      {
        key: "image",
        label: "Image"
      },
      {
        key: "ingredients",
        label: "Ingredients"
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
      key: "name",
      label: "Meal Name",
      sortable: true
    }, {
      key: "price",
      label: "Meal Price",
      sortable: true
    }, {
      key: "edit",
      label: "Edit"
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_2$6;
      const _component_DashboardUtilsTablesMenuBreakfastMobile = __nuxt_component_1$3;
      const _component_DashboardUtilsTablesMenuBreakfast = __nuxt_component_2$2;
      _push(ssrRenderComponent(_component_UCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$viewport.isLessThan("tablet")) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardUtilsTablesMenuBreakfastMobile, {
                meal: "Breakfast",
                menu: unref(breakfast_meals),
                columns: mobile_columns
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardUtilsTablesMenuBreakfast, {
                meal: "Breakfast",
                menu: unref(breakfast_meals),
                columns
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              _ctx.$viewport.isLessThan("tablet") ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_component_DashboardUtilsTablesMenuBreakfastMobile, {
                  meal: "Breakfast",
                  menu: unref(breakfast_meals),
                  columns: mobile_columns
                }, null, 8, ["menu"])
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_component_DashboardUtilsTablesMenuBreakfast, {
                  meal: "Breakfast",
                  menu: unref(breakfast_meals),
                  columns
                }, null, 8, ["menu"])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/breakfast/BreakfastDataTable.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$f;
const _sfc_main$e = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: ["mealitem"],
  setup(__props) {
    var _a;
    let isOpen = ref(false);
    const lunchStore = useLunchStore();
    const { editLunch } = lunchStore;
    const { lunch_meals } = lunchStore;
    const props = __props;
    const meal = JSON.parse(JSON.stringify((_a = lunch_meals.find((stored_meal) => stored_meal.id === props.mealitem.id)) != null ? _a : null));
    function edit() {
      editLunch(meal);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$5;
      const _component_UModal = __nuxt_component_2$7;
      const _component_UCard = __nuxt_component_2$6;
      const _component_UForm = __nuxt_component_3$2;
      const _component_UFormGroup = __nuxt_component_4$2;
      const _component_UInput = __nuxt_component_5$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true,
        icon: "i-heroicons-pencil-square",
        size: "sm",
        color: "blue",
        variant: "ghost"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : isOpen = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-lg text-center font-extrabold"${_scopeId2}> Edit Meal </h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Edit Meal ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: edit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Name" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).name,
                                "onUpdate:modelValue": ($event) => unref(meal).name = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).name,
                                  "onUpdate:modelValue": ($event) => unref(meal).name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Price" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).price,
                                "onUpdate:modelValue": ($event) => unref(meal).price = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).price,
                                  "onUpdate:modelValue": ($event) => unref(meal).price = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Description" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).description,
                                "onUpdate:modelValue": ($event) => unref(meal).description = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).description,
                                  "onUpdate:modelValue": ($event) => unref(meal).description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Ingredients" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).ingredients,
                                "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).ingredients,
                                  "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Section" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).section,
                                "onUpdate:modelValue": ($event) => unref(meal).section = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).section,
                                  "onUpdate:modelValue": ($event) => unref(meal).section = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UFormGroup, { label: "Name" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).name,
                                "onUpdate:modelValue": ($event) => unref(meal).name = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Price" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).price,
                                "onUpdate:modelValue": ($event) => unref(meal).price = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Description" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).description,
                                "onUpdate:modelValue": ($event) => unref(meal).description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).ingredients,
                                "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Section" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).section,
                                "onUpdate:modelValue": ($event) => unref(meal).section = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UButton, {
                            type: "submit",
                            onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      class: "space-y-4",
                      onSubmit: edit
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, { label: "Name" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).name,
                              "onUpdate:modelValue": ($event) => unref(meal).name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Price" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).price,
                              "onUpdate:modelValue": ($event) => unref(meal).price = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Description" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).description,
                              "onUpdate:modelValue": ($event) => unref(meal).description = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).ingredients,
                              "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Section" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).section,
                              "onUpdate:modelValue": ($event) => unref(meal).section = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx(() => [
                  createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Edit Meal ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: edit
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, { label: "Name" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).name,
                            "onUpdate:modelValue": ($event) => unref(meal).name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Price" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).price,
                            "onUpdate:modelValue": ($event) => unref(meal).price = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Description" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).description,
                            "onUpdate:modelValue": ($event) => unref(meal).description = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).ingredients,
                            "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Section" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).section,
                            "onUpdate:modelValue": ($event) => unref(meal).section = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        type: "submit",
                        onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/lunch/modals/Edit.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_5$2 = _sfc_main$e;
const _sfc_main$d = {
  __name: "LunchMobile",
  __ssrInlineRender: true,
  props: {
    menu: String,
    mobile_columns: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTable = __nuxt_component_0$6;
      const _component_DashboardMenuLunchModalsEdit = __nuxt_component_5$2;
      _push(ssrRenderComponent(_component_UTable, mergeProps({
        columns: __props.mobile_columns,
        rows: __props.menu,
        sort: { column: "title" }
      }, _attrs), {
        "edit-data": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardMenuLunchModalsEdit, { mealitem: _ctx.row }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardMenuLunchModalsEdit, { mealitem: _ctx.row }, null, 8, ["mealitem"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/utils/tables/menu/LunchMobile.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_1$2 = _sfc_main$d;
const _sfc_main$c = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    let createMealModal = ref(false);
    const lunchStore = useLunchStore();
    const { createLunchMeal } = lunchStore;
    const meal = {
      id: 69,
      name: "gayerst",
      price: 5151,
      description: "homiexfadfasdf",
      ingredients: "2 niggas",
      section: "hell"
    };
    async function submit() {
      createLunchMeal(meal);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$5;
      const _component_UModal = __nuxt_component_2$7;
      const _component_UCard = __nuxt_component_2$6;
      const _component_UForm = __nuxt_component_3$2;
      const _component_UFormGroup = __nuxt_component_4$2;
      const _component_UInput = __nuxt_component_5$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => isRef(createMealModal) ? createMealModal.value = true : createMealModal = true,
        icon: "i-heroicons-plus",
        color: "gray",
        variant: "solid",
        label: "Create Meal"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(createMealModal),
        "onUpdate:modelValue": ($event) => isRef(createMealModal) ? createMealModal.value = $event : createMealModal = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-lg text-center font-extrabold"${_scopeId2}> Create Meal </h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Create Meal ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: submit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Name" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.name,
                                "onUpdate:modelValue": ($event) => meal.name = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.name,
                                  "onUpdate:modelValue": ($event) => meal.name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Price" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.price,
                                "onUpdate:modelValue": ($event) => meal.price = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.price,
                                  "onUpdate:modelValue": ($event) => meal.price = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Description" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.description,
                                "onUpdate:modelValue": ($event) => meal.description = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.description,
                                  "onUpdate:modelValue": ($event) => meal.description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Ingredients" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.ingredients,
                                "onUpdate:modelValue": ($event) => meal.ingredients = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.ingredients,
                                  "onUpdate:modelValue": ($event) => meal.ingredients = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Section" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.section,
                                "onUpdate:modelValue": ($event) => meal.section = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.section,
                                  "onUpdate:modelValue": ($event) => meal.section = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(createMealModal) ? createMealModal.value = false : createMealModal = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UFormGroup, { label: "Name" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.name,
                                "onUpdate:modelValue": ($event) => meal.name = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Price" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.price,
                                "onUpdate:modelValue": ($event) => meal.price = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Description" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.description,
                                "onUpdate:modelValue": ($event) => meal.description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.ingredients,
                                "onUpdate:modelValue": ($event) => meal.ingredients = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Section" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.section,
                                "onUpdate:modelValue": ($event) => meal.section = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UButton, {
                            type: "submit",
                            onClick: ($event) => isRef(createMealModal) ? createMealModal.value = false : createMealModal = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      class: "space-y-4",
                      onSubmit: submit
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, { label: "Name" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.name,
                              "onUpdate:modelValue": ($event) => meal.name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Price" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.price,
                              "onUpdate:modelValue": ($event) => meal.price = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Description" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.description,
                              "onUpdate:modelValue": ($event) => meal.description = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.ingredients,
                              "onUpdate:modelValue": ($event) => meal.ingredients = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Section" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.section,
                              "onUpdate:modelValue": ($event) => meal.section = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(createMealModal) ? createMealModal.value = false : createMealModal = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx(() => [
                  createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Create Meal ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: submit
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, { label: "Name" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.name,
                            "onUpdate:modelValue": ($event) => meal.name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Price" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.price,
                            "onUpdate:modelValue": ($event) => meal.price = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Description" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.description,
                            "onUpdate:modelValue": ($event) => meal.description = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.ingredients,
                            "onUpdate:modelValue": ($event) => meal.ingredients = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Section" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.section,
                            "onUpdate:modelValue": ($event) => meal.section = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        type: "submit",
                        onClick: ($event) => isRef(createMealModal) ? createMealModal.value = false : createMealModal = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/lunch/modals/Create.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$2 = _sfc_main$c;
const _sfc_main$b = {
  __name: "Delete",
  __ssrInlineRender: true,
  props: ["mealitem"],
  setup(__props) {
    var _a;
    let isOpen = ref(false);
    const lunchStore = useLunchStore();
    const { deleteLunch } = lunchStore;
    const { lunch_meals } = lunchStore;
    const props = __props;
    const meal = JSON.parse(JSON.stringify((_a = lunch_meals.find((stored_meal) => stored_meal.id === props.mealitem.id)) != null ? _a : null));
    function remove() {
      deleteLunch(meal);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$5;
      const _component_UModal = __nuxt_component_2$7;
      const _component_UCard = __nuxt_component_2$6;
      const _component_UForm = __nuxt_component_3$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true,
        icon: "i-heroicons-trash",
        size: "sm",
        color: "red",
        variant: "ghost"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : isOpen = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-lg text-center font-extrabold"${_scopeId2}> Delete Meal </h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Delete Meal ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: remove
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}> Do you want to delete this meal? The action cannot be undone </p>`);
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Delete `);
                            } else {
                              return [
                                createTextVNode(" Delete ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, " Do you want to delete this meal? The action cannot be undone "),
                          createVNode(_component_UButton, {
                            type: "submit",
                            onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Delete ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      class: "space-y-4",
                      onSubmit: remove
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, " Do you want to delete this meal? The action cannot be undone "),
                        createVNode(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Delete ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx(() => [
                  createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Delete Meal ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: remove
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, " Do you want to delete this meal? The action cannot be undone "),
                      createVNode(_component_UButton, {
                        type: "submit",
                        onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Delete ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/lunch/modals/Delete.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_6$1 = _sfc_main$b;
const _sfc_main$a = {
  __name: "Lunch",
  __ssrInlineRender: true,
  props: {
    menu: String,
    columns: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardMenuLunchModalsCreate = __nuxt_component_0$2;
      const _component_UTable = __nuxt_component_0$6;
      const _component_IngredientsModal = __nuxt_component_2$3;
      const _component_UTooltip = __nuxt_component_3$1;
      const _component_UAvatar = __nuxt_component_4$1;
      const _component_DashboardMenuLunchModalsEdit = __nuxt_component_5$2;
      const _component_DashboardMenuLunchModalsDelete = __nuxt_component_6$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_DashboardMenuLunchModalsCreate, null, null, _parent));
      _push(ssrRenderComponent(_component_UTable, {
        columns: __props.columns,
        rows: __props.menu,
        sort: { column: "title" }
      }, {
        "description-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="whitespace-normal overflow-visible w-52"${_scopeId}>${ssrInterpolate(row.description)}</div>`);
          } else {
            return [
              createVNode("div", { class: "whitespace-normal overflow-visible w-52" }, toDisplayString(row.description), 1)
            ];
          }
        }),
        "ingredients-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IngredientsModal, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.ingredients)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.ingredients), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IngredientsModal, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(row.ingredients), 1)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        "image-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTooltip, {
              text: row.name,
              popper: { arrow: true }
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UAvatar, {
                    src: row.image,
                    size: "lg",
                    alt: "Avatar"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UAvatar, {
                      src: row.image,
                      size: "lg",
                      alt: "Avatar"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTooltip, {
                text: row.name,
                popper: { arrow: true }
              }, {
                default: withCtx(() => [
                  createVNode(_component_UAvatar, {
                    src: row.image,
                    size: "lg",
                    alt: "Avatar"
                  }, null, 8, ["src"])
                ]),
                _: 2
              }, 1032, ["text"])
            ];
          }
        }),
        "edit-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardMenuLunchModalsEdit, { mealitem: row }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardMenuLunchModalsEdit, { mealitem: row }, null, 8, ["mealitem"])
            ];
          }
        }),
        "delete-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardMenuLunchModalsDelete, { mealitem: row }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardMenuLunchModalsDelete, { mealitem: row }, null, 8, ["mealitem"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/utils/tables/menu/Lunch.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_2$1 = _sfc_main$a;
const _sfc_main$9 = {
  __name: "LunchDataTable",
  __ssrInlineRender: true,
  props: {
    menu: String,
    columns: String
  },
  setup(__props) {
    const lunchStore = useLunchStore();
    const { lunch_meals } = lunchStore;
    useAsyncData(async () => await lunchStore.getLunch(), {
      initialCache: false
    }, "$62qmFSjoQl");
    const columns = [
      {
        key: "id",
        label: "ID"
      },
      {
        key: "name",
        label: "Meal Name",
        sortable: true
      },
      {
        key: "price",
        label: "Meal Price",
        sortable: true
      },
      {
        key: "description",
        label: "Meal Description",
        direction: "desc"
      },
      {
        key: "section",
        label: "Section"
      },
      {
        key: "image",
        label: "Image"
      },
      {
        key: "ingredients",
        label: "Ingredients"
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
      key: "name",
      label: "Meal Name",
      sortable: true
    }, {
      key: "price",
      label: "Meal Price",
      sortable: true
    }, {
      key: "edit",
      label: "Edit"
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_2$6;
      const _component_DashboardUtilsTablesMenuLunchMobile = __nuxt_component_1$2;
      const _component_DashboardUtilsTablesMenuLunch = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_UCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$viewport.isLessThan("tablet")) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardUtilsTablesMenuLunchMobile, {
                meal: "Lunch",
                menu: unref(lunch_meals),
                columns: mobile_columns
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardUtilsTablesMenuLunch, {
                meal: "Lunch",
                menu: unref(lunch_meals),
                columns
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              _ctx.$viewport.isLessThan("tablet") ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_component_DashboardUtilsTablesMenuLunchMobile, {
                  meal: "Lunch",
                  menu: unref(lunch_meals),
                  columns: mobile_columns
                }, null, 8, ["menu"])
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_component_DashboardUtilsTablesMenuLunch, {
                  meal: "Lunch",
                  menu: unref(lunch_meals),
                  columns
                }, null, 8, ["menu"])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/lunch/LunchDataTable.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$9;
const _sfc_main$8 = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: ["mealitem"],
  setup(__props) {
    var _a;
    let isOpen = ref(false);
    const dinnerStore = useDinnerStore();
    const { editDinner } = dinnerStore;
    const { dinner_meals } = dinnerStore;
    const props = __props;
    const meal = JSON.parse(JSON.stringify((_a = dinner_meals.find((stored_meal) => stored_meal.id === props.mealitem.id)) != null ? _a : null));
    function edit() {
      editDinner(meal);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$5;
      const _component_UModal = __nuxt_component_2$7;
      const _component_UCard = __nuxt_component_2$6;
      const _component_UForm = __nuxt_component_3$2;
      const _component_UFormGroup = __nuxt_component_4$2;
      const _component_UInput = __nuxt_component_5$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true,
        icon: "i-heroicons-pencil-square",
        size: "sm",
        color: "blue",
        variant: "ghost"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : isOpen = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-lg text-center font-extrabold"${_scopeId2}> Edit Meal </h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Edit Meal ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: edit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Name" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).name,
                                "onUpdate:modelValue": ($event) => unref(meal).name = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).name,
                                  "onUpdate:modelValue": ($event) => unref(meal).name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Price" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).price,
                                "onUpdate:modelValue": ($event) => unref(meal).price = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).price,
                                  "onUpdate:modelValue": ($event) => unref(meal).price = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Description" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).description,
                                "onUpdate:modelValue": ($event) => unref(meal).description = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).description,
                                  "onUpdate:modelValue": ($event) => unref(meal).description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Ingredients" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).ingredients,
                                "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).ingredients,
                                  "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Section" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(meal).section,
                                "onUpdate:modelValue": ($event) => unref(meal).section = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(meal).section,
                                  "onUpdate:modelValue": ($event) => unref(meal).section = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UFormGroup, { label: "Name" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).name,
                                "onUpdate:modelValue": ($event) => unref(meal).name = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Price" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).price,
                                "onUpdate:modelValue": ($event) => unref(meal).price = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Description" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).description,
                                "onUpdate:modelValue": ($event) => unref(meal).description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).ingredients,
                                "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Section" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(meal).section,
                                "onUpdate:modelValue": ($event) => unref(meal).section = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UButton, {
                            type: "submit",
                            onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      class: "space-y-4",
                      onSubmit: edit
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, { label: "Name" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).name,
                              "onUpdate:modelValue": ($event) => unref(meal).name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Price" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).price,
                              "onUpdate:modelValue": ($event) => unref(meal).price = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Description" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).description,
                              "onUpdate:modelValue": ($event) => unref(meal).description = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).ingredients,
                              "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Section" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(meal).section,
                              "onUpdate:modelValue": ($event) => unref(meal).section = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx(() => [
                  createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Edit Meal ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: edit
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, { label: "Name" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).name,
                            "onUpdate:modelValue": ($event) => unref(meal).name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Price" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).price,
                            "onUpdate:modelValue": ($event) => unref(meal).price = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Description" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).description,
                            "onUpdate:modelValue": ($event) => unref(meal).description = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).ingredients,
                            "onUpdate:modelValue": ($event) => unref(meal).ingredients = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Section" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(meal).section,
                            "onUpdate:modelValue": ($event) => unref(meal).section = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        type: "submit",
                        onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/dinner/modals/Edit.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_5$1 = _sfc_main$8;
const _sfc_main$7 = {
  __name: "DinnerMobile",
  __ssrInlineRender: true,
  props: {
    menu: String,
    mobile_columns: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTable = __nuxt_component_0$6;
      const _component_DashboardMenuDinnerModalsEdit = __nuxt_component_5$1;
      _push(ssrRenderComponent(_component_UTable, mergeProps({
        columns: __props.mobile_columns,
        rows: __props.menu,
        sort: { column: "title" }
      }, _attrs), {
        "edit-data": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardMenuDinnerModalsEdit, { mealitem: _ctx.row }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardMenuDinnerModalsEdit, { mealitem: _ctx.row }, null, 8, ["mealitem"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/utils/tables/menu/DinnerMobile.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$7;
const _sfc_main$6 = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    let createMealModal = ref(false);
    const dinnerStore = useDinnerStore();
    const { createDinnerMeal } = dinnerStore;
    const meal = {
      id: 69,
      name: "gayerst",
      price: 5151,
      description: "homiexfadfasdf",
      ingredients: "2 niggas",
      section: "hell"
    };
    async function submit() {
      createDinnerMeal(meal);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$5;
      const _component_UModal = __nuxt_component_2$7;
      const _component_UCard = __nuxt_component_2$6;
      const _component_UForm = __nuxt_component_3$2;
      const _component_UFormGroup = __nuxt_component_4$2;
      const _component_UInput = __nuxt_component_5$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => isRef(createMealModal) ? createMealModal.value = true : createMealModal = true,
        icon: "i-heroicons-plus",
        color: "gray",
        variant: "solid",
        label: "Create Meal"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(createMealModal),
        "onUpdate:modelValue": ($event) => isRef(createMealModal) ? createMealModal.value = $event : createMealModal = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-lg text-center font-extrabold"${_scopeId2}> Create Meal </h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Create Meal ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: submit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Name" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.name,
                                "onUpdate:modelValue": ($event) => meal.name = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.name,
                                  "onUpdate:modelValue": ($event) => meal.name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Price" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.price,
                                "onUpdate:modelValue": ($event) => meal.price = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.price,
                                  "onUpdate:modelValue": ($event) => meal.price = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Description" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.description,
                                "onUpdate:modelValue": ($event) => meal.description = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.description,
                                  "onUpdate:modelValue": ($event) => meal.description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Ingredients" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.ingredients,
                                "onUpdate:modelValue": ($event) => meal.ingredients = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.ingredients,
                                  "onUpdate:modelValue": ($event) => meal.ingredients = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Section" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: meal.section,
                                "onUpdate:modelValue": ($event) => meal.section = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: meal.section,
                                  "onUpdate:modelValue": ($event) => meal.section = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(createMealModal) ? createMealModal.value = false : createMealModal = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UFormGroup, { label: "Name" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.name,
                                "onUpdate:modelValue": ($event) => meal.name = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Price" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.price,
                                "onUpdate:modelValue": ($event) => meal.price = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Description" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.description,
                                "onUpdate:modelValue": ($event) => meal.description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.ingredients,
                                "onUpdate:modelValue": ($event) => meal.ingredients = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Section" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: meal.section,
                                "onUpdate:modelValue": ($event) => meal.section = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UButton, {
                            type: "submit",
                            onClick: ($event) => isRef(createMealModal) ? createMealModal.value = false : createMealModal = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      class: "space-y-4",
                      onSubmit: submit
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, { label: "Name" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.name,
                              "onUpdate:modelValue": ($event) => meal.name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Price" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.price,
                              "onUpdate:modelValue": ($event) => meal.price = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Description" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.description,
                              "onUpdate:modelValue": ($event) => meal.description = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.ingredients,
                              "onUpdate:modelValue": ($event) => meal.ingredients = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Section" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: meal.section,
                              "onUpdate:modelValue": ($event) => meal.section = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(createMealModal) ? createMealModal.value = false : createMealModal = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx(() => [
                  createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Create Meal ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: submit
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, { label: "Name" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.name,
                            "onUpdate:modelValue": ($event) => meal.name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Price" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.price,
                            "onUpdate:modelValue": ($event) => meal.price = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Description" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.description,
                            "onUpdate:modelValue": ($event) => meal.description = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Ingredients" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.ingredients,
                            "onUpdate:modelValue": ($event) => meal.ingredients = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Section" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: meal.section,
                            "onUpdate:modelValue": ($event) => meal.section = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        type: "submit",
                        onClick: ($event) => isRef(createMealModal) ? createMealModal.value = false : createMealModal = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/dinner/modals/Create.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "Delete",
  __ssrInlineRender: true,
  props: ["mealitem"],
  setup(__props) {
    var _a;
    let isOpen = ref(false);
    const dinnerStore = useDinnerStore();
    const { deleteDinner } = dinnerStore;
    const { dinner_meals } = dinnerStore;
    const props = __props;
    const meal = JSON.parse(JSON.stringify((_a = dinner_meals.find((stored_meal) => stored_meal.id === props.mealitem.id)) != null ? _a : null));
    function remove() {
      deleteDinner(meal);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$5;
      const _component_UModal = __nuxt_component_2$7;
      const _component_UCard = __nuxt_component_2$6;
      const _component_UForm = __nuxt_component_3$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => isRef(isOpen) ? isOpen.value = true : isOpen = true,
        icon: "i-heroicons-trash",
        size: "sm",
        color: "red",
        variant: "ghost"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : isOpen = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-lg text-center font-extrabold"${_scopeId2}> Delete Meal </h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Delete Meal ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: remove
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}> Do you want to delete this meal? The action cannot be undone </p>`);
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Delete `);
                            } else {
                              return [
                                createTextVNode(" Delete ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, " Do you want to delete this meal? The action cannot be undone "),
                          createVNode(_component_UButton, {
                            type: "submit",
                            onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Delete ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      class: "space-y-4",
                      onSubmit: remove
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, " Do you want to delete this meal? The action cannot be undone "),
                        createVNode(_component_UButton, {
                          type: "submit",
                          onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Delete ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx(() => [
                  createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Delete Meal ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: remove
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, " Do you want to delete this meal? The action cannot be undone "),
                      createVNode(_component_UButton, {
                        type: "submit",
                        onClick: ($event) => isRef(isOpen) ? isOpen.value = false : isOpen = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Delete ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/dinner/modals/Delete.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "Dinner",
  __ssrInlineRender: true,
  props: {
    menu: String,
    columns: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardMenuDinnerModalsCreate = __nuxt_component_0$1;
      const _component_UTable = __nuxt_component_0$6;
      const _component_IngredientsModal = __nuxt_component_2$3;
      const _component_UTooltip = __nuxt_component_3$1;
      const _component_UAvatar = __nuxt_component_4$1;
      const _component_DashboardMenuDinnerModalsEdit = __nuxt_component_5$1;
      const _component_DashboardMenuDinnerModalsDelete = __nuxt_component_6;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_DashboardMenuDinnerModalsCreate, null, null, _parent));
      _push(ssrRenderComponent(_component_UTable, {
        columns: __props.columns,
        rows: __props.menu,
        sort: { column: "title" }
      }, {
        "description-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="whitespace-normal overflow-visible w-52"${_scopeId}>${ssrInterpolate(row.description)}</div>`);
          } else {
            return [
              createVNode("div", { class: "whitespace-normal overflow-visible w-52" }, toDisplayString(row.description), 1)
            ];
          }
        }),
        "ingredients-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IngredientsModal, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.ingredients)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.ingredients), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IngredientsModal, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(row.ingredients), 1)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        "image-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTooltip, {
              text: row.name,
              popper: { arrow: true }
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UAvatar, {
                    src: row.image,
                    size: "lg",
                    alt: "Avatar"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UAvatar, {
                      src: row.image,
                      size: "lg",
                      alt: "Avatar"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTooltip, {
                text: row.name,
                popper: { arrow: true }
              }, {
                default: withCtx(() => [
                  createVNode(_component_UAvatar, {
                    src: row.image,
                    size: "lg",
                    alt: "Avatar"
                  }, null, 8, ["src"])
                ]),
                _: 2
              }, 1032, ["text"])
            ];
          }
        }),
        "edit-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardMenuDinnerModalsEdit, { mealitem: row }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardMenuDinnerModalsEdit, { mealitem: row }, null, 8, ["mealitem"])
            ];
          }
        }),
        "delete-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardMenuDinnerModalsDelete, { mealitem: row }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardMenuDinnerModalsDelete, { mealitem: row }, null, 8, ["mealitem"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/utils/tables/menu/Dinner.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "DinnerDataTable",
  __ssrInlineRender: true,
  props: {
    menu: String,
    columns: String
  },
  setup(__props) {
    const dinnerStore = useDinnerStore();
    const { dinner_meals } = dinnerStore;
    useAsyncData(async () => await dinnerStore.getDinner(), {
      initialCache: false
    }, "$PvnC7xV32I");
    const columns = [
      {
        key: "id",
        label: "ID"
      },
      {
        key: "name",
        label: "Meal Name",
        sortable: true
      },
      {
        key: "price",
        label: "Meal Price",
        sortable: true
      },
      {
        key: "description",
        label: "Meal Description",
        direction: "desc"
      },
      {
        key: "section",
        label: "Section"
      },
      {
        key: "image",
        label: "Image"
      },
      {
        key: "ingredients",
        label: "Ingredients"
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
      key: "name",
      label: "Meal Name",
      sortable: true
    }, {
      key: "price",
      label: "Meal Price",
      sortable: true
    }, {
      key: "edit",
      label: "Edit"
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_2$6;
      const _component_DashboardUtilsTablesMenuDinnerMobile = __nuxt_component_1$1;
      const _component_DashboardUtilsTablesMenuDinner = __nuxt_component_2;
      _push(ssrRenderComponent(_component_UCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$viewport.isLessThan("tablet")) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardUtilsTablesMenuDinnerMobile, {
                meal: "Dinner",
                menu: unref(dinner_meals),
                columns: mobile_columns
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardUtilsTablesMenuDinner, {
                meal: "Dinner",
                menu: unref(dinner_meals),
                columns
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              _ctx.$viewport.isLessThan("tablet") ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_component_DashboardUtilsTablesMenuDinnerMobile, {
                  meal: "Dinner",
                  menu: unref(dinner_meals),
                  columns: mobile_columns
                }, null, 8, ["menu"])
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_component_DashboardUtilsTablesMenuDinner, {
                  meal: "Dinner",
                  menu: unref(dinner_meals),
                  columns
                }, null, 8, ["menu"])
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/dinner/DinnerDataTable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    const tabs = [{
      label: "Breakfast",
      content: "This is the Breakfast Menu"
    }, {
      label: "Lunch",
      content: "This is the Lunch Menu"
    }, {
      label: "Dinner",
      content: "This is the Dinner Menu"
    }];
    const breakfastStore = useBreakfastStore();
    let { breakfast_meals } = breakfastStore;
    console.log("Breakfast List:");
    console.log(breakfast_meals);
    ref(false);
    const { $viewport } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardMenuStatusCard = __nuxt_component_0$4;
      const _component_DashboardMenuChartCard = __nuxt_component_1$4;
      const _component_UTabs = __nuxt_component_2$5;
      const _component_DashboardMenuBreakfastDataTable = __nuxt_component_3;
      const _component_DashboardMenuLunchDataTable = __nuxt_component_4;
      const _component_DashboardMenuDinnerDataTable = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 sm:grid-cols-3 my-5">`);
      _push(ssrRenderComponent(_component_DashboardMenuStatusCard, {
        class: "my-3 sm:my-0",
        type1: "Eggs Benedict Trio",
        type2: "Savoury French Toast",
        meal: "Breakfast",
        "data-aos": "fade-right"
      }, null, _parent));
      _push(ssrRenderComponent(_component_DashboardMenuStatusCard, {
        class: "my-3 sm:my-0",
        type1: "Seared Ahi Tuna Sandwich",
        type2: "Club Sandwich Special",
        meal: "Lunch",
        "data-aos": "fade-down"
      }, null, _parent));
      _push(ssrRenderComponent(_component_DashboardMenuStatusCard, {
        type1: "Fillet Mignon with Red Wine Reduction",
        type2: "Lobster Ravioli with Saffron Cream Sauce",
        meal: "Dinner",
        "data-aos": "fade-left"
      }, null, _parent));
      _push(`</div>`);
      if (unref($viewport).isLessThan("tablet")) {
        _push(`<div class="hidden my-5">`);
        _push(ssrRenderComponent(_component_DashboardMenuChartCard, {
          type: "Avocado Toast with Smoked Salmon",
          meal: "Breakfast",
          "data-aos": "fade-right"
        }, null, _parent));
        _push(ssrRenderComponent(_component_DashboardMenuChartCard, {
          type: "Mushroom and Truffle Risotto",
          meal: "Lunch",
          "data-aos": "fade-down"
        }, null, _parent));
        _push(ssrRenderComponent(_component_DashboardMenuChartCard, {
          type: "Lobster Ravioli with Saffron Cream Sauce",
          meal: "Dinner",
          "data-aos": "fade-left"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="visible grid grid-cols-3 my-5">`);
        _push(ssrRenderComponent(_component_DashboardMenuChartCard, {
          type: "Avocado Toast with Smoked Salmon",
          meal: "Breakfast",
          "data-aos": "fade-right"
        }, null, _parent));
        _push(ssrRenderComponent(_component_DashboardMenuChartCard, {
          type: "Mushroom and Truffle Risotto",
          meal: "Lunch",
          "data-aos": "fade-down"
        }, null, _parent));
        _push(ssrRenderComponent(_component_DashboardMenuChartCard, {
          type: "Lobster Ravioli with Saffron Cream Sauce",
          meal: "Dinner",
          "data-aos": "fade-left"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(ssrRenderComponent(_component_UTabs, {
        items: tabs,
        "default-index": 0,
        class: "w-full",
        "data-aos": "flip-up"
      }, {
        item: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (item.label === "Breakfast") {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardMenuBreakfastDataTable, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (item.label === "Lunch") {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardMenuLunchDataTable, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (item.label === "Dinner") {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardMenuDinnerDataTable, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              item.label === "Breakfast" ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_component_DashboardMenuBreakfastDataTable)
              ])) : createCommentVNode("", true),
              item.label === "Lunch" ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_component_DashboardMenuLunchDataTable)
              ])) : createCommentVNode("", true),
              item.label === "Dinner" ? (openBlock(), createBlock("div", { key: 2 }, [
                createVNode(_component_DashboardMenuDinnerDataTable)
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/menu/Main.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_DashboardUtilsNavbarsSidebar = __nuxt_component_0$5;
  const _component_DashboardMenuMain = __nuxt_component_1;
  const _component_DashboardUtilsBackgroundsBlurryRestaurant = __nuxt_component_2$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black grid grid-cols-12 w-full h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_DashboardUtilsNavbarsSidebar, { class: "visible sm:visible sm:z-20 sm:col-span-2 md:visible md:z-20 md:col-span-2" }, null, _parent));
  _push(ssrRenderComponent(_component_DashboardMenuMain, { class: "z-20 col-span-10 w-full scale-90 overflow-y-scroll" }, null, _parent));
  _push(ssrRenderComponent(_component_DashboardUtilsBackgroundsBlurryRestaurant, { class: "z-10 bg-black w-full h-screen" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/views/Menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DashboardViewsMenu = __nuxt_component_0;
  _push(ssrRenderComponent(_component_DashboardViewsMenu, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const menu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { menu as default };
//# sourceMappingURL=menu-da7a3a14.mjs.map
