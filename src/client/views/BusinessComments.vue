<!-- 公司評論 -->
<template>
  <div style="padding: 100px 100px 10px">
    <Business_info_user :cp_info="cp_info" />

    <div class="row">
      <div class="col-lg-9 text-left">
        <!-- 實習貼文 -->
        <!--eslint-disable-next-line-->
        <div id="Home" v-for="(posts, index) in searchResult.slice(pageStart,pageStart + countOfPage)" class="posts">
        </div>
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
