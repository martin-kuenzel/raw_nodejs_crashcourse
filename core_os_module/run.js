const os = require('os');
let cpuinfo = () => os.cpus().map( c => `CPUcore: ${c.model} ${c.speed}` );

console.log(`
    Platform: ${os.platform()}
    Release: ${os.release()}
    Arch: ${os.arch()}
    CPUinfo: 
    ${cpuinfo().map(x=>"\t"+x).join('\n')}
    Server runs since: ${os.uptime()} seconds
    Memory total: ${os.totalmem()/1024} Kbytes
    Memory free: ${os.freemem()/1024} Kbytes
`);
