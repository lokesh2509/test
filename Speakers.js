const express = require('express')
const app = express()

app.use(express.json())
let speaker = []
app.post('/insertSpeaker',(req,res)=>{
    const d = req.body;
    speaker.push({"name":d.speaker_name,"age":d.speaker_age})
    res.status(200).send("Data inserted successfully");
})
app.get('/retrieveSpeakerDetails',(req,res)=>{
    res.json(speaker)
})

app.listen(3000,()=>{})