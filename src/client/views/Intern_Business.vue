<template>
    <div style="padding: 100px 100px 10px">
      <form class="bs-example bs-example-form" role="form">
        <div class="row align-items-center">
          <div class="col-lg-12 text-left">
            <br />
            <div class="panel panel-default">
              <div class="panel-body" style="border-style: ridge">
                <!-- ridge groove inset outset -->
                <div class="ppp-intern1">
                  <div class="row">
                    <div class="col-lg-2">
                      <img
                        src="../assets/圖片1.png"
                        alt="internsandwich"
                        height="150px"
                      />
                    </div>
                    <div class="col-lg-10">
                      <span style="font-size: 45px"
                        ><!-- background-color:#bde0fe;margin-right:10px;border:3px #a2d2ff solid; -->
                        <strong>{{ post_info[0].title }}</strong></span
                      >
                      <pre style="font-size: 30px"><router-link :to="{ name: 'BusinessPosts', params: { cp_id: cp_id }}" style="color:black;">{{
                        cp_info[0].name
                      }}</router-link></pre>
                    </div>
                  </div>
                </div>
                <div class="ppp2_btn">
                  <div
                    class="float-left"
                    style="
                      font-size: 20px;
                      color: grey;
                      padding-top: 8px;
                      padding-left: 8px;
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
                      /></svg>&nbsp; 觀看次數:
                    {{ post_info[0].counter + 1 }}&nbsp;&nbsp;&nbsp;
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
                      /></svg>&nbsp;收藏次數：5
                  </div>
                  <div class="row float-right">
                    <a
                      @click="Applynow"
                      class="btn"
                      style="width: 150px; height: 50px; font-size: 20px"
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
                        /></svg>&nbsp;立即應徵</a
                    >
                    <div
                      v-bind:class="{
                        hidden: saved_posts.indexOf(post_id) != -1,
                      }"
                    >
                      <button
                        @click="save(post_id)"
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
                          /></svg>&nbsp;收藏
                      </button>
                    </div>
                    <div
                      v-bind:class="{
                        hidden: saved_posts.indexOf(post_id) === -1,
                      }"
                    >
                      <button
                        @click="unsave(post_id)"
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
                          /></svg>&nbsp;取消收藏
                      </button>
                    </div>
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
              <!-- ridge groove inset outset -->
              <div class="ppp-intern">
                <a style="font-size: 30px;text-shadow:0px 0px 2px #cccccc;"><strong>實習內容</strong></a><br /><br />
                <pre style="font-size: 18px">{{ post_info[0].job_desc }}</pre>
                <br />
                <hr border-style="solid" />
  
                <a style="font-size: 30px;text-shadow:0px 0px 2px #cccccc;"><strong>薪資待遇</strong></a><br /><br />
                <pre style="font-size: 18px">{{ post_info[0].benefits }}</pre>
                <br />
                <hr border-style="solid" />
  
                <a style="font-size: 30px;text-shadow:0px 0px 2px #cccccc;"><strong>條件要求</strong></a><br /><br />
                <pre style="font-size: 18px">{{ post_info[0].requirement }}</pre>
                <br />
                <hr border-style="solid" />
  
                <a style="font-size: 30px;text-shadow:0px 0px 2px #cccccc;"><strong>實習地點</strong></a><br /><br />
                <pre style="font-size: 18px">{{post_info[0].city}}{{ post_info[0].location }}</pre>
                <br />
                <hr border-style="solid" />
  
                <a style="font-size: 30px;text-shadow:0px 0px 2px #cccccc;"><strong>其他</strong></a><br /><br />
                <pre v-if="post_info[0].others" style="font-size: 18px">{{
                  post_info[0].others
                }}</pre>
                <pre v-else style="font-size: 18px">無</pre>
            </div>
        </div>
      </div>
      <hr border-style="solid" />
    </div>
    <RecommendPost title="推薦實習" :recommend_posts="recommend" :addcounter="addcounter"/>
    </div>
    <div>
</div>
<br />
</div>
</template>

<script>
    import axios from "../js/axios.js";
    import RecommendPost from "../components/RecommendPost.vue";

    export default {
      name: "Intern_Buiness",
      components: {
        RecommendPost,
      },
      data() {
        return {
          cp_id:"",
          cp_info:"",
          post_id:"",
          post_info: "",
          user_info: "",
          user_id: "",
          recommend: [],
          saved_posts: [],
          counter: "",
          type: "",
        };
      },
      computed: {
        isLoggedIn: function () {
          return this.$store.getters.isLoggedIn;
        },
      },
      methods: {

        //更新觀看次數
        addcounter: function (p_id, counter, type) {
          counter++;
          var api = "/api/add-counter";
          const params = {
            p_id: p_id,
            counter: counter,
            type: type,
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
    
        //整理貼文格式
        jsonEscape: function (str) {
          str = JSON.stringify(str).replace(/[\s]/g, "");
          return JSON.parse(str);
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
        
        //立即應徵
        Applynow: function(){
          this.$router.push("/intern_mails/"+ this.post_id)
        },

        //推薦實習
        Recommend: function(){
          this.recommend = [this.post_info[0]]; //推薦實習，之後再寫
        }
      },
      watch: {
        $route: function () {
          this.$router.go(this.$router.currentRoute);
        },
      },
      created() {
        this.user_info = this.$store.getters.getUser;
        this.user_id = this.user_info["ID"];
        
        //取得貼文資訊
        this.post_id = this.$route.params.post_id;
        var api = "/api/company/cp_posts/";

        axios
          .get(api + this.post_id)
          .then((response) => {
            this.post_info = response.data;
            this.Recommend()
            this.post_info = this.jsonEscape(this.post_info);
            this.cp_id = this.post_info[0].cp_id

            //取得公司資訊
            api = "/api/company/";
            
            axios
                .get(api + this.cp_id)
                .then(response =>{
                    this.cp_info = response.data
                })
                .catch(error =>{
                    console.log(error);
                })
          })
          .catch((error) => {
            console.log(error);
          });

        

        //取得收藏貼文
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
      },
    };
</script>
    
<style>
    .ppp-intern {
      white-space: normal;
      word-break: break-all;
      height: auto;
    }
    ul {
      display: inline-block;
      list-style-type: none;
      padding: 0;
    }
    
    .hidden {
      display: none;
    }
</style>