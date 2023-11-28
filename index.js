const http = require ('http');
const server = http.createServer((req,res)=>{
    res.end('Hello World\n')
});


const port = 3200
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})