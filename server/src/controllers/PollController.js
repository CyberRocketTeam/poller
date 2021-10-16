const config = require('../config/config')
const Poll = require('../models/poll')
const PollAnswer = require('../models/pollAnswer')

module.exports = {
  create (poll, req, res, next) {
		console.log("Poll:\n\n\n")
		console.log(JSON.stringify(poll))
    new Poll(poll)
      .save()
      .then(doc => {
				console.log(doc)
        res.status(201).send({ message: config.message.success.POLL_CREATED })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({ message: config.message.status_code['500'] })
      })
  },
  retrieve (poll_id, req, res, next) {
    Poll.find({
      id: poll_id
    })
      .limit(1)
      .exec()
      .then(docs => {
        if (docs.length > 0) { res.status(200).send(docs[0]) } else { res.status(404).send({ message: config.message.status_code['404'] }) }
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({ message: config.message.status_code['500'] })
      })
  },
  retrieveAll (req, res) {
    Poll.find()
      .then(docs => res.status(200).send(docs))
      .catch(err => {
        console.log(err)
        res.status(500).send({ message: config.message.status_code['500'] })
      })
  },
  update (poll, req, res, next) {
    Poll.findOneAndUpdate({
      _id: req.params.poll_id
    },
    poll)
      .then(docs => res.status(200).send(docs))
      .catch(err => {
        console.log(err)
        res.status(500).send({ message: config.message.status_code['500'] })
      })
  },
  remove (poll_id, req, res, next) {
    Poll.findOneAndRemove({
      _id: poll_id
    })
      .then(docs => res.status(200).send({ message: config.message.success.POLL_DELETED }))
      .catch(err => {
        console.log(err)
        res.status(500).send({ message: config.message.status_code['500'] })
      })
  },
  vote (poll, req, res, next) {
    const answers = req.body // perform validation checks later
    new PollAnswer({
      dateAnswered: new Date(),
      pollId: poll._id,
      user: '',
      answers: answers
    })
      .save()
      .then(docs => {
        res.status(201).send({ message: config.message.success.POLL_CREATED })
      })
      .catch(err => {
        res.status(500).send({ message: config.message.status_code['500'] })
      })
  }
}
