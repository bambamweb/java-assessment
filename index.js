// string manipulation function

// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("I am balikis"));

// 2. Count Characters
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters('I love listening to music'));

// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(capitalizeWords('i love listening to music'));

//  Array Functions

// Find Maximum and Minimum:
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMax([50,78,69,20,10]));
console.log(findMin([96,89,45,67,5]));

// sum of array
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); 

// filter of array
function filterArray(arr, condition) {
    return arr.filter(condition);
}
console.log(filterArray([1, 2, 3, 4, 5], num => num > 3)); 

// Mathematical Functions

// factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); 

// prime number check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); 

// fibonacci sequence
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}
console.log(fibonacci(5));





