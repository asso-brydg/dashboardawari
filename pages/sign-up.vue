<template>
    <div class="bg-blue-50 w-screen h-auto flex items-start justify-start p-0">
        <div class="w-3/5 h-full bg-white shadow flex flex-col space-y-6 p-12 items-center justify-center">
            <div class="p-3 rounded-full border border-black">
                <img src="../assets/icons/user.png" alt="" width="50" height="50">
            </div>
            <span class="font-bold text-2xl">Créer un compte</span>
            <span class="text-2xl text-center">Créer un compte Pour d'autres administrateurs ou guides</span>
            <div class="flex space-x-6 w-full">
                <input v-model="name" type="text"
                    class="w-1/2 p-6 rounded-xl text-gray-400 border border-gray-200 text-xl" placeholder="nom">
                <input type="text" v-model="email"
                    class="w-1/2 p-6 rounded-xl text-gray-400 border border-gray-200 text-xl" placeholder="mail">
            </div>
            <input v-model="password" type="password"
                class="w-full p-6 rounded-xl text-gray-400 border border-gray-200 text-xl" placeholder=" mot de passe">
            <select class="w-full p-6 rounded-xl text-gray-400 border border-gray-200 text-xl" v-model="role">
                <option value="">Super dministrateur</option>
                <option value="">Administrateur</option>
                <option value="">Guide</option>
            </select>
            <div class="space-x-4 flex items-center justify-center">
                <input type="checkbox">
                <span class="text-gray-400 text-xl">Je suis d'accord sur les</span>
                <a href="#" class=" underline hover:text-black text-gray-400 text-lg">termes et conditions</a>
            </div>
            <button @click="signupUser"
                class="w-full bg-black text-white font-bold text-xl text-center p-6 rounded-xl hover:bg-yellow-500 hover:text-black">Créer
                le compte</button>

            <hr>
            <a href="#"
                class="w-full bg-white text-black font-bold text-xl text-center p-6 rounded-xl border border-gray-200 hover:bg-black hover:text-white">Sign
                Up with Google</a>
            <a href="#"
                class="w-full bg-white text-black font-bold text-xl text-center p-6 rounded-xl border border-gray-200 hover:bg-black hover:text-white">Sign
                Up with Facebook</a>
            <div class="space-x-4 flex items-center justify-center">
                <span class="text-gray-400 text-xl">Already have an acount?</span>
                <a href="#" class=" underline hover:text-black text-gray-400 text-lg">Sign In</a>
            </div>
        </div>
    </div>
</template>


<script>
const Swal = require('sweetalert2')

export default {
    data() {
        return {
            type: "password",
            email: "jagbegbo@gmail.com",
            password: "",
            name: "",
            role: ""
        }
    },

    methods: {
        signupUser() {
            try {
                //console.log(this.email);
                const tab = []
                this.$fire.firestore
                    .collection("User")
                    .where("email", "==", this.email)
                    .get().then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                            tab.push(doc.data());
                        });
                    });
                console.log(tab)
                for (let i = 0; i < tab.length; i++) {
                    console.log(tab[i])
                }

                //  const utilisateur = this.$fire.firestore.collection('User').doc(this.email).get()
                /* if (tab.length == 0) {
                     var email = this.email;
                     var password = this.password;
                     this.$store.dispatch("auth/signUp", { email, password })
                     this.$fire.firestore.collection("User").add({
                         name: this.name,
                         email: this.email,
                         role: this.role
                     })
                     Swal.fire({
                         title: 'erreur!',
                         text: 'Enrégistrement réussi',
                         icon: 'success',
                         confirmButtonText: 'okay'
                     })
                 } else {
                     Swal.fire({
                         title: 'erreur!',
                         text: 'Un utilisateur avec ce mail existe déjà',
                         icon: 'error',
                         confirmButtonText: 'okay'
                     })
                 }*/
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>


