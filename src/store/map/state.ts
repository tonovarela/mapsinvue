import Mapboxgl from "mapbox-gl";

export interface MapState {
    map?: Mapboxgl.Map,
    markers:Mapboxgl.Marker[];
    distance?:number;
    duration?:number

}

function state(): MapState {
    return {
        map:undefined,
        distance:undefined,
        duration:undefined,
        markers:[]
    }
}

export default state;