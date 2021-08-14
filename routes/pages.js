const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Homepage'
    });
})

router.get('/test', (req, res) => {
    res.send('admin area');
})

// ***** Export ***** //
module.exports = router;