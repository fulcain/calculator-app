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
    factorial = document.querySelector('.factorial')




// event ha

// delete all btn ( AC )
deleteAllBtn.addEventListener("click", deleteAllInputValues)

// delete last btn ( DEL )
deleteLastBtn.addEventListener('click' , deleteLastInputValue )

// equal ( = )
equal.addEventListener('click',answerPage)

// factorial ( ! )
factorial.addEventListener('click', fact)


// function ha

// TITLE: entekhab adad
// adad mored nazaro entekhab mikone va ba function changeDisplay on ro be input ezafe mikone
// agar meqdar operatorCount 0 nabod on ro sefr mikone
function chooseNumber() {
    numbersEl.forEach(item => {
        item.addEventListener("click", () => {
            changeDisplay(item)
            if(operatorCount != 0){
                operatorCount = 0
            }
        })
    })
}

let operatorCount = 0
// TITLE: entekhab operator
// ba click operator ha meqdareshon ro ba estefade az function changeDisplay namayesh mide
// be meqdar operator yek done ezafe mishe ke bishtar az 1 bar estefade nashan
function chooseOperator() {
    operatorBtn.forEach(item => {
        item.addEventListener("click", () => {
            if(operatorCount < 1){
                changeDisplay(item)
                operatorCount++
            }
        })
    })
}

// TITLE: ChangeDisplay Function
// har dokme ke click beshe , meqdaresh vared input mishe + harchi ke az qabl bode
function changeDisplay(button) {
    inputEL.value += button.textContent
}

// TITLE: delete all input text ( AC )
// value input ro khali mikone
function deleteAllInputValues() {
    inputEL.value = ''
}

// TITLE: delete last input text ( DEL )
// akharin addad ya alamat ke to input hast ro pak mikone
function deleteLastInputValue(){
    inputEL.value = inputEL.value.slice(0,-1)
}

// TITLE: answer to the Eq ( = )
// javab moadele ro to input neshon mide
function answerPage (){
    if ( inputEL.value === '' ){
        inputEL.value = ''
    }else {
        let answer = eval(inputEL.value)
        inputEL.value = answer
    }
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
})

    
