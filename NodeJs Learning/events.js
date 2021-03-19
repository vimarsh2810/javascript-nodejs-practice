const events = require('events');
const utils = require('util');

const Person = function(name) {
  this.name = name;
};

utils.inherits(Person, events.EventEmitter);
let Vimarsh = new Person('Vimarsh');
let Yash = new Person('Yash');
let Het = new Person('Het');
let people = [Vimarsh, Yash, Het];

people.forEach(function(person) {
  person.on('speak', function(msg) {
    console.log(person.name + ' said: ' + msg);
  });
});

Vimarsh.emit('speak', 'Hey man!');