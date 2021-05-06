<template>
  <div class="col-lg-3 text-left">
    <p class="text-left">
      <strong>{{ title }}</strong>
    </p>
    <div id="Recommend" v-for="posts in recommend_posts" :key="posts.id">
      <router-link
        :to="{ name: 'Intern', params: { post_id: posts.id } }"
        class="routerlink"
        @click.native="addcounter(posts.id, posts.counter, 0)"
      >
        <div class="panel_popular">
          <div class="panel-body">
            <div class="row">
              <div class="col-lg-3">
                <img
                  src="../assets/圖片1.png"
                  alt="internsandwich"
                  style="height: 70px"
                />
              </div>
              <div class="col-lg-9">
                <p style="font-size: 20px" align="left">{{ posts.title }}</p>
                <pre style="font-size: 20px" align="left">{{ posts.job_desc }}</pre>
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
    recommend_posts: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    addcounter: {
      type: Function,
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