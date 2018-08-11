//atom live server

var pens = new Array("red", "blue", "green", "black");

pens.Length; // the length
pens.reverse(); // reverses the Array
pens.shift(); //remove the first value
pens.unshift("purple", "pink"); // adds the new values to the beginning of pens
pens.pop(); //removes the last element in the Array
pens.push("magenta"); //adds to the end of the Array
pens.splice(initialposition, numitems); //starts at initialposition and removes that many elements after it
pens.slice(); //creates a copy of an Array
pens.indexOf(search, startindex); //returns index of search after startindex
pens.join(seperator); //returns all the elements as a string seperated by the seperator


//js coding standard expects functions at the top

//regular function
function sum(a, b){
  return a + b;
}

//anonymous functions
var a = function() {
  return "blah blah";
}
