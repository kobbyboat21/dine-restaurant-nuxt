import { _ as __nuxt_component_0$2 } from './Sidebar-d3faee4d.mjs';
import { _ as __nuxt_component_0$3 } from './StatusCard-bef93be9.mjs';
import { _ as __nuxt_component_2$3 } from './Link-a292d72e.mjs';
import { _ as __nuxt_component_0$4 } from './Table-24ab41ed.mjs';
import { _ as __nuxt_component_1$4 } from './Button-be65dc1b.mjs';
import { _ as __nuxt_component_2$4, a as __nuxt_component_3$1, b as __nuxt_component_4, c as __nuxt_component_5 } from './Input-929542b6.mjs';
import { useSSRContext, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, ref, isRef } from 'vue';
import { u as useBreakfastStore } from './breakfast_menu-81322d40.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useBookingStore, _ as __nuxt_component_6, a as _sfc_main$a } from './bookings-92ac629a.mjs';
import { format } from 'date-fns';
import { u as useAsyncData } from './asyncData-40c94537.mjs';
import { _ as __nuxt_component_2$2 } from './BlurryRestaurant-8cee3ee8.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
import 'v-calendar';
import 'vue-router';

const _sfc_main$9 = {
  __name: "EditModal",
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
      const _component_UButton = __nuxt_component_1$4;
      const _component_UModal = __nuxt_component_2$4;
      const _component_UCard = __nuxt_component_2$3;
      const _component_UForm = __nuxt_component_3$1;
      const _component_UFormGroup = __nuxt_component_4;
      const _component_UInput = __nuxt_component_5;
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EditModal.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$3 = _sfc_main$9;
const _sfc_main$8 = {
  __name: "Mobile",
  __ssrInlineRender: true,
  props: {
    menu: String,
    mobile_columns: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTable = __nuxt_component_0$4;
      const _component_EditModal = __nuxt_component_1$3;
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
            _push2(ssrRenderComponent(_component_EditModal, { mealitem: _ctx.row }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_EditModal, { mealitem: _ctx.row }, null, 8, ["mealitem"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/utils/tables/book/Mobile.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$2 = _sfc_main$8;
const _sfc_main$7 = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    let createBookingModal = ref(false);
    ref(/* @__PURE__ */ new Date());
    const bookingStore = useBookingStore();
    const { createBooking } = bookingStore;
    const booking = {
      id: "",
      name: "",
      section: "",
      capacity: "",
      datetime: Date()
    };
    async function submit() {
      createBooking(booking);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$4;
      const _component_UModal = __nuxt_component_2$4;
      const _component_UCard = __nuxt_component_2$3;
      const _component_UForm = __nuxt_component_3$1;
      const _component_UFormGroup = __nuxt_component_4;
      const _component_UInput = __nuxt_component_5;
      const _component_UPopover = __nuxt_component_6;
      const _component_DatePicker = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => isRef(createBookingModal) ? createBookingModal.value = true : createBookingModal = true,
        icon: "i-heroicons-plus",
        color: "gray",
        variant: "solid",
        label: "Create Booking"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(createBookingModal),
        "onUpdate:modelValue": ($event) => isRef(createBookingModal) ? createBookingModal.value = $event : createBookingModal = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-lg text-center font-extrabold"${_scopeId2}> Create Booking </h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Create Booking ")
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
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Booking Name" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                placeholder: "Booking Name",
                                modelValue: booking.name,
                                "onUpdate:modelValue": ($event) => booking.name = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  placeholder: "Booking Name",
                                  modelValue: booking.name,
                                  "onUpdate:modelValue": ($event) => booking.name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: " Table Section" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                placeholder: "Front/ Back",
                                modelValue: booking.section,
                                "onUpdate:modelValue": ($event) => booking.section = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  placeholder: "Front/ Back",
                                  modelValue: booking.section,
                                  "onUpdate:modelValue": ($event) => booking.section = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Number of Guests" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: booking.capacity,
                                "onUpdate:modelValue": ($event) => booking.capacity = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: booking.capacity,
                                  "onUpdate:modelValue": ($event) => booking.capacity = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Date & Time" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UPopover, { popper: { placement: "bottom-start" } }, {
                                panel: withCtx(({ close }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DatePicker, {
                                      modelValue: booking.datetime,
                                      "onUpdate:modelValue": ($event) => booking.datetime = $event,
                                      mode: "dateTime",
                                      onClose: close
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_DatePicker, {
                                        modelValue: booking.datetime,
                                        "onUpdate:modelValue": ($event) => booking.datetime = $event,
                                        mode: "dateTime",
                                        onClose: close
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClose"])
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UButton, {
                                      icon: "i-heroicons-calendar-days-20-solid",
                                      label: unref(format)(booking.datetime, "d MMM, yyy"),
                                      color: "gray",
                                      variant: "ghost"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UButton, {
                                        icon: "i-heroicons-calendar-days-20-solid",
                                        label: unref(format)(booking.datetime, "d MMM, yyy"),
                                        color: "gray",
                                        variant: "ghost"
                                      }, null, 8, ["label"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UPopover, { popper: { placement: "bottom-start" } }, {
                                  panel: withCtx(({ close }) => [
                                    createVNode(_component_DatePicker, {
                                      modelValue: booking.datetime,
                                      "onUpdate:modelValue": ($event) => booking.datetime = $event,
                                      mode: "dateTime",
                                      onClose: close
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onClose"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_UButton, {
                                      icon: "i-heroicons-calendar-days-20-solid",
                                      label: unref(format)(booking.datetime, "d MMM, yyy"),
                                      color: "gray",
                                      variant: "ghost"
                                    }, null, 8, ["label"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          color: "gray",
                          onClick: ($event) => isRef(createBookingModal) ? createBookingModal.value = false : createBookingModal = false
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
                          createVNode(_component_UFormGroup, { label: "Booking Name" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                placeholder: "Booking Name",
                                modelValue: booking.name,
                                "onUpdate:modelValue": ($event) => booking.name = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: " Table Section" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                placeholder: "Front/ Back",
                                modelValue: booking.section,
                                "onUpdate:modelValue": ($event) => booking.section = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Number of Guests" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: booking.capacity,
                                "onUpdate:modelValue": ($event) => booking.capacity = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Date & Time" }, {
                            default: withCtx(() => [
                              createVNode(_component_UPopover, { popper: { placement: "bottom-start" } }, {
                                panel: withCtx(({ close }) => [
                                  createVNode(_component_DatePicker, {
                                    modelValue: booking.datetime,
                                    "onUpdate:modelValue": ($event) => booking.datetime = $event,
                                    mode: "dateTime",
                                    onClose: close
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onClose"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_UButton, {
                                    icon: "i-heroicons-calendar-days-20-solid",
                                    label: unref(format)(booking.datetime, "d MMM, yyy"),
                                    color: "gray",
                                    variant: "ghost"
                                  }, null, 8, ["label"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UButton, {
                            type: "submit",
                            color: "gray",
                            onClick: ($event) => isRef(createBookingModal) ? createBookingModal.value = false : createBookingModal = false
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
                        createVNode(_component_UFormGroup, { label: "Booking Name" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              placeholder: "Booking Name",
                              modelValue: booking.name,
                              "onUpdate:modelValue": ($event) => booking.name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: " Table Section" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              placeholder: "Front/ Back",
                              modelValue: booking.section,
                              "onUpdate:modelValue": ($event) => booking.section = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Number of Guests" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: booking.capacity,
                              "onUpdate:modelValue": ($event) => booking.capacity = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Date & Time" }, {
                          default: withCtx(() => [
                            createVNode(_component_UPopover, { popper: { placement: "bottom-start" } }, {
                              panel: withCtx(({ close }) => [
                                createVNode(_component_DatePicker, {
                                  modelValue: booking.datetime,
                                  "onUpdate:modelValue": ($event) => booking.datetime = $event,
                                  mode: "dateTime",
                                  onClose: close
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onClose"])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_UButton, {
                                  icon: "i-heroicons-calendar-days-20-solid",
                                  label: unref(format)(booking.datetime, "d MMM, yyy"),
                                  color: "gray",
                                  variant: "ghost"
                                }, null, 8, ["label"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          type: "submit",
                          color: "gray",
                          onClick: ($event) => isRef(createBookingModal) ? createBookingModal.value = false : createBookingModal = false
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
                  createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Create Booking ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: submit
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, { label: "Booking Name" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            placeholder: "Booking Name",
                            modelValue: booking.name,
                            "onUpdate:modelValue": ($event) => booking.name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: " Table Section" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            placeholder: "Front/ Back",
                            modelValue: booking.section,
                            "onUpdate:modelValue": ($event) => booking.section = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Number of Guests" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: booking.capacity,
                            "onUpdate:modelValue": ($event) => booking.capacity = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Date & Time" }, {
                        default: withCtx(() => [
                          createVNode(_component_UPopover, { popper: { placement: "bottom-start" } }, {
                            panel: withCtx(({ close }) => [
                              createVNode(_component_DatePicker, {
                                modelValue: booking.datetime,
                                "onUpdate:modelValue": ($event) => booking.datetime = $event,
                                mode: "dateTime",
                                onClose: close
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onClose"])
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-calendar-days-20-solid",
                                label: unref(format)(booking.datetime, "d MMM, yyy"),
                                color: "gray",
                                variant: "ghost"
                              }, null, 8, ["label"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        type: "submit",
                        color: "gray",
                        onClick: ($event) => isRef(createBookingModal) ? createBookingModal.value = false : createBookingModal = false
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/bookings/modals/Create.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$7;
const _sfc_main$6 = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: ["bookingitem"],
  setup(__props) {
    var _a;
    let isOpen = ref(false);
    ref(/* @__PURE__ */ new Date());
    const bookingStore = useBookingStore();
    const { editBooking } = bookingStore;
    const { bookings: bookings2 } = bookingStore;
    const props = __props;
    const booking = JSON.parse(JSON.stringify((_a = bookings2.find((stored_booking) => stored_booking.id === props.bookingitem.id)) != null ? _a : null));
    function edit() {
      editBooking(booking);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$4;
      const _component_UModal = __nuxt_component_2$4;
      const _component_UCard = __nuxt_component_2$3;
      const _component_UForm = __nuxt_component_3$1;
      const _component_UFormGroup = __nuxt_component_4;
      const _component_UInput = __nuxt_component_5;
      const _component_UPopover = __nuxt_component_6;
      const _component_DatePicker = _sfc_main$a;
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
                  _push3(`<h1 class="text-lg text-center font-extrabold"${_scopeId2}> Edit Booking </h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Edit Booking ")
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
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Booking Name" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                placeholder: "Booking Name",
                                modelValue: unref(booking).name,
                                "onUpdate:modelValue": ($event) => unref(booking).name = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  placeholder: "Booking Name",
                                  modelValue: unref(booking).name,
                                  "onUpdate:modelValue": ($event) => unref(booking).name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Table Section" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                placeholder: "Front/ Back",
                                modelValue: unref(booking).section,
                                "onUpdate:modelValue": ($event) => unref(booking).section = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  placeholder: "Front/ Back",
                                  modelValue: unref(booking).section,
                                  "onUpdate:modelValue": ($event) => unref(booking).section = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Number of Guests" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(booking).capacity,
                                "onUpdate:modelValue": ($event) => unref(booking).capacity = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(booking).capacity,
                                  "onUpdate:modelValue": ($event) => unref(booking).capacity = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, { label: "Date & Time" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UPopover, { popper: { placement: "bottom-start" } }, {
                                panel: withCtx(({ close }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DatePicker, {
                                      modelValue: unref(booking).datetime,
                                      "onUpdate:modelValue": ($event) => unref(booking).datetime = $event,
                                      mode: "dateTime",
                                      onClose: close
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_DatePicker, {
                                        modelValue: unref(booking).datetime,
                                        "onUpdate:modelValue": ($event) => unref(booking).datetime = $event,
                                        mode: "dateTime",
                                        onClose: close
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClose"])
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UButton, {
                                      icon: "i-heroicons-calendar-days-20-solid",
                                      label: unref(format)(unref(booking).datetime, "d MMM, yyy"),
                                      color: "gray",
                                      variant: "ghost"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UButton, {
                                        icon: "i-heroicons-calendar-days-20-solid",
                                        label: unref(format)(unref(booking).datetime, "d MMM, yyy"),
                                        color: "gray",
                                        variant: "ghost"
                                      }, null, 8, ["label"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UPopover, { popper: { placement: "bottom-start" } }, {
                                  panel: withCtx(({ close }) => [
                                    createVNode(_component_DatePicker, {
                                      modelValue: unref(booking).datetime,
                                      "onUpdate:modelValue": ($event) => unref(booking).datetime = $event,
                                      mode: "dateTime",
                                      onClose: close
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onClose"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_UButton, {
                                      icon: "i-heroicons-calendar-days-20-solid",
                                      label: unref(format)(unref(booking).datetime, "d MMM, yyy"),
                                      color: "gray",
                                      variant: "ghost"
                                    }, null, 8, ["label"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          color: "gray",
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
                          createVNode(_component_UFormGroup, { label: "Booking Name" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                placeholder: "Booking Name",
                                modelValue: unref(booking).name,
                                "onUpdate:modelValue": ($event) => unref(booking).name = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Table Section" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                placeholder: "Front/ Back",
                                modelValue: unref(booking).section,
                                "onUpdate:modelValue": ($event) => unref(booking).section = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Number of Guests" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(booking).capacity,
                                "onUpdate:modelValue": ($event) => unref(booking).capacity = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Date & Time" }, {
                            default: withCtx(() => [
                              createVNode(_component_UPopover, { popper: { placement: "bottom-start" } }, {
                                panel: withCtx(({ close }) => [
                                  createVNode(_component_DatePicker, {
                                    modelValue: unref(booking).datetime,
                                    "onUpdate:modelValue": ($event) => unref(booking).datetime = $event,
                                    mode: "dateTime",
                                    onClose: close
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onClose"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_UButton, {
                                    icon: "i-heroicons-calendar-days-20-solid",
                                    label: unref(format)(unref(booking).datetime, "d MMM, yyy"),
                                    color: "gray",
                                    variant: "ghost"
                                  }, null, 8, ["label"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UButton, {
                            type: "submit",
                            color: "gray",
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
                        createVNode(_component_UFormGroup, { label: "Booking Name" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              placeholder: "Booking Name",
                              modelValue: unref(booking).name,
                              "onUpdate:modelValue": ($event) => unref(booking).name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Table Section" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              placeholder: "Front/ Back",
                              modelValue: unref(booking).section,
                              "onUpdate:modelValue": ($event) => unref(booking).section = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Number of Guests" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(booking).capacity,
                              "onUpdate:modelValue": ($event) => unref(booking).capacity = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Date & Time" }, {
                          default: withCtx(() => [
                            createVNode(_component_UPopover, { popper: { placement: "bottom-start" } }, {
                              panel: withCtx(({ close }) => [
                                createVNode(_component_DatePicker, {
                                  modelValue: unref(booking).datetime,
                                  "onUpdate:modelValue": ($event) => unref(booking).datetime = $event,
                                  mode: "dateTime",
                                  onClose: close
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onClose"])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_UButton, {
                                  icon: "i-heroicons-calendar-days-20-solid",
                                  label: unref(format)(unref(booking).datetime, "d MMM, yyy"),
                                  color: "gray",
                                  variant: "ghost"
                                }, null, 8, ["label"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          type: "submit",
                          color: "gray",
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
                  createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Edit Booking ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: edit
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, { label: "Booking Name" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            placeholder: "Booking Name",
                            modelValue: unref(booking).name,
                            "onUpdate:modelValue": ($event) => unref(booking).name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Table Section" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            placeholder: "Front/ Back",
                            modelValue: unref(booking).section,
                            "onUpdate:modelValue": ($event) => unref(booking).section = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Number of Guests" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(booking).capacity,
                            "onUpdate:modelValue": ($event) => unref(booking).capacity = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Date & Time" }, {
                        default: withCtx(() => [
                          createVNode(_component_UPopover, { popper: { placement: "bottom-start" } }, {
                            panel: withCtx(({ close }) => [
                              createVNode(_component_DatePicker, {
                                modelValue: unref(booking).datetime,
                                "onUpdate:modelValue": ($event) => unref(booking).datetime = $event,
                                mode: "dateTime",
                                onClose: close
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onClose"])
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-calendar-days-20-solid",
                                label: unref(format)(unref(booking).datetime, "d MMM, yyy"),
                                color: "gray",
                                variant: "ghost"
                              }, null, 8, ["label"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        type: "submit",
                        color: "gray",
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/bookings/modals/Edit.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2$1 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "Delete",
  __ssrInlineRender: true,
  props: ["bookingitem"],
  setup(__props) {
    var _a;
    let isOpen = ref(false);
    const bookingStore = useBookingStore();
    const { deleteBooking } = bookingStore;
    const { bookings: bookings2 } = bookingStore;
    const props = __props;
    const booking = JSON.parse(JSON.stringify((_a = bookings2.find((stored_booking) => stored_booking.id === props.bookingitem.id)) != null ? _a : null));
    function remove() {
      deleteBooking(booking);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_1$4;
      const _component_UModal = __nuxt_component_2$4;
      const _component_UCard = __nuxt_component_2$3;
      const _component_UForm = __nuxt_component_3$1;
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
                  _push3(`<h1 class="text-lg text-center font-extrabold"${_scopeId2}> Delete Booking </h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Delete Booking ")
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
                        _push4(`<p${_scopeId3}> Do you want to delete this booking? The action cannot be undone </p>`);
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
                          createVNode("p", null, " Do you want to delete this booking? The action cannot be undone "),
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
                        createVNode("p", null, " Do you want to delete this booking? The action cannot be undone "),
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
                  createVNode("h1", { class: "text-lg text-center font-extrabold" }, " Delete Booking ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    class: "space-y-4",
                    onSubmit: remove
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, " Do you want to delete this booking? The action cannot be undone "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/bookings/modals/Delete.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "Main",
  __ssrInlineRender: true,
  props: {
    menu: Array,
    columns: String
  },
  setup(__props) {
    const bookingStore = useBookingStore();
    let { bookings: bookings2 } = bookingStore;
    function datesaregay(date_string) {
      var date = new Date(date_string);
      var result = "" + (date.getDay() + 1) + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + ", " + date.toLocaleTimeString();
      console.log(result);
      return result;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardBookingsModalsCreate = __nuxt_component_0$1;
      const _component_UTable = __nuxt_component_0$4;
      const _component_DashboardBookingsModalsEdit = __nuxt_component_2$1;
      const _component_DashboardBookingsModalsDelete = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_DashboardBookingsModalsCreate, null, null, _parent));
      _push(ssrRenderComponent(_component_UTable, {
        columns: __props.columns,
        rows: unref(bookings2),
        sort: { column: "title" }
      }, {
        "edit-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardBookingsModalsEdit, { bookingitem: row }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardBookingsModalsEdit, { bookingitem: row }, null, 8, ["bookingitem"])
            ];
          }
        }),
        "datetime-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(datesaregay(row.datetime))}`);
          } else {
            return [
              createTextVNode(toDisplayString(datesaregay(row.datetime)), 1)
            ];
          }
        }),
        "delete-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardBookingsModalsDelete, { bookingitem: row }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardBookingsModalsDelete, { bookingitem: row }, null, 8, ["bookingitem"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/utils/tables/book/Main.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    menu: String,
    columns: String
  },
  setup(__props) {
    const bookingStore = useBookingStore();
    let { bookings: bookings2 } = bookingStore;
    useAsyncData(async () => await bookingStore.getBookings(), {
      initialCache: false
    }, "$XhWJFG24jC");
    const columns = [
      {
        key: "id",
        label: "ID"
      },
      {
        key: "name",
        label: "Booking Name"
      },
      {
        key: "datetime",
        label: "Date & Time",
        sortable: true
      },
      {
        key: "section",
        label: "Table Section"
      },
      {
        key: "capacity",
        label: "Maximum Capacity",
        direction: "desc"
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
    const mobile_columns = [
      {
        key: "name",
        label: "Booking Name"
      },
      {
        key: "time",
        label: "Time",
        sortable: true
      },
      {
        key: "edit",
        label: "Edit"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_2$3;
      const _component_DashboardUtilsTablesBookMobile = __nuxt_component_1$2;
      const _component_DashboardUtilsTablesBookMain = __nuxt_component_2;
      _push(ssrRenderComponent(_component_UCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$viewport.isLessThan("tablet")) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardUtilsTablesBookMobile, {
                menu: unref(bookings2),
                columns: mobile_columns
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardUtilsTablesBookMain, {
                menu: unref(bookings2),
                columns
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              _ctx.$viewport.isLessThan("tablet") ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_component_DashboardUtilsTablesBookMobile, {
                  menu: unref(bookings2),
                  columns: mobile_columns
                }, null, 8, ["menu"])
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_component_DashboardUtilsTablesBookMain, {
                  menu: unref(bookings2),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/bookings/DataTable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardBookingsStatusCard = __nuxt_component_0$3;
      const _component_DashboardBookingsDataTable = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 sm:grid-cols-2 my-5">`);
      _push(ssrRenderComponent(_component_DashboardBookingsStatusCard, {
        class: "my-3 sm:my-0",
        value: "12",
        icon: "i-heroicons-book-open",
        type: "New Bookings",
        "data-aos": "fade-right"
      }, null, _parent));
      _push(ssrRenderComponent(_component_DashboardBookingsStatusCard, {
        value: "18",
        icon: "i-heroicons-circle-stack",
        type: "Remaining Capacity",
        "data-aos": "fade-left"
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 sm:grid-cols-2 my-5">`);
      _push(ssrRenderComponent(_component_DashboardBookingsStatusCard, {
        class: "my-3 sm:my-0",
        value: "19",
        icon: "i-heroicons-book-open",
        type: "Completed Bookings",
        "data-aos": "fade-right"
      }, null, _parent));
      _push(ssrRenderComponent(_component_DashboardBookingsStatusCard, {
        value: "31",
        icon: "i-heroicons-circle-stack",
        type: "Total Capacity",
        "data-aos": "fade-left"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_DashboardBookingsDataTable, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/bookings/Main.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_DashboardUtilsNavbarsSidebar = __nuxt_component_0$2;
  const _component_DashboardBookingsMain = __nuxt_component_1;
  const _component_DashboardUtilsBackgroundsBlurryRestaurant = __nuxt_component_2$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black grid grid-cols-12 w-full h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_DashboardUtilsNavbarsSidebar, { class: "visible sm:visible sm:z-20 sm:col-span-2 md:visible md:z-20 md:col-span-2" }, null, _parent));
  _push(ssrRenderComponent(_component_DashboardBookingsMain, { class: "z-20 col-span-10 w-full scale-90 overflow-y-scroll" }, null, _parent));
  _push(ssrRenderComponent(_component_DashboardUtilsBackgroundsBlurryRestaurant, { class: "z-10 bg-black w-full h-screen" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/views/Bookings.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DashboardViewsBookings = __nuxt_component_0;
  _push(ssrRenderComponent(_component_DashboardViewsBookings, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/bookings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bookings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { bookings as default };
//# sourceMappingURL=bookings-92f4766a.mjs.map
