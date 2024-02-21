const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, {
            id: user.googleId,
            username: user.username,
            imageUrl: user.imageUrl,
            email: user.email
        });
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

const checkUser = (req) => { // returns true if the user is authenticated
    const emails = process.env.EMAIL.split(',');
    const upcaseEmails = emails.map(email => email.trim().toUpperCase());
    const upcaseReq = req.trim().toUpperCase();
    if (upcaseEmails.find(email => email === upcaseReq)) return true; else return false;
};

const Googlestrategy = new GoogleStrategy({
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
        if (!user.email) return cb(null, false); // no email
        else if (!checkUser(user.email)) return cb(null, false); // wrong email
        else return cb(null, user);
        /*
        User.findOrCreate({ googleId: id }, user, function (err, user) {
            return cb(err, user);
        });
        */
    }
);

const withAuth = (req, res, next) => { // Middleware function to check if the user is authenticated
    // Passport adds a `user` object to the request if authentication succeeds
    if (req.isAuthenticated()) next(); else next('Unauthorized');
};


module.exports = { Googlestrategy, withAuth };