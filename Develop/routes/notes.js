const notes = require('express').Router();
const  {readAndAppend, writeToFile, genID, readFromFile}  = require('../helper/utils.js');

notes.get('/', (req,res) =>{
    readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
    );

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
    res.json("note added successfully!!");
    }
    else{
    res.json("note added unsuccessfully!!");

    }
});

notes.delete('/:id', (req,res) =>{
    const{id}= req.params;
    console.log(id);
    readFromFile('./db/db.json')
        .then((data) =>JSON.parse(data))
        .then((array_notes) => {
            const return_array  = array_notes.filter((note) => note.id != id);
            
            writeToFile('./db/db.json',return_array);
            res.json({status: "Successful"});

        });


    
});

module.exports = notes;