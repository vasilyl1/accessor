const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, {
        id: user.googleId,
        username: user.username,
        imageUrl: user.imageUrl,
        email: user.email
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
                const { id, emails, displayName, photos } = profile;
                const user = {
                    googleId: id,
                    email: emails && emails.length > 0 ? emails[0].value : null, // Access email from profile
                    username: displayName,
                    imageUrl: photos && photos.length > 0 ? photos[0].value : null
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
                    //req.session.user = user;
                    console.log(user);
                    return cb(null, user);
                }
                /*
                User.findOrCreate({ googleId: id }, user, function (err, user) {
                    return cb(err, user);
                });
                */
            }
        );