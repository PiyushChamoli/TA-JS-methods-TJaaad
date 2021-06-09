let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array

let peopleName = persons.map((obj) => obj.name);

console.log(peopleName);

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map((obj) => obj.grade);

console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = persons.map((obj) => obj.sex);

console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

let letterJP = peopleName.filter((letter) => letter.startsWith('J') || letter.startsWith('P') );

console.log(letterJP);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

let letterAC = peopleName.filter((letter) => letter.startsWith('A') || letter.startsWith('C'));

console.log(letterAC.length);

// Log all the filtered male ('M') in persons array

let filteredMale = persons.filter((obj) => obj.sex == 'M');

console.log(filteredMale);

// Log all the filtered female ('F') in persons array

let filteredFemale = persons.filter((obj) => obj.sex == 'F');

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

console.log(persons.filter((obj) => obj.sex == 'F')
.filter((person) => person.name.startsWith('C') || person.name.startsWith('J')));

// Log all the even numbers from peopleGrade array

let evenGrade = peopleGrade.filter((num) => num % 2 == 0);

console.log(evenGrade);

// Find the first name that starts with 'J' in persons array and log the object

let firstJ = persons.find((obj) => obj.name.startsWith == 'J');

console.log(firstJ);

// Find the first name that starts with 'P' in persons array and log the object

console.log(persons.find((obj) => obj.name.startsWith == 'P'));

// Find the first name that starts with 'J', grade is greater than 10 and is a female

console.log(persons.find((obj) => 
obj.name.startsWith == 'P' &&
obj.grade > 10 &&
obj.sex == 'F'
));

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) => person.sex == 'F');
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person) => person.sex == 'M');
// Find the sum of all grades and store in gradeTotal

let gradeTotal = peopleGrade.reduce((acc, cv) => acc = acc + cv
  ,0);

console.log(gradeTotal);

// Find the average grade

// Find the average grade of male

let maleGrade = persons.filter((p) => p.sex == 'M');
console.log(maleGrade.reduce((acc, cv) => acc = acc + cv.grade
  ,0) / maleGrade.length);


// Find the average grade of female

let femaleGrade = persons.filter((p) => p.sex == 'F');
console.log(femaleGrade.reduce((acc, cv) => acc = acc + cv.grade
  ,0) / femaleGrade.length);

// Find the highest grade

[...peopleGrade].sort((a,b) => a-b).pop();

// Find the highest grade in male

console.log([...maleGrade].sort((a,b) => a-b).pop());

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

let nameWithJP = persons.filter((person) => person.name.startsWith('J') || person.name.startsWith('P'));

let gradeWithNameJP = nameWithJP.map((p) => p.grade);

console.log([...gradeWithNameJP].sort((a,b) => a-b).pop());

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

peopleGrade.sort((a,b) => a-b);

// Sort the peopleGrade in descending order
peopleGrade.sort((a,b) => b-a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a,b) => a-b);

// Sort the array peopelName in ascending `ABCD..Za....z`

console.log([...peopleName].sort());

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

[...peopleName].sort();