<template>
  <form class="bs-example bs-example-form" role="form">
      <div class="row align-items-center">
        <div class="col-lg-12 text-left">
          <br />
          <div class="panel panel-default">
            <div class="panel-body" style="border-style: ridge">
              <div class="ppp-intern1">
                <div class="row">
                  <div class="col-lg-2">
                    <img
                      src="../assets/圖片1.png"
                      alt="internsandwich"
                      height="150px"
                    />
                  </div>
                  <div class="col-lg-10">
                    <p style="font-size: 40px">
                      <strong>這是公司名稱</strong>
                    </p>

                    <div class="row">
                      <div class="col-lg-6">
                        <p style="font-size: 20px">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-caret-right-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                            /></svg
                          ><strong>&nbsp;地址：</strong>這是公司地址
                        </p>

                        <p style="font-size: 20px">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-caret-right-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                            /></svg
                          ><strong>&nbsp;電話：</strong>這是公司電話
                        </p>
                        <p style="font-size: 20px">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-caret-right-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                            /></svg
                          ><strong>&nbsp;email：</strong>這是公司email
                        </p>
                        <div
                          class="btn-group btn-group-toggle float-center"
                          data-toggle="buttons"
                          style="float: center"
                        >
                          <router-link to="/businessposts">
                            <label class="btn btn-light btn-sm">
                              公司貼文
                            </label>
                          </router-link>
                          <router-link to="/businesscomments">
                            <label class="btn btn-light btn-sm">
                              公司評論
                            </label>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
</template>

<script>
export default {
  name: "Business_info_user",
  props: {
    cp_info: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.routerlink {
  color: black;
}
#panel_popular {
  background-color: #ebf2ff54;
}
</style>