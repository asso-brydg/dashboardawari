<template>
    <div class="flex flex-col p-6 bg-gray-50 -z-20">
        <HeaderView />
        <div class="flex w-auto">
            <NavbarView />
            <div
                class="flex flex-col items-center justify-center w-4/5 h-auto p-6 m-auto space-y-4 shadow shadow-gray-300 rounded-xl">
                <span class="text-3xl font-bold text-gray-800 uppercase">Liste des catégories</span>
                <div class="w-full border borderg-gray-400 rounded-xl">
                    <table class="w-full p-4 space-y-4">
                        <tr class="bg-blue-400 border-b border-gray-400">
                            <th>#</th>
                            <th>Nom</th>
                            <th>Cité</th>
                            <th>Prix</th>
                            <th>Durée</th>
                            <th>Actions</th>
                        </tr>
                        <tr v-for="category in categories" :key="category['_id']" class="p-4">
                            <td class="py-4 text-center">{{ category['_id'] }}</td>
                            <td class="py-4 text-center">Charles</td>
                            <td class="py-4 text-center">Lomé</td>
                            <td class="py-4 text-center">250 </td>
                            <td class="py-4 text-center">20 min</td>
                            <td class="flex items-center justify-center py-4 space-x-3 text-center">
                                <button class="p-2 font-bold text-white bg-red-400 rounded-xl hover:bg-red-500"
                                    @click="confirmer(category['_id'])">Supprimer</button>
                                <button class="p-2 font-bold text-white bg-gray-400 rounded-xl hover:bg-gray-500"
                                    @click="update_category(category['_id'])">Modifier</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <!-- <NuxtLink to="/activites-formulaire"
                    class="w-full p-3 text-3xl text-center text-gray-100 uppercase bg-blue-500 hover:bg-blue-400">
                    ajouter une nouvelle activité
                </NuxtLink>-->
                <button class="w-full p-3 text-3xl text-center text-gray-100 uppercase bg-blue-500 hover:bg-blue-400"
                    @click="Add_category()">
                    ajouter une nouvelle catégorie
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
    name: 'categoryForm',
    components: { HeaderView, NavbarView },
    computed: {
        categories() {
            return this.$store.state.categories['categories'];
        },
    },
    data() {
        return {

        }
    },
    methods: {
        confirmer(category_id) {
            Swal.fire({
                title: 'Etes vous sûre de supprimer cette catégorie?',
                text: "Cette action est irrévocable!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'blue',
                cancelButtonColor: 'gray',
                confirmButtonText: 'Oui Supprimer',
                cancelButtonText: 'Annuler'
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log(category_id)
                    this.delete_category(category_id)
                }
            })
        },
        delete_category(_id) {
            this.$store.state._id = _id
            this.$store.dispatch("categories/DELETE_CATEGORY", this.$store.state._id)
            this.$store.dispatch("categories/GET_CATEGORIES");
        },
        Add_category() {
            this.$router.push({path:'category-formulaire'})
        },
        update_category(_id){
            this.$router.push({path:'category-formulaire', query: {_id}})
        }

    },

    mounted() {
        this.$store.dispatch("categories/GET_CATEGORIES");
    },

}
</script>
