const passport = require('passport');

module.exports = {
    isAuthenticated: function (req, res, next) {

        passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }),
            function (req, res) {
                return next();
            }
        return res.status(401).send('User not authenticated');
    }
}