import { _ as __nuxt_component_0 } from './navbar-c30f7c0b.mjs';
import { a as __nuxt_component_1$1 } from './Link-a292d72e.mjs';
import { u as useDinnerStore } from './dinner_menu-e954e986.mjs';
import { u as useAsyncData } from './asyncData-40c94537.mjs';
import { useSSRContext, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './LOGO-181a7eb6.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_2 } from './BlurryRestaurant-8cee3ee8.mjs';
import './nuxt-link-6c200899.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import 'node:fs';
import 'node:url';
import './Button-be65dc1b.mjs';
import '@vueuse/core';
import 'tailwind-merge';
import './Input-929542b6.mjs';
import './micro-task-b624b8d4.mjs';
import './usePopper-3eb33e86.mjs';
import './bookings-92ac629a.mjs';
import 'v-calendar';
import 'date-fns';
import './Icon-3036ade8.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-96aaa589.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const main_section = "Main";
const sides_section = "Sides";
const _sfc_main$1 = {
  __name: "Dinner",
  __ssrInlineRender: true,
  setup(__props) {
    const dinnerStore = useDinnerStore();
    const { dinner_meals } = dinnerStore;
    useAsyncData(async () => await dinnerStore.getDinner(), {
      initialCache: false
    }, "$RyCVrxX0PJ");
    console.log(dinner_meals);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingPageNavbar = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_1$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LandingPageNavbar, { class: "invisible sm:mt-4" }, null, _parent));
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-bx-menu",
        class: "visible absolute text-red-100 text-opacity-30 left-[0.5rem] top-[0.5rem] w-[3rem] h-[3rem] md:invisible",
        dynamic: ""
      }, null, _parent));
      _push(`<div class="logo-pic relative left-[0.5rem] top-[-1.25rem] sm:invisible" data-v-864950b5><img alt="logo627"${ssrRenderAttr("src", _imports_0)} class="navbar-logo1 relative left-[10.5rem] top-[0.5rem] scale-50" data-v-864950b5></div><div class="relative left-[17rem] text-4xl mb-7 mt-1 sm:left-[70rem] sm:mb-20 sm:text-6xl sm:mt-16" data-v-864950b5><span class="menu-title-break relative top-[-1rem] left-[-2rem] tracking-wider" data-v-864950b5>Dinner</span></div><div class="menu-body ml-7 sm:ml-28 mr-4" data-v-864950b5><div class="menu-summary text-sm mb-10 mr-4 mt-8" data-v-864950b5><span data-v-864950b5>Dinner is served Monday to Friday from 5pm until 9pm. Last orders by 8:45pm. </span></div><div data-v-864950b5><div class="grid grid-cols-1 sm:grid-cols-2" data-v-864950b5><div class="sm:col-start-1" data-v-864950b5><div class="mt-5 mb-3 text-md tracking-wider" data-v-864950b5><span data-v-864950b5>MAINS</span></div><!--[-->`);
      ssrRenderList(unref(dinner_meals), (meal) => {
        _push(`<div data-v-864950b5>`);
        if (meal.section === main_section) {
          _push(`<div data-v-864950b5><div class="flex justify-between mb-2 col-start-1" data-v-864950b5><div data-v-864950b5><span class="meal-name" data-v-864950b5>${ssrInterpolate(meal.name)} <p class="text-xs" data-v-864950b5>${ssrInterpolate(meal.description)}</p></span></div><div data-v-864950b5><span class="meal-price mr-7 sm:mr-24" data-v-864950b5>${ssrInterpolate(meal.price)}</span></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="mb-10 sm:col-start-2" data-v-864950b5><div class="mt-5 mb-3 text-md tracking-wider col-start-2" data-v-864950b5><span data-v-864950b5>SIDES</span></div><!--[-->`);
      ssrRenderList(unref(dinner_meals), (meal) => {
        _push(`<div data-v-864950b5>`);
        if (meal.section === sides_section) {
          _push(`<div data-v-864950b5><div class="flex justify-between mb-2" data-v-864950b5><div data-v-864950b5><span class="meal-name" data-v-864950b5>${ssrInterpolate(meal.name)} <p class="text-xs" data-v-864950b5>${ssrInterpolate(meal.description)}</p></span></div><div data-v-864950b5><span class="meal-price mr-7 sm:mr-24" data-v-864950b5>${ssrInterpolate(meal.price)}</span></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingPage/views/menus/Dinner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-864950b5"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingPageNavbar = __nuxt_component_0;
  const _component_LandingPageViewsMenusDinner = __nuxt_component_1;
  const _component_DashboardUtilsBackgroundsBlurryRestaurant = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_LandingPageNavbar, { class: "invisible sm:visible sm:mt-4 sm:z-20 sm:ml-29" }, null, _parent));
  _push(ssrRenderComponent(_component_LandingPageViewsMenusDinner, { class: "z-20" }, null, _parent));
  _push(ssrRenderComponent(_component_DashboardUtilsBackgroundsBlurryRestaurant, { class: "z-10 bg-black w-full h-screen" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/menus/dinner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dinner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { dinner as default };
//# sourceMappingURL=dinner-3700f07e.mjs.map
