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



// - Find all the even numbers



// - Find all the odd numbers

// - Place a new word at the start of the array use (unshift)

// - Make a subset of numbers array [18,9,7,11]

// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881

// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

customers.filter( (obj) => { 
  if (obj.firstname.startsWith('J')) {
    console.log(obj.firstname);
  } 
});

// - Create new array with only first name

let firstName = customers.map(elm => { return elm.firstname });
console.log(firstName);

// - Create new array with all the full names (ex: "Joe Blogs")

let fullName = customers.map( elm => {
  return (`${elm.firstname} ${elm.lastname}`);
}
);
console.log(fullName);

// - Sort the array created above alphabetically

console.log([...fullName].sort());

// - Create a new array that contains only user who has at least one vowel in the firstname.

function vowel(name) {
  if 
}

let oneVowel = customers.filter(vowel);
console.log(oneVowel);