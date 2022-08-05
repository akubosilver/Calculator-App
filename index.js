import Calculator from "./calculator.js";

// getting all my elements needed from the html page
const normalTheme = document.querySelector('#input1');
const lightTheme = document.querySelector('#input2');
const darkTheme = document.querySelector('#input3');
const numberElements = document.querySelectorAll('[data-number]');
const operatorElements = document.querySelectorAll('[data-operator]');
const deleteBtn = document.querySelector('[data-delete]');
const clearAllBtn = document.querySelector('[data-clear]');
const equalBtn = document.querySelector('[data-equal]');
const previousNumber = document.querySelector('[data-previousNum]');
const currentNumber = document.querySelector('[data-currentNum]');

// changing calculator themes with both clicks and keyboard events
document.addEventListener('keydown', (e) => {
    if(e.key === 'l') {
        if(document.querySelector('body').classList.contains('light')) return
        if(document.querySelector('body').classList.contains('dark')) {
            document.querySelector('body').classList.remove('dark')
        }
        document.querySelector('body').classList.add('light')
    }
})
lightTheme.addEventListener('click', () => {
    if(document.querySelector('body').classList.contains('light')) return
    if(document.querySelector('body').classList.contains('dark')) {
        document.querySelector('body').classList.remove('dark')
    }
    document.querySelector('body').classList.add('light')
})
document.addEventListener('keydown', (e) => {
    if(e.key === 'd') {
        if(document.querySelector('body').classList.contains('dark')) return
        if(document.querySelector('body').classList.contains('light')) {
            document.querySelector('body').classList.remove('light')
        } 
        document.querySelector('body').classList.add('dark')
    }
})
darkTheme.addEventListener('click', () => {
    if(document.querySelector('body').classList.contains('dark')) return
    if(document.querySelector('body').classList.contains('light')) {
        document.querySelector('body').classList.remove('light')
    } 
    document.querySelector('body').classList.add('dark')
})
document.addEventListener('keydown', (e) => {
    if(e.key === 'n') {
        document.querySelector('body').classList.remove('light')
        document.querySelector('body').classList.remove('dark');
    }
})
normalTheme.addEventListener('click', () => {
    document.querySelector('body').classList.remove('light')
    document.querySelector('body').classList.remove('dark');
})

// creating a calculator 

const calculator = new Calculator(previousNumber, currentNumber)
// hooking the calculator up with both click and keyboard events
numberElements.forEach(numberElement => {
    numberElement.addEventListener('click', () => {
        calculator.appendNumbers(numberElement.innerText)
        calculator.updateDisplay()
    })
})

numberElements.forEach(numberElement => {
    document.addEventListener('keypress', (e) => {
        if(e.key === numberElement.innerText) {
            calculator.appendNumbers(numberElement.innerText)
            calculator.updateDisplay()
        }
    })
})

operatorElements.forEach(operatorElement => {
    operatorElement.addEventListener('click', () => {
        calculator.chooseOperation(operatorElement.innerText)
        calculator.updateDisplay()
    })
})

operatorElements.forEach(operatorElement => {
    document.addEventListener('keypress', (e) => {
        if(e.key === operatorElement.innerText) {
            calculator.chooseOperation(operatorElement.innerText)
            calculator.updateDisplay()
        }
    })
})

equalBtn.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

document.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        calculator.compute()
        calculator.updateDisplay()
    }
})

clearAllBtn.addEventListener('click', () => {
    calculator.clearInput()
    calculator.updateDisplay()
})

document.addEventListener('keydown', (e) => {
    if(e.key === 'Delete') {
        calculator.clearInput()
        calculator.updateDisplay()
    }
})

deleteBtn.addEventListener('click', () => {
    calculator.deleteNumber()
    calculator.updateDisplay()
})

document.addEventListener('keydown', (e) => {
    if(e.key == 'Backspace') {
        calculator.deleteNumber()
        calculator.updateDisplay()
    }
})