function reverseString (string) {
  var stringReverse = "";
  for(var i = string.length; i >= 0; i -= 1) {
    stringReverse += string.charAt(i);
  }
  return stringReverse;
}

console.log(reverseString("Hello"));
