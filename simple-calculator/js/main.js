const result = document.getElementById('result');

let sum = 0;

document.getElementById('zero').onclick = SetZero
document.getElementById('addThree').onclick = AddThree
document.getElementById('addNine').onclick = AddNine
document.getElementById('mTwo').onclick = DeductTwo


function SetZero() {
    sum = 0
    result.innerText = sum;
}

function AddThree() {
    sum += 3
    result.innerHTML = sum
}

function AddNine() {
    sum += 9
    result.innerHTML = sum
}

function DeductTwo() {
    sum -= 2
    result.innerHTML = sum
}