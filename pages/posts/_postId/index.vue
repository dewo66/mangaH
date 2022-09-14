<template>
    <PostDetail :post="fetchedPost"/>
</template>
<script>
import PostDetail from '../../../components/posts/PostDetail.vue';

    export default {
        components: {
            PostDetail
        },
        data() {
            return {

            fetchedPost: { 
            id: "1",
            title: "Attack On Titan",
            subTitle: "shingeki no kyojin",
            text: "Attack on Titan, 7 Nisan 2013'te prömiyeri yapılan Hajime Isayama'nın aynı adlı mangasından uyarlanan bir Japon karanlık fantezi anime televizyon dizisidir. Japonya'da NHK General TV'de ve çeşitli Asya-Pasifik'te Aniplus Asia'da yayınlandı. ülkeler.",
            },
                
                
        }
    }
}

</script>





