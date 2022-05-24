const express = require('express')
const router = express.Router()
//Destructuring objects from fsUtils
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require("uuid");

// Notes route to respond as a GET request
router.get('/notes', (req,res) => {
    
});

// Notes route to respond as a POST request
router.post('/notes', (req,res) => {
    const newNote = req.body;

    newNote.id = uuidv4();

    readAndAppend(newNote, './db/db.json');
    res.json(newNote)
    
});


module.exports = router;

