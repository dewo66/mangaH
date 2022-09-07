<template>
  <section>
    <h1>Ana Sayfa</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
      consectetur ea atque iure! Nemo quidem perspiciatis reiciendis similique
      corrupti rem laudantium, nam magni neque quo provident amet suscipit!
      Accusamus ducimus impedit quidem, commodi consequatur similique iste rerum
      excepturi corrupti nisi dolores quibusdam ab architecto, dignissimos
      voluptas? Non ratione tenetur at, temporibus exercitationem, neque sunt et
      architecto distinctio voluptas modi molestiae labore ullam adipisci harum,
      ut praesentium itaque repellendus quaerat? Similique laudantium magnam eos
      veniam sit accusamus nesciunt facilis consequuntur quo tenetur voluptates
      quae ipsum, ex facere illum, deleniti odit explicabo molestiae minima
      dignissimos magni. Nihil saepe labore ea a corrupti?
    </p>
    <PostListVue :posts="mangaData"></PostListVue>
  </section>
</template>

<script>
import { resolve } from "path";
import { reject } from "q";
import PostListVue from "../components/posts/PostList.vue";
export default {
  modules: ['@nuxtjs/axios'],
  components: {
    PostListVue,
  },
  data() {
    return {
      options : {
  method: 'POST',
  url: 'https://anilistmikilior1v1.p.rapidapi.com/createThread',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '9c6f69a844msh2a8344726ced6a1p1afb62jsnfc27ec3242c9',
    'X-RapidAPI-Host': 'Anilistmikilior1V1.p.rapidapi.com'
  },
  data: encodedParams
},
    };
  },
  asyncData({ $axios }) {
    const ip = await $axios.$get('http://icanhazip.com')
  return { ip }
    
  },
};
</script>

<!--

    .then(data => {
      console.log(data)
    })
    .catch(e => {
      context.error(new Error());
    })
-->
