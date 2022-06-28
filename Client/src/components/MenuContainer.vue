<template>
  <q-list>
    <q-item
      clickable
      class="menu-item"
      :class="selection == i ? 'active-item1 ' : ''"
      @mouseover="selection = i"
      v-for="(item, i) in menuSelections"
      @click.prevent="() => navigateTo(item.route)"
      :key="i"
    >
      <div class="row justify-between items-center full-width">
        <div class="txt-md">
          {{ item.title }}
        </div>
        <div ref="arrow">
          <q-icon
            v-if="selection == i"
            name="keyboard_double_arrow_left"
            size="2rem"
          />
        </div>
      </div>
    </q-item>
  </q-list>
</template>

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { useRouter } from "vue-router";
export default {
  emits: ["transitionLeave"],
  setup(_, { emit }) {
    const selection = ref(0);
    const arrow = ref(null);
    const $router = useRouter();
    window.addEventListener("keydown", ($event) => {
      let selectCur = selection.value;

      // Navigation
      if ($event.key == "ArrowUp") {
        selection.value =
          selectCur == 0 ? menuSelections.length - 1 : selectCur - 1;
      } else if ($event.key == "ArrowDown") {
        selection.value =
          selectCur == menuSelections.length - 1 ? 0 : selectCur + 1;
      }

      if ($event.key == "Enter") {
        navigateTo(menuSelections[selectCur].route);
      }
    });

    function navigateTo(routeName) {
      console.log("navigating to", routeName);
      emit("transitionLeave");
      setTimeout(() => $router.push(routeName), 500);
    }
    onMounted(() => {
      gsap.to(arrow.value, {
        duration: 0.5,
        x: -5,
        repeat: -1,
        yoyo: true,
      });
    });
    // gsap.registerPlugin();
    const menuSelections = [
      {
        title: "Projects",
        route: "/projects",
      },
      {
        title: "Experience",
        route: "/experience",
      },
      {
        title: "About",
        route: "/about",
      },
      {
        title: "Github",
        route: "/github",
      },
      {
        title: "Linkedin",
        route: "/linkedin",
      },
    ];
    return {
      menuSelections,
      selection,
      navigateTo,
      arrow,
    };
  },
};
</script>
<style lang="scss" scoped>
// .menu-item:hover {
//   background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.377));
// }
.menu-item {
  user-select: none;
}
.active-item {
  background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.377));
}
.active-item1 {
  color: white !important;
  background-color: black;
}
</style>
