<script setup lang="ts">
import { propsToAttrMap } from '@vue/shared';
import { defineProps, watch, toRef } from 'vue'

interface Props {
  html: string;
}

defineProps<Props>();


</script>

<template>
    <div v-html="html" id="navigation-page">
    </div>
</template>
<style scoped>
#navigation-page{
    background-color:#fff;
}
</style>