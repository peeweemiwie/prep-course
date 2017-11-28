// /*
//     Note: For all problems, do not:
//         1. Edit the line initializing the test message (eg. the first line below)
//         2. Edit any console.log line
// */

// var testOneMessage = "test failing";

// function testOne() {
//   // Test One Restrictions: Do not declare any new variable with the var keyword
//     // Do not reassign testOneMessage
//   console.log("Test one: ", testOneMessage);
// }

// // Run test one
// testOne("test succeeding");


// var testTwoMessage = "test failing";

// function testTwo() {
//   // Test Two Restrictions: Do not change any code in the body of this function
//   helperFunc();
//   console.log("Test two: ", testTwoMessage)
// }

// function helperFunc(a) {
//   a = "test succeeding";
//   return a;
// }

// // Run test two
// testTwo()

// var testThreeMessage = "test failing";

// function testThree(testThreeMessage) {
//   // Test Three Restrictions: Do not change any code in the body of this funciton
//   // Type only a single character
//   if (testThreeMessage) {
//     testThreeMessage = "test succeeding";
//   }

//   function logMessage() {
//     console.log("Test three: ", testThreeMessage || "test failing");
//   }

//   logMessage();
// }

// // Run test test three
// testThree()


// var testFourMessage = "test succeeding";

// function testFour(msg) {
//   // Test Four Restrictions: Delete only a single character anywhere in the body of this function
//   // Do not make any other changes

//   function innerFunc(msg) {
//     msg = msg

//     function doubleInner(msg) {
//       testFourMessage = msg;
//       return testFourMessage;
//     }

//     testFourMessage = doubleInner("test failing")
//   }

//   innerFunc(testFourMessage);

//   msg = testFourMessage;
//   console.log("Test four: ", testFourMessage)
// }

// // Run test four
// testFour("test failing")



var testOneMessage = "test failing";
function testOne(testOneMessage) {
  console.log("Test one: ", testOneMessage);
}
testOne("test succeeding");

////////////////////////

var testTwoMessage = "test failing";
function testTwo() {
  helperFunc();
  console.log("Test two: ", testTwoMessage)
}
function helperFunc() {
  testTwoMessage = "test succeeding";
}  
testTwo()

////////////////////////

function indexOf(arr, elm){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === elm){
      return i;
    } 
  }
  return -1;
}
indexOf([1,2,3], 2)    // => 1
indexOf(["hello","world"], "goodbye")    // => -1

////////////////////////

var myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]]
];


function zooInventory(arr){
for(var i = 0; i < arr.length; i++){
  var animalName = arr[i][0];
  var animalSubArr = arr[i][1];
  var animalSpecies = animalSubArr[0];
  var animalAge = animalSubArr[1];
  console.log(`${animalName} the ${animalSpecies} ${animalAge}`)
}
}
zooInventory(myZoo);
// King Kong the gorilla is 42
// Nemo the fish is 5
// Punxsutawney Phil the groundhog is 11

function flatten(arr){
  var flatArray = [];
  for(var i )
}


///////////////////

function makeGrid(column, row){
  var newGrid = [];
  var newRow = [];
  for(var i = 1; i < column+1; i++){
    newRow.push(i); 
    
  } 
  for(var j = 0; j < row; j++){ 
      newGrid.push(newRow)
    }
  console.log(newGrid)
}
makeGrid(3,4);

///////////////////












