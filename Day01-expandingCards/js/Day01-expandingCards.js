const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', ()=>{
        removeActiveClasssesTag();
        item.classList.add('active');
    })
})

function removeActiveClasssesTag() {
    items.forEach(item => {
        item.classList.remove('active');
    })
}