import { auth } from '~/plugins/firebase.js'
import { firebase } from '~/plugins/firebase.js'




export const state = () => ({
    user: "",
});



export const mutations = ({
    setUser(state, payload) {
        state.user = payload
    },


})



export const actions = ({
    signUp({ commit }, { email, password }) {
        console.log(email, password)
        // firebase.firestore().collection("users").doc(email).set({
        //     "email": email,
        // })
        auth.createUserWithEmailAndPassword(email, password).then((data) => {

        })

    },

    signInWithEmail({ commit }, { email, password }) {
        return auth.signInWithEmailAndPassword(email, password)
    },

    signOut() {
        return auth.signOut()
    }
})