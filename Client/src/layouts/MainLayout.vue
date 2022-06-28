<template>
  <q-layout>
    <q-page-container>
      <div class="txt-header absolute-top-left q-pa-xl">
        <div class="text-white bg-black q-pa-md">Samee Chowdhury</div>
        <div class="txt-sm text-grey q-pa-sm">My Portfolio</div>
      </div>
      <router-view />
      <div class="absolute-bottom-right">
        <controls-container />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import ControlsContainer from "../components/ControlsContainer.vue";

import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    ControlsContainer,
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
