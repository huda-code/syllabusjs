Step 1: Start with a Real-Life Question
Say: "If you are hungry, will you eat or wait?"

let isHungry = true;
let action = isHungry ? "Eat" : "Wait";
console.log("Hungry:", isHungry);
console.log("Action:", action); // → Eat

Try changing isHungry = false; and show them the result.

isHungry = false;
action = isHungry ? "Eat" : "Wait";
console.log("Hungry:", isHungry);
console.log("Action:", action); // → Wait

 Step 2: Explain the Syntax
// Syntax
// condition ? doThisIfTrue : doThisIfFalse;

const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log("Age:", age);
console.log("Can Vote?", canVote); // → Yes

Try with a smaller age:

const age2 = 12;
const canVote2 = age2 >= 18 ? "Yes" : "No";
console.log("Age:", age2);
console.log("Can Vote?", canVote2); // → No


Step 3: Show in Template Literals
🗣️ Say: "We can even use ternary inside a sentence!"

const items = 0;
console.log(`You have ${items > 0 ? items : "no"} items in your cart.`); // → You have no items in your cart.

const moreItems = 3;
console.log(`You have ${moreItems > 0 ? moreItems : "no"} items in your cart.`); // → You have 3 items in your cart.

Step 4: Make a Function with Ternary
function greet(name) {
  return `Hello, ${name ? name : "Guest"}!`;
}

console.log(greet("Ali")); // → Hello, Ali!
console.log(greet(""));    // → Hello, Guest!

 Step 5: Show a Bad Example (Too Complex!)
🗣️ Say: "This works, but is hard to read. Use if/else if it gets too long."
const score = 75;

const grade = score >= 90
  ? "A"
  : score >= 80
    ? "B"
    : score >= 70
      ? "C"
      : "F";

console.log("Score:", score);
console.log("Grade:", grade); // → C

Step 6: Show Boolean Assignment
const isOnline = true;
const status = isOnline ? true : false;
console.log("Is Online?", isOnline);
console.log("Status:", status); // → true

Fun Assignment for Kids
Tell them to write their own ternary examples based on these:

🚦 Activity 1: Light Color
const light = "green";
const action = light === "green" ? "Go" : "Stop";
console.log("Light is:", light);
console.log("Action:", action);
Change it to "red" and ask: “Now what happens?”

Activity 2: Jacket Reminder
const temperature = 5;
const message = temperature < 10 ? "Wear a jacket!" : "You're good!";
console.log("Temperature:", temperature);
console.log(message);
Try temperature = 20;

 Activity 3: Do You Have a Pet?
const hasPet = false;
const msg = hasPet ? "You're lucky!" : "Maybe get one someday!";
console.log("Do you have a pet?", hasPet);
console.log(msg);

Bonus Challenge (Interactive)
Ask kids to change values and guess the output before running the code!
const favColor = "blue";
const reaction = favColor === "blue" ? "Blue is awesome!" : "Nice color!";
console.log("Favorite color:", favColor);
console.log("Reaction:", reaction);


