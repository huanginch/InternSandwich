<!-- 實習內容頁面 -->
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
                      src="../assets/圖片1.png"
                      alt="internsandwich"
                      height="150px"
                    />
                  </div>
                  <div class="col-lg-10">
                    <pre style="font-size: 35px"><strong >{{post_info[post_id].title}}</strong></pre>
                    <pre style="font-size: 30px" v-bind="post_info ,post_id">{{post_info[post_id].cp_name}}</pre>
                  </div>
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
                    >收藏</a
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
          <div class="panel-body">
            <div class="ppp-inten1">

              <a style="font-size: 30px" >條件要求</a><br /><br />
              <pre style="font-size: 25px" v-bind="post_info ,post_id">{{post_info[post_id].requirement}}</pre>
              <br />
              <hr border-style="solid" />

              <a style="font-size: 30px" >薪資待遇</a><br /><br />
              <pre style="font-size: 15px" v-bind="post_info ,post_id">{{post_info[post_id].benefits}}</pre
              ><br />
              <hr border-style="solid" />
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

              <a style="font-size: 30px" >實習內容</a><br /><br />
              <pre style="font-size: 15px" v-bind="post_info ,post_id">{{post_info[post_id].job_desc}}</pre>
              <br />
              <hr border-style="solid" />
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
              <a style="font-size: 30px">實習地點</a><br /><br />
              <pre style="font-size: 25px" v-bind="post_info ,post_id">{{post_info[post_id].location}}</pre>
              <br />
              <hr border-style="solid" />

              <a style="font-size: 30px">其他</a><br /><br />
              <pre style="font-size: 25px" v-bind="post_info ,post_id">{{post_info[post_id].others}}</pre>
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

      <div class="col-lg-3 text-left">
        <p class="text-left"><strong>推薦實習</strong></p>
        <div class="panel">
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
      </div>

      <div class="col-lg-1">
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
          <textarea
            v-else-if="!hascomment || editing"
            v-model="my_comment"
            class="form-control"
            placeholder="留下評論......"
          ></textarea>
          <a
            v-else
            v-model="my_comment"
            type="text"
            class="form-control"
          >{{my_comment}}</a>
          <button class="btn" type="button" @click="pushcomment" v-if="isLoggedIn && !hascomment">發佈評論</button>
          <button class="btn" type="button" @click="editcomment" v-if="isLoggedIn && hascomment && !editing">編輯留言</button>
          <button class="btn" type="button" @click="deletecomment" v-if="isLoggedIn && hascomment && !editing">刪除留言</button>
          <button class="btn" type="button" @click="finishedit" v-if="editing">完成</button>
          <button class="btn" type="button" @click="canceledit" v-if="editing">取消</button>
          <div class="input-group-btn"></div>
        </div>
      </div>

      <br /><br /><br /><br />

      <!-- <div class="col-lg-8 text-left">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="ppp-inten1">
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

      <!-- 其他實習生評論 -->
      <div class="col-lg-3" ></div>

      <div class="col-lg-9" v-for="comment in comment_info" >
        <div class="col-lg-1">
          <img src="../assets/圖片1.png" alt="internsandwich" height="100px" />
        </div>
      </div>
      <div class="col-lg-9 text-left" v-for="comment in comment_info" >
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="ppp-inten1">
              <p style="font-size: 20px">{{comment.context}}</p>
              <br /><br />
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="col-lg-5"></div>

      <div class="col-lg-1">
        <img src="../assets/圖片1.png" alt="internsandwich" height="100px" />
      </div>
      <div class="col-lg-6 text-left">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="ppp-inten1">
              <a style="font-size: 20px">推推！老闆常常給大紅包，讚讚～</a
              ><br /><br />
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <br />

    <ul
      class="pagination pagination-sm justify-content-center"
      style="margin: 20px 0"
    >
      <li class="page-item disabled">
        <a class="page-link" href="#">上一頁</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">下一頁</a></li>
    </ul>
  </div>
</template>

<script>
import axios from '../js/axios.js'

export default {
  name: "Intern",
  data(){
    return{
      post_id:"",
      post_info:"",
      user_info:"",
      user_id:"",
      comment_info:"",
      my_comment:"",
      hascomment:false,
      editing:false,
      temp_comment:""
    };
  },
  computed:{
    isLoggedIn: function(){ 
      return this.$store.getters.isLoggedIn
    },
  },
  methods:{
    //整理貼文格式
    jsonEscape: function(str) {
      str = JSON.stringify(str).replace(/[\s]/g,'');
      return JSON.parse(str);
    },

    //顯示評論
    showcomments:function(){
      var api = '/api/show-comments'
      var params = {
        p_id:this.post_id,
      }
      axios
        .get(api,{params})
        .then(response =>{
          this.comment_info = response.data
          
          //如果登入就找到自己的評論
          if(this.isLoggedIn){
            this.my_comment = this.comment_info.filter(result => result.U_ID === this.user_id)

            //找到就顯示有評論
            if(this.my_comment){
              this.my_comment = this.my_comment[0]['context']
              this.hascomment = true
            }
            
            this.comment_info = this.comment_info.filter(result => result.U_ID != this.user_id)
          }
        })
        .catch(error =>{
          console.log(error)
        })
    },

    //留下評論
    pushcomment: function(){
      if(this.my_comment){
        this.hascomment = true

        //存入資料庫
        var api = '/api/comment'
        var params = {
          p_id:this.post_id,
          u_id:this.user_id,
          context:this.my_comment
        }

        axios
          .post(api,params)
          .then(response =>{
          })
          .catch(error =>{
            console.log(error)
          })
        }
    },

    //編輯評論
    editcomment: function(){
      this.editing = true
      this.temp_comment = this.my_comment
    },

    //完成編輯評論
    finishedit: function(){
      this.editing = false

      //存入資料庫
      var api = '/api/modify-comment'
        var params = {
          p_id:this.post_id,
          u_id:this.user_id,
          context:this.my_comment
        }

        axios
          .patch(api,params)
          .then(response =>{
          })
          .catch(error =>{
            console.log(error)
          })
    },

    //取消編輯評論
    canceledit: function(){
      this.my_comment = this.temp_comment
      this.editing = false
    },

    //刪除評論
    deletecomment: function(){
      //do axios.delete
      this.hascomment = false
    }
  },
  created(){
    this.user_info = this.$store.getters.getUser
    this.user_id = this.user_info['ID']
    this.post_id = this.$route.params.post_id;
    var api = '/api/posts/';

    axios
      .get(api)
      .then(response =>{
        this.post_info = response.data;
        this.post_info = this.jsonEscape(this.post_info)
        this.showcomments()
      })
      .catch(error =>{
        console.log(error);
      })
  },
}
</script>

<style>
.ppp-inten1 {
  height: auto;
}
</style>