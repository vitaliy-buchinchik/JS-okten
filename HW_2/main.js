// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 'hello', true, false, 4, 7, 'world', undefined, null, '!!!'];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

/*------------------------------------------------------------------------------------------*/

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let reactBook = {
    title: 'React',
    pageCount: 200,
    genre: 'detective'
}

let angularBook = {
    title: 'Angular',
    pageCount: 173,
    genre: 'comedy'
}

let vueBook = {
    title: 'Vue',
    pageCount: 215,
    genre: 'history'
}

/*------------------------------------------------------------------------------------------*/

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: 'Book1',
    pageCount: 76,
    genre: 'history',
    authors: [{
        name: 'Petya',
        age: 44
    }, {
        name: 'Vasya',
        age: 56
    }]
}

let book2 = {
    title: 'Book2',
    pageCount: 115,
    genre: 'drama',
    authors: [{
        name: 'Ira',
        age: 32
    }, {
        name: 'Sveta',
        age: 33
    }]
}

let book3 = {
    title: 'Book3',
    pageCount: 97,
    genre: 'comedy',
    authors: [{
        name: 'Ihor',
        age: 65
    }, {
        name: 'Vova',
        age: 61
    }]
}

/*------------------------------------------------------------------------------------------*/

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let usersArray = [{
    name: 'Max',
    username: 'Burito',
    password: 'qwerty'
}, {
    name: 'Ira',
    username: 'Irishka',
    password: 'asdfg123'
}, {
    name: 'Katya',
    username: 'Kotenok',
    password: 'catcatcat'
}, {
    name: 'Vetal',
    username: 'Traktorist',
    password: 'zxcvb'
}, {
    name: 'Kostya',
    username: 'Teatral123',
    password: '1122334455'
}, {
    name: 'Vitya',
    username: 'Mazhor',
    password: 'needmoremoney'
}, {
    name: 'Artem',
    username: 'pro100Artem',
    password: 'olala777'
}, {
    name: 'Olya',
    username: 'Kvitochka',
    password: '1flower1'
}, {
    name: 'Vasya',
    username: 'Strongman',
    password: 'poweriscool'
}, {
    name: 'Alex',
    username: 'Babnik',
    password: '1234567890'
}];

console.log(usersArray[0].password);
console.log(usersArray[1].password);
console.log(usersArray[2].password);
console.log(usersArray[3].password);
console.log(usersArray[4].password);
console.log(usersArray[5].password);
console.log(usersArray[6].password);
console.log(usersArray[7].password);
console.log(usersArray[8].password);
console.log(usersArray[9].password);

/*------------------------------------------------------------------------------------------*/

// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x;

if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

/* --------- Перевірив при значеннях змінної 1, 0, -3. Все відпрацьовує правильно --------- */
/*------------------------------------------------------------------------------------------*/

// Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 7;

if (time <= 15) {
    console.log('Перша четверть')
} else if (time > 15 && time <= 30) {
    console.log('Друга четверть')
} else if (time > 30 && time <= 45) {
    console.log('Третя четверть')
} else {
    console.log('Четверта четверть')
}

/*------------------------------------------------------------------------------------------*/

// У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 12;

if (day <= 10) {
    console.log('Перша декада');
} else if (day > 10 && day <= 20) {
    console.log('Друга декада');
} else {
    console.log('Третя декада');
}

/*------------------------------------------------------------------------------------------*/

// Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNumber = +prompt('Введіть порядковий номер дня тижня');

switch (dayNumber) {
    case 1:
        alert('Monday');
        break;
    case 2:
        alert('Tuesday');
        break;
    case 3:
        alert('Wednesday');
        break;
    case 4:
        alert('Thursday');
        break;
    case 5:
        alert('Friday');
        break;
    case 6:
        alert('Saturday');
        break;
    case 7:
        alert('Sunday');
        break;
    default:
        alert('Не існує дня тижня з таким порядковим номером');
}

/*------------------------------------------------------------------------------------------*/

// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох.
// Також потрібно врахувати коли введені рівні числа.

let firstNumber = +prompt('Введіть перше число');
let secondNumber = +prompt('Введіть друге число');

firstNumber >= secondNumber && alert(`Максимальне із введених чисел - число ${firstNumber}`);
firstNumber < secondNumber && alert(`Максимальне із введених чисел - число ${secondNumber}`);

/*------------------------------------------------------------------------------------------*/

// Є змінна y, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код, який за допомоги  оператора || буде присвоювати змінній y значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let y = 'default';
y = y || 'default';

/*------------------------------------------------------------------------------------------*/

// З файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray[0].monthDuration > 5 && console.log('Супер');
coursesAndDurationArray[1].monthDuration > 5 && console.log('Супер');
coursesAndDurationArray[2].monthDuration > 5 && console.log('Супер');
coursesAndDurationArray[3].monthDuration > 5 && console.log('Супер');
coursesAndDurationArray[4].monthDuration > 5 && console.log('Супер');
coursesAndDurationArray[5].monthDuration > 5 && console.log('Супер');

/*------------------------------------------------------------------------------------------*/
