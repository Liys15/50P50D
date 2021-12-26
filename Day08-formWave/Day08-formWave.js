// 只能实现label单词整体的变化，没有wave(波浪)效果
// const labels = document.querySelectorAll('.form-control label');
// const inputs = document.querySelectorAll('.form-control input');

// inputs.forEach((input, index) => {
//   console.log(input, index);
//   input.onfocus = () => {
//     labels[index].classList.add('active');
//   }
//   input.onblur = () => {
//     labels[index].classList.remove('active');
//   }
// })

//字符数组拆分为单个字母的<span>行内元素
//通过transition-delay样式实现wave效果
const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
    .join('');
})