const knex = require('knex')
const configurations = require('../knexfile')
const environment = process.env.NODE_ENV || "development" //check .env file

module.exports = knex(configurations[environment])