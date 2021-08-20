<template>
	<div class="row" v-if="isLeftFloat">
		<q-img class="float-image col" :src="info.imgUrl" />
		<content-text class="col" :title="info.title" :content="info.content" />
	</div>
	<div class="row" v-else>
		<content-text class="col" :title="info.title" :content="info.content" />
		<q-img class="float-image col" :src="info.imgUrl" />
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
		isLeftFloat: Boolean,
	},
});
</script>
