// Complete and submit the following three exercises to go over JavaScript event binding:

// Create an HTML page with two buttons that argue with each other. When one button is clicked, 
// the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"
// 
//Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"

// Create an HTML page with javascript that listens for a keypress.
// When the user presses that key, the text of the H1 should show the 
// value of the key they have pressed.
// Example: If the user presses "J", the text inside the H1 should be "J".

// Create an HTML page with a form. The form should include inputs for a 
// username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
// checks that the password is 12345678
// checks that the username contains at least one number
// if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the 
// form is correct, have Javascript change the text in the H1.




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

noHoverZone.addEventListener("mouseover", function(){ //looks for the hover
	alert("Hey, I told you not to hover over me!");  //reacts to the hover
})

//Exercise 3 Key listener 
var changingTitle = document.getElementById('changingTitle');

document.addEventListener('keypress', function() { //listens for the event as long as you're on the document
	const keyName = event.key;           //assigns the pressed key to a variable
	changingTitle.innerHTML = keyName;  //assigns the that key to our h1 element
})

//Exercise 4 Key listener .... Sorry, I was really tired while writing this one. It works perfectly, but it's uglier than a blobfish
var usrName = document.getElementById("usrName"); 
var emailAdd = document.getElementById("emailAdd");
var password = document.getElementById("password");
var titleStatus = document.getElementById("titleStatus")
var submit = document.getElementById("submit")

submit.addEventListener('click', checkForm) 

function checkForm(){
	var hasNum = ""; //empty error message for searching for number in the user name
	var correctPass = ""; //empty error message looking for the right password
	var numCount = 0; //number counter to zero for the 
	// console.log(usrName.value)
	// console.log(emailAdd.value)
	// console.log(password.value)
	if (password.value != 12345678) {
		correctPass = "Incorrect password. Please re-enter password. " //checks for correct password and sets an error message variable.
	}
	for(var i=0; i<=usrName.value.length-1; i++) { //loops through the user name to look for a number. I'd already written a for loop to go through this but a while that exits upon finding a number would be more appropriate
		if (usrName.value[i] == 0 || usrName.value[i] == 1 ||  
		usrName.value[i] == 2 || usrName.value[i] == 3 || usrName.value[i] == 4 ||
		 usrName.value[i] == 5 || usrName.value[i] == 6 || usrName.value[i] == 7 
		 | usrName.value[i] == 8 || usrName.value[i] == 9 ){ //I couldn't get typeof to work and I'm tired so I'm writing this more lengthy code instead to check for 0 to 9
			numCount++; //counting how many numbers there are. This is ugly and I should have used a boolean, but once again, I'm tired. I'll pretty it up later
			// console.log(usrName.value[i] + " is a number. Loop number: " + i + " numCount is: " + numCount);
		}	
	}
	if (numCount === 0) { //if there are no numbers in the user name it sets an error message
		hasNum = "Please enter a user name with at least 1 number in it."  //
	}
	if (hasNum != "" || correctPass != 0) { //if any alert messages exist, (one or both of the alert variable AREN'T empty) alert the user
		alert (correctPass + hasNum);
	} 
	else{ //if both alert variables ARE empty, there are no alerts and the user has entered everything properly 
		titleStatus.innerHTML = "Congrats, your entry was correct!"; //So they get an encouraging h1 which is green for GO
		titleStatus.style.color = "green";
	}
}

