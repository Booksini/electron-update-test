import { h as reactive, f as ref, _ as _export_sfc, r as resolveComponent, o as openBlock, b as createBlock, w as withCtx, g as createVNode, c as createElementBlock, a as renderList, F as Fragment, i as createTextVNode } from "./index-9042ba15.js";
const _sfc_main = {
  props: {},
  setup(props) {
    console.log(props);
    const FormData = reactive({
      Bourse_Api: "",
      AccessKey: "dwad",
      SecreKey: "",
      Passphrase: ""
    });
    const exchangeName = ref("");
    const options = [
      {
        value: "Gate",
        label: "Gate"
      },
      {
        value: "欧意",
        label: "欧意"
      },
      {
        value: "币安",
        label: "币安"
      }
    ];
    const NewApiSetting = async () => {
      console.log(14564);
    };
    const link_api = async () => {
    };
    return {
      dialogVisible: true,
      FormData,
      NewApiSetting,
      exchangeName,
      options,
      link_api
    };
  }
};
const APISetting_vue_vue_type_style_index_0_scoped_e819a043_lang = "";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  const _component_el_link = resolveComponent("el-link");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_dialog = resolveComponent("el-dialog");
  return openBlock(), createBlock(_component_el_dialog, {
    class: "dia",
    modelValue: $setup.dialogVisible,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.dialogVisible = $event),
    width: "500px",
    title: "API设置",
    draggable: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_el_form, {
        ref: "form",
        model: $setup.FormData,
        "label-width": "auto",
        "label-position": "top",
        size: "default"
      }, {
        default: withCtx(() => [
          createVNode(_component_el_form_item, {
            "label-width": "auto",
            label: "交易所"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_select, {
                modelValue: $setup.exchangeName,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.exchangeName = $event),
                class: "m-2",
                placeholder: "请选择交易所"
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
              }, 8, ["modelValue"]),
              createVNode(_component_el_link, {
                type: "primary",
                onClick: $setup.NewApiSetting,
                class: "NewApi_btn",
                underline: false
              }, {
                default: withCtx(() => [
                  createTextVNode("初始化Api设置")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, {
            "label-width": "auto",
            label: "A密钥(AccessKey)"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                modelValue: $setup.FormData.AccessKey,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.FormData.AccessKey = $event)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, {
            "label-width": "auto",
            label: "S密钥(SecreKey)"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                modelValue: $setup.FormData.SecreKey,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.FormData.SecreKey = $event),
                type: "password",
                "show-password": ""
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, {
            "label-width": "auto",
            label: "Passphrase"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                modelValue: $setup.FormData.Passphrase,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.FormData.Passphrase = $event)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model"]),
      createVNode(_component_el_button, {
        class: "btn",
        onClick: $setup.link_api
      }, {
        default: withCtx(() => [
          createTextVNode("测试连接")
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const APISetting = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e819a043"]]);
export {
  APISetting as default
};
