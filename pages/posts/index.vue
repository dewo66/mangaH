<template>
  <div>postlar 
    <PostListVue :posts="mangaData"  /></div>
</template>
<script>
import PostListVue from "../../components/posts/PostList.vue";
export default {
  components: {
    PostListVue,
  },
  data() {
    return {
      mangaData: [
        {
          mangaName: "konasubarashi",
          bolumSayisi: 22,
          durumu: "devam ediyor...",
          img: "şimdillik boş",
        },
        {
          mangaName: "kahramanı öldür",
          bolumSayisi: 43,
          durumu: "devam ediyor...",
          img: "şimdillik boş",
        },
        {
          mangaName: "kara leydi",
          bolumSayisi: 55,
          durumu: "devam ediyor...",
          img: "şimdillik boş",
        },
        {
          mangaName: "nasıl dövüşün",
          bolumSayisi: 33,
          durumu: "devam ediyor...",
          img: "şimdillik boş",
        },
        {
          mangaName: "süper amca",
          bolumSayisi: 26,
          durumu: "devam ediyor...",
          img: "şimdillik boş",
        },
        {
          mangaName: "canlı",
          bolumSayisi: 35,
          durumu: "devam ediyor...",
          img: "şimdillik boş",
        },
      ],
    };
  },
};
</script>
