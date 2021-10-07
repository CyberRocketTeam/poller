<<<<<<< HEAD
const config = require("../config/config")
const Poll = require("../models/poll")

module.exports = {
	create (req, res) {
		new Poll(req.body)
			.save()
			.then(doc => {
				res.status(201).send({"message": config.message.success.POLL_CREATED})
			})
			.catch(err => {
				console.log(err)
				res.status(500).send({"message": config.message.status_code["500"]})
			})
	},
	retrieve (req, res) {
		Poll.find({
			id: req.params.poll_id
		})
			.limit(1)
			.exec()
			.then(docs => {
				if (docs.length > 0)
					res.status(200).send(docs[0])
				else
					res.status(404).send({message: config.message.status_code["404"]})
			})
			.catch(err => {
				console.log(err)
				res.status(500).send({message: config.message.status_code["500"]})
			})
	},
	retrieveAll (req, res) {
		Poll.find()
			.then(docs => res.status(200).send(docs))
			.catch(err => {
				console.log(err)
				res.status(500).send({message: config.message.status_code["500"]})
			})
	},
	update (req, res) {
		Poll.findOneAndUpdate({
			_id: req.params.poll_id
		},
		req.body)
			.then(docs => res.status(200).send(docs))
			.catch(err => {
				console.log(err)
				res.status(500).send({message: config.message.status_code["500"]})
			})
	},
	remove (req, res) {
		Poll.findOneAndRemove({
			_id: req.params.poll_id
		})
			.then(docs => res.status(200).send({message: config.message.success.POLL_DELETED}))
			.catch(err => {
				console.log(err)
				res.status(500).send({message: config.message.status_code["500"]})
			})
	}
=======
const { Poll } = require('../models')

module.exports = {
  async create (req, res) {
    try {
      await Poll.create({
        QUESTION: req.body.QUESTION,
        CREATOR: req.body.token.user.id,
        IS_PUBLIC: req.body.IS_PUBLIC,
        EXPIRY_DATE: req.body.EXPIRY_DATE,
        PARITICIPANT_LIMIT: req.body.PARITICIPANT_LIMIT,
        DATE_CREATED: req.body.DATE_CREATED
      })
      // implementation of flat-file db
      // creating poll record
      res.send({
        message: 'poll created!'
      })
    } catch (err) {
      res.status(500).send({
        error: 'sorry, an erorr occurred!'
      })
    }
  },
  async retrieve (req, res) {
    try {
      const poll = await Poll.findOne({
        where: {
          id: req.param.ID
        }
      })
      if (!poll) {
        return res.status(404).send({
          error: 'poll is inexistent'
        })
      }
      res.send(poll)
    } catch (err) {
      res.status(500).send({
        error: 'sorry, an error occurred'
      })
    }
  },
  async update (req, res) {
    try {
      await Poll.update({
        QUESTION: req.body.QUESTION,
        CREATOR: req.body.token.user.id,
        IS_PUBLIC: req.body.IS_PUBLIC,
        EXPIRY_DATE: req.body.EXPIRY_DATE,
        PARITICIPANT_LIMIT: req.body.PARITICIPANT_LIMIT,
        DATE_CREATED: req.body.DATE_CREATED
      },
      {
        where: {
          ID: req.param.id
        }
      })
      // implementation of flat file db
      // updating poll record
      res.send({
        message: 'poll updated'
      })
    } catch (err) {
      res.status(500).send({
        error: 'sorry, an error occurred'
      })
    }
  },
  async delete (req, res) {
    return res.status(500).send({
      error: 'not implemented yet'
    })
  }
>>>>>>> 5d6e658af4becf04ee54ae01ea160e7d9db0dcaa
}
