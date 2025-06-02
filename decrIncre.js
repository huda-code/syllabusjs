// Increment - Post, Pre
// Pre Increment

// var a = 4
// a = a+1
// a+=1
// ++a
// console.log(++a)
// console.log(a)
// console.log(++a +a + ++a)
// //           5 + 5 + 6
// console.log(a + ++a + ++a) //4 + 5 +6
// console.log(a) //6


// Decrement - Post, Pre
var a = 5 
// a = a-1
// a-=1
// --a
// console.log(--a) //4
// console.log(a) //4
// console.log(--a +a + --a) //(4)3 + 3 + (3)2
// console.log(a + --a + --a) //2 + (2)1 + (1)0
// console.log(a) //

var a=10
// console.log(--a) //(10)9
// console.log(a) //9
// console.log(++a) // (9)10
// console.log(--a - --a + --a +a + ++a + --a) //(10)9-(9)8+(8)7+7+(7)8+(8)7 = 30
// console.log(a - ++a - --a + --a + a) // 7-(7)8-(8)7+(7)6+6 = 4
// console.log(a) //6

// Post increment
// var a=10
// // a++
// console.log(a++) //10(11)
// console.log(a) //11
// console.log(a++ +a + a++) //11(12) + 12 +12(13) = 35
// console.log(a + a++ + a++) //13+13(14)+14(15) = 40
// console.log(a) //15
// Post Decrement -Prints and then updates
// var a=12
// a--
// console.log(a--) //12(11)
// console.log(a) //11
// console.log(a +a-- + a--) //11+11(10)+10(9) = 32
// console.log(a-- + a + a--) //9(8)+8+8(7)=25
// console.log(a-- - a) // 7(6)-6=1
// console.log(a) //6


// var a=13,b=15
// console.log(a--) //a = 13(12)
// console.log(b--) // b = 15(14)
// console.log(a + b-- + a-- -b--) //12+14(13)+12(11)-13(12) = 25; a=11,b=12
// console.log(a-- + b +b-- + a--) //11(10)+12+12(11)+10(9)=45; a=9,b=11
// console.log(a-- - b) // 9(8)-11=-2 ; a=8,b=11
// console.log(a,b) //8,11
//  ----------------------------------------------

var a=20,b=22
console.log(a,b) //20,22
console.log(++a,++b,a++,b++) //(20)21,(22)23,21(22),23(24); a=22,b=24
console.log(++a + b-- + ++a -b++) //(22)23+24(23)+(23)24-23(24)=48;a=24,b=24
console.log(a-- + b + ++a +b-- + a--) //24(23)+24+(23)24+24(23)+24(23)=120;a=23,b=23
console.log(a-- - b+ a++ -b--) // 23(22)-23+22(23)-23(22)=-1; a=23,b=22
console.log(a,b) //23,22



Today's Topic: Pre/Post Increment & Decrement in JavaScript
📍 Estimated time: 1 hour (45 min teaching + 15 min practice)

✅ Learning Objectives
Understand how pre-increment (++a) and post-increment (a++) work

Understand how pre-decrement (--a) and post-decrement (a--) work

Learn how the value changes and prints in expressions

Practice with fun and clear examples

 1. Pre-Increment and Pre-Decrement
Explain: Pre-increment means it is added before using the value.
var a = 4;

a = a + 1;   // a becomes 5
a += 1;      // a becomes 6
++a;         // a becomes 7

console.log(++a); // 8
console.log(a);   // 8
console.log(++a + a + ++a); // 9 + 9 + 10 = 28
console.log(a + ++a + ++a); // 10 + 11 + 12 = 33
console.log(a); // 12

 2. Pre-Decrement
var a = 5;

console.log(--a); // 4
console.log(a);   // 4
console.log(--a + a + --a); // 3 + 3 + 2 = 8
console.log(a + --a + --a); // 2 + 1 + 0 = 3
console.log(a); // 0


 3. Mixed Increments & Decrements
var a = 10;

console.log(--a); // 9
console.log(a);   // 9
console.log(++a); // 10
console.log(--a - --a + --a + a + ++a + --a); // 9 - 8 + 7 + 7 + 8 + 7 = 30
console.log(a - ++a - --a + --a + a); // 7 - 8 - 7 + 6 + 6 = 4
console.log(a); // 6


4. Post-Increment and Post-Decrement
var a = 10;

console.log(a++); // 10 (but becomes 11)
console.log(a);   // 11
console.log(a++ + a + a++); // 11 + 12 + 12 = 35
console.log(a + a++ + a++); // 13 + 13 + 14 = 40
console.log(a); // 15

 5. Post-Decrement with Expressions
var a = 12;

console.log(a--); // 12
console.log(a);   // 11
console.log(a + a-- + a--); // 11 + 11 + 10 = 32
console.log(a-- + a + a--); // 9 + 8 + 8 = 25
console.log(a-- - a);       // 7 - 6 = 1
console.log(a); // 6

 6. Increment-Decrement with Two Variables
var a = 13, b = 15;

console.log(a--); // 13
console.log(b--); // 15
console.log(a + b-- + a-- - b--); // 12 + 14 + 12 - 13 = 25
console.log(a-- + b + b-- + a--); // 11 + 12 + 12 + 10 = 45
console.log(a-- - b); // 9 - 11 = -2
console.log(a, b); // 8, 11

7. Final Challenge (Mix Everything!)
var a = 20, b = 22;

console.log(a, b); // 20 22
console.log(++a, ++b, a++, b++); // 21 23 21 23
console.log(++a + b-- + ++a - b++); // 23 + 23 + 24 - 23 = 47
console.log(a-- + b + ++a + b-- + a--); // 24 + 24 + 24 + 24 + 24 = 120
console.log(a-- - b + a++ - b--); // 23 - 23 + 22 - 23 = -1
console.log(a, b); // 23 22

Add-On Topic (New) – Compound Expression Practice
Introduce expressions like:
var x = 5, y = 10;
var result = ++x + y-- - x++ + ++y; // Predict this with students
Let them predict results before running the code — great for building logic.

 Assignment (Fun Practice)
Predict the output, then run the code to check:
var x = 7, y = 3;
console.log(++x + y-- + x-- + ++y); // ???
console.log(x, y); // Final values?
Bonus:
Make your own 2-variable expression using ++/-- and print the steps.
