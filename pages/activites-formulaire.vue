<template>
    <div class="flex flex-col p-6 bg-gray-50 -z-20">
        <HeaderView />
        <div class="flex w-auto">
            <NavbarView />
            <div
                class="m-auto shadow shadow-gray-300 w-4/5 h-auto flex flex-col justify-center items-center p-6 space-y-4 rounded-xl">
                <div class="w-full p-4 flex items-center justify-between">
                    <span class="text-gray-800 font-bold uppercase text-3xl">Enrégistrer une activité</span>
                    <NuxtLink to='/activities-list' class="bg-blue-400 rounded-xl p-2 text-white font-bold">
                        Liste des activités
                    </NuxtLink>
                </div>

                <div class="flex p-4 border border-gray-200 bg-white w-full h-auto space-x-4">
                    <div class="p-2 flex flex-col w-1/2 space-y-4">
                        <input v-model="name" type="text"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer le nom de l'activité">
                        <input type="text" v-model="excerpt"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer le résumé de l'activité">
                        <textarea name="" id="" cols="30" rows="10" v-model="description"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la description de l'activité"></textarea>
                        <input type="text" v-model="featuredImage"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer une images de mise en avant de l'activité">
                        <input type="text" v-model="location"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la d'adresse de l'activité">
                        <input type="text" v-model="gallery"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la gallerie de l'activité">
                    </div>
                    <div class="p-2 flex flex-col w-1/2 space-y-4">
                        <input type="text" v-model="tags"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer les tags de l'activité">
                        <input type="date" v-model="departureDate"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la date de départ de l'activité">
                        <input type="text" v-model="meetingAdress"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer l'adresse de meetingAdress de l'activité">
                        <input type="number"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer le prix de l'activité" v-model="price">
                        <input type="text" v-model="city_id"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la ville de l'activité">

                        <input type="number" v-model="duration"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la durée de l'activité (en jours)">
                        <input type="text" v-model="vehicleIsAvailable"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Présence de véhicule (répondre par oui ou non)">
                    </div>

                </div>
                <button class="w-full bg-blue-500 text-3xl text-gray-100 p-3 uppercase text-center hover:bg-blue-400"
                    @click="add_new_activity">Enrégistrer</button>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderView from '~/components/HeaderView.vue';
import NavbarView from '~/components/NavbarView.vue';
const Swal = require('sweetalert2')
import axios from "axios"
const BASE_URL = url;
import { url } from "./url";
export default {
    name: 'activityForm',
    components: { HeaderView, NavbarView },
    computed: {
        /*  activity() {
              return this.$store.state.activities['oneActivity']
          }*/
    },
    mounted() {
        let id = this.$route.query["_id"]
        if (id) {
            axios.get(BASE_URL + '/activities/' + id).then((result) => {
                this.activity = result.data
                console.log(result.data)
            }).catch((error) => {
                console.log("some error occured", error);
            })
            this.update_activity(id)
        }
    },
    data() {
        let id = this.$route.query["_id"]
        /*Je veux récupérer les données ici pour pouvoir les mettres dans les inputs */
        let donnee = {
            name: 'nom'
        }
        if (id) {
            return {
                activity: {},
                name: "",
               /* excerpt: donnee.excerpt,
                description: donnee.description,
                featuredImage: donnee.featuredImage,
                location: donnee.location,
                gallery: donnee.gallery,
                tags: donnee.tags,
                departureDate: donnee.departureDate,
                meetingAdress: donnee.meetingAdress,
                price: donnee.price,
                city_id: donnee.city_id,
                duration: donnee.duration,
                vehicleIsAvailable: donnee.vehicleIsAvailable*/
            }
        } else {
            return {
                name: "",
                excerpt: "",
                description: "",
                featuredImage: "",
                location: "",
                gallery: "",
                tags: "",
                departureDate: "",
                meetingAdress: "",
                price: "",
                city_id: "",
                duration: "",
                vehicleIsAvailable: ""
            }
        }
    },

    methods: {
        add_new_activity() {
            if (this.vehicleIsAvailable == "oui") {
                this.vehicleIsAvailable = true
            } else {
                this.vehicleIsAvailable = false
            }
            let new_activity = {
                name: this.name,
                excerpt: this.excerpt,
                description: this.description,
                featuredImage: this.featuredImage,
                location: this.location,
                gallery: this.gallery,
                tags: this.tags,
                departureDate: this.departureDate,
                meetingAdress: this.meetingAdress,
                price: this.price,
                city_id: this.city_id,
                duration: this.duration,
                vehicleIsAvailable: this.vehicleIsAvailable,
            }
            if ( /*this.name== ""
            ||this.excerpt== ""
            ||this.description== ""
            ||this.featuredImage== ""
            ||this.location== ""
            ||this.gallery== ""
            ||this.tags== ""
            ||this.departureDate== ""
            ||this.meetingAdress== ""
            ||this.price== ""
            ||this.city_id== ""
            ||this.duration== ""
            ||this.vehicleIsAvailable== ""*/ !new_activity) {
                Swal.fire({
                    title: 'erreur!',
                    text: 'Aucun champ ne doit être vide',
                    icon: 'error',
                    confirmButtonText: 'okay'
                })
            } else {
                this.$store.commit("activities/ADD_ACTIVITY", new_activity);
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
        },
        update_activity() {
            let datas = this.activity
            this.name = datas.name
            /* if (this.vehicleIsAvailable == "oui") {
                 this.vehicleIsAvailable = true
             } else {
                 this.vehicleIsAvailable = false
             }*/
            /*let new_activity = {
                name: this.name,
                excerpt: this.excerpt,
                description: this.description,
                featuredImage: this.featuredImage,
                location: this.location,
                gallery: this.gallery,
                tags: this.tags,
                departureDate: this.departureDate,
                meetingAdress: this.meetingAdress,
                price: this.price,
                city_id: this.city_id,
                duration: this.duration,
                vehicleIsAvailable: this.vehicleIsAvailable,
            }*/
           /* if ( this.name== ""
            ||this.excerpt== ""
            ||this.description== ""
            ||this.featuredImage== ""
            ||this.location== ""
            ||this.gallery== ""
            ||this.tags== ""
            ||this.departureDate== ""
            ||this.meetingAdress== ""
            ||this.price== ""
            ||this.city_id== ""
            ||this.duration== ""
            ||this.vehicleIsAvailable== "" !new_activity) {
                Swal.fire({
                    title: 'erreur!',
                    text: 'Aucun champ ne doit être vide',
                    icon: 'error',
                    confirmButtonText: 'okay'
                })
            } else {
                this.$store.commit("activities/ADD_ACTIVITY", new_activity);
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
             this.vehicleIsAvailable=""
        }*/
    }
}
}

</script>
