//Get the string from the page
//Controller function

function getValue() {
    document.getElementById("alert").classList.add("invisible")

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

//Reverse the string
//Logic function
function reverseString(userString) {

    let revString = [];

    //Let name = Bobby
    //name[0] = "B";
    //name[4] = "y";
    //last pos in the array is name.length - 1 (keep in my name.length is from 1 --> 5)

    for(let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    return revString;
}

//Display the reversed string to the user
//View Function
function displayString(revString) {
    //Write to page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    //Show the alert box
    document.getElementById("alert").classList.remove("invisible");

}