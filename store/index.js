import Vuex from "vuex";
const createStore = () => {
return new Vuex.Store({
    state:{
        fetchedPost:[
            {
            id: "1",
            title: "Attack On Titan",
            subTitle: "shingeki no kyojin",
            text: "Attack on Titan, 7 Nisan 2013'te prömiyeri yapılan Hajime Isayama'nın aynı adlı mangasından uyarlanan bir Japon karanlık fantezi anime televizyon dizisidir. Japonya'da NHK General TV'de ve çeşitli Asya-Pasifik'te Aniplus Asia'da yayınlandı. ülkeler.",
            },
            {
            id: "2",
            title: "Attack On Titan",
            subTitle: "shingeki no kyojin",
            text: "Attack on Titan, 7 Nisan 2013'te prömiyeri yapılan Hajime Isayama'nın aynı adlı mangasından uyarlanan bir Japon karanlık fantezi anime televizyon dizisidir. Japonya'da NHK General TV'de ve çeşitli Asya-Pasifik'te Aniplus Asia'da yayınlandı. ülkeler.",
            },
            {
            id: "3",
            title: "Attack On Titan",
            subTitle: "shingeki no kyojin",
            text: "Attack on Titan, 7 Nisan 2013'te prömiyeri yapılan Hajime Isayama'nın aynı adlı mangasından uyarlanan bir Japon karanlık fantezi anime televizyon dizisidir. Japonya'da NHK General TV'de ve çeşitli Asya-Pasifik'te Aniplus Asia'da yayınlandı. ülkeler.",
            },
        ]
    },
    mutations:{
        setPosts(state,posts){
            state.fetchedPost = posts
        }
    },
    actions:{
        nuxtServerInit(vuexContext , context ){
            vuexContext.commit("setPosts", [
                {
                id: "1",
                title: "Attack On Titan",
                subTitle: "shingeki no kyojin",
                text: "Attack on Titan, 7 Nisan 2013'te prömiyeri yapılan Hajime Isayama'nın aynı adlı mangasından uyarlanan bir Japon karanlık fantezi anime televizyon dizisidir. Japonya'da NHK General TV'de ve çeşitli Asya-Pasifik'te Aniplus Asia'da yayınlandı. ülkeler.",
                },
                {
                id: "2",
                title: "Attack On Titan",
                subTitle: "shingeki no kyojin",
                text: "Attack on Titan, 7 Nisan 2013'te prömiyeri yapılan Hajime Isayama'nın aynı adlı mangasından uyarlanan bir Japon karanlık fantezi anime televizyon dizisidir. Japonya'da NHK General TV'de ve çeşitli Asya-Pasifik'te Aniplus Asia'da yayınlandı. ülkeler.",
                },
                {
                id: "3",
                title: "Attack On Titan",
                subTitle: "shingeki no kyojin",
                text: "Attack on Titan, 7 Nisan 2013'te prömiyeri yapılan Hajime Isayama'nın aynı adlı mangasından uyarlanan bir Japon karanlık fantezi anime televizyon dizisidir. Japonya'da NHK General TV'de ve çeşitli Asya-Pasifik'te Aniplus Asia'da yayınlandı. ülkeler.",
                },
            ])
        },
        setPosts(vuexContext,posts){
            vuexContext.commit("setPosts",posts)
        }
    },
    getters:{
        getPosts(state){
            return state.fetchedPost
        }
    }
})
}

export default createStore