const express = require("express");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const router = express.Router();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// Post requests on /mongo
router.post("/", async (req, res) => {
	const msg = req.body;
	sgMail
		.send(msg)
		.then(() => {
			res.sendStatus(200);
		})
		.catch((error) => {
			console.error(error);
		});
});

// Get Requests on /mongo
router.get("/", async (req, res) => {
	res.send("Get Contact");
});

module.exports = router;
