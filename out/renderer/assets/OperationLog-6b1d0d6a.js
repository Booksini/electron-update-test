import { d as defineComponent, f as ref, r as resolveComponent, o as openBlock, b as createBlock, w as withCtx, g as createVNode } from "./index-9042ba15.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OperationLog",
  setup(__props) {
    const columns = ref(
      [{
        key: `Log_Text`,
        dataKey: `Log_Text`,
        title: `操作日志`,
        width: 150
      }]
    );
    const data = ref([{
      Log_Text: "feifh"
    }]);
    const tableRef = ref();
    return (_ctx, _cache) => {
      const _component_el_table_v2 = resolveComponent("el-table-v2");
      const _component_el_auto_resizer = resolveComponent("el-auto-resizer");
      return openBlock(), createBlock(_component_el_auto_resizer, null, {
        default: withCtx(({ height, width }) => [
          createVNode(_component_el_table_v2, {
            ref_key: "tableRef",
            ref: tableRef,
            columns: columns.value,
            data: data.value,
            width,
            height,
            fixed: ""
          }, null, 8, ["columns", "data", "width", "height"])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
