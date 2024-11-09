const http = require('http');
const PORT = 5000

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content','text/plain');

    if(req.url==='/'){
        res.end('Home Page\n');
    }
    else if(req.url==='/a'){
        res.end('A Page\n');
    }else if(req.url==='/b'){
        res.end('B Page\n');
    }
    else if(req.url==='/c'){
        res.end('C Page\n');
    }
    else if(req.url==='/d'){
        res.end('D Page\n');
    }
    else if(req.url==='/e'){
        res.end('E Page\n');
    }
    else if(req.url==='/f'){
        res.end('F Page\n');
    }
    else if(req.url==='/g'){
        res.end('G Page\n');
    }
    else if(req.url==='/h'){
        res.end('H Page\n');
    }
    else if(req.url==='/i'){
        res.end('I Page\n');
    }
    else{
        res.statusCode=404;
    }
})
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}/`);
})