function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const body = document.getElementsByTagName("body")[0];

function colorChange(color) {
  body.style.background = color;
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;

  body.style.background = color;
}

const input = document.getElementById("input");

function check() {
  const value = input.value;

  const reverse = reverseString(value);

  if (value === reverse) {
    alert("Palindrom detected");
  } else {
    alert("no palindrom detected");
  }
}

function reverseString(str) {
  return str.split("").reverse().join("");
}
