// Update with your config settings.

module.exports = {

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  development: {
    client: 'postgresql',
    connection: {
      database: 'ticket',
      user:     'postgres',
      password: 'poosan'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
