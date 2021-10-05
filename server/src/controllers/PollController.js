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
				res.status(500).send({"message": "internal server error"})
			})
	},
	retrieve (req, res) {
		Poll.find()
			.then(docs => res.status(200).send(docs))
			.catch(err => {
				console.log(err)
				res.status(500).send()
			})
	},
	update (req, res) {
		res.status(500).send()
	},
	remove (req, res) {
		res.status(500).send()
	}
}
