const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const replayBtn = document.querySelector('#replay')
const final = document.querySelector('.final')

countDown()

replayBtn.addEventListener('click', countDown)

function countDown() {
    counter.style.visibility = 'visible'
    final.classList.remove('show')

    for(let i=0; i<nums.length; i++) {
        setTimeout(()=>{
            nums[i].classList.add('in')
        }, i*1000)
    }
    setTimeout(()=>{
        counter.style.visibility = 'hidden'
        nums.forEach(num => num.classList.remove('in'))
        final.classList.add('show')
    }, nums.length*1000)
}

