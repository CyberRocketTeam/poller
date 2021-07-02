module.exports = {
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'EOIqqF8KIl1bBrfBz9GZ6iw8M'
  },
  db: {
    database: process.env.DB_NAME || 'poller',
    user: process.env.DB_USER || 'poller',
    password: process.env.DB_PASS || 'GleNiaweJujAacpBLpwuK4D8N',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './poller.sqlite3'
    }
  },
  port: process.env.PORT || 8000
}
