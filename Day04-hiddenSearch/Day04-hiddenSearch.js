const btn = document.querySelector('.searchBtn');
const ipt = document.querySelector('input');
const schWgt = document.querySelector('.searchWidget');

btn.addEventListener('click', () => {
  // if (schWgt.classList.contains('show')){
  //   schWgt.classList.remove('show');
  // } else {
  //   schWgt.classList.add('show');
  // }
  // 等效于toggle函数
  schWgt.classList.toggle('show');

  ipt.focus();
})