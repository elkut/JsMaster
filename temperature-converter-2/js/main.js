document.getElementById('submitC').addEventListener('click', convertToFahrenheit)


function convertToFahrenheit() {
    event.preventDefault();
    let celsius = document.querySelector('#celsius').value;
    let fahrenheit = celsius * 9 / 5 + 32
    document.querySelector('#result').innerText = fahrenheit
    document.querySelector('#fahrenheit').value = null;
}

document.getElementById('submitF').addEventListener('click', (event) => {
    event.preventDefault();
    let fahrenheit = document.getElementById('fahrenheit').value;
    let celsius = (fahrenheit - 32) * 5 / 9
    document.querySelector('#result').innerHTML = celsius
    document.querySelector('#celsius').value = null
})