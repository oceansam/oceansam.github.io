<template>
	<hero-wrapper class="hero" :info="heroInfo" />
	<!-- Greeting (landing) -->
	<div class="row justify-center m-top-lg" id="greeting">
		<content-float :info="greetingInfo" :isLeftFloat="true" />
	</div>
	<!-- Who Am I? -->
	<div>
		<div class="row justify-center m-top-lg" id="about">
			<content-float class="about" :info="aboutInfo" />
		</div>
	</div>
	<!-- Projects -->
	<div>
		<div class="row justify-center text-bold txt-header m-top-lg">Projects</div>
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
			<div class="row justify-center q-mt-xl" id="skills">
				<skill-grid :skillList="skillsInfo" />
			</div>
		</div>
		<bot-wave />
	</div>
	<!-- Aspirations -->
	<div class="row justify-center m-top-lg" id="aspirations">
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
import * as profile from "@/utils/data.json";
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
		const stringMap = ["st", "nd", "rd", "th", "th"];
		// JSON Data
		const projectsInfo = profile.projects;
		const universityYear = new Date().getFullYear() - 2019;
		const postfix = stringMap[universityYear - 1];
		const greetingInfo = {
			title: "Hello Visitors!",
			content: `I'm a ${universityYear + postfix ||
				"th"} year Computer Science student attending Ryerson University in the CO-OP program.`,
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
