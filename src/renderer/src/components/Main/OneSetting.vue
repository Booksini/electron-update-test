<!--  -->
<script lang='ts' >


import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

import IntCom from "@renderer/modules/Intelligence.vue"
import ProCom from "@renderer/modules/Professional .vue"

export default {

  props: {Tit:String ,HaveData:{type:Boolean,default:false}},

  components:{

    IntCom,
    ProCom

  },
  setup(props) {

    const title = `策略设置[${[props.Tit || "USDT货币对"]}]`
   

    console.log(props);


    const activeName = ref('first')

    const handleClick = (tab: TabsPaneContext, event: Event) => {
      console.log(tab, event)
    }


    return { dialogVisible: true , activeName, handleClick, title,checkList: ref([])}
  }
}
</script>


<template >
  <el-dialog class="dia" v-model="dialogVisible" width="750px" height="700px" :title="title" draggable>
   
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="智能模式" name="first"> 

        <int-com></int-com>

       
      </el-tab-pane>
      <el-tab-pane label="专业模式" name="second">


        <pro-com :HaveData="HaveData"></pro-com>

      </el-tab-pane>
    </el-tabs>


    <br>

    <div>

        <el-divider />

        <div class="end">
            <el-checkbox-group v-model="checkList">

                <el-checkbox label="应用到已交易货币对" />
                <el-checkbox label="应用到未交易货币对" />

            </el-checkbox-group>


        </div>

        <el-button> 保存策略</el-button>
        <el-button> 还原</el-button>




    </div>
  </el-dialog>
</template>

<style  scoped>

.el-checkbox-group{


  margin-left: 40px;

}

.end {

border: 1px solid gainsboro;

float: right;

width: 400px;

}

</style>