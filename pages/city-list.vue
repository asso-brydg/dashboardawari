<template>
    <div class="flex flex-col p-6 bg-gray-50 -z-20">
        <HeaderView />
        <div class="flex w-auto">
            <NavbarView />
            <div
                class="flex flex-col items-center justify-center w-4/5 h-auto p-6 m-auto space-y-4 shadow shadow-gray-300 rounded-xl">
                <span class="text-3xl font-bold text-gray-800 uppercase">Liste des villes</span>
                <div class="w-full border borderg-gray-400 rounded-xl">
                    <table class="w-full p-4 space-y-4">
                        <tr class="bg-blue-400 border-b border-gray-400">
                            <th>#</th>
                            <th>Nom</th>
                            <th>Pays</th>
                            <th>Actions</th>
                        </tr>
                        <tr v-for="city in cities" :key="city['_id']" class="p-4">
                            <td class="py-4 text-center">{{ city['_id'] }}</td>
                            <td class="py-4 text-center">{{ city['name'] }}</td>
                            <td class="py-4 text-center">{{ city['name'] }}</td>
                            <td class="flex items-center justify-center py-4 space-x-3 text-center">
                                <button class="p-2 font-bold text-white bg-red-400 rounded-xl hover:bg-red-500"
                                    @click="confirmer(city['_id'])">Supprimer</button>
                                <button class="p-2 font-bold text-white bg-gray-400 rounded-xl hover:bg-gray-500"
                                    @click="update_city(city['_id'])">Modifier</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <button class="w-full p-3 text-3xl text-center text-gray-100 uppercase bg-blue-500 hover:bg-blue-400"
                    @click="Add_city()">
                    ajouter une nouvelle ville
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderView from '~/components/HeaderView.vue'
import NavbarView from '~/components/NavbarView.vue'
const Swal = require('sweetalert2')
import axios from "axios"
const BASE_URL = url;
import { url } from "./url";
export default {
    name: 'cityForm',
    components: { HeaderView, NavbarView },
    computed: {
        cities() {
            return this.$store.state.cities['cities'];
        },
      /*  country(){
            return this.find_country(this.cities["_id"])
        }*/
    },
    data() {
        return {

        }
    },
    methods: {
       /* find_country(_id){
            let name =""
            axios.get(BASE_URL + '/countries/' + this.$store.state._id).then((result) => {
               name = result.data['name'];
                console.log("logs ", result.data['name'])
            }).catch((error) => {
                console.log("some error occured", error);
            })
            return result.data['name']
        },*/
        confirmer(city_id) {
            Swal.fire({
                title: 'Etes vous sûre de supprimer cette ville?',
                text: "Cette action est irrévocable!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'blue',
                cancelButtonColor: 'gray',
                confirmButtonText: 'Oui Supprimer',
                cancelButtonText: 'Annuler'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.delete_city(city_id)
                }
            })
        },
        delete_city(_id) {
            this.$store.state._id = _id
            this.$store.dispatch("cities/DELETE_CITY", this.$store.state._id)
            this.$store.dispatch("cities/GET_CITIES");
        },
        Add_city() {
            this.$router.push({path:'city-formulaire'})
        },
        update_city(_id){
            this.$router.push({path:'city-formulaire', query: {_id}})
        }

    },

    mounted() {
        this.$store.dispatch("cities/GET_CITIES");
        //this.$store.dispatch("")
    },

}
</script>
