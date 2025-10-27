// Here is too early to read the value
// This runs as soon as the page loads, before the user type anything, so celsius and fahrenhite will always be empty strings
//const celsius = document.querySelector('#celsiusToF').value
//const fahrenheit = document.querySelector('#fToCelsius').value

// These two lines run convert() immediatley when the script loads - instead of waiting for a click
// As a result, the function executes right away (before the user types anything)
// The return value of that function (which is undefined) gets attached as the event listener - so clicking the button does nothing later
//document.getElementById('submitC').addEventListener('click', convert('C', celsius))
//document.getElementById('submitF').addEventListener('click', convert('F', fahrenheit))

// Correct way
// Pass a function reference
document.getElementById('submitC').addEventListener('click', function (event) {
    event.preventDefault(); // stops form from reloading the page
    const celsius = document.querySelector('#celsiusToF').value;
    convert('C', celsius);
});

document.getElementById('submitF').addEventListener('click', function (event) {
    event.preventDefault();  // stips form from reloading the page
    const fahrenheit = document.querySelector('#fToCelsius').value;
    convert('F', fahrenheit);
});

function convert(convertType, tempVal) {
    let temperature
    if (convertType === 'C') {
        temperature = tempVal * 9 / 5 + 32
    }
    else if (convertType === 'F') {
        temperature = (tempVal - 32) * 5 / 9
    }

    document.querySelector('#result').innerHTML = temperature
}