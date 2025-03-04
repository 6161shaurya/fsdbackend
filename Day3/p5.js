const http = require('http')
const fs = require('fs/promises');
const server =http.createServer(async(req,res)=>{
    const data=await fs.readfile("./data.json");
    res.writehead(200,{"content type":"application/json"});
    res.end(data);
});
server.listen(9000,(err)=>{
    if(err)
        console.log(err);
    else
    console.log("Server runner on port 9000");
});