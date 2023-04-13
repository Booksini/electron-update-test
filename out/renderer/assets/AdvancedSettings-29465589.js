import { f as ref, _ as _export_sfc, r as resolveComponent, o as openBlock, b as createBlock, w as withCtx, g as createVNode, e as createBaseVNode, i as createTextVNode, c as createElementBlock, a as renderList, F as Fragment, t as toDisplayString, p as pushScopeId, j as popScopeId } from "./index-9042ba15.js";
const _sfc_main = {
  //props: {   },
  setup(props) {
    console.log(props);
    const checked = ref(true);
    const value = ref("BTC");
    const options = ref([
      {
        value: "BTC",
        label: "BTC"
      },
      {
        value: "ETH",
        label: "ETH"
      },
      {
        value: "XRP",
        label: "XRP"
      },
      {
        value: "TRX",
        label: "TRX"
      },
      {
        value: "LTC",
        label: "LTC"
      },
      {
        value: "ADA",
        label: "ADA"
      }
    ]);
    const cumulative_amount = 0;
    const num = ref(100);
    const num1 = ref(100);
    return { dialogVisible: ref(true), checked, value, options, num, num1, cumulative_amount };
  }
};
const AdvancedSettings_vue_vue_type_style_index_0_scoped_24a3e8f9_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-24a3e8f9"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "diva" };
const _hoisted_2 = { class: "Text" };
const _hoisted_3 = { class: "diva" };
const _hoisted_4 = { class: "table" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, " 2.每次屯币后重新累积收益金额 ")
], -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", { class: "reminder" }, " 3.建议只屯主流币 ")
], -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_input_number = resolveComponent("el-input-number");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  const _component_el_dialog = resolveComponent("el-dialog");
  return openBlock(), createBlock(_component_el_dialog, {
    class: "dia",
    modelValue: $setup.dialogVisible,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.dialogVisible = $event),
    width: "610px",
    title: "高级设置",
    draggable: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_el_checkbox, {
        modelValue: $setup.checked,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.checked = $event),
        label: "自动屯币",
        size: "large"
      }, null, 8, ["modelValue"]),
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("span", _hoisted_2, [
          createTextVNode(" 累积收益达到 "),
          createVNode(_component_el_input_number, {
            "controls-position": "right",
            modelValue: $setup.num,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.num = $event),
            min: 0
          }, null, 8, ["modelValue"]),
          createTextVNode(" USDT，自动买入 "),
          createVNode(_component_el_input_number, {
            "controls-position": "right",
            modelValue: $setup.num1,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.num1 = $event),
            min: 0
          }, null, 8, ["modelValue"]),
          createTextVNode(" USDT的 "),
          createVNode(_component_el_select, {
            modelValue: $setup.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.value = $event),
            class: "m-2",
            placeholder: "Select"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.options, (item) => {
                return openBlock(), createBlock(_component_el_option, {
                  key: item.value,
                  label: item.label,
                  value: item.value
                }, null, 8, ["label", "value"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ]),
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("table", _hoisted_4, [
          createBaseVNode("tr", null, [
            createBaseVNode("td", null, " 1.当前累积USDT收益数额：" + toDisplayString($setup.cumulative_amount), 1)
          ]),
          _hoisted_5,
          _hoisted_6
        ])
      ])
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const AdvancedSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-24a3e8f9"]]);
export {
  AdvancedSettings as default
};
