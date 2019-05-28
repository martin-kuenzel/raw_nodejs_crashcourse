const EventEmitter = require('events');
const uuid = require('uuid');

class NewEmitter extends EventEmitter {};

class Logger extends NewEmitter {
    log(...msg){
        this.emit( 'log_message', { id: uuid.v4(), msg: Array.from(msg).join(', ') });
    }
}

module.exports = Logger;