// Fullstack HQ

// Part 1

// Using what you now know about scope, adjust the code below so it prints out the correct message: "Fullstack HQ is at Planet Earth, United States, New York State, New York City".

var planet = 'Planet Earth,';
outerFunction();

function outerFunction(){
  var country = 'United States,';
  middleFunction();

  function middleFunction() {
    var state = 'New York State,';
    innerFunction();

    function innerFunction() {
      var city = 'New York City';
      innermostFunction();

      function innermostFunction() {
        console.log('Fullstack HQ is at', planet, country, state, city);
      }
    }
  }
}


// Part 2

// Then, repeat the process, but on the following code, which uses parameters instead of variables.

outerFunction('Planet Earth,');

function outerFunction(planet){
  middleFunction('United States,');

  function middleFunction(country) {
    innerFunction('New York State,');

    function innerFunction(state) {
      innermostFunction('New York City');

      function innermostFunction(city) {
        console.log('Fullstack HQ is at', planet, country, state, city);
      }
    }
  }
}