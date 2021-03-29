// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DP_PASSWORD,
    },
    migrations: {
      directory: "./db/migrations",
    },
  },
};
