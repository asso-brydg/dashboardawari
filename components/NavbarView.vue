<template>
    <div class="navbar flex flex-col h-auto w-1/5 space-y-4 mt-4 pr-8 font-bold text-gray-600 text-xs font-inter">
        <div class="flex">
            <a href="#" class="focus flex space-x-4">
                <img src="../assets/icons/Feed_solidVueDensemble.svg" alt="" class="iconsConfig">
                <span>Vue d'ensemble</span>
            </a>
        </div>
        <div class="flex flex-col space-y-4">
            <div class="flex justify-between items-center" id="sites">
                <a href="#" class="flex space-x-4">
                    <img src="../assets/icons/Basket_solidsite.svg" alt="" class="iconsConfig">
                    <span>Sites et contenus</span>
                </a>
                <div class="bg-red-200 text-red-600 h-5 w-5 rounded-full text-center">
                    <span>2</span>
                </div>
            </div>
            <div class="hidden ml-7" id="guide">
                <a href="#" class="flex space-x-4">
                    <img src="../assets/icons/Vectorguides.svg" alt="" class="iconsConfig">
                    <span>Guides</span>
                </a>
            </div>
        </div>
        <div>
            <a href="#" class="flex space-x-4">
                <img src="../assets/icons/Switch_solidfinances.svg" alt="" class="iconsConfig" />
                <span>finances</span>
            </a>
        </div>
        <div class="flex justify-between  items-center">
            <a href="#" class="flex space-x-4">
                <img src="../assets/icons/Chat_solidsupport.svg" alt="" class="iconsConfig" />
                <span>Support</span>
            </a>
            <div class="bg-teal-200 text-teal-600 h-5 w-5 rounded-full text-center">
                <span>24</span>
            </div>
        </div>
        <div class="space-y-4" id="users">
            <div>
                <a href="#" class="flex space-x-4">
                    <img src="../assets/icons/Customization_solidusers.svg" alt="" class="iconsConfig" />
                    <span>utilisateurs</span>
                </a>
            </div>
            <div class="ml-7 hidden space-y-4" id="userListe">
                <a href="#" class="flex space-x-4">
                    <img src="../assets/icons/Vectorguides.svg" alt="" class="iconsConfig" />
                    <span>Voyageurs</span>
                </a>
                <a href="#" class="flex space-x-4">
                    <img src="../assets/icons/Vectorguides.svg" alt="" class="iconsConfig" />
                    <span>Hôtes</span>
                </a>
                <a href="#" class="flex space-x-4">
                    <img src="../assets/icons/Vectorguides.svg" alt="" class="iconsConfig" />
                    <span>Guides</span>
                </a>
            </div>
        </div>
        <div>
            <a href="#" class="flex space-x-4">
                <img src="../assets/icons/Mail_solidinbox.svg" alt="" class="iconsConfig" />
                <span>Inbox</span>
            </a>
        </div>
        <div>
            <a href="#" class="flex space-x-4">
                <img src="../assets/icons/emoji_solidnotifications.svg" alt="" class="iconsConfig" />
                <span>Notifications</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbarView'
}

</script>


