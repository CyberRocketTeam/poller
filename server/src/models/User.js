const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const saltFactor = 8

  if (!user.changed('PASSWORD')) { return }

  return bcrypt
    .genSaltAsync(saltFactor)
    .then(salt => bcrypt.hashAsync(user.PASSWORD, salt, null))
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
    }
  },
  {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.PASSWORD)
  }

  return User
}
