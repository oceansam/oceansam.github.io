<template>
	<div class="row items-center" v-if="isLeftFloat">
		<q-img class="asset q-mr-xl" :src="info.imgUrl" />
		<div class="col">
			<content-text :title="info.title" :content="info.content" />
		</div>
	</div>
	<div class="row items-center" v-else>
		<div class="col">
			<content-text :title="info.title" :content="info.content" />
		</div>
		<q-img class="asset q-ml-xl" :src="info.imgUrl" />
	</div>
</template>

<style lang="scss" scoped>
.col {
	width: 500px !important;
	margin-left: auto;
	margin-right: auto;
}
.asset {
	width: 320px;
	height: auto;
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
