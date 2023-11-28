const http = require ('http');
const { url } = require('url');

const server = http.createServer((req,res)=>{
    // Get the URL and parse it
    const parsedUrl = url.parse(req.url,true);

    // Get the path
    const path = parsedUrl.pathname;
    res.end('Hello World\n')
});


const port = 3200
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})