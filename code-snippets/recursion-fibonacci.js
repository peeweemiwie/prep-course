let arrayNum = [1,1,2];
fibonacci = n => {
  if(arrayNum.length >= n){
    console.log(arrayNum[n - 1])
    return arrayNum[n - 1];
  } 
  arrayNum.push(arrayNum[arrayNum.length - 2] + arrayNum[arrayNum.length -1]);
  fibonacci(n)
}
fibonacci(6)