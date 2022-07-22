<template>
  <q-layout>
    <q-page-container>
      <router-view />
      <div class="absolute-bottom-right">
        <controls-container />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { gsap, SteppedEase } from "gsap";
import { defineComponent, onMounted, ref } from "vue";
// Components
import ControlsContainer from "components/ControlsContainer.vue";

export default defineComponent({
  components: {
    ControlsContainer,
  },
});
</script>

<style lang="scss" scoped>
.role-container {
  height: 36px;
}
.nav-header {
  z-index: 0;
}
.role {
  // border-right: 2px solid red;
}
</style>
