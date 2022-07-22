<template>
  <div class="txt-header q-py-xl">
    <div class="text-white bg-black q-pa-md">Samee Chowdhury</div>
    <div class="row txt-md text-black q-pa-sm">
      <div class="role-container">
        <div class="role" ref="roleRef">
          {{ currentRole }}
        </div>
      </div>
      <div>&ThickSpace;Developer</div>
    </div>
  </div>
</template>

<script>
import { gsap, SteppedEase } from "gsap";
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
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
    const currentRole = ref(roleList[0].name);
    const currentIndex = ref(0);
    const roleRef = ref(null);
    const leftDrawerOpen = ref(false);

    function getNewWidth() {
      return currentRole.value.length * 15;
    }

    function animateRoleWheel() {
      const gsapTL = new gsap.timeline({
        repeat: -1,
        defaults: {
          ease: SteppedEase.config(9),
          duration: 1.2,
        },
        repeatRefresh: true,
        onRepeat: () => {
          currentIndex.value =
            currentIndex.value + 1 > roleList.length - 1
              ? 0
              : currentIndex.value + 1;
          currentRole.value = roleList[currentIndex.value].name;
        },
      });

      gsapTL.fromTo(
        roleRef.value,
        { width: 0 },
        {
          width: () => getNewWidth(),
        }
      );
      gsapTL.to(roleRef.value, { width: 0, delay: 2.3 });
    }
    function animateBlinker() {
      const gsapTL = new gsap.timeline({
        repeat: -1,
        defaults: {
          duration: 0.5,
        },
      });

      gsapTL.fromTo(
        roleRef.value,
        {
          "border-right": "2px solid black",
        },
        {
          "border-right": "2px solid white",
        }
      );
    }
    onMounted(() => {
      animateRoleWheel();
      animateBlinker();
    });

    return {
      leftDrawerOpen,
      roleList,
      roleRef,
      currentRole,
    };
  },
});
</script>

<style lang="scss" scoped>
.role {
  overflow-x: hidden;
}
</style>
