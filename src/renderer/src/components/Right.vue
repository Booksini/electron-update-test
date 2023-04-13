<!-- 右边栏 -->

<script lang="ts" setup>

import { ref, reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

import OneSetting from "./Main/OneSetting.vue"
import TableCom from "../modules/Table.vue"





// 添加货币选择框数据
const options1 = [
  {
    value: 'USDT',
    label: 'USDT',
  },
  {
    value: 'BTC',
    label: 'BTC',
  },
  {
    value: 'ETH',
    label: 'ETH',
  }
]

// 主题表表头初始化
const tableHeader = [

  ["currency_pair", "货币对", "true"],
  ["enable_monitoring", "开启监控", "true"],
  ['sell_but_not_buy', "只卖不买", "true"],
  ["stoppage", "止盈停止", "true"],
  ["running_status", "运行状态", "true"],
  ["transaction_money", "交易货币", "true"],
  ["currency_of_price", "计价货币", "true"],
  ["market_depth", "市场深度", "false"],
  ["number_of_positions", "持仓数据", "false"],
  ["overall_revenue_ratio", "整体收益比", "false"],
  ["end_data", "尾单数据", "false"],
  ["end_earnings_ratio", "尾单收益比", "false"],
  ["number_of_trades", "交易单数", "false"],
  ["spacing/last_positions", "间隔/最后建仓价", "false"],
  ["set_mode", "设置模式", "false"],
  ["full_stop", "整体止盈", "false"],
  ["tracking_positions", "追踪建仓", "false"],
  ["grid_filling", "网格止盈", "false"],
  ["revenue_statistics", "收益统计", "false"],

];

// 添加货币弹窗是否显示
var IsdialogOpen = ref(false)

// 主体表表头,定义一个新的数组,这样操作表头就不会影响原本的数组啦!不会造成删除一个字段后就没啦的后果
var newTableHeader = ref([...tableHeader])

// 写入自定义列表显示内容
const checkList = ref(tableHeader.map((x) => x[1]))


// 主题表右击事件菜单显示条件
const visible = ref(false)


const triggerRef = ref({
  getBoundingClientRect() {
    return position.value
  },
})

const position = ref({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
})



//自定义列表change事件,根据返回的已勾选列表筛选表头
const handleCheckAllChange = (res) => {


  newTableHeader.value = tableHeader.filter((data) =>

    res.indexOf(data[1]) != -1

  );

}


// 开关点击事件
const changescoped = (val, index, Isopen, data) => {


  console.log(val, index, Isopen, data)
}


var currency_pair = ""

var price = ""

// 主体表每行的右击事件
const click_row = (row, column, e) => {


  currency_pair = row.currency_pair

  price = row.market_depth

  // 给自定义的tooltip做定位,定位到鼠标位置
  position.value = DOMRect.fromRect({
    width: 0,
    height: 0,
    x: e.clientX,
    y: e.clientY,
  })

  // 显示tooltip
  visible.value = true

  console.log(row, column)


}

const choose = ref(true)

// 从排行榜获选择点击事件
const NewApiSetting = () => {


  choose.value = false


}

// 添加货币对表单内容
const FormData = reactive({

  Transaction_currency: "",

  Denomination_currency: ref("USDT")

})

//添加货币对







// 主体表内容
var tableData = ref([
  {
    id: '2016-05-03',
    currency_pair: 'Tom',
    enable_monitoring: "true",
    sell_but_not_buy: "hdwad",
    market_depth: "dhywaiud",

  },

])


//选中便自动展开子项菜单(无需点击)
const props = {
  expandTrigger: 'hover' as const,
}


const Go_oneset = ref(false)
const Go_Table = ref(false)

//根据菜单更改事件返回的事件集合触发相应点击事件
const Clicks = (fn) => {

  //选择最后一项，然后进入相应事件
  fn.pop()()


}

// 交易明细表头
const table_hand = [

  ["currency_pair", "货币对"],

  ["buy_time", "交易时间"],

  ["buy_num", "交易数量"],

  ["average_price", "均价"],

  ["fee", "费用"],

  ["selling_gain", "卖出收益"],

  ["single_order", "单序"],

  ["mode", "方式"],


]


const handleSelectionChange = (val) => {

  console.log(val);

}

// 右击事件菜单栏内容和相应事件
const options = ref([
  {
    value: () => {

      visible.value = false

      Go_oneset.value = false

      setTimeout(() => {
        Go_oneset.value = true
      }, 50);


    },
    label: '策略设置',
  },
  {
    value: () => {

      visible.value = false

      trusteeship.value = true

    },
    label: '手动补单托管',
  },
  {
    value: () => {

      visible.value = false

      ElMessageBox.confirm(

        '<strong>数量：<br>均价：  <br>已做单数:  <br>费用：  <br>是否执行[抛售尾单]操作？</strong>',

        '[抛售尾单]',
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning',
          dangerouslyUseHTMLString: true,
        }
      ).then(() => {
        ElMessage({
          type: 'success',
          message: '操作成功',
        })
      }).catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消该操作',
        })
      })

    },
    label: '立即抛售尾单[减单]',
  },
  {
    value: () => {

      visible.value = false


    },
    label: '立即停止策略[忘记订单]',
  },
  {
    value: () => {

      visible.value = false


    },
    label: '立即停止策略[批量忘记订单]',
  },
  {
    value: () => {

      visible.value = false


    },
    label: '立即停止策略[清仓卖出]',
  },
  {
    value: () => {

      visible.value = false


    },
    label: '批量清仓卖出',
  },
  {
    value: "",
    label: '货币对批量操作[开启监控]',
    children: [

      {

        value: () => {

          visible.value = false


        },
        label: 'USDT货币对[开启监控]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: 'BTC货币对[开启监控]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: 'ETH货币对[开启监控]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: 'USDT货币对[停止监控]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: 'BTC货币对[开启监控]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: 'ETH货币对[开启监控]',

      },


    ]
  },
  {
    value: "",
    label: '货币对批量操作[只卖不买]',

    children: [

      {

        value: () => {

          visible.value = false


        },
        label: '开启USDT货币对[只卖不买]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: '开启BTC货币对[只卖不买]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: '开启ETH货币对[只卖不买]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: '关闭USDT货币对[只卖不买]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: '关闭BTC货币对[只卖不买]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: '关闭ETH货币对[只卖不买]',

      },


    ]

  },
  {
    value: "",
    label: '货币对批量操作[止盈停止]',


    children: [

      {

        value: () => {

          visible.value = false


        },
        label: '开启USDT货币对[止盈停止]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: '开启BTC货币对[止盈停止]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: '开启ETH货币对[止盈停止]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: '关闭USDT货币对[止盈停止]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: '关闭BTC货币对[止盈停止]',

      },
      {

        value: () => {

          visible.value = false


        },
        label: '关闭ETH货币对[止盈停止]',

      },


    ]
  },
  {
    value: () => {



      visible.value = false


      Go_Table.value = false

      setTimeout(() => {
        Go_Table.value = true
      }, 50);


    },
    label: '交易明细',
  },

])


