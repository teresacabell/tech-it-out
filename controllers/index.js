const route = require('express').Router();

const apiRoutes = require('./api');
const router = require('./api/user-routes');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
