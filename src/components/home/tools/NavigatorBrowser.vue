<script lang="ts">
import {ref} from 'vue';
import axios, { AxiosResponse } from 'axios';
import NavigationPage from './NavigationPage.vue';
export default{
    setup(){
        const search = ref("");
        const initialpage = ref(true);
        let searched = ref("");
        const url = import.meta.env.VITE_API_URL
    
        const getHttpSearch = ()=>{
            const query = `https://www.google.com/search?q=${search.value}`
            const form = {
                query:query
            }
            axios
            .post(`${url}/getSiteFromUrl`, form)
            .then(response => resolve(response))
            const resolve = (response:AxiosResponse)=>{
                const data = response.data.data
                searched.value = data;
                initialpage.value = false
            }
        }
        return{
            search,
            initialpage,
            searched,
            getHttpSearch
        }
    },
    components:{
        NavigationPage
    }
}


</script>

<template> 
    <div v-show="initialpage">
        <div class="logo col-12 d-flex flex-column align-items-center text-white pt-5">
            <div class="d-flex flex-row align-items-center">
                <fa class="text-danger" :icon="['fab', 'firefox']"></fa>Firefox
            </div>
        </div>
        <div class="col-12 d-flex flex-row justify-content-center pt-3">
            <div class="input-group flex-nowrap mt-2">
                <span class="input-group-text" id="addon-wrapping"><fa class="text-white" :icon="['fab', 'google']"/></span>
                <input @keypress.enter="getHttpSearch" type="text" v-model="search" class="form-control text-white" placeholder="Seach with google" aria-label="search" aria-describedby="addon-wrapping">
            </div>
        </div>
    </div>
    <div v-show="!initialpage">
        <NavigationPage :html="searched"/>
    </div>
</template>
<style scoped>
.logo{
    font-size: 5rem;
    font-weight: bold;
    font-family: 'Zilla Slab', serif;
    font-weight: bold;
    align-items: center;
}
.text-danger{
    color: #d36e05 !important;
}
.input-group{
    max-width: 70%;
}
.input-group > span{
    background-color: #4d4c56;
    border-right: none;
}
.input-group > input{
    background-color: #4d4c56;
    border-left:none;
}

</style>