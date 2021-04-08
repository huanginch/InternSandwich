<!-- 我的收藏 -->
<template>
  <div style="padding: 100px 100px 10px">
    <form class="bs-example bs-example-form" role="form">
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
                      <strong>黃小明</strong>
                    </p>
                    <div class="row">
                      <div class="col-lg-3">
                        <p style="font-size: 20px">姓名：OOO</p>
                        <p style="font-size: 20px">性別：台北、台中</p>
                        <p style="font-size: 20px">生日：最低時薪160</p>
                      </div>
                      <div class="col-lg-3">
                        <p style="font-size: 20px">學校：設計業、建築業</p>
                        <p style="font-size: 20px">電話：台北、台中</p>
                        <p style="font-size: 20px">email：最低時薪160</p>
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
        <div id="Home" v-for="(posts, index) in searchResult.slice(pageStart, pageStart + countOfPage)" class="posts" >
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
                  <h2 style="font-size: 25px" align="left">{{ posts.link }}</h2>
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
                    {{ posts.requirement }}
                  </p>
                </div>
              </div>
              <div class="ppp2_btn">
                <div class="row float-right">
                  <a
                    href="#"
                    class="btn"
                    style="width: 150px; height: 50px; font-size: 20px"
                    >立即應徵</a
                  >
                  <a
                    href="#"
                    class="btn"
                    style="width: 150px; height: 50px; font-size: 20px"
                    >取消收藏</a
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
      fb_info: null,
      searchResult: null,
      countOfPage: 5,
      currPage: 1,
      select_school: "",
      select_grade: "",
      select_expertise: "",
      keyword: "",
      schools: [
        { text: "抬青椒承", value: "抬青椒承" },
        { text: "忠自倍", value: "忠自倍" },
        { text: "地名大學", value: "地名大學" },
        { text: "其他", value: "其他" },
      ],
      grades: [
        { text: "高中", value: "高中" },
        { text: "大學", value: "大學" },
        { text: "研究所", value: "研究所" },
        { text: "其他", value: "其他" },
      ],
      expertises: [
        { text: "科技", value: "科技" },
        { text: "設計", value: "設計" },
        { text: "餐飲", value: "餐飲" },
      ],
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
  },
  methods: {
    //依照關鍵字搜尋貼文
    filteredPosts: function () {
      // 因為 JavaScript 的 filter 有分大小寫，
      // 所以這裡將 keyword 與 fb_info[n].cp_name 通通轉小寫方便比對。
      var keyword = this.keyword.toLowerCase();

      // 如果 filter_name 有內容，回傳過濾後的資料，否則將原本的 fb_posts 回傳。
      if (this.keyword.trim() !== "") {
        this.searchResult = this.fb_info.filter(function (d) {
          return d.cp_name.toLowerCase().indexOf(keyword) > -1;
        });
      } else {
        this.searchResult = this.fb_info;
      }
    },
    //設定當前頁面
    setPage: function (idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currPage = idx;
    },
  },
  created() {
    //axios獲取後臺資料
    const api = "/api/posts";
    //const params = { userId: 2 };
    axios
      .get(api)
      .then((response) => {
        this.fb_info = response.data;
        this.searchResult = response.data;
      })
      .catch(function (error) {
        // 請求失敗處理
        console.log(error);
      });
  },
};
</script>