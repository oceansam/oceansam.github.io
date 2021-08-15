<template>
	<div class="flex">
		<home-button />
		<path-button
			class="q-mx-xl"
			v-for="tab in headerTabs"
			:key="tab.text"
			:text="tab.text"
			:anchor="tab.anchor"
		/>
	</div>
</template>

<style lang="scss" scoped>

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
