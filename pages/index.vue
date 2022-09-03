<template>
  <section>
    <h1>Ana Sayfa</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consectetur ea atque iure! Nemo quidem perspiciatis reiciendis similique corrupti rem laudantium, nam magni neque quo provident amet suscipit! Accusamus ducimus impedit quidem, commodi consequatur similique iste rerum excepturi corrupti nisi dolores quibusdam ab architecto, dignissimos voluptas? Non ratione tenetur at, temporibus exercitationem, neque sunt et architecto distinctio voluptas modi molestiae labore ullam adipisci harum, ut praesentium itaque repellendus quaerat? Similique laudantium magnam eos veniam sit accusamus nesciunt facilis consequuntur quo tenetur voluptates quae ipsum, ex facere illum, deleniti odit explicabo molestiae minima dignissimos magni. Nihil saepe labore ea a corrupti?</p>
  <PostListVue  :posts="mangaData" ></PostListVue>
  </section>
</template>

<script>
  import PostListVue from '../components/posts/PostList.vue';
export default {
  components: {
    PostListVue
  },
  data() {
    return {
    };
  },
  asyncData(context, callback){
    setTimeout(() => {
      console.log("çalıştı")
      callback(null, {
      mangaData : [
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
      ]
    })
    },2000  )

  }
}
</script>