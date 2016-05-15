// Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
  var stringArray1 = str.split(" ");
  var strignArray2 = target.split(" ");

  if(stringArray1[stringArray1.length - 1] === stringArray2[stringArray2.length - 1]) {
    return true
  } else {
    return false
  }
}
