//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// https://www.freecodecamp.com/challenges/where-do-i-belong
function getIndexToIns(arr, num) {
  arr = arr.sort(function(a, b) {
  return a - b;
});

  var index;

  for(var i = 0; i < arr.length; i += 1) {
    if(num <= arr[i]) {
      index = i;
      break;
    }

    index = arr.length;

  }


  return index;
}

console.log(getIndexToIns([2,5,10], 15));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([2, 20, 10], 19));
