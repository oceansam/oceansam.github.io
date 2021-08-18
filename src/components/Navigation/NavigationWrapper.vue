<template>
	<div class="row items-center root">
		<home-button class="q-mx-xl" />
		<path-button
			class="txt-md q-mx-xl"
			v-for="tab in headerTabs"
			:key="tab.text"
			:text="tab.text"
			:anchor="tab.anchor"
		/>
	</div>
</template>

<style lang="scss" scoped>
.root {
	width: 100%;
	background-color: #65738c;
	height: 8vh !important;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
// Components
import HomeButton from "./HomeButton.vue";
import PathButton from "./PathButton.vue";
export default defineComponent({
	name: "NavigationWrapper",
	components: {
		HomeButton,
		PathButton,
	},
	setup() {
		const headerTabs = [
			{
				text: "About",
				anchor: "about",
			},
			{
				text: "Projects",
				anchor: "projects",
			},
			{
				text: "Experience",
				anchor: "experience",
			},
			{
				text: "Contact",
				anchor: "contact",
			},
		];
		return {
			headerTabs,
		};
	},
});
</script>
