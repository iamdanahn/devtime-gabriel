// mongoose is our ODM to let us interact with our data
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = Schema(
	{
		name: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		isAnswered: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);
// 1st arg = parameters for Schema

module.exports = Question = mongoose.model("Question", QuestionSchema);
