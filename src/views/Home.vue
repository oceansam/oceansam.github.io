<template>
	<div class="wrapper">
		<div class="row justify-center">
			<h1>Hi, I'm Sam!</h1>
		</div>
		<div class="flex justify-center q-gutter-xl">
			<q-btn class="hero-button" label="Github" />
			<q-btn class="hero-button" label="Resume" />
			<q-btn class="hero-button" label="Linkedin" />
		</div>
		<div class="row justify-center">
			HELLO VISITORS
		</div>
		<div class="row justify-center">
			WHO AM I
		</div>
		<div class="row justify-center">
			PROJECTS
		</div>
		<div class="row justify-center">
			SKILLS
		</div>
		<div class="row justify-center">
			ASPIRATIONS
		</div>
		<div class="row justify-center">
			CONTACT ME
		</div>
	</div>
</template>
<style lang="scss" scoped>
.wrapper {
	border: 2px solid red;
	height: 550px;
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

export default defineComponent({
	name: "Home",
});
</script>
