const { Sequelize, DataTypes, HasOne } = require("sequelize");
const sequelize = "../db/connection.js";
import Statistic from "./Statistic";
import Team from "./Team";

const Game = sequelize.define(
  "Game",
  {
    game_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    team_1: {
      type: DataTypes.UUID,
    },
    team_2: {
      type: DataTypes.UUID,
    },
    statistics: {
      type: DataTypes.UUID,
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

Game.HasMany(Team, { foreignKey: "team_ids", sourceKey: "team_id" });
Game.HasMany(Statistic,{ foreignKey: "statistics", sourceKey: "statistic_id"});

export default Game;