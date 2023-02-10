// Variables                

// numbers
let numbersEl = document.querySelectorAll('.numbers'),

    // input
    inputEL = document.querySelector('#answer-input'),

    // delete all button
    deleteAllBtn = document.querySelector('#delete-all'),

    // delete last btn
    deleteLastBtn = document.querySelector('#delete-last'),

    // operator
    operatorBtn = document.querySelectorAll('.math-operators'),

    // equal
    equal = document.querySelector('.equal'),

    // math functions
    mathFunctionsBtn = document.querySelectorAll('.math-functions'),

    // dot button
    dotBtn = document.querySelector('#dot'),

    //  number modifiers
    numberModifiers = document.querySelectorAll('.number-modifiers'),

    // theme button
    themeBtn = document.querySelector('#theme-btn'),

    // body
    bodyEl = document.body




// events

// delete all btn ( AC )
deleteAllBtn.addEventListener("click", () => {
    changeDisplay('')
})

// delete last btn ( DEL )
deleteLastBtn.addEventListener('click', deleteLastInputValue)

// equal ( = )
equal.addEventListener('click', answerFunction)

// theme btn
themeBtn.addEventListener("click", () => {
    bodyEl.classList.toggle('light-theme')
    if (bodyEl.classList.contains('light-theme')) {
        themeBtn.children[0].classList.add('bxs-sun')
    } else {
        themeBtn.children[0].classList.remove('bxs-sun')
    }
})

// functions

// TITLE: choose Number
// chooses the the clicked number and displays it on inputEL.value wit addToDisplay function
// if count is not 0, it sets it to 0
function chooseNumber() {
    numbersEl.forEach(item => {
        item.addEventListener("click", () => {
            addToDisplay(item.textContent)
            count = 0
        })
    })

    // " ( "
    // " )" 
    // " . "
    numberModifiers.forEach(item => {
        item.addEventListener("click", () => {
            if (item.textContent == '(' || item.textContent == ')') {
                addToDisplay(item.textContent)
            } else if (count < 1 && item.textContent == '.' && inputEL.value != '') {
                addToDisplay(item.textContent)
                count++
            }
        })
    })

}


// TITLE: keyboard events
// you can get number 0 - 9 keyboard
// by pressing backspace you can delete one by on
function keyboardEvents() {

    // keyboard event
    window.addEventListener('keydown', (e) => {

        // 0-9 only
        if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
            addToDisplay(e.key)
        }

        // backspace    
        else if (e.key == 'Backspace') {
            deleteLastInputValue()
        }
    })
}
let count = 0
// TITLE: choose operator
// clicking on operators will display that operator data with addToDisplay function
// adds 1 to count so the condition is not correct and the operator would print only one time
function chooseOperator() {
    operatorBtn.forEach(item => {
        item.addEventListener("click", () => {
            if (count < 1 && inputEL.value != '' && item.getAttribute('data') != '-') {
                addToDisplay(item.getAttribute('data'))
                count++
            } else if (count < 1 && item.getAttribute('data') == '-') {
                addToDisplay(item.textContent)
                count++
            }
        })
    })
}

// TITLE: addToDisplay Function
// adds the argument to inputEL.value + any thing that was already in the input
function addToDisplay(button) {
    inputEL.value += button
}

// TITLE: changeDisplay
// adds the argument to inputEL.value 
function changeDisplay(name) {
    inputEL.value = name
}


// TITLE: delete last input text ( DEL )
// deletes the last string that is in the input
function deleteLastInputValue() {
    changeDisplay(inputEL.value.slice(0, -1))
}

let answer = ''
// TITLE: calculate what is in the string
// shows the answer in input after calculating it with eval() method
function answerFunction() {
    if (inputEL.value == "") {
        changeDisplay('')
    } else {
        answer = eval(inputEL.value)
        changeDisplay(answer)
    }
}

// TITLE: changes the entered value to Degree
function toDegree() {
    return inputEL.value * Math.PI / 180
}

// TITLE: math functions
// after clicking each function the number in input will go into the built-in function of JavaScript 
// and will be displayed in the input
function mathFunctions() {

    mathFunctionsBtn.forEach(item => {
        item.addEventListener('click', () => {

            // logarithm 2
            if (item.getAttribute('data') == "log2") {
                if (inputEL.value != '') {
                    changeDisplay(Math.log2(inputEL.value))
                }

                //logarithm 10
            } else if (item.getAttribute('data') == "log10") {
                if (inputEL.value != '') {
                    changeDisplay(Math.log10(inputEL.value))
                }
            }

            // Radian
            else if (item.textContent == 'rad') {
                if (inputEL.value != '') {
                    changeDisplay(toDegree())
                }
            }

            // Factorial
            else if (item.textContent == 'x!') {
                if (inputEL.value != '') {
                    changeDisplay(fact(inputEL.value))
                }


            }

            // Sin
            else if (item.textContent == "sin") {
                if (inputEL.value != '') {
                    changeDisplay(Math.sin(toDegree()))
                }


            }

            // Cos
            else if (item.textContent == "cos") {
                if (inputEL.value != '') {
                    changeDisplay(Math.cos(toDegree()))
                }


            }

            // Tan
            else if (item.textContent == "tan") {
                if (inputEL.value != '') {
                    changeDisplay(Math.tan(toDegree()))
                }


            }

            // Cot
            else if (item.textContent == "cot") {
                if (inputEL.value != '') {
                    changeDisplay(1 / Math.tan(toDegree()))
                }


            }

            // Root 2
            else if (item.getAttribute('data') == "root2") {
                if (inputEL.value != '') {
                    changeDisplay(Math.sqrt(inputEL.value))
                }

            }

            // Root 3
            else if (item.getAttribute('data') == "root3") {
                if (inputEL.value != '') {
                    changeDisplay(Math.cbrt(inputEL.value))
                }
            }
        })
    })

}

// TITLE: factorial ( ! )
// gets the number in input and multiply it by one number lesser than that number 
// this function goes until the number is 0 or 1
function fact(e) {
    if (e == 0 || e == 1) {
        return 1
    } else {
        return e * fact(e - 1)
    }
}


// TITLE: load function ha bad az load safhe
document.addEventListener('DOMContentLoaded', () => {
    chooseNumber()
    chooseOperator()
    mathFunctions()
    keyboardEvents()
})
