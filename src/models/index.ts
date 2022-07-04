const databaseConfig = require("../config/database_config.js");

const Sequelize = require("sequelize");

export interface Database {
    Sequelize: any;
    sequelize: any;
    students: any;
  }

  
const sequelizeInstance = new Sequelize(databaseConfig.DB, databaseConfig.USER, databaseConfig.PASSWORD, {
  host: databaseConfig.HOST,
  dialect: databaseConfig.dialect,
  // operatorsAliases: false,

  pool: {
    max: databaseConfig.pool.max,
    min: databaseConfig.pool.min,
    acquire: databaseConfig.pool.acquire,
    idle: databaseConfig.pool.idle
  }
});
const students = require("./student.ts");
const db : Database = {
    Sequelize : Sequelize,
    sequelize : sequelizeInstance,
    students : students(sequelizeInstance, Sequelize)
};

 db.students.sync({force: false});

module.exports = db;