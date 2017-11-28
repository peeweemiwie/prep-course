Foreign Loops

Create a function that takes an animal name and iterates over the petSounds array below and logs all the international sounds that animal makes to the console along with the country of origin.

// var anObject = {
//   one: 1,
//   two: 2,
//   three: 3,
// };
// var keys = Object.keys(anObject);
//   keys.forEach(function (key) {
//   console.log(anObject[key]);
// })

var petSounds =    [
  { "dog": {
      "America" : "Woof! Woof!",
      "Germany" : "Wau Wau!",
      "England" : "Bow wow!",
      "Uruguay" : "Jua jua!",
      "Afrikaans" : "Blaf!",
      "Korea" : "Mong mong!",
      "Iceland" : "Voff voff!",
      "Albania" : "Ham!",
      "Algeria" : "Ouaf ouaf!"
      }
   },
   { "cat": {
      "America" : "Meow",
      "Germany" : "Miauw!",
      "England" : "mew mew",
      "Uruguay" : "Miau Miau!",
      "Afrikaans" : "Purr",
      "Korea" : "Nyaong!",
      "Iceland" : "Kurnau!",
      "Albania" : "Miau",
      "Algeria" : "Miaou!"
      }
   },
   { "chicken": {
      "America" : "Cluck cluck",
      "Germany" : "tock tock tock",
      "England" : "Cluck Cluck",
      "Uruguay" : "gut gut gdak",
      "Afrikaans" : "kukeleku",
      "Korea" : "ko-ko-ko",
      "Iceland" : "Chuck-chuck!",
      "Albania" : "Kotkot",
      "Algeria" : "Cotcotcodet"
      }
}
]

function makeNoise(animalType){

for(var i = 0; i < petSounds.length; i++){
  var currentAnimal = petSounds[i];
    var animal = '';
    var country = ''; 
    var sound = '';
  for(var key in currentAnimal){
    animal = key;
    var currentValue = currentAnimal[key];
    for(var nestedKey in currentValue){
      country = nestedKey;
      sound = currentValue[nestedKey]
      console.log( `${animal}s in ${country} say ${sound}`)
    }
  }
}
}
makeNoise('dog')

var keys = Object.keys(anObject);
  keys.forEach(function (key) {
  // console.log(anObject[key]);
})
// The log should follow the format: "[animal]s in [country] say [sound]".

// Like many programming problems, this exercise is simple but tricky. When faced with uncertainty, programmers will often reference a language's documentation for further insight.

// Think carefully about what kind of for loop to use. Check out the 'Iterations' section of the MDN JavaScript documentation for different loop styles.

makeNoise('dog');
/*
Dogs in America say Woof! Woof!
Dogs in Germany say Wau Wau!
Dogs in England say Bow wow!
Dogs in Uruguay say Jua jua!
Dogs in Afrikaans say Blaf!
Dogs in Korea say Mong mong!
Dogs in Iceland say Voff voff!
Dogs in Albania say Ham!
Dogs in Algeria say Ouaf ouaf!
*/


// The other ways to loop through objects:
// Why theyre better: Because - they enable you to use your knowledge of array methods (which should be getting better) to traverse collections of objects.
var anObject = {
  one: 1,
  two: 2,
  three: 3,
};
// Object.keys -> Returns an array representing the keys of an object.
var keys = Object.keys(anObject);
keys.forEach(function (key) {
  // console.log(anObject[key]);
})
// ES6 Introduces 2 newer things that are of import:
// Object.values
// Object.entries
// If we want to skip this whole step where we have to use bracket notation to access the values of an object - or if we just dont care about the dictionary speed and all we want is a list of values - Object.values is the winner.
var values = Object.values(anObject);
for (var i = 0; i < values.length; i++) {
  // console.log(values[i]);
}
// Entries is for people who love the pre-built power of array methods. Entries returns an array for each key - value pair in an object. That key value pair will be ordered as follows:
// index 0: key
// index 1: value
var entries = Object.entries(anObject);
for (var i = 0; i < entries.length; i++) {
  console.log(entries[i]);
}


function compareObjects(obj1, obj2){
  console.log(obj1, obj2)
}


compareObjects({ name: 'nick' }, { name: 'nick' })
// -> true

compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 })
// -> false