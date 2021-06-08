// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers

console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers

console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"

console.log(strings.join(' '));

// - Add two new words in the strings array "called" and "sentance"

strings = strings.concat('called', 'sentence');

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

console.log(strings.join(' '));

// - Remove the first word in the array (strings)

strings.shift();

// - Find all the words that contain 'is' use string method 'includes'

for (let word of strings) {
  if (word.includes('is')) console.log(word);
}

// - Find all the words that contain 'is' use string method 'indexOf'

let allIs = strings.filter( (string) => 
{ string.indexOf('is')!== -1;
});

// - Check if all the numbers in numbers array are divisible by three use array method (every)

console.log(numbers.every(num => num%3==0));

// -  Sort Array from smallest to largest

console.log([...numbers].sort((a,b) => a - b));

// - Remove the last word in strings

delete strings[strings.length-1];

// - Find largest number in numbers

function largest(acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}

console.log(numbers.reduce(largest, 0));


// - Find longest string in strings

let longest = [...strings].sort((a,b) => a.length - b.length).pop();

// - Find all the even numbers

let even = numbers.filter((num) => num%2 == 0);

// - Find all the odd numbers

let odd = numbers.filter((num) => num%2 !== 0);

// - Place a new word at the start of the array use (unshift)

strings.unshift('New Word!');

// - Make a subset of numbers array [18,9,7,11]

numbers.slice(3,7);

// - Make a subset of strings array ['a','collection']

strings.slice(3,5);

// - Replace 12 & 18 with 1221 and 1881

numbers.map((num) => {
  if (num === 12) {
    return 1221;
  } else if (num === 18) {
    return 1881;
  } else {
    return num;
  }
});

// - Replace words in strings array with the length of the word

let stringLength = strings.map((string) => string.length);

// - Find the sum of the length of words using above question

stringLength.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

customers.filter( (obj) => obj.firstname.startsWith('J') );

// - Create new array with only first name

let firstName = customers.map(elm => elm.firstname);
console.log(firstName);

// - Create new array with all the full names (ex: "Joe Blogs")

let fullName = customers.map( elm => `${elm.firstname} ${elm.lastname}`);
console.log(fullName);

// - Sort the array created above alphabetically

console.log([...fullName].sort());

// - Create a new array that contains only user who has at least one vowel in the firstname.

let oneVowel = customers.filter((cust) => {
  if (cust.firstname.toLowerCase().includes('a') ||
    cust.firstname.toLowerCase().includes('e') ||
    cust.firstname.toLowerCase().includes('i') ||
    cust.firstname.toLowerCase().includes('o') ||
    cust.firstname.toLowerCase().includes('u') 
  ) {
    return true;
  } else {
    return false;
  }
});
console.log(oneVowel);