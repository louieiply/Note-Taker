const notes = require('express').Router();
const dbJson = require('../db/db.json');
const  {readAndAppend, genID, readFromFile}  = require('../helper/utils.js');

notes.get('/', (req,res) =>{
    res.json(dbJson);
});

notes.post('/', (req,res) =>{

    const {text, title} = req.body;
    
    if(text || title){
        console.log(req.body);
        const note = {
            "title":title,
            "text":text,
            "id":genID(),
        }
            readAndAppend(note, "./db/db.json");
            console.log("note added successfully!!");
    }
});

notes.delete('/:id', (req,res) =>{
    const{id}= req.params;
    console.log(id);
    readFromFile("../db/db.json", 'utf8', (err,notes)=>{
        console.log();
        // notes.forEach(element => {
        //     console(element);
        // });
    });
});

module.exports = notes;