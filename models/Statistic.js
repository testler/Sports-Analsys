const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const statisticShema = sequelize.define(
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
    runs:{
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
  },
  {
    tableName: "Statistic",
  }
);


const Statistic = sequelize.model("Statistic", statisticShema);


module.exports = Statistic;
