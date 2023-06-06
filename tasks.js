//task1
 // const parentEl = document.getElementById("list");
        // const firstEl = parentEl.childNodes[0].innerHTML;
        // const lastEl = parentEl.childNodes[4].innerHTML;
        // const secondtEl = parentEl.childNodes[1].innerHTML;
        // const fourthEl = parentEl.childNodes[3].innerHTML;
        // const thirdtEl = parentEl.childNodes[2].innerHTML;

        // const firstEl = document.getElementById("list").firstChild.innerHTML;
        // const lastEl = document.getElementById("list").lastChild.innerHTML;
        // const secondtEl = document.getElementById("list").firstChild.nextSibling.innerHTML;
        // const fourthEl = document.getElementById("list").lastChild.previousSibling.innerHTML;
        // const thirdtEl = document.getElementById("list").firstChild.nextSibling.nextSibling.innerHTML;

        // alert(firstEl);
        // alert(lastEl);
        // alert(secondtEl);
        // alert(fourthEl);
        // alert(thirdtEl);


// task2

// document.body.children[0].style.backgroundColor = "lightgreen";
        // document.getElementById("myDiv").children[0].style.fontWeight = "700";
        // document.getElementById("myDiv").children[1].style.color = "red";
        // document.getElementById("myDiv").children[2].style.textDecoration = "underline";
        // document.getElementById("myDiv").children[3].style.fontStyle = "italic";
        // document.getElementById("myList").style.listStyle = "none";
        // document.getElementById("myList").style.display = "flex";
        // document.getElementsByTagName("span")[0].style.display = "none";


// task3

// const x = 100;
//         document.body.innerHTML = 
//         `<main class="mainClass check item">
//           <div id="myDiv">${x}
//               <p>First paragraph</p>           
//           </div>
//          </main>`;

// task4

// const fullName = document.querySelector('[data-form="ПІБ"]');
// const phoneInput = document.querySelector('[data-form="Номер телефону"]');
// const birthdayInput = document.querySelector('[data-form="Дата народження"]');
// const emailInput = document.querySelector('[data-form="Електронна пошта"]');

// const btn = document.querySelector(".btn");
// const outBlock = document.querySelector(".out");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();


//   const fullNameValue = fullName.value;
//   const phoneValue = phoneInput.value;
//   const birthdayValue = birthdayInput.value;
//   const emailValue = emailInput.value;

//   outBlock.textContent = `
//   ПІБ: ${fullNameValue},
//   Номер телефону: ${phoneValue},
//   Дата народження: ${birthdayValue},
//   Електронна пошта: ${emailValue}`;

//   fullName.value = "";
//   phoneInput.value = "";
//   birthdayInput.value = "";
//   emailInput.value = "";
// });


// task5

// const circle = document.querySelectorAll(".circle");
// let circleValue;

// const newCircle = Array.from(circle).map((item) => {
//   circleValue = item.getAttribute("data-anim");
//   item.classList.add(circleValue);
//   return circleValue;
// });

// circle.forEach((item) => {
//   const animation = item.classList.contains(circleValue);
//   console.log(`Animation applied: ${animation}`);
// });

// task6

// let price = 189.99;
//У перші й змінній тримуються всі елементи з класом "color", які представляють кнопки кольорів. 
//У другому рядку отримується елемент <h1>, який представляє елемент ціни товару.
// const colorButtons = document.querySelectorAll(".color");
// const priceElement = document.querySelector(".price h1");
//Функція оновлення ціни товару
// function updatePrice(newPrice) {
//     priceElement.textContent = newPrice.toFixed(2);
// }
// // Додавання обробників подій для кнопок кольорів
// colorButtons.forEach((button) => {
//     button.addEventListener('click', function() {
//       const selectedColor = this.getAttribute('color');
//       // Ваш код для визначення нової ціни товару на основі вибраного кольору
//       if (selectedColor === 'blue') {
//         price = 189.99; // Нова ціна для кольору "blue"
//       } else if (selectedColor === 'red') {
//         price = 199.99; // Нова ціна для кольору "red"
//       } else if (selectedColor === 'green') {
//         price = 209.99; // Нова ціна для кольору "green"
//       } else if (selectedColor === 'orange') {
//         price = 219.99; // Нова ціна для кольору "orange"
//       } else if (selectedColor === 'black') {
//         price = 229.99; // Нова ціна для кольору "black"
//       }
  
//       // Оновлення ціни товару
//       updatePrice(price);
//     });
//   });