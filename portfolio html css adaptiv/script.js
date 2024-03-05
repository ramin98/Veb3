let burger = document.querySelector('.burger-menu')
let exit = document.querySelector('.exit')
let menu = document.querySelector('header nav ul')


burger.addEventListener('click', function(){
       menu.classList.add('open-menu')
})

exit.addEventListener('click', function(){
       menu.classList.remove('open-menu')
})