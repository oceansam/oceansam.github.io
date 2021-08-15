<template>
	<q-img src="assets/PopupRes.svg" @click="$router.push('/')" class="test" />
</template>

<style lang="scss" scoped>
.test {
	width: 50px;
	height: 50px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
	name: "HomeButton",
	setup() {
		const $router = useRouter();

		return {
			$router,
		};
	},
});
</script>
