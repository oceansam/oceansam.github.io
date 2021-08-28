<template>
	<div class="row items-center" v-if="isLeftFloat">
		<div class="col">
			<q-img :src="info.imgUrl" />
		</div>
		<div class="col q-ml-xl">
			<content-text :title="info.title" :content="info.content" />
		</div>
	</div>
	<div class="row items-center" v-else>
		<div class="col q-mr-xl">
			<content-text :title="info.title" :content="info.content" />
		</div>
		<div class="col">
			<q-img :src="info.imgUrl" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.col {
	width: 500px !important;
}
</style>
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
