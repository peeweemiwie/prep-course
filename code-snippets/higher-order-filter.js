var cats = [{
  'name': 'Sadie',
  'age': 9,
  'colors': ['black', 'peanut butter'],
  'favorite activity': 'eating',
  'favorite toy': 'Mr. Mouse',
  'sound': 'mew',
  'face': 'perfect',
  'fuzziness level': 'off the charts'
}, {
  'name': 'Layla',
  'age': 9,
  'colors': ['grey', 'white', 'black'],
  'favorite activity': 'alone time',
  'favorite toy': 'the scratchy post',
  'sound': 'reowr',
  'face': 'perfect',
  'fuzziness level': 'extreme'
}, {
  'name': 'Mr. Binns',
  'age': 4,
  'colors': ['white', 'black'],
  'favorite activity': 'furmination time',
  'favorite toy': 'the jingly feather stick',
  'sound': 'maaaoww maaow MAAOOW',
  'face': 'perfect',
  'fuzziness level': 'unsafe'
}];

console.log('The cats who are, at least in part, white, are:');
cats.filter(hasWhiteColor)
  .forEach(logsName)

/*
  Layla
  Mr. Binns
*/

console.log('The cats who have a safe level of fuzziness are:');
cats.filter(hasSafeLevelsOfFuzziness)
  .forEach(logsName);

/*
  Sadie
  Layla
*/

function hasWhiteColor(cat) {
  if(cat.colors.includes('white'))
  console.log(cat.name);
}

function hasSafeLevelsOfFuzziness() {
  //TODO
}

function logsName(cat) {
  console.log(cat.name);
}