const http = require('http')

my_listener = function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Send the response body as "Hello World"
    
    res.end('<h2 style="text-align: center;">Hello World</h2>')
};

server = http.createServer(my_listener);
server.listen(3000);

// Console will print the message

console.log('Server running at http://127.0.0.1:3000/')