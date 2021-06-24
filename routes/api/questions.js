const express = require("express");
const router = express.Router();

const Question = require("../../models/question");

router.get("/", (req, res) => {
	Question.find()
		.then((questions) => res.json(questions))
		.catch((err) => res.status(404).json(err));
});

// only need to export 'router' as
// everything above is "attached" to the router object now
module.exports = router;
