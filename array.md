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
// create an array
var a = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// call slice(), passing start and end indexes
var sliced = a.slice(2, 4);

// log the result
console.log(sliced);
// expected output: camel,duck
```

### Array.isArray()
The Array.isArray() function determines whether the passed value is an Array.

```
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
```





