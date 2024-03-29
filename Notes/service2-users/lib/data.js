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
            const stringData = JSON.stringify(data);

            //write to file and close it
            fs.writeFile(fileDescriptor, stringData, (err)=>{
                if(!err){
                    fs.close(fileDescriptor, (err)=>{
                        if(!err){
                            callback(false);
                        } else{
                            callback('Error closing new file');
                        }
                    });
                }else{
                    callback('Error writing to new file')
                }
            });
        }else{
            callback('Could not create new file, it may already exist')
        }
    });
};


// Read data from a file
lib.read =(dir, file, callback)=>{
    fs.readFile(lib.baseDir+dir+'/'+file+'.json', 'utf8', (err, data)=>{
        callback(err, data);
    });
};

// Update data in a file
lib.update=(dir, file, data, callback)=>{
      // Open the file for writing
       fs.open(lib.baseDir+dir+'/'+file+'.json', 'r+', function(err, fileDescriptor){
    if(!err && fileDescriptor){
      // Convert data to string
      var stringData = JSON.stringify(data);

      // Truncate the file
      fs.truncate(fileDescriptor,function(err){
        if(!err){
          // Write to file and close it
          fs.writeFile(fileDescriptor, stringData,function(err){
            if(!err){
              fs.close(fileDescriptor,function(err){
                if(!err){
                  callback(false);
                } else {
                  callback('Error closing existing file');
                }
              });
            } else {
              callback('Error writing to existing file');
            }
          });
        } else {
          callback('Error truncating file');
        }
      });
    } else {
      callback('Could not open file for updating, it may not exist yet');
    }
  });

}


// Delete a file
lib.delete = function(dir,file,callback){

    // Open the file for writing
    fs.unlink(lib.baseDir+dir+'/'+file+'.json', 'r+', function(err, fileDescriptor){
      if(!err && fileDescriptor){
        // Convert data to string
        var stringData = JSON.stringify(data);
  
        // Write to file and close it
        fs.writeFile(fileDescriptor, stringData,function(err){
          if(!err){
            fs.close(fileDescriptor,function(err){
              if(!err){
                callback(false);
              } else {
                callback('Error closing existing file');
              }
            });
          } else {
            callback('Error writing to existing file');
          }
        });
      } else {
        callback('Could not open file for updating, it may not exist yet');
      }
    });
  
  
  };
  

// Export the module
module.exports = lib;