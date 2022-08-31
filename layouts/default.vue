<template>
    <div>
        <HeaderVue/>
        <BannerVue/>
        <nuxt/>
        <footerVue/>
    </div>
</template>

<script>
import HeaderVue from '../components/common/Header.vue';
import BannerVue from '../components/common/Banner.vue';
import FooterVue from '../components/common/Footer.vue'

export default {
    components:{
        HeaderVue,
        BannerVue,
        FooterVue,
    }
}

</script>
<style>
</style>