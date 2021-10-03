const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
// Send grid
const contact = require("./route/contact");
// App setup
const app = express();
app.use(bodyParser);
app.use(cors);
router.get("/handle", (req, res) => {
	console.log("hello");
});
app.use("/", router);
// Contact form submission
app.use("/contact", contact);

const PORT = process.env.PORT || 7070;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
