<template>
  <div class="row items-center container window-height">
    <div class="absolute-bottom test full-width bg-black" ref="coverScreen" />
    <div class="row full-width full-height" style="height: 650px">
      <div class="col-6 q-pl-xl">
        <div ref="leftColumn">
          <header-container />
          <div>
            <menu-container
              style="width: 60%"
              @transitionLeave="animateLeave"
            />
          </div>
        </div>
      </div>
      <div class="col" ref="rightColumn">
        <canvas class="full-width full-height" id="bg"> </canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
import { animateFrom } from "../utils/animate";
import { useQuasar } from "quasar";
import MenuContainer from "components/MenuContainer.vue";
import HeaderContainer from "components/HeaderContainer.vue";
import NavigationDialog from "components/Dialogs/NavigationDialog.vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";
export default defineComponent({
  components: {
    MenuContainer,
    HeaderContainer,
  },
  setup() {
    const $q = useQuasar();

    const leftColumn = ref(null);
    const rightColumn = ref(null);
    const coverScreen = ref(null);
    function animateLeave() {
      console.log("LEAVING ROUTE");
      animateFrom(leftColumn.value, -1, 800, 0, 0.5);
      animateFrom(rightColumn.value, 1, 800, 0, 0.5);
    }

    onMounted(() => {
      const scene = new THREE.Scene();

      // ---------- Model Loading ---------- \\
      const loader = new GLTFLoader();
      loader.load(
        "assets/PokemonCard.glb",
        (gltf) => {
          console.log(gltf);
          const root = gltf.scene;
          root.scale.set(1.8, 1, 1);
          scene.add(root);
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (err) => {
          console.log("An error occurred");
        }
      );
      // ---------- Lighting ---------- \\
      const directionalLight_Front = new THREE.DirectionalLight(0xffffff, 0.7);
      directionalLight_Front.position.set(0, 0, 10);
      const directionalLight_Back = new THREE.DirectionalLight(0xffffff, 0.7);
      directionalLight_Back.position.set(0, 0, -10);
      const globalLight = new THREE.PointLight(0xffffff, 1);

      scene.add(directionalLight_Back);
      scene.add(directionalLight_Front);
      scene.add(new THREE.AmbientLight(0xffffff, 0.2));
      scene.add(globalLight);
      // ---------- Camera ---------- \\
      const cam = new THREE.PerspectiveCamera(45, 2, 1);
      cam.position.set(1, 2, 2);
      scene.add(cam);

      // ---------- Scene ---------- \\
      scene.background = new THREE.Color(0xffffff);
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#bg"),
      });

      // ---------- Controls ---------- \\
      const controls = new OrbitControls(cam, renderer.domElement);
      controls.minPolarAngle = Math.PI / 2;
      controls.maxPolarAngle = Math.PI / 2;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.autoRotate = true;

      // ---------- Renderer ---------- \\
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 1.5);
      renderer.shadowMap.enabled = true;
      renderer.gammaOutput = true;

      function animate() {
        requestAnimationFrame(animate);
        controls.update();

        renderer.render(scene, cam);
      }
      animate();
    });
    // @PLO
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
    return {
      meta,
      leftColumn,
      rightColumn,
      coverScreen,
      animateLeave,
      greetingInfo,
      aboutInfo,
      heroInfo,
    };
  },
});
</script>
