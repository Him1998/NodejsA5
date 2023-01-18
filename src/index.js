var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if(req.url=="/"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write("<h1>Home</h1>");
        res.end();
    }
    else if(req.url=="/welcome"){
        res.writeHead(200,{"content-type": "text/plain"});
        res.write("Welcome to Dominos!");
        res.end();
    }
    else if(req.url=="/contact"){
        res.writeHead(200,{"content-type": "application/json"});
        res.write(JSON.stringify({
            phone: '18602100000', 
            email: 'guestcaredominos@jublfood.com' 
        }));
        res.end();
    }
    else{
        res.writeHead(404);
        res.write("<h1>Error : Wrong Url</h1>")
        res.end("Please input correct url")
    }
}

httpServer.listen(8081,()=> console.log("Server is up at 8081"));

module.exports = httpServer;