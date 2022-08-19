import { auth } from '~/plugins/firebase.js'
import { firebase } from '~/plugins/firebase.js'

export const state = () => ({
    user: "",
});


export const mutations = ({
    setUser(state, payload) {
        state.user = payload
        //console.log("mutation", state.user)
    },
    resetUser(state){
        state.user = null
    }
})





export const actions = ({
    signUp({ commit }, { email, password }) {
        //console.log(email, password)
        // firebase.firestore().collection("users").doc(email).set({
        //     "email": email,
        // })
       return auth.createUserWithEmailAndPassword(email, password).then((data) => {
        })

    },

    signInWithEmail({ commit}, { email, password }) {
        return auth.signInWithEmailAndPassword(email, password).then(()=>{
          commit("setUser",auth.currentUser)
        })
    },

    signOut({ commit}){
        return auth.signOut().then(()=>{
            commit("resetUser")
        })
    }
})