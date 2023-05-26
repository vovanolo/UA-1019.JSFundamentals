// task1

const arr = [5, 3, 4, 5, 6, 7, 3];

function compact(array) {
  return Array.from(new Set(array));
}


// task2

function createArray(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }
  
  let arrNew = createArray(2, 9);
  console.log(arrNew);


//task3

const resultArray = [];
function createArray(a, b) {
  for (let i = 1; i <= 5; i++) {
    for (j = 0; j < i - 1 + 1; j++) {
      resultArray.push(i);
    }
  }
  return resultArray;
}


// task4

function randArray(k) { 
    const randomArray = [];
    for (let i = 0; i < k; i++) { 
      randomArray.push(Math.floor(Math.random() * 499) + 1);
    } return randomArray;
  }

// task5

const arrBig = [
    5,
    "Limit",
    12,
    "a",
    "3",
    99,
    2,
    [2, 4, 3, "33", "a", "text"],
    "strong",
    "broun",
  ];
  
  function newArrays(array) {
    const srtArr = [];
    const numArr = [];
  
    const numberArray = array.flat();
  
    for (let i = 0; i < numberArray.length; i++) {
      const el = numberArray[i];
      if (typeof el === "number") {
        numArr.push(el);
      } else if (typeof el === "string") {
        srtArr.push(el);
      }
    }
  
    // console.log(srtArr);
    // console.log(numArr);
    // return [srtArr, numArr];
  }

//   task6
let date = new Date();
let currentHour = date.getHours();

if (currentHour >= 23 || currentHour <= 5) {
  alert("Good night!");
}
else if (currentHour > 5 && currentHour <= 11) {
  alert("Good morning!");
}
else if (currentHour > 11 && currentHour <= 17) {
  alert("Good day!");
}
else if (currentHour > 17 && currentHour < 23) {
  alert("Good evening");
}


switch (true) {
  case (currentHour >= 23 || currentHour <= 5):
    alert("Good night!");
    break;
  case (currentHour > 5 && currentHour <= 11):
    alert("Good morning!");
    break;
  case (currentHour > 11 && currentHour <= 17):
    alert("Good day!");
    break;
  case (currentHour > 17 && currentHour < 23):
    alert("Good evening!");
    break;
}
