if (c > b && b > a) {
    console.log('1');
 }  else {
        console.log('2');
    }

    a<b<c

// task2

let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1);
console.log(typeof(res1))

//////////////////////////////////

let a = 1;
let b = 2;

let res2 = Boolean(a) + String(b);
console.log(res2); //true2
console.log(typeof(res2))

//////////////////////////////////

let c = 1;
let d = 2;

let res3 = Boolean(c) == Boolean(d);
console.log(res3); //true
console.log(typeof(res3))

//////////////////////////////////

let e = 1;
let f = 2;

let res4 = e / String(f);
console.log(res4);
console.log(typeof(res4))

// task3

const isAdult = +prompt('Скільки Вам років?')
if (isAdult >= 18) {
    alert('Ви досягли повнолітнього віку')
} else if (isNaN(isAdult)) {
    alert('Введіть тільки числові значення')
}
else {
    alert('Ви занадто молоді')
}

//task4

function mostFrequent(arr, n) {
 
    let maxcount = 0;
    let maxfreq;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j])
                count++;
        }
 
        if (count > maxcount) {
            maxcount = count;
            maxfreq = arr[i];
        }
    }
    return maxfreq;
}

// let array = [1,2,4]

// mostFrequent(array)

// task5
//а) 
const one = +prompt('Перша сторона трикутника')
const two = +prompt('Друга сторона трикутника')
const three = +prompt('Третя сторона трикутника')
if (isNaN(one || two || three)) {
    alert('Приймаються тільки числові значення')
} else {
    alert('Ви ввели коректні дані')
}

const mul = one * two * three;
console.log(mul)

//b)  Підкажіть, будь-ласка, у чому причина, щось не працює :(  
const v1 = ((one ** 2) + (two ** 2) === (three ** 2));
const v2 = (Math.pow(one,2) + three ** 2 === one ** 2);
const v3 = (one ** 2 + three ** 2 === two ** 2);
alert (v1)
alert (v2)
alert (v3)

if (v1 || v2 || v3) {
    console.log('Це прямокутний трикутник')
}  else {
    console.log('Це не прямокутний трикутник')
}

if ((one ** 2) + (two ** 2) == (three ** 2)) {
    console.log('Це прямокутний трикутник')
}

//task6

function calc(a, b, op) {
    switch (op) {
        case 1: return a - b;
        case 2:  return a * b;
        case 3: return a / b;
        default: return a + b;
    }
}
console.log(calc(3, 4, 2));

// task7

function findUnique(array) {
    return new Set(array).size !== array.length;
}