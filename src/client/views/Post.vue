<!-- 刊登實習 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br />
    <h3>刊登實習</h3>
    <br />
    <div class="panel panel-default col-md-8 offset-2" style="border-style:ridge">
      <div class="panel-body" style="padding: 50px">
        <form>

          <div class="row">
          <div class="form-group col-md-8">
            <p for="inputPassword4" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>公司名稱</strong></p>
            <p class="text-left">這裡顯示公司名稱</p>
          </div>
          <div class="form-group col-md-4">
            <label for="inputPassword4" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>電話</strong></label><br>
            這裡顯示公司電話
          </div>
          </div>
          
          <br />   


          <div class="row">
          <div class="form-group col-md-8">
            <p for="inputPassword4" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>公司地址</strong></p>
            <p class="text-left">這裡顯示公司地址</p>
          </div>
          
          <div class="form-group col-md-4">
            <label for="inputPassword4" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>Email</strong></label><br>
            這裡顯示公司Email
          </div>
          </div>

                    <br />
          
                 
          
          <div class="form-group">
            <p for="inputEmail4" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>實習名稱</strong></p>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="請輸入實習名稱"
            />
          </div>

          <!-- style="text-align:center;" -->

          <br />

          <div class="form-group">
            <p for="inputCity" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>實習內容</strong></p>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="請填寫實習內容"
            ></textarea>
          </div>

          <br />

          <div class="form-group">
            <p for="inputState" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>薪資待遇</strong></p>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="請填寫薪資待遇"
            ></textarea>
          </div>

          <br />

          <div class="form-group">
            <p for="inputZip" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>條件要求</strong></p>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="請填寫條件要求"
            ></textarea>
          </div>

          <br />

          <div class="form-group">
            <p for="inputAddress" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>實習地點</strong></p>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="請輸入實習地點"
            ></textarea>
          </div>

          <br />

          <div class="form-group">
            <p for="inputAddress" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>其他</strong></p>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="其他"
            ></textarea>
          </div>
          <div class="form-group text-center">
            <div class="form-check">
              <input
                type="submit"
                value="發佈實習貼文"
                class="btn"
                style="width: 400px; height: 60px; font-size: 30px; margin:0px auto;"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "../js/axios.js";

export default {
  name: "Post",
  data() {
    return {
      title:null,
      type:null,
      job_desc:null,
      benefits:null,
      requirement:null,
      city:null,
      location:null,
      others:null,
      invalidTitle:false,
      invalidJobDesc:false,
      invalidRequirement:false,
      invalidLocation:false,
      type_arr:[],
      city_arr: [
        { text: "基隆", value: "基隆" },
        { text: "台北", value: "台北" },
        { text: "新北", value: "新北" },
        { text: "桃園", value: "桃園" },
        { text: "新竹", value: "新竹" },
        { text: "苗栗", value: "苗栗" },
        { text: "台中", value: "台中" },
        { text: "南投", value: "南投" },
        { text: "彰化", value: "彰化" },
        { text: "雲林", value: "雲林" },
        { text: "嘉義", value: "嘉義" },
        { text: "台南", value: "台南" },
        { text: "高雄", value: "高雄" },
        { text: "屏東", value: "屏東" },
        { text: "台東", value: "台東" },
        { text: "花蓮", value: "花蓮" },
        { text: "宜蘭", value: "宜蘭" },
        { text: "澎湖", value: "澎湖" },
        { text: "金門", value: "金門" },
        { text: "馬祖", value: "馬祖" },
      ],
    };
  },
  computed:{
    title: function(newValue){
        this.invalidTitle = !newValue
    },
    job_desc: function(newValue){
        this.invalidJobDesc = !newValue
    },
    requirement: function(newValue){
      this.invalidRequirement = !newValue
    },
    location: function(newValue){
      this.invalidLocation = !newValue
    },
  },
  methods: {
    pushPosts: function(){
      this.cp_info = this.$store.getters.getUser
      //axios獲取後臺資料
      var cp_id = this.cp_info.ID
      var api = "/api/company/${cp_id}/cp_posts";
      var params = {
        cp_id:this.cp_id,
        title:this.title,
        type:this.type,
        job_desc:this.job_desc,
        benefits:this.benefits,
        requirement:this.requirement,
        city:this.city,
        location:this.location,
        others:this.others
      }
      axios
        .post(api)
        .then((response) => {
          var msg = response.data.msg
          alert(msg)
        })
        .catch(function (error) {
          // 請求失敗處理
          console.log(error);
        });
    }
  },
  // created() {
    
  // },
};
</script>