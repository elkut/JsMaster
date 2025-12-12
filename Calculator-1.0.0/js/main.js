const userInput = document.querySelector('input')
const btns = Array.from(document.querySelectorAll('button'))

let inputValue = '';
let result = 0;
let num = 0;
let operator = '';

//console.log(btns)

userInput.addEventListener('input', (e) => {
    e.preventDefault();
    inputValue = e.target.value.trim();
})

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (inputValue !== '') {
            inputValue = inputValue.replaceAll(/[a-z]/ig, "")
        }

        switch (e.target.innerHTML) {
            case '+':
                num += Number(inputValue);
                userInput.value = '';
                operator = '+'
                break;
            case '=':
                displayResult(operator);
                break;
            case '-':
                num = Number(inputValue);
                userInput.value = '';
                operator = '-'
                break;
            case '/':
                num = Number(inputValue);
                userInput.value = '';
                operator = '/'
                break;
            case 'x':
                num = Number(inputValue);
                userInput.value = '';
                operator = 'x'
                break;
            default:
                userInput.value += String(e.target.innerHTML)
                inputValue = userInput.value
        }
    })
})

function displayResult(type) {


    //console.log(num)
    if (type === '+') {
        userInput.value = num + Number(inputValue)
    }
    if (type === '-') {
        userInput.value = num - Number(inputValue)
    }
    if (type === '/') {
        userInput.value = num / Number(inputValue)
    }
    if (type === 'x') {
        userInput.value = num * Number(inputValue)
    }

    //keep the current result
    inputValue = userInput.value
    num = 0;
}
