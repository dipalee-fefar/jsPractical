const http = require('http');
const PORT = 5000

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content','text/html');

    if(req.url==='/'){
        res.end('<h1>Home page</h1>');
    }
    else if(req.url==='/a'){
        res.end('<h1>A page</h1>');
    }else if(req.url==='/b'){
        res.end('<h1>B page</h1>');
    }
    else if(req.url==='/c'){
        res.end('<h1>C page</h1>');
    }
    else if(req.url==='/d'){
        res.end('<h1>D page</h1>');
    }
    else if(req.url==='/e'){
        res.end('<h1>E page</h1>');
    }
    else if(req.url==='/f'){
        res.end('<h1>F page</h1>');
    }
    else if(req.url==='/g'){
        res.end('<h1>G page</h1>');
    }
    else if(req.url==='/h'){
        res.end('<h1>H page</h1>');
    }
    else if(req.url==='/i'){
        res.end('<h1>I page</h1>');
    }
    else{
        res.statusCode=404;
    }
})
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}/`);
})