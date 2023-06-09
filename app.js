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



// filter

// let numbers = [1,2,3,4,6,7,7,7,8,8,9,10,11];

// let filteredNumbers = numbers.filter(function(element, index){
//     return element !== 7;
// })

// console.log(filteredNumbers);

// let numbers = [1,2,3,4,6,7,7,7,8,8,9,10,11];

// let sum = 0;

// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }

// console.log(sum);

// let sum = numbers.reduce(function(sum, element,index){
//     return index % 2 === 0 ? sum + element : sum;
// }, 0)

// console.log(sum);


// Помилки


// синтаксичні

// console.log(;

// Рантайм помилки(Референс помилки)

// goodbye();
// setTimeout(() =>{
// console.log(a);
// },2000);
// let a = "hello";

// Логічні

// console.log(2 + 1);


// Лайфхак

// let x  =  2 + 2;
// console.log(x);
// let z = x +1;
// console.log(z);


//  try catch

// try{
//     console.log("im inside try section");
//     goodbye();
//     console.log("im after error");
// }catch(error){
//     console.log("im inside catch section");
// }

// try{
//     // let numbers = [1,2,3,4,6,7,7,7,8,8,9,10,11];
//     console.log("im inside try section");
//     goodbye();
//     bye();
//     console.log("im after error");
// }catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);

// }

// console.log(numbers);

// new Error("Wrong data");
// throw new Error("Wrong data");
// class NumberError extends Error{
//     constructor(message){
//         super(message);
//         this.name = "NumberError";
//         this.message = message;
//     }
// }






// function fun(){
//     let number = prompt("Enter a number");
//     if(number > 40){
//         throw new NumberError("Number is > 40");
//     }
// }

// try{
//     fun();

// }catch(error){
//     console.log(error.name);
// }finally{
//     console.log("thats all")
// }


// Класи && Обєкти


// 
// const user = {
//     key: value
// }


// const user = {
//     name: "Volodymyr",
//     age: 200,
//     friends: ["Vova", "Ivan", "Petro"],
//     wife: {
//         secondName: "Vira",
//         age:200,
//     }
// }


// console.log(user);
// console.log(user.friends[2]);

// let keyName = "friends";
// let keyName = "friends";

// console.log(user[keyName]);

// console.log(user.keyName);

// user.name = "Ivan";
// user.city = "Lviv";
// user.friends.push("Pavlo")

// console.log(user.wife.name);


// const user = {
//     name: "Volodymyr",
//     age: 200,
//     friends: ["Vova", "Ivan", "Petro"],
//     wife: {
//         secondName: "Vira",
//         age:200,
//     },
//     showName(){
//         console.log(this.name);
//     }
// }

// user.showName();

// delete user.wife;

// console.log(user);


// const user = {
//     name: "Volodymyr",
//     age:200,
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// Object.entries

// Створення обєкту

// new Object()

// Використання класів

// ООП - обєктно орієнтовне програмування

// 

// class User {
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }

//     showName(){
//         console.log(this.name);
//     }
// }

// const user1 = new User("Ivan", 3000);
// const user2 = new User("Petro", 1000);

// console.log(user1.showName());
// console.log(user2.showName());
// user2.showName();


// class User {
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }

//     static PI = 3.14;

//     // static showName(){
//     //     console.log(this.name);
//     // }

//     // calculation(){
//     //     console.log(2 + PI);
//     // }
// }




// const user1 = new User("Ivan", 3000);

// console.log(user1.PI);
// console.log(User.PI);



// Наслідування, Інкапсуляція, Поліморфізм


// Наслідування


// class People {
//     constructor(name, age){
//         this._name = name;
//         this.age = age;
//     }

//     // value = 23; public data
//     #value = 23;
//     get name(){
//         return this._name;
//     }

//     set name(value){
//         if(typeof value === 'string'){
//             this._name = value;
//         }

//     }
//     set value(newValue){
//         this.#value = newValue;
//     }


//     talk(){
//         console.log("i can talk like People");
//     }
// }

// class Student extends People {
//     constructor(name, course){
//         super(name);
//         this.course = course;
//     }

//     talk(){
//         super.talk();
//         console.log("i can talk like Student");
//     }


//     lerning(){
//         console.log("lerning");
//     }
// }

// const student1 = new Student("Vasyl","js");
// console.log(student1);
// const people1 = new People("Ivan", 40);
// people1.name = "Vasyl";
// people1.name;
// console.log(people1.value);
// console.log(student1.lerning());
// student1.talk();
// student1.name = "Vasyl";
// getter setter

