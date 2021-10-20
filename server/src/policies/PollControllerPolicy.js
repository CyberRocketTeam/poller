const config = require('../config/config')
const Joi = require('joi')
const Poll = require('../models/poll')

const schema = Joi.object({
  question: Joi.string().required(),
  options: Joi.array().required().items(Joi.object().keys({
    type: Joi.string().required(),
    label: Joi.string().required(),
    value: Joi.string().required(),
    group: Joi.string()
  }).custom((obj, helper) => {
    switch (obj.type) {
      case 'radio':
        if (!obj.group) {
          throw new Error(config.message.error.GROUP_UNSPECIFIED)
        }
        break
      default:
        throw new Error(config.message.error.INVALID_OPTION_TYPE)
    }

    return obj
  }))
})

module.exports = {
  schema: schema,
  create (req, res, next) {
    const { error } = schema.validate(req.body)

    if (error) {
      return res.status(400)
        .send({
          error: error
        })
    }

    res.locals.poll = {
      creator: '',
      question: req.body.question,
      options: req.body.options
    }

    return next()
  },
  retrieve (req, res, next) {
    if (req.params.poll_id) {
      Poll.find({
        _id: req.params.poll_id
      })
        .limit(1)
        .exec()
        .then(docs => {
          if (docs.length > 0) {
            res.locals.poll = docs[0]
            return next()
          }

          res.status(404)
            .send({ error: config.message.status_code['404'] })
        })
        .catch(err => {
          console.log(err)
          res.status(500).send({ error: config.message.status_code['500'] })
        })
    } else {
      return res.status(400).send({ error: config.message.error.INVALID_PAYLOAD })
    }
  },
  update (req, res, next) {
    if (req.params.poll_id) {
      const { error } = schema.validate(req.body)

      if (error) {
        return res.status(400)
          .send({
            error: error
          })
      }

      res.locals.poll = {
        creator: 'testUser',
        question: req.body.question,
        options: req.body.options
      }

      return next()
    }

    return res.status(400)
      .send({
        error: config.message.error.INVALID_PAYLOAD
      })
  },
  remove (req, res, next) {
    if (req.params.poll_id) {
      return next()
    }

    return res.status(400)
      .send({
        error: config.message.error.INVALID_PAYLOAD
      })
  }
}
