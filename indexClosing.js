const Person = require("./person");
const os = require("os");
const http = require("http");
const fs = require("fs");
const path = require("path");

let cpuinfo = () => os.cpus().map( c => `CPUcore: ${c.model} ${c.speed}` );

const server = http.createServer( (rq,rs) => {
    console.log(rq.url);
    if( rq.url == "/" ){
        rs.writeHead(200,{ "Content-Type": "text/html" })
        rs.end(`
            <h1>${(new Person("Martin","the Codejunky")).toString()}</h1>
            <h4>Welcome!</h4>
            <br><a href="/stat">server status</a>
            <br><a href="/gsCalc" title="you're welcome">Connecting speakers ?</a>
        `);
    }
    else if( rq.url == "/gsCalc" ){
        fs.readFile( 
            path.join( __dirname,'public','gsCalc.html' ),
            ( err, data ) => {
                rs.writeHead(200,{ "Content-Type": "text/html" })
                if(err) throw err;
                rs.end(data);
            });
    }
    else if( rq.url == "/stat" ){
        rs.writeHead(200,{ "Content-Type": "text/html" })
        rs.end(`
            <h1>Server information</h1>
            <br>Platform: ${os.platform()}
            <br>Release: ${os.release()}
            <br>Arch: ${os.arch()}
            <br>CPUinfo: 
            <br>${cpuinfo().map(x=>"&emsp;"+x).join('<br>')}
            <br>Server runs since: ${os.uptime()} seconds
            <br>Memory total: ${os.totalmem()/1024} Kbytes
            <br>Memory free: ${os.freemem()/1024} Kbytes
            <br><a href="/">return</a>
        `);
    }
    else if( rq.url == "/stat_json" ){
        rs.writeHead(200,{ "Content-Type": "application/json" })
        rs.end(
            JSON.stringify({
                Platform: os.platform(),
                Release: os.release(),
                Arch: os.arch(),
                CPUinfo: cpuinfo(),
                ServerRuntime: os.uptime(),
                MemTotal: os.totalmem(),
                MemoryFree: os.freemem()
            })
        );
    }
    else {
        // DYNAMICALLY SWITCHING FILETYPES IN PUBLIC //
        let filePath = path.join(__dirname,'public', rq.url === '/' ? '/' : rq.url );
        let contentType = "text/html";

        // SWITCH CASE with contenttypes here
        let extname = path.extname(filePath);
        switch(extname){
            case 'css': contentType = 'text/css'; break;
            case 'js': contentType = 'text/javascript'; break;
            case 'json': contentType = 'application/json'; break;
            case 'css': contentType = 'text/css'; break;
            case 'html': contentType = 'text/html'; break;
        }

        fs.readFile(filePath, (err,data) => {
            if(err && err.code == 'ENOENT'){
                rs.writeHead(404);
                rs.end("404 Page not found.")
            }
            rs.writeHead(200,{ "Content-Type": contentType })
            rs.end(data)
        });
    }
});

const port = process.env.PORT || 4242;
server.listen( port, () => console.log( `Server is online (port:${port}) ...`) );