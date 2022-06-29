<template>
  <div class="row justify-center items-center container">
    <q-card bordered flat>
      <q-card-section class="row items-center">
        <q-icon
          @click="navigationAction(-1)"
          name="arrow_back"
          size="2rem"
          class="control-option"
        />
        <q-tabs
          v-model="tab"
          narrow-indicator
          dense
          align="justify"
          class="text-primary q-mx-md"
        >
          <q-tab :ripple="false" name="web" class="txt-md">Web</q-tab>
          <q-tab :ripple="false" name="mobile" class="txt-md">Mobile</q-tab>
          <q-tab :ripple="false" name="game" class="txt-md">Game</q-tab>
        </q-tabs>
        <q-icon
          @click="navigationAction(1)"
          name="arrow_forward"
          size="2rem"
          class="control-option"
        />
      </q-card-section>
      <q-card-section>
        <project-container :projectList="projectList" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { projects } from "../utils/data";
// Components
import ProjectContainer from "components/ProjectContainer.vue";
export default {
  components: {
    ProjectContainer,
  },
  setup() {
    const tab = ref("web");
    const navList = ["web", "mobile", "game"];
    function navigationAction(navIndex) {}
    return {
      tab,
      navigationAction,
      projectList: projects,
    };
  },
};
</script>
