const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.get('/api/stripe', requireLogin, async (req, res) => {
    console.log(req.user);
    const charge = await stripe.charges.create({
      amount: 500, // We can pass the charge from client side also to avoid the hardcoded value.
      currency: 'usd',
      description: '5$ for 5 credits',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
