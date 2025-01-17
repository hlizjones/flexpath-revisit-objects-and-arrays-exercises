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

let finalBalance = transactions.reduce(function(amount, currentValue){
if (currentValue.type === "deposit") {
	amount += currentValue.amount
} else if (currentValue.type === "withdrawal") {
	amount -= currentValue.amount
} return amount
}, 0)

console.log(finalBalance)

let transactionsTypes = transactions.reduce(function(accumulator, currentValue){
	if (!accumulator[currentValue.type]) {
		accumulator[currentValue.type] = []
	};
	accumulator[currentValue.type].push(currentValue.amount);
	return accumulator;
}, {})

console.log(transactionsTypes)