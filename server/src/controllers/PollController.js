const { Poll } = require('../models')

module.exports = {
  async create (req, res) {
    try {
      await Poll.create({
        QUESTION: req.body.QUESTION,
        CREATOR: req.body.token.user.id,
        IS_PUBLIC: req.body.IS_PUBLIC,
        EXPIRY_DATE: req.body.EXPIRY_DATE,
        PARITICIPANT_LIMIT: req.body.PARITICIPANT_LIMIT,
        DATE_CREATED: req.body.DATE_CREATED
      })
      // implementation of flat-file db
      // creating poll record
      res.send({
        message: 'poll created!'
      })
    } catch (err) {
      res.status(500).send({
        error: 'sorry, an erorr occurred!'
      })
    }
  },
  async retrieve (req, res) {
    try {
      const poll = await Poll.findOne({
        where: {
          id: req.param.ID
        }
      })
      if (!poll) {
        return res.status(404).send({
          error: 'poll is inexistent'
        })
      }
      res.send(poll)
    } catch (err) {
      res.status(500).send({
        error: 'sorry, an error occurred'
      })
    }
  },
  async update (req, res) {
    try {
      await Poll.update({
        QUESTION: req.body.QUESTION,
        CREATOR: req.body.token.user.id,
        IS_PUBLIC: req.body.IS_PUBLIC,
        EXPIRY_DATE: req.body.EXPIRY_DATE,
        PARITICIPANT_LIMIT: req.body.PARITICIPANT_LIMIT,
        DATE_CREATED: req.body.DATE_CREATED
      },
      {
        where: {
          ID: req.param.id
        }
      })
      // implementation of flat file db
      // updating poll record
      res.send({
        message: 'poll updated'
      })
    } catch (err) {
      res.status(500).send({
        error: 'sorry, an error occurred'
      })
    }
  },
  async delete (req, res) {
    return res.status(500).send({
      error: 'not implemented yet'
    })
  }
}
