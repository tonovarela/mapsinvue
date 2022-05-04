import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {

    async seachPlacesByTerm( { commit ,state}, queryString:string ) {
        console.log("VUEX  "+queryString)
        // a line o prevent linter errors
    },


    getInitialLocation( { commit } ) {
        navigator.geolocation
        .getCurrentPosition(({coords})=>commit('setLngLat',{lng:coords.longitude,lat:coords.latitude}),
        (error)=>{console.error(error);throw new Error('No geolocation disponible')})        
    },
}



export default actions;
