const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ligoAssement", process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: "127.0.0.1",
  port:3306,
  dialect: "mysql",
});


sequelize.authenticate()
.then(()=>{console.log("Connection has been established successfully.")})
.catch((err)=>{console.error("Unable to connect to the database:", err)});


module.exports = sequelize;