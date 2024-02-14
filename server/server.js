const express = require('express');
require('dotenv').config();
const path = require('path');
const routes = require('./routes');
const app = express();
const session = require('express-session');
const PORT = process.env.PORT || 3001;
const passport = require('passport');
const { Googlestrategy } = require('./controllers/authController');
const sess =
{
  secret: 'keyboard cat and dog',
  resave: false,
  saveUninitialized: false,
  //cookie: { secure: true }
}

app.use(express.static(path.join(__dirname, '..', '/client', '/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sess));
app.use(passport.initialize());
passport.use(Googlestrategy);
app.use(passport.authenticate('session')); // this is authorized login session

app.use(routes);


app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
