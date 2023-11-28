// // Function to calculate the tip based on bill value
// function calcTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// // Test the function with a bill value of 100
// const testBill = 100;
// const testTip = calcTip(testBill);
// console.log(`The tip for a bill of $${testBill} is $${testTip}`);

// // Array of test data (bills)
// const bills = [125, 555, 44];

// // Array of tips calculated using the calcTip function
// const tips = bills.map(calcTip);

// // Array of total values (bill + tip)
// const totals = bills.map((bill, index) => bill + tips[index]);

// // Displaying the results
// console.log("Bills:", bills);
// console.log("Tips:", tips);
// console.log("Totals:", totals);


//   self done

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 42];
const Tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills,Tips);