
<!-- 策略设置——专业模式 -->

<script lang='ts' >

import { ElMessageBox, ElMessage } from 'element-plus'
import { ref } from "vue";
import {
    Plus,
    Minus,
} from '@element-plus/icons-vue'


export default {

    props: { HaveData: { type: Boolean, default: false } },



    setup(props) {


        console.log(props);





        // 三组单选框
        const radio = ref('1')

        const radio1 = ref('2')

        const radio2 = ref('1')


        // 表头初始化数据
        const handData: any = ref([

            ["buying_cost", "买入费用", true],
            ["Big_data_percentage", "大数据间隔比例(%)", false],
            ["Tracking_position", "追踪建仓比例(%)", true],
            ["Overall_stop", "整体止盈比例(%)", true],
            ["Trace_back_down", "追踪止盈回降比例(%)", true],
            ["Grid_interference", "网格止盈比例(%)", true],
            ["Grid_back", "网格追踪止盈回降比例(%)", true],
            ["Estimated_opening_price", "预计建仓价", false],

        ])



        const BigData = () => {

            const keyArr = ["Big_data", "custom"]
            const valueArr = ["大数据", "自定义"]

            if (radio.value == "1") {

                Rep_Hand(valueArr, keyArr, false)

            } else if (radio.value == "2") {

                Rep_Hand(valueArr.reverse(), keyArr.reverse(), true)


            }

        }

        const Percentage = () => {


            const keyArr = ["spread", "percentage"]
            const valueArr = ["金额", "比例"]

            if (radio1.value == "1") {

                Rep_Hand(valueArr, keyArr, radio.value == "2")

            } else if (radio1.value == "2") {

                Rep_Hand(valueArr.reverse(), keyArr.reverse(), radio.value == "2")

            }


        }


        const Rep_Hand = (valueArr: string[], keyArr: string[], isFn: boolean) => {

            handData.value[1][2] = isFn

            handData.value[1][1] = handData.value[1][1].replace(valueArr[1], valueArr[0])

            handData.value[1][0] = handData.value[1][0].replace(keyArr[1], keyArr[0])

        }


        const Cost = () => {


            if (radio2.value == "1") {


                handData.value[0][1] = "买入费用"

                handData.value[0][0] = "buying_cost"

            } else if (radio2.value == "2") {

                handData.value[0][1] = "买入数量"

                handData.value[0][0] = "buying_num"

            }



        }


        // 表数据
        const tableData = ref([
            {
                buying_cost: 'buying_cost',
                Overall_stop: 'Tom',
                Big_data_percentage: "Big_data_percentage",
                buying_num: "buying_num",
                Big_data_spread: "Big_data_spread",
                custom_spread: "custom_spread",
                custom_percentage: "custom_percentage",
                Tracking_position: 'No. 189, Grove St, Los Angeles',
            }, {
                buying_cost: '2016-05-03',
                Overall_stop: 'Tom',
                Tracking_position: 'No. 189, Grove St, Los Angeles',
            }, {
                buying_cost: '2016-05-03',
                Overall_stop: 'Tom',
                Tracking_position: 'No. 189, Grove St, Los Angeles',
            }, {
                buying_cost: '2016-05-03',
                Overall_stop: 'Tom',
                Tracking_position: 'No. 189, Grove St, Los Angeles',
            },
        ])



        const Batch_setting = (table_value: string, table_key: string) => {

            ElMessageBox.prompt('输入数值：', `批量设置（${table_value}）`, {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            })
                .then(({ value }) => {

                    var pattern = /^[0-9]*$/

                    value = value.replaceAll(" ", "")

                    if (value == "" || value == null) {

                        ElMessage({
                            type: 'error',
                            message: '不可输入空数据',
                        })

                    } else if (!pattern.test(value)) {

                        ElMessage({
                            type: 'error',
                            message: '数据格式错误，请输入数字',
                        })

                    } else {


                        tableData.value.map(i => {

                            i[table_key] = value


                            return i

                        })

                    }

                })
                .catch(() => {
                    ElMessage({
                        type: 'info',
                        message: '已取消操作',
                    })
                })

        }


        // 数据添加事件
        const Add_row = (num: number) => {



            for (let index = 0; index < num; index++) {

                tableData.value.push(tableData.value[tableData.value.length - 1])

            }
        }

        // 数据删减事件
        const Del_row = (num: number) => {

            for (let index = 0; index < num; index++) {

                if (tableData.value.length == 1) {

                    return

                }

                tableData.value.pop()

            }
        }



        return {
            handData,
            tableData,
            Add_row,
            Del_row,
            BigData,
            Percentage,
            Cost,
            Batch_setting,
            Plus,
            Minus,
            radio,
            radio1,
            radio2,
            num: ref(5),
            checkList1: ref([]),
            checkList2: ref([]),
        }
    }
}
</script>


