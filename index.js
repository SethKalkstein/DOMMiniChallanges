// Complete and submit the following three exercises to go over JavaScript event binding:

// Create an HTML page with two buttons that argue with each other. When one button is clicked, 
// the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"
// 
//Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"

// Create an HTML page with javascript that listens for a keypress.
// When the user presses that key, the text of the H1 should show the value of the key they have pressed.
// Example: If the user presses "J", the text inside the H1 should be "J".
// Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
// checks that the password is 12345678
// checks that the username contains at least one number
// if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1.




//Exercise 1. "The arguing buttons"
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');

button1.addEventListener("click", argueWithButton1)
button2.addEventListener("click", argueWithButton2)

function argueWithButton1() {          // changes what button 1 says depending on what it says and what button 2 says
	var content1 = button1.innerHTML;
	var content2 = button2.innerHTML;
	if (content1 == "Button 1" && content2 == "Button 2"){ //They're both in their initial state
		button1.innerHTML = "I'm right";
	}
	else if (content2 == "I'm right" ) {     //other has already been changed from initial state at some point
		button1.innerHTML = "No, I'm right!";
	}
	else if (content2 == "No, I'm right!") //other button needs to be put in its place
	{
		button1.innerHTML = "No, I'm right!"
		button2.innerHTML = "I'm right";	
	}
} 

function argueWithButton2() {         // changes what button 2 says depending on what it says and what button 1 says
	var content1 = button1.innerHTML;
	var content2 = button2.innerHTML;
	if (content1 == "Button 1" && content2 == "Button 2"){ //They're both in their initial state
		button2.innerHTML = "I'm right";
	}
	else if (content1 == "I'm right") {       //other has already been changed from initial state at some point
		button2.innerHTML = "No, I'm right!";
	}
		else if (content1 == "No, I'm right!")  //other button needs to be put in its place
	{
		button2.innerHTML = "No, I'm right!"
		button1.innerHTML = "I'm right";	
	}
} 


// Exercise 2. Don't hover over me punk!
var noHoverZone = document.getElementById('noHoverZone');

noHoverZone.addEventListener("mouseover", function(){
	alert("Hey, I told you not to hover over me!");
})