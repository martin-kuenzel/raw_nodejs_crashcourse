const { URL } = require('url');
const newUrl = new URL('https://nodejs.org/api/index.html?prime=7');

console.log(newUrl.href);
console.log(newUrl.toString());

console.log(newUrl.host);
console.log(newUrl.hostname);

console.log(newUrl.port);

console.log(newUrl.pathname);

console.log(newUrl.search);
console.log(newUrl.searchParams);

newUrl.searchParams.append("antwort","42")
console.log(newUrl.searchParams);
for(arg of newUrl.searchParams) console.log(arg);