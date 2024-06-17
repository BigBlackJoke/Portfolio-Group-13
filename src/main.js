import './js/my-projects';
import './js/faq';
import './js/header';
import './js/reviews';
import './js/work-together';

const darkBtn = document.querySelector('.night-mode-checkbox');
const sections = document.querySelectorAll('section');

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  if (savedTheme === 'dark') {
    sections.forEach(section => {
      section.classList.add('dark-mode');
    });
    darkBtn.checked = true;
  }
}

darkBtn.addEventListener('change', event => {
  if (event.target.checked) {
    sections.forEach(section => {
      section.classList.add('dark-mode');
    });
    localStorage.setItem('theme', 'dark');
  } else {
    sections.forEach(section => {
      section.classList.remove('dark-mode');
    });
    localStorage.setItem('theme', 'light');
  }
});