# Array
## Methods
### splice()
The `splice()` method changes the contents of an array by removing existing elements and/or adding new elements.

```
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// myFish is ["angel", "clown", "mandarin", "sturgeon"]
```


### slice()
The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

```
var a = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// call slice(), passing start and end indexes
var sliced = a.slice(2, 4);

console.log(sliced);  // camel,duck
```


### pop()
The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

```
var brassicaOleracea = ['brocolli', 'cauliflower', 'cabbage', 'kale', 'tomato']
brassicaOleracea.pop();
console.log(brassicaOleracea); // brocolli,cauliflower,cabbage,kale
```


### push()
The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

```
var numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); // [1, 2, 3, 4]

numbers.push(5, 6, 7);

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
```


### shift()
The `shift()` method removes the first element from an array and returns that element. This method changes the length of the array.

```
var a = [1, 2, 3];
var b = a.shift();

console.log(a); // [2, 3]
console.log(b); // 1
```

### unshift()
The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

```
var a = [1, 2, 3];
a.unshift(4, 5);

console.log(a); // [4, 5, 1, 2, 3]
```

### join()
The join() method joins all elements of an array (or an array-like object) into a string and returns this string.

```
var elements = ['Fire', 'Wind', 'Rain'];
var resultWithDash = elements.join('-');
console.log(resultWithDash);  // Fire-Wind-Rain
var resultWithEmptySpace = elements.join(' ');
console.log(resultWithEmptySpace); // Fire Wind Rain
```


### Array.isArray()
The `Array.isArray()` function determines whether the passed value is an Array.

```
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
```

### map()
The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.

```
// create an array
var numbers = [1, 4, 9, 16];

// call map(), passing a function
var mapped = numbers.map(function(x) {
  return x * 2 
});

// log the result
console.log(mapped);
// expected output: 2,8,18,32
```






