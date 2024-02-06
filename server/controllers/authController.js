const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const PORT = process.env.PORT || 3001;

module.exports = {
    init() {
        passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: `http://localhost:${PORT}/api/auth/google/callback`
        },
            function (accessToken, refreshToken, profile, cb) {
                User.findOrCreate({ googleId: profile.id }, function (err, user) {
                    return cb(err, user);
                });
            }
        ))
    },
    passport: passport
}