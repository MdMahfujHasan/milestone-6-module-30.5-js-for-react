// API fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data))

// JSON
const person = {
    name: 'Rashed',
    age: 25,
    district: 'Dhaka',
    salary: 12500
};

// JSON convert back and forth
const data = (JSON.stringify(person));
console.log(data.name) // error

const dataParsed = JSON.parse(data);
console.log(dataParsed);
// console.log(dataParsed.name);

// local storage
// localStorage.setItem('userId', 1245); // see => Application => Local Storage
const userId = localStorage.getItem('userId');
console.log(userId);

localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
//console.log(storedPerson.age); // error => undefined => because it's not an object, it's an string format of object
const parsedPerson = JSON.parse(storedPerson);
console.log(parsedPerson.age);

const keys = Object.keys(parsedPerson); //here, keys are name and age
console.log(keys);

const values = Object.values(parsedPerson);
console.log(values);