/* 
const ryzen5 = document.querySelector('#ryzen5')
const ryzen9 = document.querySelector('#ryzen9')

document.getElementById('AMD5').addEventListener('click', dispayRyzen5)
document.getElementById('AMD9').addEventListener('click', dispayRyzen9)

function dispayRyzen5() {
    ryzen5.classList.toggle('hidden')
}


function dispayRyzen9() {
    alert('NO!')
}
*/

const amds = document.querySelectorAll('.AMD')

Array.from(amds).forEach(element => element.addEventListener('click', bestBugtCPU))

function bestBugtCPU(click) {
    if (click.target.classList.contains('5')) {
        document.querySelector("#ryzen5").classList.toggle('hidden')
    }
    else {
        alert('INCORRECT!!!')
        document.querySelector('#ryzen5').classList.add('hidden')
    }
}