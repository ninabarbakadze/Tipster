const express = require("express")
const app = express()
const cors = require("cors")
const router = require('./router')
const db = require('./models/model')
app.use(express.json());
app.use(cors());
app.use(router);

const populateUser = require('./mock-data/populateUser');

(async function bootstrap() {
  await db.sequelize.sync();
  app.listen(4000);
})();

