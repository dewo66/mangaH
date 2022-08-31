<template>
    <div class="input-container" >
        <input type="text" v-model="animeID" >
        <button class="button-green" @click="animeGo" >Animeyi Göstre</button>
    </div>
</template>

<script>
export default {
    data() {
        return{
            animeID:null
        }
    },
    methods:{
        animeGo() {
            this.$router.push("/announcements/" + this.productID)
        }
    }
}
</script>
<style>
input{
    border: none;
    outline: none;
    height: 30px;
    font-size: 18px;
    color: #35495e;
}
.input-container {
    padding: 20px;
    border: 1px solid #688fb9;
    background-color: #35495e;
    box-shadow: 2px 3px 8px rgba(0, 0, 0, 1);
}
</style>
