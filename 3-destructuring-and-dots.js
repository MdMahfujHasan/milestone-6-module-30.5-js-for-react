/// array destructuring
const numbers = [3, 4];
// const x = numbers[0];
// const y = numbers[1]
// const [x, y] = [3, 4];
const [x, y] = numbers;
console.log(x, y);

function boxify(num){
    return [num, num + 1];
}
const boxed = boxify(2);
console.log(boxed);
const [box1, box2] = boxify(3);
console.log(box1, box2);

// object destructuring
const person = {name1: 'Rahim', age1: 25};
console.log(person.name1, person.age1);
console.log(person.name1, person.age1);
console.log(person.name1, person.age1);

const {name2, age2} = {id: 1, name2: 'Karim', age2:24, money: 100}
console.log(name2, age2);

// create object shortcut
const a = 5;
const b = 6;
const obj1 = {a: a, b: b};
const obj2 = {a, b};
console.log(obj1);
console.log(obj2);

// new array using three dots
// numbers.push(5);
const newNumbers = [...numbers, 5];
console.log(newNumbers);