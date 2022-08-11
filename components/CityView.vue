<template>
    <div class="flex flex-col p-6 bg-gray-50 -z-20">
        <HeaderView />
        <div class="flex w-auto">
            <NavbarView />
            <div class="flex flex-col w-full">
                <div class="flex flex-col w-3/5">
                    <SearchBar />
                    <hr />
                </div>
                <div class="flex flex-col mt-6 space-y-4">
                    <div class="w-3/6 h-auto p-0 space-y-4 relative">
                        <span class="z-10">Photo de couverture</span>
                        <span class="z-10">Lomé</span>
                        <div class="z-10 flex space-x-4">
                            <div class="w-8 h-8 p-2 rounded-full">
                                <img src="../assets/icons/Arrow Leftarrowleft.svg" alt="">
                            </div>
                            <div class="w-8 h-8 p-2 bg-white border rounded-full">
                                <img src="../assets/icons/Shapearrowright.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full space-x-4 mt-96">
                        <div class="flex flex-col w-1/4 h-auto p-4 space-y-3 bg-white rounded-xl">
                            <div class="flex justify-between">
                                <span class="text-base text-gray-500">Guides</span>
                                <img src="../assets/icons/More IcondotsVertical.svg" alt="" width="20">
                            </div>
                            <span class="text-xl font-bold text-gray-800">125</span>
                            <div class="flex items-center justify-between">
                                <span class="text-xs">01.09.2021</span>
                                <div class="w-8 h-8 p-2 border rounded-full">
                                    <img src="../assets/icons/Iconplus.svg" alt="" width="20" height="20">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col w-1/4 h-auto p-4 space-y-3 bg-white rounded-xl">
                            <div class="flex justify-between">
                                <span class="text-base text-gray-500">Hôtes</span>
                                <img src="../assets/icons/More IcondotsVertical.svg" alt="" width="20">
                            </div>
                            <div class="flex">
                                <span class="text-xl font-bold text-gray-800">125</span>
                                <span class="text-gray-800 mt-1">/adults</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex justify-center items-center">
                                    <div class="relative flex">
                                        <img src="../assets/images/avatar.png" alt="" height="35" width="35"
                                            class="rounded-full">
                                        <img src="../assets/images/avatar.png" alt="" height="35" width="35"
                                            class="rounded-full absolute left-5 border border-white">
                                    </div>
                                    <span class="ml-8 text-center">charles, jackk</span>
                                </div>
                                <div class="w-8 h-8 p-2 border rounded-full">
                                    <img src="../assets/icons/Iconplus.svg" alt="" width="20" height="20">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col w-auto h-auto p-4 space-y-3 bg-white rounded-xl">
                            <div class="flex justify-between">
                                <span class="text-base text-gray-500">Expériences</span>
                                <img src="../assets/icons/More IcondotsVertical.svg" alt="" width="20">
                            </div>
                            <span class="text-xl font-bold text-gray-800">Lomé city Tour</span>
                            <div class="flex items-center justify-center space-x-8">
                                <div class="flex justify-center space-x-2 items-center">
                                    <div class="flex space-x-1">
                                        <img src="../assets/icons/Poland Flagpoland.svg" alt="" width="20" height="20">
                                        <span class="font-semibold text-gray-800 text-sm">Poland</span>
                                    </div>
                                    <img src="../assets/icons/Arrows Icon Greyboucle.svg" alt="" width="20" height="20">
                                    <div class="flex space-x-1">
                                        <img src="../assets/icons/Italy Flagitaly.svg" alt="" width="20" height="20">
                                        <span class="font-semibold text-gray-800 text-sm">Italy</span>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <img src="../assets/icons/Shapeavion.svg" alt="" width="15" height="15">
                                    <span class="font-semibold text-gray-800 text-sm">4h 30 min</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-100 rounded-xl p-6 flex flex-col w-2/3 space-y-2">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-6">
                                <span class="text-3xl font-bold text-gray-800">Gestionnaire d'activités</span>
                                <div class="w-8 h-8 p-2 border rounded-full">
                                    <img src="../assets/icons/Iconplus.svg" alt="" width="20" height="20">
                                </div>
                            </div>
                            <div class="flex space-x-4">
                                <span class="text-gray-800 font-semibold text-base">Filtrer</span>
                                <img src="../assets/icons/Sort Iconfilter.svg" alt="" width="20" height="20">
                            </div>
                        </div>
                        <div class="flex justify-between py-5 px-3">
                            <div class="flex space-x-12">
                                <span class="text-gray-400 text-sm ">#</span>
                                <div class="h-6 w-6 rounded-full"></div>
                                <span class="text-gray-400 text-sm ">Nom</span>
                            </div>
                            <div class="flex space-x-10">
                                <span class="text-gray-400 text-sm w-24">Guides/Hôtes</span>
                                <span class="text-gray-400 text-sm w-20">Tags</span>
                            </div>
                        </div>

                        <div class="flex flex-col">
                            <div class="flex justify-between p-3 hover:bg-white rounded-xl hover:shadow hover:shadow-gray-400">
                                <div class="flex space-x-12">
                                    <span class="text-gray-800 text-sm ">1</span>
                                    <div class="h-6 w-6 rounded-full bg-white"></div>
                                    <span class="text-gray-800 text-sm ">Visite du musée</span>
                                </div>
                                <div class="flex space-x-10">
                                    <span class="text-gray-800 text-sm font-semibold w-24">Artur</span>
                                    <a href="#"
                                        class="rounded-xl bg-orange-600 text-white w-20 flex items-center justify-center">culture</a>
                                </div>
                            </div>

                            <div class="flex justify-between p-3 hover:bg-white rounded-xl hover:shadow hover:shadow-gray-400">
                                <div class="flex space-x-12">
                                    <span class="text-gray-800 text-sm ">2</span>
                                    <div class="h-6 w-6 rounded-full border border-gray-400 bg-white"></div>
                                    <span class="text-gray-800 text-sm ">King hourse tour</span>
                                </div>
                                <div class="flex space-x-10">
                                    <div class="flex items-start justify-start w-24">
                                        <img src="../assets/images/avatar.png" alt="" width="25" height="25"
                                            class="rounded-full">
                                    </div>
                                    <div class="flex w-20 items-center justify-center">
                                        <img src="../assets/icons/Edit Iconpincel.svg" alt="" width="20" height="20">
                                        <img src="../assets/icons/Comment Iconmessage.svg" alt="" width="20"
                                            height="20">
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-between p-3 hover:bg-white rounded-xl hover:shadow hover:shadow-gray-400">
                                <div class="flex space-x-12">
                                    <span class="text-gray-800 text-sm ">3</span>
                                    <div class="h-6 w-6 rounded-full bg-white"></div>
                                    <span class="text-gray-800 text-sm ">Visite du musée</span>
                                </div>
                                <div class="flex space-x-10">
                                    <span class="text-gray-800 text-sm font-semibold w-24">Artur</span>
                                    <a href="#"
                                        class="rounded-xl bg-orange-600 text-white w-20 flex items-center justify-center">Souvenirs</a>
                                </div>
                            </div>


                            <div class="flex justify-between p-3 hover:bg-white rounded-xl hover:shadow hover:shadow-gray-400">
                                <div class="flex space-x-12">
                                    <span class="text-gray-800 text-sm ">4</span>
                                    <div class="h-6 w-6 rounded-full bg-white"></div>
                                    <span class="text-gray-800 text-sm ">Visite du musée</span>
                                </div>
                                <div class="flex space-x-10">
                                    <span class="text-gray-800 text-sm font-semibold w-24">Marta</span>
                                    <a href="#"
                                        class="rounded-xl bg-red-600 text-white w-20 flex items-center justify-center">Urban
                                        tour</a>
                                </div>
                            </div>
                        </div>
                        <a href="#"
                            class="w-full border border-gray-500 flex items-center justify-center text-gray-500 bg-white text-base rounded-2xl py-2 space-x-3">
                            <span>Ajouter une activité</span>
                            <img src="../assets/icons/Iconplus.svg" alt="" width="20" height="20">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderView from './HeaderView.vue';
import NavbarView from './NavbarView.vue';
export default {
  name: 'CityView',
  components:{ HeaderView, navbarView, SearchBar, HeaderView, NavbarView }
}

</script>
