// 1. Variable and Constants: Swap Two Variables Without a Temporary Variable
let a = 5;
const b = 10;

a = a + b;
const c = a - b;
a = a - c;

console.log("a:", a);
console.log("b:", c);

// ---> b is constant, it cannot be changed, so the value of b will not be changed.




// 2. Primitive Types and Dynamic Typing: Detect Data Types in an Array
function countDataTypes(arr) {
    const typeCounts = {};

    for (const element of arr) {
        let type = typeof element;
        if (typeCounts[type]) {
            typeCounts[type]++;
        }
        else {
            typeCounts[type] = 1;
        }
    }

    return typeCounts;
}

const arr = [1, "hello", true, 42, "world", false, "shyam"];
console.log(countDataTypes(arr));




// 3. Objects: Merge and Modify Object Properties
function mergeObjects(obj1, obj2) {
    const result = {};

    for (let key in obj1) {
        result[key] = obj1[key];
    }

    for (let key in obj2) {
        if (key in result) {
            result[key] += obj2[key];
        } else {
            result[key] = obj2[key];
        }
    }

    return result;
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 3, c: 4, d: 5 };
console.log(mergeObjects(obj1, obj2));




// 4. Arrays and Functions: Create a Function to Find the Second Largest Number
function findSecondLargest(numbers) {
    if (numbers.length < 2) {
        return null;
    }

    let largest = null;
    let secondLargest = null;

    for (const element of numbers) {
        let num = element;
        if (largest === null || num > largest) {
            secondLargest = largest;
            largest = num;
        }
        else if (num !== largest && (secondLargest === null || num > secondLargest)) {
            secondLargest = num;
        }
    }

    return secondLargest;
}

const numbers = [3, 5, 7, 2, 8, 7];
console.log(findSecondLargest(numbers));




// 5. Control Flow and Operators: Implement FizzBuzz with a Twist
function isPrime(num) {
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 3) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function fizzBuzzTwist() {
    for (let i = 1; i <= 50; i++) {
        let output = i + ' ';

        if (i % 3 === 0) {
            output += 'Fizz';
        }
        if (i % 5 === 0) {
            output += 'Buzz';
        }

        if (isPrime(i)) {
            output += (output ? '' : ' ') + 'Prime';
        }

        console.log(output || i);
    }
}

fizzBuzzTwist();
