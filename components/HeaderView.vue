<template>
  <div class="flex flex-col space-y-6 justify-center">
    <div class="flex justify-between items-center mb-4">
      <div>
        <h1 class="text-2xl font-extrabold text-gray-600">
          <NuxtLink to="/dashboard">Awari Togo</NuxtLink>
        </h1>
      </div>
      <div class="text-xs space-x-3 text-gray-300 font-bold">
        <a href="#">Dashboard</a>
        <a href="#">Cards</a>
        <a href="#">Workflow</a>
        <a href="#">Notifications</a>
        <a href="#">Settings</a>
      </div>
      <div class="flex text-xs space-x-4 text-gray-500 font-bold">
        <img src="../assets/icons/Vectorsearch.svg" alt="" class="text-gray-50 iconsConfig" height="10" width="10">
        <input type="text" placeholder="Trouver un utilisateur" class="bg-gray-50">
      </div>
      <div class="flex space-x-4">
        <div class="relative">
          <div class="h-2 w-2 bg-green-500 rounded-full absolute top-0 right-0"></div>
          <img src="../assets/images/avatar.png" alt="" height="35" width="35" class="rounded-full">
        </div>
        <div class="flex flex-col text-xs space-y-1 text-gray-500 font-bold justify-center text-center">
          <span class="text-black text-sm font-extrabold">Charles DZADU</span>
          <span class="text-xs">Super administrateur</span>
        </div>
        <div class="flex text-xs text-gray-300 font-bold items-center justify-center space-x-3">
          <a href="#">
            <img src="../assets/icons/Iconsettings.svg" alt="" class="iconsConfig" />
          </a>
          <a href="#">
            <img src="../assets/icons/Iconpower.svg" alt="" class="iconsConfig" @click="logout" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchBar from './SearchBar.vue';
import { mapGetters } from "vuex";

export default {
  middleware: 'auth',
  name: "HeaderView",
  components: { SearchBar },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/LogOut").then(()=>{
         this.$router.push({ path: 'sign-in' })
      })
    }
  }
}

</script>
