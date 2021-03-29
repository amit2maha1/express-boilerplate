const Knex = require("knex");
const tableNames = require("../../src/constants/tableNames");
/**
  @param {Knex} knex
 */

exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.user, (table) => {
    table.increments().notNullable();
    table.string("email", 254).notNullable().unique();
    table.string("name").notNullable();
    table.string("password").notNullable();
    table.datetime("last_login");
    table.timestamps();
  });
};

exports.down = async (knex) => {
  await Promise.all(
    [tableNames.user].map((tableName) => knex.schema.dropTable(tableName))
  );
};
