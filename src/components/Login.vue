<!--登入頁面-->
<template>
    <div class="Container" id="login">
      <div class="row">
        <div class="col-4">
        </div>
        <div class="col-md-4 col-md-offset-4">
            <h1 class="page-header">使用者登入</h1>
            <form role="form">
                <div class="form-group">
                    <label for="userId">使用者名稱：</label>
                    <input type="text" class="form-control" placeholder="請輸入賬號" id="userId" name="userId">
                </div>
                <div class="form-group">
                    <label for="password">密 碼：</label>
                    <input type="password" class="form-control" placeholder="請輸入密碼" id="password" name="password">
                </div>
                <div class="checkbox">
                    <label><input type="checkbox"/>記住密碼</label><br/>
                    <input type="submit" value="登入" class="btn"/>
                </div>
            </form>
        </div>
        <div class="col-4">
        </div>
      </div> 
    </div>
    </template>
    