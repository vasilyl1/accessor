const express = require('express');
require('dotenv').config();
const path = require('path');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require('passport');


app.use(passport.initialize());
const GoogleStrategy = require('./controllers/authController');
passport.use(GoogleStrategy);
console.log('Passport initialized with GoogleStrategy');

app.use(express.static(path.join(__dirname, '..', '/client', '/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);


app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
