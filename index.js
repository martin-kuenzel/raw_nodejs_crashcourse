const Person = require("./person");
console.log( ( new Person("Martin","the Codejunky") ).toString() );

/////////////////

const Logger = require("./logger");

const logger = new Logger();
logger.on( 'log_message', (data) => console.log(`Listener has been called`, data) );

logger.log("Die Antwort ist natürlich 42");