<template>
  <div class="container-fluid">
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
        <a class="navbar-brand" href="#"
          ><img src="./client/assets/圖片1.png" width="50px"
        /></a>

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
            <router-link class="nav-item nav-link" to="/">找實習</router-link>
            <router-link class="nav-item nav-link" to="/search"
              >履歷模板</router-link
            >
            <router-link class="nav-item nav-link" to="/about"
              >聯絡我們</router-link
            >
            <!-- <a
              class="nav-item nav-link"
              data-toggle="tab"
              href="./views/about.vue"
              >履歷模板</a
            > -->
          </div>
          <div class="navbar-nav nav-tabs ml-auto">
            <a
              class="nav-item nav-link"
              data-toggle="tab"
              href="./client/views/login.vue"
              >企業登入 <span class="glyphicon glyphicon-log-in"></span
            ></a>
            <a
              class="nav-item nav-link"
              data-toggle="tab"
              href="./client/views/login.vue"
              >學生登入</a
            >
          </div>
        </div>
      </nav>

      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#navbar {
  position: fixed;
  width: 100%;
  z-index: 1;
}

#nav {
  padding: 80px;
}

/*
#navbarNavAltMarkup	{
	background: #57d4ebe3;
}
*/

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
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

.photo {
  float: left;
}
.intro {
  font-size: 20px;
  float: left;
  height: 100px;
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
.ppp {
  height: 160px;
}
.ppp2 {
  height: 40px;
}
</style>
