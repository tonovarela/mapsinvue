<script lang="ts" src="./TripDetails.ts">
</script>
<template>
  <div v-if="hasPlaces && distance!=undefined" class="trip-container column">
    <div class="col">Distance :<strong>{{distance}} kms</strong></div>
    <div class="col">Duration :<strong>{{duration}} minutes</strong></div>
  </div>
</template>
<style scoped>

.trip-container{
    padding: 10px;
    position: fixed;
    bottom:50px;
    left:20px;
    border-radius:10px ;
    background-color: white;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 25px;;
    width: 350px;
}
strong {
  color:#42b983;
}
</style>