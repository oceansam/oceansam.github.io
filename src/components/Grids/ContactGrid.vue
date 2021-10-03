<template>
	<div class="row">
		<div class="col">
			<div class="txt-header text-bold">
				Contact Me!
			</div>
			<div class="txt-md q-mt-sm">
				I'd love to chat or perhaps discuss employment opportunities with you!
			</div>
		</div>
		<div class="col">
			<q-form @submit.prevent="sendEmail">
				<q-input
					class="q-mt-md"
					v-model="name"
					filled
					label="name"
					type="text"
				/>
				<q-input
					class="q-mt-md"
					v-model="email"
					filled
					label="email"
					type="email"
				/>
				<q-input
					class="q-mt-md"
					v-model="message"
					filled
					label="message"
					type="textarea"
				/>
				<q-btn class="submit-button q-mt-md" type="submit"
					><div class="txt-md">Send</div></q-btn
				>
			</q-form>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
export default defineComponent({
	setup() {
		const name = ref("");
		const email = ref("");
		const message = ref("");
		const verifiedSender = "s2chowdhury@ryerson.ca";
		async function sendEmail() {
			const url = "http://localhost:7070/contact";
			const msg = {
				to: "oceansam101@gmail.com",
				from: verifiedSender,
				subject: `${name.value} Has Contacted You!`,
				text: `Message from: ${email.value}.\n${message.value}`,
			};
			console.log("SendingFunc", msg);
			axios
				.post(url)
				.then((response) => {
					console.log("did it", response);
				})
				.catch((error: Error) => {
					console.log(error);
				});
		}
		return {
			name,
			email,
			message,

			// Functions
			sendEmail,
		};
	},
});
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.col {
	width: 500px !important;
}
.submit-button {
	width: 100%;
	background: $background;
	color: white;
}
</style>
