<!-- 我的收藏 -->
<template>
  <div style="padding: 100px 100px 10px">
    <form class="bs-example bs-example-form" role="form" v-bind="user_info">
      <div class="row align-items-center">
        <div class="col-lg-12 text-left">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="ppp-intern1">
                <div class="row">
                  <div class="col-lg-2">
                    <img
                      src="../assets/圖片4.png"
                      alt="internsandwich"
                      height="150px"
                    />
                  </div>
                  <div class="col-lg-10">
                    <p style="font-size: 40px">
                      <strong>{{user_info.name}}</strong>
                    </p>
                    <div class="row">
                      <div class="col-lg-3">
                        <p style="font-size: 20px">性別：{{user_info.gender}}</p>
                        <p style="font-size: 20px">生日：{{user_info.birth}}</p>
                        <p style="font-size: 20px">身分證字號：{{user_info.id_card}}</p>
                      </div>
                      <div class="col-lg-3">
                        <p style="font-size: 20px">學校：{{user_info.school}}</p>
                        <p style="font-size: 20px">電話：{{user_info.phone}}</p>
                        <p style="font-size: 20px">email：{{user_info.email}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="row">
      <div class="col-lg-9">
        <!--eslint-disable-next-line-->
        <div id="Home" v-for="(posts, index) in saved_posts.slice(pageStart, pageStart + countOfPage)" class="posts" >
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="row">
                <div class="col-lg-2">
                  <img
                    src="../assets/圖片1.png"
                    alt="internsandwich"
                    style="vertical-align: bottom; height: 100px"
                  />
                </div>

                <div class="col-lg-10">
                  <h2 style="font-size: 25px" align="left">{{ posts.title }}</h2>
                  <p style="font-size: 20px" align="left">
                    {{ posts.cp_name }}
                  </p>
                  <p
                    style="
                      font-size: 15px;
                      height: 40px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 3;
                      -webkit-box-orient: vertical;
                    "
                    align="left"
                  >
                    {{ posts.job_desc }}
                  </p>
                </div>
              </div>
              <div class="ppp2_btn">
                <div class="row float-right">
                  <router-link
                    class="btn"
                    style="width: 150px; height: 50px; font-size: 20px"
                    :to="{ name: 'Intern', params: { post_id: posts.id }}"
                    >立即應徵</router-link>
                  <button
                    @click="unsave(posts.id)"
                    class="btn"
                    style="width: 150px; height: 50px; font-size: 20px"
                    >取消收藏</button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 換頁按鈕 -->
    <ul
      class="pagination pagination-sm justify-content-center"
      style="margin: 20px 0"
    >
      <li
        v-bind:class="{ disabled: currPage === 1 }"
        @click.prevent="setPage(currPage - 1)"
      >
        <button class="page-link" href="#">上一頁</button>
      </li>
      <!--eslint-disable-next-line-->
      <li
        v-for="n in totalPage"
        v-bind:class="{ active: currPage === n }"
        @click.prevent="setPage(n)"
      >
        <button class="page-link" href="#">{{ n }}</button>
      </li>
      <li
        v-bind:class="{ disabled: currPage === totalPage }"
        @click.prevent="setPage(currPage + 1)"
      >
        <button class="page-link" href="#">下一頁</button>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "../js/axios.js";
//import Searchbar from "../components/Searchbar.vue";

export default {
  name: "Home",
  /*componemts:{
    Searchbar
  },*/
  data() {
    return {
      saved_posts: [],
      user_info:null,
      countOfPage: 5,
      currPage: 1,
    };
  },
  computed: {
    //設定頁首
    pageStart: function () {
      return (this.currPage - 1) * this.countOfPage;
    },
    //設定總頁數
    totalPage: function () {
      return Math.ceil(this.saved_posts.length / this.countOfPage);
    },
  },
  methods: {
    //設定當前頁面
    setPage: function (idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currPage = idx;
    },
    setBirth: function(){
    },
    //取消收藏
    unsave: function(p_id){
      const api = "/api/unsave"
      const u_id = this.user_info.ID
      var params = {
        u_id: u_id,
        p_id: p_id
      }
      axios
      .delete(api,{data:params})
      .then(response =>{
        alert(response.data.msg)
        var index = this.saved_posts.map(function(items, index){
          return items.p_id;
        }).indexOf(p_id)
        this.saved_posts.splice(index,1)
      })
      .catch(error =>{
        console.log(error)
      })
    },
  },
  created() {
    //從store取得使用者資料
    this.user_info = this.$store.getters.getUser
    const u_id = this.user_info.ID
    const api = "/api/show-save";
    const params = { u_id: u_id };
    

    //axios取得後台收藏貼文資料
    axios
      .get(api,{params})
      .then((response) => {
        this.saved_posts = response.data;
      })
      .catch(function (error) {
        // 請求失敗處理
        console.log(error);
      });
  },
};
</script>