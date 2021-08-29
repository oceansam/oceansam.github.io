<template>
	<!-- <div class="row">
		<navigation-wrapper />
	</div> -->
	<hero-wrapper />
	<!-- Greeting (landing) -->
	<div class="row justify-center m-top-lg" id="greeting">
		<content-float :info="greetingInfo" :isLeftFloat="true" />
	</div>
	<!-- Who Am I? -->
	<div class="row justify-center m-top-lg test" id="about">
		<content-float :info="aboutInfo" />
	</div>
	<!-- Projects -->
	<div>
		<div class="row justify-center text-bold txt-header m-top-lg">
			Projects
		</div>
		<div class="row justify-center q-mt-xl" id="projects">
			<project-grid :projects="projectsInfo" />
		</div>
	</div>
	<!-- Skills -->
	<div class="test">
		<div class="row justify-center text-bold txt-header m-top-lg">
			Skills
		</div>
		<div class="row justify-center q-mt-xl " id="skills">
			<skill-grid :skillList="skillsInfo" />
		</div>
	</div>
	<!-- Aspirations -->
	<div class="row justify-center m-top-lg " id="aspirations">
		<content-float :info="aspirationInfo" :isLeftFloat="true" />
	</div>
	<!-- Contact -->
	<div class="row justify-center m-top-lg" id="contact">
		<pre class="snippet">
<code>
 <span class="bracket">{</span>
   <span class="key">"name"</span><span class="colon"> : </span><span class="value">"Sam"</span>
   <span class="key">"email"</span><span class="colon"> : </span><span class="value">"oceansam101@gmail.com"</span>
   <span class="key">"phone"</span><span class="colon"> : </span><span class="value">"4169979768"</span>
 <span class="bracket">}</span>

</code>
		</pre>
	</div>
</template>
<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

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
.test {
	background-color: rgb(226, 226, 226);
}
.snippet {
	background-color: rgb(58, 58, 58);
}
.key {
	color: #c5425a;
}
.value {
	color: #5a994d;
}
.colon {
	color: rgb(28, 207, 207);
}
.bracket {
	color: rgb(173, 173, 173);
}

.waveBack {
	background-color: #ccc5ba;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
// import NavigationWrapper from "@/components/Navigation/NavigationWrapper.vue";
import ContentFloat from "@/components/Hero/ContentFloat.vue";
import ProjectGrid from "@/components/Grids/ProjectGrid.vue";
import SkillGrid from "@/components/Grids/SkillGrid.vue";
import HeroWrapper from "@/components/Hero/HeroWrapper.vue";
export default defineComponent({
	name: "Home",
	components: {
		// NavigationWrapper,
		ContentFloat,
		ProjectGrid,
		SkillGrid,
		HeroWrapper,
	},
	setup() {
		// Dynamic Params
		const age = 20;
		const year = "third";
		const meta = {
			name: "Sam",
			age: `${age}`,
		};
		// JSON Data
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
		const aspirationInfo = {
			title: "Aspirations",
			content: `I'm interested in learning and gaining experience in web development as well as creating video games as a side hobby. Furthermore, I enjoy drawing pixel art, creating side projects and reverse engineering tech.`,
			imgUrl: "assets/mountain.svg",
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
				techStack: "JS/HTML/CSS",
			},
			{
				name: "Smart Pot.",
				description:
					"SmartPot is a modern approach to tracking plant life through everday applications. We make use of both webpages and discord to give users feedback on their plant status.",
				featureImage: "https://i.imgur.com/IRY2GDM.png",
				githubLink: "https://github.com/oceansam/SmartPot",
				devpostLink: "https://devpost.com/software/smartpot-f149eq",
				techStack: "TS/VUE/SASS",
			},
		];
		const skillsInfo = [
			{
				name: "Javascript",
				imgUrl: "assets/skills/js.svg",
			},
			{
				name: "Typescript",
				imgUrl: "assets/skills/ts.svg",
			},
			{
				name: "Vue.js",
				imgUrl: "assets/skills/vue.svg",
			},
			{
				name: "HTML5",
				imgUrl: "assets/skills/html.svg",
			},
			{
				name: "Python",
				imgUrl: "assets/skills/py.svg",
			},
			{
				name: "Java",
				imgUrl: "assets/skills/java.svg",
			},
			{
				name: "MySql",
				imgUrl: "assets/skills/sql.svg",
			},
		];
		return {
			meta,
			greetingInfo,
			aboutInfo,
			aspirationInfo,
			projectsInfo,
			skillsInfo,
		};
	},
});
</script>
