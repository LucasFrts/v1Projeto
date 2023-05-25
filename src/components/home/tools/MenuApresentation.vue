<script lang="ts">
import { IconType } from '../../views/HomePage.vue';
import SkillCard from './SkillCard.vue';
export interface Skill {
    icon:IconType,
    name:string
}
export default{
    setup(){
        const skills:Skill[] = [
    {
        icon:['fab', 'html5'],
        name:'HTML'
    },
    {
        icon:['fab', 'css3-alt'],
        name:'CSS'
    },
    {
        icon:['fab', 'js'],
        name:'JavaScript'
    }
]
    return {skills}
    },
    components:{
        SkillCard
    }
}

</script>
<template>
    <div class="col-md-12 d-flex justify-content-center align-items-center flex-column">
        <div class="input-group flex-nowrap mt-2">
            <span class="input-group-text" id="addon-wrapping"><fa :icon="['fas', 'search']"/></span>
            <input type="text" class="form-control text-white" placeholder="Type to search" aria-label="search" aria-describedby="addon-wrapping">
        </div>
        <div class="w-100 flex-wrap d-flex text-white gap-5 mt-5 justify-content-center">
            <SkillCard :skills="skills" />
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