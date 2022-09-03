<template>
  <div>postlar <PostDetailVue :post="fetchedPost" /></div>
</template>
<script>
import PostDetailVue from "../../components/posts/PostDetail.vue";
export default {
  components: {
    PostDetailVue,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPost: {
          id: "1",
          title: "Attack On Titan",
          subTitle: "shingeki no kyojin",
          text: "Attack on Titan, 7 Nisan 2013'te prömiyeri yapılan Hajime Isayama'nın aynı adlı mangasından uyarlanan bir Japon karanlık fantezi anime televizyon dizisidir. Japonya'da NHK General TV'de ve çeşitli Asya-Pasifik'te Aniplus Asia'da yayınlandı. ülkeler.",
        },
      });
    }, 1500);
  },
};
</script>
