<template>
  <div class="row justify-center items-center container">
    <q-card class="field-card" bordered flat>
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide v-for="(experience, i) in workExperience" :key="i">
          gg
        </q-carousel-slide>
      </q-carousel>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { workExperience } from "../utils/data";
export default {
  setup() {
    const slide = ref();
    return {
      workExperience,
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
