const rangeInput = document.querySelector('.range-container input')
const rangeLabel = document.querySelector('.range-container label')

rangeInput.addEventListener('input', () => {
    rangeLabel.innerHTML = rangeInput.value
    rangeLabel.style.left = `${scale(rangeInput.value, 0, 100, 0 ,300) - 40}px`
})

function scale(num, in_min, in_max, out_min, out_max) {
    return out_min + (out_max - out_min) / (in_max - in_min) * num
}