const router = require('express').Router();
const passport = require('passport');
const { isAuthenticated } = require('../utils/auth');

// /api/auth/google
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// /api/auth/google/callback
router.get('/auth/google/callback',
    passport.authenticate('google', {successReturnToOrRedirect: '/', failureRedirect: '/login', failureMessage: true })
);
    // failure message can be retreived from req.session.messages[0]

// /api/auth/user - get user data
router.get('/auth/user', (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('No user is authenticated');
    }
    res.json(req.session.user); // https://www.passportjs.org/reference/normalized-profile/
});

// /api/auth/logout - logout user
router.post('/auth/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});

// all other /api routes - send back 404

router.get('*', function (req, res) {
    res.status(404).send('404 Not Found');
    res.render('Error 404');
});



module.exports = router;