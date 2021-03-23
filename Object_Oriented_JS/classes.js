class User {
  constructor(name, userName, age) {
    this.name = name;
    this.userName = userName;
    this.age = age;
    this.score = 0;
  }
  login() {
    console.log(`${this.userName} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.userName} just logged logout`);
    return this;
  }
  increaseScore() {
    this.score += 1;
    console.log(`${this.userName} has score of ${this.score}`);
    return this;
  }
}

const userOne = new User('Vimarsh', 'vimarsh28', 21);
const userTwo = new User('Parv Dave', 'parv511', 20);
console.log(userOne);
console.log(userTwo);

// Method Chaining

console.log('\nMethod Chaining\n');

userOne.login().logout();

userTwo.increaseScore().increaseScore();