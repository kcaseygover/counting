function countLetters(uniqueChar) {

uniqueChar = uniqueChar.split(" ").join("");
var myObj = {};
  for ( var nextLtr of uniqueChar)  {
    //console.log(myObj[nextLtr]);
    if (myObj[nextLtr])  {

    myObj[nextLtr] ++;

  } else {
   myObj[nextLtr] = 1;
  }
  }
  return myObj;
}


console.log(countLetters("lighthouse in the house"));



//var noSpaces = char.split(" ").join("");
/*var numEachLtr =


var myObj = {
    : ' ',
    : ' '
  }

}
console.log(`I'm counting ${this.allChar} ${this.numChar}.`);

countLetters("some string");

//countLetters needs to return an Object*/