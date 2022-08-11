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
                <div class="w-full flex space-x-4 mt-8">
                    <div class="w-1/5 flex flex-col flex-wrap space-y-4">
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
                    <div class="flex flex-col space-y-4 w-2/5">
                        <div class="flex flex-col w-full h-auto bg-white rounded-xl space-y-4 p-6">
                            <div class="flex items-center justify-between">
                                <span class="font-bold text-base text-black">Report</span>
                                <img src="../assets/icons/Icondots.svg" alt="">
                            </div>
                            <img src="../assets/icons/Chartstats.svg" alt="">
                        </div>
                        <div class="flex flex-col w-full h-auto bg-white rounded-xl space-y-4 p-6">
                            <div class="flex items-center justify-between">
                                <span class="font-bold text-base text-black">Report</span>
                                <img src="../assets/icons/Icondots.svg" alt="">
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex space-x-4">
                                    <img src="../assets/images/avatar.png" alt="" height="35" width="35"
                                        class="rounded-full">
                                    <div
                                        class="flex flex-col text-xs space-y-1 text-gray-500 font-bold justify-start items-start text-start">
                                        <span class="text-black text-sm font-extrabold">Règlement d'activités</span>
                                        <span class="text-xs">Charles junior</span>
                                    </div>
                                </div>
                                <div class="flex text-xs text-gray-300 font-bold items-center justify-center space-x-3">
                                    <span class="text-green-500">+ $300.58</span>
                                </div>
                            </div>
                        </div>
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
    name: 'FinancesView',
    components: {HeaderView, NavbarView, SearchBar }
}

</script>
