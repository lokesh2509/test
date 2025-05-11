const express = require('express')
const app = express()
const fs = require('fs')
const filepath= './testt.txt'

app.use(express.urlencoded({extended:true}))

app.post('/writeFile',(req,res)=>{
    const d = req.body;
    const result = d.uname+"\n";
    if(fs.existsSync(filepath)){
        fs.appendFileSync(filepath,result);
    }
    else{
        fs.writeFileSync(filepath,result);
    }
    res.status(200).send("Data Inserted Successfully")
})

app.listen(3000,()=>{
    console.log("App is running at port number 3000")
})