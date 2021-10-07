<template>
	<hero-wrapper class="hero" :info="heroInfo" />
	<!-- Greeting (landing) -->
	<div class="row justify-center m-top-lg" id="greeting">
		<content-float :info="greetingInfo" :isLeftFloat="true" />
	</div>
	<!-- Who Am I? -->
	<div>
		<div class="row justify-center m-top-lg " id="about">
			<content-float class="about" :info="aboutInfo" />
		</div>
	</div>
	<!-- Projects -->
	<div>
		<div class="row justify-center text-bold txt-header m-top-lg">
			Projects
		</div>
		<div class="row justify-center q-mt-xl" id="projects">
			<project-grid :projects="projectsInfo" />
		</div>
	</div>
	<!-- Skills -->
	<div class="m-top-lg">
		<top-wave />
		<div class="waveSection">
			<div class="row justify-center text-bold txt-header text-white">
				Skills
			</div>
			<div class="row justify-center q-mt-xl " id="skills">
				<skill-grid :skillList="skillsInfo" />
			</div>
		</div>
		<bot-wave />
	</div>
	<!-- Aspirations -->
	<div class="row justify-center m-top-lg " id="aspirations">
		<content-float :info="aspirationInfo" :isLeftFloat="true" />
	</div>
	<!-- Contact -->
	<div class="row justify-center m-top-lg" id="contact">
		<contact-grid />
	</div>
	<div class="m-top-lg" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContentFloat from "@/components/Hero/ContentFloat.vue";
import ProjectGrid from "@/components/Grids/ProjectGrid.vue";
import SkillGrid from "@/components/Grids/SkillGrid.vue";
import HeroWrapper from "@/components/Hero/HeroWrapper.vue";
import ContactGrid from "@/components/Grids/ContactGrid.vue";
import TopWave from "@/components/TopWave.vue";
import BotWave from "@/components/BotWave.vue";
export default defineComponent({
	name: "Home",
	components: {
		ContentFloat,
		ProjectGrid,
		SkillGrid,
		HeroWrapper,
		TopWave,
		BotWave,
		ContactGrid,
	},
	setup() {
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
		// JSON Data
		const greetingInfo = {
			title: "Hello Visitors!",
			content: `I'm a ${year} year Computer Science student attending Ryerson University in the CO-OP program.`,
			imgUrl: "assets/PopupRes.svg",
		};
		const aboutInfo = {
			title: "Who am I?",
			content: `My name is Samee Chowdhury, I'm ${age} years old and am passionate about creating things. I make side projects that interest me. Whether its through applications, games with the Unity engine, or through the web like what you're reading right now!`,
			imgUrl: "assets/tree.svg",
		};
		const aspirationInfo = {
			title: "Aspirations",
			content: `I'm interested in learning and gaining experience in web/software development as well as creating video games as a side hobby. Furthermore, I enjoy drawing pixel art, creating side projects and reverse engineering tech.`,
			imgUrl: "assets/mountain.svg",
		};
		const projectsInfo = [
			{
				name: "Get Me Home",
				description:
					"Get Me Home Safe’ is a web based application that visualizes the unsafe areas around the campus through community driven feedback.",
				featureImage: "assets/projects/staysafe.png",
				githubLink: "https://github.com/oceansam/SafeSpace",
				devpostLink: "https://devpost.com/software/get-me-home-safe",
				techStack: "JS/HTML/CSS",
				tagType: "Hackathon",
			},
			{
				name: "Smart Pot",
				description:
					"SmartPot is a modern approach to tracking plant life through everday applications. We make use of both webpages and discord to give users feedback on their plant status.",
				featureImage: "assets/projects/smartpot.png",
				githubLink: "https://github.com/oceansam/SmartPot",
				devpostLink: "https://devpost.com/software/smartpot-f149eq",
				techStack: "TS/VUE/SASS",
				tagType: "Hackathon",
			},
			{
				name: "ArtBlock",
				description:
					"Art Block is a secure platform for exhibiting and collecting fine art digital assets, built exclusively for contemporary artists, galleries, and collectors.",
				featureImage: "assets/projects/artblock.png",
				techStack: "TS/VUE/SASS",
				tagType: "Internship",
			},
			{
				name: "Forced Perspective",
				description:
					"Forced perspective is an attempt at the recreation of a technique used in Superliminal at which the size of an object changes unknowingly to the user.",
				featureImage: "assets/projects/forcedpov.jpg",
				githubLink: "https://github.com/oceansam/ForcedPerspective",
				techStack: "C#/Unity",
				tagType: "Side Project",
			},
			{
				name: "PixelIT",
				description:
					"PixelIT is a memorization game where one views a pixel image for 10 seconds to memorize it. After 10 seconds they need to recreate image and have a bot mark its accuracy.",
				featureImage: "assets/projects/pixelit.png",
				githubLink: "https://github.com/oceansam/SmartPot",
				devpostLink: "https://devpost.com/software/smartpot-f149eq",
				techStack: "JS/HTML/CSS",
				tagType: "Hackathon",
			},
		];
		const skillsInfo = [
			{
				name: "Javascript",
				imgUrl: "assets/skills/js.svg",
			},
			{
				name: "Typescript",
				imgUrl: "assets/skills/ts.svg",
			},
			{
				name: "Vue.js",
				imgUrl: "assets/skills/vue.svg",
			},
			{
				name: "HTML5",
				imgUrl: "assets/skills/html.svg",
			},
			{
				name: "Python",
				imgUrl: "assets/skills/py.svg",
			},
			{
				name: "Java",
				imgUrl: "assets/skills/java.svg",
			},
			{
				name: "MySql",
				imgUrl: "assets/skills/sql.svg",
			},
		];
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
<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.waveSection {
	background-color: $background;
}
.snippet {
	background-color: rgb(58, 58, 58);
}
.key {
	color: #c5425a;
}
.value {
	color: #5a994d;
}
.colon {
	color: rgb(28, 207, 207);
}
.bracket {
	color: rgb(173, 173, 173);
}
</style>
