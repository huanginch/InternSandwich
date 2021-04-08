<!-- 實習生註冊 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br />
    <h3>實習生註冊</h3>
    <br />

    <router-link class="text-right" to="/register_business">企業註冊</router-link>
    <!-- <button
      type="btn"
      value="企業註冊"
      class="btn"
      style="width: 200px; height: 60px; font-size: 30px"
    /> -->
    <div class="panel panel-default col-md-6 offset-3">
      <div class="panel-body" style="padding: 50px">
        <form>
          <!-- <p v-if="msg">{{ msg }}</p> -->
          <div class="form-group col-md-12 text-left">
            <label>姓名</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              placeholder="請輸入真實姓名"
            />
            <br />
            <label>性別</label>
            <br/>
            <input v-model="gender" type="radio" value=0 /><label>男</label>
            <input v-model="gender" type="radio" value=1 /><label>女</label>

            <br />
            <label>生日</label>
            <input
              v-model="birth"
              type="text"
              class="form-control"
              placeholder="範例: xxxx-xx-xx"
            />
            <br />
            <label>身分證字號</label>
            <input
              v-model="id_card"
              type="text"
              class="form-control"
              placeholder="範例: A123456789"
            />
            <br />
            <label>學校</label>
            <input
              v-model="school"
              type="text"
              class="form-control"
              placeholder="範例:OO大學"
            />
            <!-- <label for="password">生 日</label>
            <input
              type="password"
              class="form-control"
              placeholder="範例:199910110"
              id="password"
              name="password"
            />
            <br />
            <label for="password">身分證字號</label>
            <input
              type="password"
              class="form-control"
              placeholder="範例:A123456789"
              id="password"
              name="password"
            />
            <br />
            <label for="password">就讀學校</label>
            <input
              type="password"
              class="form-control"
              placeholder="範例:OO大學"
              id="password"
              name="password"
            /> -->
            <br />
            <label>電話</label>
            <input
              v-model="phone"
              class="form-control"
              placeholder="範例:0987654321"
            />
            <br />
            <label>Email</label>
            <input
              v-model="email"
              class="form-control"
              placeholder="範例:oooo@gmail.com"
            />
            <br />
            <label>密碼</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="請輸入8位以上字元或數字"
            />
            <br />
            <label>確認密碼</label>
            <input
              v-model="password_repeat"
              type="password"
              class="form-control"
              placeholder="請確認兩次密碼輸入相同"
            />
          </div>
          <br />
          <div class="checkbox">
            <label class="form-check-label" for="gridCheck">
              <input class="form-check-input" type="checkbox" v-model="checked"/>
              同意服務條款
            </label>
            <br /><br />
            <!--eslint-disable-next-line-->
            <button class="btn" @click="singup">
              <span class="glyphicon glyphicon-search"></span>立即註冊
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
<script>
import axios from "../js/axios.js";
import qs from 'qs';

  export default {
    name:"Register",
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
      };
    },
    methods: {
      //註冊
      singup: function() {
        if(!this.checked){
          alert("請同意服務條款")
        }
        else{
          const credentials = {
            name:this.name,
            gender:this.gender,
            birth:this.birth,
            id_card:this.id_card,
            school:this.school,
            phone:this.phone,
            email:this.email,
            //account: this.account,
            password: this.password,
            password_repeat: this.password_repeat
          };
          const api = "/api/user-register"

          axios
            .post(api,  qs.stringify(credentials))
            .then(response => {
              this.msg = response.data.msg
              alert(this.msg)
              this.$router.push('/')
            })
            .catch(err =>{
              this.msg = err.response.data.msg;
              alert(this.msg)
            })
        }
      },
    } 
  }
  </script>