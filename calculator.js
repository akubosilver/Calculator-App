export default class Calculator {
    constructor(previousNumber, currentNumber) {
        this.previousNumber = previousNumber
        this.currentNumber = currentNumber
        this.clearInput()
    }

    clearInput() {
        this.previousNum = ''
        this.currentNum = ''
        this.operator = undefined
    }

    appendNumbers(number) {
        if(number === '.' && this.currentNum.includes('.')) return
        if(this.currentNum.length >= 15) return
        this.currentNum = this.currentNum.toString() + number.toString()
    }

    deleteNumber() {
        this.currentNum = this.currentNum.toString().slice(0, -1)
    }

    chooseOperation(operator) {
        if(this.currentNum === '') return
        if(this.previousNum !== '') {
            this.compute()
        }
        this.operator = operator
        this.previousNum = this.currentNum
        this.currentNum = ''
    }

    getEnteredNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay 
        if(isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if(decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentNumber.innerText = this.getEnteredNumber(this.currentNum)
        if(this.operator != null) {
            this.previousNumber.innerText = `${this.getEnteredNumber(this.previousNum)} ${this.operator}`
        } else  {
            this.previousNumber.innerText = ''
        }
    }

    compute() {
        let computation
        const prev =  parseFloat(this.previousNum)
        const current = parseFloat(this.currentNum)

        if(isNaN(prev) || isNaN(current)) return
        switch (this.operator) {
            case '+' : {
                computation = prev + current
                break
            }
            case '-' : {
                computation = prev - current
                break
            }
            case '*' : {
                computation = prev * current
                break
            }
            case '/' : {
                computation = prev / current
                break
            }
            default: 
            return
        }
        this.currentNum = computation
        this.operator = undefined
        this.previousNum = ''
    }
}