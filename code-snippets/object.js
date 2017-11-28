// Last Friday Night

// According to the song, Katy Perry "maxed our credit cards". Write a function that takes an array of transactions like the one below, and return the total amount of what she spent last Friday night.


var transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
]

sumTransactions = transactions => {
  let sum = 0;
  for(let i = 0; i < transactions.length; i++){
    let currentAmount = transactions[i].amount;
    sum += currentAmount;
  }
  return sum;
}
sumTransactions(transactions) // => 10512


///////////////////////////

// Bonus: Write a function that takes an array of transactions and returns the most expensive purchase. Use transactions from above and transactions2 below to test.

var transactions2 = [
  {
    name: "Minibar rental",
    amount: 3000
  }, {
    name: "DJ Fee",
    amount: 2999
  },
  {
    name: "Yard landscaping",
    amount: 2999
  }
]

mostExpensive = priceList => {
  let itemName = '';
  let itemAmount = 0;
  for(let i = 0; i < priceList.length; i++) {
    let currentItem = priceList[i];
    let currentItemName = currentItem.name;
    let currentItemAmount = currentItem.amount;
    if(currentItemAmount > itemAmount) {
      itemAmount = currentItemAmount;
      itemName = currentItemName;
    }
  }
  return itemName;
}

mostExpensive(transactions) // => "Chandelier replacement"
mostExpensive(transactions2) // => "Minibar rental"

///////////////////////////

// Frequency Analysis

// Write a function that takes a string of text (containing ONLY lowercase letters) and returns an object containing the count for each letter in the string.

// frequencyAnalysis('abca');
// => {a: 2, b: 1, c: 1}

var frequencyAnalysis = function(aString){
  var newObj = {};
  for(var i = 0; i < aString.length; i++){
    var currentChar = aString[i];
    if(newObj[currentChar]){
      newObj[currentChar] +=1;
    }else{
      newObj[currentChar] = 1;
    }
  }
  return newObj;
}

frequencyAnalysis('abca');

///////////////////////////////////////

var translate = function (aString){
  var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
  var leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

  var lowercaseString = aString.toLowerCase();
  var leetCodex = '';
  for(var i = 0; i < lowercaseString.length; i++){
    var indexInLetters = letters.indexOf(lowercaseString[i]);
    leetCodex += leetChars[indexInLetters]
  }
  return leetCodex
}
translate('Fullstack')      // => 'ph|_|115+@(|<'


/////////////////////////////////////////////

// Default Values

// As a breeder, deciding upon the dogs' names is tough! So unless someone names my dog, I always name it Steve.

// Write a function called dogBreeder that takes a name and an age and returns a dog object with those properties attached to it. If someone fails to put a name in, default to Steve. If someone fails to put an age in, default to 0.

// Be careful though, sometimes the people using our function might not have nice input! (you guys asked for it!).

dogBreeder("Sam", 12)    // => {name: 'Sam', age: 12}
dogBreeder(15)    // => {name:'Steve', age: 15}


/// game of life
// bit.ly/ObjAndProto

/////////////////////////////////////////////

// Frequency Analysis

// Write a function that takes a string of text (containing ONLY lowercase letters) and returns an object containing the count for each letter in the string.


frequencyAnalysis = string => {
  let arrayOfString = string.toLowerCase().split('');
  let newObj = {};
  for(let i = 0; i < arrayOfString.length; i++) {
    let currentItem = arrayOfString[i];
    if(newObj[currentItem]) {
      newObj[currentItem] += 1;
    } else {
      newObj[currentItem] = 1;
    }
  }
  return newObj;
}

frequencyAnalysis('abca');
// => {a: 2, b: 1, c: 1}


///////////////////////////////////

// Sum Cart

// Write a function that accepts a "shopping cart" array and returns the total bill for all the items. Each item is represented by an array, where the first element is the item name, and the second element is an object with two properties: quantity and price.

var cart = [
    ["tofu", {"quantity" : 3,"price" : 4.5} ],
    ["sriracha", {"quantity" : 1,"price" : 5} ],
    ["toilet paper", {"quantity" : 12,"price" : 1.75} ],
    ["Drano", {"quantity" : 1,"price" : 13} ],
    ["orichette", {"quantity" : 2,"price" : 7.5} ],
    ["hummus", {"quantity" : 2,"price" : 5.99} ],
    ["bison meat", {"quantity" : 3,"price" : 20.99} ],
    ["vegan bison meat", {"quantity" : 3,"price" : 24.99} ]
];

sumCart = array => {
  let totalPrice = 0;
  for(let i = 0; i < array.length; i++){
    let currentItem = array[i];
    let currentItemQuantity = currentItem[1]['quantity'];
    let currentItemPrice = currentItem[1]['price'];
    totalPrice += currentItemQuantity * currentItemPrice;
  }
  return totalPrice;
}

sumCart(cart)    // => 217.42

///////////////////////////////////

// Leet Translator

// "Leet" or 1337 is a popular alternative alphabet used by internet "hackers".

// Create a translator function that takes a string and outputs that string translated to leet.

// The leet codex is below, along with an array of english letters and an array of the corresponding leet characters. Use the two arrays to create a leetCodex object to use in making the translations.

/*
Leet Codex:
        A -> @
        B -> 8
        C -> (
        D -> |)
        E -> 3
        F -> ph
        G -> g
        H -> #
        I -> l
        J -> _|
        K -> |<
        L -> 1
        M -> |'|'|
        N -> /\/
        O -> 0
        P -> |D
        Q -> (,)
        R -> |2
        S -> 5
        T -> +
        U -> |_|
        V -> |/
        W -> |/|/'
        X -> ><
        Y -> j
        Z -> 2
*/


translate = string => {
  let arrayOfString = string.toLowerCase().split('');
  let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
  let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];
  let leetCodex = {};
  let stringInLeetCodex = '';
  for(let i = 0; i < letters.length; i++) {
    let currentChar = letters[i];
    leetCodex[currentChar] = leetChars[i];
  }
  for(let j = 0; j < arrayOfString.length; j++){
    let currentItem = arrayOfString[j];   
    stringInLeetCodex += leetCodex[currentItem];
  }
  return stringInLeetCodex;
}

translate('Fullstack')    // => 'ph|_|115+@(|<'

////////////////////////////////////

// Default Values

// As a breeder, deciding upon the dogs' names is tough! So unless someone names my dog, I always name it Steve.

// Write a function called dogBreeder that takes a name and an age and returns a dog object with those properties attached to it. If someone fails to put a name in, default to Steve. If someone fails to put an age in, default to 0.

// Be careful though, sometimes the people using our function might not have nice input! (you guys asked for it!).

// dogBreeder = (name, age) => {
//   let dog = {};
//   if(name === undefined){
//     name = 'Steve';
//   } 
//   if(age === undefined){
//     age = 0;
//   }   
//   dog.name = name;
//   dog.age = age;
//   return dog;
// }

dogBreeder = (var1, var2) => {
  let dog = {};
  if(typeof var1 === 'string' && var2 === undefined){
    dog.name = var1;
    dog.age = 0;
  }
  if(typeof var1 === 'number' && var2 === undefined){
    dog.name = 'Steve';
    dog.age = var1;
  }
  if(typeof var2 === 'string'){
    dog.name = var2;
    dog.age = var1;
  }
  if(typeof var2 === 'number'){
    dog.name = var1;
    dog.age = var2;
  }
  return dog;
}


dogBreeder("Sam", 12)    // => {name: 'Sam', age: 12}
dogBreeder(15)    // => {name:'Steve', age: 15}
