<template>
<div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <form style="width: 500px" @submit.prevent="onsubmit" >
        <fieldset>
            <legend>Yeni Köse Yazısı</legend>
            <div class="form-group">
                <label>Yazar Adı</label>
                <input  v-model="post.author"  type="text" class="form-control" placeholder="Yazarın adını giriniz..">
            </div>
            <div class="form-group">
                <label>Baslık</label>
                <input  v-model="post.title" type="text" class="form-control" placeholder="Yazının baslıgını giriniz..">
            </div>
            <div class="form-group">
                <label>Alt Baslık</label>
                <input v-model="post.supTitle"  type="text" class="form-control" placeholder="Yazının alt baslıgını giriniz..">
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Köse Yazısı</label>
                <textarea v-model="post.text"  class="form-control" rows="5"></textarea>
            </div>
            <button class="btn btn-danger">İptal</button>
            <button type="submit" class="btn btn-primary">Kaydet</button>
        </fieldset>
    </form>
</div>
</template>
<script>
    export default {
        data() {
            return {
                post : {
                    title:null,
                    supTitle:null,
                    author:null,
                    text:null
                }
            }
        },
        methods:{
            onsubmit(){
                console.log(this.post)
            },
        }
    }
</script>