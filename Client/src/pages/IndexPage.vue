<template>
  <div class="row items-center container window-height">
    <div class="row full-width">
      <div class="col-6 q-pl-xl">
        <div>
          <div ref="leftColumn">
            <menu-container
              style="width: 60%"
              @transitionLeave="animateLeave"
            />
          </div>
        </div>
      </div>
      <div class="col-6" ref="rightColumn">
        gggggggggggggggggg gggggggggggggggggg gggggggggggggggggg
        gggggggggggggggggg gggggggggggggggggg gggggggggggggggggg
        gggggggggggggggggg gggggggggggggggggg gggggggggggggggggg
        gggggggggggggggggg gggggggggggggggggg gggggggggggggggggg
        gggggggggggggggggg gggggggggggggggggg gggggggggggggggggg
        gggggggggggggggggg gggggggggggggggggg gggggggggggggggggg
        gggggggggggggggggg gggggggggggggggggg gggggggggggggggggg
        gggggggggggggggggg gggggggggggggggggg gggggggggggggggggg
        gggggggggggggggggg gggggggggggggggggg gggggggggggggggggg
        gggggggggggggggggg gggggggggggggggggg gggggggggggggggggg
        gggggggggggggggggg gggggggggggggggggg gggggggggggggggggg
        gggggggggggggggggg gggggggggggggggggg gggggggggggggggggg
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, ref } from "vue";
import { animateFrom } from "../utils/animate";
import { onBeforeRouteLeave } from "vue-router";
import { useQuasar } from "quasar";
import MenuContainer from "../components/MenuContainer.vue";

import NavigationDialog from "../components/Dialogs/NavigationDialog.vue";
import profile from "../utils/data.json";
export default defineComponent({
  components: {
    MenuContainer,
  },
  setup() {
    const $q = useQuasar();

    const leftColumn = ref(null);
    const rightColumn = ref(null);
    function animateLeave() {
      console.log("LEAVING ROUTE");
      animateFrom(leftColumn.value, -1, 800, 0, 0.5);
      animateFrom(rightColumn.value, 1, 800, 0, 0.5);
    }
    // onBeforeMount(() => {
    //   $q.dialog({
    //     component: NavigationDialog,
    //   }).onOk(() => {
    //     $route.push("/");
    //   });
    // });

    // Dynamic Params
    const age = 20;
    const year = "third";
    const meta = {
      name: "Sam",
      age: `${age}`,
    };
    const heroInfo = {
      githubLink: "https://github.com/oceansam",
      resumeLink:
        "https://drive.google.com/file/d/1Rz3Du__uCZnAT791uK3YVRj0jkxY3uiV/view?usp=sharing",
      linkedinLink: "https://www.linkedin.com/in/samee-chowdhury/",
    };
    const stringMap = ["st", "nd", "rd", "th", "th"];
    // JSON Data
    const projectsInfo = profile.projects;
    const universityYear = new Date().getFullYear() - 2019;
    const postfix = stringMap[universityYear - 1];
    const greetingInfo = {
      title: "Hello Visitors!",
      content: `I'm a ${
        universityYear + postfix || "th"
      } year Computer Science student attending Ryerson University in the CO-OP program.`,
      imgUrl: "assets/PopupRes.svg",
    };
    const ageData = {
      year: new Date().getFullYear() - 2001,
      month: new Date().getMonth() - 5,
    };
    const aboutInfo = {
      title: "Who am I?",
      content: `My name is Samee Chowdhury, I'm ${
        ageData.month < 0 ? ageData.year - 1 : ageData.year
      } years old and am passionate about creating things. I make side projects that interest me. Whether its through applications, games with the Unity engine, or through the web like what you're reading right now!`,
      imgUrl: "assets/tree.svg",
    };
    const aspirationInfo = profile.aspirationQuote;
    const skillsInfo = profile.skills;
    return {
      meta,
      leftColumn,
      rightColumn,
      animateLeave,
      greetingInfo,
      aboutInfo,
      aspirationInfo,
      projectsInfo,
      skillsInfo,
      heroInfo,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
