// 1. Arrays CRUD (Create, Read, Update, Delete)
// Question: Write a function manipulateArray that takes an array of integers and returns a new array that performs the following operations:
// Remove all even numbers.
// Replace all prime numbers with -1.
// Add the sum of all remaining numbers to the end of the array.
function manipulateArray(arr) {
    function isPrime(num) {
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    let evenArray = arr.filter(num => num % 2 !== 0);  // Remove all even numbers.

    let replacedPrimArray = evenArray.map(num => (isPrime(num) ? -1 : num));  // Replace prime numbers with -1.

    let sum = replacedPrimArray.reduce((acc, num) => acc + num, 0);  // Add the sum of all remaining numbers to the end of the array.
    replacedPrimArray.push(sum);

    return replacedPrimArray;
}

console.log(manipulateArray([2, 3, 4, 5, 6, 7, 8, 9, 10]));




// 2. Sorting / Joining / Iteration
// Question: Write a function customSortAndJoin that takes an array of objects with name and age properties. 
// Sort the objects by age in descending order, and then join the name properties of the sorted objects into a string separated by commas.
function customSortAndJoin(arr) {
    arr.sort((a, b) => b.age - a.age);  // Sort the objects by age in descending order
    const result = arr.map(person => person.name).join(',');  // join the name properties of the sorted objects
    return result;
}

console.log(customSortAndJoin([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
]));




// 3. Filter / Map / Reduce
// Question: Write a function processData that takes an array of strings. Filter out the strings that have fewer than 5 characters, 
// map the remaining strings to their lengths, and then reduce the lengths to calculate their total sum.
function processData(arr) {
    const filtered = arr.filter(str => str.length >= 5);  // Filter out the strings that have fewer than 5 characters
    const lengths = filtered.map(str => str.length);  // map the remaining strings to their lengths
    const totalSum = lengths.reduce((acc, length) => acc + length, 0);  // reduce the lengths to calculate their total sum
    return totalSum;
}

console.log(processData(["apple", "banana", "cat", "elephant", "dog"]));
// Expected output: 12 (since "apple" and "banana" are valid, their lengths are 5 and 6)
// In given array, "elephant" is also included in the filtered data, so the final output:19.




// 4. Spread Operators
// Question: Write a function deepMergeArrays that takes two arrays of objects. 
// Merge both arrays into a new array without duplicates based on a specific key (id). 
// Use the spread operator to deep merge objects that have the same id.
function deepMergeArrays(arr1, arr2) {
    const mergedArray = [...arr1]; // copy of arr1

    // Loop through the second array to merge with the first
    for (const item of arr2) {
        const itemInMerged = mergedArray.find(existingItem => existingItem.id === item.id);  // check same id exists

        if (itemInMerged) {
            const mergedItem = { ...itemInMerged, ...item }; // merge existing and new item
            const index = mergedArray.indexOf(itemInMerged);
            mergedArray[index] = mergedItem;
        } else {
            mergedArray.push({ ...item });
        }
    }

    return mergedArray;
}

const array1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const array2 = [{ id: 1, age: 25 }, { id: 3, name: "Charlie" }];
console.log(deepMergeArrays(array1, array2));




// 5. Set
// Question: Write a function intersectionOfSets that takes two arrays of numbers and 
// returns an array of their intersection (i.e., numbers present in both arrays) using Set.
function intersectionOfSets(arr1, arr2) {
    const set1 = new Set(arr1);
    const intersection = [];
    const set1Array = [...set1];

    for (const element of arr2) {
        if (set1Array.includes(element)) {
            intersection.push(element);
        }
    }

    return intersection;
}

console.log(intersectionOfSets([1, 2, 3, 4], [3, 4, 5, 6]));




// 6. Map
// Question: Write a function groupByAge that takes an array of objects with name and age properties. 
// Return a Map where the keys are age values and the values are arrays of names that correspond to that age.
function groupByAge(arr) {
    const ageMap = new Map();

    for (const person of arr) {
        const names = ageMap.get(person.age) || [];
        names.push(person.name);
        ageMap.set(person.age, names);
    }

    return ageMap;
}

console.log(groupByAge([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
]));




// 7. Hoisting
// Question: Consider the following code. Explain the output javascript
function hoistTest() {
    console.log(x);
    var x = 10;
    let y = 20;
    console.log(y);
}
hoistTest();
// output:- undefined
//          20
// --> When hoistTest function run, it first tries to print x, but x is declared with var, 
//     it shows undefined because the declaration is moved to the top, even it hasn't been given value yet. 
//     After that, x is set to 10, but that doesn’t change the first output. Next, let y = 20; creates y and sets it to 20. 
//     So, when the function prints y, it shows 20





// 8. Rest Operator & Default Parameters
// Question: Write a function computeAverage that takes a minimum of 2 numbers. 
// Any additional arguments passed should also be considered for calculating the average. 
// If no extra numbers are passed, return a default message: "Not enough numbers".
function computeAverage(a, b, ...rest) {
    if (rest.length === 0) {
        return "Not enough numbers";
    }

    const totalSum = a + b + rest.reduce((sum, num) => sum + num, 0);
    const totalCount = 2 + rest.length;
    return totalSum / totalCount;
}

console.log(computeAverage(4, 8));
console.log(computeAverage(4, 8, 12, 16));




// 9. Try and Catch
// Question: Write a function safeDivision that takes two numbers as arguments and returns their division result. 
// If the second argument is 0, throw an error, and catch it with a meaningful message.
function safeDivision(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    } catch (error) {
        return error.message;
    }
}

console.log(safeDivision(10, 2));
console.log(safeDivision(10, 0));




// 10. The this Keyword
// Question: Write a class Person that has a name property and a method introduce. 
// Inside introduce, use the this keyword to refer to the object's name property. 
// Create two instances of Person and call introduce. 
// Also, bind the introduce method of one instance to another instance and call it.
class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.introduce();
person2.introduce();

const introduceBound = person1.introduce.bind(person2);
introduceBound();