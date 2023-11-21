/* ------------------------------ Task 1 ------------------------------ */
console.log('---------- Task 1 ----------')
// String variables:

let strvar1 = 'hello';
let strvar2 = 'owu';
let strvar3 = 'com';
let strvar4 = 'ua';

console.log(strvar1);
console.log(strvar2);
console.log(strvar3);
console.log(strvar4);

// Number variables:

let numvar1 = 1;
let numvar2 = 10;
let numvar3 = -999;
let numvar4 = 123;
let numvar5 = 3.14;
let numvar6 = 2.7;
let numvar7 = 16;

console.log(numvar1);
console.log(numvar2);
console.log(numvar3);
console.log(numvar4);
console.log(numvar5);
console.log(numvar6);
console.log(numvar7);

// Boolean variables

let boolvar1 = true;
let boolvar2 = false;

console.log(boolvar1);
console.log(boolvar2);

/* ------------------------------ Task 2 ------------------------------ */
console.log('---------- Task 2 ----------');

let firstName = 'Віталій';
let middleName = 'Васильович';
let lastName = 'Бучинчик';

let fullName = `${lastName} ${firstName} ${middleName}`;
console.log(fullName);

/* ------------------------------ Task 3 ------------------------------ */
console.log('---------- Task 3 ----------');

let a = 100;
let b = '100';
let c = true;

console.log(`Type of variable a is ${typeof  a}`);
console.log(`Type of variable b is ${typeof  b}`);
console.log(`Type of variable c is ${typeof  c}`);

/* ------------------------------ Task 4 ------------------------------ */
console.log('---------- Additional task ----------');

let userFirstName = prompt('Ваше ім`я', 'Михайло');
let userMiddleName = prompt('По-Батькові', 'Михайлович');
let userAge = prompt('Вік', '44');

let userPersonalInfo = `${userFirstName} ${userMiddleName}, ${userAge}`;

console.log(userPersonalInfo);
