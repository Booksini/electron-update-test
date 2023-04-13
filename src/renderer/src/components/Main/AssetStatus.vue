<!--资产状态  -->
<script lang="ts" setup>

let tableData = [[

    ["共计盈利",],
    ["USDT", 468],
    ["BTC", 468],
    ["ETH", 468],


], [

    ["当日盈利",],
    ["USDT", 468],
    ["BTC", 468],
    ["ETH", 468],


], [

    ["持仓费用",],
    ["USDT", 468],
    ["BTC", 468],
    ["ETH", 468],


],]



</script>

<template>
    <div class="card">
        <el-card shadow="hover" v-for="item in tableData" :key="item">

            <table>


                <tr v-for="data in item" :key="data[0]">

                    <td>
                        {{ data[0] }}
                    </td>
                    <td>
                        {{ data[1] }}
                    </td>

                </tr>


            </table>

        </el-card>

    </div>
</template>


<style>



.el-card__body {

    padding: 15px;

    height: 100%;

}
</style>

<style scoped>
.card{

    padding: 0 10px;

}

table {

    width: 100%;

    height: 20vh;
}


.el-card {

    margin-top: 2vh;

    height: 25vh;

    min-height: 110px;

    border-radius: 20px;


}
</style>
