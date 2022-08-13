<template>
    <div class="flex flex-col p-6 bg-gray-50 -z-20">
        <HeaderView />
        <div class="flex w-auto">
            <NavbarView />
            <div
                class="flex flex-col items-center justify-center w-4/5 h-auto p-6 m-auto space-y-4 shadow shadow-gray-300 rounded-xl">
                <span class="text-3xl font-bold text-gray-800 uppercase">Liste des activités</span>
                <div class="w-full border borderg-gray-400 rounded-xl">
                    <table class="w-full p-4 space-y-4">
                        <tr class="bg-blue-400 border-b border-gray-400">
                            <th>#</th>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Durée</th>
                            <th>Actions</th>
                        </tr>
                        <tr v-for="activity in activities" :key="activity['_id']" class="p-4">
                            <td class="py-4 text-center">{{ activity['_id'] }}</td>
                            <td class="py-4 text-center">{{ activity['name'] }}</td>
                            <td class="py-4 text-center">{{ activity['price'] }} </td>
                            <td class="py-4 text-center">{{ activity['duration'] }}</td>
                            <td class="flex items-center justify-center py-4 space-x-3 text-center">
                                <button class="p-2 font-bold text-white bg-red-400 rounded-xl hover:bg-red-500"
                                    @click="confirmer(activity['_id'])">Supprimer</button>
                                <button class="p-2 font-bold text-white bg-gray-400 rounded-xl hover:bg-gray-500"
                                    @click="update_activity(activity['_id'])">Modifier</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <!-- <NuxtLink to="/activites-formulaire"
                    class="w-full p-3 text-3xl text-center text-gray-100 uppercase bg-blue-500 hover:bg-blue-400">
                    ajouter une nouvelle activité
                </NuxtLink>-->
                <button class="w-full p-3 text-3xl text-center text-gray-100 uppercase bg-blue-500 hover:bg-blue-400"
                    @click="Add_activity()">
                    ajouter une nouvelle activité
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
    name: 'activityForm',
    components: { HeaderView, NavbarView },
    computed: {
        activities() {
            return this.$store.state.activities['activities'];
        },
    },
    data() {
        return {

        }
    },
    methods: {
        confirmer(activity_id) {
            Swal.fire({
                title: 'Etes vous sûre de supprimer cette activité?',
                text: "Cette action est irrévocable!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'blue',
                cancelButtonColor: 'gray',
                confirmButtonText: 'Oui Supprimer',
                cancelButtonText: 'Annuler'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.delete_activity(activity_id)
                }
            })
        },
        delete_activity(_id) {
            this.$store.state._id = _id
            this.$store.dispatch("activities/DELETE_ACTIVITY", this.$store.state._id)
            this.$store.dispatch("activities/GET_ACTIVITIES");
        },
        Add_activity() {
            this.$router.push({path:'activites-formulaire'})
        },
        update_activity(_id){
            this.$router.push({path:'activites-formulaire', query: {_id}})
        }

    },

    mounted() {
        this.$store.dispatch("activities/GET_ACTIVITIES");
    },

}
</script>
