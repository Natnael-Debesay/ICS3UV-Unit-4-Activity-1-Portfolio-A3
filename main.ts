/**
 * @author Natnael Debesay
 * @version 1.0.0
 * @date 2025-12-08
 * @fileoverview This program prints all the integers between two numbers.
 */

// variables
let startingValueAsNumber: number = 0;
let endingValueAsNumber: number = 0;

// input numbers
startingValueAsNumber = parseInt(prompt("Enter Starting Value: ") || "0");
endingValueAsNumber = parseInt(prompt("Enter Ending Value: ") || "0");

// print integers
for (let counter: number = startingValueAsNumber; counter <= endingValueAsNumber; counter++) {
console.log(counter);
}

console.log("\nDone.");
