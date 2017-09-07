var countdownGenerator = function (startCountdown) {
  let currentCountdown = startCountdown;

  return function () {
    var beginCountdown = currentCountdown--
    if (beginCountdown > 0) {
      return "T-minus " + beginCountdown + "..."
    } else if (beginCountdown === 0) {
      return "Blast Off!"
    } else {
      return "Rockets already gone, bub!"
    }
  }
}

/*var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
countdown(); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!*/
