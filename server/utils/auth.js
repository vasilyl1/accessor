const passport = require('passport');

module.exports = {
    isAuthenticated: function (req, res, next) {

        passport.authenticate('google', { failureRedirect: '/login' }),
            function (req, res) {
                //return next();
                console.log('authenticated', req.user);
            }
        //return res.status(401).send('User not authenticated');
        next();
    }
}