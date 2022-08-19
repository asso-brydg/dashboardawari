import { auth } from '~/plugins/firebase.js'
import { firebase } from '~/plugins/firebase.js'

export const state = () => ({
    user: "",
    data: "",
});


export const mutations = ({
    ON_AUTH_STATE_CHANGED_MUTATION(state, payload){
        console.log("auth changed");
    },
    TEST_MUTATION(state, payload) {
        console.log("call mutations work", auth.currentUser, payload);
        auth.signInWithEmailAndPassword(payload.email, payload.password).then((data) => {
            console.log('data get', data);
        }).catch((e)=>{
            console.log("error");
        });


    },
    setUser(state, payload) {
        state.user = payload
        //console.log("mutation", state.user)
    },
    resetUser(state) {
        state.user = null
    },

    signInWithEmail(state, { email, password }) {
        auth.signInWithEmailAndPassword(email, password).then(() => {
            state.user = auth.currentUser;
        })
    },
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

    signInWithEmail({ commit }, { email, password }) {
        return auth.signInWithEmailAndPassword(email, password).then(() => {
            commit("setUser", auth.currentUser)
        })
    },

    signOut({ commit }) {
        return auth.signOut().then(() => {
            commit("resetUser")
        })
    }
})