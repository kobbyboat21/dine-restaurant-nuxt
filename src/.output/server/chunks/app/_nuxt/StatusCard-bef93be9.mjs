import { _ as __nuxt_component_2, a as __nuxt_component_1 } from './Link-a292d72e.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "StatusCard",
  __ssrInlineRender: true,
  props: {
    icon: String,
    value: Number,
    type: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_2;
      const _component_UIcon = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ class: "mx-3 text-center" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-bold text-2xl text-green-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: __props.icon,
              class: "bg-green-400"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(__props.value)}</p><p${_scopeId}>${ssrInterpolate(__props.type)}</p><p${_scopeId}> Today/ This Week </p>`);
          } else {
            return [
              createVNode("p", { class: "font-bold text-2xl text-green-400" }, [
                createVNode(_component_UIcon, {
                  name: __props.icon,
                  class: "bg-green-400"
                }, null, 8, ["name"]),
                createTextVNode(" " + toDisplayString(__props.value), 1)
              ]),
              createVNode("p", null, toDisplayString(__props.type), 1),
              createVNode("p", null, " Today/ This Week ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/bookings/StatusCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=StatusCard-bef93be9.mjs.map
