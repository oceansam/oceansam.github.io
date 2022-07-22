<template>
  <q-card
    flat
    class="project-card"
    :style="
      project.featureImage && {
        'background-image':
          'url(' + require(`assets/projects/${project.featureImage}`) + ')',
      }
    "
  >
    <!-- <div class="absolute full-width full-height">
      <div v-if="hoverSlide" class="absolute-bottom">gg</div>
      <q-badge
        class="q-mt-md txt-xs q-pa-xs"
        style="position: absolute; right: -10px"
        align="middle"
        :color="COLOR_TAGS[project.tagType].bgColor"
        :text-color="COLOR_TAGS[project.tagType].txtColor"
        >{{ project.tagType }}
      </q-badge>
    </div> -->
    <!-- <q-tooltip
      style="width: 250px; border-radius: 15px"
      class="popup-card bg-black"
      anchor="top middle"
      self="bottom middle"
    >
      <div class="txt-md text-center text-white text-bold">
        {{ project.name }}
      </div>
      <q-separator color="black" class="q-my-sm" />
      <div class="row justify-center q-gutter-x-lg">
        <div
          class="text-center"
          v-for="(tech, i) in project.techStack"
          :key="i"
        >
          <q-icon
            :name="ICON_NAMES[tech].name"
            :color="ICON_NAMES[tech].color"
            size="3rem"
          />
          <div class="q-pt-sm text-center">{{ tech }}</div>
        </div>
      </div>
    </q-tooltip> -->
  </q-card>
</template>

<script>
import { ref } from "vue";
import { ICON_NAMES } from "../../utils/data";
export default {
  props: ["project"],
  setup() {
    const hoverSlide = ref(false);
    const COLOR_TAGS = {
      Hackathon: {
        bgColor: "black",
        txtColor: "white",
      },
      "Side Project": {
        bgColor: "red",
        txtColor: "white",
      },
      Internship: {
        bgColor: "green",
        txtColor: "white",
      },

      Contract: {
        bgColor: "orange",
        txtColor: "white",
      },
    };
    return {
      COLOR_TAGS,
      ICON_NAMES,
      hoverSlide,
    };
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  width: 35rem;
  height: 35rem;
  background-size: cover;
  background-position: center;
  will-change: transform;
  border: 2px solid black;

  // transform: rotateX(0deg);
  // transform-style: preserve-3d;

  // &:hover {
  //   transform: perspective(1920px) rotateX(20deg);
  //   transform-style: preserve-3d;
  // }
  transition: all 250ms ease-out;
}
</style>
