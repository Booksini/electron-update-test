<!-- 买入记录、收益统计。。。。组件 -->
<script lang="ts" >

import { ref } from "vue";

export default {

    props: { Tit: String, AddAll: String, IsNote: Boolean, TableHand: Object },


    setup(props) {

        console.log(props);

        const tableData = ref([
            {
                id: '2016-05-03',
                currency_pair: 'Tom',
                sell_time: 'No. 189, Grove St, Los Angeles',
            }, {
                id: '2016-05-03',
                currency_pair: 'Tom',
                sell_time: 'No. 189, Grove St, Los Angeles',
            }, {
                id: '2016-05-03',
                currency_pair: 'Tom',
                sell_time: 'No. 189, Grove St, Los Angeles',
            }, {
                id: '2016-05-03',
                currency_pair: 'Tom',
                sell_time: 'No. 189, Grove St, Los Angeles',
            },
        ])

        const Note = ref(false);


        // 事件

        const All_Btn = () => {

            console.log("this is 所有");


        }

        const Today_Btn = () => {

            console.log("this is 今天");


        }

        const Ytday_Btn = () => {

            console.log("this is 昨天");


        }

        const TheMon_Btn = () => {

            console.log("this is 本月");


        }

        const Export_Btn = () => {

            console.log("this is 导出");


        }

        const Que_Btn = () => {

            console.log("this is 查询");


        }

        // 初始化事件集合，为了一次性生成按钮并绑定事件(偷个懒)
        const btnArr = ref([["所有", All_Btn], ["今天", Today_Btn], ["昨天", Ytday_Btn], ["本月", TheMon_Btn], ["导出", Export_Btn], ["查询", Que_Btn]])


        // 获得当前时间，初始化时间选择器时间
        let nowTime = new Date(Date.parse(new Date().toString()));

        // 时间戳格式化处理，当时间为个位数时如 1 绑定时会无效，需要改成01才有效，这里需要注意一下
        let date = nowTime.toLocaleDateString().split("/").map(item => item.length == 1 ? "0" + item : item).join("-")

        // 绑定时间，元素一为起始时间，二为结束时间
        const value1 = ref([date, date])

        // 选择完成事件回调
        const Date_picker = (val: any) => {

            console.log(val);


        }

        return { value1, Date_picker, btnArr, tableData, dia: true, Note }
    }
}
</script>



<template>
    <el-dialog v-model="dia" width="810px" :title="Tit" draggable>

        <div>


            <div>

                <table>

                    <tr>

                        <td v-for="btnname in btnArr">


                            <el-button class="Btn" :key="btnname[0]" @click="btnname[1]">{{ btnname[0] }}</el-button>

                        </td>

                        <td>
                            <el-date-picker v-model="value1" type="daterange" format="YYYY-M-DD" value-format="YYYY-MM-DD"
                                range-separator="至" start-placeholder="开始日期" end-placeholder="截止日期" @change="Date_picker" />



                        </td>

                    </tr>

                </table>

            </div>

            <div>

                <el-table :data="tableData" height="600px" style="width: 100%">
                    <el-table-column v-for="item in TableHand" :prop="item[0]" :label="item[1]" />

                </el-table>

            </div>

            <div>


                <br>

                <el-checkbox v-model="Note" v-if="IsNote">短信通知</el-checkbox>

                <h3>{{ AddAll }}</h3>



            </div>


        </div>

    </el-dialog>
</template>

<style  scoped>
.Btn {

    margin-left: 5px;

}

.el-checkbox {

    float: right;



}
</style>
