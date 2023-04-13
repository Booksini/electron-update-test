<!-- 策略设置——智能模式 -->
<script lang='ts' >

import { ref, reactive } from "vue"

export default {

    //props: {},

    setup(props) {




        console.log(props);

        // 选择框默认显示数据
        const value = ref("USDT")
        const value2 = ref("Robust+")

        // 选择框数据初始化
        const options = [
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

        
        const options2 = [
            {
                value: 'Conservative-',
                label: '保守-',
            },
            {
                value: 'conservative',
                label: '保守型',
            },
            {
                value: 'conservative+',
                label: '保守+',
            },
            {
                value: 'Robust-',
                label: '稳健-',
            },
            {
                value: 'Robust',
                label: '稳健型',
            },
            {
                value: 'Robust+',
                label: '稳健+',
            },
            {
                value: 'Radical-',
                label: '激进-',
            },
            {
                value: 'Radical',
                label: '激进型',
            },
            {
                value: 'Radical+',
                label: '激进+',
            },
            {
                value: 'Test',
                label: '测试',
            },
        ]

        // 动态文本集合
        const Texts = reactive({

            Budget_fund: "该预算资金为本策略单个货币对的预算资金",

            PolicyTypeText: "this is TypeText",

            Overall_rateText: "Overall_rateText",

            Mesh_filling_ratio: "Mesh_filling_ratio",

            Tracking_position_increase_ratio: "Tracking_position_increase_ratio",

            Warehouse_reference: "Warehouse_reference"
        })


        return { options, options2, value,value2, num: ref(5), Texts, radio: ref("2") }
    }
}
</script>


<template >
    <table>

        <tr>

            <td class="handtext"> 预算资金：</td>
            <td>

        <tr>

            <td>

                <el-input-number controls-position="right" v-model="num" :min="0" />
            </td>
            <td>

                <el-select v-model="value" class="m-2" placeholder="USDT">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>

            </td>

        </tr>

        </td>
        <td><span class="BlueText">{{ Texts.Budget_fund }}</span> </td>

        </tr>
        <tr>

            <td>策略类型：</td>
            <td>

                <el-select v-model="value2" class="m-2" placeholder="Select">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>

            </td>
            <td>

                {{ Texts.PolicyTypeText }}

            </td>

        </tr>
        <tr>

            <td>
                <el-divider />
            </td>
            <td><el-divider>
                    <h4>整体止盈</h4>
                </el-divider></td>
            <td><el-divider /></td>

        </tr>

        <tr>

            <td>整体止盈比例：</td>
            <td>

                <el-input-number controls-position="right" v-model="num" :min="0" />&nbsp;&nbsp; %

            </td>
            <td>

                {{ Texts.Overall_rateText }}

            </td>

        </tr>
        <tr>

            <td>

                整体回降比例：

            </td>
            <td>
                <el-input-number controls-position="right" v-model="num" :min="0" /> &nbsp;&nbsp;%

            </td>
            <td></td>

        </tr>
        <tr>


            <td>
                <el-divider />
            </td>
            <td><el-divider>
                    <h4>网格止盈</h4>
                </el-divider></td>
            <td><el-divider /></td>


        </tr>
        <tr>

            <td>网格止盈比例：</td>
            <td>

                <el-input-number controls-position="right" v-model="num" :min="0" /> &nbsp;&nbsp;%


            </td>
            <td>

                {{ Texts.Mesh_filling_ratio }}

            </td>

        </tr>
        <tr>

            <td>网格回降比例：</td>
            <td>

                <el-input-number controls-position="right" v-model="num" :min="0" /> &nbsp;&nbsp;%


            </td>
            <td></td>

        </tr>
        <tr>



            <td>
                <el-divider />
            </td>
            <td><el-divider>
                    <h4>追踪建仓</h4>
                </el-divider></td>
            <td><el-divider /></td>


        </tr>
        <tr>

            <td>追踪建仓上调比例：</td>
            <td>

                <el-input-number controls-position="right" v-model="num" :min="0" /> &nbsp;&nbsp;%


            </td>
            <td>

                {{ Texts.Tracking_position_increase_ratio }}

            </td>

        </tr>
        <tr>


            <td>
                <el-divider />
            </td>
            <td><el-divider>
                    <h4>建仓参考</h4>
                </el-divider></td>
            <td><el-divider /></td>



        </tr>


    </table>

    <div>

        <el-radio-group v-model="radio" class="ml-4">

            <el-radio label="1">使用整体持仓均价计算</el-radio>
            <el-radio label="2">使用尾单均价计算</el-radio>
        </el-radio-group>


        <span class="Warehouse_reference">{{ Texts.Warehouse_reference }}</span>



    </div>
</template>

<style  scoped>
.Warehouse_reference {

    margin-left: 78px;

}

table {
    border-collapse: separate;
    border-spacing: 5px 15px;
}

.handtext {

    width: 20%;

}



.BlueText {

    color: cornflowerblue;

    font-size: 11px;

}</style>