<template>
    <div>
        <div class="container d-flex justify-content-center align-items-center">
  <button class="btn btn-dark" @click="$router.push('/admin/new-post')" >Yeni Bir Anime Ekle</button>
</div>
    <PostListVue :is-admin="true" /></div>
</template>
<script>
import PostListVue from '../../components/posts/PostList.vue';

export default {
    layout:"admin",
   components : {
    PostListVue
   }
}
</script>
