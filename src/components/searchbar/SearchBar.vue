<script lang="ts" src="./SearchBar.ts">
</script>
<template>
<div class="searchbar-container">
    <input class="form-control" v-model="searchTerm" type="text" placeholder="Buscar lugares ..." />        
    {{searchTerm}}
    <SearchResults/>
</div>    
</template>
<style scoped>

.searchbar-container{
    position: fixed;
    top:30px;
    left:30px;
    width: 300px;
    z-index: 1000;
    border-radius: 5px!important;
    overflow: hidden;
    padding: 5px;
    background-color: white;
    box-shadow: 10px 10px  10px rgba(0, 0, 0, 0.4)
}


</style>