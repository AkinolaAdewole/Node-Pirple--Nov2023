/*
 * Request Handlers
 *
 */

// Dependencies
var _data = require('./data');
var helpers = require('./helpers');

// Define the handlers
const handlers ={};

//Ping handler
handlers.ping =(data, callback)=>{
    callback(200);
};

// Not found handler
handlers.notFound=(data,callback)=>{
    callback(404);
};

// Users
handlers.users=(data,callback)=>{};

// Container for all the users methods
handlers._users  = {};

// Export the module
module.exports = handlers