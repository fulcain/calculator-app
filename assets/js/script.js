// Variable ha

// addad ha
let numbersEl = document.querySelectorAll('.numbers'),
    inputEL = document.querySelector('#answer-input'),
    deleteAllBtn = document.querySelector('#delete-all')




// event ha
deleteAllBtn.addEventListener("click", deleteInputValue )


// function ha

// TITLE: ChangeDisplay Function
// har dokme numbers ke click beshe , meqdaresh vared input mishe + harchi ke az qabl bode
function ChangeDisplay() {
    // numbers
    numbersEl.forEach(item => {
        item.addEventListener('click', () => {
            inputEL.value += item.textContent   
        })
    })

}

// TITLE: delete input text
// value input ro khali mikone
function deleteInputValue() {
    inputEL.value = ''
}

// TITLE: load function ha bad az load safhe
document.addEventListener('DOMContentLoaded', () => {
    ChangeDisplay()
})


// TITLE: factorial
function fact(n) {
    if (n == 0) {
        return 1
    } else {
        return n * fact(n - 1)
    }
}
