let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(arr) {
  let longestWord = arr[0];
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

// - Convert the above array "words" into an array of length of word instead of word.

console.log([...words].map((value) => value.length));

// - Create a new array that only contains word with atleast one vowel.

function wordsWithVowel(word) {
  return (
    word.toLowerCase().includes("a") ||
    word.includes("e") ||
    word.includes("o") ||
    word.includes("i") ||
    word.includes("u")
  );
}
console.log([...words].filter(wordsWithVowel));

// - Find the index of the word "rhythm"

console.log([...words].findIndex((val) => val === "rhythm"));

// - Create a new array that contians words not starting with vowel.

console.log(
  [...words].filter((word) => {
    return !(
      word.startsWith("a") ||
      word.startsWith("e") ||
      word.startsWith("i") ||
      word.startsWith("o") ||
      word.startsWith("u")
    );
  })
);

// - Create a new array that contianse words not ending with vowel

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(arr) {
  let total = 0;
  arr.forEach((num) => total + num);
  return total;
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

// - Create a new array that contains only even numbers

// let evenArray = numbers.filter((num) => num % 2 === 0);
// console.log(evenArray);

// - Create  a new array that contains only odd numbers.

// let oddArray = numbers.filter((num) => num % 2 !== 0);
// console.log(oddArray);

// - Create a new array that should have true for even number and false for odd numbers.

let oddOrEven = numbers.map((num) => num % 2 === 0);

// - Sort the above number in assending order.

let sortedNumbers = numbers.sort((a, b) => a - b);

// - Does sort mutate the original array?

Yes;

// - Find the sum of the numbers in the array.

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(array) {
  return (
    array.reduce((acc, cv) => {
      acc = acc + cv;
      return acc;
    }, 0) / array.length
  );
}

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(arr) {
  return arr.reduce((acc, cv) => acc + cv.length, 0) / arr.length;
}
