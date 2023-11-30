const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder; // Correctly import StringDecoder

const server = http.createServer((req, res) => {
    // Get the URL and parse it
    const parsedUrl = url.parse(req.url, true);

    // Get the path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Get the query string as an object
    const queryStringObject = parsedUrl.query;

    // Get the HTTP method
    const method = req.method.toLowerCase();

    // Get the headers as an object
    const headers = req.headers;


    // Parsing payloads in Node.js typically involves handling incoming 
    // data from requests sent to a server. The payload can be in 
    // various formats such as JSON, form data, or other content types. 
    // To parse payloads, you can use different Node.js modules or 
    // native methods to handle different data formats.

    // Get the payload, if any
    const decoder = new StringDecoder('utf-8'); // Correct instantiation

    let buffer = '';

    req.on('data', (data) => {
        buffer += decoder.write(data); // Append incoming data to the buffer
    });

    req.on('end', () => {
        buffer += decoder.end(); // Finalize the buffer with any remaining data

        // Here you can use the 'buffer' variable, which contains the payload

        // Log the request/response
        console.log('Request received on path: ' + trimmedPath + ' with method: ' + method + ' with these query string parameters', queryStringObject);
        console.log('Headers received with these headers: ', headers);
        console.log('Payload received: ', buffer); // Log the received payload
    });

    res.end('Hello World\n');
});

const port = 3200;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
