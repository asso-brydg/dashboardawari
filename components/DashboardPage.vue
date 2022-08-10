<template>
  <div class="p-4 bg-gray-50 h-auto w-auto flex flex-col">
    <HeaderView />
    <i class="las la-search"></i>
    <div class="body flex text-gray-500 text-xs font-bold py-10 px-6">
      <navbarView />
      <div class="cards flex flex-col h-auto w-4/5 space-y-4">
        <div class="top w-full flex space-x-4">
          <div class="planCard h-full w-2/3 bg-white rounded-xl flex flex-col p-3 space-y-5">
            <div class="h-auto w-full flex justify-between">
              <span>19 juillet 2022</span>
              <div class="w-1/3 flex space-x-2 text-gray-300">
                <a href="#"
                  class="w-6 h-6 border text-gray-300 flex items-center justify-center border-gray-200 rounded-lg p-1">
                  <img src="../assets/icons/Iconleft.svg" alt=""></a>
                <a href="#" class="w1/2 border border-gray-200 rounded-lg p-1">Aujourd'hui</a>
                <a href="#"
                  class="w-6 h-6 border text-gray-300 flex items-center justify-center border-gray-200 rounded-lg p-1"><img
                    src="../assets/icons/Vectorright.svg" alt=""></a>
              </div>
            </div>
            <div class="flex items-start justify-start text-start">
              <span class="text-3xl font-bold text-black">Planning activités</span>
            </div>
            <div class="flex space-x-4 items-center justify-between">
              <div class="flex space-x-4 items-center justify-center text-xs">
                <img src="../assets/images/avatar.png" alt="" class="rounded-full border border-gray-500" height="30"
                  width="30"> <span>Lomé city tour</span>
              </div>
              <div><span class="text-xs font-semibold text-centre">TG</span></div>
              <!--<div class="flex space-x-4">-->
              <div class="flex space-x-3">
                <div class="bg-yellow-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">En attente</span>
                  <span class="text-black text-sm">220</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="bg-green-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">En cours</span>
                  <span class="text-black text-sm">190</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="bg-red-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">Annulé</span>
                  <span class="text-black text-sm">40</span>
                </div>
              </div>
              <!-- </div>-->
            </div>

            <div class="flex space-x-4 items-center justify-between">
              <div class="flex space-x-4 items-center justify-center text-xs">
                <img src="../assets/images/avatar.png" alt="" class="rounded-full border border-gray-500" height="30"
                  width="30"> <span>Lomé city tour</span>
              </div>
              <div><span class="text-xs font-semibold text-centre">TG</span></div>
              <!--<div class="flex space-x-4">-->
              <div class="flex space-x-3">
                <div class="bg-yellow-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">En attente</span>
                  <span class="text-black text-sm">220</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="bg-green-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">En cours</span>
                  <span class="text-black text-sm">190</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="bg-red-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">Annulé</span>
                  <span class="text-black text-sm">40</span>
                </div>
              </div>
              <!-- </div>-->
            </div>

            <div class="flex space-x-4 items-center justify-between">
              <div class="flex space-x-4 items-center justify-center text-xs">
                <img src="../assets/images/avatar.png" alt="" class="rounded-full border border-gray-500" height="30"
                  width="30"> <span>Lomé city tour</span>
              </div>
              <div><span class="text-xs font-semibold text-centre">TG</span></div>
              <!--<div class="flex space-x-4">-->
              <div class="flex space-x-3">
                <div class="bg-yellow-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">En attente</span>
                  <span class="text-black text-sm">220</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="bg-green-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">En cours</span>
                  <span class="text-black text-sm">190</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="bg-red-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">Annulé</span>
                  <span class="text-black text-sm">40</span>
                </div>
              </div>
              <!-- </div>-->
            </div>

            <div class="flex space-x-4 items-center justify-between">
              <div class="flex space-x-4 items-center justify-center text-xs">
                <img src="../assets/images/avatar.png" alt="" class="rounded-full border border-gray-500" height="30"
                  width="30"> <span>Lomé city tour</span>
              </div>
              <div><span class="text-xs font-semibold text-centre">TG</span></div>
              <!--<div class="flex space-x-4">-->
              <div class="flex space-x-3">
                <div class="bg-yellow-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">En attente</span>
                  <span class="text-black text-sm">220</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="bg-green-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">En cours</span>
                  <span class="text-black text-sm">190</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="bg-red-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">Annulé</span>
                  <span class="text-black text-sm">40</span>
                </div>
              </div>
              <!-- </div>-->
            </div>

            <div class="flex space-x-4 items-center justify-between">
              <div class="flex space-x-4 items-center justify-center text-xs">
                <img src="../assets/images/avatar.png" alt="" class="rounded-full border border-gray-500" height="30"
                  width="30"> <span>Lomé city tour</span>
              </div>
              <div><span class="text-xs font-semibold text-centre">TG</span></div>
              <!--<div class="flex space-x-4">-->
              <div class="flex space-x-3">
                <div class="bg-yellow-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">En attente</span>
                  <span class="text-black text-sm">220</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="bg-green-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">En cours</span>
                  <span class="text-black text-sm">190</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="bg-red-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">Annulé</span>
                  <span class="text-black text-sm">40</span>
                </div>
              </div>
              <!-- </div>-->
            </div>

            <div class="flex space-x-4 items-center justify-between">
              <div class="flex space-x-4 items-center justify-center text-xs">
                <img src="../assets/images/avatar.png" alt="" class="rounded-full border border-gray-500" height="30"
                  width="30"> <span>Lomé city tour</span>
              </div>
              <div><span class="text-xs font-semibold text-centre">TG</span></div>
              <!--<div class="flex space-x-4">-->
              <div class="flex space-x-3">
                <div class="bg-yellow-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">En attente</span>
                  <span class="text-black text-sm">220</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="bg-green-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">En cours</span>
                  <span class="text-black text-sm">190</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="bg-red-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">Annulé</span>
                  <span class="text-black text-sm">40</span>
                </div>
              </div>
              <!-- </div>-->
            </div>

            <div class="flex space-x-4 items-center justify-between">
              <div class="flex space-x-4 items-center justify-center text-xs">
                <img src="../assets/images/avatar.png" alt="" class="rounded-full border border-gray-500" height="30"
                  width="30"> <span>Lomé city tour</span>
              </div>
              <div><span class="text-xs font-semibold text-centre">TG</span></div>
              <!--<div class="flex space-x-4">-->
              <div class="flex space-x-3">
                <div class="bg-yellow-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">En attente</span>
                  <span class="text-black text-sm">220</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="bg-green-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">En cours</span>
                  <span class="text-black text-sm">190</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <div class="bg-red-500 h-3 w-3 rounded-full"></div>
                <div class="flex flex-col">
                  <span class="text-gray-500 text-xs">Annulé</span>
                  <span class="text-black text-sm">40</span>
                </div>
              </div>
              <!-- </div>-->
            </div>
          </div>
          <div class="statsAreaflex w-1/3 h-auto space-x-4 flex">
            <div class="flex w-full flex-col space-y-4">
              <div class="bg-blue-800 rounded-xl flex flex-col space-y-2 p-4">
                <span class="text-blue-300 text-sm font-medium">Site touristiques</span>
                <div class="flex space-x-2">
                  <div><span class="text-white text-bold text-2xl">150</span></div>
                  <div class="flex flex-col space-y-1">
                    <span class="text-white text-bold text-2xl">sites ajoutés</span>
                    <span class="text-blue-300 text-sm font-medium">90 sites actifs</span>
                  </div>
                </div>
                <div class="flex space-x-2">
                  <div><span class="text-white text-bold text-2xl">150</span></div>
                  <div class="flex flex-col space-y-1">
                    <span class="text-white text-bold text-2xl">sites ajoutés</span>
                    <span class="text-blue-300 text-sm font-medium">90 sites actifs</span>
                  </div>
                </div>
                <div class="flex space-x-2">
                  <div><span class="text-white text-bold text-2xl">150</span></div>
                  <div class="flex flex-col space-y-1">
                    <span class="text-white text-bold text-2xl">sites ajoutés</span>
                    <span class="text-blue-300 text-sm font-medium">90 sites actifs</span>
                  </div>
                </div>
                <div class="p-0 flex items-end justify-end">
                  <a href="#" class="bg-white/50 text-white text-base rounded-2xl p-2 flex w-fit">
                    <span>Créer un site</span>
                    <img src="../assets/icons/Iconplus.svg" alt="">
                  </a>
                </div>
              </div>
              <div class="bg-violet-800 rounded-xl flex flex-col space-y-2 p-4">
                <span class="text-violet-300 text-sm font-medium">Site touristiques</span>
                <div class="flex space-x-2">
                  <div><span class="text-white text-bold text-2xl">150</span></div>
                  <div class="flex flex-col space-y-1">
                    <span class="text-white text-bold text-2xl">sites ajoutés</span>
                    <span class="text-violet-300 text-sm font-medium">90 sites actifs</span>
                  </div>
                </div>
                <div class="flex space-x-2">
                  <div><span class="text-white text-bold text-2xl">150</span></div>
                  <div class="flex flex-col space-y-1">
                    <span class="text-white text-bold text-2xl">sites ajoutés</span>
                    <span class="text-violet-300 text-sm font-medium">90 sites actifs</span>
                  </div>
                </div>
                <div class="flex space-x-2">
                  <div><span class="text-white text-bold text-2xl">150</span></div>
                  <div class="flex flex-col space-y-1">
                    <span class="text-white text-bold text-2xl">sites ajoutés</span>
                    <span class="text-violet-300 text-sm font-medium">90 sites actifs</span>
                  </div>
                </div>
                <div class="p-0 flex items-end justify-end">
                  <a href="#" class="bg-white/50 text-white text-base rounded-2xl p-2 flex w-fit">
                    <span>Créer un site</span>
                    <img src="../assets/icons/Iconplus.svg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom h-2/5 flex space-x-4">
          <div class="bg-white rounded-xl flex flex-col p-4 w-1/3">
            <div class="flex justify-between items-center">
              <span>
                Revenus générés
              </span>
              <a href="#" class="border border-gray-200 p-2 rounded-md">...</a>
            </div>
          </div>
          <div class="bg-white rounded-xl flex flex-col p-4 w-1/3">
            <div class="flex justify-between items-center">
              <span>
                Incidents signalés
              </span>
              <a href="#" class="border border-gray-200 p-2 rounded-md">...</a>
            </div>
            <div class="flex justify-between p-5">
              <div class="w-1/2 flex space-x-6">
                <img src="../assets/icons/Figma-logo 1figma.svg" alt="">
                <span>Figma</span>
              </div>
              <div class="w-1/2 flex justify-end">
                <span>4h 30min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css">

export default {
  name: 'DashboardPage',
  components:{HeaderView}
}
