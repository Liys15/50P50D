const sendBtn = document.getElementById('send')
const answers = document.querySelectorAll('.answer')

const answerArray = ['Unhappy', 'Neutral', 'Satisfied']
let answerSelected = 2

answers.forEach((ans, idx) => {
    ans.addEventListener('click', () => answersSelector(idx))
})

sendBtn.addEventListener('click', () => {
    const question = document.querySelector('.question')
    const feedback = document.querySelector('.feedback')
    const fbanswer = document.querySelector('.feedback-answer')

    question.classList.add('hide')

    fbanswer.innerText = `Feedback: ${answerArray[answerSelected]}`
    feedback.classList.remove('hide')
})

function answersSelector(idx) {
    answerSelected = idx
    answers.forEach(ans => ans.classList.remove('selected'))
    answers[idx].classList.add('selected')
}