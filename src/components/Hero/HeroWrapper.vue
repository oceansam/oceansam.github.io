<template>
	<div class="wrapper">
		<div class="greeting sky">
			<div class="row justify-center p-top-lg">
				<h1 class="title">{{ title }}<span class="blinker">|</span></h1>
			</div>
			<div class="row justify-center q-gutter-xl sky p-bot-lg">
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
<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.title {
	color: white;
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
</style>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
	name: "HeroWrapper",
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
					console.log("trigger");
				}, 150);
			}
			console.log("trigger2x");
		});
		return {
			title,
		};
	},
});
</script>
