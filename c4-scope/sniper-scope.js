// Sniper Scope

// Practice scope and IIFEs by predicting whether 'Bond (007)' is in the scope!

// Paste the function below in a repl, but DO NOT RUN THE CODE YET.

// Look at each of the Bond Villain IIFEs inside the badGuys function. For each villain, write a prediction about whether Bond (007) will be defined in the function's scope. Finally, run the functions, and consider why or why not your predictions matched.

// Reading:
// Mozilla Developer Network on IIFE https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// Sitepoint on Scope https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/

var badGuys = function() {
  
    var bond = '007';
  
    (function oddJob() {
  
      var AgentinScope = (bond === '007');
  
      var prediction = 'YOUR ODDJOB PREDICTION HERE';
  
      console.log("Bond in OddJob's scope", AgentinScope, "because " + prediction);
    })();
  
    (function goldFinger(bond) {
  
      var AgentinScope = (bond == '007')
  
      var prediction = 'YOUR GOLD FINGER PREDICTION HERE';
  
      console.log("Bond in Gold Finger's scope", AgentinScope, "because " + prediction);
    })();
  
  
    (function scaramanga(target) {
  
    var target = bond;
  
      var AgentinScope = (bond == '007')
  
      var prediction = 'YOUR SCARAMANGA PREDICTION HERE';
  
      console.log("Bond in Scaramanga's scope", AgentinScope, "because " + prediction);
    })();
  
    (function drNo() {
      var bond = 'Body Double';
  
      var AgentinScope = (bond === '007');
  
      var prediction = 'YOUR DR NO PREDICTION HERE';
  
      console.log("Bond in  Dr. No's scope", AgentinScope,  "because " + prediction);
    })();
  
    (function Jaws(agent) {
      var agent = bond;
      bond = 'Body Double';
  
      var AgentinScope = (agent === '007');
  
      var prediction = 'YOUR JAWS PREDICTION HERE';
  
      console.log("Bond in Jaws' scope", AgentinScope,  "because " + prediction);
    })();
  
  
    (function elChiffre() {
      var agent = bond;
      bond = 'Body Double';
  
      var AgentinScope = (agent === '007');
  
      var prediction = 'YOUR EL CHIFFRE PREDICTION HERE';
  
      console.log("Bond in El Chiffre's scope", AgentinScope,  "because " + prediction);
    })();
  
  }
  
  // Run the function
  badGuys()