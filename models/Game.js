const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const gameSchema = sequelize.define(
  "Game",
  {
    game_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    game_date: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Game",
  }
);

const Game = sequelize.model("Game", gameSchema);

module.exports = Game;