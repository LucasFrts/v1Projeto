<script setup lang="ts">
import { ref } from 'vue'
import TerminalComponent from './TerminalComponent.vue';
import image2 from "./../assets/img-2.png"
// defineProps<{ msg: string }>()

const title = ref("lucas@lucas-project: ~/projects/portifolio")
</script>
<template>
    <div class="d-flex flex-column align-items-center">
        <picture class="pfp-circle d-flex justify-content-center">
            <img :src="image2" class="rounded float-start" alt="userimg">
        </picture>
            <TerminalComponent :title="title" class="adjust-width">
              <h1>Lucas Freitas</h1>
              <h2>Fullstack Developer</h2>
            </TerminalComponent>
    </div>
</template>
<style scoped>
img{
    padding-bottom: 30px;
    max-width: 250px;
    width: 100%;
}
.pfp-circle{
  background-color: #481024ee;
  border-radius: 50%;
  border: .5rem solid #2D2D2D;
  max-width: 300px;
    width: 100%;
    max-height: 300px;
    height: 100%;

}
.adjust-width{
    margin-top: -60px;
}
</style>