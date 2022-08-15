<template>
    <div class="bg-blue-50 w-screen h-auto flex items-start justify-start p-0">
        <div class="w-3/5 h-full bg-white shadow flex flex-col space-y-6 p-12 items-center justify-center">
           <div class="p-3 rounded-full border border-black">
                <img src="../assets/icons/user.png" alt="" width="50" height="50">
            </div>
            <span class="font-bold text-2xl">Créer un compte</span>
            <span class="text-2xl text-center">Créer un compte Pour d'autres administrateurs ou guides</span>
            <div class="flex space-x-6 w-full">
                 <input type="text" class="w-1/2 p-6 rounded-xl text-gray-400 border border-gray-200 text-xl"
                placeholder="nom">
                <input type="text" class="w-1/2 p-6 rounded-xl text-gray-400 border border-gray-200 text-xl"
                placeholder="mail">
            </div>
            <input type="text" class="w-full p-6 rounded-xl text-gray-400 border border-gray-200 text-xl"
                placeholder=" mot de passe">
            <select name="" id="" class="w-full p-6 rounded-xl text-gray-400 border border-gray-200 text-xl">
                <option value="">Super administrateur</option>
                <option value="">administrateur</option>
                <option value="">Guide</option>
            </select>
            <div class="space-x-4 flex items-center justify-center">
                <input type="checkbox">
                <span class="text-gray-400 text-xl">Je suis d'accord sur les</span>
                <a href="#" class=" underline hover:text-black text-gray-400 text-lg">termes et conditions</a>
            </div>
            <a href="#"
                class="w-full bg-black text-white font-bold text-xl text-center p-6 rounded-xl hover:bg-yellow-500 hover:text-black">Créer le compte</a>

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
