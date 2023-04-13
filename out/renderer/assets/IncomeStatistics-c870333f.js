import { d as defineComponent, o as openBlock, b as createBlock, T as TableCom } from "./index-9042ba15.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IncomeStatistics",
  setup(__props) {
    const table_hand = [
      ["id", "序号"],
      ["currency_pair", "货币对"],
      ["sell_time", "卖出时间"],
      ["quantity_sold", "卖出数量"],
      ["average_price", "均价"],
      ["transaction_amount", "成交金额"],
      ["income", "收益"],
      ["coin", "币"],
      ["percentage", "%"],
      ["single_order", "单序"],
      ["mode", "方式"]
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TableCom, {
        Tit: "收益统计",
        AddAll: "合计交易",
        TableHand: table_hand,
        IsNote: true
      });
    };
  }
});
export {
  _sfc_main as default
};
