
<!-- 顶部栏 -->

<script setup lang="ts">

</script>
<template>
  
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                <el-icon size="20" class="av"><UserFilled /></el-icon >  Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu >
                    <span>dguwaydg</span>
                </el-dropdown-menu>
            </template>
        </el-dropdown>

</template>
 
  
<style scoped>

.el-dropdown-menu{

    height: 180px;
    width: 250px;

}

.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.el-dropdown {

    float: right;

    margin-top: 20px;
}

.av{

    margin-right:  10px;

}

.demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;

}
</style>
  