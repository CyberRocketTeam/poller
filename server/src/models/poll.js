const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  question: {
		type: String,
		required: true
	},
  options: {
		type: Array,
		required: true
	}
})

module.exports = mongoose.model('Poll', schema)
