<template>
    <div class="flex flex-col p-6 bg-gray-50 -z-20">
        <HeaderView />
        <div class="flex w-auto">
            <NavbarView />
            <div
                class="m-auto shadow shadow-gray-300 w-4/5 h-auto flex flex-col justify-center items-center p-6 space-y-4 rounded-xl">
                <span class="text-gray-800 font-bold uppercase text-3xl">Enrégistrer une catégorie</span>
                <div class="flex p-4 border border-gray-200 bg-white w-full h-auto space-x-4">
                    <div class="p-2 flex flex-col w-1/2 space-y-4">
                        <input v-model="name" type="text"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer le nom de la categorie">
                        <input type="text" v-model="excerpt"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer le résumé de la categorie">
                        <textarea name="" id="" cols="30" rows="10" v-model="description"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la description de la categorie"></textarea>
                    </div>
                    <div class="p-2 flex flex-col w-1/2 space-y-4">
                        <input type="text" v-model="featuredImage"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer une images de mise en avant de la categorie">
                        <input type="text" v-model="gallery"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la gallerie de la categorie">

                        <input type="text" v-model="tags"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer les tags de la categorie">
                    </div>
                </div>
                <button class="w-full bg-blue-500 text-3xl text-gray-100 p-3 uppercase text-center hover:bg-blue-400"
                    @click="add_new_category">Enrégistrer</button>
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

export default {
    name: 'categoryForm',
    components: { HeaderView, NavbarView },
    data() {
        return {
            name: "",
            excerpt: "",
            description: "",
            featuredImage: "",
            gallery: "",
            tags: "",
        }
    },

    methods: {
        add_new_category() {
            let new_category = {
                name: this.name,
                excerpt: this.excerpt,
                description: this.description,
                featuredImage: this.featuredImage,
                gallery: this.gallery,
                tags: this.tags,
            }
            if (new_category) {
                this.$store.commit("categories/ADD_ACTIVITY", new_category);
            }

            /* this.name = "",
             this.excerpt = "",
             this.description = "",
             this.featuredImage="",
             this.gallery="",
             this.tags="",
           */
            //this.$alert("Enrégistrement réussi!!!");
        }
    }
}

</script>
