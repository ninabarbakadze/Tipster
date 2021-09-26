const router = require('express').Router();
const { register, getAll, login, getById } = require('./controllers/users.controller');
const { payment, onboardUser, userRefresh } = require('./controllers/stripe.controller');
const { tip } = require('./controllers/tips.controller');

router.post('/register', register);
router.get('/all', getAll);
router.post('/login', login);
router.get('/tip/:id', getById);
router.post('/payment', payment);
router.post('/onboard-user', onboardUser);
router.post('/onboard-user/refresh', userRefresh);
router.post('/tip', tip);

module.exports = router;