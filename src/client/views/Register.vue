<!-- 註冊 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br />
    <h3>實習生註冊</h3>
    <br />

    <router-link class="text-right" to="/login">企業註冊</router-link>
    <!-- <button
      type="btn"
      value="企業註冊"
      class="btn"
      style="width: 200px; height: 60px; font-size: 30px"
    /> -->
    <div class="panel panel-default col-md-6 offset-3">
      <div class="panel-body" style="padding: 50px">
        <form>
          <div class="form-group col-md-12 text-left">
            <label for="userId">姓 名</label>
            <input
              type="text"
              class="form-control"
              placeholder="請輸入真實姓名"
              id="userId"
              name="userId"
            />
            <br />
            <label for="password">生 日</label>
            <input
              type="password"
              class="form-control"
              placeholder="範例:199910110"
              id="password"
              name="password"
            />
            <br />
            <label for="password">身分證字號</label>
            <input
              type="password"
              class="form-control"
              placeholder="範例:A123456789"
              id="password"
              name="password"
            />
            <br />
            <label for="password">就讀學校</label>
            <input
              type="password"
              class="form-control"
              placeholder="範例:OO大學"
              id="password"
              name="password"
            />
            <br />
            <label for="password">電話</label>
            <input
              type="password"
              class="form-control"
              placeholder="範例:0987654321"
              id="password"
              name="password"
            />
            <br />
            <label for="password">Email</label>
            <input
              type="password"
              class="form-control"
              placeholder="範例:oooo@gmail.com"
              id="password"
              name="password"
            />
            <br />
            <label for="password">帳號</label>
            <input
              type="password"
              class="form-control"
              placeholder="請輸入欲申請帳號"
              id="password"
              name="password"
            />
            <br />
            <label for="password">密碼</label>
            <input
              type="password"
              class="form-control"
              placeholder="請輸入8位以上字元或數字"
              id="password"
              name="password"
            />
            <br />
            <label for="password">確認密碼</label>
            <input
              type="password"
              class="form-control"
              placeholder="請確認兩次密碼輸入相同"
              id="password"
              name="password"
            />
          </div>
          <br />
          <div class="checkbox">
            <label class="form-check-label" for="gridCheck">
              <input class="form-check-input" type="checkbox" />
              同意服務條款
            </label>
            <br /><br />
            <input
              type="submit"
              value="立即註冊"
              class="btn"
              style="width: 400px; height: 60px; font-size: 30px margin:0px auto;"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>