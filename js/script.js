let age = 20;
var course = "BBIT";
const university = "strathmore";
const year = 2026;


//Redeclare
//let age = 40;
//var course="Law";
//=== , ==

//Reassign
//university = "USIU";

// scope (const, let- block) var, global

//function definition
// year = 2026;
/**
 * A function that calculates the area of a rectangle
 * @param {int} height 
 * @param {int} width 
 * @return area
 */

function calculateArea(height, width){
    let area = 0
    if (height === null) {
        console.log('height missing!')
    }else if (width === null) {
        console.log('width missing!')
    }else {
    area = height * width
    return area;
    }
    //console.log("function calculateArea")
    //alert("Function called/executed");
}
// return a value is NOT printing out
//execution - called
console.log( calculateArea(20, 3) ) //one output 60
console.log( calculateArea(20) ) // one output width
console.log( calculateArea() ) //height missing or??

// function expression
const add = function add(number_1, number_2){
    return number_1 + number_2
}
console.log(add(4, 2) )

//arrow  functions
const multiply = (x, y) => x * y;

console.log(multiply(2,5));
 // Javascript arrays
const scores = [45, 56, 67,67,78];
//access

//45
console.log(scores[0])
//56
console.log(scores[1])
//67
console.log(scores[2])
//78
console.log(scores[4])

let students_names=["Collins", "Kanyi", "Nyangi", "Jane"];

//print out Nyangi on the console window
console.log(students_names[2])

let governors=[
    [47,"Johnson sakaja"],
    [1,"Abdullswamad Sherrif"],
    [21,"Irungu Kangata"],
];

///The Governor of county number 1 is Abdullswamad Sherrif
console.log("The governor of county number ", governors[1][0],"is",governors[1][1]);

//map (perform an operation on each element)
let doubled = scores.map(x => x * 2); //multiply each score by 2
console.log(doubled)

//properties
//The class has j students (student_names)
console.log("The class has ", students_names.length, "students")

//Kenya has b governors (governors)
console.log("Kenya has ", governors.length, "governors")

//for in
for(let index in scores){
    console.log(scores[index])
}
//for of
for(let score of scores){
    console.log(score)
}

//forEach
scores.forEach(function(score){
    console.log("score: ",score)
})

const student = {
    name: "Ronaldo",
    age: 20,
    passed: true,
    grade: 'A',
    "admission number" : 220858,
    course: "BBIT",
    group: "2A",
    attendance: 20,
    addAttendance: function(){
        this.attendance += 1;
        //this.attendance +1
    }
};

//accessing properties
//student name
console.log ('My name is',
    student.name, "from",
    student["admission number"],
    "university"
);

//a method in the object
student.addAttendance(); //add attendance by 1
console.log(student.attendance); //21

//array of objects
let bbit_2b = [
    {adm: 223251, name:"Blessing"},
    {adm: 192977, name:"Ryan"},
    {adm: 220024, name:"Ambrose"},
    {adm: 220941, name:"Neema"}
];
//Print out the name of all students in bbit 2b using a loop
bbit_2b.forEach(function(student){
    console.log(student.name);
});

//@TODO : Show looping of objects 

//getting the keys of an object as an array
console.log(Object.keys(student));

//getting the values of an object as an array
console.log(Object.values(student));

//getting both keys and values of an object as an array
console.log(Object.entries(student));

/* DOM - Document Object Model (tree-like) */
console.log(document);
//console.log(document);

//Elements on our page (variables)
const heading = document.querySelector("#mainHeading");
console.log(heading);
const previewImage = document.querySelector("img");
console.log(previewImage);
const aboutSection = document.getElementById('about');
console.log(aboutSection);
//all the sections
const allSections = document.querySelectorAll('section');
console.log(allSections);

const allNavLinks = document.querySelectorAll('nav a');
console.log(allNavLinks);

let aboutParagraph = document.querySelector("#about p");

//change its text
aboutParagraph.textContent = "This text was changed!";
aboutParagraph.style.color = "red";

//setting/setter - updating the page from js

//via the DOM
previewImage.setAttribute("title","New Title of Image");
previewImage.setAttribute("alt","New alternative text for the image");
console.log(previewImage.alt);
console.log(previewImage.title);

//Event handling - Events(user events - click , key events ,scroll)

//get the element of interest - button with an id of changeTextBtn
let changeTextBtn = document.querySelector("#changeTextBtn");
let demoText = document.querySelector("#demoText");
// we are handling the click event for the button with an id of changeTextBtn
changeTextBtn.addEventListener("click",function(event){
    console.log("someone clicked me!");
    demoText.textContent = "I have been changed when you clicked";
    demoText.style.color = "orange"
    demoText.style.fontSize = "16px";
});

//use Case 2
let highlightSectionsBtn = document.querySelector("#highlightSectionsBtn");
highlightSectionsBtn.addEventListener("click",function(event) { 
    //one
    document.querySelector("#about").classList.toggle("section-highlight");
    //highlight all the sections
    //document.querySelectorAll("section").classList.toggle("section-highlight");

    document.querySelectorAll("section").forEach(function(section){
        section.classList.toggle("section-highlight");
    });
});


//get th textbox with id nameInput
document.querySelector("#nameInput").addEventListener("input",function(event){

    document.querySelector("#nameOutput").textContent =
    "Hello" + document.querySelector("#nameInput").value + "!";

    });

    //case 4 - character counter
    let gtaCommentTextArea = document.querySelector("#commentInput");
    let charCountParagraph = document.querySelector("#charCount");

    gtaCommentTextArea.addEventListener("input",function(e){
        //event happens
        //code goes here

       // console.log("typing...");

       // count the number of characters
       let numberOfChars = gtaCommentTextArea.value.length;
       //update the paragraph
       charCountParagraph.textContent = "Characters:"+numberOfChars;

       //prevent the user from typing after 60
       if(numberOfChars > 60){
        //prevent the default behavior of the event
        e.preventDefault();
        gtaCommentTextArea.readOnly = true;
       }else{
        //update the paragraph
        charCountParagraph.textContent= "Characters: " +numberOfChars;
       
       }

       //number of words

    });

    //case 5 - keyboard events
    let keyOutputParagraph = document.querySelector("#keyOutput");
    //the event listener
    //when you press a key , anywhere on the page coz
    //we've attached it to the entire page not just one element
    document.addEventListener("keydown",function(event){
       //updating the paragraph 
        keyOutputParagraph.textContent = "You pressed: " + event.key;
    });

    // case 6 - todo list,wish list
    let wishListInput = document.querySelector("#wishlistIput");
    let wishListButton = document.querySelector("#wishlistForm button");
    // <ul> </ul>
    let wishListItemsList = document.querySelector("#wishlistItems");

    wishListButton.addEventListener("click",function(event){
        let wishListInputValue = wishListInput.value;
        

        // update the list if the wishListInputValue != null
       if(wishListInputValue != ""){
        //console.log(wishListInputValue);
          let li = document.createElement("li");
          let button = document.createElement("button");
          button.textContent = "Delete";
          li.textContent = wishListInputValue;

          li.appendChild(button);
       
       // we append the list to the UL
       wishListItemsList.appendChild(li);

       // finally we clear what the user typed in the input field
       wishListInput.value = "";
    }
    });