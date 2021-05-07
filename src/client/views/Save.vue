<!-- 我的收藏 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br>
    <form class="bs-example bs-example-form" role="form" v-bind="user_info">
      <div class="row align-items-center">
        <div class="col-lg-12 text-left">
          <!-- 使用者資料 -->
          <div class="panel panel-default">
            <div class="panel-body" style="border-style: ridge">
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
                      <strong>{{ user_info.name }}</strong>
                    </p>
                    <div class="row">
                      <div class="col-lg-4">
                        <p style="font-size: 20px">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg><strong>&nbsp;性別：</strong>{{ user_info.gender }}
                        </p>
                        <p style="font-size: 20px">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg><strong>&nbsp;生日：</strong>{{ user_info.birth }}
                        </p>
                        <p style="font-size: 20px">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg><strong>&nbsp;身分證字號：</strong>{{ user_info.id_card }}
                        </p>
                      </div>
                      <div class="col-lg-4">
                        <p style="font-size: 20px">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg><strong>&nbsp;學校：</strong>{{ user_info.school }}
                        </p>
                        <p style="font-size: 20px">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg><strong>&nbsp;電話：</strong>{{ user_info.phone }}
                        </p>
                        <p style="font-size: 20px">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg><strong>&nbsp;email：</strong>{{ user_info.email }}
                        </p>
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
    <!-- 已收藏公司貼文 -->
    <div class="row">
      <div class="col-lg-9">
        <!--eslint-disable-next-line-->
        <div v-for="(posts, index) in cp_saved_posts.slice(pageStart, pageStart + countOfPage)" class="posts" >
          <div class="panel panel-default text-left">
            <div class="panel-body" style="border-style: ridge">
              <div class="row">
                <div class="col-lg-2">
                  <img
                    src="../assets/圖片1.png"
                    alt="internsandwich"
                    style="vertical-align: bottom; height: 100px"
                  />
                </div>

                <div class="col-lg-10">
                  <span style="font-size: 30px ;height: 40px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;" align="left">
                    <strong>{{ posts.title }}</strong>
                  </span>
                  <router-link :to="{ name: 'BusinessPosts', params: { cp_id: posts.cp_id } }">
                  <p style="font-size: 20px;line-height:50px" align="left">
                    {{ posts.cp_name }}
                  </p></router-link>
                  <p
                    style="
                      font-size: 15px;
                      height: 70px;
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
                  <a
                    @click="Applynow(posts.id)"
                    class="btn"
                    style="width: 150px; height: 50px; font-size: 20px">  
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      fill="currentColor"
                      class="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                      /></svg>&nbsp;立即應徵</a>
                  <router-link
                    class="btn"
                    style="width: 200px; height: 50px; font-size: 20px"
                    :to="{ name: 'Intern_Business', params: { post_id: posts.id } }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      fill="currentColor"
                      class="bi bi-chat-square-text"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                      />
                      <path
                        d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                    查看更多
                  </router-link>

                  <button
                    @click="unsave(posts.id)"
                    class="btn"
                    style="width: 200px; height: 50px; font-size: 20px"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      fill="currentColor"
                      class="bi bi-suit-heart-fill"
                      color="red"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                      /></svg>&nbsp;取消收藏
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<!-- 已收藏爬蟲貼文 -->
    <div class="row">
      <div class="col-lg-9">
        <!--eslint-disable-next-line-->
        <div id="Save" v-for="(posts, index) in saved_posts.slice(pageStart, pageStart + countOfPage)" class="posts" >
          <div class="panel panel-default text-left">
            <div class="panel-body" style="border-style: ridge">
              <div class="row">
                <div class="col-lg-2">
                  <img
                    src="../assets/圖片1.png"
                    alt="internsandwich"
                    style="vertical-align: bottom; height: 100px"
                  />
                </div>

                <div class="col-lg-10">
                  <span style="font-size: 30px ;height: 40px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;" align="left">
                    <strong>{{ posts.title }}</strong>
                  </span>
                  <p style="font-size: 20px;line-height:50px" align="left">
                    {{ posts.cp_name }}
                  </p>
                  <p
                    style="
                      font-size: 15px;
                      height: 70px;
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
                  <a
                    @click="toLink(posts.source, posts.link)"
                    class="btn"
                    style="width: 150px; height: 50px; font-size: 20px"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      fill="currentColor"
                      class="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                      /></svg>&nbsp;立即應徵</a>
                  <router-link
                    class="btn"
                    style="width: 200px; height: 50px; font-size: 20px"
                    :to="{ name: 'Intern', params: { post_id: posts.id } }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      fill="currentColor"
                      class="bi bi-chat-square-text"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                      />
                      <path
                        d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                    查看更多
                  </router-link>

                  <button
                    @click="unsave(posts.id)"
                    class="btn"
                    style="width: 200px; height: 50px; font-size: 20px"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      fill="currentColor"
                      class="bi bi-suit-heart-fill"
                      color="red"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                      /></svg>&nbsp;取消收藏
                  </button>
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
  name: "Save",
  /*componemts:{
    Searchbar
  },*/
  data() {
    return {
      cp_saved_posts:[],
      saved_posts: [],
      user_info: null,
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
      return Math.ceil(this.saved_posts.length + this.cp_saved_posts.length/ this.countOfPage);
    },
  },
  methods: {
    //外部超連結跳轉
    toLink: function(source, link){
      if(source === 0){
        link = "https://www.facebook.com/" + link
      }
      else if(source === 1 ){
        link = "https://www.yourator.co" + link
      }

      window.location =  link
      
    },
    //設定當前頁面
    setPage: function (idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currPage = idx;
    },
    setBirth: function () {},

    //取消收藏(爬蟲)
    unsave: function (p_id) {
      const api = "/api/unsave";
      const u_id = this.user_info.ID;
      var params = {
        u_id: u_id,
        p_id: p_id,
      };
      axios
        .delete(api, { data: params })
        .then((response) => {
          alert(response.data.msg);
          var index = this.saved_posts
            .map(function (items, index) {
              return items.p_id;
            })
            .indexOf(p_id);
          this.saved_posts.splice(index, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //取消收藏(公司)
    unsave: function (p_id) {
      const api = "/api/company/unsave";
      const u_id = this.user_info.ID;
      var params = {
        u_id: u_id,
        p_id: p_id,
      };
      axios
        .delete(api, { data: params })
        .then((response) => {
          alert(response.data.msg);
          var index = this.cp_saved_posts
            .map(function (items, index) {
              return items.p_id;
            })
            .indexOf(p_id);
          this.cp_saved_posts.splice(index, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //立即應徵
    Applynow: function(id){
      this.$router.push("/intern_mails/"+ id)
    }
  },
  created() {
    //從store取得使用者資料
    this.user_info = this.$store.getters.getUser;
    const u_id = this.user_info.ID;

    //取得後台收藏貼文資料(爬蟲)
    var api = "/api/show-save";
    var params = { u_id: u_id };
    axios
      .get(api, { params })
      .then((response) => {
        this.saved_posts = response.data;
      })
      .catch(function (error) {
        // 請求失敗處理
        console.log(error);
      });

    //取得後台收藏貼文資料(公司) 
    var api = "/api/show-cp_save";
    params = { u_id: u_id };

    axios
      .get(api, { params })
      .then((response) => {
        this.cp_saved_posts = response.data;
      })
      .catch(function (error) {
        // 請求失敗處理
        console.log(error);
      });
  },
};
</script>
<style>
  .routerlink {
  color: black;
}
</style>