<template >
    <div>

        <div>
            <tr>
                <td>
                    <el-radio v-model="radio" @change="BigData" label="1" size="large">大数据间隔 </el-radio>


                </td>
                <td v-if="HaveData">
                    <el-radio v-model="radio1" @change="Percentage" label="1" size="large">使用价差作为间隔</el-radio>


                </td>
                <td v-if="HaveData">
                    <el-radio v-model="radio2" @change="Cost" label="1" size="large">按照所设费用</el-radio>


                </td>

            </tr>
            <tr>
                <td>
                    <span class="Text_sty">首单前进行数据分析改变间隔</span>
                </td>
                <td v-if="HaveData">
                    <span class="Text_sty">下跌一定价格后执行买入操作</span>
                </td>
                <td v-if="HaveData">
                    <span class="Text_sty">按照设置买入一定费用</span>
                </td>

            </tr>
            <tr>
                <td>
                    <el-radio v-model="radio" @change="BigData" label="2" size="large">自定义间隔</el-radio>
                </td>
                <td v-if="HaveData">
                    <el-radio v-model="radio1" @change="Percentage" label="2" size="large">使用百分比作为间隔</el-radio>
                </td>
                <td v-if="HaveData">
                    <el-radio v-model="radio2" @change="Cost" label="2" size="large">按照所设数量</el-radio>
                </td>

            </tr>
            <tr>
                <td>

                    <span class="Text_sty">自定义个订单的建仓间隔</span>

                </td>
                <td v-if="HaveData">

                    <span class="Text_sty">下跌一定比例后执行买入操作</span>

                </td>
                <td v-if="HaveData">

                    <span class="Text_sty">按照设置买入一定数量</span>

                </td>

            </tr>
        </div>

        <div class="Div_mar_top">
            <span>

                当
                <el-input-number controls-position="right" v-model="num" :min="0" />
                分钟内

                <span class="redText">涨幅</span>


                超过
                <el-input-number controls-position="right" v-model="num" :min="0" />&nbsp;&nbsp; %，
                间隔调整为
                <el-input-number controls-position="right" v-model="num" :min="0" />&nbsp;&nbsp; %，
                并且
                <br>
                <br>
                <el-checkbox-group v-model="checkList1">
                    <el-checkbox label="开启只卖不买" />
                    <el-checkbox label="开启止盈停止" />

                </el-checkbox-group>

            </span>

        </div>
        <div class="Div_mar_top">

            <span>

                当
                <el-input-number controls-position="right" v-model="num" :min="0" />
                分钟内

                <span class="redText">跌幅</span>

                超过
                <el-input-number controls-position="right" v-model="num" :min="0" />&nbsp;&nbsp; %，
                间隔调整为
                <el-input-number controls-position="right" v-model="num" :min="0" />&nbsp;&nbsp; %，
                并且
                <br>
                <br>
                <el-checkbox-group v-model="checkList2">
                    <el-checkbox label="开启只卖不买" />
                    <el-checkbox label="开启止盈停止" />
                </el-checkbox-group>

            </span>
        </div>



        <div class="Table Div_mar_top">
            <el-table :data="tableData" height="302px" style="width: 100%">

                <el-table-column align="center" fixed width="100" type="index" :index="(i) => ++i">
                    <template #header>

                        <el-tooltip class="box-item" effect="light" content="右击一次性添加五条" placement="bottom-start">

                            <el-button class="Ad_btn" @click="Add_row(1)" @click.right="Add_row(5)" :icon="Plus" />


                        </el-tooltip>
                        <el-tooltip class="box-item" effect="light" content="右击一次性减少五条" placement="bottom-start">

                            <el-button class="Ad_btn" @click="Del_row(1)" @click.right="Del_row(5)" :icon="Minus" />

                        </el-tooltip>



                    </template>

                </el-table-column>
                <el-table-column v-for="item in handData" hidden :prop="item[0]" :key="item[0]" width="120">

                    <template #header>
                        <el-tooltip v-if="item[2]" class="box-item" effect="light" content="点击进行批量操作"
                            placement="bottom-start">

                            <span class="Table_hanClick" @click="Batch_setting(item[1], item[0])">

                                {{ item[1] }}

                            </span>
                        </el-tooltip>
                        <span v-else>

                            {{ item[1] }}

                        </span>


                    </template>

                    <template #default="scope">


                        <div v-if="item[2]">

                            <el-input class="Tab_inp" v-model="scope.row[item[0]]"> </el-input>

                        </div>

                        <div v-else>{{ scope.row[item[0]] }}</div>

                    </template>
                </el-table-column>

            </el-table>
        </div>


    </div>
</template>

<style lang="less" scoped>
.Tab_inp {

    :deep(.el-input__wrapper) {


        background-color: none var(--el-input-bg-color, var(--el-fill-color-blank));
        box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
        cursor: default;

        .el-input__inner {
            cursor: default !important;
        }
    }
}
</style>


<style  scoped>
.Div_mar_top {


    margin-top: 26px;

}

td {

    width: 250px;

}



.Ad_btn {

    width: 15px;

    height: 30px;

}

.Table {

    height: 302px;

    border: 1px solid gainsboro;



}

.Text_sty {

    font-size: 11px;

    color: gray;

    margin-left: 20px;
}

.el-input-number {


    width: 120px;

}

.redText {

    color: red;

    font-size: 15px;

}
</style>