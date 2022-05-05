<script lang="ts" src="./SearchResults.ts">
</script>
<template>
<div v-if="isLoadingPlaces">
    <div class="alert alert-primary text-center">
        <h5>Cargando ...</h5>
        <span>Espere por favor...</span>
    </div>
    

</div>
<ul v-else-if="places.length>0" class="list-group mt-3">        
        <li  v-for="place in places" :key="place.id" 
        :class="{'active':place.id==activePlace}"
        @click="onPlaceClicked(place)"
        class="list-group-item lis-group-item-action ">
            <h5>{{place.text}}</h5>
            <p>{{place.place_name}}</p>            
            <div align="right">
                <button :class="(place.id===activePlace?'btn-outline-light':'btn-outline-primary')" 
                class="btn btn-sm " >Direcciones</button>                        
            </div>            
        </li>                
    </ul>
</template>
<style scoped>
li{
    cursor: pointer;
}
h5{
    font-size: 15px!important;
}
p{
    font-size: 10px;
}
</style>