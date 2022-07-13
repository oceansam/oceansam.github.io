<template>
  <q-card
    class="project-card"
    :style="
      project.featureImage && {
        'background-image':
          'url(' + require(`assets/projects/${project.featureImage}`) + ')',
      }
    "
  >
    <!-- <q-card-section>
      {{ project.name }}
    </q-card-section> -->
  </q-card>
</template>

<script>
export default {
  props: ["project"],
  setup() {},
};
</script>

<style lang="scss" scoped>
.project-card {
  width: 15rem;
  height: 20rem;
  background-size: cover;
  background-position: center;
  will-change: transform;

  transform: rotateX(0deg);
  transform-style: preserve-3d;

  &:hover {
    transform: perspective(1920px) rotateX(20deg);
    transform-style: preserve-3d;
  }
  transition: all 250ms ease-out;
}
</style>
