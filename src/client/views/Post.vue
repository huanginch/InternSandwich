<!-- 刊登實習 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br />

    <Business_info :cp_info="cp_info" />
    
 
    <div
      class="panel panel-default col-md-9"
      style="border-style: ridge"
    >
      <div class="panel-body" style="padding: 50px">
        <form>
          <div class="form-group">
            <label
              style="
                font-size: 25px;
                background-color: #bcddfc71;
                width: 200px;
                border-radius: 20px;
              "
            >
              <strong>實習名稱</strong>
            </label>
            <input
              v-model="title"
              for="inputState"
              class="form-control"
              placeholder="請輸入實習名稱"
            />
          </div>

          <br />

          <div class="form-group">
            <label
              for="inputState"
              style="
                font-size: 25px;
                background-color: #bcddfc71;
                width: 200px;
                border-radius: 20px;
              "
            >
              <strong>實習類別</strong>
            </label>
            <select v-model="type" class="form-control">
              <option>行銷</option>
              <option>資訊</option>
              <option>行政</option>
              <option>化學</option>
              <option>物理</option>
            </select>
          </div>

          <br />

          <div class="form-group">
            <label
              for="inputCity"
              style="
                font-size: 25px;
                background-color: #bcddfc71;
                width: 200px;
                border-radius: 20px;
              "
            >
              <strong>實習內容</strong>
            </label>
            <textarea
              v-model="job_desc"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="請填寫實習內容"
            ></textarea>
          </div>

          <br />

          <div class="form-group">
            <label
              for="inputState"
              style="
                font-size: 25px;
                background-color: #bcddfc71;
                width: 200px;
                border-radius: 20px;
              "
            >
              <strong>薪資待遇</strong>
            </label>
            <select
              v-model="benefits"
              id="inputState"
              class="form-control"
            >
              <option>月薪22K</option>
              <option>月薪30K</option>
              <option>月薪40K</option>
              <option>月薪50K</option>
              <option>月薪50K以上</option>
            </select>
          </div>

          <br />

          <div class="form-group">
            <label
              for="inputZip"
              style="
                font-size: 25px;
                background-color: #bcddfc71;
                width: 200px;
                border-radius: 20px;
              "
            >
              <strong>條件要求</strong>
            </label>
            <textarea
              v-model="requirement"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="請填寫條件要求"
            ></textarea>
          </div>

          <br />

          <div class="form-group">
            <label
              for="inputAddress"
              style="
                font-size: 25px;
                background-color: #bcddfc71;
                width: 200px;
                border-radius: 20px;
              "
            >
              <strong>實習地點</strong>
            </label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <select
                  v-model="city"
                  id="inputState"
                  class="form-control"
                  style="width: 120px"
                >
                  <option>基隆</option>
                  <option>台北</option>
                  <option>新北</option>
                  <option>桃園</option>
                  <option>新竹</option>
                  <option>苗栗</option>
                  <option>台中</option>
                  <option>南投</option>
                  <option>彰化</option>
                  <option>雲林</option>
                  <option>嘉義</option>
                  <option>台南</option>
                  <option>高雄</option>
                  <option>屏東</option>
                  <option>台東</option>
                  <option>花蓮</option>
                  <option>宜蘭</option>
                  <option>澎湖</option>
                  <option>金門</option>
                  <option>馬祖</option>
                </select>
              </div>
              <input
                type="text"
                class="form-control"
                v-model="location"
                placeholder="請輸入地址"
              />
            </div>
          </div>

          <br />

          <div class="form-group">
            <label
              for="inputAddress"
              style="
                font-size: 25px;
                background-color: #bcddfc71;
                width: 200px;
                border-radius: 20px;
              "
            >
              <strong>其他</strong>
            </label>
            <textarea
              v-model="others"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="其他"
            ></textarea>
          </div>

           <div class="form-group">
            <label style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>附件</strong></label>
            <ul
              class="pagination pagination-sm justify-content-center"
              style="margin: 20px 0"
            >
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
              /><br />
            </ul>
          </div>

          <div class="form-group text-center">
            <div class="form-check">
              <input
                @click="pushPosts"
                value="發佈實習貼文"
                class="btn"
                style="
                  width: 400px;
                  height: 60px;
                  font-size: 30px;
                  margin: 0px auto;
                "
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
import Business_info from "../components/Business_info.vue";

export default {
  name: "Post",
  components: {
    Business_info,
  },
  data() {
    return {
      cp_info:[],
      title: "",
      type: "",
      job_desc: "",
      benefits: "",
      requirement: "",
      city: "",
      location: "",
      others: "",
      invalidTitle: false,
      invalidJobDesc: false,
      invalidRequirement: false,
      invalidLocation: false,
    };
  },
  watch: {
    title: function (newValue) {
      this.invalidTitle = !newValue;
    },
    job_desc: function (newValue) {
      this.invalidJobDesc = !newValue;
    },
    requirement: function (newValue) {
      this.invalidRequirement = !newValue;
    },
    location: function (newValue) {
      this.invalidLocation = !newValue;
    },
  },
  methods: {
    pushPosts: function () {
      this.cp_info = this.$store.getters.getUser;
      //axios獲取後臺資料
      var cp_id = this.cp_info.ID;
      var api = `/api/company/${cp_id}/cp_posts`;
      var params = {
        cp_id: this.cp_id,
        title: this.title,
        type: this.type,
        job_desc: this.job_desc,
        benefits: this.benefits,
        requirement: this.requirement,
        city: this.city,
        location: this.location,
        others: this.others,
      };
      axios
        .post(api, params)
        .then((response) => {
          var msg = response.data.msg;
          alert(msg);
        })
        .catch(function (error) {
          // 請求失敗處理
          console.log(error);
        });
    },
  },
  created() {
    this.cp_info = this.$store.getters.getUser;
  },
};
</script>