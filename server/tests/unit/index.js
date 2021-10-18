const config = require('../../src/config/config')
const chai = require('chai')
chai.use(require('chai-http'))

module.exports = (app) => {
  describe('Unit Tests (Poll)', function () {
    before(async () => {
      global.server = await app()
    })

    it('should create a poll', (done) => {
      chai.request(global.server)
        .post('/poll')
        .send({
          question: 'Should criminals be sentenced to death?',
          options: [
            {
              type: 'radio',
              label: 'Yes',
							value: 'yes'
            },
            {
              type: 'radio',
              label: 'No',
							value: 'no'
            },
            {
              type: 'radio',
              label: 'It depends on the crime committed',
							value: 'depends'
            },
            {
              type: 'radio',
              label: 'Maybe',
							value: 'maybe'
            }
          ]
        })
        .end((err, res) => {
          if (err) {
            console.log(err)
            done()
          } else {
            chai.assert.equal(res.status, 201)
            chai.assert.equal(res.body.message, config.message.success.POLL_CREATED)
            done()
          }
        })
    })

    it('should retrieve poll (s)', function (done) {
      chai.request(global.server)
        .get('/poll')
        .end((err, res) => {
          if (err) {
            console.log(err)
            done()
          } else {
            chai.assert.typeOf(res.body, 'Array')
						chai.assert.notEqual(res.body.length, 0)
						console.log(res.body)
            chai.request(global.server)
              .get('/poll/' + res.body[0]._id)
              .end((err, res) => {
                if (err) {
                  console.log(err)
                  done()
                } else {
                  chai.assert.typeOf(res.body, 'Object')
                  done()
                }
              })
          }
        })
    })

    it('should update a poll', function (done) {
      chai.request(global.server)
        .get('/poll')
        .end((err, res) => {
          if (err) {
            console.log(err)
            done()
          } else {
            chai.assert.typeOf(res.body, 'Array')
            console.log(res.body)
            chai.request(global.server)
              .put('/poll/' + res.body[0]._id)
              .send({ question: "What is today's date?" })
              .end((err, res) => {
                if (err) {
                  console.log(err)
                  done()
                } else {
                  chai.assert.equal(res.status, 200)
                  console.log(res.body)
                  done()
                }
              })
          }
        })
    })

    it('should delete polls', function (done) {
      this.timeout(60000)
      chai.request(global.server)
        .get('/poll')
        .end((err, res) => {
          if (err) {
            console.log(err)
            done()
          } else {
            chai.assert.typeOf(res.body, 'Array')

            for (let i = 0; i < res.body.length; i++) {
              const poll = res.body[i]
              chai.request(global.server)
                .delete('/poll/' + poll._id)
                .end((err, r) => {
                  if (err) { console.log(err) } else {
                    chai.assert.equal(r.status, 200)
                    if (i == (res.body.length - 1)) {
                      done()
                    }
                  }
                })
            }
          }
        })
    })
  })
}
