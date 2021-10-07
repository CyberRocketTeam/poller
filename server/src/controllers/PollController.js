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
}
