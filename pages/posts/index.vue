<template>
  <div>postlar <PostDetailVue :post="fetchedPost" /></div>
</template>
<script>
import PostDetailVue from "../../components/posts/PostDetail.vue";
export default {
  components: {
    PostDetailVue,
  },
  created(){

  },
  computed: {
    fetchedPost(){
      return this.$store.getters.getPosts
    },
  },
  /*
  fetch(context) {
    console.log(context);
    return new Promise((resolve, reject) => {
      context.store.dispatch("setPosts", );

      resolve();
    }).catch((e) => {
      context.error(e);
    });
  },
  */
};
</script>
