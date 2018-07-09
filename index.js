// Add your functions and code here
var destructivelyAppendKitten = function(kitten){
  
  kittens.push(kitten);
  return kittens;
  
}

var destructivelyPrependKitten = function(kitten){
  
  kittens.unshift(kitten);
  return kittens;
  
}

var destructivelyRemoveLastKitten = function(kitten){
  
  kittens.pop();
  return kittens;
}
var destructivelyRemoveFirstKitten = function(kitten){
  
  kittens.shift();
  return kittens;
}

var appendKitten = function(kitten){
  var newKittens = [...kittens,kitten];
  return newKittens;
}

var prependKitten = function(kitten){
  var newKittens = [kitten,...kittens];
  return newKittens;
}