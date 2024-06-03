import { a as __nuxt_component_1$1, u as useUI, c as __nuxt_component_0$1, o as omit } from './Link-a292d72e.mjs';
import { defineComponent, toRef, computed, ref, watch, useSSRContext, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { m as mergeConfig, a as appConfig, _ as _export_sfc } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './LOGO-181a7eb6.mjs';

const avatar = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-full",
  text: "font-medium leading-none text-gray-900 dark:text-white truncate",
  placeholder: "font-medium leading-none text-gray-500 dark:text-gray-400 truncate",
  size: {
    "3xs": "h-4 w-4 text-[8px]",
    "2xs": "h-5 w-5 text-[10px]",
    xs: "h-6 w-6 text-xs",
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
    xl: "h-14 w-14 text-xl",
    "2xl": "h-16 w-16 text-2xl",
    "3xl": "h-20 w-20 text-3xl"
  },
  chip: {
    base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",
    background: "bg-{color}-500 dark:bg-{color}-400",
    position: {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    size: {
      "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
      "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
      xs: "h-1.5 min-w-[0.375rem] text-[6px] p-px",
      sm: "h-2 min-w-[0.5rem] text-[7px] p-0.5",
      md: "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
      lg: "h-3 min-w-[0.75rem] text-[10px] p-0.5",
      xl: "h-3.5 min-w-[0.875rem] text-[11px] p-1",
      "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
      "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
    }
  },
  icon: {
    base: "text-gray-500 dark:text-gray-400 flex-shrink-0",
    size: {
      "3xs": "h-2 w-2",
      "2xs": "h-2.5 w-2.5",
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-7 w-7",
      "2xl": "h-8 w-8",
      "3xl": "h-10 w-10"
    }
  },
  default: {
    size: "sm",
    icon: null,
    chipColor: null,
    chipPosition: "top-right"
  }
};
const divider = {
  wrapper: {
    base: "flex items-center align-center text-center w-full",
    horizontal: "flex-row",
    vertical: "flex-col"
  },
  container: {
    base: "font-medium text-gray-700 dark:text-gray-200 flex",
    horizontal: "mx-3 whitespace-nowrap",
    vertical: "my-2"
  },
  border: {
    base: "flex border-gray-200 dark:border-gray-800",
    horizontal: "w-full",
    vertical: "h-full",
    size: {
      horizontal: "border-t",
      vertical: "border-s"
    },
    type: {
      solid: "border-solid",
      dotted: "border-dotted",
      dashed: "border-dashed"
    }
  },
  icon: {
    base: "flex-shrink-0 w-5 h-5"
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs"
  },
  label: "text-sm"
};
const verticalNavigation = {
  wrapper: "relative",
  base: "group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",
  ring: "focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
  padding: "px-3 py-1.5",
  width: "w-full",
  rounded: "rounded-md",
  font: "font-medium",
  size: "text-sm",
  active: "text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",
  inactive: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",
  label: "truncate relative",
  icon: {
    base: "flex-shrink-0 w-4 h-4",
    active: "text-gray-700 dark:text-gray-200",
    inactive: "text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"
  },
  avatar: {
    base: "flex-shrink-0",
    size: "3xs"
  },
  badge: {
    base: "relative ms-auto inline-block py-0.5 px-2 text-xs rounded-md -me-1 -my-0.5",
    active: "bg-white dark:bg-gray-900",
    inactive: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white group-hover:bg-white dark:group-hover:bg-gray-900"
  },
  divider: {
    wrapper: {
      base: "p-2"
    }
  }
};
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const _sfc_main$3 = defineComponent({
  components: {
    UIcon: __nuxt_component_1$1
  },
  inheritAttrs: false,
  props: {
    src: {
      type: [String, Boolean],
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$2.default.icon
    },
    size: {
      type: String,
      default: () => config$2.default.size,
      validator(value) {
        return Object.keys(config$2.size).includes(value);
      }
    },
    chipColor: {
      type: String,
      default: () => config$2.default.chipColor,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    chipPosition: {
      type: String,
      default: () => config$2.default.chipPosition,
      validator(value) {
        return Object.keys(config$2.chip.position).includes(value);
      }
    },
    chipText: {
      type: [String, Number],
      default: null
    },
    imgClass: {
      type: String,
      default: ""
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
    const { ui, attrs } = useUI("avatar", toRef(props, "ui"), config$2);
    const url = computed(() => {
      if (typeof props.src === "boolean") {
        return null;
      }
      return props.src;
    });
    const placeholder = computed(() => {
      return (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2);
    });
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        (error.value || !url.value) && ui.value.background,
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.class);
    });
    const imgClass = computed(() => {
      return twMerge(twJoin(
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.imgClass);
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size]
      );
    });
    const chipClass = computed(() => {
      return twJoin(
        ui.value.chip.base,
        ui.value.chip.size[props.size],
        ui.value.chip.position[props.chipPosition],
        ui.value.chip.background.replaceAll("{color}", props.chipColor)
      );
    });
    const error = ref(false);
    watch(() => props.src, () => {
      if (error.value) {
        error.value = false;
      }
    });
    function onError() {
      error.value = true;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      imgClass,
      iconClass,
      chipClass,
      url,
      placeholder,
      error,
      onError
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$1;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}>`);
  if (_ctx.url && !_ctx.error) {
    _push(`<img${ssrRenderAttrs(mergeProps({
      class: _ctx.imgClass,
      alt: _ctx.alt,
      src: _ctx.url
    }, _ctx.attrs))}>`);
  } else if (_ctx.text) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.text)}">${ssrInterpolate(_ctx.text)}</span>`);
  } else if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else if (_ctx.placeholder) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.placeholder)}">${ssrInterpolate(_ctx.placeholder)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.chipColor) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">${ssrInterpolate(_ctx.chipText)}</span>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Avatar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.divider, divider);
