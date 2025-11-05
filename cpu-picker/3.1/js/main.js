const amd = document.querySelectorAll('.AMD')

Array.from(amd).forEach(element => element.addEventListener('click', bestBgtCPU))

function bestBgtCPU(click) {
    if (click.target.classList.contains('5')) {
        document.querySelector('#ryzen5').classList.toggle('hidden')
    }
    else {
        alert("WRONG!!!!")
        document.querySelector('#ryzen5').classList.add('hidden')
    }
}