import Game from "./Game";
import Player from "./Player";

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = "../db/connection.js";

const Team = sequelize.define(
  "Team",
  {
    team_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    school_name: {
      type: DataTypes.STRING,
    },
    school_mascot: {
      type: DataTypes.STRING,
    },
    coach: {
      type: DataTypes.STRING,
    },
    game_ids: {
      type: DataTypes.UUID,
    },
    player_ids: {
      type: DataTypes.UUID,
    },
  },
  {
    freezeTableName: true,
  }
);

Team.game_ids.hasMany(Game);
Team.player_ids.hasMany(Player);

export default Team;
