<!-- 买入记录 -->

<template>
  <table-com Tit="买入记录" AddAll="合计买入" :TableHand="table_hand" :IsNote=false></table-com>
</template>
  
<script lang="ts" setup>


import TableCom from '@renderer/modules/Table.vue'




const table_hand = [

  ["id", "序号"],

  ["currency_pair", "货币对"],

  ["buy_time", "买入时间"],

  ["quantity_bought", "买入数量"],

  ["average_price", "均价"],

  ["fee", "费用"],

  ["coin", "币"],

  ["single_order", "单序"],

  ["mode", "方式"],


]



</script>
  

<style scoped></style>