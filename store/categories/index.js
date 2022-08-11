import axios from "axios"
const BASE_URL = url;
import Vue from "vue"
import { url } from "../url";
/*import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert)*/




export const state = () => ({
    new_categories: {},
    categories: []
    
});





export const mutations =  ({
    ADD_CATEGORY(state, category){
        console.log(category);
        state.new_category = category;
        //Appel d'axiox pour en créer la donnée 
        axios.post(BASE_URL + "/categories", category).then((result) => {
            console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },

    /* DELETE_CATEGORIES(state,_id){
        axios.delete(BASE_URL + `/categories/delete/:${_id}`).then((result) => {
            this.$alert("suppression réussi!!!");
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },*/

    PUT_CATEGORY(state, category,_id){
        console.log(category);
        state.new_category = category;
        axios.put(BASE_URL + `/categories/update/:${_id}`, category).then((result) => {
            console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },
})

export const actions =({

    GET_CATEGORIES(state){
        axios.get(BASE_URL + "/categories/index").then((result) => {
            state.activities = result.data;
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
})