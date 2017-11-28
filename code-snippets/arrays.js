// My Join

// Write a function myJoin that mirrors the behavior of JavaScript's .join() array method. However, myJoin will accept the array to operate on as its first parameter, rather than being invoked as a method on that array.

// Try and mirror the behavior of the native .join() method exactly. Note that if an element is undefined or null it should be converted to the empty string. Do not use the native .join() method in your own implementation.

// myJoin(['hello', undefined, 'world'], ' ')
// // => 'hello world'
// myJoin([2, "be", false])
// // => '2,be,false`

let myJoin = arr => {
  let newStr = '';
  for(let i = 0; i < arr.length; i++){
    let currentElm = arr[i];
    if(currentElm === null || currentElm === undefined) newStr += ' ';
    else newStr += currentElm;
  }
}
myJoin(['hello', undefined, 'world'], ' ')


function myJoin (arr){
  let newStr = '';
  for(let i = 0; i < arr.length; i++){
    let currentElm = arr[i];
    if(currentElm === null || currentElm === undefined) newStr += ' ';
    else newStr += currentElm;
  }
}
myJoin(['hello', undefined, 'world'], ' ')


/////////////////////////////////
// Index Of

// Write a function indexOf that accepts two arguments: an array and an element to search for. The function should return the index of the element if found in the array and -1 if not. Do not use JavaScript built in .indexOf method.

function indexOf(array, searchItem){
  for (var i = 0; i <= array.length; i++){
    let currentItem = array[i];
    if(currentItem === searchItem) {
      return i
    }
  }
  return -1;
}

indexOf([1,2,3], 2)    // => 1
indexOf(["hello","world"], "goodbye")    // => -1

//////////////////////////////////////

// Write a function reverseArray that reverses the elements of an array and returns the reversed array.
function reverseArray(array){
  return array.reverse()
}
reverseArray([1,2,3,4])    // => [4,3,2,1]

//////////////////////////////////////

reverseArray = array =>{
  var reversedArr = [];
  for(var i = array.length - 1; i >= 0; i--){
    var currentElem = array[i];
    reversedArr.push(currentElem)
  }
  return reversedArr;
}
reverseArray([1,2,3,4]) 

///////////////////////////////////////////

var myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]]
];

zooInventory = array => {
  for(var i = 0; i < array.length; i++){
    let currentAnimal = array[i];
    let name = currentAnimal[0];
    let currentAnimalDetails = currentAnimal[1];
    let specie = currentAnimalDetails[0];
    let age = currentAnimalDetails[1];
    console.log(`${name} the ${specie} is ${age}`)
  }
}

zooInventory(myZoo);
// King Kong the gorilla is 42
// Nemo the fish is 5
// Punxsutawney Phil the groundhog is 11


////////////////////////////////

// Write a function that accepts a two-dimensional array and returns a flattened one-dimensional copy of the array.

// Hint: Use the typeof operator or Array.isArray() to test whether an element is an array. If so, use a nested loop to access those values.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion



let newArray = [];
flatten = array => {
  for(var i = 0; i < array.length; i++){
    let currentElem = array[i];
    if(Array.isArray(currentElem)){ 
      flatten(currentElem)
    } else {
      newArray.push(currentElem)
    }
  }
  return newArray;
}

flatten([1,[2,3],4]) 

////////////////////////////////////////

// Make Grid

// Write a function makeGrid that accepts two dimensions and returns a grid with those dimensions. Each "tile" of the grid should be composed of a number representing the column of that "tile".


/* => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
Note: The output may not be appear "square"-like as in the above, but
the structure of the array should match.
*/

makeGrid = (column, row) => {
  let outerArray = [];
  for(let j = 1; j <= row; j++){
    console.log('j: ', j)
    let rowArray = [];
    for(let i = 1; i <= column; i++){
      console.log('i: ', i)
      rowArray.push(i)
    }
    outerArray.push(rowArray)
  }
  return outerArray
}

makeGrid(3,4);


// Bonus: Write a function removeColumns that accepts a grid (two-dimensional array) and number of columns to remove, and returns the new grid.

removeColumns = (array, aNum) =>{
  let aNumToRemove = aNum * -1;
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    let currentRow = array[i];
    currentRow.splice(aNumToRemove);
    newArray.push(currentRow);
  }
  return newArray;
}
let grid = [[1, 2, 3],[1, 2, 3],[1, 2, 3],[1, 2, 3]];
removeColumns(grid, 2);

//----------------------------------------

removeColumns = (array, aNum) =>{
  let aNumToRemove = aNum * -1;
  for(let i = 0; i < array.length; i++){
    let currentRow = array[i];
    currentRow.splice(aNumToRemove);
  }
  return array;
}
let grid = [[1, 2, 3],[1, 2, 3],[1, 2, 3],[1, 2, 3]];
removeColumns(grid, 2);

/* => [[1],
       [1],
       [1],
       [1]]
*/



