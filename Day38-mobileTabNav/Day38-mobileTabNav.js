const btns = document.querySelectorAll('nav ul li')
const imgs = document.querySelectorAll('.container img')

btns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        btns.forEach(btn => btn.classList.remove('active'))
        btn.classList.add('active')
        imgs.forEach(img => img.classList.remove('show'))
        imgs[idx].classList.add('show')
    })
})