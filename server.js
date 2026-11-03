import http from 'node:http';
const server = http.createServer((req,res)=> {
    res.end("TODOBACKEND 7 DAYS REVISION");
})

const port = 3000;

server.listen(port,()=>{
    console.log("server is thee in " + port);
})