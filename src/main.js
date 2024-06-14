const button = document.querySelector('.burger');
const nav = document.querySelector('.header-nav')
const navItems = document.querySelectorAll('.nav-menu-item a');
console.log(navItems)

button.addEventListener('click', () => {
    nav.classList.toggle('active')
    button.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('active')
    })
})