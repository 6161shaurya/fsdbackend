const fs= require('fs');
fs.mkdir('mydir',(err)=>{
    if (err)
        console.log("Error Creating Directory :",err);
    else
    console.log("Directory Created");
})