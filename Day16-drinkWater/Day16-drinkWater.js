const cups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const remained = document.getElementById('remained');
const percentage = document.getElementById('percentage');

cups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        console.log(idx);
        for (let i=0; i < 8; i++) {
            if (i < idx+1) {
                cups[i].classList.add('filled');
            } else {
                cups[i].classList.remove('filled');
            }
        }

        percentage.style.height = (idx+1)/8.0*100 + '%';
        percentage.innerText = (idx+1)/8.0*100 + '%';
        liters.innerText = 2 - 0.25 * (idx+1) + 'L';
        if (idx === 7) {
            remained.style.visibility = 'hidden';
        } else {
            remained.style.visibility = 'visible';
        }
    })
})
// 效果不对
