<template>
  <div class="p-4 bg-gray-50 h-auto w-auto flex flex-col">
    <HeaderView />
    <i class="las la-search"></i>
    <div class="body flex text-gray-500 text-xs font-bold py-10 px-6">
      <NavbarView />
      <div class="">
        <div>
            <img src="" alt="">
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
  components: { HeaderView, NavbarView }
}
</script>

<style>
    @import '~/assets/css/style.css'
</style>
