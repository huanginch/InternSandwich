<!-- 登入 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br />
    <h3>會員登入</h3>
    <br />
    <div class="panel panel-default col-md-6 offset-3">
      <div class="panel-body" style="padding: 50px">
        <form>
          <div class="form-group col-md-12 text-left">
            <label for="userId">帳 號</label>
            <input
              type="text"
              class="form-control"
              placeholder="請輸入帳號"
              id="userId"
              name="userId"
            />
          </div>

          <br />

          <div class="form-group col-md-12 text-left">
            <label for="password">密 碼</label>
            <input
              type="password"
              class="form-control"
              placeholder="請輸入密碼"
              id="password"
              name="password"
            />
          </div>

          <br />

          <div class="checkbox">
            <label class="form-check-label" for="gridCheck">
              <input class="form-check-input" type="checkbox" />
              記住密碼
            </label>
            <br /><br />
            <input
              type="submit"
              value="立即登入"
              class="btn"
              style="width: 400px; height: 60px; font-size: 30px margin:0px auto;"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>