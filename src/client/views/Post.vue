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