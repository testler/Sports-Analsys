const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const playerSchema = sequelize.define(
  "Player",
  {
    player_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    class: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Player",
  }
);


const Player = sequelize.model("Player", playerSchema);

module.exports = Player;