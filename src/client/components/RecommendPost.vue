<template>
<div class="col-lg-3 text-left">
  <p class="text-left">
    <strong>{{title}}</strong>
  </p>
    <div id="Recommend" v-for="posts in recommend_posts" :key="posts.id">
    <router-link :to="{ name: 'Intern', params: { post_id: posts.id }}" class="routerlink">
    <div class="panel">
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
            <p style="font-size: 20px" align="left">{{posts.title}}</p>
            <p style="font-size: 20px" align="left">{{posts.cp_name}}</p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
  </div>

</div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommend_posts: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
  },
}
</script>

<style>
 .routerlink{ 
  color: black;
}
 
</style>