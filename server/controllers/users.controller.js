const db = require('../models/model');
const QRCode = require('qrcode');

async function register (req, res) {
  try {
    const body = req.body;
    const user = await db.User.create(body);
    const qrCode = await generateQR(`http://localhost/tip/${user.id}`);
    await user.update({ qrcode: qrCode });
    res.json(user);
    res.status = 201;
  } catch (err) {
    res.status(500);
    res.send({ err: err });
  };
};

async function login (req, res) {
  try {
    const userObject = await db.User.findOne({
      where: {
        email: req.body.email
      }
    });
    userObject ? res.json(userObject) : 'entry not found';
  } catch (err) {
    res.status(500);
    res.send({ err: err });
  };
};

async function getAll (req, res) {
  try {
    res.send(await db.User.findAll());
    res.status = 200;
  } catch (err) {
    res.status(500);
    res.send({ err: err });
  };
};

async function getById (req, res) {
  try {
    const id = req.params;
    const user = await db.User.findOne({
      where: {
        id: id.id
      }
    });
    res.send(user);
  } catch (err) {
    res.status(500);
    res.send({ err: err });
  };
};

async function generateQR (url) {
  try {
    return await QRCode.toDataURL(url);
  } catch (err) {
    res.status(500);
    res.send({ err: err });
  };
};

module.exports = { register, getAll, login, getById };
