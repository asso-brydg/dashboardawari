import axios from "axios"
const BASE_URL = url;
import Vue from "vue"
import { url } from "../url";
/*import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert)*/




export const state = () => ({
    new_cities: {},
    cities: []
    
});





export const mutations =  ({
    ADD_CITY(state, city){
        console.log(city);
        state.new_city = city;
        //Appel d'axiox pour en créer la donnée 
        axios.post(BASE_URL + "/cities", city).then((result) => {
            console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },

    /* DELETE_CITIES(state,_id){
        axios.delete(BASE_URL + `/cities/delete/:${_id}`).then((result) => {
            this.$alert("suppression réussi!!!");
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },*/

    PUT_CITY(state, city,_id){
        console.log(city);
        state.new_city = city;
        axios.put(BASE_URL + `/cities/update/:${_id}`, city).then((result) => {
            console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },
})

export const actions =({

    GET_CITIES(state){
        axios.get(BASE_URL + "/cities/index").then((result) => {
            state.activities = result.data;
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
})