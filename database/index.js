var knex = require("knex")({
  client: "pg",
  debug: false,
  asyncStackTraces: false,
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "poosan",
    database: "ticket"
  },
  searchPath: ["public"],
  pool: {
    min: 1,
    max: 20
  },
  acquireConnectionTimeout: 10000,
  log: {
    warn(message) {
      console.warn(message);
    },
    error(message) {
      console.error(message);
    },
    deprecate(message) {
      console.deprecate(message);
    },
    debug(message) {
      console.debug(message);
    }
  },
  migrations: {
    tableName: 'migrations'
  }
});

module.exports = knex;
