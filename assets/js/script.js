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
deleteAllBtn.addEventListener("click", () => {
    changeDisplay('')
})

// delete last btn ( DEL )
deleteLastBtn.addEventListener('click', deleteLastInputValue)

// equal ( = )
equal.addEventListener('click', answerFunction)


// function ha

// TITLE: entekhab adad
// adad mored nazaro entekhab mikone va ba function addToDisplay on ro be input ezafe mikone
// agar meqdar count 0 nabod on ro sefr mikone
function chooseNumber() {
    numbersEl.forEach(item => {
        item.addEventListener("click", () => {
            addToDisplay(item.textContent)
            if (count != 0) {
                count = 0
            }
        })
    })
    dotBtn.addEventListener('click', () => {
        if (inputEL.value != '' && count < 1) {
            addToDisplay(dotBtn.textContent)
            count++
        }
    })

}

let count = 0
// TITLE: entekhab operator
// ba click operator ha meqdareshon ro ba estefade az function addToDisplay namayesh mide
// be meqdar operator yek done ezafe mishe ke bishtar az 1 bar estefade nashan
function chooseOperator() {
    operatorBtn.forEach(item => {
        item.addEventListener("click", () => {
            if (count < 1 && inputEL.value != '' && item.textContent != '-') {
                addToDisplay(item.textContent)
                count++
            } else if (count < 1 && item.textContent == '-') {
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

// TITLE: math functions:
// bad az click har dokme az function hay riazi, amaliat marbot be onha anjam mishe
// va vared input value mishe
function mathFunctions() {

    mathFunctionsBtn.forEach(item => {
        item.addEventListener('click', () => {
            // logarithm
            if (item.textContent == "log") {
                if (inputEL.value != '') {
                    changeDisplay(Math.log2(inputEL.value))
                }
                // Radian
            } else if (item.textContent == 'Rad') {
                if (inputEL.value != '') {
                    changeDisplay(inputEL.value * Math.PI / 180)
                }

                // Factorial
            } else if (item.textContent == '!') {
                if (inputEL.value != '') {
                    changeDisplay(fact(inputEL.value))
                }

                // Sin
            } else if (item.textContent == "Sin") {
                if (inputEL.value != '') {
                    changeDisplay(Math.sin(inputEL.value))

                }
                // Root
            } else if (item.textContent == "Root") {
                if (inputEL.value != '') {
                    changeDisplay(Math.sqrt(inputEL.value))
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


