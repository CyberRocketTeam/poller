const Joi = require('joi')
const { User } = require('../models')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      username: Joi.string().regex(
        /^[a-zA-Z1-9]{5,20}$/
      ).required(),
      email: Joi.string().required().email(),
      password: Joi.string().regex(
        /^[a-zA-Z0-9]{8,32}$/
      ).required()
    })

    const { error } = schema.validate(req.body)

    if (error) {
      const details = []
      for (const detail of error.details) {
        details.push({
          message: detail.message,
          key: detail.context.key
        })
      }
      return res.status(400).send({
        error: details
      })
    }
    next()
  },
  async verify (req, res, next) {
    const user = await User.findOne({
      where: {
        USERNAME: req.body.user.username
      }
    })

    if (!user) {
      res.status(500).send({
        error: 'sorry, an error occurred'
      })
      return
    }

    next()
  }
}
