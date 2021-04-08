<!-- 企業發文 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br />
    <h3>企業發文</h3>
    <br />
    <div class="panel panel-default col-md-6 offset-3">
      <div class="panel-body text-left" style="padding: 50px">
        <form>
          <div class="form-group">
            <!-- 公司名稱的資料應該是直接從企業註冊資料庫抓出來? -->
            <label for="inputPassword4">公司名稱</label><br />
            這裡顯示公司名稱
            <!-- <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="請輸入公司名稱"
            /> -->
          </div>

          <br />
          
          <div class="form-group">
            <label for="inputEmail4">實習名稱</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="請輸入實習名稱"
            />
          </div>

          <br />

          <div class="form-group">
            <label for="inputCity" class="txet-left">實習內容</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="請填寫實習內容"
            ></textarea>
          </div>

          <br />

          <div class="form-group">
            <label for="inputState">薪資待遇</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="請填寫薪資待遇"
            ></textarea>
          </div>

          <br />

          <div class="form-group">
            <label for="inputZip">條件要求</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="請填寫條件要求"
            ></textarea>
          </div>

          <br />

          <div class="form-group">
            <label for="inputAddress">實習地點</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="請輸入實習地點"
            ></textarea>
          </div>

          <br />

          <div class="form-group">
            <label for="inputAddress">其他</label>
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
                style="width: 400px; height: 60px; font-size: 30px margin:0px auto;"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>