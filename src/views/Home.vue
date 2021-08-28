<template>
	<!-- <div class="row">
		<navigation-wrapper />
	</div> -->
	<div class="wrapper">
		<div>
			<div class="row justify-center">
				<h1>Hi, I'm Sam!</h1>
			</div>
			<div class="row justify-center q-gutter-xl">
				<q-icon class="icon" name="fab fa-github" size="3rem"
					><q-tooltip
						transition-show="scale"
						class="tool-tip"
						transition-hide="scale"
						>Github</q-tooltip
					></q-icon
				>
				<q-icon class="icon" name="far fa-file" size="3rem"
					><q-tooltip
						transition-show="scale"
						class="tool-tip"
						transition-hide="scale"
						>Resume</q-tooltip
					></q-icon
				>
				<q-icon class="icon" name="fab fa-linkedin" size="3rem"
					><q-tooltip
						transition-show="scale"
						class="tool-tip"
						transition-hide="scale"
						>Linkedin</q-tooltip
					></q-icon
				>
			</div>
		</div>
		<div class="row justify-center m-top-lg" id="greeting">
			<greeting-wrapper :info="greetingInfo" :isLeftFloat="true" />
		</div>
		<div class="row justify-center m-top-lg" id="about">
			<greeting-wrapper :info="aboutInfo" />
		</div>
		<!-- TODO: Migrate to component -->
		<div class="row justify-center m-top-lg" id="projects">
			<div v-for="(project, index) in projectsInfo" :key="index">
				<q-card class="my-card">
					<q-img :src="project.featureImage">
						<div class="absolute-bottom text-h6">
							{{ project.name }}
						</div>
					</q-img>

					<q-card-section>
						{{ project.description }}
					</q-card-section>
				</q-card>
			</div>
		</div>
		<div class="row justify-center test" id="skills">
			SKILLS
		</div>
		<div class="row justify-center test" id="aspirations">
			ASPIRATIONS
		</div>
		<div class="row justify-center test" id="contact">
			CONTACT ME
		</div>
	</div>
</template>
<style lang="scss" scoped>
.my-card {
	width: 100%;
	width: 350px;
}
// Row styling
// .row {
// 	padding: 10px 15px;
// 	background-color: rgba(86, 61, 124, 0.15);
// 	border: 1px solid rgba(86, 61, 124, 0.2);
// 	div {
// 		padding: 10px 15px;
// 		background-color: rgba(86, 61, 124, 0.15);
// 		border: 1px solid rgba(86, 61, 124, 0.2);
// 	}
// }
</style>

<script lang="ts">
import { defineComponent } from "vue";
// import NavigationWrapper from "@/components/Navigation/NavigationWrapper.vue";
import GreetingWrapper from "@/components/Hero/GreetingWrapper.vue";
export default defineComponent({
	name: "Home",
	components: {
		// NavigationWrapper,
		GreetingWrapper,
	},
	setup() {
		const age = 20;
		const year = "second";
		const greetingInfo = {
			title: "Hello Visitors!",
			content: `I'm a ${year} year Computer Science student attending Ryerson University in the CO-OP program.`,
			imgUrl: "assets/PopupRes.svg",
		};
		const aboutInfo = {
			title: "Who am I?",
			content: `My name is Samee Chowdhury, I'm ${age} years old and am passionate about creating things. I make side projects that interest me. Whether its through applications, games with the Unity engine, or through the web like what you're reading right now!`,
			imgUrl: "assets/tree.svg",
		};
		const projectsInfo = [
			{
				name: "Get Me Home!",
				description:
					"Get Me Home Safe’ is a web based application that visualizes the unsafe areas around the campus.",
				featureImage:
					"https://camo.githubusercontent.com/7f8bb1a5c4e9478b678e32bbd537a627b3609f15d6f9ae3cc9e9baaaeaf77cac/68747470733a2f2f6368616c6c656e6765706f73742d73332d6368616c6c656e6765706f73742e6e6574646e612d73736c2e636f6d2f70686f746f732f70726f64756374696f6e2f736f6674776172655f70686f746f732f3030302f3933332f3639322f64617461732f67616c6c6572792e6a7067",
				githubLink: "https://github.com/oceansam/SafeSpace",
				devpostLink: "https://devpost.com/software/get-me-home-safe",
			},
			{
				name: "Smart Pot.",
				description:
					"SmartPot is a modern approach to tracking plant life through everday applications. We make use of both webpages and discord to give users feedback on their plant status.",
				featureImage:
					"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/502/925/datas/medium.jpg",
				githubLink: "https://github.com/oceansam/SmartPot",
				devpostLink: "https://devpost.com/software/smartpot-f149eq",
			},
		];
		return {
			greetingInfo,
			aboutInfo,
			projectsInfo,
		};
	},
});
</script>
