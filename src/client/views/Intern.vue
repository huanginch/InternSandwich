<!-- 實習內容頁面 -->
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
                    <pre style="font-size: 30px">{{
                      post_info[0].cp_name
                    }}</pre>
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
              <pre style="font-size: 18px">{{ post_info[0].location }}</pre>
              <br />
              <hr border-style="solid" />

              <a style="font-size: 30px;text-shadow:0px 0px 2px #cccccc;"><strong>其他</strong></a><br /><br />
              <pre v-if="post_info[0].others" style="font-size: 18px">{{
                post_info[0].others
              }}</pre>
              <pre v-else style="font-size: 18px">無</pre>

              <!-- <a
                style="font-size: 18px"
                >行政、勞力</a
              ><br />
              <a style="font-size: 25px">地點</a>&nbsp;<a
                style="font-size: 18px"
                >嘉義縣民雄鄉</a
              ><br />
              <a style="font-size: 25px">薪水</a>&nbsp;<a
                style="font-size: 18px"
                >月薪22KKK</a
              ><br />
              <a style="font-size: 25px">其他</a><br /><a
                style="font-size: 15px"
                >我是描述我是描述我是描述我是描述我是描述</a
              ><br /> -->

              <!-- &nbsp;<a
                style="font-size: 18px"
                >不限</a
              ><br />
              <a style="font-size: 25px">語言能力</a>&nbsp;<a
                style="font-size: 18px"
                >英文、日文</a
              ><br />
              <a style="font-size: 25px">熟悉工具</a>&nbsp;<a
                style="font-size: 18px"
                >要會騎機車</a
              ><br /> -->

              <!-- &nbsp;<a
                style="font-size: 18px"
                >嚕嚕媽媽</a
              ><br />
              <a style="font-size: 25px">Email</a>&nbsp;<a
                style="font-size: 18px"
                >Lulu@gmail.com</a
              ><br />
              <a style="font-size: 25px">電話</a>&nbsp;<a
                style="font-size: 18px"
                >0917162934</a
              ><br /><br /> -->
            </div>
          </div>
        </div>
        <hr border-style="solid" />
      </div>
      <RecommendPost title="推薦實習" :recommend_posts="recommend" />
      <!-- <div class="col-lg-3 text-left">
        <p class="text-left"><strong>推薦實習</strong></p>
        <div class="panel_polular">
          <div class="panel-body">
            <div class="row">
              <div class="col-lg-3">
                <img
                  src="../assets/圖片1.png"
                  alt="internsandwich"
                  style="height: 70px"
                />
              </div>
              <div class="col-lg-9">
                <p style="font-size: 20px" align="left">OOO股份有限公司</p>
                <p style="font-size: 20px" align="left">OOO實習生</p>
              </div>
            </div>
          </div>
        </div>
        <hr border-style="solid" />
      </div> -->
    </div>
    <!-- <br />
        <div><a>熱門實習</a></div>
        <hr style="solid" />
        <div class="photo">
          <img src="../assets/圖片1.png" alt="internsandwich" height="100px" />
        </div>
        <div class="intro">
          <a>OOO股份有限公司</a><br />
          <a>OOO實習生</a>
        </div>
        <br />
        <div class="photo">
          <img src="../assets/圖片1.png" alt="internsandwich" height="100px" />
        </div>
        <div class="intro">
          <a>OOO股份有限公司</a><br />
          <a>OOO實習生</a>
        </div>
        <br />
        <div class="photo">
          <img src="../assets/圖片1.png" alt="internsandwich" height="100px" />
        </div>
        <div class="intro">
          <a>OOO股份有限公司</a><br />
          <a>OOO實習生</a>
        </div> -->

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

    <!-- <div class="col-lg-8 text-left">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="ppp-intern">
              <a style="font-size: 20px">登入以留下評論......</a
              ><br /><br /><br /><br />
              <div class="row float-right">
                <a
                  href="#"
                  class="btn"
                  style="width: 200px; height: 40px; font-size: 20px"
                  >發佈評論</a
                >
              </div>
            </div>
          </div>
        </div>
      </div> -->

    <!-- <div class="col-lg-1">
          <img src="../assets/圖片1.png" alt="internsandwich" height="100px" />
        </div>

        <div class="col-lg-8 text-left">
          <div class="input-group mt-3 mb-3 input-group-lg">
            <input
              v-if="!isLoggedIn"
              disabled
              type="text"
              class="form-control"
              placeholder="登入以留下評論......"
            />
          </div>
        </div> -->
    <!-- 其他實習生評論 -->
    <!--eslint-disable-next-line-->

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

    <!-- <div v-for="(comment, index) in comment_info" :key="comment.ID">
          <div class="col-lg-1">
            <img
              src="../assets/圖片1.png"
              alt="internsandwich"
              height="100px"
            />
            <p>{{ comment.U_ID }}</p>
          </div>
          <div class="col-lg-8">
            <div
              class="panel panel-default"
              v-show="comment.ID != temp_comment.ID || !editing"
            >
              <div class="panel-body">
                <div class="ppp-intern">
                  <p style="font-size: 20px">{{ comment.context }}</p>

                  <p style="font-size: 20px">test</p>
                </div>
              </div>
            </div>
            <textarea
              v-show="comment.ID === temp_comment.ID && editing"
              v-model="comment.context"
              class="form-control"
            ></textarea>
            <button
              class="btn"
              type="button"
              @click="editcomment(comment)"
              v-show="isMycomment(comment.U_ID) && !editing"
            >
              編輯留言
            </button>
            <button
              class="btn"
              type="button"
              @click="deletecomment(comment.ID)"
              v-show="isMycomment(comment.U_ID) && !editing"
            >
              刪除留言
            </button>
            <button
              class="btn"
              type="button"
              @click="finishedit"
              v-show="comment.ID === temp_comment.ID && editing"
            >
              完成
            </button>
            <button
              class="btn"
              type="button"
              @click="canceledit(index)"
              v-show="comment.ID === temp_comment.ID && editing"
            >
              取消
            </button>
          </div>
        </div>
        <div class="col-lg-3"></div> -->

    <!-- <div class="col-lg-5"></div>

      <div class="col-lg-1">
        <img src="../assets/圖片1.png" alt="internsandwich" height="100px" />
      </div>
      <div class="col-lg-6 text-left">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="ppp-intern">
              <a style="font-size: 20px">推推！老闆常常給大紅包，讚讚～</a
              ><br /><br />
            </div>
          </div>
        </div>
      </div> -->

    <br />
  </div>
