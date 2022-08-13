import axios from "axios"
const BASE_URL = url;
import { url } from "../url";


export const state = () => ({
    new_activity: {},
    update_activity:{},
    activities: [],
    oneActivity:{},
    _id:""
});


export const mutations =  ({
    SET_NEW_ACTIVITY(state, activity){
        state.new_activity = activity 
    },
    SET_ACTIVITIES(state, activities){
        state.activities = activities
    },
    SET_ONE_ACTIVITY(state, activity){
        state.oneActivity = activity
    },
    SET_DELETE_ACTIVITY(state,_id){
        state._id =_id
    },
    SET_UPDATE_ACTIVITY(state, activity){
        state.new_activity = activity 
    },
    ADD_ACTIVITY(state, activity){
        console.log(activity);
        state.new_activity = activity;
        //Appel d'axiox pour en créer la donnée 
        axios.post(BASE_URL + "/activities", activity).then((result) => {
            //console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },
    PUT_ACTIVITY(state, activity){
        console.log(activity);
        state.update_activity = activity;
        axios.put(BASE_URL + "/activities/update/"+activity.id, activity).then((result) => {
            console.log(activity.id)
            console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },

})

export const actions =({

    GET_ACTIVITIES({commit}){
        axios.get(BASE_URL + "/activities/index").then((result) => {
            //console.log("getting activities", result.data)
            commit("SET_ACTIVITIES", result.data);
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
    GET_ONE_ACTIVITY({commit},_id){
        axios.get(BASE_URL + '/activities/'+_id).then((result) => {
            commit("SET_ONE_ACTIVITY", result.data);
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
    DELETE_ACTIVITY({commit},_id){
        if(_id==undefined){
            console.log('id null')
        }else{
            axios.delete(BASE_URL + "/activities/delete/"+_id).then((request) => {
             commit("SET_DELETE_ACTIVITY",request._id)
             axios.get(BASE_URL + "/activities/index").then((result) => {
                //console.log("getting activities", result.data)
                commit("SET_ACTIVITIES", result.data);
            }).catch((error)=>{
                console.log("some error occured", error);
            })
             }).catch((error)=>{
                console.log("some error occured", error);
             })
        }
    },
   
})