const trusteeship = ref(false)



const Top_head = [

  ["currency", "币种"],
  ["fullname", "全名"],
  ["dollar_price", "美元价格"],
  ["Yuan_price", "人民币价格"],
  ["floating_market_value", "流通市值"],
  ["quantity_in_circulation", "流通数量"],
  ["24-hour_turnover", "24小时成交额"],
  ["24_hours_to_change_hands", "24小时换手"],
  ["24-hour_increase", "24小时涨幅"],

]



// 排行榜表数据
const tableData2 = [

]

</script>
<template>
  <div class="Right">

    <one-setting :Tit="currency_pair" :HaveData="true" v-if="Go_oneset"></one-setting>
    <table-com :Tit="`交易明细[${currency_pair}]`" AddAll="合计买入" :TableHand="table_hand" :IsNote=false
      v-if="Go_Table"></table-com>




    <el-dialog class="diaa" v-model="trusteeship" width="650px" :title="`加单托管[${currency_pair}]-价格:${price}`" draggable>


      <div>

        <table>

          <tr>
            <td>
              需买入数量
            </td>
            <td>
              <el-input></el-input>DOT
            </td>
            <td>
              1.与手动交易机器人会监控手动补单的订单
            </td>


          </tr>
          <tr>
            <td>
              买入费用约
            </td>
            <td>
              <el-input></el-input>USDT

            </td>
            <td>
              2.补单成功后,补单数量会添加到持仓数量中,进而改变持仓费用,持仓均价和收益比等
            </td>

          </tr>
          <tr>
            <td>
              买入均价越
            </td>
            <td>

              <el-input></el-input> USDT
            </td>

          </tr>

        </table>

        <el-button>以现价买入补单</el-button>

      </div>

      <div>

        <table>

          <tr>
            <td>
              需卖出数量
            </td>
            <td>
              <el-input></el-input>DOT
            </td>
            <td>
              1.减单不会被记录于交易记录中
            </td>
          </tr>
          <tr>
            <td>
              卖出收入约
            </td>
            <td>
              <el-input></el-input>USDT

            </td>
            <td>
              2.减单成功后,减单数量会在持仓数量中扣除,进而改变持仓费用,持仓均价和收益比等
            </td>

          </tr>
          <tr>
            <td>
              卖出均价越
            </td>
            <td>

              <el-input></el-input>USDT
            </td>
            <td>

            </td>
          </tr>

        </table>

        <el-button>以现价卖出减单</el-button>

      </div>



      <div>

        <table>

          <tr>
            <td>
              已买入数量
            </td>
            <td>
              <el-input></el-input>DOT
            </td>
            <td>
              1.把手动在交易所上买入的订单托管给机器人,添加到机器人监控中的策略中,计入持仓均价后进行监控
            </td>
          </tr>
          <tr>

            <td>
              买入费用共
            </td>
            <td>
              <el-input></el-input>USDT

            </td>
            <td>
              2.请注意:托管币种成交均价如果高于当前买价太多会引起频繁建仓拉低数量的成交均价(为了拉高收益比),这种情况下的是不建议托管的,没有太大意义
            </td>
          </tr>
          <tr>
            <td>
              托管均价为
            </td>
            <td>

              <el-input></el-input>USDT
            </td>
            <td>

            </td>
          </tr>

        </table>

        <el-button>进行托管</el-button>

      </div>


      <div style="margin-top: 20px;">

        <span>

          账户数量:{{ }}DOT 持仓数量:{{ }}DOT
          持仓均价:{{ }}USDT 持仓费用:{{ }}SUDT

        </span>

      </div>

    </el-dialog>




    <el-tooltip v-model:visible="visible" placement="bottom" effect="light" trigger="click" virtual-triggering
      :virtual-ref="triggerRef">
      <template #content>

        <el-cascader-panel :show-all-levels="false" @change="Clicks" :props="props" :options="options" />

      </template>
    </el-tooltip>


    <el-dialog class="dia" v-model="IsdialogOpen" @closed="choose = true" width="800px" title="添加货币对" draggable>
      <el-form :model="FormData" label-width="auto" label-position="top" size="default" :inline="true">
        <el-form-item label-width="auto" label="请填写或选择计价货币" v-if="choose">
          <tr>
            <td>
              <el-input v-model="FormData.Transaction_currency"></el-input>
            </td>
            <td>
              <el-link type="primary" @click="NewApiSetting" class="NewApi_btn" :underline="false">从排行榜选择</el-link>
            </td>
          </tr>
        </el-form-item>
        <el-form-item label-width="auto" label="货币对排行榜"   v-else>
          <el-link type="primary" @click="choose = true" class="NewApi_btn" :underline="false">返回</el-link>
          <br>
          <el-table ref="multipleTableRef" :data="tableData2" class="top_table"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="45" />
            <el-table-column type="index" :index="(i) => ++i" label="排名" width="57" />
            <el-table-column width="72" v-for="(item,index) in Top_head" :label="item[1]" :property="item[0]" :key="index" />
          </el-table>
        </el-form-item>
        <el-form-item label-width="auto" label="请填写或选择计价货币">

          <el-select v-model="FormData.Denomination_currency" class="m-2" placeholder="Select">


            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>

        </el-form-item>



      </el-form>


      <div>


        <span class="reminder">提醒：新币、空气币、山寨币请谨慎交易(深度小、波动大、有可能只跌不涨)</span>


      </div>

      <div>

        <br>

        <el-button class="btn">添加到列表监控</el-button>


      </div>


    </el-dialog>


    <el-button type="primary" plain @click="IsdialogOpen = !IsdialogOpen"><el-icon size="18">
        <CirclePlus />
      </el-icon> &nbsp;&nbsp;&nbsp;添加货币对</el-button>

    <el-dropdown class="List" trigger="click">
      <span class="el-dropdown-link">
        <el-icon size="20">
          <Operation />

        </el-icon>自定义列表


      </span>
      <template #dropdown>

        <div style="width: 180px;">

          <el-checkbox-group v-model="checkList" @change="handleCheckAllChange">
            <el-checkbox v-for="item in  tableHeader" v-show="item[2] == 'false'" :key="item[0]" :label="item[1]">


            </el-checkbox>

          </el-checkbox-group>

        </div>



      </template>
    </el-dropdown>

    <div style="height:100% ">
      <el-table :data="tableData" @row-contextmenu="click_row" class="MainTable">

        <el-table-column label="序号" align="center" fixed width="100" type="index" :index="(i) => ++i"></el-table-column>

        <el-table-column v-for="item, index in newTableHeader" :key="item[0] + '_key'" :label="item[1]">

          <template #default="scope">

            <div style="display: flex; align-items: center">

              <span v-if="['enable_monitoring', 'sell_but_not_buy', 'stoppage'].indexOf(item[0]) != -1"
                style="margin-left: 10px">

                <div>
                  <el-switch v-model="scope.row[item[0]]"
                    @click.prevent="changescoped(scope.$index, index, item[0], scope.row[item[0]])" />
                </div>

              </span>

              <span v-else>{{ scope.row[item[0]] }}</span>
            </div>
          </template>

        </el-table-column>



      </el-table>


      <!-- <AA></AA> -->

    </div>


  </div>
</template>


<style scoped >
.diaa .el-input {

  width: 120px;
  margin-right: 5px;

}


.top_table{

  border: 1px solid gainsboro;

  height: 500px;

  width: 99%;

}


.MainTable {

  height: 100%;

}

.diaa td {

  width: 200px;

  height: 50px;

}

.Right {

  height: calc(71vh);

}

.diaa div {

  margin-top: 5px;

}

.diaa .el-button {

  margin-top: 10px;

  margin-left: 15px;

}

.el-checkbox {

  margin-left: 20px;

}

.List {

  float: right;

}

.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}



.btn {

  margin-left: 260px;

  width: 200px;

  height: 40px;

  border-radius: 15px;

  margin-top: 10px;
}

.reminder {


  color: cornflowerblue;

  font-size: 12px;


  margin-left: 20px;

}

.el-cascader-panel.is-bordered {

  border: 0px !important;

}

.NewApi_btn {

  margin-left: 20px;

}
</style>
