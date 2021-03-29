const { Model } = require("objection");
// const connection = require("../../db");
const tableNames = require("../../constants/tableNames");
const schema = require("./users.schema.json");

// Model.knex(connection);

class User extends Model {
  static get tableName() {
    return tableNames.user;
  }

  static get jsonSchema() {
    return schema;
  }
}

module.exports = User;
