import Vuex from "vuex";
const createStore = () => {
return new Vuex.Store({
    state:{
        fetchedPost:[]
    },
    mutations:{
        setPosts(state,posts){
            state.fetchedPost = posts
        }
    },
    actions:{
        setPosts(vuexContext,posts){
            vuexContext.commit("setPosts",posts)
        }
    },
    getters:{}
})
}

export default createStore