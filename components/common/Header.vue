<template>
     <div class="pill-nav">
    <nuxt-link to="about"> about</nuxt-link>
    <nuxt-link to="announcements"> announcements</nuxt-link>
    <nuxt-link to="categories"> categories</nuxt-link>
   <nuxt-link to="posts">postlar</nuxt-link>
    <div><searchingVue/></div>
    
    </div>
</template>
<script>

import searchingVue from '../searching.vue';
export default {
  components:{
    searchingVue
  }
}</script>



<style>
.pill-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:row;
}
.pill-nav a {
  display: inline-block;
  color: whitesmoke;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 5px;
}

.pill-nav a:hover {
  background-color: #ddd;
  color: black;
}

.pill-nav a.active {
  background-color: dodgerblue;
  color: white;
}</style>
