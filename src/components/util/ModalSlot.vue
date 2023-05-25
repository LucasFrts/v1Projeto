<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';
    const navbar = document.getElementById('navbar')
    let navbarHeight = ref(20);
    if(navbar instanceof HTMLElement){
       navbarHeight = ref(navbar.clientHeight) 
    }
    interface Props{
        id:string,
        header:boolean
    }
    defineProps<Props>()
</script>
<template>
    <div class="modal fade" :id="id" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div :style="{maxHeight:`calc(100% - ${navbarHeight}px)`}" class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div v-show="header" class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot>

                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.modal-dialog{
    position: absolute;
    bottom: 0;
    left:0;
    max-width: calc(100% - 5rem);
}
@media(max-width:768px){
.modal-dialog{
    position: absolute;
    top:52px;
    bottom: 5rem;
    left:0;
    max-width: 100%;
    max-height: calc(100% - 52px - 5rem) !important;
}
}
</style>