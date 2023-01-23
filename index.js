////// //THROW DICE

function rollDice() {

let roll = Math.floor(Math.random() * 6) + 1;

console.log(`rolled: ${roll}`);

}

function throwDice() {

rollDice();

rollDice();

rollDice();

rollDice();

rollDice();

}

////// HOW TO SUM PARAMETERS/ARGUMENTS ...ARGS {

const sum = (...args) => {

let total = 0;

for (let i = 0; i < args.length; i++) {

total = total + args[i];

}

return total;

};

AVG

const average = (...args) => {

let total = 0;

for (let i = 0; i < args.length; i++) {

total = (total + args[i]) / args.length;

}

return total;

};

////// HOW TO UPPERCASE THE FIRST LETTER OF A STRING

function uppercase(str) {

let splitStr = str.toLowerCase().split(" ");

for (let i = 0; i < splitStr.length; i++) {

splitStr[i] =

splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);

}

return splitStr.join(" ");

}

console.log(1, uppercase("the quick brown fox"));

////// FIND THE LONGEST WORD

function findLongestWord(str) {

let words = str.split(" ");

let longestWord = "";

for (let i = 0; i < words.length; i++) {

if (words[i].length > longestWord.length) {

longestWord = words[i];

}

}

return longestWord;

}

console.log(2, findLongestWord("Web Development Tutorial"));

//////// COUNT VOWELS (A E I O U)

function countVowels(str) {

return str.match(/[aeiou]/g).length;

}

console.log(4, countVowels("The quick brown fox"));

////// MAKE A RANDOM STRING

function makeRandomString(length) {

let result = "";

let characters =

"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let charactersLength = characters.length;

for (let i = 0; i < length; i++) {

result += characters.charAt(Math.floor(Math.random() * charactersLength));

}

return result;

}

////////// console.log(5, makeRandomString(4));

/////// **How to remove recurring values from within an array**

function unique(array) {

let newArray = [];

for (i = 0; i < array.length; i++) {

if (newArray.indexOf(array[i]) === -1) {

newArray.push(array[i]);

}

}

console.log(newArray);

}

////// OBJECT LOOP

const car = {

maker: "Mazda",

model: 3,

year: 2048,

};

for (const key in car) {

console.log(`${key} =\> ${car\[key\]}` );

}

HOW TO CHECK IF THE OBJECT IS EMPTY

const isEmptyObject = (something) => Object.keys(something).length === 0;

//// HOW TO CHECK IF AN OBJECT IS EMPTY

const isEmptyObject = (obj) => Object.keys(obj).length === 0;

console.log(isEmptyObject({}));

console.log(isEmptyObject({ a: 1 }));

//// COUNT LETTERS FROM AN ARRAY TO AN OBJECT

function countLetters(word) {

result = {};

for (i = 0; i < word.length; i++) {

if (result[word[i]]) {

result[word[i]] += 1;

} else {

result[word[i]] = 1;

}

}

return result;

}

console.log(countLetters("tree")); //{t: 1, r: 1, e: 2}

//// Recursively build copies

const createDeepCopy = (input) => {

if (typeof input !== "object") {

return input;

}

let copy = Array.isArray(input) ? [] : {};

for (let key in input) {

const value = input[key];

copy[key] = createDeepCopy(value);

}

return copy;

};

nestedArray = [1, [2], 3];

copyNestedArr = createDeepCopy(nestedArray);

copyNestedArr[0] = 10;

copyNestedArr[1][0] = 578;

console.log(nestedArray);

console.log(copyNestedArr);

////// FACTORIAL FUNCTION

function factorialize(num) {

// If the number is less than 0, reject it.

if (num < 0) return -1;

// If the number is 0, its factorial is 1.

else if (num == 0) return 1;

// Otherwise, call the recursive procedure again

else {

return num * factorialize(num - 1);

}

}

console.log(factorialize(5));

////// SHUFFLE CARDS

//shuffle cards

function shuffle(arr) {

//loop over array backwards

for (let i = arr.length - 1; i > 0; i--) {

//pick random index before current element

let j = Math.floor(Math.random() * (i + 1));

//swap

[arr[i], arr[j]] = [arr[j], arr[i]];

}

}

////// // ////// CHALLENGE 1: REVERSE A STRING

// // Return a string in reverse

// // ex:

const reverseString = (string) => string.split("").reverse().join("");

console.log(reverseString("hello")); // 'olleh';

////// // //////// CHALLENGE 2: VALIDATE A PALINDROME

// // Return true if palindrome and false if not

// // ex:

// isPalindrome('racecar') === true;

// isPalindrome('hello') == false;

function isPalindrome(string) {

let split = string.split("");

let reverse = split.reverse();

let reversed = reverse.join("");

if (reversed === string) {

return true;

} else {

return false;

}

}

const isPalindromeShorterVersion = (string) => reverseString(string) === string;

console.log(isPalindrome("hello"));

console.log(isPalindromeShorterVersion("racecar"));

////// // ////// CHALLENGE 3: REVERSE AN INTEGER

// // Return an integer in reverse

// // ex:

const reverseInt = (num) => num.toString().split("").reverse().join("");

console.log(reverseInt(521));

////// // ////// CHALLENGE 4: CAPITALIZE FIRST LETTERS

// // Return a string with the first letter of every word capitalized

// // ex:

