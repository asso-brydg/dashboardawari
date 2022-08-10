import axios from "axios"
const BASE_URL = url;
import Vue from "vue"
import { url } from "../url";
/*import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert)*/




export const state = () => ({
    new_experience: {},
    experiences: []
    
});





export const mutations =  ({
    ADD_EXPERIENCE(state, experience){
        console.log(experience);
        state.new_experience = experience;
        //Appel d'axiox pour en créer la donnée 
        axios.post(BASE_URL + "/experiences", experience).then((result) => {
            console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },

    /* DELETE_EXPERIENCES(state,_id){
        axios.delete(BASE_URL + `/experiences/delete/:${_id}`).then((result) => {
            this.$alert("suppression réussi!!!");
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },*/

    PUT_EXPERIENCE(state, experience,_id){
        console.log(experience);
        state.new_experience = experience;
        axios.put(BASE_URL + `/experiences/update/:${_id}`, experience).then((result) => {
            console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },
})

export const actions =({

    GET_EXPERIENCES(state){
        axios.get(BASE_URL + "/experiences/index").then((result) => {
            state.experiences = result.data;
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
})