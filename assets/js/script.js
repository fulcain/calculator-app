// Variable ha

// addad ha
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
    themeBtn = document.querySelector('#theme-btn')

// body
bodyEl = document.body




// event ha

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

// function ha

// TITLE: entekhab adad
// adad mored nazaro entekhab mikone va ba function addToDisplay on ro be input ezafe mikone
// agar meqdar count 0 nabod on ro sefr mikone
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

let count = 0
// TITLE: entekhab operator
// ba click operator ha meqdareshon ro ba estefade az function addToDisplay namayesh mide
// be meqdar operator yek done ezafe mishe ke bishtar az 1 bar estefade nashan
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
// har dokme ke click beshe , meqdaresh vared input mishe + harchi ke az qabl bode
function addToDisplay(button) {
    inputEL.value += button
}

// TITLE: changeDisplay
// meqdar display = argument qarare migire
function changeDisplay(name) {
    inputEL.value = name
}


// TITLE: delete last input text ( DEL )
// akharin addad ya alamat ke to input hast ro pak mikone
function deleteLastInputValue() {
    changeDisplay(inputEL.value.slice(0, -1))
}
let answer = ''
// TITLE: answer to the Eq ( = )
// javab moadele ro to input neshon mide
function answerFunction() {
    if (inputEL.value === "") {
        changeDisplay('')
    } else {
        answer = eval(inputEL.value)
        changeDisplay(answer)
    }
}

function toDegree() {
    return inputEL.value * Math.PI / 180
}

// TITLE: math functions:
// bad az click har dokme az function hay riazi, amaliat marbot be onha anjam mishe
// va vared input value mishe
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

                // Factorial
            } else if (item.textContent == 'x!') {
                if (inputEL.value != '') {
                    changeDisplay(fact(inputEL.value))
                }

                // Sin
            } else if (item.textContent == "sin") {
                if (inputEL.value != '') {
                    changeDisplay(Math.sin(toDegree()))
                }

                // Cos
            } else if (item.textContent == "cos") {
                if (inputEL.value != '') {
                    changeDisplay(Math.cos(toDegree()))
                }

                // Tan
            } else if (item.textContent == "tan") {
                if (inputEL.value != '') {
                    changeDisplay(Math.tan(toDegree()))
                }

                // Cot
            } else if (item.textContent == "cot") {
                if (inputEL.value != '') {
                    changeDisplay(1 / Math.tan(toDegree()))
                }

                // Root 2
            } else if (item.getAttribute('data') == "root2") {
                if (inputEL.value != '') {
                    changeDisplay(Math.sqrt(inputEL.value))
                }
                // Root 3
            } else if (item.getAttribute('data') == "root3") {
                if (inputEL.value != '') {
                    changeDisplay(Math.cbrt(inputEL.value))
                }
            }
        })
    })

}

// TITLE: factorial ( ! )
// factorial addad ha ro hesab mikone
function fact(e) {
    if (e == 0) {
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
})
