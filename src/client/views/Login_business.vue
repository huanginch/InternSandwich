<!-- 企業登入 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br />
    <h3>立即登入</h3>

    <div
      class="btn-group btn-group-toggle float-center"
      data-toggle="buttons"
      style="width: 50%"
    >
      <label
        class="btn btn-light btn-sm"
        style="font-size: 30px; background-color: #bcddfc71; width: 25%"
        ><router-link type="radio" to="/login" style="color: black"
          >實習生</router-link
        ></label
      >

      <label
        class="btn btn-light btn-sm"
        style="font-size: 30px; background-color: #b0dffc; width: 25%"
        ><router-link type="radio" to="/login_business" style="color: black"
          >企業
        </router-link></label
      >
    </div>

    <div
      class="panel panel-default col-md-6 offset-3"
      style="border-style: ridge"
    >
      <!-- ridge groove inset outset -->
      <div class="panel-body" style="padding: 50px">
        <form>
          <div class="form-group col-md-12 text-left">
            <label for="userId"><strong>Email</strong></label>
            <input
              v-model="email"
              type="text"
              class="form-control"
              placeholder="請輸入email"
            />
          </div>

          <br />

          <div class="form-group col-md-12 text-left">
            <label for="password"><strong>密碼</strong></label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="請輸入密碼"
            />
          </div>

          <div class="checkbox">
            <input
              type="submit"
              value="登入"
              class="btn"
              style="
                font-size: 25px;
                margin: 0px auto;
                background-color: #bcddfc71;
              "
              @click="login"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "../js/axios.js";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      msg: "",
    };
  },
  methods: {
    //登入
    login: function () {
      const credentials = {
        email: this.email,
        password: this.password,
      };
      const api = "/api/company-login";
      axios
        .post(api, credentials)
        .then((response) => {
          this.msg = response.data.msg;

          const token = response.data.token;
          const user = response.data.user;

          this.$store.dispatch("login", { token, user });

          alert(this.msg);

          this.$router.push("/finder");
        })
        .catch((err) => {
          this.msg = err.response.data.msg;
          alert(this.msg);
        });
    },
    // //登出
    // logout(){
    //   cookie.removeItem('token');
    //   this.$router.push('/login');
    // }
  },
};
</script>