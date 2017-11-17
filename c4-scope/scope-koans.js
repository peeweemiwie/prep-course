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