const AuthenticationController = require('./controllers/AuthenticationController.js')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')
const PollController = require('./controllers/PollController.js')

module.exports = (app) => {
  app.post('/user/register', AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/user/login', AuthenticationController.login)

  app.post('/poll/create', PollController.create)
  app.get('/poll/:id', PollController.retrieve)
  app.put('/poll/:id', PollController.update)
  app.delete('/poll/:id', PollController.delete)
}
