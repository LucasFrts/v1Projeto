<script lang="ts">
import { ref } from 'vue';
import ApresentationCard from '../home/ApresentationCard.vue';
import ToolBar from "../home/ToolBar.vue"
import ModalSlot from '../util/ModalSlot.vue';
import MenuApresentation from '../home/tools/MenuApresentation.vue';
// receber posteriormente via API
type IconPrefix = "fab" | "fas"
export type IconType = [IconPrefix, string]
export interface Modal {
  component: string
  id: string,
  icon: IconType,
  header:boolean
}
export default {
  setup() {
    const modais: Modal[] = [
      {
        component: "MenuApresentation",
        id: "menu-modal",
        icon: ['fas', 'bars'],
        header:false
      },
      {
        component: "NavigatorBrowser",
        id: "navigator-modal",
        icon: ['fab', 'firefox'],
        header:true
      },
      {
        component: "EmailApplication",
        id: "email-modal",
        icon: ['fas', 'envelope'],
        header:true
      },
    ]
    return { modais }
  },
  components: {
    ApresentationCard,
    ToolBar,
    ModalSlot,
    MenuApresentation
  }

}


</script>

<template>
  <div class="row">
    <div class="col-md-6 d-flex flex-column p-3">
      <ApresentationCard />
    </div>
    <div class="col-md-6">
      <ToolBar :tools="modais" />
    </div>
  </div>

  <!-- Modal -->
  <ModalSlot v-for="modal in modais" :id="modal.id" :key="modal.id" :header="modal.header">
    <component :is="modal.component" />
  </ModalSlot>
</template>

<style scoped>
.rounded {
  height: 25rem;
}
</style>
