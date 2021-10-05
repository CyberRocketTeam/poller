const app = require("../../app")
const config = require("../../src/config/config")
const chai = require("chai")
chai.use(require("chai-http"))

module.exports = (app) => {
	suite("Unit tests", function () {
		suite("Poll", function () {
			test("Creation", function (done) {
				chai.request(app)
					.post("/poll")
					.send({
						question: "Should criminals be sentenced to death?",
						options: [
							{
								type: "radio",
								text: "Yes"
							},
							{
								type: "radio",
								text: "No"
							},
							{
								type: "radio",
								text: "It depends on the crime committed"
							},
							{
								type: "radio",
								text: "Maybe"
							}
						]
					})
					.end((err, res) => {
						if (err) {
							console.log(err)
							done()
						}
						else {
							chai.assert.equal(res.status, 201)
							chai.assert.equal(res.body.message, config.message.success.POLL_CREATED)
							done()
						}
					})
			})

			test("Retrival", function (done) {
				chai.request(app)
					.get("/poll")
					.end((err, res) => {
						if (err) {
							console.log(err)
							done()
						}
						else {
							chai.assert.typeOf(res.body, "Array")
							done()
						}
					})
			})
		})
	})
}
