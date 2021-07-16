const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// const { sequelize } = require('./src/models')
const config = require('./src/config/config');
const mongoose = require('mongoose');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// require('./src/routes')(app)

// sequelize.sync()
//   .then(() => {
//     app.listen(config.port)
//     console.log(`Server started on port ${config.port}`)
//   })

// make a db connection to mongodb, only listen to port when connections are established;
mongoose.connect(config.db.connection_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(config.port, () => console.log(`Server running on port ${config.port}...\nSuccessfully connected to DB`)))
  .catch(err => console.log(err.message));
mongoose.set('useFindAndModify', false);

// check route function
app.get('/', (req, res) => {
  res.send('Welcome to poller');
});