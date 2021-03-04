const money = 150;
let food;
if (money > 100){
    food = 'biryani';
}
else {
    food = 'vaat';
}

// ternary
// condition ? true value : false value
let food2 = money > 100 ? 'biryani' : 'vaat';

let cssClass;
const active = true;
if (active === true){
    cssClass = 'active';
}
else{
    cssClass = 'inactive';
}
// const cssClass = active === true ? 'active' : 'inactive';
const cssClass2 = active ? 'active' : 'inactive';
// if active === true, displayUser(), if active === false, hideUser()
// function call shortcut alternative
active ? displayUser() : hideUser();

// if active === true, displayUser(), no else
active && displayUser();
// if active === false, hideUser(), no else
active && hideUser();

active = true;
const x = active && 5
console.log(x); // output 5

active = false;
const x = active && 5
console.log(x); // output false

active = true;
const x = active || 5
console.log(x); // output true

active = false;
const x = active || 5
console.log(x); // output 5

// string to number
const num = '5';
console.log(num); // output is string 5

const num = +'5';
console.log(num); // output is number 5

// number to string
const num = 5 + '';
console.log(num); // couput is string 5

// default parameter
function add(num1, num2 = 5){ // default num2 value if not given
    // function add(num1, num2) or it can be written like this...
    num2 = num2 || 5;
    return num1 + num2;
}
add(4);