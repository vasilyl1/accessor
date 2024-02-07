const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const PORT = process.env.PORT || 3001;

module.exports = {
    init() {
        passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: `http://localhost:${PORT}/api/auth/google/callback`,
            userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo', // Required for email
            scope: ['profile', 'email'], // Specify scope to fetch profile and email
        },
            function (accessToken, refreshToken, profile, cb) {
                const { id, emails } = profile;
                const user = {
                    googleId: id,
                    email: emails && emails.length > 0 ? emails[0].value : null, // Access email from profile
                };
                User.findOrCreate({ googleId: id }, user, function (err, user) {
                    return cb(err, user);
                });
            }
        ))
    },
    passport: passport
}