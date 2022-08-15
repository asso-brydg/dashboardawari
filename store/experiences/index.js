import axios from "axios"
const BASE_URL = url;
import { url } from "../url";


export const state = () => ({
    new_experience: {},
    update_experience:{},
    experiences: [],
    oneExperience:{},
    _id:""
});


export const mutations =  ({
    SET_NEW_EXPERIENCE(state, experience){
        state.new_experience = experience 
    },
    SET_EXPERIENCES(state, experiences){
        state.experiences = experiences
    },
    SET_ONE_EXPERIENCE(state, experience){
        state.oneActivity = experience
    },
    SET_DELETE_EXPERIENCE(state,_id){
        state._id =_id
    },
    SET_UPDATE_EXPERIENCE(state, experience){
        state.new_experience = experience 
    },
    ADD_EXPERIENCE(state, experience){
        console.log(experience);
        state.new_experience = experience;
        //Appel d'axiox pour en créer la donnée 
        axios.post(BASE_URL + "/experiences", experience).then((result) => {
            //console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },
    PUT_EXPERIENCE(state, experience){
        console.log(experience);
        state.update_experience = experience;
        axios.put(BASE_URL + "/experiences/update/"+experience.id, experience).then((result) => {
            console.log(experience.id)
            console.log(result.data)
        }).catch((error)=> {
            console.log("il y a une erreur", error);
        })
    },

})

export const actions =({

    GET_EXPERIENCES({commit}){
        axios.get(BASE_URL + "/experiences/index").then((result) => {
            //console.log("getting experiences", result.data)
            commit("SET_EXPERIENCES", result.data);
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
    GET_ONE_EXPERIENCE({commit},_id){
        axios.get(BASE_URL + '/experiences/'+_id).then((result) => {
            commit("SET_ONE_EXPERIENCE", result.data);
        }).catch((error)=>{
            console.log("some error occured", error);
        })
    },
    DELETE_EXPERIENCE({commit},_id){
        if(_id==undefined){
            console.log('id null')
        }else{
            axios.delete(BASE_URL + "/experiences/delete/"+_id).then((request) => {
             commit("SET_DELETE_EXPERIENCE",request._id)
             axios.get(BASE_URL + "/experiences/index").then((result) => {
                //console.log("getting experiences", result.data)
                commit("SET_EXPERIENCES", result.data);
            }).catch((error)=>{
                console.log("some error occured", error);
            })
             }).catch((error)=>{
                console.log("some error occured", error);
             })
        }
    },
   
})