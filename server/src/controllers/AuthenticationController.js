const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function generateUserToken (user) {
  const expiryDate = 60 * 60 * 24 * 7 // one week
  return jwt.sign({
    username: user.USERNAME
  }, config.authentication.jwtSecret, {
    expiresIn: expiryDate
  })
}

module.exports = {
  async register (req, res) {
    try {
      await User.create(req.body)
      res.send({
        message: 'account created!'
      })
    } catch (err) {
      res.status(400).send({
        error: 'the email or username is already in use'
      })
    }
  },
  async login (req, res) {
    try {
      const { usernameEmail, password } = req.body
      let user = await User.findOne({
        where: {
          EMAIL: usernameEmail
        }
      })

      if (!user) {
        user = await User.findOne({
          where: {
            USERNAME: usernameEmail
          }
        })
      }

      if (!user) {
        return res.status(404).send({
          error: 'username/email or password is incorrect'
        })
      }

      if (!await user.comparePassword(password)) {
        return res.status(404).send({
          error: 'username/email or password is incorrect'
        })
      }

      res.send({
        message: 'login successful!',
        token: generateUserToken(user)
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error occurred while trying to login'
      })
    }
  }
}
