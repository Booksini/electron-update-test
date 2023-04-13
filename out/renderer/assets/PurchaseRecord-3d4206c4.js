import { d as defineComponent, o as openBlock, b as createBlock, T as TableCom } from "./index-9042ba15.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PurchaseRecord",
  setup(__props) {
    const table_hand = [
      ["id", "序号"],
      ["currency_pair", "货币对"],
      ["buy_time", "买入时间"],
      ["quantity_bought", "买入数量"],
      ["average_price", "均价"],
      ["fee", "费用"],
      ["coin", "币"],
      ["single_order", "单序"],
      ["mode", "方式"]
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TableCom, {
        Tit: "买入记录",
        AddAll: "合计买入",
        TableHand: table_hand,
        IsNote: false
      });
    };
  }
});
export {
  _sfc_main as default
};
