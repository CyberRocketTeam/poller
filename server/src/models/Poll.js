module.exports = (sequelize, DataTypes) => {
  const Poll = sequelize.define('Poll', {
    QUESTION: DataTypes.TEXT,
    CREATOR: DataTypes.INTEGER,
    IS_PUBLIC: DataTypes.BOOLEAN,
    EXPIRY_DATE: DataTypes.DATE,
    PARTICIPANT_LIMIT: DataTypes.INTEGER,
    DATE_CREATED: DataTypes.DATE
  })

  return Poll
}
