"use strict"

// Differenet ways to create Objects

// 1. Using Object Literals

console.log('***Differenet ways to create Objects***');

console.log('\n1. Using Object Literals\n');

let car1 = {
  name: 'i20',
  brand: 'Hyundai',
  start: function() {
    console.log(`${this.name} is starting...`);
  },
  stop: function() {
    console.log(`${this.name} is stopping...`);
  }
}
console.log(car1);
car1.start();
car1.stop();

// 2. Using a Constructor function

console.log('\n2. Using a Constructor function\n');

function Car(name1, brand1, start1, stop1) {
  this.name = name1;
  this.brand = brand1;
  this.start = start1;
  this.stop = stop1;
}

let car2 = new Car('nano', 'TATA', function() { console.log(`${this.name} is starting...`); }, function() { console.log(`${this.name} is stopping...`);} );
console.log(car2);
car2.start();
car2.stop();

// 3. Using instance of Object directly

console.log('\n3. Using instance of Object directly\n');

let person1 = new Object();
person1.name = 'Vimarsh';
person1.age = 21;
person1.greet = function() {
  console.log(`Hello ${this.name}...`);
}

console.log(person1);
person1.greet();

// 4. Using class

console.log('\n4. Using class\n');

class Person {
  constructor(name1, age1) {
    this.name = name1;
    this.age = age1;
  }
  displayDetails() {
    console.log(`Name: ${this.name}\nAge: ${this.age}`);
  }
}

let person = new Person('Yash', 20);
console.log(person);
person.displayDetails();


// delete property of an object

console.log('\n***Deleting a property of Object:***');

var subject = {
  name: 'Web Technologies',
  code: 'CP301',
  faculty: 'ABC',
  credits: 6
}

console.log(`\nBefore deletion:`);

console.log(subject)

delete subject.credits

console.log(`\nAfter deletion:`);

console.log(subject)

// 'in' operator used to check if the property exist in an object

console.log("\n'in' operator used to check if the property exist in an object\n");

let user = {
  name: 'Vimarsh',
  age: 21
}

console.log('age' in user);

// iterate through all the properties of an object

console.log('\niterate through all the properties of an object\n');

for( let key in user) {
  console.log(`${key}: ${user[key]}`);
}


// Displaying an object using JSON.stringify() method

console.log('\nDisplaying an object using JSON.stringify() method\n');

console.log(JSON.stringify(person));


// Property getters and setters / Accessor properties

console.log('Property getters and setters / Accessor properties');

let user1 = {
  firstName: 'Vimarsh',
  lastName: 'Rathod',
  age: 21,
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
}

console.log(user1.fullName);

user1.fullName = 'Virat Kohli';

console.log(user1.fullName);


// Object Properties Configuration

console.log('Object Properties Configuration');

let userObj = {
  name: 'Vimarsh',
  age: 21
};

let descriptor = Object.getOwnPropertyDescriptor(userObj, 'name');
console.log(descriptor)

let personObj = {}
Object.defineProperty(personObj, 'name', {
  value: 'Akash',
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(personObj.name);
// personObj.name = 'Vimarsh' // this value won't be assigned to property name of personObj

console.log(personObj.name);

