require("dotenv").config()

module.exports = {
  development: {
    client: "pg",
    connection: {
        host: "k2mpg.ddns.net",
        user: "sa",
        password: "1/sasql64",
        database: "crmapm",
    },
    //migrations: {
     // directory: "./db/migrations",
    //}
  }
};