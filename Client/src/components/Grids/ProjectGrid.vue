<template>
	<q-scroll-area
		:thumb-style="thumbStyle"
		class="scroll-area q-pl-xl q-py-md q-mb-xl"
		:visible="true"
	>
		<div class="wrapper">
			<div v-for="(project, index) in projects" :key="index">
				<q-card class="project-card q-mr-xl">
					<q-img :src="project.featureImage" height="280px" />

					<q-card-section>
						<div class="row justify-between">
							<div class="txt-xl text-bold q-mt-sm row">
								{{ project.name }}
							</div>
							<div>
								<q-badge
									outline
									:color="getColor(project.tagType)"
									:label="project.tagType"
								/>
							</div>
						</div>
						<div class="txt-sm tech-stack text-bold q-mb-md">
							{{ project.techStack }}
						</div>
						<div class="txt-md content">
							{{ project.description }}
						</div>
					</q-card-section>
					<q-card-actions>
						<a
							v-if="project.githubLink"
							class="ref-link no-dec"
							:href="project.githubLink"
						>
							<q-icon class="icon" name="fab fa-github" size="3rem">
								<q-tooltip
									transition-show="scale"
									class="tool-tip"
									transition-hide="scale"
									>Github</q-tooltip
								></q-icon
							>
						</a>
						<a
							v-if="project.devpostLink"
							class="ref-link no-dec"
							:href="project.devpostLink"
						>
							<q-icon class="icon" name="fab fa-dev" size="3rem">
								<q-tooltip
									transition-show="scale"
									class="tool-tip"
									transition-hide="scale"
									>Devpost</q-tooltip
								>
							</q-icon>
						</a>
						<a
							v-if="project.demoLink"
							class="ref-link no-dec"
							:href="project.demoLink"
						>
							<q-icon class="icon" name="web" size="3rem">
								<q-tooltip
									transition-show="scale"
									class="tool-tip"
									transition-hide="scale"
									>Demo</q-tooltip
								>
							</q-icon>
						</a>
					</q-card-actions>
				</q-card>
			</div>
		</div>
	</q-scroll-area>
</template>
<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.project-card {
	height: 100%;
	width: 500px;
}

.content {
	min-height: 150px;
}
.wrapper {
	display: flex;
	flex-wrap: nowrap;
}
.tech-stack {
	color: $background;
}
.ref-link {
	color: black;
}
.scroll-area {
	height: 800px;
	width: 100%;
}
@media (max-width: $breakpoint-sm-max) {
	.scroll-area {
		height: 650px;
	}
}
.actions {
	border: 2px solid red;
	position: absolute;
	bottom: 0;
}
</style>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useRouter } from "vue-router";
import { ProjectInfo } from "@/models/BoxInfo";

export default defineComponent({
	name: "ProjectGrid",
	props: {
		projects: Object as PropType<ProjectInfo>,
	},
	setup() {
		const $route = useRouter();
		function handleRedirect(url: string) {
			$route.push(url);
		}
		function getColor(tag: string) {
			switch (tag) {
				case "Internship":
					return "orange";
				case "Hackathon":
					return "green";
				case "Side Project":
					return "pink";
				case "Under Development":
					return "red";
				// code block
			}
		}
		return {
			handleRedirect,
			thumbStyle: {
				backgroundColor: "#7b9edb",
				opacity: 0.9,
				width: "5px",
			},
			// Functions
			getColor,
		};
	},
});
</script>
