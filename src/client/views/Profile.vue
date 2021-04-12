<!-- 實習生內容頁面 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br>
    <form class="bs-example bs-example-form" role="form">
      <div class="row align-items-center">
        <div class="col-lg-12 text-left">
          <div class="panel panel-default">
            <div class="panel-body" style="border-style: ridge">
              <div class="ppp-intern1">
                <div class="row">
                  <div class="col-lg-2">
                    <img
                      src="../assets/圖片2.png"
                      alt="internsandwich"
                      height="150px"
                    />
                  </div>
                  <div class="col-lg-10">
                    <p style="font-size: 40px">
                      <strong>{{ resume_info[resume_id].name }}</strong>
                    </p>
                    <div class="row">
                      <div class="col-lg-4">
                        <p style="font-size: 20px">
                          性別：{{ resume_info[resume_id].gender }}
                        </p>
                        <p style="font-size: 20px">
                          生日：{{ resume_info[resume_id].birth }}
                        </p>
                        <p style="font-size: 20px">
                          身分證字號：{{ resume_info[resume_id].id_card }}
                        </p>
                      </div>
                      <div class="col-lg-4">
                        <p style="font-size: 20px">
                          學校：{{ resume_info[resume_id].school }}
                        </p>
                        <p style="font-size: 20px">
                          電話：{{ resume_info[resume_id].phone }}
                        </p>
                        <p style="font-size: 20px">
                          email：{{ resume_info[resume_id].email }}
                        </p>
                      </div>
                    </div>
                  </div>
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
                      /></svg
                    >&nbsp;立即聯絡</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="row">
      <div class="col-lg-9 text-left">
        <div class="panel panel-default">
          <div class="panel-body" style="border-style: ridge">
            <div class="ppp-inten1">
              <!-- <a style="font-size: 30px">基本資料</a><br /><br />
              <a style="font-size: 25px">性別</a>&nbsp;<a
                style="font-size: 18px"
                >{{ resume_info[resume_id].gender }}</a
              ><br />
              <a style="font-size: 25px">生日</a>&nbsp;<a
                style="font-size: 18px"
                >{{ resume_info[resume_id].birth }}</a
              ><br />
              <a style="font-size: 25px">薪水</a>&nbsp;<a
                style="font-size: 18px"
                >月薪22KKK</a >
              <br />
              <a style="font-size: 25px">學校</a>&nbsp;<a
                style="font-size: 15px"
                >{{ resume_info[resume_id].school }}</a
              ><br />
              <hr border-style="solid" /> -->

              <a style="font-size: 30px">實習期望</a><br /><br />
              <a style="font-size: 25px">期望職位</a>&nbsp;<br /><a
                style="font-size: 18px"
                >{{ resume_info[resume_id].exp_position }}</a
              ><br /><br />
              <a style="font-size: 25px">期望待遇</a>&nbsp;<br /><a
                style="font-size: 18px"
                >{{ resume_info[resume_id].exp_treatment }}</a
              ><br /><br />
              <a style="font-size: 25px">期望工作地</a>&nbsp;<br /><a
                style="font-size: 18px"
                >{{ resume_info[resume_id].exp_location }}</a
              ><br /><br />
              <hr border-style="solid" />

              <a style="font-size: 30px">學經歷</a><br /><br />
              <!-- <a style="font-size: 25px">學歷</a>&nbsp; -->
              <a style="font-size: 18px">{{
                resume_info[resume_id].edu_and_exp
              }}</a
              ><br />
              <!-- <a style="font-size: 25px">經歷</a>&nbsp;<a
                style="font-size: 18px"
                >英文、日文</a
              ><br /> 
              <a style="font-size: 25px">熟悉工具</a>&nbsp;<a
                style="font-size: 18px"
                >要會騎機車</a
              ><br />-->
              <hr border-style="solid" />

              <a style="font-size: 30px">技能專長</a><br /><br />
              <!-- <a style="font-size: 25px">語言能力</a>&nbsp; -->
              <a style="font-size: 18px">{{ resume_info[resume_id].skills }}</a
              ><br />
              <!-- <a style="font-size: 25px">熟悉工具</a>&nbsp;<a
                style="font-size: 18px"
                >英文、日文</a
              ><br /> -->
              <hr border-style="solid" />

              <a style="font-size: 30px">其他</a><br /><br />
              <!-- <a style="font-size: 25px">Email</a>&nbsp; -->
              <a v-if="resume_info[resume_id].others" style="font-size: 18px">{{
                resume_info[resume_id].others
              }}</a>
              <a v-else style="font-size: 18px">無</a><br />
              <!-- <a style="font-size: 25px">電話</a>&nbsp;<a
                style="font-size: 18px"
                >{{ resume_info[resume_id].phone }}</a
              ><br /><br /> -->
            </div>
          </div>
        </div>
      </div>
      <RecommendUser title="推薦實習生" :recommend_users="recommend" />
    </div>
  </div>
</template>

<script>
import axios from "../js/axios.js";
import RecommendUser from "../components/RecommendUser.vue";
export default {
  name: "Profile",
  components: {
    RecommendUser,
  },
  data() {
    return {
      resume_id: "",
      resume_info: "",
      recommend: [],
    };
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    //整理貼文格式
    jsonEscape: function (str) {
      str = JSON.stringify(str).replace(/[\s]/g, "");
      return JSON.parse(str);
    },
  },
  watch: {
    $route: function () {
      this.$router.go(this.$router.currentRoute);
    },
  },
  created() {
    this.resume_id = this.$route.params.resume_id;
    var api = "/api/resume";

    axios
      .get(api)
      .then((response) => {
        this.resume_info = response.data;
        this.recommend = [this.resume_info[1]]; //推薦實習生，之後再寫
        this.resume_info = this.jsonEscape(this.resume_info);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.ppp-inten1 {
  height: auto;
}
</style>