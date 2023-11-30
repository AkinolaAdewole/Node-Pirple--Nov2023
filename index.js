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

    res.end('Hello World\n');

    // Log the request/response
    console.log('Request received on path: ' + trimmedPath + ' with method: ' +method+ ' with this query string parameters', queryStringObject);
    console.log('Headers received with this headers: ', headers);
});

const port = 3200;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
