// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(`hello world length is ${'hello world'.length}`);
console.log(`lorem ipsum length is ${'lorem ipsum'.length}`);
console.log(`javascript is cool length is ${'javascript is cool'.length}`);

/* ------------------------------------------------------------------------------------ */

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

'hello world'.toUpperCase();
'lorem ipsum'.toUpperCase();
'javascript is cool'.toUpperCase();

/* ------------------------------------------------------------------------------------ */

// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

'HELLO WORLD'.toLowerCase();
'LOREM IPSUM'.toLowerCase();
'JAVASCRIPT IS COOL'.toLowerCase();

/* ------------------------------------------------------------------------------------ */

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
str.trim();

/* ------------------------------------------------------------------------------------ */

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const stringToarray = (str) => str.split(' ');

/* ------------------------------------------------------------------------------------ */

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]
// За допомоги map перетворити всі об'єкти в масиві на стрінгові.

let arr = [10,8,-7,55,987,-1011,0,1050,0];
let resultArr = arr.map(el => el.toString());

/* ------------------------------------------------------------------------------------ */

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const sortNums = (nums, direction) => {
    switch (direction) {
        case 'ascending':
            return nums.sort((a,b) => a - b);
        case 'descending':
            return nums.sort((a,b) => b - a);
        default:
            console.log('Choose correct direction!');
    }
}

/* ------------------------------------------------------------------------------------ */

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
coursesAndDurationArray.filter(course => course.monthDuration > 5);
coursesAndDurationArray.map((course, i) => course = {id: i + 1, ...course});

/* ------------------------------------------------------------------------------------ */

// описати колоду карт (від 6 до туза без джокерів)

const cardSuits = ['spade', 'diamond','heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const colors = ['red', 'black'];

let cards = [];

for (const cardSuit of cardSuits) {
    for (const value of values) {
        let card = {};

        card.cardSuit = cardSuit;
        card.value = value;

        (cardSuit === 'spade' || cardSuit === 'clubs')
            ? card.color = colors[1]
            : card.color = colors[0];

        cards.push(card);
    }
}

// - знайти піковий туз
const spadeAce = cards.find(card => (card.cardSuit === 'spade' && card.value === 'ace'));

// - всі шістки
const allSix = cards.filter(card => card.value === '6');

// - всі червоні карти
const allRed = cards.filter(card => card.color === 'red');

// - всі буби
const allDiamonds = cards.filter(card => card.cardSuit === 'diamond');

// - всі трефи від 9 та більше
const allClubsMoreThen9 = cards.filter(card => card.cardSuit === 'clubs');
const club9 = allClubsMoreThen9.findIndex(card => card.value === '9');

allClubsMoreThen9.splice(0, club9);

/* ------------------------------------------------------------------------------------ */

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

const cardsObject = {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}

cards.reduce((acc, card) => {
    switch (card.cardSuit) {
        case 'spade':
            acc.spades.push(card);
            break;

        case 'diamond':
            acc.diamonds.push(card);
            break;

        case 'heart':
            acc.hearts.push(card);
            break;

        default:
            acc.clubs.push(card);
    }

    return acc;
}, cardsObject);

/* ------------------------------------------------------------------------------------ */

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
const coursesArrayWithSass = coursesArray.filter(course=> course.modules.includes('sass'));

// --написати пошук всіх об'єктів, в який в modules є docker
const coursesArrayWithDocker = coursesArray.filter(course=> course.modules.includes('docker'));

/* ------------------------------------------------------------------------------------ */
