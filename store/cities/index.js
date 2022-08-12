import axios from "axios"
const BASE_URL = url;
import { url } from "../url";
/*import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert)*/




export const state = () => ({
    new_city: {},
    cities: [],
    oneCity:{},
    _id:""
});





export const mutations =  ({
    SET_NEW_CITY(state, city){
        state.new_city = city 
    },
    SET_CITIES(state, cities){
        state.cities = cities
    },
    SET_ONE_CITY(state, city){
        state.oneCategory = city
    },
    SET_DELETE_CITY(state,_id){
        state._id =_id
    },
    SET_UPDATE_CITY(state, city){
        state.new_city = city 
    },
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

})

export const actions =({

    GET_CITIES({commit}){
        axios.get(BASE_URL + "/cities/index").then((result) => {
            //console.log("getting cities", result.data)
            commit("SET_CITIES", result.data);
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
    GET_ONE_CITY({commit},_id){
        axios.get(BASE_URL + '/cities/'+_id).then((result) => {
            commit("SET_ONE_CITY", result.data);
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
    DELETE_CITY({commit},_id){
        if(_id==undefined){
            console.log('id null')
        }else{
            axios.delete(BASE_URL + "/cities/delete/"+_id).then((request) => {
             commit("SET_DELETE_CITY",request._id)
             axios.get(BASE_URL + "/cities/index").then((result) => {
                //console.log("getting cities", result.data)
                commit("SET_cities", result.data);
            }).catch((error)=>{
                console.log("some error occured", error);
            })
             }).catch((error)=>{
                console.log("some error occured", error);
             })
        }
    },
    PUT_CITY(state, city,_id){
        console.log(city);
        state.new_city = city;
        axios.put(BASE_URL + "/cities/update/"+_id, city).then((result) => {
            console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },
})