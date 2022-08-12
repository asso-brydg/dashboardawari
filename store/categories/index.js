import axios from "axios"
const BASE_URL = url;
import { url } from "../url";
/*import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert)*/




export const state = () => ({
    new_category: {},
    categories: [],
    oneCategory:{},
    _id:""
});





export const mutations =  ({
    SET_NEW_CATEGORY(state, category){
        state.new_activity = category 
    },
    SET_CATEGORIES(state, categories){
        state.categories = categories
    },
    SET_ONE_CATEGORY(state, category){
        state.oneCategory = category
    },
    SET_DELETE_CATEGORY(state,_id){
        state._id =_id
    },
    SET_UPDATE_CATEGORY(state, category){
        state.new_activity = category 
    },
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

})

export const actions =({

    GET_CATEGORIES({commit}){
        axios.get(BASE_URL + "/categories/index").then((result) => {
            //console.log("getting categories", result.data)
            commit("SET_CATEGORIES", result.data);
            console.log(result.data)
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
    GET_ONE_CATEGORY({commit},_id){
        axios.get(BASE_URL + '/categories/'+_id).then((result) => {
            commit("SET_ONE_CATEGORY", result.data);
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
    DELETE_CATEGORY({commit},_id){
        if(_id==undefined){
            console.log('id null')
        }else{
            axios.delete(BASE_URL + "/categories/delete/"+_id).then((request) => {
             commit("SET_DELETE_CATEGORY",request._id)
             axios.get(BASE_URL + "/categories/index").then((result) => {
                console.log("getting categories", result.data)
                commit("SET_CATEGORIES", result.data);
            }).catch((error)=>{
                console.log("some error occured", error);
            })
             }).catch((error)=>{
                console.log("some error occured", error);
             })
        }
    },
    PUT_CATEGORY(state, category,_id){
        console.log(category);
        state.new_activity = category;
        axios.put(BASE_URL + "/categories/update/"+_id, category).then((result) => {
            console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },
})