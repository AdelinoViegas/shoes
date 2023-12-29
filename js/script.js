let input = document.querySelector('#input-search');

input.onfocus = ()=>{
    input.classList.remove('add-Icon-Bag');
    input.style.paddingLeft = "15px";
}

input.onblur = ()=>{
    input.classList.add('add-Icon-Bag');
    input.style.paddingLeft = "45px";
}