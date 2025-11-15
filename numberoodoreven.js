// Function to check if a number is odd or even
function checkOddEven(number) {
    if (number % 2 === 0) {
        console.log(number + " is EVEN");
    } else {
        console.log(number + " is ODD");
    }
}

// Example usage:
let num = prompt("Enter a number:");
num = Number(num);

checkOddEven(num);
