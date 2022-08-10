import axios from "axios"
const BASE_URL = url;
import Vue from "vue"
import { url } from "../url";
/*import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert)*/




export const state = () => ({
    new_countries: {},
    countries: []
    
});





export const mutations =  ({
    ADD_COUNTRY(state, country){
        console.log(country);
        state.new_country = country;
        //Appel d'axiox pour en créer la donnée 
        axios.post(BASE_URL + "/countries", country).then((result) => {
            console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },

    /* DELETE_COUNTRY(state,_id){
        axios.delete(BASE_URL + `/countries/delete/:${_id}`).then((result) => {
            this.$alert("suppression réussi!!!");
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },*/

    PUT_COUNTRY(state, country,_id){
        console.log(country);
        state.new_country = country;
        axios.put(BASE_URL + `/countries/update/:${_id}`, country).then((result) => {
            console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },
})

export const actions =({

    GET_COUNTRY(state){
        axios.get(BASE_URL + "/countries/index").then((result) => {
            state.countries = result.data;
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
})