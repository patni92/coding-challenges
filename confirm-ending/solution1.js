// Check if a string (first argument, str) ends with the given target string (second argument, target).
// https://www.freecodecamp.com/challenges/confirm-the-ending
function confirmEnding(str, target) {
  var stringArray1 = str.split(' ');
  var stringArray2 = target.split(' ');
  var lastWord1 = stringArray1[stringArray1.length - 1];
  var lastWord2 = stringArray2[stringArray2.length - 1];

  if (lastWord1.substr(lastWord1.length - lastWord2.length) === lastWord2) {
    return true;
  } else {
    return false;
  }

}
