// Primitive Datatypes
// Number
// String
// Boolean

// Composite datatypes
// Array
// object
// function


// undefined


// String
// var a = 'iamastring'
// var a = 'i am a string'
// var a = "i am a string"
// var a = 'i am a string'
// var a = new String('i am also a string')
// console.log(a,'\n', typeof a)
// "hi i'am a "joker""
// var a = "hi i am a 'joker'"
// var a = 'hi i am a "joker"'

// ESCAPE CHARACTER - \
// var a = "hi i\'m a \"joker\""
// console.log(a)
// i'm



// var a="Najeeb"
// var b='smart'

// console.log(a + ' is not '+b+' because he is sleepy')
// console.log(a ,'is not',b,'because he is sleepy')
// console.log(`${a} is not ${b} because he is sleepy`)


var b='smart'
// Indexing
// console.log(b[0])
// console.log(b[1])
// console.log(b[2])
// console.log(b[3])
// console.log(b[-4])

// Slice
// console.log(b.slice(0))
// console.log(b.slice(1))
// console.log(b.slice(0,1))
// console.log(b.slice(-2))
// console.log(b.slice(-2,-4))

var a = 'smart'
// console.log(a.indexOf('s'))
// console.log(a.indexOf('m'))
// console.log(a.indexOf('a'))
// console.log(a.indexOf('r'))
console.log(a.indexOf('3'))
console.log(a.length)


// comparision of var, let , const
// Hoisting

// var

// a = 3

// var a;
// var a=3;
// a=4;

// var a=3;
// var a=4;
// console.log(a)

// var a=3
// console.log(a)
// {
//     console.log(a)
// }


// var a=3
// console.log(a)
// {    
//     var a=4
//     console.log(a)
// }

// var a=3
// console.log(a)
// {    
//     var a=4
//     console.log(a)
//     a = 5
// }
// console.log(a)

// By default initialization is var
// var is global
// Redeclaring is possible
// Redefining is possible

// let

// let a;
// a=6


// let a=7;
// a=8;
// console.log(a)


// let a;
// let a=8;
// cannot be redeclared as let
// console.log(a)


// let a=7;
// let a=8;
// error because cannot be redeclared as let
// console.log(a)

// let a=3
// console.log(a)
// {
//     console.log(a)
// }

// let a=3
// console.log(a)
// { 
//     let a=4
//     console.log(a)
// }
// console.log(a)


// let a=3
// console.log(a)
// { 
//     a=4
//     console.log(a)
// }
// a=6
// console.log(a)

// let is global
// Redeclaring is not possible
// Redefining is possible

// let a=3
// console.log(a)
// { 
//     let a=4
//     console.log(a)
// }
// a=6
// console.log(a)


// let a=3
// console.log(a)
// { 
//     let a=4
//     console.log(a)
// }
// let a=6
// console.log(a)


// const

// const a=3;
// console.log(a)

// const a;
// a=4

// const a=3;
// const a=5;

// var a=4;
// const a=3;

// a=4;
// const a=3;
// console.log(a)

// let a=4;
// const a=3;
// console.log(a)

// const a=4
// console.log(a)
// {   const a=7
//     console.log(a)
// }
// console.log(a)

// const a=4
// console.log(a)
// {   let a=7
//     console.log(a)
// }
// // var a=8;
// console.log(a)


// var a = 8;
// {
//     var a=0;
//     a=90
//     {
//         const a=9;
//         console.log(a)
//     }
//     console.log(a)
// }
// console.log(a)


// let a = 8;
// {
//     const a=0;
//     // a=90
//     {
//         const a=9;
//         console.log(a)
//     }
//     console.log(a)
// }
// console.log(a)

// var a = 8
// {
//     console.log(a)
//     {
//         console.log(b)
//         const b = 9
//         // console.log(a)
//     }
//     console.log(a)
//     let a =99
// }
// console.log(a)

// Arrays
// let a=['a','b','c','d']
// console.log(a, typeof a)
// console.log(a.length)

// Indexing
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[0,1])
// console.log(a[0,3])

// console.log(a.slice())
// console.log(a.slice(2))

// console.log(a.slice(0,2))

// let a="['a','b','c','d','e','f']"
// console.log(a.slice(1,5))

// let a=['a',['b','c'],['d','e','f']]
// console.log(a.length)
// b = a[1]
// console.log(a[1])
// console.log(b)
// console.log(b[1])

// console.log(a[1][1])

// let a=['a',['b','c'],['dell','eat','f']]
// b =a[2][0]
// console.log(a[2][0][2])
// console.log(b)
// console.log(a.reverse())

a = [1,2,3,4]

// a.push(7)
// a.push(6)
// a.push(5)
// a.push([7,8,9])
// a.push(7,8,9)
// a.pop(2,3)
// a.pop(3)
// a.pop(3)
// a.push(6)
// a.push(5)

// a = [1,2,3,4]
// console.log(a)
// a.unshift(0)
// console.log(a)
// a.shift(0)
// console.log(a)


// a = [1,2,3,4,5,6,7]
// a.splice(0)
// a.splice(1)
// a.splice(2)
// a.splice(3)
// a = a.slice(1,4)
// console.log(a)
// a = "hi i AM "
a = "hi, i, AM, HELLO "

// a .splice(1,3)
// console.log(a.split(' '))
console.log(a.split(','))

// var a = {
//     1:'hi',
//     2:'hello',
//     3:'hey'
// }

// console.log(a, typeof a)
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])

// var a = {
//     'a':'hi',
//     'b':'hello',
//     'c':'hey'
// }

// console.log(a['a'])
// console.log(a['b'])
// console.log(a['c'])

// console.log(a.a)
// console.log(a.b)
// console.log(a.c)

var abc = {
    a: [9, 99, 999],
    b: [1, 2, 3, 4, 5],
    c: ["abc", { a: 11, b: 12 }]
}

// console.log(abc.c)
// console.log(abc['c'])

console.log(abc.c[1].a)
