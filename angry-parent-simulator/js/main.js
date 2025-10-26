/*
document.getElementById('yell').addEventListener('click', showName);

function showName() {
    let name = document.querySelector('#firstName').value + ' ' +
        document.querySelector('#firstMiddle').value + ' ' +
        document.querySelector('#lastMiddle').value + ' ' +
        document.querySelector('#lastName').value

    document.querySelector('#placeToYell').innerText = name
}
*/

const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('click', run)

function run() {
    const fName = document.querySelector('#firstName').value
    const fMiddle = document.querySelector('#firstMiddle').value
    const lMiddle = document.querySelector('#lastMiddle').value
    const lName = document.querySelector('#lastName').value

    //document.querySelector('#placeToYell').innerText = fName + ' ' + fMiddle + ' ' + lMiddle + ' ' + lName
    let yellText = `${fName}  ${fMiddle}  ${lMiddle} ${lName}`

    document.querySelector('#placeToYell').innerHTML = yellText;

    let yellThis = new SpeechSynthesisUtterance(yellText);

    synth.speak(yellThis);
}