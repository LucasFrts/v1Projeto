<script setup lang="ts">
    defineProps<{title:String}>()
</script>
<template>
    <div class="card">
          <div class="card-header">
            {{title}}
          </div>
          <div class="pf-description p-2 card-body">
            <slot>

            </slot>
          </div>
    </div>
</template>
<style scoped>
.card {
  transition: transform 0.5s;
  transform-style: preserve-3d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
              inset 0 0 5px rgba(241, 241, 241, 0.5);
}

.card:hover {
  transform: rotateY(5deg) translateZ(5px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.card{
--bs-card-border-color: #353535;
}
.card-header{
  font-family: 'Ubuntu', sans-serif;
  background-color: #2D2D2D;
  color: #FFFFFF;
  text-align: center;
}
.card-body{
  font-family: 'Ubuntu Mono', monospace !important;
  background-color: #481025;
  color:  #FFFFFF;
}
.card-header .btn{
 background-color:  #E95420
}
/* .pf-description{
  position: relative;
  width: 30rem;
  background-color: rgb(123, 101, 101);
  z-index: 5;
} */
</style>