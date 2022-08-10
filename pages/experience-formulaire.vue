<template>
    <div class="flex flex-col p-6 bg-gray-50 -z-20">
        <HeaderView />
        <div class="flex w-auto">
            <NavbarView />
            <div
                class="m-auto shadow shadow-gray-300 w-4/5 h-auto flex flex-col justify-center items-center p-6 space-y-4 rounded-xl">
                <div class="w-full p-4 flex items-center justify-between">
                    <span class="text-gray-800 font-bold uppercase text-3xl">Enrégistrer une expérience</span>
                     <NuxtLink to='/activites-formulaire'
                                    class="bg-green-400 w-1/2 rounded-xl p-2 text-white font-bold">Modifier</NuxtLink>
                </div>
                <div class="flex p-4 border border-gray-200 bg-white w-full h-auto space-x-4">
                    <div class="p-2 flex flex-col w-1/2 space-y-4">
                        <input v-model="name" type="text"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer le nom de l'expérience">
                        <input type="text" v-model="excerpt"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer le résumé de l'expérience">
                        <textarea name="" id="" cols="30" rows="10" v-model="description"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la description de l'expérience"></textarea>
                        <input type="text" v-model="featuredImage"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer une images de mise en avant de l'expérience">
                        <input type="text" v-model="location"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la d'adresse de l'expérience">
                        <input type="text" v-model="gallery"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la gallerie de l'expérience">
                    </div>
                    <div class="p-2 flex flex-col w-1/2 space-y-4">
                        <input type="text" v-model="tags"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer les tags de l'expérience">
                        <input type="date" v-model="departureDate"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la date de départ de l'expérience">
                        <input type="date" v-model="meetingAdress"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer l'adresse de meetingAdress de l'expérience">
                        <input type="number"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer le prix de l'expérience" v-model="price">
                        <input type="text" v-model="city_id"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la ville de l'expérience">
                        <select name="" id="">
                            <option v-for="option in options" :key="option" :value="option['id']">{{ option["name"] }}
                            </option>
                        </select>
                        <input type="number" v-model="activity_id"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer les activités de l'expérience">

                        <input type="number" v-model="duration"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la durée de l'expérience (en jours)">
                        <input type="text" v-model="vehicleIsAvailable"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Présence de véhicule (répondre par oui ou non)">
                    </div>
                </div>
                <button class="w-full bg-blue-500 text-3xl text-gray-100 p-3 uppercase text-center hover:bg-blue-400"
                    @click="add_new_experience">Enrégistrer</button>
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
    name: 'activityForm',
    components: { HeaderView, NavbarView },
    data() {
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
            activity_id: "",
            duration: "",
            vehicleIsAvailable: "",
            options: [
                {
                    id: 100,
                    name: "kpalime excusrion",
                    city: "kpalime",
                    price: 25000,
                    duration: 5
                },
                {
                    id: 256,
                    name: "kpalime excusrion",
                    city: "kpalime",
                    price: 25000,
                    duration: 5
                },
                {
                    id: 3,
                    name: "kpalime excusrion",
                    city: "kpalime",
                    price: 25000,
                    duration: 5
                },
                {
                    id: 4,
                    name: "kpalime excusrion",
                    city: "kpalime",
                    price: 25000,
                    duration: 5
                }
            ]
        }
    },

    mounted() {
        if (this.$route.query['modify'] == "true") {
            console.log("modifier est true, je dois récuper ", this.$route.query);
        } else {
            console.log("Ah tu veux créer.. C'est bien ")
        }
    },

    methods: {
        findOption(id) {

        },
        add_new_experience() {
            if (this.vehicleIsAvailable == "oui") {
                this.vehicleIsAvailable = true
            } else {
                this.vehicleIsAvailable = false
            }
            let new_experience = {
                name: this.name,
                excerpt: this.excerpt,
                description: this.description,
                duration: this.duration,
                featuredImage: this.featuredImage,
                location: this.location,
                gallery: this.gallery,
                tags: this.tags,
                departureDate: this.departureDate,
                meetingAdress: this.meetingAdress,
                price: this.price,
                city_id: this.city_id,
                activity_id: this.activity_id,
                duration: this.duration,
                vehicleIsAvailable: this.vehicleIsAvailable,
            }
            if (new_experience) {
                this.$store.commit("activities/ADD_EXPERIENCE", new_experience);
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
             this.activity_id="",
             this.duration="",
             this.vehicleIsAvailable=""*/
            //this.$alert("Enrégistrement réussi!!!");
        }
    }
}

</script>
