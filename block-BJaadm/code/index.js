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

console.log(letterAC);

// Log all the filtered male ('M') in persons array

let filteredMale = persons.filter((obj) => {
  if (obj.sex == 'M') {
    return obj.name;
  }
});

console.log(filteredMale);

// Log all the filtered female ('F') in persons array

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

// Log all the even numbers from peopleGrade array

let evenGrade = peopleGrade.filter((num) => num % 2 == 0);

console.log(evenGrade);

// Find the first name that starts with 'J' in persons array and log the object

let firstJ = persons.find((obj) => {
  if (obj.name[0] == 'J') {
    return obj;
  }
});

console.log(firstJ);

// Find the first name that starts with 'P' in persons array and log the object

// Find the first name that starts with 'J', grade is greater than 10 and is a female

// Filter all the female from persons array and store in femalePersons array

// Filter all the male from persons array and store in malePersons array

// Find the sum of all grades and store in gradeTotal

let gradeTotal = persons.reduce((acc, cv) => {
  acc = acc + cv.grade;
  return acc;
}, 0);

console.log(gradeTotal);

// Find the average grade

// Find the average grade of male

let averageGradeMale = persons.map((person) => person.sex == 'M')
.reduce((acc, cv) => {
  acc =+ cv.grade;
  return acc;
},0);

console.log(averageGradeMale);

// Find the average grade of female

// Find the highest grade

let highestGrade = persons.reduce((acc, cv) => {
  if (cv.grade > acc) {
    acc = cv.grade;
    return acc;
  }
},0);

console.log(highestGrade);

// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?



// Sort the peopleGrade in descending order

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`

console.log([...peopleName].sort());

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
