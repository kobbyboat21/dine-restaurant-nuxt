import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$2 } from './navbar-c30f7c0b.mjs';
import { a as __nuxt_component_1$1 } from './Link-a292d72e.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
import './nuxt-link-6c200899.mjs';
import './Button-be65dc1b.mjs';
import '@vueuse/core';
import 'tailwind-merge';
import './Input-929542b6.mjs';
import './micro-task-b624b8d4.mjs';
import './usePopper-3eb33e86.mjs';
import './bookings-92ac629a.mjs';
import 'v-calendar';
import 'date-fns';
import './LOGO-181a7eb6.mjs';
import './Icon-3036ade8.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-96aaa589.mjs';
import 'vue-router';

const _imports_0$1 = "" + publicAssetsURL("external/rectangle82885-vs6-500w.png");
const _sfc_main$8 = {
  methods: {
    gotoBook() {
      this.$router.push("/book");
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero-section-container" }, _attrs))} data-v-e3eaa71b><div class="hero-section-bgimage" data-v-e3eaa71b></div><div class="hero-section-hero" data-v-e3eaa71b><div class="hero-section-container1" data-v-e3eaa71b><div class="hero-section-heropic" data-v-e3eaa71b><img alt="Rectangle82885"${ssrRenderAttr("src", _imports_0$1)} class="hero-section-rectangle8 aos-item" data-aos="flip-left" data-aos-delay="0" data-aos-duration="1750" data-v-e3eaa71b></div>`);
  _push(ssrRenderComponent(_component_UIcon, {
    name: "i-bx-dish",
    class: "absolute left-[4rem] top-[40rem] w-[20rem] h-[20rem] md:left-[33rem] md:top-[26.75rem] md:w-[24rem] md:h-[40rem] text-red-100 text-opacity-30",
    "data-aos": "fade-down",
    "data-aos-duration": "1150",
    dynamic: ""
  }, null, _parent));
  _push(`<div class="hero-section-reservebutton" data-v-e3eaa71b><button type="button" class="hero-section-button button" data-v-e3eaa71b> Reserve a table </button></div><div class="hero-section-menubutton" data-aos="fade-in" data-aos-delay="300" data-aos-duration="1750" data-v-e3eaa71b></div><div class="hero-section-herobigtext" data-aos="slide-up" data-aos-duration="1150" data-v-e3eaa71b><div class="hero-section-bigtext1" data-v-e3eaa71b><span class="hero-section-text-word" data-v-e3eaa71b>Savor</span></div><div class="hero-section-bigtext2" data-v-e3eaa71b><span class="hero-section-text-word" data-v-e3eaa71b>Elevated</span></div><div class="hero-section-bigtext3" data-v-e3eaa71b><span class="hero-section-text-word" data-v-e3eaa71b>Elegance</span></div></div><div class="hero-section-heromessasge" data-aos="fade-up" data-aos-duration="2150" data-v-e3eaa71b><span class="hero-section-text2" data-v-e3eaa71b><div class="hero-section-desc1" data-v-e3eaa71b><span data-v-e3eaa71b>Embark on a gastronomic journey with us.</span></div><div class="hero-section-desc2" data-v-e3eaa71b><span data-v-e3eaa71b> Reserve your table now and let the allure </span></div><div class="hero-section-desc3" data-v-e3eaa71b><span data-v-e3eaa71b> of exquisite palettes and breathtaking </span></div><div class="hero-section-desc4" data-v-e3eaa71b><span data-v-e3eaa71b> views redefine your dining experience. </span></div><div class="hero-section-desc5 visible sm:invisible" data-v-e3eaa71b><span data-v-e3eaa71b> Indulge in a culinary journey unlike any </span></div><div class="hero-section-desc6 visible sm:invisible" data-v-e3eaa71b><span data-v-e3eaa71b> other as you savor meticulously crafted </span></div><div class="hero-section-desc7 visible sm:invisible" data-v-e3eaa71b><span data-v-e3eaa71b> dishes prepared. </span></div></span></div></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingPage/section/hero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-e3eaa71b"]]);
const _sfc_main$7 = {
  name: "RESTAURANTPICSECTION",
  props: {
    image_alt: {
      type: String,
      default: "image"
    },
    rootClassName: String,
    image_src: {
      type: String,
      default: "https://play.teleporthq.io/static/svg/default-img.svg"
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["restaurant-pic-section-container", $props.rootClassName]
  }, _attrs))} data-v-01be617c><div class="restaurant-pic-section-container1" data-v-01be617c></div><div class="restaurant-pic-section-restaurantslide" data-v-01be617c><div class="restaurant-pic-section-restaurantpic" data-v-01be617c></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingPage/section/restaurantpic.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-01be617c"]]);
const _sfc_main$6 = {
  name: "BREAKFASTSECTION",
  props: {
    rootClassName: String
  },
  methods: {
    gotoBreakfastMenu() {
      this.$router.push("/menus/breakfast");
    }
  },
  data() {
    return {
      rawt6v5: " ",
      rawvwfu: " ",
      rawchbu: " "
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["breakfast-section-container", $props.rootClassName]
  }, _attrs))} data-v-9ddf8eba><div class="breakfast-section-breakfastslide Content" data-v-9ddf8eba><div class="breakfast-section-container1" data-v-9ddf8eba><div class="breakfast-section-breakfastmessage" data-v-9ddf8eba><div class="breakfast-section-breakfastbutton" data-v-9ddf8eba><button type="button" class="breakfast-section-button button" data-v-9ddf8eba> Breakfast menu </button></div><div class="breakfast-section-breakfastmessage1" data-aos="fade-up" data-aos-duration="1250" data-v-9ddf8eba><span class="breakfast-section-text" data-v-9ddf8eba><span class="breakfast-section-text01" data-v-9ddf8eba> Indulge in a <span data-v-9ddf8eba></span></span><span class="breakfast-section-text02" data-v-9ddf8eba>symphony</span><span class="breakfast-section-text03" data-v-9ddf8eba> of flavors crafted with <span data-v-9ddf8eba></span></span><span class="breakfast-section-text04" data-v-9ddf8eba>precision</span><span class="breakfast-section-text05" data-v-9ddf8eba> and <span data-v-9ddf8eba>${$data.rawchbu}</span></span><span class="breakfast-section-text06" data-v-9ddf8eba>passion</span><span data-v-9ddf8eba> , where the first meal of the day is a celebration of sophistication. </span></span></div></div><div class="breakfast-section-breakfastpic" data-v-9ddf8eba><img alt="Rectangle182811" src="https://images.pexels.com/photos/3138576/pexels-photo-3138576.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" class="breakfast-section-rectangle18 aos-item" data-aos="flip-left" data-aos-duration="1750" data-v-9ddf8eba></div>`);
  _push(ssrRenderComponent(_component_UIcon, {
    name: "i-bx-sun",
    class: "absolute z-20 left-[40rem] top-[4.5rem] w-[7rem] h-[7rem] text-red-100 text-opacity-30",
    "data-aos": "zoom-in-up",
    "data-aos-duration": "1750",
    dynamic: ""
  }, null, _parent));
  _push(`<div class="breakfast-section-bigtext" data-aos="zoom-in-down" data-aos-duration="1150" data-v-9ddf8eba><div class="breakfast-section-bigtext1" data-v-9ddf8eba><span class="breakfast-section-text08" data-v-9ddf8eba>Morning</span></div><div class="breakfast-section-bigtext2" data-v-9ddf8eba><span class="breakfast-section-text08" data-v-9ddf8eba>Splendor</span></div><div class="breakfast-section-bigtext3" data-v-9ddf8eba><span class="breakfast-section-text08" data-v-9ddf8eba>at the Summit</span></div></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingPage/section/breakfast.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-9ddf8eba"]]);
const _sfc_main$5 = {
  name: "ALLDAYSECTION",
  props: {
    rootClassName: String
  },
  methods: {
    gotoAllDayMenu() {
      this.$router.push("/menus/lunch");
    }
  },
  data() {
    return {
      rawgdxl: " ",
      rawd2qa: " ",
      rawpngl: " "
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["all-day-section-container", $props.rootClassName]
  }, _attrs))} data-v-ee34b9f1><div class="all-day-section-lunchslide" data-v-ee34b9f1><div class="all-day-section-container1" data-v-ee34b9f1><div class="all-day-section-lunchbutton" data-v-ee34b9f1><span class="all-day-section-text" data-v-ee34b9f1><span data-v-ee34b9f1><span data-v-ee34b9f1>All-day menu</span><br data-v-ee34b9f1><span data-v-ee34b9f1></span></span></span><button type="button" class="all-day-section-button button border border-2 border-red-400" data-v-ee34b9f1> All day menu </button></div><div class="all-day-section-lunchmessage" data-aos="fade-up" data-aos-duration="1250" data-v-ee34b9f1><div class="all-day-section-lunchmessage1" data-v-ee34b9f1><span class="all-day-section-text05" data-v-ee34b9f1><span class="all-day-section-text06" data-v-ee34b9f1> Our <span data-v-ee34b9f1>${$data.rawgdxl}</span></span><span class="all-day-section-text07" data-v-ee34b9f1>all-day</span><span class="all-day-section-text08" data-v-ee34b9f1> menu is a testament to unwavering commitment, showcasing a <span data-v-ee34b9f1>${$data.rawd2qa}</span></span><span class="all-day-section-text09" data-v-ee34b9f1>fusion</span><span class="all-day-section-text10" data-v-ee34b9f1> of global <span data-v-ee34b9f1>${$data.rawpngl}</span></span><span class="all-day-section-text11" data-v-ee34b9f1>artisanal</span><span data-v-ee34b9f1>craftsmanship.</span></span></div></div><img alt="Rectangle82811" src="https://images.pexels.com/photos/6851931/pexels-photo-6851931.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" class="all-day-section-rectangle8 aos-item" data-aos="flip-right" data-aos-duration="1750" data-v-ee34b9f1><div class="all-day-section-lunchbigtext" data-aos="zoom-in-down" data-aos-duration="1150" data-v-ee34b9f1><div class="all-day-section-lunchbigtext1" data-v-ee34b9f1><div class="all-day-section-lunchbigtext_timeless" data-v-ee34b9f1><span class="all-day-section-text13" data-v-ee34b9f1> Timeless </span></div><div class="all-day-section-lunchbigtext_indulgence" data-v-ee34b9f1><span class="all-day-section-text13" data-v-ee34b9f1> Indulgence </span></div><div class="all-day-section-lunchbigtext_alldaylong" data-v-ee34b9f1><span class="all-day-section-text13" data-v-ee34b9f1> All day long </span></div></div>`);
  _push(ssrRenderComponent(_component_UIcon, {
    name: "i-bx-time-five",
    class: "absolute z-20 left-[35rem] top-[7.5rem] w-[7rem] h-[7rem] text-red-100 text-opacity-30",
    "data-aos": "zoom-in-down",
    "data-aos-duration": "1750",
    dynamic: ""
  }, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingPage/section/allday.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-ee34b9f1"]]);
const _imports_0 = "" + publicAssetsURL("external/pexels-tu\u011Fba-kobal-y\u0131lmaz-14935798_out.jpg");
const _imports_1 = "" + publicAssetsURL("external/reservebutton5957-rbig.svg");
const _sfc_main$4 = {
  name: "DINNERSECTION",
  props: {
    rootClassName: String
  },
  methods: {
    gotoDinnerMenu() {
      this.$router.push("/menus/dinner");
    }
  },
  data() {
    return {
      raw43n4: " "
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["dinner-section-container", $props.rootClassName]
  }, _attrs))} data-v-d2c43b8e><div class="dinner-section-dinnerslide" data-v-d2c43b8e><div class="dinner-section-container1" data-v-d2c43b8e><div class="dinner-section-dinnerpic" data-v-d2c43b8e><img alt="Rectangle82895"${ssrRenderAttr("src", _imports_0)} class="dinner-section-rectangle8" data-aos="flip-left" data-aos-duration="1750" data-v-d2c43b8e></div><div class="dinner-section-dinnerbutton" data-v-d2c43b8e><div class="dinner-section-dinnercalltoaction" data-v-d2c43b8e><div class="dinner-section-reservebutton" data-v-d2c43b8e><img alt="RESERVEBUTTON5957"${ssrRenderAttr("src", _imports_1)} class="dinner-section-reservebutton1" data-v-d2c43b8e><span class="dinner-section-text" data-v-d2c43b8e>Dinner menu</span></div><div class="dinner-section-button_layout" data-v-d2c43b8e><button type="button" class="dinner-section-button button" data-v-d2c43b8e> Dinner menu </button></div></div></div><div class="dinner-section-dinnermessage" data-aos="fade-up" data-aos-duration="1250" data-v-d2c43b8e><span class="dinner-section-text1" data-v-d2c43b8e><span data-v-d2c43b8e> From succulent cuts of aged steak to the delicate dance of flavors in our signature seafood creations, every bite is a celebration of indulgence. <span data-v-d2c43b8e>${$data.raw43n4}</span></span></span></div><div class="dinner-section-dinnerbigtext" data-aos="zoom-in-down" data-aos-duration="1150" data-v-d2c43b8e><div class="dinner-section-dinnerbigtext_evening" data-v-d2c43b8e><span class="dinner-section-text3" data-v-d2c43b8e> Evening </span></div><div class="dinner-section-dinnerbigtext_elegance" data-v-d2c43b8e><span class="dinner-section-text3" data-v-d2c43b8e> Elegance </span></div><div class="dinner-section-dinnerbigtext_unveiled" data-v-d2c43b8e><span class="dinner-section-text3" data-v-d2c43b8e> Unveiled </span></div></div>`);
  _push(ssrRenderComponent(_component_UIcon, {
    name: "i-bx-wine",
    class: "absolute z-20 left-[52rem] top-[11rem] w-[7rem] h-[7rem] text-red-100 text-opacity-30",
    "data-aos": "zoom-in-down",
    "data-aos-duration": "1750",
    dynamic: ""
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingPage/section/dinner.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-d2c43b8e"]]);
const _sfc_main$3 = {
  data() {
    return {
      rawnyvq: " ",
      raw7aoe: " "
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.$viewport.isLessThan("tablet")) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-section-cards" }, _attrs))} data-v-93035b3b><div class="contact-section-findus" data-v-93035b3b><span class="contact-section-text" data-v-93035b3b><span data-v-93035b3b><span data-v-93035b3b>123 Cullinary Street</span><br data-v-93035b3b><span data-v-93035b3b>London</span><br data-v-93035b3b><span data-v-93035b3b>E21 3GH</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b> Available on <span data-v-93035b3b>${$data.rawnyvq}</span></span><br data-v-93035b3b><span data-v-93035b3b>Uber Eats and Deliveroo</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b>Email Us</span><br data-v-93035b3b><span data-v-93035b3b> dine@dine.com <span data-v-93035b3b>${$data.raw7aoe}</span></span></span></span><span class="contact-section-text19" data-v-93035b3b><span data-v-93035b3b>Find Us</span></span></div><div class="contact-section-openingtimes" data-v-93035b3b><span class="contact-section-text21" data-v-93035b3b><span data-v-93035b3b><span data-v-93035b3b>Monday - Thursday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 11pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b>Friday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 10pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b>Saturday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 8pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b>Sunday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 6pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b></span></span></span><span class="contact-section-text48" data-v-93035b3b><span data-v-93035b3b>Opening Times</span></span></div><div class="contact-section-kitchentimes" data-v-93035b3b><span class="contact-section-text50" data-v-93035b3b><span data-v-93035b3b>Kitchen Times</span></span><span class="contact-section-text52" data-v-93035b3b><span data-v-93035b3b><span data-v-93035b3b>Monday - Thursday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 9pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b>Friday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 8pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b>Saturday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 8pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b>Sunday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 6pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b></span></span></span></div></div>`);
  } else {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-section-cards" }, _attrs))} data-v-93035b3b><div class="contact-section-findus" data-aos="fade-left" data-aos-duration="1750" data-v-93035b3b><span class="contact-section-text" data-v-93035b3b><span data-v-93035b3b><span data-v-93035b3b>123 Cullinary Street</span><br data-v-93035b3b><span data-v-93035b3b>London</span><br data-v-93035b3b><span data-v-93035b3b>E21 3GH</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b> Available on <span data-v-93035b3b>${$data.rawnyvq}</span></span><br data-v-93035b3b><span data-v-93035b3b>Uber Eats and Deliveroo</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b>Email Us</span><br data-v-93035b3b><span data-v-93035b3b> dine@dine.com <span data-v-93035b3b>${$data.raw7aoe}</span></span></span></span><span class="contact-section-text19" data-v-93035b3b><span data-v-93035b3b>Find Us</span></span></div><div class="contact-section-openingtimes" data-aos="fade-down" data-aos-duration="1750" data-v-93035b3b><span class="contact-section-text21" data-v-93035b3b><span data-v-93035b3b><span data-v-93035b3b>Monday - Thursday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 11pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b>Friday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 10pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b>Saturday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 8pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b>Sunday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 6pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b></span></span></span><span class="contact-section-text48" data-v-93035b3b><span data-v-93035b3b>Opening Times</span></span></div><div class="contact-section-kitchentimes" data-aos="fade-right" data-aos-duration="1750" data-v-93035b3b><span class="contact-section-text50" data-v-93035b3b><span data-v-93035b3b>Kitchen Times</span></span><span class="contact-section-text52" data-v-93035b3b><span data-v-93035b3b><span data-v-93035b3b>Monday - Thursday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 9pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b>Friday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 8pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b>Saturday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 8pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b>Sunday</span><br data-v-93035b3b><span data-v-93035b3b>12pm - 6pm</span><br data-v-93035b3b><span data-v-93035b3b></span><br data-v-93035b3b><span data-v-93035b3b></span></span></span></div></div>`);
  }
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingPage/ContactCards.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-93035b3b"]]);
const _sfc_main$2 = {
  name: "CONTACTSECTION",
  props: {
    rootClassName: String
  },
  data() {
    return {
      rawnyvq: " ",
      raw7aoe: " "
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LandingPageContactCards = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["contact-section-container", $props.rootClassName]
  }, _attrs))} data-v-d700727c><div class="contact-section-bgimage" data-v-d700727c></div><div class="contact-section-contactslide" data-v-d700727c>`);
  _push(ssrRenderComponent(_component_LandingPageContactCards, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingPage/section/contact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-d700727c"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_LandingPageNavbar = __nuxt_component_0$2;
  const _component_LandingPageSectionHero = __nuxt_component_1;
  const _component_LandingPageSectionRestaurantpic = __nuxt_component_2;
  const _component_LandingPageSectionBreakfast = __nuxt_component_3;
  const _component_UIcon = __nuxt_component_1$1;
  const _component_LandingPageSectionAllday = __nuxt_component_5;
  const _component_LandingPageSectionDinner = __nuxt_component_6;
  const _component_LandingPageSectionContact = __nuxt_component_7;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page-view bg-white overflow-x-hidden" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LandingPageNavbar, { class: "mt-2" }, null, _parent));
  _push(ssrRenderComponent(_component_LandingPageSectionHero, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingPageSectionRestaurantpic, null, null, _parent));
  _push(`<div class="overflow-hidden">`);
  _push(ssrRenderComponent(_component_LandingPageSectionBreakfast, null, null, _parent));
  _push(ssrRenderComponent(_component_UIcon, {
    name: "i-bx-baguette",
    class: "absolute z-20 left-[3.5rem] top-[153rem] w-[15rem] h-[15rem] text-opacity-10 md:absolute md:z-20 md:left-[74rem] md:top-[157.75rem] md:w-[30rem] md:h-[30rem] text-red-100 md:text-opacity-30 overflow-hidden",
    "data-aos": "flip-right",
    "data-aos-duration": "1750",
    dynamic: ""
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_LandingPageSectionAllday, null, null, _parent));
  _push(ssrRenderComponent(_component_UIcon, {
    name: "i-bx-bowl-hot",
    class: "absolute z-20 left-[6.5rem] top-[236.5rem] w-[15rem] h-[15rem] text-opacity-10 md:absolute md:z-20 md:left-[-13rem] md:top-[225.2rem] md:w-[30rem] md:h-[30rem] text-red-100 md:text-opacity-30 overflow-hidden",
    "data-aos": "flip-left",
    "data-aos-duration": "1750",
    dynamic: ""
  }, null, _parent));
  _push(`<div class="overflow-hidden">`);
  _push(ssrRenderComponent(_component_LandingPageSectionDinner, null, null, _parent));
  _push(ssrRenderComponent(_component_UIcon, {
    name: "i-bx-bowl-rice",
    class: "absolute z-20 left-[15.5rem] top-[332rem] w-[15rem] h-[15rem] text-opacity-20 md:absolute md:z-20 md:left-[76rem] md:top-[285rem] md:w-[30rem] md:h-[30rem] text-red-100 md:text-opacity-30 overflow-hidden",
    "data-aos": "flip-right",
    "data-aos-duration": "1750",
    dynamic: ""
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_LandingPageSectionContact, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingPage/View.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingPageView = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_LandingPageView, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-468954db.mjs.map
