<!-- 履歷模板 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br />
    <h3>履歷模板</h3>
    <br />
    <div class="panel panel-default col-md-8 offset-2" style="border-style:ridge">
      <div class="panel-body" style="padding: 50px">
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputEmail4" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>姓名</strong></label><br />
              {{resume_info[0].name}}
              <!-- <input
                type="姓名"
                class="form-control"
                id="inputEmail4"
                placeholder="請輸入姓名"
              /> -->
            </div>
            <div class="form-group col-md-4">
              <label for="inputPassword4" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>性別</strong></label><br />
              {{resume_info[0].gender}}
              <!-- <input
                type="性別"
                class="form-control"
                id="inputEmail4"
                placeholder="請輸入性別"
              /> -->
            </div>
            <div class="form-group col-md-4">
              <label for="inputPassword4" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>生日</strong></label><br />
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
              <label for="inputEmail4" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>學校</strong></label><br />
              {{resume_info[0].school}}
              <!-- <input
                type="學校"
                class="form-control"
                id="inputEmail4"
                placeholder="請輸入學校"
              /> -->
            </div>
            <div class="form-group col-md-4">
              <label for="inputEmail4" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>電話</strong></label><br />
              {{resume_info[0].phone}}
              <!-- <input
                type="電話"
                class="form-control"
                id="inputEmail4"
                placeholder="請輸入電話"
              /> -->
            </div>
            <div class="form-group col-md-4">
              <label for="inputPassword4" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>email</strong></label><br />
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
              <label for="inputCity" class="txet-left" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>期望職位</strong></label>
              <input v-model="exp_position" type="text" class="form-control" id="inputCity" />
              <font size='2' color='red' v-if="invalidEP">*該欄位不得為空</font>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>期望待遇</strong></label>
              <select v-model="exp_treatment" id="inputState" class="form-control">
                <option selected>月薪22K</option>
                <option>月薪30K</option>
                <option>月薪40K</option>
                <option>月薪50K</option>
                <option>月薪50K以上</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="inputZip" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>期望工作地</strong></label>
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
            <p for="inputAddress" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>學經歷</strong></p>
            <textarea
              v-model="edu_and_exp"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="參請填寫真實學經歷"
            ></textarea>
            <font size='2' color='red' v-if="invalidEaE">*該欄位不得為空</font>
          </div>

          <br />

          <div class="form-group">
            <p for="inputAddress" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>技能專長</strong></p>
            <textarea
              v-model="skills"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="語言能力等"
            ></textarea>
            <font size='2' color='red' v-if="invalidSkills">*該欄位不得為空</font>
          </div>

          <br />

          <div class="form-group">
            <p for="inputAddress2" style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>其他加分條件</strong></p>
            <textarea
              v-model="others"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="參賽成績、交換經驗等"
            ></textarea>
          </div>

          <div class="form-group">
            <p style="font-size: 25px;background-color:#bcddfc71;width:200px;border-radius:20px;"><strong>附件</strong></p>
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
      others:"",
      invalidEP:false,
      invalidEaE:false,
      invalidSkills:false,
    };
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  watch:{
    exp_position: function(newValue){
      this.invalidEP = !newValue
    },
    edu_and_exp: function(newValue){
      this.invalidEaE = !newValue
    },
    skills: function(newValue){
      this.invalidSkills = !newValue
    },
  },
  methods: {
    sendResume: function(){
      if(!this.others){
        this.others = "無";
      }
      var api = "/api/resume";
      var params = {
        exp_position: this.exp_position,
        exp_treatment: this.exp_treatment,
        exp_location: this.exp_location,
        edu_and_exp: this.edu_and_exp,
        skills: this.skills,
        others: this.others
      }

      axios
      .post(api,params)
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      });
    }
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

        if(this.resume_info.skills){
          this.exp_position = this.resume_info.exp_position
          this.exp_location = this.resume_info.exp_location
          this.exp_treatment = this.resume_info.exp_treatment
          this.edu_and_exp = this.resume_info.edu_and_exp
          this.skills = this.resume_info.skills
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>