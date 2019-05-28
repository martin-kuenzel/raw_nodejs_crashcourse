const http = require('http');
http.createServer( (request,response) => {
    response.write("The server has received a request.");
    
    response.end();
}).listen(4242, () => console.log("Server is running ...") );