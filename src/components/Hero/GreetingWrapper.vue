<template>
	<div class="row">
		<q-img class="float-image col" src="assets/PopupRes.svg" />
		<content-text class="col" :title="info.title" :content="info.content" />
	</div>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import ContentText from "@/components/ContentText.vue";
import { ContentInfo } from "@/models/BoxInfo";
export default defineComponent({
	name: "GreetingWrapper",
	components: {
		ContentText,
	},
	props: {
		info: Object as PropType<ContentInfo>,
	},
});
</script>
