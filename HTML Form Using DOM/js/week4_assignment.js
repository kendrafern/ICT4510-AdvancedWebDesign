// Kendra Brauer
// ICT-4510-1 Adv. Website Design & Mgmt
// Week 4 Assignment: Manipulate an HTML form using the DOM
// js/week4_assignment.js
// 7/12/20

"use strict";

//Define two functions: getData() and displayData()
// The getData() function must retrieve the form field values using the querySelector() DOM method, i.e., document.querySelector().value
function getData() {
  var person = new Object();
  person.firstName = document.querySelector("#firstName").value;
  person.lastName = document.querySelector("#lastName").value;
  person.emailAddress = document.querySelector("#emailAddress").value;
  //Call the displayData() function within the getData() function and pass in the Object containing the form values as an argument.
  displayData(person);
  return person;
}

//In the displayData() function, construct a string using the firstName and emailAddress values found in the Object passed in. For example: "Thank you, <firstName>. Your email address is <emailAddress>!"
function displayData (person) {
  var text ="Thank you, " + person.firstName + " " + person.lastName + ". Your email address is " + person.emailAddress + ".";

  //Make use of the querySelector(), createTextNode() and appendChild() DOM methods to render the string inside of a new "p" element in the HTML document.
  var paragraph = document.createElement("p");
  var textNode = document.createTextNode(text);
  paragraph.appendChild(textNode);
  document.querySelector("body").appendChild(paragraph);
}

// Apply an onclick event handler to the HTMl form's button
document.getElementById("submitButton").onclick = function() {myFunction()};
function myFunction() {
  document.getElementById("submitButton").innerHTML = "SUBMITTED!";
  // Assign the collected form field values to an Object.
  var person = getData();
}
