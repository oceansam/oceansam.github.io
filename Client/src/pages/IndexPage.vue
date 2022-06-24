<template>
  <div>
    <hero-section :info="heroInfo" />
    <project-section :projects="projectsInfo" />
  </div>
</template>

<script>
import HeroSection from "../components/sections/HeroSection.vue";
import { defineComponent, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import NavigationDialog from "../components/Dialogs/NavigationDialog.vue";
import profile from "../utils/data.json";
export default defineComponent({
  name: "IndexPage",
  components: {
    HeroSection,
  },
  setup() {
    const $q = useQuasar();
    const $route = useRouter();
    onBeforeMount(() => {
      $q.dialog({
        component: NavigationDialog,
      }).onOk(() => {
        $route.push("/");
      });
    });

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
