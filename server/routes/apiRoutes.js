const router = require('express').Router();
const passport = require('passport');

// /api/auth/google
router.get('auth/google', 
    passport.authenticate('google'), 
    () => {
        console.log('Redirected to Google');
    }
);

// /api/auth/google/callback
router.get('/auth/google/callback',
    passport.authenticate('google', { successReturnToOrRedirect: '/', failureRedirect: '/login1' }), 
    (req, res) => {
        res.redirect('/');
    }
);

module.exports = router;