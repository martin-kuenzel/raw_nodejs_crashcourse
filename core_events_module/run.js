const EventEmitter = require("events");
class NewEmitter extends EventEmitter {}

const newEmitter = new NewEmitter();

newEmitter.on('event', () => console.log("Event fired.") );

newEmitter.emit('event');