cl = el => {
  console.log(el)
}

let sudokuGrid = [];
let arrColumn = [];
let arrCube = [];
let arrOriginal = [1,2,3,4,5,6,7,8,9];

pushEmptyArray = (arr, times) => {
  for(let i = 0; i < times; i++){
    arr.push([])
  }
}
pushEmptyArray(arrColumn, 9);
pushEmptyArray(arrCube, 9);

shuffleArray = array => {
  let newArr = array.slice();
  let num = newArr.length;
  let currElem = null;
  let ranNum = null;
  let index = 0;
  while (num) {
    index += 1;
    ranNum = Math.floor(Math.random() * num--);
    currElem = newArr[num];
    newArr[num] = newArr[ranNum];
    newArr[ranNum] = currElem;
  }
  return newArr;
}

let shuffledArr = shuffleArray(arrOriginal);
firstArray = (arr) =>{  
  for(let i = 0; i < 9; i++){
    arrColumn[i].push(arr[i]);
  }
  for(let j = 0; j < 9; j++){
    if(j < 3){
      arrCube[0].push(arr[j])
    } else if (j >= 3 && j <= 5) {
      arrCube[1].push(arr[j])
    } else {
      arrCube[2].push(arr[j])
    }
  }
}
firstArray(shuffledArr);
sudokuGrid.push(shuffledArr);
pushEmptyArray(sudokuGrid, 8);

findIndex = () => {
  let numLen = 0;
  sudokuGrid.forEach(function(el){
    el.forEach(function(){
      numLen += 1;
    })    
  })
  return numLen;
}

assignNum = () => {
  let shuffledArr = shuffleArray(arrOriginal);
  let currIndex = null;
  while(shuffledArr.length){
    currIndex = findIndex();
    let currRow = Math.floor(currIndex / 9);
    let currColumn = currIndex % 9;
    let currCube = 0; 
    
    if(currRow < 3) {
      currCube = Math.floor((currIndex) / 3) -3;
    } else if (currRow >= 3 && currRow <= 5) {
      currCube = Math.floor((currIndex) / 3) -6;
    } else if (currRow > 6) {
      currCube = Math.floor((currIndex) / 3) -9;
    }

    if( arrCube[currCube].indexOf(shuffledArr[0]) === -1 &&
      sudokuGrid[currRow].indexOf(shuffledArr[0]) === -1 &&
      arrColumn[currColumn].indexOf(shuffledArr[0]) === -1) {
        sudokuGrid[currRow].push(shuffledArr[0]);
        arrColumn[currColumn].push(shuffledArr[0]);
        arrCube[currCube].push(shuffledArr[0]);
        shuffledArr.shift();
      } else {
        let numToRemove = shuffledArr[0];
        shuffledArr.shift();
        shuffledArr.push(numToRemove)
      }
  }
}
assignNum();
cl(sudokuGrid)
















