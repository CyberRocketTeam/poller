// const AuthenticationController = require('./controllers/AuthenticationController.js')
// const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')
const PollController = require('./controllers/PollController.js')

module.exports = (app) => {
  // app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
  // app.post('/login', AuthenticationController.login)

	app.post('/poll', PollController.create)
	app.get('/poll', PollController.retrieve)
	app.put('/poll', PollController.update)
	app.delete('/poll', PollController.remove)
}
