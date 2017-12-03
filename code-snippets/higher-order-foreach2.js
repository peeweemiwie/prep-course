let sum = 0;
addToSum = aNum => {
  sum += aNum;
}
let arr = [1,2,3];
myForEach = (array, callback) => {
  for(let i = 0; i < array.length; i++){
    let currentValue = array[i];
    callback(currentValue, i, array);
  }
}
myForEach(arr, addToSum);
console.log(sum); // 6
///////////////////////////////////
