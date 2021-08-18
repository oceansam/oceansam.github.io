<template>
	<div>
		<div class="txt-lg">{{ title }}</div>
		<div class="txt-md">
			{{ content }}
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "ContentText",
	props: {
		title: String,
		content: String,
	},
});
</script>
