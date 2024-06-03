import { _ as __nuxt_component_0$1 } from './Sidebar-d3faee4d.mjs';
import { _ as __nuxt_component_0$2 } from './StatusCard-bef93be9.mjs';
import { _ as __nuxt_component_2$2 } from './Link-a292d72e.mjs';
import { _ as __nuxt_component_0$3 } from './Table-24ab41ed.mjs';
import { _ as __nuxt_component_1$1 } from './Button-be65dc1b.mjs';
import { useSSRContext, mergeProps, withCtx, openBlock, createBlock, createVNode, ref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as __nuxt_component_2$1 } from './BlurryRestaurant-8cee3ee8.mjs';
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
import 'vue-router';

const _sfc_main$3 = {
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    tasks: String,
    columns: String
  },
  setup(__props) {
    const status = ["Not Started", "In Progress", "Completed"];
    ref([status[0]]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTable = __nuxt_component_0$3;
      const _component_UButton = __nuxt_component_1$1;
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
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/inventory/DataTable.vue");
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
        key: "name",
        label: "Item Name"
      },
      {
        key: "quantity",
        label: "Quantity",
        sortable: true
      },
      {
        key: "cost",
        label: "Cost Per Item",
        sortable: true
      },
      {
        key: "inventory_value",
        label: "Inventory Value",
        sortable: true
      },
      {
        key: "reorder_days",
        label: "Days Per Re-order",
        sortable: true
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
      label: "Item Name"
    }, {
      key: "quantity",
      label: "Quantity"
    }, {
      key: "edit",
      label: "Edit"
    }];
    const inventory2 = [
      {
        id: 1,
        name: "Ribeye Steak",
        quantity: "20",
        cost: "$5.20",
        inventory_value: "$104",
        reorder_days: "6"
      },
      {
        id: 2,
        name: "Chicken Thighs",
        quantity: "256",
        cost: "$0.20",
        inventory_value: "$51.20",
        reorder_days: "3"
      },
      {
        id: 3,
        name: "1978 Cavelot Red Wine",
        quantity: "10",
        cost: "$21.00",
        inventory_value: "$210",
        reorder_days: "20"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardBookingsStatusCard = __nuxt_component_0$2;
      const _component_UCard = __nuxt_component_2$2;
      const _component_DashboardInventoryDataTable = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 sm:grid-cols-2 my-5">`);
      _push(ssrRenderComponent(_component_DashboardBookingsStatusCard, {
        class: "my-3 sm:my-0",
        value: "12",
        icon: "i-heroicons-book-open",
        type: "Most Used Item",
        "data-aos": "fade-right"
      }, null, _parent));
      _push(ssrRenderComponent(_component_DashboardBookingsStatusCard, {
        value: "18",
        icon: "i-heroicons-circle-stack",
        type: "Average Cost/ Item",
        "data-aos": "fade-left"
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 sm:grid-cols-2 my-5">`);
      _push(ssrRenderComponent(_component_DashboardBookingsStatusCard, {
        class: "my-3 sm:my-0",
        value: "19",
        icon: "i-heroicons-book-open",
        type: "Item Remaining Stock",
        "data-aos": "fade-right"
      }, null, _parent));
      _push(ssrRenderComponent(_component_DashboardBookingsStatusCard, {
        value: "31",
        icon: "i-heroicons-circle-stack",
        type: "Total Inventory Value",
        "data-aos": "fade-left"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$viewport.isLessThan("tablet")) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardInventoryDataTable, {
                modelValue: _ctx.selected,
                "onUpdate:modelValue": ($event) => _ctx.selected = $event,
                columns: mobile_columns,
                rows: inventory2,
                "data-aos": "flip-up",
                class: "mt-4"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DashboardInventoryDataTable, {
                modelValue: _ctx.selected,
                "onUpdate:modelValue": ($event) => _ctx.selected = $event,
                columns,
                rows: inventory2,
                "data-aos": "flip-up",
                class: "mt-4"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              _ctx.$viewport.isLessThan("tablet") ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_component_DashboardInventoryDataTable, {
                  modelValue: _ctx.selected,
                  "onUpdate:modelValue": ($event) => _ctx.selected = $event,
                  columns: mobile_columns,
                  rows: inventory2,
                  "data-aos": "flip-up",
                  class: "mt-4"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_component_DashboardInventoryDataTable, {
                  modelValue: _ctx.selected,
                  "onUpdate:modelValue": ($event) => _ctx.selected = $event,
                  columns,
                  rows: inventory2,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/inventory/Main.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_DashboardUtilsNavbarsSidebar = __nuxt_component_0$1;
  const _component_DashboardInventoryMain = __nuxt_component_1;
  const _component_DashboardUtilsBackgroundsBlurryRestaurant = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black grid grid-cols-12 w-full h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_DashboardUtilsNavbarsSidebar, { class: "visible sm:visible sm:z-20 sm:col-span-2 md:visible md:z-20 md:col-span-2" }, null, _parent));
  _push(ssrRenderComponent(_component_DashboardInventoryMain, { class: "z-20 col-span-10 w-full scale-90" }, null, _parent));
  _push(ssrRenderComponent(_component_DashboardUtilsBackgroundsBlurryRestaurant, { class: "z-10 bg-black w-full h-screen" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/views/Inventory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DashboardViewsInventory = __nuxt_component_0;
  _push(ssrRenderComponent(_component_DashboardViewsInventory, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/inventory.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const inventory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { inventory as default };
//# sourceMappingURL=inventory-b7915c09.mjs.map
