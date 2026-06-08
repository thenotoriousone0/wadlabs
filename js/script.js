//let age = 20;
//var course = "BBIT";
//const university = "Strathmore";


//Redeclare
//let age=40;
//var course = "BBA";
//const university = "Nairobi University";

//Reassign
//age = 40;
//course = "BBA";
//university = "Nairobi University";
//if (true) {
  //  let time = "11:30";
  //  var day = "4th";
  //  const year = "2026";
//}
//console.log(time); 
//console.log(day);
//console.log(year);

//function definition
/**
 * @param {int} height - The height of the rectangle
 * @param {int} width - The width of the rectangle
 * @returns {int} The area of the rectangle
 */

function calculateArea(height, width) {
    if (height == null){
        console.log("Height is required");
        return console.log("Height is missing!");
 }else if (width == null){
        console.log("Width is required");
        return console.log("Width is missing!");
 }else{
     area = height * width
    return area;
 }
 //console.log("function calculateArea");   
 //alert("Function called/executed");
}

//execution
console.log(calculateArea(20,3)  ) //a function call
console.log(calculateArea(20)  ) //a function call
console.log(calculateArea()  ) //a function call

//function expression
const add = function(number_1, number_2) {
    return number_1 + number_2;
}
console.log(add(4 , 2)); //function call

// arrow functions
const multiply = (x, y) => x * y;

console.log(multiply(2, 5)); //function call

