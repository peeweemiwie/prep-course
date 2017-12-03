var cats = [{
  'name': 'Sadie',
  'age': 9,
  'color': 'black and peanut butter',
  'favorite activity': 'eating',
  'favorite toy': 'Mr. Mouse',
  'sound': 'mew',
  'face': 'perfect',
  'fuzziness level': 'off the charts'
}, {
  'name': 'Layla',
  'age': 9,
  'color': 'grey and white and black',
  'favorite activity': 'alone time',
  'favorite toy': 'the scratchy post',
  'sound': 'reowr',
  'face': 'perfect',
  'fuzziness level': 'extreme'
}, {
  'name': 'Mr. Binns',
  'age': 4,
  'color': 'white and black',
  'favorite activity': 'furmination time',
  'favorite toy': 'the jingly feather stick',
  'sound': 'maaaoww maaow MAAOOW',
  'face': 'perfect',
  'fuzziness level': 'unsafe'
}];

cats.forEach(logsARandomFact);

/*
Sadie's sound is mew
Layla's age is 9
Mr. Binns's color is white and black
*/

function logsARandomFact(cats) {
  let name = cats.name; 
  let keys = Object.keys(cats);
  let ranNum = random(1, keys.length -1);
  let ranKeys = keys[ranNum]
  console.log(cats.ranKeys)
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

