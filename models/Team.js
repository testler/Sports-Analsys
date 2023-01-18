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
      type: DataTypes.ARRAY,
    },
    player_ids: {
      type: DataTypes.ARRAY,
    },
  },
  {
    freezeTableName: true,
  }
);
