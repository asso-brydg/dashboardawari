<template>
    <div class="flex flex-col">
        <HeaderView/>
        <div class="flex">
            <NavbarView/>
            <Nuxt></Nuxt>
        </div>
    </div>
</template>

<script>
import HeaderView from '~/components/HeaderView.vue';
import NavbarView from '~/components/NavbarView.vue';
export default {
  components: { HeaderView, NavbarView }
}
</script>