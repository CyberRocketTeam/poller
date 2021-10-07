// const AuthenticationController = require('./controllers/AuthenticationController.js')
// const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')
const PollController = require('./controllers/PollController.js')
const PollControllerPolicy = require('./policies/PollControllerPolicy.js')

module.exports = (app) => {
  // app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
  // app.post('/login', AuthenticationController.login)

	app.post('/poll', PollControllerPolicy.create, PollController.create)
	app.get('/poll', PollController.retrieveAll)
	app.get('/poll/:poll_id', PollControllerPolicy.retrieve, PollController.retrieve)
	app.put('/poll/:poll_id', PollControllerPolicy.update, PollController.update)
	app.delete('/poll/:poll_id', PollControllerPolicy.remove, PollController.remove)
}
