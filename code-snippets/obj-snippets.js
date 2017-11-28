function cat(name, color){
  this.name = name;
  this.color = color;
}

var love = new cat('Love', 'black n white')

console.log(love)

/////////////////////////////////////////

class Cat {
  constructor(name, color, age) {
    this.name = name
    this.color = color
    this.age = age
  }
  
  speak(msg){
    console.log(msg)
  }
  
  sleep(hours){
    console.log(`${this.name} sleeps ${hours} a day`)
  }
}

var love = new Cat('Love', 'black n white', 3)

console.log(love)
love.speak('prrrr')
love.sleep(20)

///////////////////////////////////////////////////////


var cat = {
  name : {first: 'Love', last: 'Yagi'},
  color: 'black n white'
}

Object.defineProperty(cat, 'fullName', 
{
  get: function(){
    return this.name.first + ' ' + this.name.last
  },
  set: function(value){
    var nameParts = value.split(' ')
    this.name.first = nameParts[0]
    this.name.last = nameParts[1]
  }
})  

cat.fullName = 'Muffin Top'
console.log(`Full name: ${cat.fullName}, First name: ${cat.name.first}, Last name: ${cat.name.last} `)

///////////////////////////////////////////////////////////


let cat = {
  name : {first: 'Love', last: 'Yagi'},
  color: 'black n white'
}

Object.defineProperty(cat, 'fullName', 
{
  get: ()=>{
    return this.name.first + ' ' + this.name.last
  },
  set: = value =>{
    var nameParts = value.split(' ')
    this.name.first = nameParts[0]
    this.name.last = nameParts[1]
  }
})  

cat.fullName = 'Muffin Top'
console.log(`Full name: ${cat.fullName}, First name: ${cat.name.first}, Last name: ${cat.name.last} `)

////////////////////////////////////////

function test(){
  var items = [1,2,3,4,5,'cat',6,7];
  var sum = 0;
  var message = '';
  for(var i = 0; i < items.length; i++){
    var currentItem = items[i];
    if(typeof currentItem === 'number'){
      if(currentItem < 5){
        sum += currentItem
      }
    } else {
      message += currentItem + ' is not a number'
    }
  }
  return `The sum is ${sum} and ${message}`
}

////////////////////////////////////////

function Cat(name, color){
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 4;

var fluffy = new Cat('Fluffy', 'white')
var muffin = new Cat('Muffin', 'brown')

fluffy.age = 5

console.log('fluffy.age ', fluffy.age, '__proto__', fluffy.__proto__.age, fluffy.hasOwnProperty('age'))

///////
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#conditionals
https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#conditionals

