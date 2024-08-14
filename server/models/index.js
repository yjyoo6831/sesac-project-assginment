'use strict';
// js의 strict 모드 활성화 
// - 잠재적인 오류를 방지하고 더 안전한 코드를 작성하도록 도와줌

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = require('./Todo')(sequelize,Sequelize);
// models/Todo.js 에서 정의한 model 이 db.Visitor에 들어간다. 
// db = {"sequelize": sequelize, "Sequelize" : Sequelize}

module.exports = db;
