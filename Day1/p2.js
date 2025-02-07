const fs=require('fs');
const newdata="I am new data"
//const data = fs.readFileSync('./Data.txt','utf8');
fs.writeFileSync('data.txt',newdata);
//console.log(data)