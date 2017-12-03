let counter = 0;
countVowels = string => {
  let newString = string.toLowerCase();
  let arrayVowels = ['a', 'i', 'u', 'e', 'o'];
  if(newString.length === 0) {
    console.log(counter)
    return counter;
  }
  if(arrayVowels.includes(newString.charAt(0))) counter +=1;
  newString = newString.substr(1);
  return countVowels(newString)
}
countVowels('Four score and seven years') 