const Person = require("./person");
const os = require("os");
const http = require("http");

let cpuinfo = () => os.cpus().map( c => `CPUcore: ${c.model} ${c.speed}` );

const server = http.createServer( (rq,rs) => {
    console.log(rq.url);
    if( rq.url == "/" ){
        rs.write(`
            <html><body>
                <h1>${(new Person("Martin","the Codejunky")).toString()}</h1>
                <b>Welcome!</b><br>
                <a href="/stat">server status</a>
            </body></html>
        `);
    }
    if( rq.url == "/stat" ){
        rs.write(`
            <html><body>
                <h3>Server information</h3>
                <br>Platform: ${os.platform()}
                <br>Release: ${os.release()}
                <br>Arch: ${os.arch()}
                <br>CPUinfo: 
                <br>${cpuinfo().map(x=>"&emsp;"+x).join('<br>')}
                <br>Server runs since: ${os.uptime()} seconds
                <br>Memory total: ${os.totalmem()/1024} Kbytes
                <br>Memory free: ${os.freemem()/1024} Kbytes
                <br><a href="/">return</a>
            </body></html>
        `);
    }
    rs.end();
});

const port = process.env.PORT || 4242;
server.listen( port, () => console.log( `Server is online (port:${port}) ...`) );