const mongoose = require('mongoose')

module.exports = mongoose.model('PollAnswer', new mongoose.Schema({
  dateCreated: Date,
  pollId: String,
  user: String,
  answers: Array
}))
