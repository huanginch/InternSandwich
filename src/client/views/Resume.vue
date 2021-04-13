<!-- 履歷模板 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br />
    <h3>履歷模板</h3>
    <br />
    <div class="panel panel-default col-md-6 offset-3">
      <div class="panel-body text-left" style="padding: 50px">
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputEmail4">姓名</label><br />
              {{resume_info[0].name}}
              <!-- <input
                type="姓名"
                class="form-control"
                id="inputEmail4"
                placeholder="請輸入姓名"
              /> -->
            </div>
            <div class="form-group col-md-4">
              <label for="inputPassword4">性別</label><br />
              {{resume_info[0].gender}}
              <!-- <input
                type="性別"
                class="form-control"
                id="inputEmail4"
                placeholder="請輸入性別"
              /> -->
            </div>
            <div class="form-group col-md-4">
              <label for="inputPassword4">生日</label><br />
              {{resume_info[0].birth}}
              <!-- <input
                type="生日"
                class="form-control"
                id="inputEmail4"
                placeholder="請輸入生日"
              /> -->
            </div>
          </div>

          <br />

          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputEmail4">學校</label><br />
              {{resume_info[0].school}}
              <!-- <input
                type="學校"
                class="form-control"
                id="inputEmail4"
                placeholder="請輸入學校"
              /> -->
            </div>
            <div class="form-group col-md-4">
              <label for="inputEmail4">電話</label><br />
              {{resume_info[0].phone}}
              <!-- <input
                type="電話"
                class="form-control"
                id="inputEmail4"
                placeholder="請輸入電話"
              /> -->
            </div>
            <div class="form-group col-md-4">
              <label for="inputPassword4">email</label><br />
              {{resume_info[0].email}}
              <!-- <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="請輸入email"
              /> -->
            </div>
          </div>

          <br />

          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputCity" class="txet-left">期望職位</label>
              <input v-model="exp_position" type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">期望待遇</label>
              <select v-model="exp_treatment" id="inputState" class="form-control">
                <option selected>月薪22K</option>
                <option>月薪30K</option>
                <option>月薪40K</option>
                <option>月薪50K</option>
                <option>月薪50K以上</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="inputZip">期望工作地</label>
              <select v-model="exp_location" id="inputState" class="form-control">
                <option selected>台北</option>
                <option>新竹</option>
                <option>台中</option>
                <option>台南</option>
                <option>高雄</option>
              </select>
            </div>
          </div>

          <br />

          <div class="form-group">
            <label for="inputAddress">學經歷</label>
            <textarea
              v-model="edu_and_exp"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="參請填寫真實學經歷"
            ></textarea>
          </div>

          <br />

          <div class="form-group">
            <label for="inputAddress">技能專長</label>
            <textarea
              v-model="skills"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="語言能力等"
            ></textarea>
          </div>

          <br />

          <div class="form-group">
            <label for="inputAddress2">其他加分條件</label>
            <textarea
              v-model="others"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="參賽成績、交換經驗等"
            ></textarea>
          </div>

          <div class="form-group">
            附件
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
              <!-- <input class="form-check-input" type="checkbox" />
              <label class="form-check-label" for="gridCheck">
                同意服務條款
              </label>
              <br /><br /> -->
              <input
                @click="sendResume"
                type="submit"
                value="送出履歷"
                class="btn"
                style="width: 400px; height: 60px; font-size: 30px; margin:0px auto;"
              />
            </div>
          </div>
          <!-- <div class="text-center">
            <button type="submit" class="btn btn-primary">送出履歷</button>
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../js/axios.js";
export default {
  name: "Profile",
  
  data() {
    return {
      resume_id: "",
      resume_info: [],
      exp_position:"",
      exp_treatment:"",
      exp_location:"",
      edu_and_exp:"",
      skills:"",
      others:""
    };
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    
  },
  created() {
    this.resume_id = this.$store.getters.getUser.ID;
    var api = "/api/resume";

    axios
      .get(api)
      .then((response) => {
        var _this = this
        this.resume_info = response.data;
        this.resume_info = this.resume_info.filter(function (d,index) {
          return d.u_id.toString().indexOf(_this.resume_id) > -1; //過濾關鍵字
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>