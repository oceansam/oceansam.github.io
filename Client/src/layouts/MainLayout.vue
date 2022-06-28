<template>
  <q-layout>
    <q-page-container>
      <div class="txt-header absolute-top-left q-pa-xl">
        <div class="text-white bg-black q-pa-md">Samee Chowdhury</div>
        <div class="row txt-md text-black q-pa-sm">
          <div class="role-container">
            <!-- <div
              v-for="(role, i) in roleList"
              :key="i"
              :class="`text-${role.color}`"
              class="role"
              ref="roleRef"
            >
              {{ role.name }}
            </div> -->
            <div ref="roleRef">
              {{ currentRole }}
            </div>
          </div>
          <div>&ThickSpace;Developer</div>
        </div>
      </div>
      <router-view />
      <div class="absolute-bottom-right">
        <controls-container />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import ControlsContainer from "../components/ControlsContainer.vue";
import { gsap, Elastic } from "gsap";
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  components: {
    ControlsContainer,
  },
  setup() {
    const roleList = [
      {
        name: "Fullstack",
        color: "black",
      },
      {
        name: "Software",
        color: "red",
      },
      {
        name: "Mobile",
        color: "blue",
      },
      {
        name: "Game",
        color: "purple",
      },
      {
        name: "Cloud",
        color: "green",
      },
    ];
    const currentRole = ref("Fullstack");
    const roleRef = ref(null);
    const leftDrawerOpen = ref(false);
    function animateRoleWheel() {
      const gsapTL = new gsap.timeline({
        yoyo: true,
        repeat: -1,
        defaults: {
          duration: 0.75,
        },
        onRepeat: () => {
          currentRole.value = Math.random();
        },
      });
      gsapTL.fromTo(
        roleRef.value,
        {
          width: currentRole.value.length * 16,
        },
        {
          width: 0,
          ease: "steps (12)",
        }
      );

      // gsap.utils.toArray(".role").forEach((elem, i) => {
      //   gsapTL.to(roleRef.value, {
      //     y: i * -1 * 36,
      //     ease: Elastic.easeOut.config(1, 0.4),
      //     duration: 1,
      //   });
      // });
    }
    onMounted(() => {
      animateRoleWheel();
    });

    return {
      leftDrawerOpen,
      roleList,
      roleRef,
      currentRole,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

.
<style lang="scss" scoped>
.role-container {
  height: 36px;
  overflow: hidden;
  border: 2px solid red;
}
.role {
  transform: translateY(36px);
}
</style>
