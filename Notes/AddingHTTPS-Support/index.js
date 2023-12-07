const http = require('http');
const https = require('https');
const url = require('url'); // Import the 'url' module directly
const stringDecoder = require('string_decoder').StringDecoder;
const config = require('./config');
const fs = require('fs');


// Instantiate the HTTP server
const httpServer = http.createServer((req,res)=>{
    unifiedServer(req,res);
});

// Start the HTTP server
httpServer.listen(config.httpPort, ()=>{
    console.log('The HTTP server is running on port ' +config.httpPort);
});



// Instantiate the HTTPS server
const httpsServerOptions = {
    'key' : fs.readFileSync('./https/key.pem'),
    'cert' : fs.readFileSync('./https/cert.pem')
};

const unifiedServer =(req, res) => {
    // Get the URL and parse it
    const parsedUrl = url.parse(req.url, true);
    // Get the path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    //Get the query string as an object
    const queryStringObject = parsedUrl.query;

    // Get the HTTP method
    const method = req.method.toLowerCase();

    // get the headers as an objeccts
    const headers = req.headers;

    //Get the payload, if any
    const decoder = new stringDecoder('utf-8');
    let buffer ='';
    req.on('data',(data)=>{
        buffer += decoder.write(data);
    })

    req.on('end',()=>{
        req.on += decoder.end();

        // Check the router for a matching path for a handler. If one is not found, use the notFound handler instead.
        let chosenHandler = typeof(router[trimmedPath]) !== 'undefined'  ? router[trimmedPath] : handlers.notFound;
        
        // Construct the data object to send to the handler
        let data = {
            'trimmedPath' : trimmedPath,
            'queryStringObject' : queryStringObject,
            'method' : method,
            'headers' : headers,
            'payload' : buffer
        };

         // Route the request to the handler specified in the router
         chosenHandler(data,(statusCode, payload)=>{
            
            // Use rhe status code returned from the handler or set the default payload to an empty object
            statusCode = typeof(statusCode) == 'number' ? statusCode : 200;

            // Use the payload returned from handler or set the default payload to an empty object
            payload = typeof(payload) == 'object' ? payload : {};

            // Convert the payload to a string
            let payloadString = JSON.stringify(payload);

            // Return the response
            res.setHeader('content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(payloadString);
            console.log("Returning this response: ",statusCode,payloadString);
         });
    });
};




const port = 3400;
server.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port} in ${config.envName} mode`);
});


// Define all handlers
 let handlers = {};

 // sample handler
 handlers.sample =  function(data, callback){
    callback(406,{'name': 'sample handler'});
 };

 // Not found Handler
 handlers.notFound = function(data, callback){
    callback(404);
 };

 // Define the request router
 let router = {
    'sample' : handlers.sample
 };
