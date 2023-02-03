// Variable ha

// addad ha
let numbersEl = document.querySelectorAll('.numbers'),

    // input
    inputEL = document.querySelector('#answer-input'),

    // delete all button
    deleteAllBtn = document.querySelector('#delete-all'),

    // delete last btn
    deleteLastBtn = document.querySelector('#delete-last')




// event ha

// delete all btn
deleteAllBtn.addEventListener("click", deleteAllInputValues)

// function ha

// TITLE: entekhab adad
// adad mored nazaro entekhab mikone va ba function ChangeDisplay on ro be input ezafe mikone
function chooseNumber() {
    for (let i = 0; i < numbersEl.length; i++) {
        numbersEl[i].addEventListener("click", () => {
            changeDisplay(numbersEl[i])
        })
    }
}

// TITLE: ChangeDisplay Function
// har dokme ke click beshe , meqdaresh vared input mishe + harchi ke az qabl bode
function changeDisplay(button) {
    inputEL.value += button.textContent
}

// TITLE: delete all input text
// value input ro khali mikone
function deleteAllInputValues() {
    inputEL.value = ''
}

// TITLE: load function ha bad az load safhe
document.addEventListener('DOMContentLoaded', () => {
    chooseNumber()
})