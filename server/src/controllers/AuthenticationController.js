const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function generateUserToken (user) {
  const expiryDate = 60 * 60 * 24 * 7 // one week
  return jwt.sign({
    user: {
      id: user.ID,
      username: user.USERNAME
    }
  }, config.authentication.jwtSecret, {
    expiresIn: expiryDate
  })
}

module.exports = {
  async register (req, res) {
    try {
      await User.create({
        USERNAME: req.body.username,
        PASSWORD: req.body.password,
        EMAIL: req.body.email
      })
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
        return res.status(400).send({
          error: 'username/email or password is incorrect'
        })
      }

      const isValid = await user.comparePassword(password)
      if (!isValid) {
        return res.status(400).send({
          error: 'username/email or password is incorrect'
        })
      }

      res.send({
        message: 'login successful!',
        token: generateUserToken(user)
      })
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error occurred while trying to login'
      })
    }
  }
}
