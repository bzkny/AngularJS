/*
2 Objects
1 var this = {THIS IS AN OBJECT}
2 var this = new Object
*/
//EXAMPLE OBJECT ARRAY
var a = {
  color: 'blue',
  species: 'Fish',
  size: {
    height: 5,
    width: 10,
  }

}

//GET WIDTH
//a.size.width = 10

//CREATE NEW PROPERTY
a.name = "Dory"

//a now includes name: "Dory"

// === strict equality
// == comparison or assignment

//Two variables will never be equal
var b = {
  name: 'beatrice'
}
var c = {
  name: 'beatrice'
}

//FUNCTION
function sum(a,b){
  return a + b
}
sum("Rob", " Starling")

var sum = function(a,b){
  return a + b
}
sum(3,1)

//ARRAYS
//Anything can go in an array
var thisArr = [1,2,3, 'bea', {name: "dory"}, [9, 1, 3, 13]]

//Call values like this
thisArr[5][1] = 1
thisArr[4].name = 'dory'

//thisArr.pop() = [1,2,3, 'bea', {name: "dory"}, [9, 1, 3, 13]]
//thisArr.slice(0) =


//CLOSURE

function outer(a){
  function inner(b){
    return a + b;
  }

  return inner;
}

var result = outer(5);

console.log(result(10));

//^^What line gets executed first? 62
//^^What next? 70 (bc only after getting called does browser read inside function)
//^^What next? 63
//^^What next? 67 (this is why return kills function)
//^^70 = inner(b) (gets stored as 5)
//inner(b) = 5
//result(10) + 5 = 15


//SCOPE INHERITENCE

function afx(){
  var me = {
    firstName: "Bea",
    lastName: "Kirk"
  }
  var myDog = {
    name: 'Kali'
  }
  function b(){
    var me = {
      firstName: "Dory"
    }
    me.age = 12;
    myDog.age = 12
  }
  b();
  //console.log(me);
  console.log(myDog);
};
afx();

//^^ line 85
//^^ 104
//^^ 86
//^^ 90
//^^ 93
//^^ 100
//^^ 94
//^^ 97 (adds age to b BC HAS INNER SCOPE - ITS THERE)
//^^ 98 (adds age to a.myDog - DOES NOT HAVE INNER SCOPE - ITS NOT THERE - THEN IT BUBBLES)
//^^101 (a.me gets logged)
//^^102 (a.myDog = Object {name: "Kali", age: 12})

var arrNosEqual100 = [1,2,3,4,56,7,33,70,99,91,19,9,]
function compNums(){
    if( a + b > 100){
    console.log("Hundreds hundreds")
  } else {
    console.log("No hundreds")
  }
}

arrNosEqual100.forEach(compNums(a, b));
























