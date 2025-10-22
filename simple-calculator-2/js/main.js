let total = 0;

document.querySelector('#zero').addEventListener('click', setZero)
document.querySelector('#addThree').addEventListener('click', addThree)
document.querySelector('#addNine').addEventListener('click', addNine)
document.querySelector('#mTwo').addEventListener('click', minsTwo)

function setZero() {
    total = 0
    document.querySelector('#result').innerText = total
}

function addThree() {
    total += 3
    document.querySelector('#result').innerText = total
}

function addNine() {
    total += 9
    document.querySelector('#result').innerHTML = total
}

function minsTwo() {
    total -= 2
    document.querySelector('#result').innerHTML = total
}