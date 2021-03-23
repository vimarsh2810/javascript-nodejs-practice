class User {
  constructor(name, email, username) {
    this.name = name;
    this.email = email;
    this.username = username;
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

class Admin extends User {
  
  constructor(name, username, email, type) {
    super(name, username, email);
    this.type = type;
  }

  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
  }
}

const userOne = new User('Yash', 'yash@xyz.com', 'yash224');
const userTwo = new User('Het', 'het@xyz.com', 'het195');

let users = [userOne, userTwo];

const adminOne = new Admin('Vimarsh', 'vimarsh@xyz.com', 'vimarsh28', 'superAdmin');
console.log(adminOne);
adminOne.logout();

console.log(users);
adminOne.deleteUser(userTwo);
console.log(users);