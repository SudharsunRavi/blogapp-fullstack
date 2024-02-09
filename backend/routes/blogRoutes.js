const router = require('express').Router();

router.get('/hi', (req, res) => {
    res.send('Hello World');
})

module.exports = router;