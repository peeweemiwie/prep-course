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

makenoise = theAnimal => {
  let objAnimal = {};
  if(theAnimal === 'dog') objAnimal = petSounds[0];
  if(theAnimal === 'cat') objAnimal = petSounds[1];
  if(theAnimal === 'chicken') objAnimal = petSounds[2];
  for(var key in objAnimal){
    let animal = key.charAt(0).toUpperCase() + key.slice(1);
    let animalInfo = objAnimal[key];
    for(var nestedKey in animalInfo){
      let country = nestedKey;
      let sound = animalInfo[nestedKey];
      console.log(`${animal}s in ${country} says ${sound}`)
    }
  }
}  

makenoise('dog');

///////////////////////////

makenoise = animal => {
  for(let i = 0; i < petSounds.length; i++){
    if(animal in petSounds[i]){
      let currentAnimalInfo = petSounds[i];
      let value = currentAnimalInfo[animal];
      animal = animal.charAt(0).toUpperCase() + animal.slice(1);
      for(var country in value){
        console.log(`${animal}s in ${country} say ${value[country]}`)
      }    
    }
  }
}

/////////////////////////////


compareObjects = (objOne, objTwo) => {
  
    for(let key in objOne){
      if (objOne[key] !== objTwo[key]) {
        return false
      }
    }
    for(let key in objTwo){
      if (objOne[key] !== objTwo[key]) {
        return false
      }
    }
    return true;
  }
  
  compareObjects({ name: 'nick' }, { name: 'nick' })
  // -> true
  
  //compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 })

  /////////////////////////
  function speak (line)  {
    console.log( this.type + line);
  }
  var whiteRabbit = {
    type: "white", 
    action: speak
  };
  var fatRabbit = {
    type: "fat", 
    action: speak
  };
  
  whiteRabbit.action(": Oh my ears and whiskers, ");
  
  fatRabbit.action(": I could sure use a carrot right now.");
  
  speak.apply(fatRabbit, [' hi'])
  speak.call({type: 'old'}, ' oh my')
  ////////////////////////////////////












