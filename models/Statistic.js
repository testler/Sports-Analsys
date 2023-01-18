const { Sequelize, DataTypes } = require("sequelize");
const sequelize = "../db/connection.js";

const Statistic = sequelize.define(
  "Statistic",
  {
    statistic_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    battling_average: {
      type: DataTypes.FLOAT,
    },
    plate_appearances: {
      type: DataTypes.INTEGER,
    },
    at_bats: {
      type: DataTypes.INTEGER,
    },
    hits: {
      type: DataTypes.INTEGER,
    },
    runs_batted_in: {
      type: DataTypes.INTEGER,
    },
    doubles: {
      type: DataTypes.INTEGER,
    },
    triples: {
      type: DataTypes.INTEGER,
    },
    home_runs: {
      type: DataTypes.INTEGER,
    },
    player_id: {
      type: DataTypes.INTEGER,
    },
    game_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);
