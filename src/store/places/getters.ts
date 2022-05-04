import { GetterTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<PlacesState, StateInterface> = {

    
    isUserReady(  state  ) {
         return !!state.userLocation;
    }   
}



export default getters;