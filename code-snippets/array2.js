// Write a function that accepts an array of numbers and returns an array of arrays. The first array in the return array should include all even numbers. The second array in the return array should include all odd numbers.

// Write two solutions for this problem. In the first, use only array methods from the following list:

// .pop()
// .push()
// .shift()
// .unshift()

// In the second, avoid using those methods and incorporate .slice() (you may use the .length property in both).

evenOdd = array =>{
  let evenArray = [];
  let oddArray = [];
  for(var i = 0; i < array.length; i++){
    let currentElem = array[i];
    if(currentElem % 2 === 0){
      evenArray.push(currentElem)
    } else {
      oddArray.push(currentElem)
    }
  }
  return [evenArray, oddArray];
}

var myArray = evenOdd([1,2,3,4,5,6]);
console.log(myArray)
// [ [ 2 ,4, 6 ], [ 1, 3, 5 ] ]

evenOdd = array =>{
  let evenArray = [];
  let oddArray = [];
  for(var i = 0; i < array.length; i++){
    let currentElem = array[i];
    if(currentElem % 2 === 0){
      evenArray.concat(array.slice(i, i+1))
    } else {
      oddArray.concat(array.slice(i, i+1))
    }
  }
  return [evenArray, oddArray];
}
var myArray = evenOdd([1,2,3,4,5,6]);
console.log(myArray)

///////////////////////////////

myUnshift = (array, elem) => {
  let newArray = [elem];
  newArray = newArray.concat(array);
  return newArray;
}

myUnshift([1,2,3], 0)    // => [0,1,2,3]

////////////////////////////////

// My Join

// Write a function myJoin that mirrors the behavior of JavaScript's .join() array method. However, myJoin will accept the array to operate on as its first parameter, rather than being invoked as a method on that array.

// Try and mirror the behavior of the native .join() method exactly. Note that if an element is undefined or null it should be converted to the empty string. Do not use the native .join() method in your own implementation.

myJoin = (array, separator) => {
  let newString = '';
  for(let i = 0; i < array.length; i++){
    let currentElem = array[i];
    if(currentElem === null || currentElem === undefined) {
      newString += '';
    } else {
      newString += currentElem;
    }
    if(i !== array.length - 1) {
      if(separator){
        newString += separator;
      } else {
        newString += ', '
      }
    }
  }
  return newString;
}

myJoin(['hello', undefined, 'world'], ' ')
// => 'hello world'
myJoin([2, "be", false])
// => '2,be,false`


myJoin = (array, separator) => {
  let newString = '';
  if (separator === undefined) {
    separator = ', ';
  }
  for(let i = 0; i < array.length; i++){
    var currentElem = array[i];
    if( i !== 0){
      newString += separator;
    }
    if(currentElem === null || currentElem === undefined) {
      newString += '';
    } else {
      newString += currentElem;
    }
  } 
  return newString;
}

myJoin(['hello', undefined, 'world'], ' ')
// => 'hello world'
myJoin([2, "be", false])
// => '2,be,false`


/////////////////////////////////


myLastIndexOf = (array, searchElem, fromIndex) => {  
  let arrLen = array.length;
  let arrLenToSearch = null;
  if(fromIndex === undefined || fromIndex > arrLen - 1) {
    arrLenToSearch = arrLen - 1;
  } else if (fromIndex > 0 && fromIndex <= arrLen - 1) {
    arrLenToSearch = fromIndex;
  } else if (fromIndex <= 0) {
    arrLenToSearch = (arrLen - 1) + fromIndex;
  }

  for(let i = arrLenToSearch; i >= 0; i--) {
    let currentElem = array[i]
    if(currentElem === searchElem) {
      return i;
    }
  }
  return -1;
}
//myLastIndexOf([1,2,1], 1, 1) // 0
myLastIndexOf([1,2,3,4,1,5,6], 1, -2) //4

////////////////////////////////////

// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]


mySlice = (array, begin, end) => {
  let newArray = [];
  let arrayLen = array.length;
  if(begin === undefined) {
    begin = 0;
  } else if (begin < 0) {
    begin = arrayLen + begin;
  }
  if(end === undefined) {
    end = arrayLen;
  } else if (end < 0) {
    end = arrayLen + end;
  }
  for(let i = begin; i < end; i++){
    let currentElem = array[i];
    newArray.push(currentElem);
  }
  return newArray;
}

// mySlice([1,2,3])    // => [1,2,3]
// mySlice([1,2,3], 1)    // => [2,3]
// mySlice([1,2,3], 1, 2)    // => [2]
// mySlice([1,2,3], -1)    // => [3]


// Rotate Array

// Write a function rotate that accepts an array and a number n and returns a new array with the elements "rotated" n spaces.

// If n is greater than 0 it should rotate the array to the right. If n is less than 0 it should rotate the array to the left. If n is 0, then it should return the array unchanged.

rotate = (array, aNum) => {
  let newArray = [];
  let aNumToReplace = null;
  if(aNum === 0) {
    newArray = array;
  } else {
    if(aNum > 0){
      aNumToReplace = array.pop();
    } else {
      aNumToReplace = array.shift();
    }
    newArray = array;
    newArray.push(aNumToReplace);
  }
  return newArray;
}

var myArray = [1, 2, 3, 4, 5]
rotate(myArray, 1)     // => [5, 1, 2, 3, 4]
rotate(myArray, -1)    // => [2, 3, 4, 5, 1]
rotate(myArray, 0)    // => [1, 2, 3, 4, 5]