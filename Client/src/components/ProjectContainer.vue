<template>
  <q-scroll-area
    style="height: 38rem; max-width: 95rem"
    :thumb-style="thumbStyle"
    visible
  >
    <div class="row q-gutter-xl q-pa-md">
      <project-card
        v-for="(project, i) in projectList"
        :key="i"
        :project="project"
      />
    </div>
  </q-scroll-area>
</template>

<script>
import ProjectCard from "components/cards/ProjectCard.vue";
export default {
  props: ["projectList"],
  components: {
    ProjectCard,
  },
  setup() {
    return {
      thumbStyle: {
        right: "4px",
        borderRadius: "7px",
        backgroundColor: "black",
        width: "6px",
        opacity: 0.75,
      },
    };
  },
};
</script>
