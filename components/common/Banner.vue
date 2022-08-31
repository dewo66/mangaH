<template>
    
<div class="container-fluid bg">
    <div class="overlay"></div>
    <h1 class="text-center text-white">Nuxt.js | Köse Yazıları</h1>
</div>
</template>


<style scoped>
.bg{
            background-image: url(../../static/images/bg.jpg);
            height: 300px;
            position: relative;
            display: flex;
            justify-content:center;
            align-items:center;
            padding: 0px;
        }
        .bg h1{
            z-index: 1;
            font-size: 60px;
        }
        .overlay{
            width: 100%!important;
            height: 100%!important;
            background-color: rgba(0,0,0,.4);
            position: absolute;
            top: 0px;
            left:0px;
        }
    </style>