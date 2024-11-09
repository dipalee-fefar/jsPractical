const fs = require('fs');

const data = fs.readFile("abc.txt",function(err,data){
    if(err){
        return console.log.error(err);
    }
    console.log("data in the file: "+data.toString());
});