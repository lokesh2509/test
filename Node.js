const fs = require('fs')
const filepath = './nmims.txt'

let uname = process.argv[2];
let result = "Orginial Data: "+uname+"\nUpper Case Data: "+uname.toUpperCase()+"\nLowerCase Data: "+uname.toLowerCase();

if(fs.existsSync(filepath)){
    fs.appendFileSync(filepath,result)
    console.log(fs.readFileSync(filepath,'utf-8'))
}
else{
    fs.writeFileSync(filepath,result)
    console.log(fs.readFileSync(filepath,'utf-8'))
}