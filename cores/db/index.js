const knex = require("knex");
const knexFile = require("../config/pg");

const environment = process.env.NODE_ENV || "development";

module.exports = knex(knexFile[environment]);
