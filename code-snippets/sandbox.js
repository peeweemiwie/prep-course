let arrOriginal = [1,2,3,4,5,6,7,8,9];

generateRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min) + 1;
}

repeateTill = (times, callback, elem) => {
  for(let i = 0; i < times; i++){
    callback(elem)
  }
}

function shuffle(array) {
  let newArr = array.slice();
  let arrayLen = newArr.length;
  let currElem = null;
  let ranNum = null;
  while (arrayLen) {
    ranNum = Math.floor(Math.random() * arrayLen--);
    currElem = newArr[arrayLen];
    newArr[arrayLen] = newArr[ranNum];
    newArr[ranNum] = currElem;
  }
  return newArr;
}
let shuffledArray = shuffle(arrOriginal);
console.log(shuffledArray);





//////////////////

//let returnArray = arrOriginal.splice();

// returnArray = arrOriginal.filter(function(elem) {
//   return  arrCube.indexOf(elem) === -1 
//           && arrRow.indexOf(elem) === -1 
//           && arrColumn.indexOf(elem) === -1
//           && arrRow.indexOf(elem) === -1;
// });
//console.log(returnArray)




// let test = []
// for(let i = 0; i < 30; i++){
//   test.push(genarateRandomNum(0, 9));
// }
// console.log(test)

// let repeateTest = repeateTill(3, function(){
//   console.log(generateRandomNum(1,9));
// });
// repeateTill;


// let arrCube = [1,2,3,4,5];
// let arrRow = [1,2,3];
// let arrColumn = [2,3,4];