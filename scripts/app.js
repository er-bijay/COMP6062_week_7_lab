numberInput = document.querySelector('#numberInput');

// Add an eventListener to the numberInput to listen for changes
numberInput.addEventListener('input', function() {
    // Get the input value
    // let inputValue = numberInput.value;


    // If the input value is above 10 or below -10, print an alert
    if ( numberInput.value <= -10 ||  numberInput.value >= 10) {
        alert('The number should be between -10 and 10');
    }
});

// Create an object for a fruit of your choice with keys for name, color, and taste
const fruit = {
    name: 'Peach',
    color:'peach',
    taste:'peachy'
};


// Use querySelector to get the elements for each fruit object property
let fruitNameElement = {};
fruitColorElement = document.querySelector('#fruitColor');
fruitTasteElement = document.querySelector('#fruitTaste');


// Use innerHTML to set the string, use Template Literals for each to combine the fruit field name and the value

fruitColorElement.innerHTML = `Color: ${fruit.color}`;
fruitTasteElement.innerHTML = `Taste: ${fruit.taste}`;
fruitNameElement.innerHTML = `Color: ${fruit.name}`;

