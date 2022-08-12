<template>
    <div class="flex flex-col p-6 bg-gray-50 -z-20">
        <HeaderView />
        <div class="flex w-auto">
            <NavbarView />
            <div
                class="m-auto shadow shadow-gray-300 w-4/5 h-auto flex flex-col justify-center items-center p-6 space-y-4 rounded-xl">
                <div class="w-full p-4 flex items-center justify-between">
                    <span class="text-gray-800 font-bold uppercase text-3xl">Enrégistrer une ville</span>
                    <NuxtLink to='/city-list' class="bg-blue-400 rounded-xl p-2 text-white font-bold">
                        Liste des villes
                    </NuxtLink>
                </div>
                <div class="flex p-4 border border-gray-200 bg-white w-full h-auto space-x-4">
                    <div class="p-2 flex flex-col w-1/2 space-y-4">
                        <input v-model="name" type="text"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer le nom de la ville">
                        <input type="text" v-model="excerpt"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer le résumé de la ville">
                        <textarea name="" id="" cols="30" rows="10" v-model="description"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la description de la ville"></textarea>
                    </div>
                    <div class="p-2 flex flex-col w-1/2 space-y-4">
                        <input type="text" v-model="featuredImage"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer une images de mise en avant de la ville">
                        <input type="text" v-model="gallery"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la gallerie de la ville">
                        <input type="text" v-model="country_id"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer le pays de la ville">
                    </div>
                </div>
                <button class="w-full bg-blue-500 text-3xl text-gray-100 p-3 uppercase text-center hover:bg-blue-400"
                    @click="add_new_city">Enrégistrer</button>
            </div>

            <!--  <div>
                <ul>
                    <li v-for="item in items" :key=item>
                    {{ item }}
                   
                    </li>
                </ul>
            </div>-->
        </div>
    </div>
</template>

<script>
import HeaderView from '~/components/HeaderView.vue';
import NavbarView from '~/components/NavbarView.vue';
const Swal = require('sweetalert2')

export default {
    name: 'cityForm',
    components: { HeaderView, NavbarView },
    data() {
        return {
            name: "",
            excerpt: "",
            description: "",
            featuredImage: "",
            location: "",
            gallery: "",
            country_id: "",
        }
    },

    methods: {
        add_new_city() {
            let new_city = {
                name: this.name,
                excerpt: this.excerpt,
                description: this.description,
                featuredImage: this.featuredImage,
                location: this.location,
                gallery: this.gallery,
                country_id: this.country_id,
            }

            if (!new_city) {
                Swal.fire({
                    title: 'erreur!',
                    text: 'Aucun champ ne doit être vide',
                    icon: 'error',
                    confirmButtonText: 'okay'
                })
            } else {
                this.$store.commit("cities/ADD_CITY", new_city);
                Swal.fire({
                    title: 'success!',
                    text: 'Enrégistrement réussi',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
            /* this.name = "",
             this.excerpt = "",
             this.description = "",
             this.featuredImage="",
             this.location="",
             this.gallery="",
             this.tags="",
             this.departureDate="",
             this.meetingAdress="",
             this.price="",
             this.city_id="",
             this.duration="",
             this.vehicleIsAvailable=""*/
            //this.$alert("Enrégistrement réussi!!!");
        }
    }
}

</script>
