import { ActionTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';
import { directionsAPI } from '@/api';
import { ResponseDirections } from '@/interfaces/directions';


export type LngLat = [number, number];
const actions: ActionTree<MapState, StateInterface> = {


  async getRouteBetweenPoints({ commit }, { start, end }: { start: LngLat, end: LngLat }) {
    const resp = await directionsAPI
      .get<ResponseDirections>(`${start.join(',')};${end.join(',')}`)
    //Todo distancia y duracion
    const { distance, duration } = resp.data.routes[0];
    console.log({distance,duration});
    commit('setDistanceDuration', {
      distance,
      duration
    });
    commit('setRoutePolylines', resp.data.routes[0].geometry.coordinates);

  }
}


export default actions;
