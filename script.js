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
    alert("No palindrom detected");
  }

  input.value = "";
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const quotes = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It does not matter how slowly you go as long as you do not stop.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "The purpose of our lives is to be happy.",
  "Get busy living or get busy dying.",
  "You only live once, but if you do it right, once is enough.",
  "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  while (true) {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIndex)) continue;

    const quote = quotes[randomIndex];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIndex);
    break;
  }
}

let secondsElapsed = 0;
let minutesElapsed = 0;
let interval = null;

const time = document.getElementById("time");

function padStart(value) {
  return String(value).padStart(2, "0");
}

function timer() {
  secondsElapsed++;
  setTime();
}
function setTime() {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}
function startClock() {
  if (interval) stopClock();
  interval = setInterval(timer, 1000);
}

function stopClock() {
  clearInterval(interval);
}

function resetClock() {
  stopClock();
  secondsElapsed = 0;
  setTime();
}
