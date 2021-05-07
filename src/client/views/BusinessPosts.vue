<!-- 公司評論 -->
<template>
  <div style="padding: 100px 100px 10px">
    <Business_info_user :cp_info="cp_info" />

    <div class="row">
      <div class="col-lg-9 text-left">
        <!-- 實習貼文 -->
        <!--eslint-disable-next-line-->
        <div id="Home" v-for="(posts, index) in intern_info.slice(pageStart,pageStart + countOfPage)" class="posts">
          <div class="panel panel-default text-left">
            <div class="panel-body" style="border-style: ridge">
              <!-- ridge groove inset outset -->
              <!-- <router-link class="nav-item nav-link" :to="{ name: 'Intern', params: { post_id: posts.id }}"
            @click.native="addcounter(posts.id, posts.counter)"> -->
              <div class="row">
                <div class="col-lg-2">
                  <img
                    src="../assets/圖片1.png"
                    alt="internsandwich"
                    style="vertical-align: bottom; height: 100px"
                  />
                </div>
                <div class="col-lg-10">
                  <div class="row">
                    <div class="col-lg-9">
                      <p
                        style="
                          font-size: 30px;
                          height: 40px;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: -webkit-box;
                        "
                        align="left"
                      >
                        <strong>{{ posts.title }}</strong>
                      </p>
                    </div>
                    <div class="col-lg-3">
                      <p
                        style="
                          font-size: 15px;
                          text-align: center;
                          line-height: 40px;
                        "
                        align="center"
                      >
                        發佈時間:2020-01-09
                      </p>
                    </div>
                  </div>
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
                <div
                  class="float-left"
                  style="
                    font-size: 20px;
                    color: grey;
                    padding-top: 12px;
                    padding-left: 5px;
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="32"
                    fill="currentColor"
                    class="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path
                      d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                    />
                  </svg>
                  觀看次數: {{ posts.counter }}&nbsp;&nbsp;

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="22"
                    fill="currentColor"
                    class="bi bi-suit-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                    /></svg>&nbsp;收藏次數：5
                </div>

                <div class="row float-right">
                  <router-link
                    class="btn"
                    style="width: 200px; height: 50px; font-size: 20px"
                    :to="{ name: 'Intern_Business', params: { post_id: posts.id } }"
                    @click.native="addcounter(posts.id, posts.counter)"
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
                  <div
                    v-bind:class="{
                      hidden: saved_posts.indexOf(posts.id) != -1,
                    }"
                  >
                    <button
                      @click="save(posts.id)"
                      class="btn"
                      style="width: 200px; height: 50px; font-size: 20px"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="18"
                        fill="currentColor"
                        class="bi bi-suit-heart"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"
                        />
                      </svg>
                      收藏
                    </button>
                  </div>
                  <div
                    v-bind:class="{
                      hidden: saved_posts.indexOf(posts.id) === -1,
                    }"
                  >
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
                        />
                      </svg>
                      取消收藏
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr border-style="solid" />
      </div>
    </div>

    
  </div>
</template>
<script>
import axios from "../js/axios.js";
import RecommendPost from "../components/RecommendPost.vue";
import Business_info_user from "../components/Business_info_user.vue";
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "BusinessPosts",
  components: {
    RecommendPost,
    Treeselect,
    Business_info_user,
  },
  data() {
    return {
      intern_info: null,
      countOfPage: 15,
      currPage: 1,
      cp_info: [],
      cp_id: "",
      saved_posts: [],
      counter: "",
    };
  },
  computed: {
    //設定頁首
    pageStart: function () {
      return (this.currPage - 1) * this.countOfPage;
    },
    //設定總頁數
    totalPage: function () {
      return Math.ceil(this.intern_info.length / this.countOfPage);
    },
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    //更新觀看次數
    addcounter: function (p_id, counter) {
      counter++;
      var api = "/api/add-counter";
      const params = {
        p_id: p_id,
        counter: counter,
      };
      axios
        .patch(api, params)
        .then((response) => {
          alert(response.data.msg);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    
    //設定當前頁面
    setPage: function (idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currPage = idx;
    },
    //貼文排序由新到舊
    sortNewtoOld: function () {
      this.intern_info.sort(function (p1, p2) {
        return p2.id - p1.id;
      });
    },
    //貼文排序由舊到新
    sortOldtoNew: function () {
      this.intern_info.sort(function (p1, p2) {
        return p1.id - p2.id;
      });
    },
    //觀看次數排序由多到少
    sortPopularity: function () {
      this.intern_info.sort(function (p1, p2) {
        return p2.counter - p1.counter;
      });
    },
    //收藏
    save: function (p_id) {
      if (this.isLoggedIn) {
        const u_id = this.$store.getters.getUser.ID;
        const api = "api/save";
        const params = {
          p_id: p_id,
          u_id: u_id,
        };
        axios
          .post(api, params)
          .then((response) => {
            alert(response.data.msg);
            this.saved_posts.splice(this.saved_posts.length, 0, p_id);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // 沒有登入會導向登入頁面
        alert("您尚未登入");
        this.$router.push("/login");
      }
    },
    //取消收藏
    unsave: function (p_id) {
      const api = "/api/unsave";
      const u_id = this.$store.getters.getUser.ID;
      var params = {
        u_id: u_id,
        p_id: p_id,
      };
      axios
        .delete(api, { data: params })
        .then((response) => {
          alert(response.data.msg);
          var index = this.saved_posts.indexOf(p_id);
          this.saved_posts.splice(index, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
},  
created() {
    
    this.cp_id = this.$route.params.cp_id;

    //取得公司資訊
    var api = "/api/company/";
    
    axios
      .get(api + this.cp_id)
      .then((response) => {
        this.cp_info = response.data;
      })
      .catch(function (error) {
        // 請求失敗處理
        console.log(error);
      });

      //取得公司貼文
      api = "/api/company/"+this.cp_id+"/cp_posts"
      
      axios
      .get(api)
      .then((response) => {
        this.intern_info = response.data;
      })
      .catch(function (error) {
        // 請求失敗處理
        console.log(error);
      });

    if (this.isLoggedIn) {
      api = "/api/show-save";
      var u_id = this.$store.getters.getUser.ID;
      var params = { u_id: u_id };
      axios
        .get(api, { params })
        .then((response) => {
          //saved_posts只存p_id
          this.saved_posts = response.data.map(function (items, index) {
            return items.p_id;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
/*export default({
  name: '#user',
  data () {
    return {
      info: null
    }
  },
  created () {
    const api = 'localhost:3000/api/test'
    axios.get(api)
    .then(response => (this.info = response))
    .catch(function (error) { // 请求失败处理
      console.log(error);
    });
  }
})*/
</script>
<style>
.hidden {
  display: none;
}
#Home a {
  color: black;
}
</style>
