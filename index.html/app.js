  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
console.log(multiply([2, 3, 4, 5],4));
function sum(arr, n) {
    // Only change code below this line
    if (n === 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
  }
  console.log(sum([2, 3, 4], 1));

  /*function randomFraction() {
    return Math.random();
  }
  console.log(Math.random());*/

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }
  console.log(getRandomArbitrary(7, 10));


  