<template>
  <div>postlar <PostDetailVue :post="fetchedPost" /></div>
</template>
<script>
import PostDetailVue from "../../components/posts/PostDetail.vue";
export default {
  components: {
    PostDetailVue,
  },
  computed: {
    fetchedPost(){
      return this.$store.getters.getPosts
    },
  },
};
</script>
