const inputFName = document.querySelector("#fname");
const inputLName = document.querySelector("#lname");
const inputCard = document.querySelector("#inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.querySelector("#inputCVV");
const pCard = document.querySelector("#pCard");
const pDate = document.querySelector("#pDate");
const pCVV = document.querySelector("#pCVV");

const maskName = "####################";
const maskNumber = "####-####-####-####";
const maskDate = "##/##";
const maskCVV = "###";

let cardFName = [];
let cardLName = [];
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];
let name = [];

inputFName.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  e.preventDefault();
  handleName(maskName, e.key, cardFName);
  inputFName.value = cardFName.join("");
});

inputLName.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  e.preventDefault();
  handleName(maskName, e.key, cardLName);
  inputLName.value = cardLName.join("");
});

inputCard.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  e.preventDefault();
  handleInput(maskNumber, e.key, cardNumber);
  inputCard.value = cardNumber.join("");
  pCard.textContent = inputCard.value;
});

inputDate.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  e.preventDefault();
  handleDate(maskDate, e.key, dateNumber);
  inputDate.value = dateNumber.join("");
  pDate.textContent = inputDate.value;
});

inputCVV.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  e.preventDefault();
  handleInput(maskCVV, e.key, cvvNumber);
  inputCVV.value = cvvNumber.join("");
  pCVV.textContent = inputCVV.value;
});

function handleInput(mask, key, arr) {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  if (key === "Backspace" && arr.length > 0) {
    arr.pop();
    return;
  }

  if (numbers.includes(key) && arr.length + 1 <= mask.length) {
    if (mask[arr.length] === "-" || mask[arr.length] === "/") {
      arr.push(mask[arr.length], key);
    } else {
      arr.push(key);
    }
  }
}

function handleDate(mask, key, arr) {
  if (arr.length + 1 === 1) {
    let numbers = ["0", "1"];

    if (numbers.includes(key)) {
      arr.push(key);
    }
  } else if (arr.length + 1 === 2) {
    if (arr[0] == 0) {
      let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      if (numbers.includes(key)) {
        arr.push(key);
      }
    } else {
      let numbers = ["0", "1", "2"];
      if (numbers.includes(key)) {
        arr.push(key);
      }
    }
  } else if (arr.length + 1 === 3) {
    let numbers = ["2"];
    if (numbers.includes(key)) {
      arr.push("/", key);
    }
  } else if (arr.length + 1 === 5) {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (numbers.includes(key)) {
      arr.push(key);
    }
  }

  if (key === "Backspace" && arr.length > 0) {
    arr.pop();
    return;
  }
}

function handleName(mask, key, arr) {
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  if (key === "Backspace" && arr.length > 0) {
    arr.pop();
    return;
  }

  if (letters.includes(key) && arr.length + 1 <= mask.length) {
    if (mask[arr.length] === "-" || mask[arr.length] === "/") {
      arr.push(mask[arr.length], key);
    } else {
      arr.push(key);
    }
  }
  paragraph();
}

function paragraph() {
  pName.textContent = cardFName.join("") + " " + cardLName.join("");
}

function paragraphNumbers(parId, arr) {
  parId.textContent = arr.join("");
}
