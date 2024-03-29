const http = require('http');
const url = require('url'); // Import the 'url' module directly
const stringDecoder = require('string_decoder').StringDecoder;

const server = http.createServer((req, res) => {
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


        res.end('Hello World\n');

        // Log the request/response
        console.log('Request received on path: ' + trimmedPath + ' with method: ' +method+ ' with this query string parameters', queryStringObject);
        console.log('Headers received with this headers: ', headers);
         // Log the received payload
        console.log('Payload received: ', buffer);
    })
});

const port = 3200;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


// Define all handlers
 let handlers = {};

 // sample handler
 handlers.sample =  function(data, callback){
    callback(406,{'name': 'sample handler'});
 }
