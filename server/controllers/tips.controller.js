const db = require('../models/model');

async function tip(req, res) {
  try {
    const body = req.body;
    const tip = await db.Tip.create(body);
    res.json(tip)
    res.status = 201;
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send({ err: err });
  };
}

module.exports = { tip }