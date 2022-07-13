<template>
  <div class="row justify-center items-center container">
    <div ref="projectCard">
      <q-card class="field-card" bordered flat>
        <q-card-section class="row items-center justify-between">
          <q-icon
            @click="navigationAction(-1)"
            name="arrow_back"
            size="2rem"
            class="control-option"
          />
          <q-tabs
            v-model="tab"
            @update:model-value="updateProjectList"
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
        <!-- <q-spinner v-if="isLoading" color="primary" size="3em" :thickness="2" /> -->

        <q-carousel
          height="40rem"
          v-model="tab"
          animated
          transition-prev="slide-right"
          transition-next="slide-left"
        >
          <q-carousel-slide v-for="(item, i) in navList" :key="i" :name="item">
            <project-container :projectList="projectList" />
          </q-carousel-slide>
        </q-carousel>
      </q-card>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { projects } from "../utils/data";
import { gsap } from "gsap";
// Components
import ProjectContainer from "components/ProjectContainer.vue";
export default {
  components: {
    ProjectContainer,
  },
  setup() {
    const tab = ref("web");
    const navList = ["web", "mobile", "game"];
    const projectList = ref([]);
    const isLoading = ref(false);
    function navigationAction(navIndex) {}
    function updateProjectList() {
      isLoading.value = true;
      projectList.value = projects.filter((proj) => proj.field == tab.value);
      isLoading.value = false;
    }

    const projectCard = ref(null);

    function animateSlideUp() {
      gsap.fromTo(
        projectCard.value,
        { y: 1000, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, ease: "elastic.out(0.9,0.95)", duration: 1 }
      );
    }
    onMounted(() => {
      updateProjectList();
      animateSlideUp();
    });

    return {
      tab,
      isLoading,
      updateProjectList,
      navigationAction,
      navList,
      projectList,
      projectCard,
    };
  },
};
</script>

<style lang="scss" scoped>
.field-card {
  width: 95rem;
  height: 45rem;
}
</style>