</template>

<script>
import axios from "../js/axios.js";
import RecommendPost from "../components/RecommendPost.vue";
export default {
  name: "Intern",
  components: {
    RecommendPost,
  },
  data() {
    return {
      post_id: "",
      post_info: "",
      user_info: "",
      user_id: "",
      comment_info: "",
      myNewComment: "",
      editing: false,
      temp_comment: "",
      recommend: [],
      saved_posts: [],
      counter: "",
      cp_info:"",
      cp_id:""
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

    //檢查是否為自己的評論
    isMycomment: function (u_id) {
      return u_id === this.user_id;
    },

    //立即應徵
    Applynow: function(){
      this.$emit('bus',{p_id: this.post_id, cp_id: this.cp_id, cp_name:this.cp_info.name});
      this.$router.push("/intern_mails")
    }
  },
  watch: {
    $route: function () {
      this.$router.go(this.$router.currentRoute);
    },
  },
  created() {
    //取得詳細貼文資訊
    this.user_info = this.$store.getters.getUser;
    this.user_id = this.user_info["ID"];
    this.post_id = this.$route.params.post_id;
    var api = "/api/posts/";

    axios
      .get(api)
      .then((response) => {
        var _this = this;
        _this.post_info = response.data;
        _this.recommend = [_this.post_info[1]]; //推薦實習，之後再寫
        _this.post_info = _this.jsonEscape(this.post_info);
        _this.post_info = _this.post_info.filter(function (d) {
          return d.id.toString().indexOf(_this.post_id) != -1;
        });
        _this.showcomments();
        this.cp_id = this.post_info.cp_id
      })
      .catch((error) => {
        console.log(error);
      });

    //取得發文公司資訊
    api = `/api/company/${cp_id}`;
    axios
      .get(api)
      .then((response) => {
        this.cp_info = response.data
      })
      .catch((error) => {
        console.log(error);
      });

    if (this.isLoggedIn) {
      //取得收藏貼文，用來判斷是否收藏過
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