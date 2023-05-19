// console.log("hello everyone!");
// коментар

// console.log("hello everyone!");
// console.log("hello world!"); 


// var let const 

// let message = "hello world!";

// message = "something";

// const message = "hello world!";

// message = "something";

// console.log(message);

// let message;

// message = "hello world!";

// let one = "hello";
// let two = 25;

// one = two;

// console.log(one);

// const one = 0.1;
// const two = 0.2;

// const one = "hello";
// const two = "world";

// console.log(one + " " + two);

// let user = {
//     name: "ivan",
//     surname: "ivanenko",
//     age: 25,
//     info: null,
//     newInfo: undefined
// };

// console.log(user);

// let x = "hello";

// x = 25;

// let info = true;

// console.log(typeof(info));

// alert("hello world!");

// let name  = prompt("Please enter your name");

// console.log(name);

// let ok = confirm("Are you ok?");

// console.log(ok);

// let name  = prompt("Please enter your name");

// alert("Welcome " + name);
// alert(`Welcome ${name}`);



// let a = 2;

// a = a + 1;

// a = ++a;


// 2 ** 2;

// Math.pow(2, 3)

// Math.sqrt(2)

// let a = "hello";
// let b = "world";

// let a = 5;
// let b = "2";

// console.log(5 + "4" + 5);

// let a = 10;

// a*=10;


// console.log(10 < 50);
// console.log(10 != 11);

// console.log(11 == 1);

// console.log("a" > "A");

// true - 1, "sfsf"
// false - 0, ""

// console.log(0 == null);

// let age = prompt("Please enter your age: ");
// let check = age>=18 && age > 100 && age >1000;

// let result = (check) ? "you are adult" : "you are notAdult";

// console.log(result);

// result = "you are notAdult"

// const users = ["Ivan", "Petro", "Vasya"];

// push
// users.splice(1, 1, "Kolya");

// console.log(users);
// users.push("Pedro", "Kolya");
// users.pop();

// console.log(users);

// users = 5;

// console.log(users.length); // кількість елементів в масиві
// users[1] = "Dmytro";
// users[3] = "Maria";

// users[7] = "John";


// console.log(users[5]);

// console.log(users[1]);

// if, else, if else, switch

// let age = +prompt("How old are you?");

// if(age >= 18){
//     console.log("you are adult");
// } else{
//     console.log("you are notadult");
// }

// if(age >= 18 && age <=30){
//     console.log("you are normal age");
// }else if(age >= 31 && age <= 60){
//     console.log("you are nice age");
// }else if(age < 0){
//     console.log("Wrong value");
// } else{
//     console.log("you are notadult");
// }

// switch(true){
//     case age >= 18 && age <=30:
//         console.log("you are 18");
//         break;
//     case 20:
//         console.log("you are 20");    
//         break;
// }



// loops

// while, for, for of, for in

// while
// let i = 0;

// while(i <= 5){
//     console.log(i); // 0 1 2 3 4 5
//     i++; // i = 6
// }

// for

// for(let i = 5; i >= 0; i--){
//     console.log(i);
// }


// const users = ["Ivan", "Petro", "Vasya"];
// // users[0];
// // console

// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
// }

// for of
// const users = ["Ivan", "Petro", "Vasya"];
// const something = "hello"

// for(let element of users){
//     console.log(element);
// }

// for in

// const users = ["Ivan", "Petro", "Vasya"];


// for(let index in users){
//     console.log(index);
// }

// break, continue


// const numbers = [1,2,3,4,5,6,7,8,8,8];

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
//     if(numbers[i] === 5){
//         break;
//     }
// }

// Math.min
// Math.max

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 !== 0){
//         continue;
//     }
//     console.log(numbers[i]);  
// }

// let repeatEight = 0;
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] === 8){
//         repeatEight++;
//     } 
// }
// console.log(repeatEight);


// functions

// console.log("hello");

// function sayHello(){
//     console.log("hello");
// }


// sayHello();

// function adding(a,b){
//     console.log(a + b);
// }

// adding(10, 20);


// function adding(a,b){
//    return a + b;     
// }

// // adding(10,20);
// console.log(adding(10,20));


// function multiplication(a,b){
//     return a * b;
// }



// function multiplication(){
//     // console.log(arguments);
//     let result = 1;
//     for(let i = 0; i < arguments.length; i++){
//         result *= arguments[i];
//     }
//     console.log(result);

// }

// multiplication(1,2,3,4,5,6,7);


// let x = 1;

// function something(){
//     let x = "hello";
//     console.log(x);
// }
// something();
// console.log(x);


// function declaration
// sayHello();

// function sayHello(){
//     console.log("hello");
// }

// function expression
// hello();

// const hello = function(){
//     console.log("hello");
// }

// методи перебору масиву
// const users = ["Ivan", "Petro", "Vasya"];

// map
// let newUsers = users.map(function(element, index){
//     // console.log(element);
//         return "2" + element;
//     // console.log(index);
// })
// console.log(newUsers);
// sort(function(a,b) return b - a;)



