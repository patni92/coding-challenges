function palindrome(string) {
  var stringReverse = '';

  for (var i = string.length; i >= 0; i -= 1) {
    stringReverse += string.charAt(i);
  }

  if (stringReverse === string) {
    console.log(string + ' is palindrome');
  } else {
    console.log(string + ' is not palindrome');
  }
}

palindrome('anna');
palindrome('hello');
