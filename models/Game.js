const { Sequelize, DataTypes } = require("sequelize");
const sequelize = "../db/connection.js";

const User = sequelize.define(
  "Game",
  {
    game_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    team_1: {
      type: DataTypes.ARRAY,
    },
    team_2: {
      type: DataTypes.ARRAY,
    },
    statistics: {
      type: DataTypes.ARRAY,
    },
    game_date: {
      type: DataTypes.DATE,
    },
    location: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
