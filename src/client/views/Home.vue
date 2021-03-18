<template>
  <div style="padding: 100px 100px 10px">
    <!-- 搜尋欄 -->
    <form class="bs-example bs-example-form" role="form">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="input-group mt-3 mb-3">
            <input type="text" class="form-control" />
            <div>
              <b-dropdown id="dropdown-1" text="類別" class="btn btn-default">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </div>

            <div>
              <b-dropdown id="dropdown-1" text="地區" class="btn btn-default">
                <b-dropdown-item>台北</b-dropdown-item>
                <b-dropdown-item>台中</b-dropdown-item>
                <b-dropdown-item>台南</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </div>

            <div>
              <b-dropdown id="dropdown-1" text="薪資" class="btn btn-default">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </div>

            <!-- <div class="input-group-btn">
                 
                  <button
                    type="button"
                    class="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    類別
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu pull-right">
                    <li><a href="#">資訊科技</a></li>
                    <li><a href="#">文書行政</a></li>
                    <li><a href="#">工科設計</a></li>
                    <li class="divider"></li>
                    <li><a href="#">其他</a></li>
                  </ul>
                </div>
                <div class="input-group-btn">
                  
                  <button
                    type="button"
                    class="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    地區
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a href="#">台北</a></li>
                    <li><a href="#">台中</a></li>
                    <li><a href="#">台南</a></li>
                    <li class="divider"></li>
                    <li><a href="#">其他</a></li>
                  </ul>
                </div>
                <div class="input-group-btn">
                  
                  <button
                    type="button"
                    class="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    薪資
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a href="#">最低薪資</a></li>
                    <li><a href="#">22000/month</a></li>
                    <li><a href="#">28000/month</a></li>
                    <li class="divider"></li>
                    <li><a href="#">其他</a></li>
                  </ul>
                </div> -->

            <button class="btn">
              <span class="glyphicon glyphicon-search"></span>搜尋<span
                class="caret"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </form>

    <br />

    <div class="row">
      <div class="col-lg-9 text-left">
        <!-- 實習貼文 -->
        <!--eslint-disable-next-line-->
        <div id="app" v-for="post in info" class="post">
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

                <h1 style="font-size: 25px" align="left">{{ post.title }}</h1>
                <p style="font-size: 20px" align="left">{{ post.id }}</p>
                <p style="font-size: 15px" align="center">{{ post.body }}</p>
              </div>

              <div class="ppp2">
                <div class="row float-right">
                  <button
                    href="#"
                    class="btn"
                    style="width: 200px; height: 50px; font-size: 20px"
                  >
                    查看評論
                  </button>
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
      <div class="col-lg-3 text-left">
          <!--eslint-disable-next-line-->
        <div id="app" v-for="post in info" class="post">
          <div class="photo">
            <img
              src="../assets/圖片1.png"
              alt="internsandwich"
              height="100px"
            />
          </div>
          <div class="intro">
            <h5 align="left">{{ post.title }}</h5>
            <h6 align="left">{{ post.title }}</h6>
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
      <li class="page-item disabled">
        <button class="page-link" href="#">上一頁</button>
      </li>
      <li class="page-item"><button class="page-link" href="#">1</button></li>
      <li class="page-item"><button class="page-link" href="#">2</button></li>
      <li class="page-item"><button class="page-link" href="#">3</button></li>
      <li class="page-item">
        <button class="page-link" href="#">下一頁</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "#app",
  data() {
    return {
      info: null,
    };
  },
  created() {
    const api = "https://jsonplaceholder.typicode.com/posts/";
    const params = { userId: 2 };
    axios
      .get(api, { params })
      .then((response) => (this.info = response.data))
      .catch(function (error) {
        // 请求失败处理
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