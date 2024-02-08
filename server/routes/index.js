const router = require('express').Router();
const path = require('path');

const homeRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// all other home routes - send back REACT index.html file which will handle all other routes

router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });

module.exports = router;