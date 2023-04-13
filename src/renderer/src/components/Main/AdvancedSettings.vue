<!--  -->
<script lang='ts' >

import { ref } from 'vue';

export default {

    //props: {   },

    setup(props) {

        console.log(props);


        const checked = ref(true)

        const value = ref("BTC")

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

            },

        ])


        const cumulative_amount = 0;

        const num = ref(100)
        const num1 = ref(100)

        return { dialogVisible: ref(true), checked, value, options, num, num1, cumulative_amount }
    }
}
</script>


<template >
    <el-dialog class="dia" v-model="dialogVisible" width="610px" title="高级设置" draggable>

        <el-checkbox v-model="checked" label="自动屯币" size="large" />

        <div class="diva">

            <span class="Text">
                
                累积收益达到 
                
                <el-input-number controls-position="right" v-model="num" :min="0" />
                
                USDT，自动买入
                <el-input-number controls-position="right" v-model="num1" :min="0" />
                
                USDT的
                
                <el-select v-model="value"
                    class="m-2" placeholder="Select">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            
            </span>

        </div>


        <div class="diva">

            <table class="table">

                <tr>
                    <td>
                        1.当前累积USDT收益数额：{{ cumulative_amount }}
                    </td>
                </tr>
                <tr>
                    <td>
                        2.每次屯币后重新累积收益金额
                    </td>
                </tr>
                <tr>
                    <td class="reminder">
                        3.建议只屯主流币
                    </td>
                </tr>

            </table>

        </div>


    </el-dialog>
</template>

<style  scoped>

.table{


    color: gray;

    font-size: 12px;

}

.diva{

    margin-top:40px;

}

.el-input-number {

    width: 80px;

    height: 30px;

}

.Text {

    font-size: 16px;

    margin-left: 15px;
}

.el-select {

    width: 80px;


}

.reminder {


    color: red;




}
</style>