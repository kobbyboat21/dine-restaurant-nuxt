import { _ as __nuxt_component_0$1 } from './nuxt-link-6c200899.mjs';
import { _ as __nuxt_component_1 } from './Button-be65dc1b.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3$1, b as __nuxt_component_4, c as __nuxt_component_5 } from './Input-929542b6.mjs';
import { _ as __nuxt_component_2$1 } from './Link-a292d72e.mjs';
import { u as useBookingStore, _ as __nuxt_component_6, a as _sfc_main$2 } from './bookings-92ac629a.mjs';
import { ref, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext, isRef, unref, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { format } from 'date-fns';
import { _ as _imports_0 } from './LOGO-181a7eb6.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main$1 = {
  __name: "BookingModal",
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
      const _component_UButton = __nuxt_component_1;
      const _component_UModal = __nuxt_component_2;
      const _component_UCard = __nuxt_component_2$1;
      const _component_UForm = __nuxt_component_3$1;
      const _component_UFormGroup = __nuxt_component_4;
      const _component_UInput = __nuxt_component_5;
      const _component_UPopover = __nuxt_component_6;
      const _component_DatePicker = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (_ctx.$viewport.isLessThan("tablet")) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UButton, {
          onClick: ($event) => isRef(createBookingModal) ? createBookingModal.value = true : createBookingModal = true,
          icon: "i-heroicons-calendar",
          color: "brown",
          variant: "plain",
          size: "xl",
          label: "BOOK",
          class: "text-xl text-stone-700"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UButton, {
          onClick: ($event) => isRef(createBookingModal) ? createBookingModal.value = true : createBookingModal = true,
          icon: "i-heroicons-calendar",
          color: "brown",
          variant: "plain",
          size: "xl",
          label: "BOOK",
          class: "text-3xl text-stone-700"
        }, null, _parent));
        _push(`</div>`);
      }
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
                                panel: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DatePicker, {
                                      modelValue: booking.datetime,
                                      "onUpdate:modelValue": ($event) => booking.datetime = $event,
                                      mode: "dateTime",
                                      onClose: _ctx.close
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_DatePicker, {
                                        modelValue: booking.datetime,
                                        "onUpdate:modelValue": ($event) => booking.datetime = $event,
                                        mode: "dateTime",
                                        onClose: _ctx.close
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
                                  panel: withCtx(() => [
                                    createVNode(_component_DatePicker, {
                                      modelValue: booking.datetime,
                                      "onUpdate:modelValue": ($event) => booking.datetime = $event,
                                      mode: "dateTime",
                                      onClose: _ctx.close
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
                                panel: withCtx(() => [
                                  createVNode(_component_DatePicker, {
                                    modelValue: booking.datetime,
                                    "onUpdate:modelValue": ($event) => booking.datetime = $event,
                                    mode: "dateTime",
                                    onClose: _ctx.close
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
                              panel: withCtx(() => [
                                createVNode(_component_DatePicker, {
                                  modelValue: booking.datetime,
                                  "onUpdate:modelValue": ($event) => booking.datetime = $event,
                                  mode: "dateTime",
                                  onClose: _ctx.close
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
                            panel: withCtx(() => [
                              createVNode(_component_DatePicker, {
                                modelValue: booking.datetime,
                                "onUpdate:modelValue": ($event) => booking.datetime = $event,
                                mode: "dateTime",
                                onClose: _ctx.close
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BookingModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const _sfc_main = {
  data() {
    return {
      limitPosition: 500,
      scrolled: false,
      lastPosition: 0
    };
  },
  methods: {
    handleScroll() {
    }
  },
  created() {
  },
  destroyed() {
  }
};
ref(false);
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_UButton = __nuxt_component_1;
  const _component_UModal = __nuxt_component_2;
  const _component_Placeholder = resolveComponent("Placeholder");
  const _component_BookingModal = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar-container" }, _attrs))} data-v-930d715c><header class="${ssrRenderClass([{ "sticky": $data.scrolled }, "headroom navbar-navbar"])}" data-v-930d715c><div class="navbar-logo" data-v-930d715c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: { path: "/" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img alt="logo627"${ssrRenderAttr("src", _imports_0)} class="navbar-logo1" data-v-930d715c${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            alt: "logo627",
            src: _imports_0,
            class: "navbar-logo1"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  if (_ctx.$viewport.isLessThan("tablet")) {
    _push(`<div class="navbar-menunavlink" data-v-930d715c>`);
    _push(ssrRenderComponent(_component_UButton, {
      onClick: ($event) => _ctx.openMenuModal = true,
      icon: "i-heroicons-book-open",
      color: "brown",
      variant: "plain",
      size: "xl",
      label: "MENU",
      class: "text-xl text-stone-700",
      trailing: ""
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<div class="navbar-menunavlink" data-v-930d715c>`);
    _push(ssrRenderComponent(_component_UButton, {
      onClick: ($event) => _ctx.openMenuModal = true,
      icon: "i-heroicons-book-open",
      color: "brown",
      variant: "plain",
      size: "xl",
      label: "MENU",
      class: "text-3xl text-stone-700",
      trailing: ""
    }, null, _parent));
    _push(`</div>`);
  }
  _push(ssrRenderComponent(_component_UModal, {
    modelValue: _ctx.openMenuModal,
    "onUpdate:modelValue": ($event) => _ctx.openMenuModal = $event
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="p-4" data-v-930d715c${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Placeholder, { class: "h-48" }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "p-4" }, [
            createVNode(_component_Placeholder, { class: "h-48" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="navbar-booknavlink" data-v-930d715c>`);
  _push(ssrRenderComponent(_component_BookingModal, null, null, _parent));
  _push(`</div></header></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingPage/navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-930d715c"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=navbar-c30f7c0b.mjs.map
