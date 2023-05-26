<script lang="ts">
import { IconType } from '../../views/HomePage.vue';
import { ref } from 'vue';
import SkillCard from './SkillCard.vue';
export interface Skill {
    icon:IconType,
    name:string,
    color:string
}
export default{
    setup(){
        const skills:Skill[] = [
    {
        icon:['fab', 'html5'],
        name:'HTML',
        color:'#b74b22'
    },
    {
        icon:['fab', 'css3-alt'],
        name:'CSS',
        color:'#008383'
    },
    {
        icon:['fab', 'js'],
        name:'JavaScript',
        color:'#b5b516'
    },
    {
        icon:['fab', 'php'],
        name:'PHP',
        color:'#8f108f'
    },
    {
        icon:['fab', 'python'],
        name:'Python',
        color:'#a5eaff'
    },
    {
        icon:['fab', 'js'],
        name:'TypeScript',
        color:'#1940ff'
    },
    {
        icon:['fab', 'vuejs'],
        name:'VueJs',
        color:'#37833d'
    },
    {
        icon:['fab', 'laravel'],
        name:'Laravel',
        color:'#cb1300'
    },
    {
        icon:['fab', 'python'],
        name:'Flask',
        color:'#b5b516'
    },
    {
        icon:['fas', 'database'],
        name:'SQL',
        color:'gray'
    },
    {
        icon:['fab', 'git-alt'],
        name:'GIT',
        color:'#cb2f00'
    },
   

]   
    return {skills}
    },
    data(){
        return{
            search:""
        }
    },
    components:{
        SkillCard
    },
    computed:{
        searchedSkills(){
            return this.skills.filter((option) =>
              option.name.toLowerCase().includes(this.search.toLowerCase())
            );
        }
    }
}

</script>
<template>
    <div class="col-md-12 d-flex justify-content-center align-items-center flex-column">
        <div class="input-group flex-nowrap mt-2">
            <span class="input-group-text" id="addon-wrapping"><fa :icon="['fas', 'search']"/></span>
            <input type="text" v-model="search" class="form-control text-white" placeholder="Type to search" aria-label="search" aria-describedby="addon-wrapping">
        </div>
        <div class="w-75 flex-wrap d-flex text-white gap-5 mt-5 justify-content-center">
            <SkillCard :skills="searchedSkills" />
        </div>
    </div>
</template>
<style scoped>
span, input{
    background-color: #00000000 !important;
    color: #fafafa;
}
.input-group-text{
    border-right: none;
}
.form-control{
    border-left:none;
}
.input-group{
    max-width: 250px;
}

</style>