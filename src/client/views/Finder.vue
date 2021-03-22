<!-- 找實習生 -->
<template>
  <div style="padding: 100px 100px 10px" >
    <!-- Searchbar -->
    <form class="bs-example bs-example-form" role="form">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="input-group mt-3 mb-3" >
            <!-- 搜尋欄 -->
            <input v-model="keyword" type="text" placeholder="輸入關鍵字" class="form-control" @keyup.enter="filteredPosts"/>
            <!-- 類別關鍵字下拉選單 -->
            <select v-model="select_school" class="btn btn-default">
              <option disabled value="" >學校</option>
              <!--eslint-disable-next-line-->
              <option v-for="school in schools" v-bind:value="school.value">
                {{school.text}}
              </option>
            </select>
            <select v-model="select_grade" class="btn btn-default">
              <option disabled value="">年級</option>
              <!--eslint-disable-next-line-->
              <option v-for="grade in grades" v-bind:value="grade.value">
                {{grade.text}}
              </option>
            </select>
            <select v-model="select_expertise" class="btn btn-default">
              <option disabled value="" >專長</option>
              <!--eslint-disable-next-line-->
              <option v-for="expertise in expertises" v-bind:value="expertise.value">
                {{expertise.text}}
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
    <!--實習貼文與熱門搜尋  -->
    <div class="row">
      <div class="col-lg-9 text-left">
        <!-- 實習貼文 -->
        <!--eslint-disable-next-line-->
        <div id="Home" v-for="(posts, index) in searchResult.slice(pageStart, pageStart + countOfPage)" class="posts" >
          <div class="panel panel-default">
            <div class="panel-body">
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
                    {{ posts.link }}
                  </h1>
                  <p style="font-size: 20px" align="left">
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
                    {{ posts.requirement }}
                  </p>
                </div>
              </div>

              <div class="ppp2_btn">
                <div class="row float-right">
                  <router-link
                    class="btn"
                    style="width: 200px; height: 50px; font-size: 20px"
                    to="/profile"
                  >
                    查看實習生
                  </router-link>
                  <button
                    href="#"
                    class="btn"
                    style="width: 200px; height: 50px; font-size: 20px"
                  >
                    收藏
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="ppp">
                  <div class="photo">
                    <img
                      src="../assets/圖片1.png"
                      alt="internsandwich"
                      height="150px"
                    />
                  </div>
                  <a style="font-size: 25px">採購實習生</a><br />
                  <a style="font-size: 20px">全聯大賣場股份有限公司</a><br />
                  <a style="font-size: 15px"
                    >1.原物料採購(國內/進口料)、結帳作業。 2.供應商資料維護。
                    3.收料、庫存管理。 4. 原料退稅作業。 5. 主管交辦事項。</a
                  ><br />
                </div>
                <div class="ppp2">
                  <div class="row float-right">
                    <a
                      href="#"
                      class="btn"
                      style="width: 200px; height: 50px; font-size: 20px"
                      >查看評論</a
                    >
                    <a
                      href="#"
                      class="btn"
                      style="width: 200px; height: 50px; font-size: 20px"
                      >收藏</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="ppp">
                  <div class="photo">
                    <img
                      src="../assets/圖片1.png"
                      alt="internsandwich"
                      height="150px"
                    />
                  </div>
                  <a style="font-size: 25px">資安實習生</a><br />
                  <a style="font-size: 20px">中正大學研發處</a><br />
                  <a style="font-size: 15px"
                    >協助資安檢測工具研發，包含分析、設計、程式撰寫及軟體測試 -
                    協助軟體開發文件之撰寫與維護 -
                    協助新技術、法規與產品的研究</a
                  ><br />
                </div>
                <div class="ppp2">
                  <div class="row float-right">
                    <a
                      href="#"
                      class="btn"
                      style="width: 200px; height: 50px; font-size: 20px"
                      >查看評論</a
                    >
                    <a
                      href="#"
                      class="btn"
                      style="width: 200px; height: 50px; font-size: 20px"
                      >收藏</a
                    >
                  </div>
                </div>
              </div>
            </div>
