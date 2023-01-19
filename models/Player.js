import Statistic from "./Statistic";
import Team from "./Team";

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
    statistic_ids: {
      type: DataTypes.UUID,
    },
    team_id: {
      type: DataTypes.UUID,
    },
  },
  {
    freezeTableName: true,
  }
);

Player.hasMany(Statistic, { foreignKey: "statistic_ids", sourceKey: "statistic_id" });
Player.hasOne(Team, {foreignKey: "team_id", sourceKey: "team_id"});

export default Player;