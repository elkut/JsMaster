const userInput = document.querySelector('input')
const btns = Array.from(document.querySelectorAll('button'))

let num = 0;
let operator = '';
let isNewEntry = false;

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const key = e.target.textContent;

        const actionId = e.target.id

        if (actionId === 'clear') {
            resetAll()
            return;
        }
        else if (actionId === 'remove' && isNewEntry) {
            if (userInput.value !== '') {
                userInput.value = removeLastChar(userInput.value)
            }
            return;
        }

        switch (key) {
            case '+':
                handleOperator(operator, '+')
                break;
            case '=':
                displayResult(operator);
                operator = '';
                break;
            case '-':
                handleOperator(operator, '-')
                break;
            case '/':
                handleOperator(operator, '/')
                break;
            case 'x':
                handleOperator(operator, 'x')
                break;
            default:
                if (isNewEntry) {
                    userInput.value = ''
                    isNewEntry = false
                }

                if (String(key) === '.' && userInput.value.includes('.')) {
                    break;
                }

                userInput.value += String(key)
        } // switch end
    }) // addEventListener end
}) // forEach end

function displayResult(type) {
    const current = Number(userInput.value);
    if (type === '+') {
        userInput.value = num + current
    }
    else if (type === '-') {
        userInput.value = num - current;
    }
    else if (type === '/') {
        current === 0
            ? userInput.value = 'EEOR'
            : userInput.value = num / current;
    }
    else if (type === 'x') {
        userInput.value = num * current;
    }


    if (userInput.value !== 'EEOR')
        num = Number(userInput.value)

    isNewEntry = true
}



function handleOperator(op, type) {
    const current = userInput.value === '' ? 0 : Number(userInput.value)

    if (op === '') {
        num = current;
    }
    else if (!isNewEntry) {
        displayResult(op)
    }
    operator = type
    isNewEntry = true
}

function resetAll() {
    operator = '';
    userInput.value = '';
    num = 0
    isNewEntry = true
}

function removeLastChar(input) {
    return input.slice(0, -1)
}