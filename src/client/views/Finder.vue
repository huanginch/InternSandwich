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
            <div class="col-2">
            <treeselect
                border-style="treeselect"
                v-model="select_school"
                :multiple="false"
                :options="schools"
                placeholder="學校"
              />
            </div>

            <div class="col-2">
            <treeselect
                border-style="treeselect"
                v-model="select_department"
                :multiple="false"
                :options="department"
                placeholder="系所"
              />
            </div>
            
            <div class="col-2">
            <treeselect
                border-style="treeselect"
                v-model="select_expertise"
                :multiple="false"
                :options="expertises"
                placeholder="專長"
              />
            </div>
            
            <div class="col-2">
            <treeselect
                border-style="treeselect"
                v-model="select_position"
                :multiple="false"
                :options="position"
                placeholder="職位"
              />
            </div>

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
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "Finder",
  components: {
    Recommend,
    Treeselect
  },
  data() {
    return {
      keyword:"",
      resume_info: [],
      searchResult: "",
      countOfPage: 5,
      currPage: 1,
      select_school: null,
      select_department: null,
      select_expertise: null,
      select_position: null,
      schools: [
        { id: "台大", label: "台大" },
        { id: "清華", label: "清華" },
        { id: "陽交大", label: "陽交大" },
        { id: "長庚", label: "長庚" },
        { id: "靜宜", label: "靜宜" },
        { id: "實踐", label: "實踐" },
        { id: "逢甲", label: "逢甲" },
        { id: "中正", label: "中正" },
        { id: "致理", label: "致理" },
      ],
      
      department: [
        { id: "資訊管理", label: "資訊管理" },
        { id: "會計", label: "會計" },
        { id: "材料", label: "材料" },
        { id: "電機", label: "電機" },
      ],
      expertises: [
        { id: "JAVA", label: "JAVA" },
        { id: "python", label: "python" },
        { id: "SQL", label: "SQL" },
        { id: "管理", label: "管理" },
      ],
      position: [
        { id: "工程師", label: "工程師" },
        { id: "行銷", label: "行銷" },
        { id: "會計", label: "會計" },
        { id: "廣告", label: "廣告" },
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
      var select_school = this.select_school;
      var select_department = this.select_department;
      var select_expertise = this.select_expertise;
      var select_position = this.select_position;

      if (select_school === null || select_school === undefined) {
        select_school = "";
      }
      if (select_department === null || select_department === undefined) {
        select_department = "";
      }
      if (select_expertise === null || select_expertise === undefined) {
        select_expertise = "";
      }
      if (select_position === null || select_position === undefined) {
        select_position = "";
      }

      // 如果 filter_name 有內容，回傳過濾後的資料，否則將原本的 fb_posts 回傳。
      if (this.keyword.trim() !== "" || 
      select_school !== "" ||
      select_department !== "" ||
      select_expertise !== "" ||
      select_position !== "" 
      ) {
        this.searchResult = this.resume_info.filter(function (d) {
          return d.edu_and_exp.toLowerCase().indexOf(keyword) > -1 || d.skill.toLowerCase().indexOf(keyword) > -1;
        });
        
        this.searchResult = this.searchResult.filter(function (d) {
          return d.edu_and_exp.toLowerCase().indexOf(select_school) > -1 ;
        });

        this.searchResult = this.searchResult.filter(function (d) {
          return d.edu_and_exp.toLowerCase().indexOf(select_department) > -1 ;
        });

        this.searchResult = this.searchResult.filter(function (d) {
          return d.skills.toLowerCase().indexOf(select_expertise) > -1 ;
        });

        this.searchResult = this.searchResult.filter(function (d) {
          return d.exp_position.toLowerCase().indexOf(select_position) > -1 ;
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