const _sfc_main$2 = defineComponent({
  components: {
    UIcon: __nuxt_component_1$1,
    UAvatar: __nuxt_component_4
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    avatar: {
      type: Object,
      default: null
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    type: {
      type: String,
      default: "solid",
      validator: (value) => ["solid", "dotted", "dashed"].includes(value)
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
    const { ui, attrs } = useUI("divider", toRef(props, "ui"), config$1);
    const isHorizontal = computed(() => props.orientation === "horizontal");
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper.base,
        isHorizontal.value ? ui.value.wrapper.horizontal : ui.value.wrapper.vertical
      ), props.class);
    });
    const containerClass = computed(() => {
      return twJoin(
        ui.value.container.base,
        isHorizontal.value ? ui.value.container.horizontal : ui.value.container.vertical
      );
    });
    const borderClass = computed(() => {
      return twJoin(
        ui.value.border.base,
        isHorizontal.value ? ui.value.border.horizontal : ui.value.border.vertical,
        isHorizontal.value ? ui.value.border.size.horizontal : ui.value.border.size.vertical,
        ui.value.border.type[props.type]
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      containerClass,
      borderClass
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$1;
  const _component_UAvatar = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.borderClass)}"></div>`);
  if (_ctx.label || _ctx.icon || _ctx.avatar || _ctx.$slots.default) {
    _push(`<!--[--><div class="${ssrRenderClass(_ctx.containerClass)}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
      if (_ctx.label) {
        _push(`<span class="${ssrRenderClass(_ctx.ui.label)}">${ssrInterpolate(_ctx.label)}</span>`);
      } else if (_ctx.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.icon,
          class: _ctx.ui.icon.base
        }, null, _parent));
      } else if (_ctx.avatar) {
        _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
          class: _ctx.ui.avatar.base
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div><div class="${ssrRenderClass(_ctx.borderClass)}"></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Divider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.verticalNavigation, verticalNavigation);
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_1$1,
    UAvatar: __nuxt_component_4,
    ULink: __nuxt_component_0$1,
    UDivider: __nuxt_component_3
  },
  inheritAttrs: false,
  props: {
    links: {
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
  setup(props) {
    const { ui, attrs } = useUI("verticalNavigation", toRef(props, "ui"), config, toRef(props, "class"));
    const linkSections = computed(() => {
      return Array.isArray(props.links[0]) ? props.links : [props.links];
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      omit,
      linkSections,
      twMerge,
      twJoin
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$1;
  const _component_UAvatar = __nuxt_component_4;
  const _component_UIcon = __nuxt_component_1$1;
  const _component_UDivider = __nuxt_component_3;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.linkSections, (section, sectionIndex) => {
    _push(`<ul><!--[-->`);
    ssrRenderList(section, (link, index) => {
      _push(`<li>`);
      _push(ssrRenderComponent(_component_ULink, mergeProps(_ctx.omit(link, ["label", "labelClass", "icon", "iconClass", "avatar", "badge", "click"]), {
        class: [_ctx.ui.base, _ctx.ui.padding, _ctx.ui.width, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.font, _ctx.ui.size],
        "active-class": _ctx.ui.active,
        "inactive-class": _ctx.ui.inactive,
        onClick: link.click,
        onKeyup: ($event) => $event.target.blur()
      }), {
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "avatar", {
              link,
              isActive
            }, () => {
              if (link.avatar) {
                _push2(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ...link.avatar }, {
                  class: [_ctx.ui.avatar.base]
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "icon", {
              link,
              isActive
            }, () => {
              if (link.icon) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: link.icon,
                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.icon.base, isActive ? _ctx.ui.icon.active : _ctx.ui.icon.inactive), link.iconClass)
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {
              link,
              isActive
            }, () => {
              if (link.label) {
                _push2(`<span class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.label, link.labelClass))}"${_scopeId}>`);
                if (isActive) {
                  _push2(`<span class="sr-only"${_scopeId}> Current page: </span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(` ${ssrInterpolate(link.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "badge", {
              link,
              isActive
            }, () => {
              if (link.badge) {
                _push2(`<span class="${ssrRenderClass([_ctx.ui.badge.base, isActive ? _ctx.ui.badge.active : _ctx.ui.badge.inactive])}"${_scopeId}>${ssrInterpolate(link.badge)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "avatar", {
                link,
                isActive
              }, () => [
                link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 0 }, { size: _ctx.ui.avatar.size, ...link.avatar }, {
                  class: [_ctx.ui.avatar.base]
                }), null, 16, ["class"])) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "icon", {
                link,
                isActive
              }, () => [
                link.icon ? (openBlock(), createBlock(_component_UIcon, {
                  key: 0,
                  name: link.icon,
                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.icon.base, isActive ? _ctx.ui.icon.active : _ctx.ui.icon.inactive), link.iconClass)
                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "default", {
                link,
                isActive
              }, () => [
                link.label ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: _ctx.twMerge(_ctx.ui.label, link.labelClass)
                }, [
                  isActive ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "sr-only"
                  }, " Current page: ")) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(link.label), 1)
                ], 2)) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "badge", {
                link,
                isActive
              }, () => [
                link.badge ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: [_ctx.ui.badge.base, isActive ? _ctx.ui.badge.active : _ctx.ui.badge.inactive]
                }, toDisplayString(link.badge), 3)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</li>`);
    });
    _push(`<!--]-->`);
    if (sectionIndex < _ctx.linkSections.length - 1) {
      _push(ssrRenderComponent(_component_UDivider, {
        ui: _ctx.ui.divider
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</ul>`);
  });
  _push(`<!--]--></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/VerticalNavigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [{
      label: "Dashboard",
      to: "/dashboard",
      icon: "i-heroicons-adjustments-horizontal"
    }, {
      label: "Menus",
      to: "/dashboard/menu",
      icon: "i-heroicons-bars-4"
    }, {
      label: "Bookings",
      to: "/dashboard/bookings",
      icon: "i-heroicons-book-open"
    }, {
      label: "Inventory",
      to: "/dashboard/inventory",
      icon: "i-heroicons-archive-box"
    }, {
      label: "Tasks",
      to: "/dashboard/tasks",
      icon: "i-heroicons-rectangle-stack"
    }, {
      label: "Landing Page",
      to: "/",
      icon: "i-heroicons-building-office-2"
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_1$1;
      const _component_UVerticalNavigation = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 ml-3 w-40" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-bx-menu",
        class: "visible absolute text-red-100 text-opacity-30 left-[0.5rem] top-[0.5rem] w-[3rem] h-[3rem] md:invisible",
        dynamic: ""
      }, null, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_0)} class="invisible sm:visible ml-3">`);
      _push(ssrRenderComponent(_component_UVerticalNavigation, {
        links,
        class: "invisible sm:visible mt-8"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/utils/navbars/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _, __nuxt_component_4 as a, avatar as b };
//# sourceMappingURL=Sidebar-d3faee4d.mjs.map
