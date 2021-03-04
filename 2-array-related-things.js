const numbers = [2, 3, 4, 5, 6];
const friends = ['Rahim', 'Karim', 'Joshim'];
const products = [
    {id: 1, name: 'laptop', price: 500},
    {id: 2, name: 'mobile', price: 100},
    {id: 3, name: 'watch', price: 20},
    {id: 4, name: 'tablet', price: 50},
];

// map
const names = products.map(product => product.name);
const prices = products.map(pd => pd.price);
const prices2 = products.map(pd => {
    return pd.price;
});
console.log(names);
console.log(prices);
console.log(prices2);

// forEach
products.forEach(product => console.log(product.id));

// filter
const chipper = products.filter(pd => pd.price < 80);
console.log(chipper);

const remaining = products.filter(pd => pd.id != 3);
console.log(remaining);

const remaining2 = products.filter(pd => pd.price < 80 && pd.id != 3);
console.log(remaining2);

// find
const doesExist = products.find(pd => pd.name === 'watch');
console.log(doesExist);

// push
const fruits = ['Mango', 'Banana', 'Watermelon'];
fruits.push('Jackfruit');
console.log(fruits);

// pop
const nums = [2, 3, 4];
nums.pop(4);
console.log(nums);

// length
const nums2 = [5, 6, 7, 8, 9];
const length = nums2.length;
console.log(length);

// indexOf
const myName = 'Md. Mahfuj Hasan';
const indexOf = myName.indexOf('Mahfuj');
console.log(indexOf);

// reduce

// includes