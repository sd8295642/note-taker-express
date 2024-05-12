const apiRouter = require('express').Router();
const path = require('path');
let db = require('../db/db.json')
const fs = require('fs');

//localhost:3001/api/

apiRouter.get('/notes', (req, res) => {
    res.json(db)
});

apiRouter.post('/notes', (req, res) => {
    let newNote = { title: req.body.title, text: req.body.text, id: Math.random() }

    db.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(db))

    res.json(db)
});

module.exports = { apiRouter };