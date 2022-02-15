const navOpenBtn = document.querySelector('.nav-open')
const navCloseBtn = document.querySelector('.nav-close')
const nav = document.querySelector('.nav-container')

navOpenBtn.addEventListener('click', () => {
    nav.classList.add('visible')
})

navCloseBtn.addEventListener('click', () => {
    nav.classList.remove('visible')
})