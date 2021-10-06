const sgMail = require("@sendgrid/mail");
require("dotenv").config(); 
exports.handler = async (event) => {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	if (event.httpMethod == "POST") {
		const msg = event.req.body;
		sgMail
			.send(msg)
			.then(() => {
				res.sendStatus(200);
			})
			.catch((error) => {
				console.error(error);
			});
	}
};
