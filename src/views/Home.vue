<template>
	<div class="row">
		<navigation-wrapper />
	</div>
	<div class="wrapper">
		<div>
			<div class="row justify-center">
				<h1>Hi, I'm Sam!</h1>
			</div>
			<div class="row justify-center q-gutter-xl">
				<q-icon class="icon" name="fab fa-github" size="3rem"
					><q-tooltip
						transition-show="scale"
						class="tool-tip"
						transition-hide="scale"
						>Github</q-tooltip
					></q-icon
				>
				<q-icon class="icon" name="far fa-file" size="3rem"
					><q-tooltip
						transition-show="scale"
						class="tool-tip"
						transition-hide="scale"
						>Resume</q-tooltip
					></q-icon
				>
				<q-icon class="icon" name="fab fa-linkedin" size="3rem"
					><q-tooltip
						transition-show="scale"
						class="tool-tip"
						transition-hide="scale"
						>Linkedin</q-tooltip
					></q-icon
				>
			</div>
		</div>
		<div class="row justify-center m-top-lg" id="greeting">
			<greeting-wrapper :info="greetingInfo" :isLeftFloat="true" />
		</div>
		<div class="row justify-center test" id="about">
			<greeting-wrapper :info="aboutInfo" />
		</div>
		<div class="row justify-center test" id="projects">
			PROJECTS
		</div>
		<div class="row justify-center test" id="skills">
			SKILLS
		</div>
		<div class="row justify-center test" id="aspirations">
			ASPIRATIONS
		</div>
		<div class="row justify-center test" id="contact">
			CONTACT ME
		</div>
	</div>
</template>
<style lang="scss" scoped>
// Row styling
// .row {
// 	padding: 10px 15px;
// 	background-color: rgba(86, 61, 124, 0.15);
// 	border: 1px solid rgba(86, 61, 124, 0.2);
// 	div {
// 		padding: 10px 15px;
// 		background-color: rgba(86, 61, 124, 0.15);
// 		border: 1px solid rgba(86, 61, 124, 0.2);
// 	}
// }
</style>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationWrapper from "@/components/Navigation/NavigationWrapper.vue";
import GreetingWrapper from "@/components/Hero/GreetingWrapper.vue";
export default defineComponent({
	name: "Home",
	components: {
		NavigationWrapper,
		GreetingWrapper,
	},
	setup() {
		const age = 20;
		const year = "second";
		const greetingInfo = {
			title: "Hello Visitors!",
			content: `I'm a ${year} year Computer Science student attending Ryerson University in the CO-OP program.`,
			imgUrl: 'assets/PopupRes.svg'
		};
		const aboutInfo = {
			title: "Who am I?",
			content: `My name is Samee Chowdhury, I'm ${age} years old and am passionate about creating things. I make side projects that interest me. Whether its through applications, games with the Unity engine, or through the web like what you're reading right now!`,
			imgUrl: 'assets/tree.svg'
		};
		return {
			greetingInfo,
			aboutInfo,
		};
	},
});
</script>
