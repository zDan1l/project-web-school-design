const check = document.querySelector('.menu-toggle input');
const ul = document.querySelector('.menu-navbar nav ul');

check.addEventListener('click', function(){
    ul.classList.toggle('show-ul')
})