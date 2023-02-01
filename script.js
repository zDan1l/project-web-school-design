const check = document.querySelector('.menu-toggle input');
const ul = document.querySelector('.menu-navbar nav ul');

check.addEventListener('click', function(){
    ul.classList.toggle('show-ul')
})

const down = document.querySelector('#btn-sublist');
const sublist = document.querySelector('.sub-list');

down.addEventListener('click', function(){
    sublist.classList.toggle('show-sublist')
})