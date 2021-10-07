const Joi = require('joi')

module.exports = {
  create (req, res, next) {
    const schema = Joi.object({
      question: Joi.string(),
			options: Joi.array().items(Joi.object())
    })

    const { error } = schema.validate(req.body)

    if (error) {
      switch (error.details[0].context.key) {
        case 'question':
          res.status(400).send({
            error: config.message.error.QUESTION_UNSPECIFIED
          })
          break
        case 'options':
          res.status(400).send({
            error: config.message.error.OPTIONS_UNSPECIFIED
          })
          break
        default:
          res.status(400).send({
            error: config.message.error.INVALID_PAYLOAD
          })
      }
    } else {
      next()
    }
	},
	retrieve (req, res, next) {
		if (req.params.poll_id) {
			next()
		}
		else {
			res.status(400).send({message: config.message.error.INVALID_PAYLOAD})
		}
	},
	update (req, res, next) {
		if (req.params.poll_id) {
			this.create(req, res, next)
		}
		else {
			res.status(400).send({message: config.message.error.INVALID_PAYLOAD})
		}
	},
	remove (req, res, next) {
		if (req.params.poll_id) {
			next()
		}
		else {
			res.status(400).send({message: config.message.error.INVALID_PAYLOAD})
		}
	}
}
