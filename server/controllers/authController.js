const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, {
        id: user.googleId,
        username: user.username,
        picture: user.picture
      });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

module.exports = new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: `http://localhost:3001/api/auth/google/callback`
        },
            function (accessToken, refreshToken, profile, cb) {
                const { id, emails, name, picture } = profile;
                const user = {
                    googleId: id,
                    email: emails && emails.length > 0 ? emails[0].value : null, // Access email from profile
                    username: name,
                    picture: picture
                };
                if (!user.email) {
                    console.log('User profile does not have email field');
                    return cb(new Error('No email found'), false);
                }
                else if (!(user.email == process.env.EMAIL)) {
                    console.log('User email does not match the one in .env file');
                    return cb(new Error('Wrong user'), false);
                }
                else {
                    console.log('User authenticated OK');
                    return cb(null, user);
                }
                /*
                User.findOrCreate({ googleId: id }, user, function (err, user) {
                    return cb(err, user);
                });
                */
            }
        );