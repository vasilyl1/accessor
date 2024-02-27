const router = require('express').Router();
const passport = require('passport');
const { withAuth } = require('../controllers/authController');
const { chat } = require('../controllers/openaiController');

// /api/auth/google
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// /api/auth/google/callback
router.get('/auth/google/callback',
    passport.authenticate('google', { successReturnToOrRedirect: '/', failureRedirect: '/notauthorized', failureMessage: true })
);
// failure message can be retreived from req.session.messages[0]

// /api/auth/profile - get user data
router.get('/auth/profile', withAuth, (req, res) => {
    res.json({ user: req.user }); // req.user contains information about the logged-in user
});


// /api/auth/logout - logout user
router.post('/auth/logout', (req, res, next) => {
    res.clearCookie('connect.sid');
    req.logout(function (err) {
        if (err) { return next(err); }
        req.session.destroy((err) => {
            if (err) {
                console.log('Error destroying session:', err);
                return next(err);
            }
            // Redirect to Google logout URL
            res.redirect('https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=' + req.protocol + '://' + req.get('host') + '/');
        });
    });
});

// /api/openai/chat - chat completions from OpenAI
router.post('/openai/chat', withAuth, async (req, res) => {
    try {
        const response = await chat(req.body.prompt);
        res.json({ response:response });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// all other /api routes - send back 404

router.all('*', function (req, res) {
    res.status(404).send('404 Not Found');
    res.render('Error 404');
});



module.exports = router;