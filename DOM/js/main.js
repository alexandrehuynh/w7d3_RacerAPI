// We can target our HTML elements with something called document element selectors
console.log(document.getElementsByTagName('h1'))
// console.log(document.getElementsByTagName('h1')[0])

// document.getElementsByTagName('h1')[0].innerText = "It's Wednesday my dudes"
// console.log(newText)
// newText = "It's Wednesday my dudes"

// build a function that can change text color based on a conditional
function colorChange() {
    // make a variable for our h1 element
    let h1Element = document.getElementsByTagName('h1')[0] //first h1 element
    
    // check to see what the innertext is equal to
    if (h1Element.innerText == "It's Wednesday my dudes"){
        h1Element.className = 'color-change'
    } else {
        h1Element.className = 'different-color'
    }
}


// adding functionality to our HTML elements via event Listeners
let colorButton = document.getElementById('color-button')
// now I have this variable targetting an html element that i can add an Event Listener to
// eventListener takes in 2 arguments, first is the type (e.g click, mouseover, submit), second is the function
colorButton.addEventListener('click', colorChange)

// Add eventListener to copy pasta
let source = document.querySelector('div.source') //querySelector is a bit more generic thant getElement...
console.log(source)
source.addEventListener('copy', (event) => {
    // essentially just resetting the event & preventing any default characteristics
    event.preventDefault(); 
    const selection = document.getSelection(); //method allowing us to get whatever was selected
    console.log(selection)
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    window.alert('Hey Did I say you could copy that?')
})

// We can add stuff to our html in JavaScript
let button = document.createElement('button')
let buttonDisplay = document.createElement('h2')

button.innerText = 'I am Alive'
button.className = 'different-color'
document.body.append(button) //adding to our DOM tree. A Tree is very similar to a linked list

button.addEventListener('mouseover', (event) => {
    event.preventDefault();
    buttonDisplay.innerText = 'My name is Alex, and I like to party'
    buttonDisplay.className = 'color-change'
    document.body.append(buttonDisplay)
    setTimeout(()=> {buttonDisplay.innerText = ""}, 3000)
})