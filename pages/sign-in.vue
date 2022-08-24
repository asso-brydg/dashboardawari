<template>
    <div class="bg-blue-50 w-screen h-auto flex items-center justify-center p-12">
        <div class="w-2/5 h-5/6 bg-white rounded-2xl shadow flex flex-col space-y-6 p-12 items-center justify-center">
            <div class="p-3 rounded-full border border-black">
                <img src="../assets/icons/user.png" alt="" width="50" height="50">
            </div>
            <span class="font-bold text-2xl">Bienvenue!!</span>
            <span class="text-2xl text-center">saisissez vos informations pour accéder au tableau de bord</span>
            <input type="text" class="w-full p-6 rounded-xl text-gray-400 border border-gray-200 text-xl"
                placeholder="Entrer votre mail" v-model="email">
            <input type="text" class="w-full p-6 rounded-xl text-gray-400 border border-gray-200 text-xl"
                placeholder="Entrer votre mot de passe" v-model="password">
            <div class="space-x-4 flex items-center justify-center">
                <span class="text-gray-400 text-sm">Mot de passe oublié?</span>
                <a href="#" class=" underline hover:text-black text-gray-400 text-lg">Récupérez votre mot de passe</a>
            </div>
            <button
                class="w-full bg-black text-white font-bold text-xl text-center p-6 rounded-xl hover:bg-yellow-500 hover:text-black"
                @click="signinUser">Connexion</button>

            <hr>
            <a href="#"
                class="w-full bg-white text-black font-bold text-xl text-center p-6 rounded-xl border border-gray-200 hover:bg-black hover:text-white">S'enrégistrer
                avec Google</a>
            <a href="#"
                class="w-full bg-white text-black font-bold text-xl text-center p-6 rounded-xl border border-gray-200 hover:bg-black hover:text-white">S'enrégistrer
                avec Facebook</a>
        </div>
    </div>
</template>


<script>

//import 'firebase/auth'
export default {
    middleware: 'auth',
    data() {
        return {
            email: "jagbegbo@gmail.com",
            password: "123465"
        }
    },
    methods: {
        async signinUser() {
            var email = this.email
            var password = this.password
           // console.log(typeof (email));

            try {
                this.$store.dispatch('auth/signInWithEmail', { email, password }).then(() => {
                    this.$router.push({ path: 'acceuil' })
                    console.log("réussi");
                })
            } catch (e) {
                console.log("error ", e);

            }


            // this.$store.commit("auth/TEST_MUTATION", {email, password});
        },


      
    }
}
</script>
