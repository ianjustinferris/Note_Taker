const express = require('express')
const router = express.Router()


// Notes route to respond as a GET request
router.get('/notes', (req,res) => {
    res.json('get!');
});

// Notes route to respond as a POST request
router.post('/notes', (req,res) => {
    res.json('post!');
});


module.exports = router;