 logical Operators

// true - Success - pass - Active
// true - 1 - value

// false - fail - inactive
// false - 0 - empty

// logical AND - && (Find First False)
// a   b   r
// f1  f2  f1
// f   t   f
// t   f   f
// t1  t2  t2

// console.log(3 && 4)  //4
// console.log(30 && 0) //0
// console.log(0 && '') //0
// console.log(false && 4) //false
// console.log(false && 0.0) //false
// console.log('0' && '0') //'0'
// console.log('false' && 'false1') //false1

// console.log('0' && '0.0' && false && 0.0) // false                  

// console.log('true' && 'false' && true  && 1 && 0.1)

// console.log('0' && 'zero' && 1.0  && '0' )
        //                              


// logical OR - || - Find First True
// a   b   r
// f1  f2  f2
// f   t   t
// t   f   t
// t1  t2  t1
// console.log('90' || "0" || '' || 0)

// console.log('' || "t " || 'false' || 0.0)
//                

// console.log('' || "" || '1' || '23 ' || '234')
//
// console.log('01' && '' || 0.0 && ('') && {} || '0.0' && 'O' || [])
// //           t      f      f       t     t       t       t     t

// console.log('hey' && 'false' || false && 00 || '0.0' && 'zero' || 1)
//            t         t          f     f       t         t      t



// console.log( [] || (''))


// logical NOT - !
// console.log(!'false') //f
// console.log(!0.0) //t
// console.log(! [0]) //f

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

