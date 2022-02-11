const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9){
            code.value = ''
            setTimeout(() => codes[idx+1 === codes.length? idx : idx+1].focus(), 10)
        } else if(e.key === 'Backspace') {
            setTimeout(() => codes[idx === 0? 0 : idx-1].focus(), 10)
        } else if(e.key === 'e' || e.key === '.' || e.key === '-') {
            // <input type='number'>能输入字母e和小数点,要排除这种情况
            setTimeout(() => code.value = '', 10);
        }
    })
})