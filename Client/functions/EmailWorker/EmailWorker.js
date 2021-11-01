const sgMail = require("@sendgrid/mail");
require("dotenv").config();
exports.handler = async (event) => {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	if (event.httpMethod == "POST") {
		const msg = JSON.parse(event.body);
		return sgMail
			.send(msg)
			.then((res) => {
				console.log("Email Sent");
				return {
					statusCode: 200,
					body: JSON.stringify(res),
				};
			})
			.catch((error) => {
				console.error("ERR:", error);
				return {
					statusCode: 500,
					body: JSON.stringify(error),
				};
			});
	}
	return {
		statusCode: 405,
		body: {},
	};
};
