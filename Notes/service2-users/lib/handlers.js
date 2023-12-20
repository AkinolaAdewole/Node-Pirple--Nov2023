/*
 * Request Handlers
 *
 */

// Dependencies
var _data = require('./data');
var helpers = require('./helpers');

// Define all the handlers
var handlers = {};

// Ping handler
handlers.ping = function(data, callback) {
    callback(200);
};

// Not-Found handler
handlers.notFound = function(data, callback) {
    callback(404);
};

// Users handler
handlers.users = function(data, callback) {
    var acceptableMethods = ['post', 'get', 'put', 'delete'];
    if (acceptableMethods.indexOf(data.method) > -1) {
        handlers._users[data.method](data, callback);
    } else {
        callback(405);
    }
};

// Container for all the users methods
handlers._users = {};

// Users - POST
// Create a new user
handlers._users.post = function(data, callback) {
    // Implementation for creating a new user
    // ...
};

// Users - GET
// Get user information
handlers._users.get = function(data, callback) {
    // Implementation for getting user information
    // ...
};

// Users - PUT
// Update user information
handlers._users.put = function(data, callback) {
    // Implementation for updating user information
    // ...
};

// Users - DELETE
// Delete a user
handlers._users.delete = function(data, callback) {
    // Implementation for deleting a user
    // ...
};

// Export the handlers
module.exports = handlers;
