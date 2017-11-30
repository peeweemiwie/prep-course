// Very Odd

// Write a function, veryOdd. The function accepts an array of numbers, allTheNums. It should return a new array that contains only the odd numbers from allTheNums. veryOdd must not mutate allTheNums.

// var allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// var oddNums = veryOdd(allTheNums);

// console.log('oddNums:', oddNums); // [1, 3, 5, 7];
// console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]

Very Odd - Mutant Version!

Write a function, veryOddMutant. The function accepts an array of numbers, allTheNums. The function should mutate allTheNums by replacing every even number in the array with the string 'normie'. veryOddMutant should a count of the number of even numbers it replaced.

var allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
var countRemoved = veryOddMutant(allTheNums);

function veryOddMutant(allTheNums){
  var removed = 0;
  for(var i = 0; i < allTheNums.length; i++){
    var currentItem = allTheNums[i]; 
    if(currentItem % 2 === 0){
      currentItem = 'normie'
      removed += 1;
    }
  }
  return removed;
}

console.log('allTheNums:', allTheNums);
// [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

console.log('countRemoved:', countRemoved);
// 4

///////////////////////////////////////////

Clone Machine

You have a machine that can "clone" animals. Each animal is represented by a simple array: the first element is the animal's name, the second is the animal's species, and the third is an array with the names of all the animal's offspring.

For example, the sheep Dolly would be represented by this array below. In this example, Dolly has no offspring.

var dolly = ["Dolly", "sheep", []];
Write a cloneAnimal function that takes an animal and returns a "clone" of that animal. The clone should be of the same species, but should have no offspring. The clone's name should be the parent's name, with "Clone" appended to the end.

Your cloneAnimal function should also add the clone's name to the parent's offspring array.

var dolly = ["Dolly", "sheep", []];
var dollyClone = cloneAnimal(dolly);

function cloneAnimal(dolly){
  var finalDolly = [];
  var newDolly = dolly.slice();
  console.log(newDolly)
  return finalDolly;
}

// The clone is of same species, with new name and no offspring
console.log(dollyClone)    // ["DollyClone", "sheep", []]

// The parent animal now has an offspring in its array
console.log(dolly)    // ["Dolly", "sheep", ["DollyClone"]]

/////////////////////////////

My Splice

Write a mySplice function that mirrors the behavior of JavaScript's .splice() array method. However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.

Try and mirror the behavior of .splice() as closely as possible, but to start with, assume all arguments will be positive integers. Most importantly, your function should have two observable effects: it should modify the array it receives as an argument and it should return an array containing the deleted elements.

Do not use the native .splice() method in your own implementation.

var myArray = [1,2,3];
function mySplice (myArray, startIndex, numToRemove){
  var finalArray = [];
  for(var i = 0; i <= numToRemove; i++){
    var currentElem = myArray[i + startIndex];
    finalArray.push(currentElem);
    myArray.slice(i + startIndex, i + 1)
  }
  return finalArray;
}

console.log("returned elements: ", mySplice(myArray, 1, 1))    // [2]
console.log(myArray)    // [1,3]