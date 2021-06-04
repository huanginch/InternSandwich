<!-- 企業註冊 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br />
    <h3>立即註冊</h3>

    <div
      class="btn-group btn-group-toggle float-center"
      data-toggle="buttons"
      style="width: 50%"
    >
      <label
        class="btn btn-light btn-sm"
        style="font-size: 30px; background-color: #bcddfc71; width: 25%"
        ><router-link type="radio" to="/register" style="color: black"
          >實習生</router-link
        ></label
      >

      <label
        class="btn btn-light btn-sm"
        style="font-size: 30px; background-color: #b0dffc; width: 25%"
        ><router-link type="radio" to="/register_business" style="color: black"
          >企業
        </router-link></label
      >
    </div>

    <div
      class="panel panel-default col-md-6 offset-3"
      style="border-right: ridge; border-left: groove; border-bottom: ridge"
    >
      <!-- ridge groove inset outset -->
      <div class="panel-body" style="padding: 50px">
        <form>
          <!-- <p v-if="msg">{{ msg }}</p> -->
          <div class="form-group col-md-12 text-left">
            <div class="text-center">
              <label
                for="inputEmail4"
                style="
                  font-size: 25px;
                  background-color: #b0dffc;
                  width: 200px;
                  border-radius: 20px;
                "
                ><strong>基本資料</strong></label
              >
            </div>
            <label><strong>名稱</strong></label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              placeholder="請輸入真實公司名稱"
            />
            <font size="2" color="red" v-if="invalidName">*該欄位不得為空</font>
            <br />
            <label><strong>地址</strong></label>
            <input
              v-model="address"
              type="text"
              class="form-control"
              placeholder="請輸入完整公司地址"
            />
            <font size="2" color="red" v-if="invalidAddress"
              >*該欄位不得為空</font
            >
            <br />
            <label><strong>電話</strong></label>
            <input
              v-model="phone"
              class="form-control"
              placeholder="範例: 0987654321 或 02-1234567"
            />
            <font size="2" color="red" v-if="invalidPhone"
              >*請輸入0987654321 或 02-1234567</font
            >
            <br />
            <!-- <label><strong>實習生技能需求</strong></label>
            <select v-model="recommend_keyword" class="form-control">
              <option value="">將會按照此欄位為您推薦合適實習生</option>
              <option>Python</option>
              <option>C/C++</option>
              <option>Java</option>
              <option>行銷</option>
              <option>行政</option>
              <option>管理</option>
            </select>
            <br /> -->

            <hr border-style="solid" />
            <div class="text-center">
              <label
                for="inputEmail4"
                style="
                  font-size: 25px;
                  background-color: #b0dffc;
                  width: 200px;
                  border-radius: 20px;
                "
                ><strong>登入帳密</strong></label
              >
            </div>

            <label><strong>Email</strong></label>
            <input
              v-model="email"
              class="form-control"
              placeholder="範例: oooo@gmail.com"
            />
            <font size="2" color="red" v-if="invalidEmail"
              >*請輸入正確的Email格式</font
            >
            <br />
            <label><strong>密碼</strong></label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="請輸入8位以上字元或數字"
            />
            <font size="2" color="red" v-if="invalidPW"
              >*請輸入8位以上字元或數字</font
            >
            <br />
            <label><strong>確認密碼</strong></label>
            <input
              v-model="password_repeat"
              type="password"
              class="form-control"
              placeholder="請確認兩次密碼輸入相同"
            />
            <font size="2" color="red" v-if="invalidPWRepeat"
              >*請確認兩次密碼輸入相同</font
            >
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
            <button
              class="btn"
              @click="singup"
              style="background-color: #bcddfc71"
            >
              <span class="glyphicon glyphicon-search"></span>註冊
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
      address: "",
      phone: "",
      email: "",
      password: "",
      password_repeat: "",
      recommend_keyword: "",
      msg: "",
      checked: false,
      invalidName: false,
      invalidAddress: false,
      invalidPhone: false,
      invalidEmail: false,
      invalidPW: false,
      invalidPWRepeat: false,
    };
  },
  watch: {
    name: function (newValue) {
      this.invalidName = !newValue;
    },
    address: function (newValue) {
      this.invalidAddress = !newValue;
    },
    phone: function (newValue) {
      //手機為0912345678、市話為地區碼(2~4碼)-電話號碼(5~8碼)
      this.invalidPhone = !(
        /^09\d{8}$/.test(newValue) || /^0\d{1,3}-\d{5,8}$/.test(newValue)
      );
    },
    email: function (newValue) {
      this.invalidEmail = !/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(
        newValue
      );
    },
    password: function (newValue) {
      this.invalidPW = !/\w{8,20}$/.test(newValue);
    },
    password_repeat: function (newValue) {
      this.invalidPWRepeat = this.password != newValue;
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
            //this.add_keyword()
            this.msg = response.data.msg;
            alert(this.msg);
          })
          .catch((err) => {
            this.msg = err.response.data.msg;
            alert(this.msg);
          });
      }
    },

    // //新增推薦關鍵字
    // add_keyword: function(){

    // }
  },
};
</script>