<!-- 公司評論 -->
<template>
  <div style="padding: 100px 100px 10px">
    <Business_info_user :cp_info="cp_info" />

    <div class="row">
      <div class="col-lg-9 text-left">
        <!-- 實習貼文 -->
        <!--eslint-disable-next-line-->
        <div></div>
      </div>
    </div>

    <div class="row">
      <div class="input-group mt-3 mb-3 ">
        <div class="col-lg-1">
          <img src="../assets/圖片5.png" alt="internsandwich" height="100px" />
        </div>

        <input
          v-if="!isLoggedIn"
          disabled
          type="text"
          class="form-control"
          placeholder="登入以查看評論......"
        />
        <select
          v-else
          v-model="selected_title"
          style="height:80px;width: 240px; cursor: pointer; border-color: #bcddfc"
        >
          <option value="" disabled>選擇評論職位</option>
          <!--eslint-disable-next-line-->
          <option v-for="intern in intern_info" v-bind:value="intern.title">
            {{ intern.title }}
          </option>
        </select>

        <textarea
          style="height: 80px;"
          v-if="isLoggedIn"
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
          style="height: 80px;"
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

      <div class="col-lg-3"></div>
    </div>

    <div
      v-for="(comment, index) in comment_info.slice(
        pageStart,
        pageStart + countOfPage
      )"
      :key="comment.ID"
    >
      <div class="row">
        <div class="col-lg-1">
          <img src="../assets/圖片2.png" alt="internsandwich" height="80px" />
        </div>
        <div class="col-lg-2" style="text-align: center; line-height: 80px">
          <p style="font-size: 20px">{{ comment.intern_title }}</p>
        </div>
        <!-- <p style="font-size: 15px">{{ comment.U_ID }}</p> -->
        <div class="col-lg-6 text-left">
          <div
            class="panel panel-default"
            v-show="comment.ID != temp_comment.ID || !editing"
          >
            <div class="panel-body">
              <div class="ppp-intern">
                <p
                  style="
                    font-size: 20px;
                    height: 50px;
                    display: table-cell;
                    vertical-align: middle;
                  "
                >
                  {{ comment.context }}
                </p>
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
// import the component
import Business_info_user from "../components/Business_info_user.vue";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  name: "BusinessComments",
  components: {
    Business_info_user,
  },
  data() {
    return {
      selected_title: "",
      cp_info: null,
      cp_id: null,
      intern_info: null,
      countOfPage: 15,
      currPage: 1,
      user_info: "",
      user_id: "",
      comment_info: "",
      myNewComment: "",
      editing: false,
      temp_comment: "",
    };
  },
  computed: {
    //設定頁首
    pageStart: function () {
      return (this.currPage - 1) * this.countOfPage;
    },
    //設定總頁數
    totalPage: function () {
      return Math.ceil(this.comment_info.length / this.countOfPage);
    },
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
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
    //評論排序由新到舊
    sortNewtoOld: function () {
      this.comment_info.sort(function (p1, p2) {
        return p2.ID - p1.ID;
      });
    },
    //評論排序由舊到新
    sortOldtoNew: function () {
      this.comment_info.sort(function (p1, p2) {
        return p1.ID - p2.ID;
      });
    },
    //顯示評論
    showcomments: function () {
      //axios獲取評論資料
      var api = "/api/company/" + this.cp_id + "/show-comments";
      axios
        .get(api)
        .then((response) => {
          this.comment_info = response.data;

          //評論排序由新到舊
          this.sortNewtoOld();
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
          cp_id: this.cp_id,
          u_id: this.user_id,
          context: this.myNewComment,
          intern_title: this.selected_title,
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
    //檢查是否為自己的評論
    isMycomment: function (u_id) {
      return u_id === this.user_id;
    },
  },

  created() {
    this.user_info = this.$store.getters.getUser;
    this.user_id = this.user_info["ID"];
    this.cp_id = this.$route.params.cp_id;

    //取得公司資訊
    var api = "/api/company/" + this.cp_id;

    axios
      .get(api)
      .then((response) => {
        this.cp_info = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    if (this.isLoggedIn) {
      this.showcomments();

      api = "/api/company/" + this.cp_id + "/cp_posts";
      axios
        .get(api)
        .then((response) => {
          this.intern_info = response.data;
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
