const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let currentProgress = 1;

btnNext.addEventListener('click', () => {
    currentProgress++;
    if (currentProgress > circles.length) {
        currentProgress = circles.length;
    }
    update();
})

btnPrev.addEventListener('click', () => {
    currentProgress--;
    if (currentProgress < 1) {
        currentProgress = 1;
    }
    update();
})

function update() {
    if (currentProgress === 1) {
        btnPrev.disabled = true;
    } else if (currentProgress === circles.length) {
        btnNext.disabled = true;
    } else {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
    progress.style.width = (currentProgress-1)/(circles.length-1)*100 + "%";

    circles.forEach((circle, idx) => {
        if (idx < currentProgress) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
}