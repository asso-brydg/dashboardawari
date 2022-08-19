import { auth } from '~/plugins/firebase.js'
import { firebase } from '~/plugins/firebase.js'




export const state = () => ({
    user: {},
});



export const mutations = ({
    setUser(state, payload) {
        state.user = payload
    },

})

/*export default function ({ store, redirect }) {
    if (!state.user) {
      return redirect('/login')
    }else{
        return redirect ('/dasboard')
    }
  }*/



export const actions = ({
    signUp({ commit }, { email, password }) {
        console.log(email, password)
        // firebase.firestore().collection("users").doc(email).set({
        //     "email": email,
        // })
       return auth.createUserWithEmailAndPassword(email, password).then((data) => {
        })

    },

    signInWithEmail({ commit }, { email, password }) {
        return auth.signInWithEmailAndPassword(email, password).then(()=>{
           commit("setUser",auth.currentUser)
            //console.log(state.user)
        })
    },

    signOut() {
        return auth.signOut()
    }
})