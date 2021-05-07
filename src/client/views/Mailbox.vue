<!-- 履歷信箱 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br />
    
    <Business_info
        :cp_info="cp_info"
      />


    <div class="row">
      <div class="col-lg-9">
        <!-- <div class="panel panel-default">
          <div class="panel-body">
            <div class="row">
              <div class="col-lg-2">
                <img
                  src="../assets/圖片2.png"
                  alt="internsandwich"
                  style="vertical-align: bottom; height: 100px"
                />
              </div>

              <div class="col-lg-10">
                <h2 style="font-size: 25px" align="left">黃小明</h2>
                <p style="font-size: 20px" align="left">資管系學生</p>
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
                  擅長打會議記錄、會攝影、會畫畫、會唱歌、會跳舞，可以負重當工具人，有機車可以當司機。擅長打會議記錄、會攝影、會畫畫、會唱歌、會跳舞，可以負重當工具人，有機車可以當司機。
                </p>
              </div>
            </div>
            <div class="ppp2_btn">
              <div class="row float-right">
                <a
                  href="#"
                  class="btn"
                  style="width: 200px; height: 50px; font-size: 20px"
                >立即聯絡</a
                >
                <a
                  href="#"
                  class="btn"
                  style="width: 200px; height: 50px; font-size: 20px"
                >刪除履歷</a
                >
              </div>
            </div>
          </div>
        </div> -->

        <!--eslint-disable-next-line-->
        <div id="Mailbox" v-for="(mail, index) in mails.slice(pageStart,pageStart + countOfPage)"class="mail">
          <div class="panel panel-default">
            <div class="panel-body" style="border-style: ridge">
              <div class="row">
                <div class="col-lg-2">
                  <img
                    src="../assets/圖片2.png"
                    alt="internsandwich"
                    style="vertical-align: bottom; height: 100px"
                  />
                </div>

                <div class="col-lg-10">
                  <h2 style="font-size: 25px" align="left">
                    {{ mail.exp_position }}
                  </h2>
                  <p style="font-size: 20px" align="left">
                    {{ mail.name }}
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
                    {{ mail.skills }}
                  </p>
                </div>
              </div>
              <div class="ppp2_btn">
                <div class="row float-right">
                  <a
                    href="#"
                    class="btn"
                    style="width: 200px; height: 50px; font-size: 20px"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="20"
                      fill="currentColor"
                      class="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                      /></svg>&nbsp;立即聯絡</a
                  >
                  <a
                    href="#"
                    class="btn"
                    style="width: 200px; height: 50px; font-size: 20px"
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
                      /></svg>&nbsp;刪除履歷</a
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
import Business_info from "../components/Business_info.vue"

export default {
  name: "Mailbox",
  components:{
    Business_info
  },
  data() {
    return {
      mails: null,
      cp_info: null,
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
      return Math.ceil(this.mails.length / this.countOfPage);
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
  },
  created() {
    this.cp_info = this.$store.getters.getUser;
    //axios獲取後臺資料
    var cp_id = this.cp_info.ID;
    var api = `/api/company/${cp_id}/mails`;
    axios
      .get(api)
      .then((response) => {
        this.mails = response.data;
      })
      .catch(function (error) {
        // 請求失敗處理
        console.log(error);
      });
  },
};
</script>