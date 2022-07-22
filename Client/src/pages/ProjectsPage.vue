<template>
  <div class="bg-black window-height" ref="page">
    <!-- Root column -->
    <div class="row items-center full-height">
      <q-scroll-area style="height: 40rem; width: 100%">
        <div class="row no-wrap">
          <project-card
            v-for="(project, j) in projectList"
            :key="j"
            :project="project"
          />
        </div>
      </q-scroll-area>
    </div>
    <!-- <div class="row">
      <div class="row full-width items-center">
        <div v-for="(projectRow, i) in projectList" :key="i">
          <div class="q-my-xl">
            <div class="text-center">{{ projectRow.header }}</div>
          </div>
          <project-card
            v-for="(project, j) in projectRow.filterArray"
            :key="j"
            :project="project"
          />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { projects } from "../utils/data";
import { gsap } from "gsap";
// Components
import ProjectCard from "components/cards/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  setup() {
    const tab = ref("web");
    const navList = ["web", "mobile", "game"];
    const isLoading = ref(false);
    const currentHover = ref(-1);
    const page = ref(null);

    function navigationAction(navIndex) {}

    const projectCard = ref(null);

    function animateSlideUp() {
      gsap.fromTo(
        projectCard.value,
        { y: 1000, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, ease: "elastic.out(0.9,0.95)", duration: 1 }
      );
    }
    onMounted(() => {
      animateSlideUp();
      gsap.fromTo(page.value, { height: 0 }, { height: window.innerHeight });
    });

    return {
      currentHover,
      tab,
      isLoading,
      navigationAction,
      navList,
      projectList: projects,
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
.blur-column {
  filter: blur(5px);
}
</style>
