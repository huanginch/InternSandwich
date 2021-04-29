<!-- 公司評論 -->
<template>
  <div style="padding: 100px 100px 10px">
    <Business_info_user :cp_info="cp_info" />

    <div class="row">
      <div class="col-lg-9 text-left">
        <!-- 實習貼文 -->
        <!--eslint-disable-next-line-->
        <div id="Home" v-for="(posts, index) in searchResult.slice(pageStart,pageStart + countOfPage)" class="posts">
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
                    /></svg
                  >&nbsp;收藏次數：5
                </div>

                <div class="row float-right">
                  <router-link
                    class="btn"
                    style="width: 200px; height: 50px; font-size: 20px"
                    :to="{ name: 'Intern', params: { post_id: posts.id } }"
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

    <div class="row">
      <div class="col-lg-1">
        <img src="../assets/圖片5.png" alt="internsandwich" height="120px" />
      </div>
      <div class="col-lg-8 text-left">
        <div class="input-group mt-3 mb-3 input-group-lg">
          <input
            v-if="!isLoggedIn"
            disabled
            type="text"
            class="form-control"
            placeholder="登入以查看評論......"
          />
          <textarea
            v-else
            v-model="myNewComment"
            class="form-control"
            placeholder="留下評論......"
            @keyup.enter="pushcomment"
          ></textarea>
          <!-- <a v-else v-model="myNewComment" type="text" class="form-control">{{
              myNewComment
            }}</a> -->
          <button
            class="btn"
            type="button"
            @click="pushcomment"
            v-if="isLoggedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              fill="currentColor"
              class="bi bi-cursor-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
              />
            </svg>
            發佈評論
          </button>
          <div class="input-group-btn"></div>
        </div>
      </div>
      <div class="col-lg-3"></div>
    </div>
    <br />
    <div v-for="(comment, index) in comment_info" :key="comment.ID">
      <div class="row">
        <div class="col-lg-1">
          <img src="../assets/圖片2.png" alt="internsandwich" height="75px" />
        </div>
        <!-- <p style="font-size: 15px">{{ comment.U_ID }}</p> -->
        <div class="col-lg-6 text-left">
          <div
            class="panel panel-default"
            v-show="comment.ID != temp_comment.ID || !editing"
          >
            <div class="panel-body">
              <div class="ppp-intern">
                <p style="font-size: 20px">{{ comment.context }}</p>
              </div>
            </div>
          </div>
          <div class="input-group mt-3 mb-3">
            <textarea
              v-show="comment.ID === temp_comment.ID && editing"
              v-model="comment.context"
              class="form-control"
            ></textarea>

            <button
              class="btn"
              type="button"
              style="font-size: 20px"
              @click="finishedit"
              v-show="comment.ID === temp_comment.ID && editing"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                />
              </svg>
              完成
            </button>
            <button
              class="btn"
              type="button"
              style="font-size: 20px"
              @click="canceledit(index)"
              v-show="comment.ID === temp_comment.ID && editing"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                />
              </svg>
              取消
            </button>
            <div class="input-group-btn"></div>
          </div>
        </div>

        <button
          class="btn"
          type="button"
          style="width: 107px; height: 80px; font-size: 20px"
          @click="editcomment(comment)"
          v-show="isMycomment(comment.U_ID) && !editing"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
            />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
          編輯
        </button>
        <button
          class="btn"
          type="button"
          style="width: 107px; height: 80px; font-size: 20px"
          @click="deletecomment(comment.ID)"
          v-show="isMycomment(comment.U_ID) && !editing"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
            />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
          刪除
        </button>
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
  name: "Home",
  components: {
    RecommendPost,
    Treeselect,
    Business_info_user,
  },
  data() {
    return {
      top5_post: null,
      intern_info: null,
      searchResult: null,
      countOfPage: 15,
      currPage: 1,
      select_jobclass: null,
      select_area: null,
      intern_sort: "",
      keyword: "",
      user_info: "",
      user_id: "",
      comment_info: "",
      myNewComment: "",
      editing: false,
      temp_comment: "",
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
      return Math.ceil(this.searchResult.length / this.countOfPage);
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
    //依照關鍵字搜尋貼文
    filteredPosts: function () {
      // 因為 JavaScript 的 filter 有分大小寫，
      // 所以這裡將 keyword 與 intern_info[n].cp_name 通通轉小寫方便比對。
      var keyword = this.keyword.toLowerCase();
      var select_jobclass = this.select_jobclass;
      var select_area = this.select_area;

      if (select_area === null || select_area === undefined) {
        select_area = "";
      }
      if (select_jobclass === null || select_jobclass === undefined) {
        select_jobclass = "";
      }
      // 如果 filter_name 有內容，回傳過濾後的資料，否則將原本的 fb_posts 回傳。
      if (
        this.keyword.trim() !== "" ||
        select_jobclass !== "" ||
        select_area !== ""
      ) {
        this.searchResult = this.intern_info.filter(function (d) {
          return d.title.toLowerCase().indexOf(keyword) > -1; //過濾關鍵字
        });
        console.log(this.keyword.trim() !== "");
        console.log(select_jobclass);
        console.log(select_area);

        this.searchResult = this.searchResult.filter(function (d) {
          return d.title.toLowerCase().indexOf(select_jobclass) > -1; //過濾類別
        });

        this.searchResult = this.searchResult.filter(function (d) {
          return d.title.toLowerCase().indexOf(select_area) > -1; //過濾地區
        });
      } else {
        this.searchResult = this.intern_info;
      }
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
      this.searchResult.sort(function (p1, p2) {
        return p2.id - p1.id;
      });
    },
    //貼文排序由舊到新
    sortOldtoNew: function () {
      this.searchResult.sort(function (p1, p2) {
        return p1.id - p2.id;
      });
    },
    //觀看次數排序由多到少
    sortPopularity: function () {
      this.searchResult.sort(function (p1, p2) {
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
  //顯示評論
  showcomments: function () {
    var api = "/api/show-comments";
    var params = {
      p_id: this.post_id,
    };
    axios
      .get(api, { params })
      .then((response) => {
        this.comment_info = response.data;

        //評論排序由新到舊
        this.comment_info.sort(function (p1, p2) {
          return p2.ID - p1.ID;
        });
        // //如果登入就找到自己的評論
        // if (this.isLoggedIn) {
        //   this.myNewComment = this.comment_info.filter(
        //     (result) => result.U_ID === this.user_id
        //   );

        //   //找到就顯示有評論
        //   if (this.myNewComment) {
        //     this.myNewComment = this.myNewComment[0]["context"];
        //   }

        //   this.comment_info = this.comment_info.filter(
        //     (result) => result.U_ID != this.user_id
        //   );
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  //留下評論
  pushcomment: function () {
    if (this.myNewComment) {
      //存入資料庫
      var api = "/api/comment";
      var params = {
        p_id: this.post_id,
        u_id: this.user_id,
        context: this.myNewComment,
      };

      axios
        .post(api, params)
        .then((response) => {
          //即時更新留言
          this.showcomments();
          this.myNewComment = "";
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },

  //編輯評論
  editcomment: function (comment) {
    this.editing = true;
    this.temp_comment = comment;
  },

  //完成編輯評論
  finishedit: function () {
    this.editing = false;

    //存入資料庫
    var api = "/api/modify-comment";
    var params = {
      ID: this.temp_comment.ID,
      context: this.temp_comment.context,
    };

    axios
      .patch(api, params)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  },

  //取消編輯評論
  canceledit: function (index) {
    this.comment_info[index]["context"] = this.temp_comment.context;
    this.editing = false;
  },

  //刪除評論
  deletecomment: function (ID) {
    //this.comment_info.splice(ID,1)

    var api = "/api/delete-comment";
    var params = { ID: ID };
    axios
      .delete(api, { data: params })
      .then((response) => {
        //即時更新留言
        this.showcomments();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  isMycomment: function (u_id) {
    return u_id === this.user_id;
  },

  created() {
    this.user_info = this.$store.getters.getUser;
    this.user_id = this.user_info["ID"];
    this.post_id = this.$route.params.post_id;

    //axios獲取後臺資料
    var api = "/api/posts";
    //const params = { userId: 2 };
    axios
      .get(api)
      .then((response) => {
        this.intern_info = response.data;
        this.searchResult = response.data;
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
    api = "/api/show-top5";
    axios.get(api).then((response) => {
      this.top5_post = response.data;
    });
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
