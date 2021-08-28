<template>
	<div class="txt-lg">{{ title }}</div>
	<div class="content txt-md">
		{{ content }}
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
