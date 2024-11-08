/*
	Exercise 9: Advanced Use of Array.reduce

	Problem:

	Given an array of transactions:
*/

const transactions = [
  { type: "deposit", amount: 100 },
  { type: "withdrawal", amount: 50 },
  { type: "deposit", amount: 200 },
  { type: "withdrawal", amount: 80 },
];

/*
	Use reduce to calculate the final balance, assuming the 
	starting balance is 0. 
	
	Also, categorize the transactions into deposits and withdrawals.
*/

const startingBalance = 0;

const result = transactions.reduce(
  (acc, transaction) => {
    if (transaction.type === "deposit") {
      acc.balance += transaction.amount;
      acc.deposits.push(transaction);
    } else if (transaction.type === "withdrawal") {
      acc.balance -= transaction.amount;
      acc.withdrawals.push(transaction);
    }
    return acc;
  },
  { balance: startingBalance, deposits: [], withdrawals: [] }
);

console.log("Final Balance:", result.balance); // Outputs: 170
console.log("Deposits:", result.deposits);
// Outputs:
// [{ type: 'deposit', amount: 100 },
//  { type: 'deposit', amount: 200 }]
console.log("Withdrawals:", result.withdrawals);
// Outputs:
// [{ type: 'withdrawal', amount: 50 },
//  { type: 'withdrawal', amount: 80 }]
