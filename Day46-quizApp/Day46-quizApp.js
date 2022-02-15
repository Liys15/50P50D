const quiz = [{
        question: 'Which language runs in a web browser?',
        answers: [
            'Java',
            'C',
            'Python',
            'JavaScript'
        ],
        correctAnswer: 3
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            'Central Style Sheets',
            'Cascading Style Sheets',
            'Cascading Simple Sheets',
            'Cars SUVs Sailboats'
        ],
        correctAnswer: 1
    },
    {
        question: 'What does HTML stand for?',
        answers: [
            'Hypertext Markup Language',
            'Hypertext Markdown Language',
            'Hyperloop Machine Language',
            'Helicopters Terminals Motorboats Lamborginis'
        ],
        correctAnswer: 0
    },
    {
        question: 'What year was JavaScript launched?',
        answers: [
            '1996',
            '1995',
            '1994',
            'none of the above'
        ],
        correctAnswer: 1
    },
]

const submitBtn = document.querySelector('#submit')
const answers = document.querySelectorAll('.answer')
const quizHeader = document.querySelector('.quiz-header')

let curIdx = 0
let yourAnswer = undefined
let yourAnswers = []

showQuestion(0)

answers.forEach((ans, idx) => {
    ans.addEventListener('input', () => {
        yourAnswer = idx
    })
})

submitBtn.addEventListener('click', () => {
    if ((curIdx < quiz.length - 1) && (yourAnswer !== undefined)) {
        curIdx++
        yourAnswers.push(yourAnswer)
        showQuestion(curIdx)
    } else if (curIdx === quiz.length - 1) {
        curIdx++
        yourAnswers.push(yourAnswer)
        showResult()
    } else if (curIdx === quiz.length) {
        curIdx = 0
        yourAnswer = undefined
        yourAnswers = []
        showQuestion(curIdx)
    }
})

function showQuestion(idx) {
    const questionText = document.querySelector('#question')

    quizHeader.children[1].style.display = 'block'
    submitBtn.innerHTML = 'Submit'

    questionText.innerHTML = quiz[idx].question
    answers[0].nextElementSibling.innerText = quiz[idx].answers[0]
    answers[1].nextElementSibling.innerText = quiz[idx].answers[1]
    answers[2].nextElementSibling.innerText = quiz[idx].answers[2]
    answers[3].nextElementSibling.innerText = quiz[idx].answers[3]

    yourAnswer = undefined
    answers.forEach((ans) => {
        ans.checked = false
    })
}

function showResult() {
    quizHeader.children[0].innerHTML = `
    You answered 
    ${yourAnswers.filter((ans, idx) => {
        if (ans === quiz[idx].correctAnswer) {
            return true
        } else {
            return false
        }
    }).length}
    /
    ${quiz.length}
    questions correctly!
    `
    quizHeader.children[1].style.display = 'none'
    submitBtn.innerHTML = 'Reload'
}