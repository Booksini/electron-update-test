
<!-- 收益统计 -->
<template>
  <table-com Tit="收益统计" AddAll="合计交易" :TableHand="table_hand" :IsNote=true></table-com>
</template>

<script lang="ts" setup>


import TableCom from '@renderer/modules/Table.vue'


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

  ["mode", "方式"],


]


</script>


<style scoped></style>