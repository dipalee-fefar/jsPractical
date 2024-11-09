const http = require('http')
const PORT = 3000

const server = http.createServer((req,res)=>{
    res.end('hello world from Node')
})
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}/`);
})