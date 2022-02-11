const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

createBoxes()

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++){
            const box = document.createElement('div')
            box.style.backgroundImage = `url('./giphy.gif')`
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            box.classList.add('box')
            boxesContainer.appendChild(box)
        }
    }
}