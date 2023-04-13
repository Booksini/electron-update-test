<!-- 一键设置 -->
<script lang='ts' >
import { reactive, ref } from 'vue';
//  import {okx} from 'ccxt'

import axios from "axios"

import qs from "qs"

export default {

  props: {},

  setup(props) {



    console.log(props);

    const FormData = reactive({

      Bourse_Api: "",

      AccessKey: "791a9f28-6f99-4457-bc4a-b21c0c3f681c",

      SecreKey: "409B5DC145B175E085A26B728253A973",

      Passphrase: "Aa123456!"

    })

    const exchangeName = ref("")

    const options = [
      {
        value: 'Gate',
        label: 'Gate',
      },
      {
        value: 'okx',
        label: '欧意',
      },
      {
        value: '币安',
        label: '币安',
      },
    ]
    const NewApiSetting = async () => {

      console.log(14564);



    }



    const link_api = () => {

      const data = {

        exchangeName: exchangeName.value,
        apiKey: FormData.AccessKey,
        secret: FormData.SecreKey,
        password: FormData.Passphrase,

      }

      axios.post("http://localhost:3000/ccxt_api", qs.stringify(data)).then(({ data }) => {


        console.log(data);
        


      })


    }


    return {
      dialogVisible: true, FormData,
      NewApiSetting,
      exchangeName,
      options,
      link_api,


    }
  }
}
</script>


<template >
  <el-dialog class="dia" v-model="dialogVisible" width="500px" title="API设置" draggable>
    <el-form ref="form" :model="FormData" label-width="auto" label-position="top" size="default">

      <el-form-item label-width="auto" label="交易所">

        <el-select v-model="exchangeName" class="m-2" placeholder="请选择交易所">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>

        <el-link type="primary" @click="NewApiSetting" class="NewApi_btn" :underline="false">初始化Api设置</el-link>

      </el-form-item>


      <el-form-item label-width="auto" label="A密钥(AccessKey)">

        <el-input v-model="FormData.AccessKey"></el-input>

      </el-form-item>


      <el-form-item label-width="auto" label="S密钥(SecreKey)">


        <el-input v-model="FormData.SecreKey" type="password" show-password />

      </el-form-item>

      <el-form-item label-width="auto" label="Passphrase">

        <el-input v-model="FormData.Passphrase"></el-input>

      </el-form-item>



    </el-form>

    <el-button class="btn" @click="link_api">测试连接</el-button>

  </el-dialog>
</template>

<style  scoped>
.NewApi_btn {


  margin-left: 100px;



}

.btn {

  margin-left: 120px;

  width: 200px;

  height: 40px;

  border-radius: 15px;

  margin-top: 10px;

}
</style>
