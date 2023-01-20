const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const teamSchema = sequelize.define(
  "Team",
  {
    team_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    school_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    school_mascot: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    coach: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "Team",
  }
);

const Team = sequelize.model("Team", teamSchema);


module.exports = Team;
