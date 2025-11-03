const ryzen5 = document.querySelector('#ryzen5')
const ryzen7 = document.querySelector('#ryzen7')
const ryzen9 = document.querySelector('#ryzen9')

document.getElementById('AMD5').addEventListener('click', dispayRyzen5)
document.getElementById('AMD7').addEventListener('click', dispayRyzen7)
document.getElementById('AMD9').addEventListener('click', dispayRyzen9)

function dispayRyzen5() {
    ryzen5.classList.toggle('hidden')
    ryzen7.classList.add('hidden')
    ryzen9.classList.add('hidden')
}

function dispayRyzen7() {
    ryzen5.classList.add('hidden')
    ryzen7.classList.toggle('hidden')
    ryzen9.classList.add('hidden')
}

function dispayRyzen9() {
    ryzen5.classList.add('hidden')
    ryzen7.classList.add('hidden')
    ryzen9.classList.toggle('hidden')
}