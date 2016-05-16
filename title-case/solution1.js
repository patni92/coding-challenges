//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case
//https://www.freecodecamp.com/challenges/title-case-a-sentence
function titleCase(str) {
  str = str.toLowerCase();
  var stringArray = str.split(' ');

  for(var i = 0; i < stringArray.length; i += 1) {
   stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].substring(1);

  }
    var string = stringArray.join(' ');
    return string;
}

console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
