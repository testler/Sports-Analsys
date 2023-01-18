const { Sequelize, DataTypes } = require("sequelize");
const sequelize = "../db/connection.js";

const Player = sequelize.define(
  "Player",
  {
    player_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: DataTypes.STRING,
    },
    class: {
      type: DataTypes.STRING,
    },
    static_ids: {
      type: DataTypes.ARRAY,
    },
    team_ids: {
      type: DataTypes.ARRAY,
    },
  },
  {
    freezeTableName: true,
  }
);
