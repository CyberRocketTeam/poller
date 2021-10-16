const Joi = require('joi')

module.exports = {
  create (req, res, next) {
    const schema = Joi.object({
      question: Joi.string().required(),
      options: Joi.array().required().items(Joi.object().custom((obj, helper) => {
        switch (obj.type) {
          case 'radio':
            if (obj.label.length == 0) { return helper.message(config.message.error.LABEL_UNSPECIFIED) }
            if (obj.value.length == 0) { return helper.message(config.message.error.VALUE_UNSPECIFIED) }
            return true
            break
          default:
            return helper.message(config.message.error.INVALID_OPTION_TYPE)
        }
      }))
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
			let poll = {
        creator: '',
        question: req.body.question,
        options: req.body.options
      }

			console.log(poll)
			console.log("\n\n\n\n\\nn\\n\n\n\n\n\n\n\n\n\n\n")
      next(poll)
    }
  },
  retrieve (req, res, next) {
    if (req.params.poll_id) {
      next(req.params.poll_id)
    } else {
      res.status(400).send({ message: config.message.error.INVALID_PAYLOAD })
    }
  },
  update (req, res, next) {
    if (req.params.poll_id) {
      this.create(req, res, next)
    } else {
      res.status(400).send({ message: config.message.error.INVALID_PAYLOAD })
    }
  },
  remove (req, res, next) {
    if (req.params.poll_id) {
      next(req.params.poll_id)
    } else {
      res.status(400).send({ message: config.message.error.INVALID_PAYLOAD })
    }
  }
}
