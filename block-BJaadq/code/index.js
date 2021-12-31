// NOTE: You can not use reduce methods to solve this exercise

/*
- 1. Write a function called `countAllPeople` which counts the total number of people in `got` variable defined in `data.js` file.

- 2. Write a function called `peopleByHouses` which counts the total number of people in different houses in the `got` variable defined in `data.js` file.

- 3. Write a function called `everyone` which returns a array of names of all the people in `got` variable.

- 4. Write a function called `nameWithS` which returns a array of names of all the people in `got` variable whose name includes `s` or `S`.

- 5. Write a function called `nameWithA` which returns a array of names of all the people in `got` variable whose name includes `a` or `A`.

- 6. Write a function called `surnameWithS` which returns a array of names of all the people in `got` variable whoes surname is starting with `S`(capital s).

- 7. Write a function called `surnameWithA` which returns a array of names of all the people in `got` variable whoes surname is starting with `A`(capital a).

- 8. Write a function called `peopleNameOfAllHouses` which returns an object with the key of the name of house and value will be all the people in the house in an array.
*/

function everyone() {
  let allNames = [];
  got.houses.forEach(house => {
    let peopleName = house.people.map(p => p.name);
    allNames = allNames.concat(peopleName);
  });
  return allNames;
}

function nameWithS() {
  let result = [];
  result = result.concat(everyone.filter((person) => person.startsWith('s') || person.startsWith('S')));
  return result;
}

function surnameWithS() {
  let result = [];
  function lastName(name) {
    nameSplit = name.split(' ');
    return nameSplit[1];
  } 
  result = result.concat(everyone.filter((person) => lastName(person)))
  return result;
}

// {stark: [eddard, benajmin], lannister: [tywin, tyrion]}

function peopleNameOfAllHouses() {
  let result = {};
  got.houses.forEach((house) => {
    let names = [];
    house.people.forEach((p) => {
      names.push(p.name);
    });
    result[house.name] = names;
  });
  return result;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
/*
function countAllPeople() {
  let totalCount = 0;
  got.houses.forEach(house => {
    totalCount += house.people.length;
  });
  return totalCount;
}

function peopleByHouses() {
  let totalCount = {};
  got.houses.forEach((house) => {
    totalCount[house.name] = house.people.length;
  });
  return totalCount;
}

function everyone() {
  let allNames = [];
  got.houses.forEach((house) => {
    let peopleName = house.people.map((person) => person.name);
    allNames = allNames.concat(peopleName);
  });
  return allNames;
}

function nameWithS() {
  let nameS = [];
  let allPeople = everyone();
  return allPeople.filter((name) => name.toLowerCase().includes('s'));
}

function nameWithA() {
  let allPeople = everyone();
  return allPeople.filter((name) => name.toLowerCase().includes('a'));
}

function surnameWithS() {
  let allPeople = everyone();
  return allPeople.filter((name) => name.split(' ')[1].toLowerCase().includes('s'));
}

function surnameWithA() {
  let allPeople = everyone();
  return allPeople.filter((name) => name.split(' ')[1].toLowerCase().includes('a'));
}

function peopleNameOfAllHouses() {
  let final = {};
  got.houses.forEach((house) =>{
    final[house.name] = house.people.map((p) => p.name);
  });
  return final;
}
*/

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
