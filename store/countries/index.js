import axios from "axios"
const BASE_URL = url;
import { url } from "../url";
/*import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert)*/




export const state = () => ({
    new_country: {},
    countries: [],
    oneCategory:{},
    _id:""
});





export const mutations =  ({
    SET_NEW_COUNTRY(state, country){
        state.new_country = country 
    },
    SET_COUNTRIES(state, countries){
        state.countries = countries
    },
    SET_ONE_COUNTRY(state, country){
        state.oneCountry = country
    },
    SET_DELETE_COUNTRY(state,_id){
        state._id =_id
    },
    SET_UPDATE_COUNTRY(state, country){
        state.new_country = country 
    },
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

})

export const actions =({

    GET_COUNTRIES({commit}){
        axios.get(BASE_URL + "/countries/index").then((result) => {
            //console.log("getting countries", result.data)
            commit("SET_COUNTRIES", result.data);
            console.log(result.data)
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
    GET_ONE_COUNTRY({commit},_id){
        axios.get(BASE_URL + '/countries/'+_id).then((result) => {
            commit("SET_ONE_COUNTRY", result.data);
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
    DELETE_COUNTRY({commit},_id){
        if(_id==undefined){
            console.log('id null')
        }else{
            axios.delete(BASE_URL + "/countries/delete/"+_id).then((request) => {
             commit("SET_DELETE_COUNTRY",request._id)
             axios.get(BASE_URL + "/countries/index").then((result) => {
                console.log("getting countries", result.data)
                commit("SET_COUNTRIES", result.data);
            }).catch((error)=>{
                console.log("some error occured", error);
            })
             }).catch((error)=>{
                console.log("some error occured", error);
             })
        }
    },
    PUT_COUNTRY(state, country,_id){
        console.log(country);
        state.new_country = country;
        axios.put(BASE_URL + "/countries/update/"+_id, country).then((result) => {
            console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },
})