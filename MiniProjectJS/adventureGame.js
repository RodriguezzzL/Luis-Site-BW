const prompt = require("prompt-sync")();
const name = prompt("what is your name? ");

console.log("Hello", name, "welcome to our game!");

const shouldWePlay = prompt("Do you want to play? ");

if (shouldWePlay.toLowerCase() === "yes") {
  console.log("Welcome! The game will now start!");

  //game logic

  const leftOrRight = prompt("You enter a maze, do you want to go left or right? ");
  if (leftOrRight.toLowerCase === "left") {
    console.log("You go left and see and see a bridge...");
    const cross = prompt("Do you want to cross the bridge? ");
    if (cross.toLowerCase === "yes" || "y") {
      console.log("You cross but the bridge broke and you fell. You lose!");
    } else {
      console.log("Good choice... You win");
    }
  } else {
    console.log("you go  right and fall off a cliff..");
  }
} else if (shouldWePlay.toLowerCase() === "no") {
  console.log("OK, We will play next time");
} else {
  console.log("Invalid input..");
}
