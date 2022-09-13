<template>
  <div class="container-fluid">
    <Post
      :post="post"
      v-for="post in posts"
      :is-admin="isAdmin"
      :key="post.id"
    />
  </div>
</template>

<script>
import Post from "./Post";
export default {
  components: {
    Post,
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
    posts: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style scoped>
.container-fluid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.container-fluid div {
  margin-right: 5px;
}
</style>
