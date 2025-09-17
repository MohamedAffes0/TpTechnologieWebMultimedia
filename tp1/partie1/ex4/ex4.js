const table1 = [1, 2, 3];
const table2 = [4, 5, 6];

const tableConcatene = [...table1, ...table2];

console.log(tableConcatene); // [1, 2, 3, 4, 5, 6]

const person = {
    name: "MedAffes",
    age: 20
};

const personClone = {...person, age: 30};

console.log(personClone); // {name: "MedAffes", age: 30}