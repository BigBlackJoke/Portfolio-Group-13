const button = document.querySelector('.burger');
const nav = document.querySelector('.header-nav');
const navItems = document.querySelectorAll('.nav-menu-item a');
const darkMode = document.querySelector('.header');
const darkBtn = document.querySelector('.night-mode-checkbox');
button.addEventListener('click', () => {
  nav.classList.toggle('active');
  button.classList.toggle('active');
});
navItems.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.remove('active');
    button.classList.remove('active');
  });
});
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  if (savedTheme === 'dark') {
    darkMode.classList.add('dark-mode');
    darkBtn.checked = true;
  }
}
darkBtn.addEventListener('change', event => {
  if (event.target.checked) {
    darkMode.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    darkMode.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});