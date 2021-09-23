const router = require('express').Router();
const { register, getAll, login } = require('./controllers/users.controller')

router.post('/register', register);
router.get('/all', getAll);
router.post('/login', login);
module.exports = router;