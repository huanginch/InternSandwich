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
            <!-- 姓名的資料應該是直接從註冊資料庫抓出來? -->
            <div class="form-group col-md-4">
              <label for="inputEmail4">姓名</label><br />
              這裡顯示姓名
              <!-- <input
                type="姓名"
                class="form-control"
                id="inputEmail4"
                placeholder="請輸入姓名"
              /> -->
            </div>
            <!-- 性別的資料應該是直接從註冊資料庫抓出來? -->
            <div class="form-group col-md-4">
              <label for="inputPassword4">性別</label><br />
              這裡顯示性別
              <!-- <input
                type="性別"
                class="form-control"
                id="inputEmail4"
                placeholder="請輸入性別"
              /> -->
            </div>
            <!-- 生日的資料應該是直接從註冊資料庫抓出來? -->
            <div class="form-group col-md-4">
              <label for="inputPassword4">生日</label><br />
              這裡顯示生日
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
            <!-- 學校的資料應該是直接從註冊資料庫抓出來? -->
            <div class="form-group col-md-4">
              <label for="inputEmail4">學校</label><br />
              這裡顯示學校
              <!-- <input
                type="學校"
                class="form-control"
                id="inputEmail4"
                placeholder="請輸入學校"
              /> -->
            </div>
            <!-- 電話的資料應該是直接從註冊資料庫抓出來? -->
            <div class="form-group col-md-4">
              <label for="inputEmail4">電話</label><br />
              這裡顯示電話
              <!-- <input
                type="電話"
                class="form-control"
                id="inputEmail4"
                placeholder="請輸入電話"
              /> -->
            </div>
            <!-- email的資料應該是直接從註冊資料庫抓出來? -->
            <div class="form-group col-md-4">
              <label for="inputPassword4">email</label><br />
              這裡顯示email
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
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">期望待遇</label>
              <select id="inputState" class="form-control">
                <option selected>月薪22K</option>
                <option>月薪30K</option>
                <option>月薪40K</option>
                <option>月薪50K</option>
                <option>月薪50K以上</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="inputZip">期望工作地</label>
              <select id="inputState" class="form-control">
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