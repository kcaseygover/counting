function countLetters(uniqueChar) {

uniqueChar = uniqueChar.split(" ").join("");
var myObj = {};
  for ( var nextLtr of uniqueChar)  {
    //console.log(myObj[nextLtr]);
    if (myObj[nextLtr])  {

    myObj[nextLtr].push(i++);

  } else {
   myObj[nextLtr] = [i++];
  }
  }
  return myObj;
}

var i = 0;
console.log(countLetters("lighthouse in the house"));