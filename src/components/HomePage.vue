<script setup lang="ts">
import ApresentationCard from './ApresentationCard.vue';
import ToolBar from "./ToolBar.vue"
</script>

<template>
  
    <div class="row">
      <div class="col-md-6 d-flex flex-column p-3">
          <ApresentationCard/>
      </div>
      <div class="col-md-6">
        <ToolBar/>
      </div>
    </div>
</template>

<style scoped>
.rounded{
  height: 25rem;
}
</style>
