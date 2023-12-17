/*
 * Request Handlers
 *
 */

// Dependencies
var _data = require('./data');

// Define the handlers
const handlers ={};

// Users
handlers.users=(data,callback)=>{};
//Ping handler
handlers.ping =(data, callback)=>{
    callback(200);
};

// Not found handler
handlers.notFound=(data,callback)=>{
    callback(404);
};

// Export the module
module.exports = handlers