<template>
	<router-link class="no-dec route-tab" :to="{ hash: `#${anchor}` }">{{
		text
	}}</router-link>
</template>

<style lang="scss" scoped>
.route-tab{
	color: white;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
	name: "PathButton",
	props: {
		text: String,
		anchor: String,
	},
	setup() {
		const $route = useRouter();

		return {
			$route,
		};
	},
});
</script>
