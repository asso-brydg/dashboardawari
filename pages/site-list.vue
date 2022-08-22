<template>
    <div class="flex flex-col p-6 bg-gray-50 -z-20">
        <HeaderView />
        <div class="flex w-auto">
            <NavbarView />
            <div
                class="flex flex-col items-center justify-center w-4/5 h-auto p-6 m-auto space-y-4 shadow shadow-gray-300 rounded-xl">
                <span class="text-3xl font-bold text-gray-800 uppercase">Liste des sites</span>
                <div class="w-full border borderg-gray-400 rounded-xl">
                    <table class="w-full p-4 space-y-4">
                        <tr class="bg-blue-400 border-b border-gray-400">
                            <th>#</th>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Durée</th>
                            <th>Actions</th>
                        </tr>
                        <tr v-for="site in sites" :key="site['_id']" class="p-4">
                            <td class="py-4 text-center">{{ site['_id'] }}</td>
                            <td class="py-4 text-center">{{ site['name'] }}</td>
                            <td class="py-4 text-center">{{ site['price'] }} </td>
                            <td class="py-4 text-center">{{ site['duration']}} jours</td>
                            <td class="flex items-center justify-center py-4 space-x-3 text-center">
                                <button class="p-2 font-bold text-white bg-red-400 rounded-xl hover:bg-red-500"
                                    @click="confirmer(site['_id'])">Supprimer</button>
                                <button class="p-2 font-bold text-white bg-gray-400 rounded-xl hover:bg-gray-500"
                                    @click="update_site(site['_id'])">Modifier</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <!-- <NuxtLink to="/sites-formulaire"
                    class="w-full p-3 text-3xl text-center text-gray-100 uppercase bg-blue-500 hover:bg-blue-400">
                    ajouter une nouveau site
                </NuxtLink>-->
                <button class="w-full p-3 text-3xl text-center text-gray-100 uppercase bg-blue-500 hover:bg-blue-400"
                    @click="Add_site()">
                    ajouter une nouveau site
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderView from '~/components/HeaderView.vue'
import NavbarView from '~/components/NavbarView.vue'
const Swal = require('sweetalert2')

export default {
    name: 'siteForm',
    components: { HeaderView, NavbarView },
    computed: {
        sites() {
            return this.$store.state.sites['sites'];
        },
        
    },
    data() {
        return {

        }
    },
    methods: {
        confirmer(site_id) {
            Swal.fire({
                title: 'Etes vous sûre de supprimer ce site?',
                text: "Cette action est irrévocable!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'blue',
                cancelButtonColor: 'gray',
                confirmButtonText: 'Oui Supprimer',
                cancelButtonText: 'Annuler'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.delete_site(site_id)
                }
            })
        },
        delete_site(_id) {
            this.$store.state._id = _id
            this.$store.dispatch("sites/DELETE_SITE", this.$store.state._id)
            this.$store.dispatch("sites/GET_SITES");
        },
        Add_site() {
            this.$router.push({path:'site-formulaire'})
        },
        update_site(_id){
            this.$router.push({path:'site-formulaire', query: {_id}})
        }

    },

    mounted() {
        this.$store.dispatch("sites/GET_SITES");
    },

}
</script>
