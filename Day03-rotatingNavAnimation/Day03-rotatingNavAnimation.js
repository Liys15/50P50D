const container = document.querySelector('.container');
const btnClose = document.getElementById('close');
const btnOpen = document.getElementById('open');

btnClose.addEventListener('click', () => {
  container.classList.remove('show-nav');
})

btnOpen.addEventListener('click', () => {
  container.classList.add('show-nav');
})