const capitalizeLetters = (string) => {

let splitStr = string.toLowerCase().split(" ");

for (let i = 0; i < splitStr.length; i++) {

splitStr[i] =

splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);

}

return splitStr.join(" ");

};

console.log(capitalizeLetters("i love javascript"));

////// // ////// CHALLENGE 5: MAX CHARACTER

// // Return the character that is most common in a string

// // ex:

// maxCharacter('javascript') == 'a';

function maxCharacter(string) {

let emptyString = "";

let total = "";

for (i = 0; i < string.length; i++) {

if (!emptyString.includes(string[i])) {

emptyString += string[i];

} else {

total += string[i];

}

}

console.log(total);

}

maxCharacter("javascript");

////// // ////// CHALLENGE 6: FIZZBUZZ

// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

const fizzbuzz = (number) => {

if (number % 5 == 0 && number % 3 == 0) {

return "FizzBuzz";

} else if (number % 5 == 0) {

return "Buzz";

} else if (number % 3 == 0) {

return "Fizz";

} else return "Not divisible by 3 or 5";

};

console.log(fizzbuzz(15));

////// // ////// CHALLENGE 7: LONGEST WORD

////// // Return the longest word of a string

////// // SOLUTION 1 - Return a single longest word

////// // SOLUTION 2 - Return an array and include multiple words if they have the same length

////// // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

////// // ex:

////// const longestWord = (sen) => {

////// const wordArr = sen.toLowerCase().split(" ");

////// const sorted = wordArr.sort((a, b) => b.length - a.length);

////// const longestWordArr = sorted.filter(

////// (word) => word.length === sorted[0].length

////// );

////// if (longestWordArr.length === 1) {

////// return longestWordArr[0];

////// } else {

////// return longestWordArr;

////// }

////// };

////// console.log(longestWord("Hi there, my name is Brad"));

////// console.log(longestWord("My name is Brad"));

////// console.log(longestWord("Brad"));

////// // ////// CHALLENGE 8: ARRAY CHUNKING

////// // // Split an array into chunked arrays of a specific length

////// // // ex:

////// function chunkArray(array, len) {

////// const chunkArray = [];

////// array.forEach((val) => {

////// const last = chunkArray[chunkArray.length - 1];

////// if (!last || last.length === len) {

////// chunkArray.push([val]);

////// } else {

////// last.push(val);

////// }

////// });

////// return chunkArray;

////// }

////// chunkArray([1, 2, 3, 4, 5, 6, 7], 3); //=== [[1, 2, 3], [4, 5, 6], [7]];

////// chunkArray([1, 2, 3, 4, 5, 6, 7], 2); //=== [[1, 2], [3, 4], [5, 6], [7]];

////// // ////// CHALLENGE 9: FLATTEN ARRAY

// Take an array of arrays and flatten to a single array

// ex:

// [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

const flatten = (array) => array.toString().split(" ");

console.log(flatten([[1, 2], [3, 4], [5, 6], [7]]));

////// // ////// CHALLENGE 10: ANAGRAM

// Return true if anagram and false if not

// ex. === true

// ex. isAnagram('Dormitory', ''dirty room////'') --> false

function isAnagram(str1, str2) {

const arr1 = str1.split("").sort();

const arr2 = str2.split("").sort();

return arr1.every((value, index) => value === arr2[index]);

}

console.log(isAnagram("elbow", "below"));

console.log(isAnagram("Dormitory", "dirty room////"));

////// // ////// CHALLENGE 11: ADD ALL NUMBERS

// Return a sum of all parameters entered regardless of the amount of numbers

// ex:

// addAll(2, 5, 6, 7) === 20;

function addAll(...numbers) {

return numbers.reduce((acc, cur) => acc + cur);

}

console.log(addAll(2, 5, 6, 7)); // === 20;

////// // ////// CHALLENGE 12: SUM ALL PRIMES

// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself

// ex.

// sumAllPrimes(10) === 17;

function sumAllPrimes(num) {

let total = 0;

// Helper function to check primality

function checkForPrime(num) {

for (let j = 2; j < num; j++) {

if (num % j === 0) {

return false;

}

}

return true;

}

// Check all numbers for primality

for (let i = 2; i <= num; i++) {

if (checkForPrime(i)) {

total += i;

}

}

return total;

}

console.log(sumAllPrimes(10)); // === 17;

////// // ////// CHALLENGE 13: SEEK AND DESTROY

// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array

// ex:

// seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello'];

function seekAndDestroy(arr, ...rest) {

return arr.filter((val) => !rest.includes(val));

}

////// // ////// CHALLENGE 14: EVEN & ODD SUMS

// Take in an array and return an array of the sums of even and odd numbers

// ex:

// evenOddSums([50, 60, 60, 45, 71]) == [170, 116];

function evenOddSums(arr) {

let evenSum = 0;

let oddSum = 0;

arr.forEach((num) => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

return [evenSum, oddSum];

}

console.log(evenOddSums([50, 60, 60, 45, 71])); // === [170,116]

////// RANDOM COLOR SELECTOR FUNCTION

function colorGenerator() {

return (

"rgba(" +

Math.floor(Math.random() * 256) +

", " +

Math.floor(Math.random() * 256) +

", " +

Math.floor(Math.random() * 256) +

", " +

Math.random().toFixed(1) +

")"

);

}