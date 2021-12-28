const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const tgData = counter.dataset.target;
    // console.log(tgData)

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            counter.innerText = `${Math.ceil(tgData/50*(i+1))}`;
        }, 50 * i);
    }
    // 不使用嵌套，理解更容易的方法: for循环内调用setTimeout(f,delay)

})