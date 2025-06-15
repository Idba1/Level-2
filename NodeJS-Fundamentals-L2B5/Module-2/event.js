const EventEmitter = require('node:events');

class schoolBell extends EventEmitter { }

const SchoolBell = new schoolBell();
SchoolBell.on('ring', () => {
    console.log('Yahoo!! class sesh!');
});
SchoolBell.on('ring2', () => {
    console.log('Dhet!! ar ekta class ache!');
});
SchoolBell.on('broken', () => {
    console.log('oh no! class ki ar sesh hobe na !!');
});

SchoolBell.emit('ring');
SchoolBell.emit('ring2');
SchoolBell.emit('broken');