const resultEl = document.querySelector('#result')
const clipboardBtn = document.querySelector('#clipboard')
const generateBtn = document.querySelector('#generate')

const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWER = 'abcdefghijklmnopqrstuvwxyz'
const NUMBER = '1234567890'
const SYMBOL = '`-=[]\\;\',./~!@#$%^&*()_+{}|:"?'


generateBtn.addEventListener('click', () => {
    const length = document.querySelector('#length').value
    const setUppercase = document.querySelector('#uppercase').checked
    const setLowercase = document.querySelector('#lowercase').checked
    const setNumbers = document.querySelector('#numbers').checked
    const setSymbols = document.querySelector('#symbols').checked

    let result = ''
    let pool = ''

    if(setUppercase) {
        pool += UPPER
    }
    if(setLowercase) {
        pool += LOWER
    }
    if(setNumbers) {
        pool += NUMBER
    }
    if(setSymbols) {
        pool += SYMBOL
    }
    
    for(let i=0; i<length; i++) {
        // result += pool[Math.floor(Math.random()*pool.length)]
        if(i%4===0) {
            result += LOWER[Math.floor(Math.random()*LOWER.length)]
        } else if(i%4===1) {
            result += UPPER[Math.floor(Math.random()*UPPER.length)]
        } else if(i%4===2) {
            result += NUMBER[Math.floor(Math.random()*NUMBER.length)]
        } else {
            result += SYMBOL[Math.floor(Math.random()*SYMBOL.length)]
        }
    }
    console.log(result)

    resultEl.innerHTML = result
})

// 复制到剪贴板的操作
clipboardBtn.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})