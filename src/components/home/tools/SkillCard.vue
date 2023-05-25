<script setup lang="ts">
import { defineProps } from 'vue';
import { Skill } from './MenuApresentation.vue';
interface Props {
    skills:Skill[]
}
defineProps<Props>()
</script>
<template>
<div v-for="(skill, index) in skills" :key="index" class="skill-card d-flex flex-column">
                <fa class="fa" :icon="skill.icon"></fa>
                <p>{{ skill.name }}</p>
            </div>
</template>
<style scoped>
.skill-card > .fa{
    font-size: 2.5rem;
}
</style>