-->
      </div>
      <!--熱門搜尋  -->
      <div class="col-lg-3">
        <p class="text-left"><strong>熱門實習生</strong></p>
        <!--eslint-disable-next-line-->
        <div id="Home" v-for="(posts, index) in fb_info.slice(pageStart, pageStart + countOfPage)" class="posts" >
          <div class="panel">
            <div class="panel-body">
              <div class="row">
                <div class="col-lg-3">
                  <img
                    src="../assets/圖片2.png"
                    alt="internsandwich"
                    style="height: 70px"
                  />
                </div>
                <div class="col-lg-9">
                  <p style="font-size: 20px" align="left">{{ posts.link }}</p>
                  <p style="font-size: 20px" align="left">
                    {{ posts.cp_name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  
            <div class="photo">
              <img
                src="../assets/圖片1.png"
                alt="internsandwich"
                height="100px"
              />
            </div>
            <div class="intro">
              <a>OOO股份有限公司</a><br />
              <a>OOO實習生</a>
            </div>
            <div class="photo">
              <img
                src="../assets/圖片1.png"
                alt="internsandwich"
                height="100px"
              />
            </div>
            <div class="intro">
              <a>OOO股份有限公司</a><br />
              <a>OOO實習生</a>
            </div>
            <div class="photo">
              <img
                src="../assets/圖片1.png"
                alt="internsandwich"
                height="100px"
              />
            </div>
            <div class="intro">
              <a>OOO股份有限公司</a><br />
              <a>OOO實習生</a>
            </div>
-->
      </div>
    </div>

    <br />
    <!-- 換頁按鈕 -->
    <ul
      class="pagination pagination-sm justify-content-center"
      style="margin: 20px 0" 
    >
      <li v-bind:class="{'disabled': (currPage === 1)}"
          @click.prevent="setPage(currPage-1)"><button class="page-link" href="#">上一頁</button>
      </li>
      <!--eslint-disable-next-line-->
      <li v-for="n in totalPage"
          v-bind:class="{'active': (currPage === (n))}"
          @click.prevent="setPage(n)"><button class="page-link" href="#">{{n}}</button>
      </li>
      <li v-bind:class="{'disabled': (currPage === totalPage)}"
          @click.prevent="setPage(currPage+1)"><button class="page-link" href="#">下一頁</button>
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
      searchResult:null,
      countOfPage: 5,
      currPage: 1,
      select_school:"",
      select_grade:"",
      select_expertise:"",
      keyword:"",
      schools:[
        {text:"抬青椒承", value:"抬青椒承"},
        {text:"忠自倍", value:"忠自倍"},
        {text:"地名大學", value:"地名大學"},
        {text:"其他", value:"其他"}
      ],
      grades:[
        {text:"高中", value:"高中"},
        {text:"大學", value:"大學"},
        {text:"研究所", value:"研究所"},
        {text:"其他", value:"其他"}
      ],
      expertises:[
        {text:"科技", value:"科技"},
        {text:"設計", value:"設計"},
        {text:"餐飲", value:"餐飲"}
      ]
    };
  },
  computed:{
    //設定頁首
    pageStart: function(){
      return (this.currPage - 1) * this.countOfPage;
    },
    //設定總頁數
    totalPage: function(){
      return Math.ceil(this.searchResult.length / this.countOfPage);
    }
  },
  methods:{
    //依照關鍵字搜尋貼文
    filteredPosts: function(){
      // 因為 JavaScript 的 filter 有分大小寫，
      // 所以這裡將 keyword 與 fb_info[n].cp_name 通通轉小寫方便比對。
      var keyword = this.keyword.toLowerCase();

      // 如果 filter_name 有內容，回傳過濾後的資料，否則將原本的 fb_posts 回傳。
      if ( this.keyword.trim() !== '' ) {
        this.searchResult = this.fb_info.filter(function(d){ return d.cp_name.toLowerCase().indexOf(keyword) > -1; })
      }
      else{
        this.searchResult = this.fb_info;
      }
    },
    //設定當前頁面
    setPage: function(idx){
      if( idx <= 0 || idx > this.totalPage ){
        return;
      }
      this.currPage = idx;
    },
  },
  created(){
    //axios獲取後臺資料
    const api = "/api/posts";
      //const params = { userId: 2 };
    axios
      .get(api)
      .then((response) => {
        this.fb_info = response.data 
        this.searchResult = response.data})
      .catch(function (error) {
        // 請求失敗處理
        console.log(error);
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