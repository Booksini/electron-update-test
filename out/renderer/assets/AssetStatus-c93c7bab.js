import { d as defineComponent, r as resolveComponent, o as openBlock, c as createElementBlock, F as Fragment, a as renderList, u as unref, b as createBlock, w as withCtx, e as createBaseVNode, t as toDisplayString, _ as _export_sfc } from "./index-9042ba15.js";
const _hoisted_1 = { class: "card" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AssetStatus",
  setup(__props) {
    let tableData = [[
      ["共计盈利"],
      ["USDT", 468],
      ["BTC", 468],
      ["ETH", 468]
    ], [
      ["当日盈利"],
      ["USDT", 468],
      ["BTC", 468],
      ["ETH", 468]
    ], [
      ["持仓费用"],
      ["USDT", 468],
      ["BTC", 468],
      ["ETH", 468]
    ]];
    return (_ctx, _cache) => {
      const _component_el_card = resolveComponent("el-card");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tableData), (item) => {
          return openBlock(), createBlock(_component_el_card, {
            shadow: "hover",
            key: item
          }, {
            default: withCtx(() => [
              createBaseVNode("table", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(item, (data) => {
                  return openBlock(), createElementBlock("tr", {
                    key: data[0]
                  }, [
                    createBaseVNode("td", null, toDisplayString(data[0]), 1),
                    createBaseVNode("td", null, toDisplayString(data[1]), 1)
                  ]);
                }), 128))
              ])
            ]),
            _: 2
          }, 1024);
        }), 128))
      ]);
    };
  }
});
const AssetStatus_vue_vue_type_style_index_0_lang = "";
const AssetStatus_vue_vue_type_style_index_1_scoped_c1567304_lang = "";
const AssetStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1567304"]]);
export {
  AssetStatus as default
};
