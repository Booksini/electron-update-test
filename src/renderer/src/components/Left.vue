<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

let data = [
  ['APISetting', 'Api设置'],
  ['OneSetting', '一键设置'],
  ['AdvancedSettings', '高级设置'],
  ['IncomeStatistics', '收益统计'],
  ['PurchaseRecord', '买入记录'],
  ['AssetStatus', '资产状态'],
  ['OperationLog', '操作日志']
]

let pathOne = "AssetStatus"

router.push(pathOne)

const handleOpen = (key: string) => {


  router.push(pathOne)

  setTimeout(() => {

    if (["OperationLog", "AssetStatus"].indexOf(key) != -1) {


      pathOne = key

      router.push(key)


    } else {


      router.push(`/${pathOne}-${key}`)

    }


  }, 50);



  console.log(key);


}


</script>

<template>
  <el-col class="el_Col" v-for="item in data" :key="item">


    <el-button class="el_Button" @click="handleOpen(item[0])">{{ item[1] }}</el-button>

  </el-col>
</template>


<style scoped>
.el_Col {

  padding: 1vh 10px;

}

.el_Button {

  height: 8vh;

  min-height: 43px;

  max-height: 60px;

  width: 100%;

  border-radius: 20px;

}
</style>
