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
			<div v-if="error" class="warning-alert row">
				<div class="col-2">
					<q-icon
						class="warning-icon"
						name="warning"
						style="font-size: 4rem;"
					/>
				</div>
				<div class="col-10">
					{{ error }}
				</div>
			</div>
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
				<q-btn class="submit-button q-mt-md" type="submit" :loading="isLoading"
					><div class="txt-md" v-if="!isSent">Send</div>
					<q-icon border name="task_alt" v-if="isSent"></q-icon>
				</q-btn>
			</q-form>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { setFormLimit, readFormLimit } from "@/utils/SpamDetection";
import axios from "axios";
export default defineComponent({
	setup() {
		// Sendgrid metadata
		const name = ref("");
		const email = ref("");
		const message = ref("");
		const verifiedSender = "s2chowdhury@ryerson.ca";
		const error = ref("");
		const isSent = ref(false);
		const isLoading = ref(false);

		function reset() {
			name.value = "";
			email.value = "";
			message.value = "";
		}
		// Notifies the user that the email has been sent
		function notifyEmail() {
			isSent.value = true;
			setTimeout(() => (isSent.value = false), 2500);
		}
		async function sendEmail() {
			isLoading.value = true;
			const msg = {
				to: "oceansam101@gmail.com",
				from: verifiedSender,
				subject: `${name.value} Has Contacted You!`,
				text: `Message from: ${email.value}.\n${message.value}`,
			};
			const status = readFormLimit();
			if (status.value == undefined) {
				axios
					.post("/api/EmailHandler", msg)
					.then((res) => {
						if (res) {
							error.value = "";
							setFormLimit();
							reset();
							notifyEmail();
						}
						isLoading.value = false;
					})
					.catch((err: Error) => {
						console.log(err);
						isLoading.value = false;
						error.value =
							"Oops Something went wrong, Please contact me at oceansam101@gmail.com instead";
					});
			} else {
				isLoading.value = false;
				error.value =
					"Submissions are limited to prevent spam. Please try again later or contact me directly at oceansam101@gmail.com";
			}
		}
		return {
			name,
			email,
			message,
			error,
			isLoading,
			isSent,
			// Functions
			sendEmail,
			reset,
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
.warning-alert {
	border: 2px solid $background;
	padding: 10px;
	.warning-icon {
		color: $background;
	}
}
</style>
