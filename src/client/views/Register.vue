<!-- 實習生註冊 -->
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
        style="font-size: 30px; background-color: #b0dffc; width: 25%"
        ><router-link type="radio" to="/register" style="color: black"
          >實習生</router-link
        ></label
      >

      <label
        class="btn btn-light btn-sm"
        style="font-size: 30px; background-color: #bcddfc71; width: 25%"
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
            <div class="row">
              <div class="col-md-8">
                <label><strong>姓名</strong></label>
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  placeholder="請輸入真實姓名"
                />
                <font size="2" color="red" v-if="invalidName"
                  >*該欄位不得為空</font
                >
                <br />
              </div>
              <div class="col-md-4">
                <label><strong>性別</strong></label>
                <br />
                <input v-model="gender" type="radio" value="0" /><label
                  >男</label
                >
                &nbsp;&nbsp;&nbsp;
                <input v-model="gender" type="radio" value="1" /><label
                  >女</label
                >
                <br /><br />
              </div>
            </div>

            <label><strong>生日</strong></label>
            <input
              v-model="birth"
              type="text"
              class="form-control"
              placeholder="範例: xxxx-xx-xx"
            />
            <font size="2" color="red" v-if="invalidBirth"
              >*請輸入xxxx-xx-xx</font
            >
            <br />
            <label><strong>身分證字號</strong></label>
            <input
              v-model="id_card"
              type="text"
              class="form-control"
              placeholder="範例: A123456789"
            />
            <font size="2" color="red" v-if="invalidID"
              >*請輸入正確的身分證格式</font
            >
            <br />
            <label><strong>學校</strong></label>
            <input
              v-model="school"
              type="text"
              class="form-control"
              placeholder="範例: OO大學"
            />
            <font size="2" color="red" v-if="invalidSchool"
              >*該欄位不得為空</font
            >
            <br />
            <label><strong>電話</strong></label>
            <input
              v-model="phone"
              class="form-control"
              placeholder="範例: 0987654321"
            />
            <font size="2" color="red" v-if="invalidPhone"
              >*請輸入正確的手機格式</font
            >
            <br />

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
          </div>
          <font size="2" color="red" v-if="invalidPWRepeat"
            >*請確認兩次密碼輸入相同</font
          >
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
            <!-- <input
              value="立即註冊"
              class="btn"
              style="width: 400px; height: 60px; font-size: 30px; margin:0px auto;"
              @click="singup"
            /> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
.routerlink {
  color: black;
}
</style>
<script>
import axios from "../js/axios.js";
import qs from "qs";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      gender: Number,
      birth: "",
      id_card: "",
      school: "",
      phone: "",
      email: "",
      password: "",
      password_repeat: "",
      msg: "",
      checked: false,
      invalidName: false,
      invalidBirth: false,
      invalidID: false,
      invalidPhone: false,
      invalidSchool: false,
      invalidEmail: false,
      invalidPW: false,
      invalidPWRepeat: false,
    };
  },
  watch: {
    name: function (newValue) {
      this.invalidName = !newValue;
    },
    birth: function (newValue) {
      this.invalidBirth = !/^\d{4}-\d{2}-\d{2}$/.test(newValue);
    },
    id_card: function (newValue) {
      this.invalidID = !/^[A-Z]\d{9}$/.test(newValue);
    },
    phone: function (newValue) {
      this.invalidPhone = !/^09\d{8}$/.test(newValue);
    },
    School: function (newValue) {
      this.invalidSchool = !newValue;
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
          gender: this.gender,
          birth: this.birth,
          id_card: this.id_card,
          school: this.school,
          phone: this.phone,
          email: this.email,
          password: this.password,
          password_repeat: this.password_repeat,
        };
        const api = "/api/user-register";

        axios
          .post(api, qs.stringify(credentials))
          .then((response) => {
            this.msg = response.data.msg;
            alert(this.msg);
            this.$router.push("/");
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