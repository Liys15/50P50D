const playGameBtn = document.querySelector('.play-game-btn')
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn')
const screens = document.querySelectorAll('.screen')
const timeEl = document.querySelector('.time')
const scoreEl = document.querySelector('.score')
const messageEl = document.querySelector('.message')
const gameScreen = document.querySelector('.game-container')

const insectsList = ['fly', 'mosquito', 'spider', 'roach']
let choosedInsect
let startTime
let score = 0
let messageShowed = false

setInsectsBtn() //为四个选择按钮设置图片和文字样式

playGameBtn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

chooseInsectBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        screens[1].classList.add('up')
        choosedInsect = insectsList[idx]

        startTime = new Date()
        setInterval(updateTime, 1000)

        setTimeout(createInsects, 1000)
    })
})

function createInsects() {
    const nums = Math.ceil(Math.random() * 1) //随机生成1个insect

    for (let i = 0; i < nums; i++) {
        const insectEl = document.createElement('div')
        const insectImg = document.createElement('img')
        const location = getRandomLocation()

        insectEl.classList.add('insect')
        insectEl.appendChild(insectImg)
        insectImg.src = `${'./img/' + choosedInsect + '.png'}`
        insectImg.style.cssText = `
        transform: rotate(${Math.ceil(Math.random()*360)}deg);
        `

        insectEl.style.cssText = `
        top: ${location.y}px;
        left: ${location.x}px;
        `
        insectEl.addEventListener('click', catchInsect)
        gameScreen.appendChild(insectEl)
    }
}

function catchInsect() {
    this.classList.add('caught')
    setTimeout(() => {
        this.remove()
    }, 300);
    setTimeout(createInsects, 1000)
    setTimeout(createInsects, 1500)
    score = score + 1
    updateScore()
    if (score > 5 && !messageShowed) {
        setTimeout(() => {
            messageEl.classList.add('visible')
        }, 0);
        setTimeout(() => {
            messageEl.classList.remove('visible')
        }, 5000);
        messageShowed = true
    }
}

function updateTime() {
    const nowTime = new Date(); //新建一个日期对象，默认现在的时间

    const difftime = (nowTime.getTime() - startTime.getTime()) / 1000; //计算时间差,并把毫秒转换成秒

    const days = parseInt(difftime / 86400); // 天  24*60*60
    const hours = parseInt(difftime / 3600) - 24 * days; // 小时 60*60 总小时数-过去的小时数=现在的小时数 
    const minutes = parseInt(difftime % 3600 / 60); // 分钟 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
    const seconds = parseInt(difftime % 60); // 以60秒为一整份 取余 剩下秒数

    timeEl.innerHTML = 'Time: ' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
}

function updateScore() {
    scoreEl.innerHTML = `
    Score: ${score}
    `
}

function setInsectsBtn() {
    chooseInsectBtns.forEach((btn, idx) => {
        const text = document.createElement('p')
        const img = document.createElement('img')
        text.innerHTML = insectsList[idx]
        text.style.fontSize = '16px'

        img.alt = insectsList[idx]
        img.src = `${'./img/' + insectsList[idx] + '.png'}`
        img.style.cssText = `
            background-size: cover;
            background-position: center center;
            width: 100px;
            height: 100px;
            `
        btn.appendChild(text)
        btn.appendChild(img)
    })
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 160) + 80
    const y = Math.random() * (height - 160) + 80
    return { x, y }
}