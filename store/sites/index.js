import axios from "axios"
const BASE_URL = url;
import { url } from "../url";


export const state = () => ({
    new_site: {},
    update_site:{},
    sites: [],
    oneSite:{},
    _id:""
});
export const mutations =  ({
    SET_NEW_SITE(state, site){
        state.new_site = site 
    },
    SET_SITES(state, sites){
        state.sites = sites
    },
    SET_ONE_SITE(state, site){
        state.oneSite = site
    },
    SET_DELETE_SITE(state,_id){
        state._id =_id
    },
    SET_UPDATE_SITE(state, site){
        state.new_site = site 
    },
    ADD_SITE(state, site){
        console.log(site);
        state.new_site = site;
        //Appel d'axiox pour en créer la donnée 
        axios.post(BASE_URL + "/sites", site).then((result) => {
            //console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },
    PUT_SITE(state, site){
        console.log(site);
        state.update_site = site;
        axios.put(BASE_URL + "/sites/update/"+site.id, site).then((result) => {
            console.log(site.id)
            console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },

})

export const actions =({

    GET_SITES({commit}){
        axios.get(BASE_URL + "/sites/index").then((result) => {
            //console.log("getting sites", result.data)
            commit("SET_SITES", result.data);
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
    GET_ONE_SITE({commit},_id){
        axios.get(BASE_URL + '/sites/'+_id).then((result) => {
            commit("SET_ONE_SITE", result.data);
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
    DELETE_SITE({commit},_id){
        if(_id==undefined){
            console.log('id null')
        }else{
            axios.delete(BASE_URL + "/sites/delete/"+_id).then((request) => {
             commit("SET_DELETE_SITE",request._id)
             axios.get(BASE_URL + "/sites/index").then((result) => {
                //console.log("getting sites", result.data)
                commit("SET_SITES", result.data);
            }).catch((error)=>{
                console.log("some error occured", error);
            })
             }).catch((error)=>{
                console.log("some error occured", error);
             })
        }
    },
   
})