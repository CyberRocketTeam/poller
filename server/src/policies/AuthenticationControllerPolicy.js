const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      username: Joi.string().regex(
        /^[a-zA-Z1-9]{5,20}$/
      ),
      email: Joi.string(),
      password: Joi.string().regex(
        /^[a-zA-Z0-9]{8,32}$/
      )
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: 'invalid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'invalid email address'
          })
          break
        case 'email':
          res.status(400).send({
            error: 'invalid email address'
          })
          break
        default:
          res.status(400).send({
            error: 'invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
