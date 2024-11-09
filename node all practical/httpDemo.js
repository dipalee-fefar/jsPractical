const http = require('http');
const PORT = 8000

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content','text/plain');

    if(req.url==='/'){
        res.end('Home Page\n');
    }
    else if(req.url==='/about'){
        res.end('About Page\n');
    }else if(req.url==='/contact'){
        res.end('Contact Page\n');
    }
    else{
        res.statusCode=404;
    }
})
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}/`);
})