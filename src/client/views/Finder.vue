<!-- 找實習生 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br>
    <!-- Searchbar -->
    <form class="bs-example bs-example-form" role="form">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="input-group mt-3 mb-3">
            <!-- 搜尋欄 -->
            <input
              v-model="keyword"
              type="text"
              placeholder="輸入關鍵字"
              class="form-control"
              @keyup.enter="filteredPosts"
            />
            <!-- 類別關鍵字下拉選單 -->
            <select v-model="select_school" class="btn btn-default">
              <option disabled value="">學校</option>
              <!--eslint-disable-next-line-->
              <option v-for="school in schools" v-bind:value="school.value">
                {{ school.text }}
              </option>
            </select>
            <select v-model="select_grade" class="btn btn-default">
              <option disabled value="">年級</option>
              <!--eslint-disable-next-line-->
              <option v-for="grade in grades" v-bind:value="grade.value">
                {{ grade.text }}
              </option>
            </select>
            <select v-model="select_expertise" class="btn btn-default">
              <option disabled value="">專長</option>
              <!--eslint-disable-next-line-->
              <option
                v-for="expertise in expertises"
                v-bind:value="expertise.value"
              >
                {{ expertise.text }}
              </option>
            </select>
            <!--eslint-disable-next-line-->
            <button class="btn" v-model="keyword" @click="filteredPosts">
              <span class="glyphicon glyphicon-search"></span>搜尋<span
                class="caret"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </form>
    <br />
    <!--實習生與熱門搜尋  -->
    <div class="row">
      <div class="col-lg-9 text-left">
        <!-- 實習生履歷 -->
        <!--eslint-disable-next-line-->
        <div id="Home" v-for="(resume, index) in searchResult.slice(pageStart, pageStart + countOfPage)" class="posts" >
          <div class="panel panel-default">
            <div class="panel-body" style="border-style: ridge">
              <div class="row">
                <div class="col-lg-2">
                  <img
                    src="../assets/圖片2.png"
                    alt="internsandwich"
                    style="vertical-align: bottom; height: 120px"
                  />
                </div>

                <div class="col-lg-10">
                  <h1 style="font-size: 25px" align="left">
                    {{ resume.name }}
                  </h1>
                  <p style="font-size: 20px" align="left">
                    {{ resume.edu_and_exp }}
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
                    {{ resume.skills }}
                  </p>
                </div>
              </div>

              <div class="ppp2_btn">
                <div class="row float-right">
                  <router-link
                    class="btn"
                    style="width: 200px; height: 50px; font-size: 20px"
                    :to="{
                      name: 'Profile',
                      params: { resume_id: resume.ID - 1 },
                    }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20"
                      fill="currentColor"
                      class="bi bi-person-lines-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"
                      />
                    </svg>
                    查看實習生
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--熱門搜尋  -->
      <Recommend title="熱門實習生" :recommend_users="resume_info" />
    </div>

    <br />
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
import Recommend from "../components/RecommendUser.vue";

export default {
  name: "Finder",
  components: {
    Recommend,
  },
  data() {
    return {
      resume_info: [],
      searchResult: "",
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
    //依照關鍵字搜尋實習生
    filteredPosts: function () {
      // 因為 JavaScript 的 filter 有分大小寫，
      // 所以這裡將 keyword 與 fb_info[n].cp_name 通通轉小寫方便比對。
      var keyword = this.keyword.toLowerCase();

      // 如果 filter_name 有內容，回傳過濾後的資料，否則將原本的 fb_posts 回傳。
      if (this.keyword.trim() !== "") {
        this.searchResult = this.resume_info.filter(function (d) {
          return d.edu_and_exp.toLowerCase().indexOf(keyword) > -1;
        });
      } else {
        this.searchResult = this.resume_info;
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
    const api = "/api/resume";
    axios
      .get(api)
      .then((response) => {
        this.resume_info = response.data;
        this.searchResult = this.resume_info;
      })
      .catch(function (error) {
        // 請求失敗處理
        console.log(error);
      });
  },
};
</script>