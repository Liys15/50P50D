const left = document.querySelector('.left');
const right = document.querySelector('.right');


left.addEventListener('mouseenter', () => {
  left.classList.add('hover');
  right.classList.add('other');
})

left.addEventListener('mouseleave', () => {
  left.classList.remove('hover');
  right.classList.remove('other');
})

right.addEventListener('mouseenter', () => {
  right.classList.add('hover');
  left.classList.add('other');
})

right.addEventListener('mouseleave', () => {
  right.classList.remove('hover');
  left.classList.remove('other');
})