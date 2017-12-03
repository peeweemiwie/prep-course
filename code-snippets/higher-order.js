// function forEach(array, action) {
//   for (var i = 0; i < array.length; i++)
//     action(array[i]);
// }

// forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
// // → Wampeter
// // → Foma
// // → Granfalloon

// ///////////////////////

// var total = 0, count = 1;
// range = (startIndex, lastIndex) =>{
//   let newArray = [];
//   for(let i = startIndex; i <= lastIndex; i++){ 
//     newArray.push(i)
//   }
//   return newArray;
// }

// sum = (array) => {
//   let total = 0;
//   array.forEach(function(el){
//     total += el;
//   })
//   return total;
// }
// console.log(sum(range(1, 10)))
// console.log(range(1, 10));

// //////////////////////////

// var numbers = [1, 2, 3, 4, 5], sum = 0;
// forEach(numbers, function(number) {
//   sum += number;
// });
// console.log(sum);

//////////////////////////////

// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

/////////////////////////////

// function greaterThan(n) {
//   return function(m) { 
//     console.log('m', m, 'n', n)
//     return m > n; 
//   };
// }
// var greaterThan10 = greaterThan(11);
// console.log(greaterThan10(10));
// console.log(greaterThan(11)(10));

// function noisy(newFunc) {
//   return function(arg) {
//     console.log("calling with", arg);
//     var val = newFunc(arg);
//     console.log("called with", arg, "- got", val);
//     return val;
//   };
// }
// noisy(Boolean)(0);

//console.log(Boolean(1))

/////////////////////////////////

function unless(test, then) {
  if (!test) then();
}

doif = (test, then) => {
  if(test) then();
}
 
repeat = (times, doSomething) => {
  for(let i = 0; i < times; i++){
    doSomething(i);
  }
}

cl = (elem1, elem2) => {
  console.log(elem1, elem2);
}

// repeat(10, (el) => {
//   unless(el % 2, cl(el))
  
//   cl('?')
// })

// repeat(10, (n) => {
//   unless(n % 2, () => {
//     cl(n, "is even");
//   });
//   doif(n % 2, () => {
//     cl(n, 'is odd');
//   })
// });



/////////////////////////

var cats = [{
  'name': 'Sadie',
  'age': 9,
  'color': 'black and peanut butter',
  'favorite activity': 'eating',
  'favorite toy': 'Mr. Mouse',
  'sound': 'mew',
  'face': 'perfect',
  'fuzziness level': 'off the charts'
}, {
  'name': 'Layla',
  'age': 9,
  'color': 'grey and white and black',
  'favorite activity': 'alone time',
  'favorite toy': 'the scratchy post',
  'sound': 'reowr',
  'face': 'perfect',
  'fuzziness level': 'extreme'
}, {
  'name': 'Mr. Binns',
  'age': 4,
  'color': 'white and black',
  'favorite activity': 'furmination time',
  'favorite toy': 'the jingly feather stick',
  'sound': 'maaaoww maaow MAAOOW',
  'face': 'perfect',
  'fuzziness level': 'unsafe'
}];

cats.forEach(logsARandomFact);

/*
Sadie's sound is mew
Layla's age is 9
Mr. Binns's color is white and black
*/

function logsARandomFact() {
  //TODO
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
