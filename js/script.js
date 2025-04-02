let input = document.querySelector('#input-search');
let container = document.querySelector('.container-fluid');
let mobile = document.querySelector('.mobile');
let menu = document.querySelector('navbar-collapse');
let btn = document.querySelector('.close');

input.addEventListener('focus',() => {
  input.classList.remove('add-Icon-Bag');
  input.style.paddingLeft = "15px";
});

input.addEventListener('blur',() => {
  input.classList.add('add-Icon-Bag');
  input.style.paddingLeft = "45px";
});

mobile.addEventListener('click', () => {
  container.classList.toggle('add');
});

btn.addEventListener('click', () => {
  if (container.getAttribute('class') === 'container-fluid add') {
    container.classList.remove('add');
  }
});








