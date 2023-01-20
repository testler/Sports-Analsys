const Statistic = require("../models/Statistic");

let index = (req, res) => {
  async function getStatistics() {
    await Statistic.findAll().then((data) => {
      res.json(data);
      console.log(data);
    });
  }
  getStatistics();
};
let create = (req, res) => {
  async function createStatistic() {
    Statistic.create(req.body).then((data) => {
      res.json(data);
    });
  }
  createStatistic();
};

module.exports = {
  index,
  create,
};
