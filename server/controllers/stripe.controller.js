const db = require('../models/model');
const stripe = require('stripe')('sk_test_51JaGGqHCv9NHRvAHaBVrBnS5rnXQlUvBOwXQhwdpYEehXEYzgQmbfKWXaKCLui38ijsKjp0Fkr6gUOMXHc2GgGE400hSXNJe0z');

async function payment (req, res) {
  let { amount, id, artistId } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'USD',
      description: 'Tippster',
      payment_method: id,
      confirm: true,
      transfer_data: {
        destination: artistId,
      },
    });
    console.log('Payment', payment);
    res.json({
      message: 'Payment successful',
      success: true
    });
  } catch (error) {
    console.log('Error', error);
    res.json({
      message: 'Payment failed',
      success: false
    });
  }
}

async function onboardUser (req, res) {
  try {
    const id = req.body.id;
    const user = await db.User.findOne({
      where: {
        id: id
      }
    });
    const account = await stripe.accounts.create({ type: 'express' });
    req.session.accountID = account.id;
    console.log(req.session.accountID);
    const origin = `${req.headers.origin}`;
    const accountLinkURL = await generateAccountLink(account.id, origin);
    console.log(account.id);
    await user.update({ stripeId: account.id });
    res.send({ url: accountLinkURL });
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
}

async function userRefresh (req, res) {
  if (!req.session.accountID) {
    res.redirect('/');
    return;
  }
  try {
    const { accountID } = req.session;
    const origin = `${req.secure ? 'https://' : 'https://'}${req.headers.host}`;
    const accountLinkURL = await generateAccountLink(accountID, origin);
    res.redirect(accountLinkURL);
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
}

function generateAccountLink (accountID, origin) {
  return stripe.accountLinks.create({
    type: 'account_onboarding',
    account: accountID,
    refresh_url: `${origin}/onboard-user/refresh`,
    return_url: `${origin}/success`,
  }).then((link) => link.url);
}

module.exports = { payment, onboardUser, userRefresh };
