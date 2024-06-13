const button = document.querySelector('.burger');
const nav = document.querySelector('.header-nav')
const navItems = document.querySelectorAll('.nav-menu-item a');
const darkMode = document.querySelector('.header')
const darkBtn = document.querySelectorAll('#checkbox')
const darkSpan = document.querySelector('.span')


button.addEventListener('click', () => {
    nav.classList.toggle('active')
    button.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('active')
    })
})

darkBtn.forEach(btn => {
    btn.addEventListener('change', () => {
        darkMode.classList.toggle('dark-mode');
        darkSpan.classList.toggle('dark-span')
    });
});