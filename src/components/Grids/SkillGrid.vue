<template>
	<div class="row justify-center items-center nowrap">
		<span class="txt-enorm push-down">
			[
		</span>
		<div class="col" v-for="(skill, index) in skillList" :key="index">
			<q-img class="asset" :src="skill.imgUrl" />
			<span class="txt-header comma">,</span>
		</div>
		<span class="txt-enorm push-down">
			]
		</span>
	</div>
</template>

<style lang="scss" scoped>
.col {
	min-width: 185px !important;
	@keyframes Float {
		0% {
			bottom: 0;
		}
		50% {
			bottom: 25px;
		}
		100% {
			bottom: 0;
		}
	}
	.asset {
		width: 150px;

		animation: Float 2s ease-in-out;
		animation-iteration-count: infinite;
	}
}
.comma {
	display: inline-block;
	transform: translate(0, 85%);
}
.push-down {
	transform: translate(0, 5%);
}
</style>

<script lang="ts">
import { SkillInfo } from "@/models/BoxInfo";
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: "SkillGrid",
	props: {
		skillList: Object as PropType<SkillInfo[]>,
	},
});
</script>
