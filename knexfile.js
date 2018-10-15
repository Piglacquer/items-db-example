// Update with your config settings.

module.exports = {

  development: {
    client:'pg',
    connection: 'postgresql:///items_server'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
