import { createStore } from 'vuex';

// My custom modules
//import exampleModule from './module-template';
//import { ExampleStateInterface } from './module-template/state';

import { PlacesState } from './places/state';
import PlacesModule from './places/index';



export interface StateInterface {  
  places:PlacesState
}

export default createStore<StateInterface>({
  modules: {
    places:PlacesModule
  }
});
