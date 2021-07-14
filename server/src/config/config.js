module.exports = {
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'EOIqqF8KIl1bBrfBz9GZ6iw8M'
  },
  db: {
    database: process.env.DB_NAME || 'poller',
    user: process.env.DB_USER || 'poller',
    password: process.env.DB_PASS || 'GleNiaweJujAacpBLpwuK4D8N',
    connection_uri : "mongodb+srv://PollerAdmin:5QgIpdNxAbOPCCAT@poller.ijegt.mongodb.net/poller?retryWrites=true&w=majority",
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './poller.sqlite3'
    }
  },
  port: process.env.PORT || 8080
}
