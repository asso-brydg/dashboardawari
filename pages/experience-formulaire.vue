<template>
    <div class="flex flex-col p-6 bg-gray-50 -z-20">
        <HeaderView />
        <div class="flex w-auto">
            <NavbarView />
            <div
                class="m-auto shadow shadow-gray-300 w-4/5 h-auto flex flex-col justify-center items-center p-6 space-y-4 rounded-xl">
                <div class="w-full p-4 flex items-center justify-between">
                    <span class="text-gray-800 font-bold uppercase text-3xl">Enrégistrer une expérience</span>
                    <NuxtLink to='/experience-list' class="bg-blue-400 rounded-xl p-2 text-white font-bold">
                        Liste des expériences
                    </NuxtLink>
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
                        <div class="flex flex-col border border-gray-200 space-y-4 p-4 rounded-xl">
                            <input type="text" v-model="featuredImage"
                                class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center">
                            <button @click="launchImageFile" :disabled="isUploadingImage"
                                class="bg-blue-400 rounded-xl p-4" type="button">
                                {{ isUploadingImage ? 'chargement...' : 'choisir une image' }}
                            </button>
                            <input ref="imageFile" @change.prevent="uploadImageFile($event.target.files)" type="file"
                                accept="image/png, image/jpeg" class="hidden">
                        </div>
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
                        <input type="text" v-model="type"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer le type d'expérience">
                        <input type="date" v-model="departureDate"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la date de départ de l'expérience">
                        <input type="text" v-model="meetingAdress"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer l'adresse de meetingAdress de l'expérience">
                        <input type="number"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer le prix de l'expérience" v-model="price">
                        <select name="" id="" v-model="city_id"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center">
                            <option v-for="city in cities" :key="city" :value="city['_id']">{{ city["name"] }}
                            </option>
                        </select>
                        <select name="" id="" v-model="activity_id"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center">
                            <option v-for="activity in activities" :key="activity" :value="activity['_id']">{{
                                    activity["name"]
                            }}
                            </option>
                        </select>
                        <input type="number" v-model="duration"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Entrer la durée de l'expérience (en jours)">
                        <input type="text" v-model="vehicleIsAvailable"
                            class="w-full h-auto p-3 text-sm text-gray-800 rounded-xl border border-gray-200 text-center"
                            placeholder="Présence de véhicule (répondre par oui ou non)">
                    </div>
                </div>
                <button v-if="id == null"
                    class="w-full bg-blue-500 text-3xl text-gray-100 p-3 uppercase text-center hover:bg-blue-400"
                    @click="add_new_experience">Enrégistrer</button>
                <button v-if="id != null"
                    class="w-full bg-blue-500 text-3xl text-gray-100 p-3 uppercase text-center hover:bg-blue-400"
                    @click="update_experience">Modifier l'experience</button>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderView from '~/components/HeaderView.vue';
import NavbarView from '~/components/NavbarView.vue';
const Swal = require('sweetalert2')
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import axios from "axios"
const BASE_URL = url;
import { url } from "./url";
export default {
    name: 'experienceForm',
    components: { HeaderView, NavbarView },
    computed: {
        cities() {
            return this.$store.state.cities['cities'];
        },
        activities() {
            return this.$store.state.activities['activities'];
        },
    },
    mounted() {
        this.$store.dispatch("activities/GET_ACTIVITIES");
        this.$store.dispatch("cities/GET_CITIES");
        let id = this.$route.query["_id"]
        this.id = id;
        if (id) {
            axios.get(BASE_URL + '/experiences/' + id).then((result) => {
                this.name = result.data['name'];
                this.excerpt = result.data['excerpt'];
                this.description = result.data['description'];
                this.featuredImage = result.data['featuredImage'];
                this.location = result.data['location'];
                this.gallery = result.data['gallery'];
                this.tags = result.data['tags'];
                this.type = result.data['type'];
                this.departureDate = result.data['departureDate'];
                this.meetingAdress = result.data['meetingAdress'];
                this.price = result.data['price'];
                this.city_id = result.data['city_id'];
                this.activity_id = result.data['activity_id'];
                this.duration = result.data['duration'];
                this.vehicleIsAvailable = result.data['vehicleIsAvailable'];
                //console.log("logs ", result.data['name'])
            }).catch((error) => {
                console.log("some error occured", error);
            })

        }
    },
    data() {
        return {
            name: "",
            excerpt: "",
            description: "",
            featuredImage: "",
            location: "",
            gallery: "",
            tags: "",
            type: "",
            departureDate: "",
            meetingAdress: "",
            price: "",
            city_id: "",
            activity_id: "",
            duration: "",
            vehicleIsAvailable: "",
            blog: {},
            isUploadingImage: false,
            isDeletingImage: false,
            array: ""
        }
    },

    methods: {
            launchImageFile() {
            // Trigger the file input click event.
            this.$refs.imageFile.click()
        },
        uploadImageFile(files) {
            if (!files.length) {
                return
            }
            const file = files[0]

            if (!file.type.match('image.*')) {
                alert('Please upload an image.')
                return
            }

            const metadata = {
                contentType: file.type
            }

            this.isUploadingImage = true

            // Create a reference to the destination where we're uploading
            // the file.
            // const storage = this.$firebase.storage();
            const storage = getStorage();
            console.log("storage", storage);

            const imageRef = ref(storage, `images/${files.name}`)
            const uploadTask = uploadBytesResumable(imageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                        console.log('File available at', downloadURL);
                        this.featuredImage = downloadURL
                    });
                }
            );

            // const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
            //   // Once the image is uploaded, obtain the download URL, which
            //   // is the publicly accessible URL of the image.
            //   return snapshot.ref.getDownloadURL().then((url) => {
            //     return url
            //   })
            // }).catch((error) => {
            //   console.error('Error uploading image', error)
            // })

            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.
            uploadTask.then((url) => {
                this.blog.imageUrl = url
                this.isUploadingImage = false
            })
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
                type: this.type,
                departureDate: this.departureDate,
                meetingAdress: this.meetingAdress,
                price: this.price,
                city_id: this.city_id,
                activity_id: this.activity_id,
                duration: this.duration,
                vehicleIsAvailable: this.vehicleIsAvailable,
            }
            if (new_experience) {
                this.$store.commit("experiences/ADD_EXPERIENCE", new_experience);
                Swal.fire({
                    title: 'success!',
                    text: 'enregistrement réussi',
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
             this.experience_id="",
             this.duration="",
             this.vehicleIsAvailable=""*/
            //this.$alert("Enrégistrement réussi!!!");
        },
        update_experience() {
            if (this.vehicleIsAvailable == "oui") {
                this.vehicleIsAvailable = true
            } else {
                this.vehicleIsAvailable = false
            }
            let updatedExperience = {
                id: this.id,
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
                activity_id: this.activity_id,
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
             ||this.vehicleIsAvailable== "" */!updatedExperience) {
                Swal.fire({
                    title: 'erreur!',
                    text: 'Aucun champ ne doit être vide',
                    icon: 'error',
                    confirmButtonText: 'okay'
                })
            } else {
                this.$store.commit("experiences/PUT_EXPERIENCE", updatedExperience, updatedExperience.id);
                console.log(updatedExperience.id)
                Swal.fire({
                    title: 'success!',
                    text: 'modification réussi',
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
