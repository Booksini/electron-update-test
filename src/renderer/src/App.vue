<script setup lang="ts">
import Top from './components/Top.vue'
import Left from './components/Left.vue'
import Right from './components/Right.vue'



</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>

        <Top></Top>


      </el-header>


      <el-container  >
        <el-aside  width="180px" >
          
          <Left  ></Left>
        </el-aside>
        
        <el-aside width="350px" id="Father">

          <RouterView></RouterView>

           

          <RouterView name="J"></RouterView>

        </el-aside>
        <el-main>
          
          <Right > </Right>
        
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<style  >

@import url(./assets/css/styles.less);

.el-header{

  border-bottom: 1px solid gainsboro;

}



#Father{

  border-left: 1px solid gainsboro;
  border-right: 1px solid gainsboro;


}


</style>
