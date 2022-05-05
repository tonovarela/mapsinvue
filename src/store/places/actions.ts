import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchAPI } from '@/api';
import { PlacesResponse,Feature} from '@/interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {

    async seachPlacesByTerm( { commit ,state}, queryString:string ):Promise<Feature[]> {        
        if (queryString.length==0) {            
            commit('setPlaces',[]);
            return [];
        }
        if (!state.userLocation){
            throw new Error('No hay ubicacion del usuario');            
        }
        commit('setIsLoadingPlaces');
        const resp= await searchAPI.get<PlacesResponse>(`/${queryString}.json`,{
            params:{
                proximity:state.userLocation?.join(',')
            }
        });
        const {features} = resp.data
        commit('setPlaces',features);
        return  features;
        
    },


    getInitialLocation( { commit } ) {
        navigator.geolocation
        .getCurrentPosition(({coords})=>commit('setLngLat',{lng:coords.longitude,lat:coords.latitude}),
        (error)=>{console.error(error);throw new Error('No geolocation disponible')})        
    },
}



export default actions;
