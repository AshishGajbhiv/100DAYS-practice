const openIcon = document.querySelector('#openIcon')
const closeIcon = document.querySelector('#closeIcon');
const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')
const btn = document.querySelector('.menuLogin')
openIcon.addEventListener('click',()=>{
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block'
    menu.style.display = 'block';
    btn.style.display = 'block';
})
closeIcon.addEventListener('click',()=>{
    menu.style.display = 'none';
    closeIcon.style.display = 'none'
    openIcon.style.display = 'block'
})