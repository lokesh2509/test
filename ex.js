const express =require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'plsc'
});
db.connect();

app.post('/student',(req,res)=>{
    const data= req.body;
    db.query('insert into stud(name,age,cls) values (?,?,?)',[data.name, data.age, data.cls],(err,result)=>{
        if(err){
            return res.sendStatus(500)
        }
        else{
            return res.status(200).send("Data inserted succesfully")
        }
    })
})

app.get('/allstudent',(req,res)=>{
    db.query('select * from stud',(err,result)=>{res.json(result)})
})

app.get('/onestudent/:name',(req,res) => {
    db.query('select * from stud where name = ?',[req.params.name],(err,result)=>{
        if(err){
            return res.sendStatus(404);
        }
        else{
            return res.json(result[0])
        }
    })
})

app.put('/updateStudent/:id',(req,res) => {
    const data = req.body;
    db.query('update stud set age =? where id = ?',[data.age, req.params.id],(err,result)=>{
        if(result.affectedRows){
            return db.query('select * from stud where id = ?',[req.params.id],(e2,r)=> res.json(r[0]))
        }
        else{
            return res.sendStatus(404)
        }
        
    })
})

app.delete('/deleteStudent/:id',(req,res)=>{
    db.query('Delete from stud where id = ?',[req.params.id],(err,result)=> {
        if(err){
            return res.sendStatus(404);
        }
        else{
            return res.status(200).send("Deleted!")
        }
    })
})


app.listen(3000,()=>{
    console.log("App running on port 3000")
});