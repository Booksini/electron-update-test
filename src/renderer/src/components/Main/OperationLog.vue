<template>
  <!-- <button @click="Goend"></button> -->
    <el-auto-resizer>
        <template #default="{ height, width }">
            <el-table-v2 ref="tableRef" :columns="columns" :data="data" :width="width" :height="height" fixed />
        </template>
    </el-auto-resizer>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'

import type { TableV2Instance } from 'element-plus'


const columns = ref([{
    key: `Log_Text`,
    dataKey: `Log_Text`,
    title: `操作日志`,
    width: 150,
}]
) 


const data =ref([{

    Log_Text: "feifh",


}]) 



const tableRef = ref<TableV2Instance>()


// let i =0

// setInterval(()=>{


//     data.value.push({Log_Text:""+ i++})
//     tableRef.value?.scrollToRow(data.value.length-1, "end")

// },50)


// const Goend = () => {




//     tableRef.value?.scrollToRow(data.value.length-1, "end")

// }

</script>
  