function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let counter = 0


  return function() {
    /* your code here */
    var firstRoll = list[counter]
    counter++
    if (counter >= list.length){
      counter = 0
    }
    return(firstRoll)
  }
}

var rollLoadedDie = makeLoadedDie();

/*console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());*/