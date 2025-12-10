const userInput = document.querySelector('input')
const btns = Array.from(document.querySelectorAll('button'))

let inputValue = '';
let result = 0;
let num = 0;
let operator = '';

//console.log(btns)

userInput.addEventListener('input', (e) => {
    inputValue = e.target.value;
})

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        switch (e.target.innerHTML) {
            case '+':
                num += parseInt(inputValue);
                userInput.value = '';
                operator = '+'
                //console.log(num, inputValue)
                break;
            case '=':
                displayResult(operator);
                break;
            case '-':
                num = parseInt(inputValue);
                userInput.value = '';
                operator = '-'
                break;
            case '/':
                num = parseInt(inputValue);
                userInput.value = '';
                operator = '/'
                break;
            case 'x':
                num = parseInt(inputValue);
                userInput.value = '';
                operator = 'x'
                break;
            default:
                userInput.value += String(e.target.innerHTML)
                inputValue = parseInt(userInput.value)
        }
    })
})

function displayResult(type) {
    //console.log(num)
    if (type === '+') {
        userInput.value = num + parseInt(inputValue)
    }
    if (type === '-') {
        userInput.value = num - parseInt(inputValue)
    }
    if (type === '/') {
        userInput.value = num / parseInt(inputValue)
    }
    if (type === 'x') {
        userInput.value = num * parseInt(inputValue)
    }

    //keep the current result
    inputValue = userInput.value
    num = 0;
}
