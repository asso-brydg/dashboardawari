<template>
    <div class="navbar flex flex-col h-auto w-1/5 space-y-4 mt-4 pr-8 font-bold text-gray-600 text-xs font-inter">
        <div class="flex">
            <NuxtLink to='/site-list' class="focus flex space-x-4">
                <img src="../assets/icons/Feed_solidVueDensemble.svg" alt="" class="iconsConfig">
                <span>Sites</span>
            </NuxtLink>
        </div>
        <div class="flex flex-col space-y-4">
            <div class="flex justify-between items-center" id="sites">
                <NuxtLink to='/country-list' class="flex space-x-4">
                    <img src="../assets/icons/Basket_solidsite.svg" alt="" class="iconsConfig">
                    <span>Pays</span>
                </NuxtLink>
                <div class=" hidden bg-red-200 text-red-600 h-5 w-5 rounded-full text-center">
                    <span>2</span>
                </div>
            </div>
            <div class="hidden ml-7" id="guide">
                <NuxtLink to='/' class="flex space-x-4">
                    <img src="../assets/icons/Vectorguides.svg" alt="" class="iconsConfig">
                    <span>Guides</span>
                </NuxtLink>
            </div>
        </div>
        <div>
            <NuxtLink to='/city-list' class="flex space-x-4">
                <img  src="../assets/icons/Switch_solidfinances.svg" alt="" class="iconsConfig" />
                <span>villes</span>
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to='/' class="flex space-x-4">
                <img src="../assets/icons/Switch_solidfinances.svg" alt="" class="iconsConfig" />
                <span>Notifications</span>
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to='/' class="flex space-x-4">
                <img src="../assets/icons/Switch_solidfinances.svg" alt="" class="iconsConfig" />
                <span>Réservations</span>
            </NuxtLink>
        </div>
        <div class=" hidden flex justify-between  items-center">
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
                <NuxtLink to='/' class="flex space-x-4">
                    <img src="../assets/icons/Customization_solidusers.svg" alt="" class="iconsConfig" />
                    <span>utilisateurs</span>
                </NuxtLink>
            </div>
            <div class="ml-7  space-y-4" id="userListe">
                <NuxtLink to='/' class="flex space-x-4">
                    <img src="../assets/icons/Vectorguides.svg" alt="" class="iconsConfig" />
                    <span>administrateur</span>
                </NuxtLink>
                <NuxtLink to='/' class="flex space-x-4">
                    <img src="../assets/icons/Vectorguides.svg" alt="" class="iconsConfig" />
                    <span>guides</span>
                </NuxtLink>
                <NuxtLink to='/' class="flex space-x-4">
                    <img src="../assets/icons/Vectorguides.svg" alt="" class="iconsConfig" />
                    <span>clients</span>
                </NuxtLink>
            </div>
        </div>
        <div>
            <NuxtLink to='/experience-list' class="flex space-x-4">
                <img src="../assets/icons/Mail_solidinbox.svg" alt="" class="iconsConfig" />
                <span>expériences</span>
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to='/activities-list' class="flex space-x-4">
                <img src="../assets/icons/emoji_solidnotifications.svg" alt="" class="iconsConfig" />
                <span>activité</span>
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to='/category-list' class="flex space-x-4">
                <img src="../assets/icons/emoji_solidnotifications.svg" alt="" class="iconsConfig" />
                <span>catégorie</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbarView'
}

</script>


