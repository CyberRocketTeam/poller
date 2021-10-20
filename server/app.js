const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./src/config/config')
const mongoose = require('mongoose')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./src/routes')(app)

module.exports = async () => {
  await mongoose.connect(config.db.connection_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  mongoose.set('useFindAndModify', false)
  try {
    await app.listen(config.port)
    console.log(`Server running on port ${config.port}...\nSuccessfully connected to DB`)
    return app
  } catch (err) {
    console.log('An error occurred!')
    console.log(err)
    process.exit()
  }
}
