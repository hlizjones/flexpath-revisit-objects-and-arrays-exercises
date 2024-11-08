function BankAccount(initialBalance) {
  let balance = initialBalance;

  this.deposit = function (amount) {
    if (amount > 0) {
      balance += amount;
    } else {
      throw new Error("Invalid deposit amount");
    }
  };

  this.withdraw = function (amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
    } else {
      throw new Error("Invalid withdrawal amount");
    }
  };

  this.getBalance = function () {
    return balance;
  };
}

// Testing
const account = new BankAccount(1000);

account.deposit(500);
console.log(account.getBalance()); // Outputs: 1500

account.withdraw(200);
console.log(account.getBalance()); // Outputs: 1300

console.log(account.balance); // Outputs: undefined (balance is private)

// Attempting to modify balance directly fails
account.balance = 1000000;
console.log(account.getBalance()); // Outputs: 1300 (balance unchanged)
