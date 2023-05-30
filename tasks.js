// task 1
function sumSliceArray(arr, first, second) {
  try {
    if (typeof first !== "number" || typeof second !== "number") {
      throw new TypeError("Wrong data type! Arguments should be only numbers.");
    } else if (first > arr.length || second > arr.length) {
      throw new RangeError(
        "Numbers from arguments are bigger then array legth"
      );
    } else {
      console.log(arr[first] + arr[second]);
    }
  } catch (error) {
    console.log(error.stack);
  }
}

sumSliceArray([1, 2, 3, 4, 5], "aq", 3);



// task2
try {
  function checkAge() {
    const userName = prompt("Please enter your name:");
    const userAgeData = prompt("Please enter your age:");
    const userAge = parseInt(userAgeData);
    const userStatus = prompt(
      "Please enter your status (admin, moderator or user):"
    );
    if (isNaN(userAge)) {
      throw new TypeError(
        "Invalid age. You entered not a number in age field!"
      );
    } else if (userName === "" || userAge === 0 || userStatus === "") {
      throw new Error("The field is empty! Please enter necessary information");
    } else if (
      userStatus !== "admin" &&
      userStatus !== "moderator" &&
      userStatus !== "user"
    ) {
      throw new EvalError(
        "Invalid status. Please enter valid status (admin, moderator or user)!"
      );
    } else if (userAge < 18 || userAge > 70) {
      throw new RangeError("Sorry, your age is out of range");
    } else {
      alert("You can continue watching Netflix");
    }
  }
  checkAge();
} catch (error) {
  alert(error.stack);
}



// task3
function calcRectangleArea(width, height) {
  try {
    if (typeof width !== "number" || typeof height !== "number") {
      throw new TypeError("Wrong data type! Arguments should be only numbers.");
    } else {
      console.log(width * height);
    }
  } catch (error) {
    console.log(error.stack);
  }
}

calcRectangleArea(2, "a");

// task4
class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
    this.message = message;
  }
}
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function showMonthName(month) {
  try {
    if (month > 12 || month < 1) {
      throw new MonthException("Incorrect month number");
    } else if (typeof month !== "number") {
      throw new MonthException("Incorrect provided data type");
    } else {
      console.log(months[month - 1]);
    }
  } catch (error) {
    console.log(error.stack);
  }
}

showMonthName(3);

// task5
function showUser(id) {
  if (id < 0) {
      throw new Error('ID must not be negative: ' + id);
  }
  return { id }; 
}

function showUsers(ids) {
  let result = [];
  ids.forEach(function (id) {
      try {
          let person = showUser(id);
          result.push(person);
      } catch (exception) {
          console.log(exception.message);
      }
  });
  return result;
}
showUsers([7, -12, 44, 22]);