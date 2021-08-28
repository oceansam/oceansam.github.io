<template>
	<div class="row justify-center items-center">
		<div class="col" v-for="(skill, index) in skillList" :key="index">
			<q-img class="asset" :src="skill.imgUrl" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.asset {
	width: 150px;
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
