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

    // factorial
    factorial = document.querySelector('.factorial'),

    // math functions
    mathFunctionsBtn = document.querySelectorAll('.math-functions'),

    // dot button
    dotBtn = document.querySelector('#dot')




// event ha

// delete all btn ( AC )
deleteAllBtn.addEventListener("click", deleteAllInputValues)

// delete last btn ( DEL )
deleteLastBtn.addEventListener('click', deleteLastInputValue)

// equal ( = )
equal.addEventListener('click', answerPage)


// function ha

// TITLE: entekhab adad
// adad mored nazaro entekhab mikone va ba function changeDisplay on ro be input ezafe mikone
// agar meqdar count 0 nabod on ro sefr mikone
function chooseNumber() {
    numbersEl.forEach(item => {
        item.addEventListener("click", () => {
            changeDisplay(item.textContent)
            if (count != 0) {
                count = 0
            }

        })
    })
    dotBtn.addEventListener('click', () => {
        if (inputEL.value != '' && count < 1) {
            changeDisplay(dotBtn.textContent)
            count++
        }
    })

}

let count = 0
// TITLE: entekhab operator
// ba click operator ha meqdareshon ro ba estefade az function changeDisplay namayesh mide
// be meqdar operator yek done ezafe mishe ke bishtar az 1 bar estefade nashan
function chooseOperator() {
    operatorBtn.forEach(item => {
        item.addEventListener("click", () => {
            if (count < 1) {
                changeDisplay(item.textContent)
                count++
            }
        })
    })
}

// TITLE: ChangeDisplay Function
// har dokme ke click beshe , meqdaresh vared input mishe + harchi ke az qabl bode
function changeDisplay(button) {
    inputEL.value += button
}

// TITLE: delete all input text ( AC )
// value input ro khali mikone
function deleteAllInputValues() {
    inputEL.value = ''
}

// TITLE: delete last input text ( DEL )
// akharin addad ya alamat ke to input hast ro pak mikone
function deleteLastInputValue() {
    inputEL.value = inputEL.value.slice(0, -1)
}
let answer = ''
// TITLE: answer to the Eq ( = )
// javab moadele ro to input neshon mide
function answerPage() {
    if (inputEL.value === '') {
        inputEL.value = ''
    } else {
        answer = eval(inputEL.value)
        inputEL.value = answer
    }
}

// TITLE: math functions:
// bad az click har dokme az function hay riazi, amaliat marbot be onha anjam mishe
// va vared input value mishe
function mathFunctions() {

    mathFunctionsBtn.forEach(item => {
        item.addEventListener('click', () => {
            // logarithm
            if (item.textContent == "log") {
                if (inputEL.value != '') {
                    inputEL.value = Math.log2(inputEL.value)
                }
                // Radian
            } else if (item.textContent == 'Rad') {
                if (inputEL.value != '') {
                    inputEL.value = inputEL.value * Math.PI / 180
                }

                // Factorial
            } else if (item.textContent == '!') {
                if (inputEL.value != '') {
                    inputEL.value = fact(inputEL.value)
                }

                // Sin
            } else if (item.textContent == "Sin") {
                if (inputEL.value != '') {
                    inputEL.value = Math.sin(inputEL.value)

                    // Root
                } else if (item.textContent == "Root") {
                    if (inputEL.value != '') {
                        inputEL.value = Math.sqrt(inputEL.value)
                    }
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


