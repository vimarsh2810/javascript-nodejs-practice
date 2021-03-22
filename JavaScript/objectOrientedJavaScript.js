"use strict"

// Simple example of class, constructors, methods

class Account {
  constructor(accountHolderName, accountNo, accountType, balance) {
    this.accountHolderName = accountHolderName,
    this.accountNo = accountNo,
    this.accountType = accountType,
    this.balance = balance
  }

  withDraw(amount) {
    if(amount > this.balance) {
      console.log('Not enough balance');
      return;
    }
    else {
      this.balance -= amount;
      console.log(`${amount} Rs. withdrawn`);
    }
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${amount} Rs. deposited`);
  }

  checkBalance() {
    console.log(`Current balance = ${this.balance}`);
  }
}

let acc1 = new Account('Vimarsh', 1223, 'Saving', 10000);
acc1.checkBalance();
acc1.deposit(5000);
acc1.checkBalance();
acc1.withDraw(16000);
acc1.withDraw(10000);
acc1.checkBalance();


