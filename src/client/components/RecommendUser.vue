<template>
  <div class="col-lg-3">
    <p class="text-left">
      <strong>{{ title }}</strong>
    </p>
    <div id="Recommend" v-for="users in recommend_users">
      <router-link
        :to="{ name: 'Profile', params: { resume_id: users.ID - 1 } }"
        class="routerlink"
      >
        <div class="panel_popular">
          <div class="panel-body">
            <div class="row">
              <div class="col-lg-3">
                <img
                  src="../assets/圖片2.png"
                  alt="internsandwich"
                  style="height: 70px"
                />
              </div>
              <div class="col-lg-9">
                <p style="font-size: 20px" align="left">{{ users.name }}</p>
                <p style="font-size: 20px" align="left">
                  {{ users.skills }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </router-link>
      <hr border-style="solid" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommend_users: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
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