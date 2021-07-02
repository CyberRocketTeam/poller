const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bluebird-nodejs'))

function hashPassword (user, password) {
  const saltFactor = 8
  
  if (!user.changed('PASSWORD'))
    return

  return bcrypt
    .genSaltAsync(saltFactor)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => user.setDataValue('PASSWORD', hash))
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    USERNAME: {
      type: DataTypes.STRING,
      unique: true
    },
    PASSWORD: DataTypes.STRING,
    EMAIL: {
      type: DataTypes.STRING,
      unique: true
    },
  },
  {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })


  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  return User
}