<template>
    <div class="flex flex-col p-6 bg-gray-50 ">
        <HeaderView />
        <div class="flex w-auto">
            <NavbarView />
            <div class="flex flex-col w-full">
                <div class="w-3/5 flex flex-col">
                    <SearchBar />
                    <hr />
                </div>
                <div class="w-full flex flex-col space-y-4 mt-8">
                    <div class="w-full flex space-x-4">
                        <div class="w-full p-3 bg-white rounded-xl h-auto flex flex-col space-y-4">
                            <div class="flex justify-between">
                                <span class="text-black text-base ">Total revenus</span>
                            </div>
                            <div class="flex justify-start items-center">
                                <span class="color-red-red ">$18532</span>
                                <span class="text-sm text-gray-300 font-bold mt-2">.52</span>
                            </div>
                            <div class="bg-green-100 text-green-500 rounded-2xl px-2 w-fit">
                                <span>+11%</span>
                            </div>
                        </div>
                        <div class="w-full p-3 bg-white rounded-xl h-auto flex flex-col space-y-4">
                            <div class="flex justify-between">
                                <span class="text-gray-500 text-base">Total revenus</span>
                            </div>
                            <div class="flex justify-start items-center">
                                <span class="text-xl text-gray-800 font-bold">$18532</span>
                                <span class="text-sm text-gray-300 font-bold mt-2">.52</span>
                            </div>
                            <div class="bg-green-100 text-green-500 rounded-2xl px-2 w-fit">
                                <span>+11%</span>
                            </div>
                        </div>
                        <div class="w-full p-3 bg-white rounded-xl h-auto flex flex-col space-y-4">
                            <div class="flex justify-between">
                                <span class="text-gray-500 text-base">Total revenus</span>
                            </div>
                            <div class="flex justify-start items-center">
                                <span class="text-xl text-gray-800 font-bold">$18532</span>
                                <span class="text-sm text-gray-300 font-bold mt-2">.52</span>
                            </div>
                            <div class="bg-green-100 text-green-500 rounded-2xl px-2 w-fit">
                                <span>+11%</span>
                            </div>
                        </div>
                        <div class="w-full p-3 bg-white rounded-xl h-auto flex flex-col space-y-4">
                            <div class="flex justify-between">
                                <span class="text-gray-500 text-base">Total revenus</span>
                            </div>
                            <div class="flex justify-start items-center">
                                <span class="text-xl text-gray-800 font-bold">$18532</span>
                                <span class="text-sm text-gray-300 font-bold mt-2">.52</span>
                            </div>
                            <div class="bg-green-100 text-green-500 rounded-2xl px-2 w-fit">
                                <span>+11%</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col bg-white h-auto w-full p-4 shadow-sm shadow-gray-700 rounded-lg">
                        <span class="text-xl text-gray-800">Filtrer les tickets</span>
                        <div class="flex w-full space-x-4">
                            <select name="" id="" class="w-1/3 h-8 border border-gray-800"></select>
                            <select name="" id="" class="w-1/3 h-8 border border-gray-800"></select>
                            <select name="" id="" class="w-1/3 h-8 border border-gray-800"></select>
                        </div>
                    </div>

                    <div
                        class="flex flex-col bg-white w-full h-auto py-4 shadow-sm shadow-gray-700 rounded-lg space-y-4">
                        <div class="flex justify-between px-2 ">
                            <a href="#"
                                class="flex bg-white border border-gray-500 p-2 rounded-lg items-center justify-center">
                                <img src="../assets/icons/IosShareupload.svg" alt="" height="20" width="20">
                                <span class="text-gray-700 text-sm">EXPORTER</span>
                            </a>
                            <div class="flex space-x-4">
                                <input type="text" placeholder="chercher un ticket"
                                    class="border border-gray-500  text-gray-700 bg-white rounded-lg p-2">
                                <a href="#" class="w-fit p-2 bg-blue-700 text-white uppercase rounded-lg">créer
                                    ticket</a>
                                <a href="#">
                                    <img src="../assets/icons/More IcondotsVertical.svg" alt="" width="20" height="20">
                                </a>
                            </div>
                        </div>
                        <div class="flex w-full h-auto p-3 justify-between items-center space-x-4 bg-gray-200">
                            <input type="checkbox">
                            <span
                                class="border-gray-300 text-gray-500 font-bold pr-4 border-r-2 flex items-center justify-center uppercase">utilisateur</span>
                            <span
                                class="border-gray-300 text-gray-500 font-bold pr-4 border-r-2 flex items-center justify-center uppercase">rôle</span>
                            <span
                                class="border-gray-300 text-gray-500 font-bold pr-4 border-r-2 flex items-center justify-center uppercase">sujet</span>
                            <span
                                class="border-gray-300 text-gray-500 font-bold pr-4 border-r-2 flex items-center justify-center uppercase">activité</span>
                            <span
                                class="border-gray-300 text-gray-500 font-bold pr-4 border-r-2 flex items-center justify-center uppercase">date
                                de soumission</span>
                            <span
                                class="border-gray-300 text-gray-500 font-bold pr-4 border-r-2 flex items-center justify-center uppercase">status</span>
                            <span
                                class="border-gray-300 text-gray-500 font-bold pr-4 border-r-2 flex items-center justify-center uppercase">action</span>
                        </div>
                        <div class="flex w-full h-auto px-3 justify-between items-center space-x-4 bg-white">
                            <input type="checkbox">
                            <div
                                class="border-gray-300 text-gray-500 font-bold pr-4 flex items-center justify-center space-x-4">
                                <img src="../assets/images/avatar.png" alt="" height="20" width="20"
                                    class="rounded-full">
                                <span>Dayana Garcia</span>
                            </div>
                            <span
                                class="border-gray-300 text-gray-500 font-bold pr-4 flex items-center justify-center ">Voyageur</span>
                            <span
                                class="border-gray-300 text-gray-500 font-bold pr-4 flex items-center justify-center ">Guides</span>
                            <span
                                class="border-gray-300 text-gray-500 font-bold pr-4 flex items-center justify-center ">Lomé
                                city tour</span>
                            <span
                                class="border-gray-300 text-gray-500 font-bold pr-4 flex items-center justify-center ">15
                                jun - 15 sep</span>
                            <div
                                class="border-gray-300 text-gray-500 font-bold pr-4 flex items-center justify-center space-x-4">
                                <div class="w-28 h-2 bg-orange-400"></div>
                                <span>en attente</span>
                            </div>
                            <img src="../assets/icons/More IcondotsVertical.svg" alt="" width="20" height="20">
                        </div>
                        <a href="#"
                            class="w-full h-auto flex justify-between items-center bg-gray-300 border-y border-gray-400 p-1">
                            <span class="font-bold text-sm">Charger plus</span>
                            <img src="../assets/icons/IconButtondown.svg" alt="">
                        </a>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderView from './HeaderView.vue';
import NavbarView from './NavbarView.vue';
import SearchBar from './SearchBar.vue';
export default {
  name: 'SupportView',
  components:{ SearchBar, HeaderView, NavbarView }
}
</script>


