const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    
    if (boxTop<window.innerHeight) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}