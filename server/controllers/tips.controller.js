const db = require('../models/model');

async function tip (req, res) {
  try {
    const body = req.body;
    const tip = await db.Tip.create(body);
    res.json(tip);
    res.status = 201;
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send({ err: err });
  }
}
  
async function getTips (req, res) {
  try {
    const userObject = await db.Tip.findOne({
      where: {
        UserId: req.body.UserId
      }
    });
    userObject ? res.json(userObject) : 'No tips yet';
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send({ err: err });
  }
}

module.exports = { tip, getTips };