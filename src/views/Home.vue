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
		<div class="row justify-center m-top-lg">
			<greeting-wrapper :info="greetingInfo" />
		</div>
		<div class="row justify-center test" id="about">
			WHO AM I
			<about-wrapper />
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
		const greetingInfo = {
			title: "Hello Visitors!",
			content:
				"I'm a second year Computer Science student attending Ryerson University in the CO-OP program.",
		};
		return {
			greetingInfo,
		};
	},
});
</script>
