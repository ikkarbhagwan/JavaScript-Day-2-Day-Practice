function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Test data
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Arrays to store tips and totals
const tips = [];
const totals = [];

// Calculate tips and totals using a for loop
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);

// Bonus: calcAverage function
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Calculate and log the average of the totals array
const averageTotal = calcAverage(totals);
console.log("Average Total:", averageTotal);
