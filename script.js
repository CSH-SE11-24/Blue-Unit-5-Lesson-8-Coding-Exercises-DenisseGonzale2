console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button
let button= document.querySelector("#helloButton")
console.log(button)
// Select the empty p tag under that button
let p= document.querySelector("#helloText")
console.log(p)

// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"
button.addEventListener("click", function(event){
	p.textContent= "Hello"
})

// Task 2: All caps button flow
let button2= document.querySelector("#capsButton")
console.log(button2)
let p2= document.querySelector("#capsText")
console.log(p2)

// Select the 'Click me for all caps' button
button.addEventListener("click", function(event){
	p2.textContent= "HELLO"
})

// Select the p tag under that button (says there's no need to shout)


// Add an event listener to the caps button such that when it's clicked, the p tag text is "THERE'S NO NEED TO SHOUT"



// Task 3: Dog image flow
// Select the dog image


// Add an event listener to the dog image such that when the mouse is over it, the image src becomes happy-dog.jpeg



// Add an event listener to the dog image such that when the mouse is off it, the image src becomes sad-dog.jpeg



// Task 4: Name input flow
// Select the submit button


// Select the input 


// Select the empty p tag under them


// Add an event listener to the submit button such that when it is clicked, the p tag text is "Nice to meet you " + input.value




