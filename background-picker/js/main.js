document.getElementById('purple').onclick = SetPurple
document.getElementById('green').onclick = SetGreen
document.getElementById('blue').onclick = SetBlue
document.getElementById('black').onclick = SetBlack

function SetPurple() {
    //document.body.style.backgroundColor = "rgba(241, 63, 247, 1)";
    document.querySelector('body').style.backgroundColor = 'rgba(241, 63, 247, 1)';
    document.querySelector('body').style.color = 'white';
}

function SetGreen() {
    document.querySelector('body').style.backgroundColor = 'rgba(0, 253, 81, 1)';
    document.querySelector('body').style.color = 'white';
}

function SetBlue() {
    document.querySelector('body').style.backgroundColor = 'rgba(0, 254, 255)';
    document.querySelector('body').style.color = 'white';
}

function SetBlack() {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
}