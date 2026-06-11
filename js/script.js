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

//Jvascript arrays
const scores =[45, 56, 67, 67, 78];
//access

//45
console.log(scores[0]);
//56
console.log(scores[1]);
//67
console.log(scores[2]);
//78
console.log(scores[4]);

let student_names = ["John", "Jane", "Doe", "Smith"];
//access

console.log(student_names[2]); //Doe

let governors=[
    [47,"Sakaja"],
    [1, "Abdullswamad Sherrif"],
    [21, "Irungu Kangata"],
];

//The Governor of county number 1 is Abdullswamad Sherrif
console.log("The Governor of county number ", governors[1][0] ,"is" , governors[1][1]);

//map( perform an operation on each element)
let doubled_scores = scores.map(x => x * 2);
console.log(doubled_scores);

//properties
//The class has j students
console.log("The class has", student_names.length, "students");

//kenya has b governors
console.log("Kenya has", governors.length, "governors");

//for 
for (let index in scores) {
    console.log(scores[index]);
}

//for of
for (let score of scores) {
    console.log(score);
}

//forEach
scores.forEach(function(score) {
    console.log("score: ", score);
});

const student = {
    name:"Basweti",
    age: 20,
    passed:true,
    grade: "A",
    "admission number": 222168,
    courses: "BBIT",
    group: "2A",
    attendance: 20,
    addAttendance: function() {
        this.attendance =this.attendance + 1;

    }
};

//accessing items
//student name
console.log('My name is'
, student.name,"from",
student["admission number"],
"University"
);

// a method in the object
student.addAttendance();
console.log(student.attendance);//21

//array of objects
let bbit_2b = [
    {adm:222168, name:"Basweti"},
    {adm:221932, name:"John"},
    {adm:221370, name:"Jane"},
    {adm:221932, name:"Doe"},
];

//Print the name of all students in 2b using a loop

bbit_2b.forEach(function(student) {
    console.log(student.name); 
});

//getting the keys of as an array
console.log(student)

//getting the values as an array
//console.log(student.values());

//getting the both keys and values as an array
//console.log(student.entries());

