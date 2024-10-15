// 1. Create variables num1 and num2 so that their product is 62
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2; // This should equal 62

// 2. Create a variable that generates a random integer greater than 0
const random = Math.floor(Math.random() * 100) + 1; // Adjust the range as needed

// 3. Create variables num3 and num4 such that num3 % num4 equals 4
const num3 = 10;
const num4 = 6;
const mod = num3 % num4; // This should equal 4

// 4. Create a variable that finds the maximum number in a set
const max = Math.max(10, 15, 20, 5); // This should return 20

// Exporting the variables for testing
module.exports = { multiply, random, mod, max };
