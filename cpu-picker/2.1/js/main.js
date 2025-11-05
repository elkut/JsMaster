const amd5 = document.querySelector('#ryzen5');
const amd7 = document.querySelector('#ryzen7');
const amd9 = document.querySelector('#ryzen9');

document.getElementById('AMD5').addEventListener('click', DisplayRyzen5)
document.getElementById('AMD7').addEventListener('click', DisplayRyzen7)
document.getElementById('AMD9').addEventListener('click', DisplayRyzen9)

function DisplayRyzen5() {
    amd5.classList.toggle('hidden')
    amd7.classList.add('hidden')
    amd9.classList.add('hidden')
}

function DisplayRyzen7() {
    amd7.classList.toggle('hidden')
    amd5.classList.add('hidden')
    amd9.classList.add('hidden')
}

function DisplayRyzen9() {
    amd9.classList.toggle('hidden')
    amd5.classList.add('hidden')
    amd7.classList.add('hidden')
}