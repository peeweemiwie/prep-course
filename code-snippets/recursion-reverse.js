var arr = [1,2,3,4]
let newArray = [];
reverseArray = arr => {
  if(newArray.length === arr.length) {
    console.log(arr.length)
    return newArray;
  }
  let copiedArray = arr.slice();
  newArray.push(copiedArray[copiedArray.length - 1]);
  copiedArray.splice(-1, 1);
  console.log(arr.length, 'copy',copiedArray)
  return reverseArray(copiedArray);
}
var reversedArr = reverseArray(arr);
console.log(reversedArr)    // [4,3,2,1]
console.log(arr)   


