const express = require('express')
const router = express.Router()
//Destructuring objects from fsUtils
const { readFromFile, writeToFile, readAndAppend, readAndDelete} = require('../helpers/fsUtils');
const { v4: uuidv4 } = require("uuid");

// Notes route to respond as a GET request and handled with readFromFile
router.get('/notes', (req,res) => {

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    
});

// Notes route to respond as a POST request and handled with readAndAppend
router.post('/notes', (req,res) => {
    const newNote = req.body;

    newNote.id = uuidv4();

    readAndAppend(newNote, './db/db.json');
    res.json(newNote)
    
});

// Notes route to respond as a DELETE request and handled with 
router.delete('/notes/:id', (req,res) => {

    readAndDelete(req.params.id, './db/db.json');
    res.json({ ok: true });
})

module.exports = router;

