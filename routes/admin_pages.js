const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('admin area');
})

router.get('/test', (req, res) => {
    res.send('admin test');
})

// ***** Export ***** //
module.exports = router;