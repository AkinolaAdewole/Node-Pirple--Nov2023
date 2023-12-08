/*
 * Library for storing and editing data
 *
 */

// Dependencies
const fs = require('fs');
const path = require('path');

// Container for module (to be exported)
const lib = {}

// Base directory of data folder
lib.baseDir = path.join(__dirname,'/../.data/');

// Write data to a file
lib.create = (dir,file, data, callback)=>{
    // Open the file for writing
    fs.open(lib.baseDir+dir+'/'+file+'.json','wx', (err, fileDescriptor)=>{
        if(!err && fileDescriptor){
            //convert data to string
        }
    })
}