const router = require('express').Router();
const passport = require('passport');

const {
    init
} = require('../controllers/authController');


// /api/login
router.get('/login', init);

// /api/auth/google
router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

// /api/auth/google/callback
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

module.exports = router;