<template>
	<navigation-wrapper />
	<div class="wrapper">
		<div class="row justify-center">
			<h1>Hi, I'm Sam!</h1>
		</div>
		<div class="flex justify-center q-gutter-xl">
			<q-icon name="fab fa-github" size="3rem" />
			<q-icon name="far fa-file" size="3rem" />
			<q-icon name="fab fa-linkedin" size="3rem" />
		</div>
		<div class="row justify-center test">
			HELLO VISITORS
		</div>
		<div class="row justify-center test" id="about">
			WHO AM I
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
		<div class="row justify-center test">
			gg
		</div>
		<div class="row justify-center test">
			gg1
		</div>
		<div class="row justify-center test">
			gg2
		</div>
	</div>
</template>
<style lang="scss" scoped>
.wrapper {
	height: 550px;
}
.test {
	margin-top: 500px;
	.t {
		margin-bottom: 200px;
	}
}

// Row styling
.row {
	padding: 10px 15px;
	background-color: rgba(86, 61, 124, 0.15);
	border: 1px solid rgba(86, 61, 124, 0.2);
	div {
		padding: 10px 15px;
		background-color: rgba(86, 61, 124, 0.15);
		border: 1px solid rgba(86, 61, 124, 0.2);
	}
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationWrapper from "@/components/Navigation/NavigationWrapper.vue";
export default defineComponent({
	name: "Home",
	components: {
		NavigationWrapper,
	},
	setup() {
		return {};
	},
});
</script>
