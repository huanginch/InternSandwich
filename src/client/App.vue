<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
      <div class="navbar-brand" to="#"
        ><img src="./assets/圖片1-1.png" height="60px"
      /></div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav nav-tabs">
          <router-link
            class="nav-item nav-link router-link-exact-active"
            to="/"
            v-if="!business_isLoggedIn"
            ><strong>找實習</strong></router-link
          >
          <router-link
            class="nav-item nav-link"
            to="/save"
            v-if="user_isLoggedIn"
            ><strong>我的收藏</strong></router-link
          >
          <router-link
            class="nav-item nav-link"
            to="/resume"
            v-if="user_isLoggedIn"
            ><strong>履歷模板</strong></router-link
          >
          <router-link
            class="nav-item nav-link"
            to="/finder"
            v-if="business_isLoggedIn"
            ><strong>找實習生</strong></router-link
          >
          <router-link
            class="nav-item nav-link"
            to="/post"
            v-if="business_isLoggedIn"
            ><strong>刊登實習</strong></router-link
          >
          <router-link
            class="nav-item nav-link"
            to="/mailbox"
            v-if="business_isLoggedIn"
            ><strong>履歷信箱</strong></router-link
          >
          <!-- <a
              class="nav-item nav-link"
              data-toggle="tab"
              href="./views/about.vue"
              >履歷模板</a
            > -->
        </div>
        <div class="navbar-nav nav-tabs ml-auto">
          <router-link
            class="nav-item nav-link"
            data-toggle="tab"
            to="/login"
            v-if="!(user_isLoggedIn || business_isLoggedIn)"
            >登入<span class="glyphicon glyphicon-log-in"></span
          ></router-link>
          <router-link
            class="nav-item nav-link"
            data-toggle="tab"
            to="/register"
            v-if="!(user_isLoggedIn || business_isLoggedIn)"
            >註冊<span class="glyphicon glyphicon-log-in"></span
          ></router-link>
          <button class="btn" @click.prevent="logout" v-else>登出</button>
          <p></p>
        </div>
      </div>
    </nav>

    <router-view />
    <div class="footer-dark">
    <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>這裡是公司介紹這裡是公司介紹這裡是公司介紹這裡是公司介紹這裡是公司介紹這裡是公司介紹這裡是公司介紹這裡是公司介紹這裡是公司介紹這裡是公司介紹這裡是公司介紹.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Company Name © 2018</p>
            </div>
        </footer>
    </div>
  </div>
  
</template>

<script>
export default {
  computed: {
    user_isLoggedIn: function () {
      return this.$store.getters.getUser.school;
    },
    business_isLoggedIn: function () {
      return this.$store.getters.getUser.address;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: #f8f9fa; */
  /* background-color: #ebf2ff54; */
  /* background-color: #dce2ec54; */
  /* background-color: #bcddfc85; */
  background-color: #bcddfc71;
  /* background-color:rgba(235, 204, 125, 0.443); */
}
#navbar {
  position: fixed;
  width: 100%;
  z-index: 1;
  /* background-color: #f8f9fa; */
  /* background-color:#bedae0; */
  /* background-color: #57d5eb; */
  /* background-color:#b8dcfd; 這是大家覺得ok的*/
  background-color:#aedaf6;
  /* background-color:rgb(235, 204, 125); */
}

#nav {
  padding: 80px;
}

.container {
  width: 500px;
  height: 50px;
  margin: 100px auto;
}
.parent {
  width: 100%;
  height: 42px;
  top: 4px;
  position: relative;
}
.parent > input:first-of-type {
  /*輸入框高度設定為40px, border佔據2px，總高度為42px*/
  width: 380px;
  height: 40px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
}
.parent > input:first-of-type:focus {
  border: 1px solid #317ef3;
  padding-left: 10px;
}
.parent > input:last-of-type {
  /*button按鈕border並不佔據外圍大小，設定高度42px*/
  width: 100px;
  height: 44px;
  position: absolute;
  background: #317ef3;
  border: 1px solid #317ef3;
  color: #fff;
  font-size: 16px;
  outline: none;
}
.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: "Glyphicons Halflings";
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -moz-osx-font-smoothing: grayscale;
}
.ppp2_btn {
  height: 40px;
}

.footer-dark {
  padding:50px 0;
  color:#f0f9ff;
  background-color:#282d32;
}

.footer-dark h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer-dark ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-dark ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.6;
}

.footer-dark ul a:hover {
  opacity:0.8;
}

@media (max-width:767px) {
  .footer-dark .item:not(.social) {
    text-align:center;
    padding-bottom:20px;
  }
}

.footer-dark .item.text {
  margin-bottom:36px;
}

@media (max-width:767px) {
  .footer-dark .item.text {
    margin-bottom:0;
  }
}

.footer-dark .item.text p {
  opacity:0.6;
  margin-bottom:0;
}

.footer-dark .item.social {
  text-align:center;
}

@media (max-width:991px) {
  .footer-dark .item.social {
    text-align:center;
    margin-top:20px;
  }
}

.footer-dark .item.social > a {
  font-size:20px;
  width:36px;
  height:36px;
  line-height:36px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  box-shadow:0 0 0 1px rgba(255,255,255,0.4);
  margin:0 8px;
  color:#fff;
  opacity:0.75;
}

.footer-dark .item.social > a:hover {
  opacity:0.9;
}

.footer-dark .copyright {
  text-align:center;
  padding-top:24px;
  opacity:0.3;
  font-size:13px;
  margin-bottom:0;
}

</style>
