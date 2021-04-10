<!-- 企業註冊 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br />
    <h3>企業註冊</h3>
    <br />
    <router-link class="text-right" to="/register">實習生註冊</router-link>
    <div class="panel panel-default col-md-6 offset-3">
      <div class="panel-body" style="padding: 50px">
        <form>
          <!-- <p v-if="msg">{{ msg }}</p> -->
          <div class="form-group col-md-12 text-left">
            <label>公司名稱</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              placeholder="請輸入公司名稱"
            />
            <font size='2' color='red' v-if="invalidName">*該欄位不得為空</font>
            <br />
            <label>地址</label>
            <input
              v-model="address"
              type="text"
              class="form-control"
              placeholder="請輸入公司地址"
            />
            <font size='2' color='red' v-if="invalidAddress">*該欄位不得為空</font>
            <br />
            <label>電話</label>
            <input
              v-model="phone"
              class="form-control"
              placeholder="範例:0987654321 或 02-1234567"
            />
            <font size='2' color='red' v-if="invalidPhone">*請輸入0987654321 或 02-1234567</font>
            <br />
            <label>Email</label>
            <input
              v-model="email"
              class="form-control"
              placeholder="範例:oooo@gmail.com"
            />
            <font size='2' color='red' v-if="invalidEmail">*請輸入正確的Email格式</font>
            <br />
            <label>密碼</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="請輸入8位以上字元或數字"
            />
            <font size='2' color='red' v-if="invalidPW">*請輸入8位以上字元或數字</font>
            <br />
            <label>確認密碼</label>
            <input
              v-model="password_repeat"
              type="password"
              class="form-control"
              placeholder="請確認兩次密碼輸入相同"
            />
            <font size='2' color='red' v-if="invalidPWRepeat">*請確認兩次密碼輸入相同</font>
          </div>
          <br />
          <div class="checkbox">
            <label class="form-check-label" for="gridCheck">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="checked"
              />
              同意服務條款
            </label>
            <br /><br />
            <!--eslint-disable-next-line-->
            <button class="btn" @click="singup">
              <span class="glyphicon glyphicon-search"></span>立即註冊
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../js/axios.js";
import qs from "qs";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      address:"",
      phone: "",
      email: "",
      password: "",
      password_repeat: "",
      msg: "",
      checked: false,
      invalidName:false,
      invalidAddress:false,
      invalidPhone:false,
      invalidEmail:false,
      invalidPW:false,
      invalidPWRepeat:false
    };
  },
  watch:{
    name: function(newValue){
        this.invalidName = !newValue
    },
    address: function(newValue){
        this.invalidAddress = !newValue
    },
    phone: function(newValue){
      //手機為0912345678、市話為地區碼(2~4碼)-電話號碼(5~8碼)
      this.invalidPhone = ! (/^09\d{8}$/.test(newValue) || /^0\d{1,3}-\d{5,8}$/.test(newValue))
    },
    email: function(newValue){
      this.invalidEmail = !/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(newValue)
    },
    password: function(newValue){
      this.invalidPW = !/\w{8,20}$/.test(newValue)
    },
    password_repeat: function(newValue){
      this.invalidPWRepeat = (this.password != newValue)
    },
  },
  methods: {
    //註冊
    singup: function () {
      if (!this.checked) {
        alert("請同意服務條款");
      } else {
        const credentials = {
          name: this.name,
          address: this.address,
          phone: this.phone,
          email: this.email,
          password: this.password,
          password_repeat: this.password_repeat,
        };
        const api = "/api/company-register";

        axios
          .post(api, qs.stringify(credentials))
          .then((response) => {
            this.msg = response.data.msg;
            alert(this.msg);
          })
          .catch((err) => {
            this.msg = err.response.data.msg;
            alert(this.msg);
          });
      }
    },
  },
};
</script>