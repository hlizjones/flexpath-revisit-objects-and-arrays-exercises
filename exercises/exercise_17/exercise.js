// Create a constructor function `BankAccount` that takes an initial balance. 

// Provide methods 'deposit' and 'withdraw' to interact with this balance. 

// Use closures to protect the balance from being accessed or modified directly.

function BankAccount (initialBalance) {
    let balance = initialBalance

    this.balance = function() {
        console.log(balance)
    }
    this.deposit = function(amount) {
         balance += amount
        console.log(`Balance increased by ${amount}`)
    }
    
    this.withdraw = function(amount) {
        balance -= amount
        console.log(`Balance decreased by ${amount}`)
    }
    
}



let myBank = new BankAccount(100)

myBank.balance()

myBank.deposit(50)

myBank.balance()

myBank.withdraw(25)

myBank.balance()