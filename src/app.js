const express = require("express");
const app = express();
const noteModel = require('./model/note.model')

const path =require('path')
const cors =require('cors')
app.use(cors());
app.use(express.json())
//midle ware of server
app.use(express.static('./public'))


app.post('/api/notes', async (req, res) => {
    const { title, desc } = req.body
 const note =   await noteModel.create({
        title, desc
    })

    res.status(201).json({
        msg: "create node ",
        note
    })
})

app.get('/api/notes', async (req, res) => {
    // const { title, desc } = req.body
 const note =   await noteModel.find()

    res.status(200).json({
        msg:"successfully got it",
      note 
    })
})

app.delete('/api/notes/:id', async (req, res) => {
     
 const id = req.params.id

 console.log(id);
  await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        msg:"note is deleted ", 
    })
})

app.patch('/api/notes/:id', async (req, res) => {
     
 const id = req.params.id
const {desc } = req.body
 
  await noteModel.findByIdAndUpdate(id,{desc})

    res.status(200).json({
        msg:"note is update ", 
    })
})

app.use('*name',(req, res) => {
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})

module.exports = app;