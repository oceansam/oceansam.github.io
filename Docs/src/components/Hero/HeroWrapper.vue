<template>
	<div class="wrapper">
		<div class="cloud-wrapper">
			<q-img :src="'assets/Cloud1.svg'" class="cloud" id="Cloud1" />
			<q-img :src="'assets/Cloud2.svg'" class="cloud" id="Cloud2" />
			<q-img :src="'assets/Cloud3.svg'" class="cloud" id="Cloud3" />
			<q-img :src="'assets/Cloud4.svg'" class="cloud" id="Cloud4" />
			<q-img :src="'assets/Cloud1.svg'" class="cloud" id="Cloud5" />
			<q-img :src="'assets/Cloud3.svg'" class="cloud" id="Cloud6" />
			<q-img :src="'assets/Cloud4.svg'" class="cloud" id="Cloud7" />
		</div>
		<div class="greeting sky">
			<div class="row justify-center p-top-lg">
				<h1 class="title">{{ title }}<span class="blinker">|</span></h1>
			</div>
			<div class="row justify-center q-gutter-xl sky p-bot-lg">
				<a class="icon" :href="info.githubLink">
					<q-icon color="white" name="fab fa-github" size="4rem">
						<q-tooltip
							transition-show="scale"
							class="tool-tip"
							transition-hide="scale"
							>Github</q-tooltip
						>
					</q-icon>
				</a>

				<a class="icon" :href="info.resumeLink">
					<q-icon color="white" name="far fa-file" size="4rem">
						<q-tooltip
							transition-show="scale"
							class="tool-tip"
							transition-hide="scale"
							>Resume</q-tooltip
						>
					</q-icon>
				</a>
				<a class="icon" :href="info.linkedinLink">
					<q-icon color="white" name="fab fa-linkedin" size="4rem">
						<q-tooltip
							transition-show="scale"
							class="tool-tip"
							transition-hide="scale"
							>Linkedin</q-tooltip
						>
					</q-icon>
				</a>
			</div>
			<div class="row justify-center">
				<q-icon
					:to="{ hash: `#greeting` }"
					class="icon"
					color="white"
					name="expand_more"
					size="3rem"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from "vue";
import { MainLinks } from "@/models/BoxInfo";
export default defineComponent({
	name: "HeroWrapper",
	props: {
		info: Object as PropType<MainLinks>,
	},
	setup() {
		const title = ref("");
		const fullTitle = "Hi I'm Sam";

		const titleRef = fullTitle.split("");
		var num = 0;

		onMounted(() => {
			if (title.value != fullTitle) {
				var interval = setInterval(function() {
					title.value += titleRef[num];
					num += 1;
					if (num == titleRef.length) {
						clearInterval(interval);
					}
				}, 150);
			}
		});
		return {
			title,
		};
	},
});
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.title {
	color: white;
	z-index: 1;
}
.greeting {
	height: 630px;
}
.sky {
	background-color: $background;
}
.blinker {
	@keyframes blink {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}
	animation: blink 0.5s;
	animation-iteration-count: infinite;
}
.cloud-wrapper {
	position: absolute;
	height: 100%;
	width: 100%;
	overflow: hidden;
	.cloud {
		position: absolute;
		z-index: 0;
		width: 500px;
	}
	#Cloud1 {
		animation: Cloud1 120s linear infinite;
	}

	#Cloud2 {
		margin-left: 40%;
		margin-top: 18%;
		animation: Cloud1 80s linear infinite;
	}

	#Cloud3 {
		margin-left: 25%;
		margin-top: -5%;
		animation: Cloud1 120s linear infinite;
	}
	#Cloud4 {
		margin-left: 65%;
		margin-top: 5%;
		animation: Cloud1 120s linear infinite;
	}
	#Cloud5 {
		margin-top: 20%;
		margin-left: 80%;
		animation: Cloud1 120s linear infinite;
	}
	#Cloud6 {
		margin-top: 2%;
		animation: Cloud1 80s linear infinite;
	}
	#Cloud7 {
		margin-top: 13%;
		margin-left: 5%;
		animation: Cloud1 60s linear infinite;
	}
	@keyframes Cloud1 {
		0% {
			opacity: 0;
		}
		10% {
			opacity: 1;
		}

		100% {
			transform: translateX(100%);
			// opacity: 0;
		}
	}
}
</style>
