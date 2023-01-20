const sequelize = require("./connection");
const Game = require("../models/Game");
const Player = require('../models/Player');
const Statistic = require('../models/Statistic');
const Team = require('../models/Team');

Game.hasMany(Team, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Game.hasMany(Statistic, { onDelete: "CASCADE", onUpdate: "CASCADE" });

Player.belongsTo(Team, {onUpdate: "CASCADE", onDelete: "CASCADE"});
Player.hasMany(Statistic, {onUpdate: "CASCADE", onDelete: "CASCADE"});

Statistic.belongsTo(Player, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Statistic.belongsTo(Game, { onDelete: "CASCADE", onUpdate: "CASCADE" });

Team.hasMany(Player, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Team.belongsTo(Game, { onDelete: "CASCADE", onUpdate: "CASCADE"});

async function syncAll() {
    await Game.sync().catch(err => console.log(err));
    await Player.sync().catch(err => console.log(err));
    await Statistic.sync().catch(err => console.log(err));
    await Team.sync().catch(err => console.log(err));
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
}
syncAll();

module.exports = sequelize;