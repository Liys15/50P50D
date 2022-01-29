const speedEl = document.querySelector('#speed')
const textEl = document.querySelector('#text')

const text = 'We Love Programming!'

// for(let i=0; i<text.length; i++) {
//     setTimeout(() => {
//         textEl.innerText = text.slice(0, i+1)
//     }, 300);
// }

let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => speed = 300/e.target.value)