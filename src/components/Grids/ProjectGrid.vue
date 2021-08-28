<template>
	<div class="row justify-center">
		<div v-for="(project, index) in projects" :key="index">
			<q-card class="project-card q-mr-xl">
				<q-img :src="project.featureImage" />

				<q-card-section>
					<div class="text-overline text-orange-9">
						{{ project.techStack }}
					</div>
					<div class="txt-xl text-bold q-mt-sm q-mb-xs">
						{{ project.name }}
					</div>
					<div class="txt-md content">
						{{ project.description }}
					</div>
				</q-card-section>
				<q-card-actions>
					<q-icon class="icon" name="fab fa-github" size="3rem"
						><q-tooltip
							transition-show="scale"
							class="tool-tip"
							transition-hide="scale"
							>Github</q-tooltip
						></q-icon
					>
					<q-icon class="icon" name="fab fa-dev" size="3rem">
						<q-tooltip
							transition-show="scale"
							class="tool-tip"
							transition-hide="scale"
							>Devpost</q-tooltip
						>
					</q-icon>
				</q-card-actions>
			</q-card>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.project-card {
	width: 500px;
}
.content {
	min-height: 150px;
}
</style>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ProjectInfo } from "@/models/BoxInfo";

export default defineComponent({
	name: "ProjectGrid",
	props: {
		projects: Object as PropType<ProjectInfo>,
	},
});
</script>
