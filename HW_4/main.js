// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleSquare (a, b) {
    return (a * b);
}

/* ------------------------------------------------------------------------------------ */
// створити функцію яка обчислює та повертає площу кола з радіусом r

function circleSquare (r) {
    return (Math.PI * r**2);
}

/* ------------------------------------------------------------------------------------ */
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderSquare(h, r) {
    return (2 * Math.PI * r * (h + r));
}

/* ------------------------------------------------------------------------------------ */
// створити функцію яка приймає масив та виводить кожен його елемент

function logArrayElements (arr) {
    for (const element of arr) {
        console.log(element);
    }
}

/* ------------------------------------------------------------------------------------ */
// створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph (text) {
    document.write(`<p>${text}</p>`);
}

/* ------------------------------------------------------------------------------------ */
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList (text) {
    document.write('<ul>');
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

/* ------------------------------------------------------------------------------------ */
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createListWithItemsValue (text, value) {
    document.write('<ul>');
    for (let i = 0; i < value; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

/* ------------------------------------------------------------------------------------ */
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createListFromArray (arr) {
    document.write('<ul>');
    for (const element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
}

/* ------------------------------------------------------------------------------------ */
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function createBlockForObjectValues (arr) {
    for (const item of arr) {
        document.write(`<div>
          <p>id: ${item.id}</p>
          <p>name: ${item.name}</p>
          <p>age: ${item.age}</p>
        </div>`)
    }
}

/* ------------------------------------------------------------------------------------ */
// створити функцію яка повертає найменьше число з масиву
// Варіант 1:

function minArrayValue (array) {
    let minValue = Infinity;

    for (const value of array) {
        (value < minValue) && (minValue = value);
    }

    return minValue;
}

// Варіант 2:

function minArrValue (arr) {
    return Math.min(...arr);
}

/* ------------------------------------------------------------------------------------ */
// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sum (arr) {
    let sum = 0;

    for (const element of arr) {
        sum += element;
    }

    return sum;
}

/* ------------------------------------------------------------------------------------ */
// створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap (arr,index1,index2) {
    let value1 = arr[index1];
    let value2 = arr[index2]

    arr[index1] = value2;
    arr[index2] = value1;

    return arr;
}

/* ------------------------------------------------------------------------------------ */
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange (sumUAH,currencyValues,exchangeCurrency) {
    let result = 0;

    for (const obj of currencyValues) {
        (obj.currency === exchangeCurrency) && (result = sumUAH / obj.value);
    }

    return result;
}
