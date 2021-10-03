const express = require("express");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const router = express.Router();

router.post("/", async (req, res) => {
	res.status(200).send();
	// console.log("POST SUCCESSFUL");
	// const msg = req.body;
	// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	// console.log("we in");
	// sgMail
	// 	.send(msg)
	// 	.then((res) => {
	// 		console.log("sent!");
	// 		return res.json();
	// 	})
	// 	.catch((err) => res.send(err));
});
router.get("/", async (req, res) => {
	res.send("Hello");
});
module.exports = router;
