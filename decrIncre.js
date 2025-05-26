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
