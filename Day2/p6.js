const fs= require('fs');
fs.rmdir('mydir',(e)=>{
    if (e){
        console.error("Error Deleting Directory :",e);
    return;
}

    else
    console.log("Directory Deleted");
});