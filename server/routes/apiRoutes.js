const router = require('express').Router();
const passport = require('passport');

// /api/auth/google
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// /api/auth/google/callback
router.get('/auth/google/callback',
    passport.authenticate('google', { successReturnToOrRedirect: '/', failureRedirect: '/login1' }));

// all other /api routes - send back 404

router.get('*', function (req, res) {
    res.status(404).send('404 Not Found');
    res.render('Error 404');
});



module.exports = router;