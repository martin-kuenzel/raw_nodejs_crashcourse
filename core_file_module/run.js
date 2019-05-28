const fs = require('fs');
const path = require('path');
const Person = require("../person");

// if directory not exists already, create the folder crPath
let crPath = path.join(__dirname,'theFolder');
if( !fs.existsSync(crPath) ){
    fs.mkdir(crPath, {}, err => { 
        if(err) throw err; 
        console.log("successfully created theFolder");
    });
}

// write the output of a Person.toString() into crPath/theFile
fs.writeFile(path.join(crPath,"theFile.txt"), "\n"+(new Person()).toString(), err => {
    if(err) throw err;
    console.log("successfully written theFile");

    // append the output of another Person.toString() into crPath/theFile
    fs.appendFile(path.join(crPath,"theFile.txt"), "\n"+(new Person("Martin","the Codejunky")).toString(), err => {
        if(err) throw err;
        console.log("successfully written theFile");

        // read the contents of theFile and print it to console
        fs.readFile(path.join(crPath,"theFile.txt"),'utf8',(err,data)=>{
            if(err) throw err;
            console.log(data.toString());
        })

    });

});

