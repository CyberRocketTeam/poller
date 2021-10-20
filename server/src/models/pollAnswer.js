const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  dateCreated: {
    type: Date,
    required: true
  },
  pollId: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  answers: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('PollAnswer', schema)
