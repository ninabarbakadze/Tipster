const User = require('../models/users.model.js');
const db = require('../models/model')

const artistName = 'Asec';
const email = 'hello.asec@gmail.com';
const password = 'hello';
const photo = 'dksj9393h';

const populate = async () => {
  try {
    const mockUser = {};
    // const user = await res.json();
    mockUser.name = artistName;
    mockUser.email = email;
    mockUser.password = password;
    mockUser.photo = photo;
    await db.User.create(mockUser);
  } catch (e) {
    console.log(e);
  }
};

setTimeout(() => populate(), 3000);