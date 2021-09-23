const { reset } = require('nodemon');
const db = require('../models/model');
const QRCode = require('qrcode');

async function register(req, res) {
  try {
    const body = req.body;
    const user = await db.User.create(body);
    const qrCode = await generateQR(`http://localhost/${user.id}`);
    user.setDataValue('qrcode', JSON.stringify(qrCode));
    res.json(user)
    res.status = 201;
  } catch (err) {
    res.body = err;
    res.status = 500;
  };
}

async function login(req, res) {
  try {
    const userObject = await db.User.findOne({ email: req.body.email })
    console.log(userObject)
    userObject ? res.json(userObject) : 'entry not found'
  } catch (err) {
    res.body = err;
    res.status = 500;
  }
}

async function getAll(req, res) {
  try {
    res.send(await db.User.findAll());
    res.status = 200;
  } catch (err) {
    res.body = err;
    res.status = 500;
  }
}

async function generateQR(url) {
  try {
    return await QRCode.toDataURL(url)
  } catch (err) {
    console.log(err)
  }
}



module.exports = { register, getAll, login };