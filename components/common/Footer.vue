<template>
    <div class="pill-nav">
   <nuxt-link to="about"> hakkımda</nuxt-link>
   <nuxt-link to="announcements"> bişeyler </nuxt-link>
   <nuxt-link to="categories"> bişeyler</nuxt-link>
   </div>
</template>
<script>
</script>
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
}
</style>
