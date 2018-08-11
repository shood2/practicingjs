
function findBiggestFraction(a, b){
  a > b ? console.log("a: ", a): console.log("b: ", b);
}

var a = 3/4;
var b = 9/10;

findBiggestFraction(a, b);


var theBiggest = (function(a, b){
    var result;
    a>b ? result = ["a: ", a] : result = ["b: ", b];
    return result
})(a, b);

console.log(theBiggest); // a variable with the result loaded
