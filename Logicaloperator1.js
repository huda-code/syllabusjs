JavaScript Logical Operators (For Kids – Age 10–12)
What Are Logical Operators?
Logical operators are used to combine or flip true/false values (called Booleans).

Think of them like tools that help you make decisions based on more than one rule.

// ......................
  Logical operators help you ask more than one question.
Ternary operator helps you choose what to say or do.
// ....................
Logical operators let you combine or invert Boolean expressions. They’re fundamental when you need to check multiple conditions or flip a Boolean value.
1. Overview
Logical operators let you combine or invert Boolean expressions. They’re fundamental when you need to check multiple conditions or flip a Boolean value.

. && (AND)
Description:
- Evaluates to true only if both operands are truthy.
- Stops and returns the first falsy operand (short-circuit); otherwise returns the last truthy operand.

Truth Table
A	B	A && B
true	true	true
true	false	false
false	true	false
false	false	false

Examples
let isMember = true;
let hasPaid  = false;

if (isMember && hasPaid) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}
// → "Access denied."

// Short-circuit: returns first falsy
const username = "" && "fallback";
console.log(username);
// → ""

// Both must be truthy to proceed
function submit(order) {
  if (order && order.items && order.items.length > 0) {
    console.log("Processing order…");
  } else {
    console.log("No valid order found.");
  }
}


3. || (OR)
Description:
- Evaluates to true if either operand is truthy.
- Stops and returns the first truthy operand; otherwise returns the last falsy operand.
- Widely used for default‐value fallbacks.
Truth Table
A	B	A || B
true	true	true
true	false	true
false	true	true
false	false	false

Examples
let isAdmin   = false;
let isModerator = true;

if (isAdmin || isModerator) {
  console.log("You may edit this post.");
}
// → "You may edit this post."

// Default fallback
function greet(name) {
  const displayName = name || "Guest";
  console.log(Hello, ${displayName}!);
}
greet("");      // Hello, Guest!
greet("Sara");  // Hello, Sara!

// Chain multiple fallbacks
const config = { timeout: 0 };
const timeout = config.timeout || 5000;
console.log(timeout);
// → 5000




4. ! (NOT)
Description:
- Inverts the Boolean value of its operand.
- Useful for checking “not” conditions.
Truth Table
A	!A
true	false
false	true
let isOpen = false;
if (!isOpen) {
  console.log("Currently closed.");
}
// → "Currently closed."

// Double NOT to coerce to Boolean
const value  = "hello";
const isValid = !!value;
console.log(isValid);
// → true

// Combining with other logic
let hasToken = false;
let isLoggedIn = true;

if (isLoggedIn && !hasToken) {
  console.log("Session active but no token found.");
}
// → "Session active but no token found."

// ..........................
  Here’s a kid-friendly comparison:

Feature	Logical Operator	Ternary Operator
Use for	- Combining conditions	- Choosing between two values
Returns	- A true or false value (Boolean)	- One of two values based on a condition

Example	- if (a && b) - 	let result = age > 18 ? "Adult" : "Kid"
Common use	- Check if multiple things are true	- Pick what to do or show based on a condition

// ...................

🗣️ Say: "Logical operators help us make decisions using yes/no or true/false answers."

There are 3 main logical operators:

&& (AND)

|| (OR)

! (NOT)

Step 1: && — AND Operator
🧠 Rule: Only true if both things are true.
let isMember = true;
let hasPaid = false;

if (isMember && hasPaid) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}
// → Access denied.
Say: “You must be a member and you must pay to enter.”

 Try With Both True

isMember = true;
hasPaid = true;

if (isMember && hasPaid) {
  console.log("Access granted.");
}
// → Access granted.

Short-Circuit Example
const username = "" && "fallback";
console.log("Username:", username); // → ""


Real-World Example
function submit(order) {
  if (order && order.items && order.items.length > 0) {
    console.log("Processing order...");
  } else {
    console.log("No valid order found.");
  }
}

submit({ items: ["apple"] }); // → Processing order...
submit(null);                 // → No valid order found.

Step 2: || — OR Operator
let isAdmin = false;
let isModerator = true;

if (isAdmin || isModerator) {
  console.log("You may edit this post.");
}
// → You may edit this post.
 Fallback Default
function greet(name) {
  const displayName = name || "Guest";
  console.log(`Hello, ${displayName}!`);
}

greet("");       // → Hello, Guest!
greet("Sara");   // → Hello, Sara!

OR Chain
const config = { timeout: 0 };
const timeout = config.timeout || 5000;
console.log("Timeout value:", timeout); // → 5000

Step 3: ! — NOT Operator
🧠 Rule: Flip it! true becomes false, and false becomes true.
let isOpen = false;

if (!isOpen) {
  console.log("Currently closed.");
}
// → Currently closed
 Double NOT (Convert to Boolean)

const value = "hello";
const isValid = !!value;
console.log("Is valid?", isValid); // → true

Combine with Other Logic
let hasToken = false;
let isLoggedIn = true;

if (isLoggedIn && !hasToken) {
  console.log("Session active but no token found.");
}
// → Session active but no token found.

Fun Assignment for Kids
Let students write code for the following situations using logical operators.

 Snack Time
If it's after school and you're hungry, print "Eat a snack!"
Else print "No snack now."
let afterSchool = true;
let isHungry = true;

if (afterSchool && isHungry) {
  console.log("Eat a snack!");
} else {
  console.log("No snack now.");
}

2. 🎮 Gaming Rules
If it's weekend OR you finished your homework, print "You can play games."
let isWeekend = false;
let finishedHomework = true;

if (isWeekend || finishedHomework) {
  console.log("You can play games.");
} else {
  console.log("No games now.");
}

 🔕 Quiet Time
If isSleeping is true, then print "Shhh!" using NOT operator.
let isSleeping = true;

if (isSleeping) {
  console.log("Shhh!");
}

 Bonus Challenge
Write a ternary using logical operator:
let isRainy = false;
let hasUmbrella = true;

const canGoOutside = isRainy && !hasUmbrella ? "Stay in!" : "Go out!";
console.log("Decision:", canGoOutside);
