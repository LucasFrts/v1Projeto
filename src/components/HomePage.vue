<script setup lang="ts">
import { ref } from 'vue'
import image2 from "./../assets/img-2.png"
import TerminalComponent from './TerminalComponent.vue';
// defineProps<{ msg: string }>()

const title = ref("lucas@lucas-project: ~/projects/portifolio")
</script>

<template>
  <div class="p-3">
    <div class="col-md-12 d-flex flex-column">
      <div class="pfp-circle d-flex flex-column">
        <img :src="image2" class="rounded float-start" alt="userimg">
        <TerminalComponent :title="title" class="adjust-width">
          <h1>Lucas Freitas</h1>
          <h2>Fullstack Developer</h2>
        </TerminalComponent>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rounded{
  height: 25rem;
}
.pfp-circle{
  display: flex;
  background-color: #481024ee;
  width: 30rem;
  height: 30rem;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
  border: .5rem solid #2D2D2D;;
}
.adjust-width{
  width: 30rem;
  margin-top: -2rem;
}

/* .desc-area{
 display: flex;
 flex-direction: flex-start;
 align-content: flex-start;
} */
</style>
