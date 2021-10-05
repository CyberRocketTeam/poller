let mongoose = require("mongoose")

module.exports = mongoose.model("Poll", new mongoose.Schema({
	question: String,
	options: Array
}))

