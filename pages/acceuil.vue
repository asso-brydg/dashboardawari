<template>
    <div class="bg-gray-50 h-auto w-auto flex flex-col p-6">
        <HeaderView />
        <div class="body flex text-gray-500 text-xs font-bold">
            <NavbarView />
            <div class="h-screen w-full relative flex " id="cont">
                <video autoplay class="h-full w-full">
                    <source src="../Gallerie/video.mp4">
                </video>
                <div class="h-full w-full absolute bg-white opacity-25 text-center flex items-center justify-center">
                    <span class="text-black m-auto text-3xl font-bold">BIENVENU SUR LE DASHBOARD DE AWARI</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderView from '~/components/HeaderView.vue';
import NavbarView from '~/components/NavbarView.vue';
export default {
    name: 'acceuil',
    components: { HeaderView, NavbarView },
    methods: {
        togle() {

        }
    },

}
</script>

<style>
/* @import '~/assets/css/style.css'*/
</style>
 