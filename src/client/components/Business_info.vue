<template>
  <form class="bs-example bs-example-form" role="form">
    <div class="row align-items-center">
      <div class="col-lg-12 text-left">
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
                    <strong>{{ cp_info.name }}</strong>
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
                        ><strong>&nbsp;地址：</strong>{{ cp_info.address }}
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
                        ><strong>&nbsp;電話：</strong>{{ cp_info.phone }}
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
                        ><strong>&nbsp;email：</strong>{{ cp_info.email }}
                      </p>
                      <div
                        class="btn-group btn-group-toggle float-center"
                        data-toggle="buttons"
                        style="float: center"
                      >
                        <router-link to="/myposts">
                          <label class="btn btn-light btn-sm"> 我的實習 </label>
                        </router-link>
                        <router-link to="/post">
                          <label class="btn btn-light btn-sm"> 刊登實習 </label>
                        </router-link>
                        <router-link to="/mailbox">
                          <label class="btn btn-light btn-sm"> 履歷信箱 </label>
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
  name: "Business_info",
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