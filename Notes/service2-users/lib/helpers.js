/*
 * Helpers for various tasks
 *
 */

// Dependencies
var config = require('./config');
var crypto = require('crypto');

// Container for all the helpers
var helpers = {};

// Parse a JSON string to an object in all cases, without throwing
helpers.parseJsonToObject = function(str){
  try{
    var obj = JSON.parse(str);
    return obj;
  } catch(e){
    return {};
  }
};

// Create a SHA256 hash
helpers.hash = function(str){
  if(typeof(str) == 'string' && str.length > 0){
    var hash = crypto.createHmac('sha256', config.hashingSecret).update(str).digest('hex');
    return hash;
  } else {
    return false;
  }
};

// Export the module
module.exports = helpers;

// Explanation:

// Dependencies: The module requires two dependencies - config and the built-in Node.js module crypto.

// Container for Helpers: The helpers object is defined to contain all the helper functions.

// parseJsonToObject: A function to parse a JSON string to an object. 
// It uses a try-catch block to handle potential parsing errors and returns an empty object in case of an error.

// hash: A function to create a SHA256 hash. It checks if the input is a non-empty string before creating the hash. 
// It uses the crypto module to create an HMAC (hash-based message authentication code) with the SHA256 algorithm.

// Export Module: The helpers module is exported to be used in other parts of the application.

// This module seems to be designed for common utility tasks, 
// such as parsing JSON and creating secure hashes using SHA256. 
// The configuration is pulled from a config module, which is assumed to be present in the same directory.