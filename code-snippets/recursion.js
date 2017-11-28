var factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
factorial(5);

var factorial = n => {
  if (n === 2) return 1;
  return n * factorial(n - 1);
}
factorial(5);

let originalArr = [];
let hashArr = aNum =>{ 
  originalArr.push('#');
  let newArr = originalArr.join('');
  console.log(newArr);
  if(originalArr.length > aNum) return;
  return hashArr(aNum - 1);
}
hashArr(15);


function countSheep(number) {
  if (number === 0) {
    console.log("Zzzzzz");
  } else {
	console.log("Another sheep jumps over the fence.");
	var newNumber = number - 1;
	countSheep(newNumber);
  }
}
countSheep(10);

let countSheep = number => {
  if (number === 0) {
    console.log('zzz');
  }
  else {
    var newNum = number - 1;
    var sheepNum = number - newNum + 1;
    console.log('Another sheep jumps over the fence.');
    countSheep(newNum)
  }
}
countSheep(8);

///////////////////////////

function guessNumber(number) {
  guess = prompt("Guess a number between 1 and 100");
  // Convert their guess to a number using +
  guess = +guess;

  if (number === guess) {
	  return console.log("You got it! The number was " + number);
  } else {
    return guessNumber(number);
  }
}

guessNumber(3)

//-----------------------------

let guessNumber = number => {
  let guess = prompt("Guess a number between 1 and 100");
  Math.abs(guess);
  if (number === guess) {
	  return console.log("You got it! The number was " + number);
  } else {
    return guessNumber(number);
  }
}
guessNumber(3)
