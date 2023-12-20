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
handlers.users = function(data, callback) {
  // Define acceptable HTTP methods
  var acceptableMethods = ['post', 'get', 'put', 'delete'];

  // Check if the provided method is in the list of acceptable methods
  if (acceptableMethods.indexOf(data.method) > -1) {
    // If it is acceptable, call the corresponding method in handlers._users
    handlers._users[data.method](data, callback);
  } else {
    // If the method is not acceptable, invoke the callback with a status code of 405 (Method Not Allowed)
    callback(405);
  }
};


// Container for all the users methods
handlers._users  = {};

// Users - post
// Required data: firstName, lastName, phone, password, tosAgreement
// Optional data: none

// Export the module
module.exports = handlers