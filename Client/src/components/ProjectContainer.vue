<template>
  <div class="row q-gutter-x-md">
    <project-card
      v-for="(project, i) in projectList"
      :key="i"
      :project="project"
    />
  </div>
</template>

<script>
import ProjectCard from "components/cards/ProjectCard.vue";
export default {
  props: ["projectList"],
  components: {
    ProjectCard,
  },
  setup() {},
};
</script>
