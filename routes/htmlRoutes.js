const path = require('path');
const express = require('express');
const router = express.Router();

// Notes route to respond with notes.html as a GET request
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})


// All other routes to respond with index.html as a GET request
// Order here matters when using '*' (wildcard)
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


module.exports = router;

 