// let title = document.querySelector(".title");
// let title = document.getElementsByTagName("h1");


// console.log(title);

// console.log(document.querySelector(".box").childNodes);

// console.log(document.querySelector(".box").children[0]);
// console.log(document.querySelector(".box").children[0]);
// console.log(document.querySelector(".box").firstChild);


// console.log(document.querySelector(".box").children[0].nextElementSibling);


// let title = document.querySelector(".title");

// console.log(title.innerHTML);

// let box = document.querySelector(".box");
// let rozmitka = "<h1>hello</h1>"

// box.innerHTML = rozmitka;

// console.log(box.innerHTML);
// innerHTML, innerText, textContent

// outerHtml

// let box = document.querySelector(".box");

// let name = "Volodymyr";

// box.outerHTML = `
//     <div>
//         <h1>hello ${name}</h1>
//     </div>

// `;

// console.log(box.outerHTML);

// let box = document.querySelector(".box");

// console.log(box.tagName);

// console.log(box.className);
// box.className = "newBox";
// box.id = "box1";

// clasList

// box.classList.add("newBox");
// box.classList.toggle("newBox", true);

// let box = document.querySelector(".box");

// box.setAttribute("src", "newBox");

// let div = document.createElement("div");
// div.innerHTML = "hello world";
// div.className = "newBoxBox";

// box.append(div);
// box.prepend(div);
// box.appendChild(div);


// console.log(div);

// let title = document.querySelector(".title");

// title.classList.add("newStyle");

// title.style.color = "green";
// title.style.backgroundColor = "black";

// const allWorkers = [];

// class Worker {
//     #fullName;
//     #dayRate;
//     #workingDays;
    // #experience = 23;
  
//     constructor(fullName, dayRate, workingDays, experience) {
//       this.#fullName = fullName;
//       this.#dayRate = dayRate;
//       this.#workingDays = workingDays;
//       this.#experience = experience;
//       allWorkers.push(this);
//     }
// }

// const worker1 = new Worker();

// allWorkers.push(worker1);

// let newWindow = window.open("https://www.google.com", "Google", "width=800, height=400, top=200, left=150");

// newWindow.close();

// newWindow.moveTo(400,400)

// newWindow.resizeTo()


// function clickHandler(){
//     console.log("it works from js");
// }

// const title = document.querySelector('.title');


// title.onclick = function(){
//     console.log("it works again");
// }

// title.addEventListener("click",function(){
//     console.log("added event listener");
// })

// function clickHandler(){
//     console.log("it works from js");
// }

// title.addEventListener("click", clickHandler());

// title.addEventListener("click",function(event){
//     // console.log(event.target);
//     event.target.style.color = "green";
// })

// const btn = document.querySelector('.btn');
// const inp = document.querySelector('.inp');

// btn.addEventListener("click",function(){
//     title.style.backgroundColor = "red";
// });

// btn.addEventListener("click", function(){
//     console.log(inp.value);
//     inp.value = "";
// })

// const loginForm = document.querySelector('.loginForm');
// const name = document.querySelector("#name");
// const password = document.querySelector("#password");


// loginForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log(`Your login is ${loginForm.elements["login"]} and password is ${loginForm.elements["password"]}`);
// })

// setTimeout(function(){
//     console.log("im here after 3 seconds");
// }, 3000);
// console.log("string 224.567".match(/\d+\.\d+/));
// "sfsf".test(//)
// function upperCase(str) {
//     if (str.test(/^[A-Z]/)) {
//       return "String starts with uppercase character";
//     } else {
//       return "String does not start with uppercase character";
//     }
//   }
// document.querySelector(".btn").addEventListener("click", function(event){
//     console.log(event);
// })

// $(".btn")
$(function(){

    // $(".btn").on("click", function(){
    //     console.log("click from jquery");
    // })

    // $(".btn").css("color", "green");
    // let $btn = $(".btn");
    // $btn.css("color", "green");

//     $.ajax({
//         url: "https://jsonplaceholder.typicode.com/users",
//         dataType: "json",
//         success: function(listOfUsers){
//             // $.each(listOfUsers, function
//             // console.log(listOfUsers);
//             $.each(listOfUsers, function(index, user){
//                 console.log(user.company.name);
//             })
//         },
//         error: function(error){
//             console.log(error);
//         }
//     })


// })